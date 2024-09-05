---
date: 2024-07-15
title: Datawhale AI 夏令营（第二期） Task 2 学习笔记
article: false
category: 
    - 我做
tag: 
    - datawhale
    - AI
---

Task 2: baseline 代码[^1]详解入门深度学习

### 写在前面
通常我们基于神经网络解决机器翻译任务的流程如下：

![流程图](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717174552.png)

### 关于环境配置
`魔塔`平台已经提供了 Ubutu22.04 + CUDA12.1.0 + python3.10 + pytorch2.3.0 + TensorFlow2.14.0 的预装环境。不过为实现 Task 2，我们还需要额外添加一些库。

安装 `torchtext`, `jieba`, `sacrebleu`: 

```python
pip install torchtext    
pip install jieba
pip install sacrebleu
```

安装`spacy`，这会是比较“麻烦”的一步。

- 网络顺畅请使用：https://spacy.io/usage 。（毕竟是外国网站，速度可想而知
- 更推荐使用：离线安装。首先在终端查看更适合自己体质的 spacy 版本：`pip show spacy`。然后去找[对应版本的语言包](https://github.com/explosion/spacy-models/releases)。接下来，将下载到本地的压缩包上传到魔搭平台上的 dataset 目录下（文件较大，上传需要一定时间）。最后，一键安装：`pip install ../dataset/en_core_web_[一个代号]-[版本号]-py3-none-any.whl`

至此，我们便可以在平台上跑代码了。
 
### 关于数据处理
数据处理可以保证模型有效的学习到源语言到目标语言的映射。常见的步骤有：**清洗与规范化**，**分词**，**构建词汇表与词向量**，**序列截断与填充**，**添加特殊标记**，**数据增强**，**数据分割**等。

值得注意的是，在 baseline 中，使用`jieba`与`spacy`分别为中英文进行分词。

```python
en_tokenizer = get_tokenizer('spacy', language='en_core_web_trf')
zh_tokenizer = lambda x: list(jieba.cut(x))
```

并从训练数据中收集所有出现过的词汇，构建*词汇表*，并为每个词分配一个唯一的索引。

同时添加了*特殊标记*：
1. 在序列两端添加`<BOS>`（Sequence Start）和`<EOS>`（Sequence End）标记，帮助模型识别序列的起始和结束。
2. 为不在词汇表中的词添加`<UNK>`（Unknown）标记，使模型能够处理未见过的词汇。

```python
def build_vocab(data: List[Tuple[List[str], List[str]]]):
    en_vocab = build_vocab_from_iterator(
        (en for en, _ in data),
        specials=['<unk>', '<pad>', '<bos>', '<eos>']
    )
    zh_vocab = build_vocab_from_iterator(
        (zh for _, zh in data),
        specials=['<unk>', '<pad>', '<bos>', '<eos>']
    )
    en_vocab.set_default_index(en_vocab['<unk>'])
    zh_vocab.set_default_index(zh_vocab['<unk>'])
    return en_vocab, zh_vocab

class TranslationDataset(Dataset):
    def __init__(self, data: List[Tuple[List[str], List[str]]], en_vocab, zh_vocab):
        self.data = data
        self.en_vocab = en_vocab
        self.zh_vocab = zh_vocab

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        en, zh = self.data[idx]
        en_indices = [self.en_vocab['<bos>']] + [self.en_vocab[token] for token in en] + [self.en_vocab['<eos>']]
        zh_indices = [self.zh_vocab['<bos>']] + [self.zh_vocab[token] for token in zh] + [self.zh_vocab['<eos>']]
        return en_indices, zh_indices
```

在处理批次数据时，进行*序列填充*，确保所有序列长度相同。通常使用`<PAD>`标记填充。

```python
def collate_fn(batch):
    en_batch, zh_batch = [], []
    for en_item, zh_item in batch:
        if en_item and zh_item:  # 确保两个序列都不为空
            # print("都不为空")
            en_batch.append(torch.tensor(en_item))
            zh_batch.append(torch.tensor(zh_item))
        else:
            print("存在为空")
    if not en_batch or not zh_batch:  # 如果整个批次为空，返回空张量
        return torch.tensor([]), torch.tensor([])
    en_batch = nn.utils.rnn.pad_sequence(en_batch, batch_first=True, padding_value=en_vocab['<pad>'])
    zh_batch = nn.utils.rnn.pad_sequence(zh_batch, batch_first=True, padding_value=zh_vocab['<pad>'])
    return en_batch, zh_batch
```

### 关于模型训练
**编码器-解码器框架**在神经机器翻译中有着重要地位。它可以将源语言编码为类似信息传输中的数字信号，然后利用解码器对其进行转换，生成目标语言。

![一个运用编码器解码器结构的例子](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175019.png)

- **编码器**？在当今主流的神经机器翻译系统中，编码器由词嵌入层和中间网络层组成。当输入一串单词序列时，词嵌入层（embedding）会将每个单词映射到多维实数表示空间，这个过程也被称为词嵌入。之后中间层会对词嵌入向量进行更深层的抽象，得到输入单词序列的中间表示。
- **解码器**？解码器的结构基本上和编码器是一致的，在基于循环神经网络的翻译模型中，解码器只比编码器多了输出层，用于输出每个目标语言位置的单词生成概率。而在基于自注意力机制的翻译模型中，除了输出层，解码器还比编码器多一个编码­解码注意力子层，用于帮助模型更好地利用源语言信息。

- **注意力机制**！注意力机制的引入使得不再需要把原始文本中的所有必要信息压缩到一个向量当中。

![引入注意力机制的循环神经网络机器翻译架构](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175201.png)

传统的 Seq2Seq 模型在解码阶段仅依赖于编码器产生的最后一个隐藏状态，这在处理长序列时效果不佳。注意力机制允许解码器在生成每个输出词时，关注编码器产生的所有中间状态，从而更好地利用源序列的信息。具体来说，给定源语言序列经过编码器输出的向量序列 $h_{1},h_{2},h_{3},...,h_{m}$，注意力机制旨在依据解码端翻译的需要，自适应地从这个向量序列中查找对应的信息。

值得注意的是，baseline 的代码[^1]中实现了一个经典的序列到序列（Seq2Seq）模型，中间层使用的 GRU 网络，并且网络中加入了注意力机制（Attention Mechanism）。理论上其对于长序列有着较好的训练结果。

那么实际如何呢？实验如下：在 baseline 的基础下，规定训练样本为 2000，并在`定义常量`前增加一个循环，从 10 开始以 5 为步长增加序列长度，最大到 100。将每序列长度及其对应的 BLEU 得分保存在 score_length_list 中。

```python
score_length_list = []
LENGTH = 100  # 最大句子长度
for i in range(10, LENGTH, 5):
    MAX_LENGTH = i

    # 循环包括了定义常量，主函数，在开发集上进行评价等三部分
    # 限于篇幅，此处省略，读者可自行尝试与改进

# 然后用 matplotlib 绘图
import matplotlib.pyplot as plt
import numpy as np
plt.plot([i[1] for i in score_length_list], [i[0] for i in score_length_list])
mean_score = np.mean([i[0] for i in score_length_list])
plt.axhline(y=mean_score, color='r', linestyle='--')
plt.xlabel('MAX LENGTH')
plt.ylabel('BLEU SCORE')
plt.show()
```

![基于注意力机制的 GRU 神经网络机器翻译](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175533.png)

可以看出：在 GRU 与注意力机制相结合的情况下，随着句子长度增加，模型也有较可观的得分。受限于样本与循环次数，图线出现了一定波动，但平均值（红色虚线）约为 30。从 10 开始的短序列到 60 以上的长序列，图线的表现相似。可以看出 GRU 与注意力机制相的组合对训练结果确实有所提升。

不过由于训练样本与训练次数较少，结果可能存在偶然性。为此，我又测试了最大句子长度为 150，200，250 时的 BLEU 分别为：17.14，14.54，10.54。可见 baseline 中 GRU 与注意力机制带来的效果并不会*随着句子长度的增加而保持下去*。上一部分的实验的结果较为可靠。

再结合单独使用循环神经网络和循环神经网络加注意力机制。可得`注意力机制对于模型训练有较大提升`。

![单独使用循环神经网络和循环神经网络加注意力机制](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175224.png)

#### 那么，何为 GRU?

##### 一、为什么不是 RNN?
相比普通的 RNN，门控循环单元（GRU）支持隐状态的门控，使得模型有专门的可学习的机制来确定应该何时更新隐状态， 以及应该何时重置隐状态。

##### 二、重置门与更新们
重置门允许我们控制“可能还想记住”的过去状态的数量； 更新门将允许我们控制新状态中有多少个是旧状态的副本。 两个门的输入是由`当前时间步的输入`和`前一时间步的隐状`态给出。 两个门的输出是由使用 sigmoid 激活函数的`两个全连接层`给出。

![在门控循环单元模型中计算重置门和更新门](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175552.png)

对于确定的时间步 $t$，此时输入（样本个数为 $n$，输入个数为 $d$）为 $X_t$，上一时间步的隐状态（隐藏单元个数为 $h$）是 $H_{t-1}$，则有：

$$\textstyle R_t = \sum(w_{xr}X_t + w_{hr}H_{t-1} + b_r)$$
$$\textstyle Z_t = \sum(w_{xz}X_t + w_{hz}H_{t-1} + b_z)$$

##### 三、候选隐状态
将重置门 $R_t$ 与常规隐状态更新机制[^2]集成，得到在时间步
的候选隐状态（candidate hidden state）$\tilde{H_t}$。

$$\textstyle \tilde{H_t} = tanh(w_{xh}X_t + (R_t \odot H_{t-1})W_{hh} + b_h)$$

将 $R_t$ 和 $H_{t-1}$ 按元素相乘可以减少以往状态的影响。每当重置门 $R_t$ 中的项接近 1 时，我们可恢复一个普通的循环神经网络[^2]。对于重置门 $R_t$ 中所有接近 0 的项，候选隐状态是以 $X_t$ 作为输入的多层感知机的结果。因此,任何预先存在的隐状态都会被重置为默认值。

![在门控循环单元模型中计算候选隐状态](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175609.png)

##### 四、隐状态
再结合 $Z_t$ 就得出了门控循环单元的最终更新公式：

$$\textstyle H_t = Z_t \odot H_{t-1} + (1 - Z_t) \odot \tilde{H_t}$$

每当更新门 $Z_t$ 接近 1 时，模型就倾向只保留旧状态。此时，来自 $X_t$ 的信息基本被忽略，从而有效地跳过了依赖链条中的时间步 $t$。相反，当 $Z_t$ 接近 0 时，新的隐状态 $H_t$ 就会接近候选隐状态 $\tilde{H_t}$。这些可以帮助我们处理循环神经网络中的梯度消失问题，并更好地捕获时间步距离很长的序列的依赖关系。

![计算门控循环单元模型中的隐状](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175631.png)

总而言之，言而总之，门控循环单元，让模型具有了**记忆力**，其具有两大特征：

- 重置门有助于捕获序列中的短期依赖关系
- 更新门有助于捕获序列中的长期依赖关系

### 关于质量评价
**译文质量评价**，指的是人们用评估系统输出结果的质量的过程。本次夏令营使用的是译文质量自动评价方法 BLEU (Bilingual Evaluation Understudy)，是一种对生成语句进行评估的指标。

**BLEU指标** 常用于衡量计算机生成的翻译与一组参考译文之间的`相似度`。这个指标特别关注 n-grams（连续的n个词）的精确匹配，可以被认为是对翻译准确性和流利度的一种统计估计。如果生成的翻译中包含的n-grams与参考译文中出现的相同，则认为是匹配的。最终的BLEU分数是一个介于0到1之间的数值，其中1表示与参考译文完美匹配，而0则表示完全没有匹配。

而对于参赛队伍提交的测试集翻译结果文件，采用自动评价指标`BLEU-4`进行评价。即考虑`连续四个词的匹配`情况。可以看出来，BLEU 在测评精度会受常用词的干扰；短译句的测评精度有时会较高，但没有考虑同义词或相似表达的情况，可能会导致合理翻译被否定。所以 baseline 中得到的评分低倒也正常。

不过好处是：BLEU 属于`有参考答案的自动评价`。这种自动评价的结果获取成本低，可以多次重复，而且可以用于对系统结果的快速反馈，指导系统优化的方向。

![](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/20240717175230.png)

### 参考资料
[Task1：了解机器翻译 & 理解赛题](https://datawhaler.feishu.cn/wiki/FVs2wAVN5iqHMqk5lW2ckfhAncb?from=from_copylink)

[Task2：从baseline代码详解入门深度学习](https://datawhaler.feishu.cn/wiki/PztLwkofsi95oak2Iercw9hkn2g?from=from_copylink)

[9.1. 门控循环单元（GRU）](https://zh.d2l.ai/chapter_recurrent-modern/gru.html)

[^1]: [Task2-baseline.ipynb](https://datawhaler.feishu.cn/wiki/PztLwkofsi95oak2Iercw9hkn2g#WtUhdX63OofXNdxp77NclTVGntb)

[^2]: [8.4. 循环神经网络](https://zh.d2l.ai/chapter_recurrent-neural-networks/rnn.html#equation-rnn-h-with-state)
