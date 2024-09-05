---
date: 2024-07-18
title: Datawhale AI 夏令营（第二期） Task 3 学习笔记
article: false
category:
    - 我做
tag: 
    - datawhale
    - AI
---

Task3：基于 Transformer 解决机器翻译任务

### 何为 Transformer
传统的**循环**或**卷积**神经网络在建模文本长程依赖方面都存在一定的局限性。对于前者，编码在隐藏状态中的序列早期的上下文信息会随着序列长度的增加被逐渐遗忘。同时编码效率方面仍存在很大的不足之处；对于后者，如果要对长距离依赖进行描述，需要多层卷积操作，而且不同层之间信息传递也可能有损失，这些都限制了模型的能力。

于是乎，谷歌的研究人员在 2017 年提出了一种新的模型 Transformer，带来了一篇经典的论文：*Attention Is All You Need* [^1]。

Transformer 在原论文中第一次提出就是将其应用到`机器翻译`领域，它的出现使得机器翻译的性能和效率迈向了一个新的阶段。它通过注意力机制完成对源语言序列和目标语言序列全局依赖的建模。在抽取每个单词的上下文特征时，Transformer 通过`自注意力机制（self-attention）`衡量上下文中每一个单词对当前单词的重要程度。在这个过程当中没有任何的循环单元参与计算。这种`高度可并行化`的编码过程使得模型的运行变得十分*高效*。

![自注意力机制的计算实例](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/202407201557755.png)

Transformer 的主要组件包括编码器(Encoder)、解码器(Decoder)和注意力层。其*核心*是利用**多头自注意力机制（Multi-Head Self-Attention）**，使每个位置的表示不仅依赖于当前位置，还能够直接获取其他位置的表示。

![Transformer 模型的基本架构](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/202407201600476.png)

Transformer 的编码器主要涉及到如下几个模块：

#### 一、嵌入表示层
输入嵌入层可以将每个单词转换为其相对应的向量表示。而在送入编码器端建模其上下文语义之前，一个非常重要的操作是**在词嵌入中加入位置编码**这一特征。在训练的过程当中，模型会自动地学习到如何利用这部分位置信息。为了得到不同位置对应的编码，Transformer 模型使用不同频率的正余弦函数如下所示：

$$PE_{(pos, 2i)} = \sin(\frac{pos}{10000^{\frac{2i}{d}}}), \quad PE_{(pos, 2i + 1)} = \cos(\frac{pos}{10000^{\frac{2i}{d}}})$$

其中，$pos$ 表示单词所在位置。$2i$ 和 $2i + 1$ 表示位置编码向量中的对应维度，$d$ 则对应位置编码的总维度。

为什么要这么计算呢？首先，正余弦函数的范围是在 $[-1, +1]$，导出的位置编码与原词嵌入相加**不会使得结果偏离过远而破坏原有单词的语义信息**。其次，依据三角函数的基本性质，可以得知第 $pos+k$ 个位置的编码是第 $pos$ 个位置的编码的线性组合，这就意味着**位置编码中蕴含着单词之间的距离信息**。

#### 二、注意力层
对于给定的输入表示 $\{x_{i} \in \mathbb{R^{d}}\}_{i=1}^{t}$，为了实现对上下文语义依赖的建模，进一步引入在自注意力机制中涉及到的三个元素：查询 $q_{i}(Query)$，键 $k_{i}(Key)$，值 $v_{i}(Value)$。在编码输入序列中每一个单词的表示的过程中，这三个元素用于**计算上下文单词所对应的权重得分**。直观地说，这些权重反映了在编码当前单词的表示时，对于上下文不同部分所需要的关注程度。

相关计算过程可被表述如下：

 $$Attention(Q,K,V) = Softmax(\frac{QK^{T}}{\sqrt{d}})V$$

其中，$Q \in \mathbb{R}^{L\times d_{q}}$, $K \in \mathbb{R}^{L\times d_{k}}$, $V \in \mathbb{R}^{L\times d_{v}}$ 分别表示输入序列中的不同单词的 $\vec{q}, \vec{k}, \vec{v}$ 向量拼接组成的矩阵。值得注意的是，为了**防止过大的匹配分数在后续 Softmax 计算过程中导致的梯度爆炸以及收敛效率差**的问题，通过位置 $i$ 查询向量与其他位置的键向量做点积得到匹配分数会除放缩因子 $\sqrt{d}$ 以稳定优化。

#### 三、前馈层
前馈层接受自注意力子层的输出作为输入，并通过一个带有 Relu 激活函数的两层全连接网络对输入进行更加复杂的**非线性变换**。

$$FFN(x)=Relu(xW_{1}+b_{1})W_{2}+b_{2}$$

其中 $W_{1},b_{1},W_{2},b_{2}$ 表示前馈子层的参数。另外，以往的训练发现，**增大前馈子层隐状态的维度有利于提升最终翻译结果的质量**，因此，前馈子层隐状态的维度一般比自注意力子层要大。

#### 四、残差连接与层归一化
由于 Transformer 结构组成的网络结构通常都是非常庞大。编码器和解码器均由很多层基本的 Transformer 块组成，每一层当中都包含复杂的非线性映射，这就导致**模型的训练比较困难**。因此，研究者们在 Transformer 块中进一步引入了**残差连接与层归一化技术**以进一步提升训练的稳定性。

1. 残差连接

**使用一条直连通道直接将对应子层的输入连接到输出上**，从而避免由于网络过深在优化过程中潜在的梯度消失问题：

$$x^{l+1}=f(x^l)+x^l$$

其中 $x^l$ 表示第 $l$ 层的输入，$f(\cdot)$表示一个映射函数。

2. 层归一化

$$LN(x)=\alpha \cdot \frac{x-\mu}{\sigma} + b$$

其中 $\mu$ 和 $\sigma$ 分别表示均值和方差，用于将数据平移缩放到均值为 0，方差为 1 的标准分布，$a$ 和 $b$ 是可学习的参数。层归一化技术可以有效地**缓解优化过程中潜在的不稳定、收敛速度慢**等问题。

#### 五、编码器和解码器的结构
相比于编码器端，解码器端要更复杂一些。具体来说，解码器的每个 Transformer 块的第一个自注意力子层额外增加了注意力掩码，对应上图中的掩码多头注意力（Masked Multi-Head Attention）部分。额外增加的掩码用来**掩盖后续的文本信息，以防模型在训练阶段直接看到后续的文本序列进而无法得到有效地训练**。

此外，解码器端还额外增加了一个多头注意力模块，使用交叉注意力方法，同时接收来自编码器端的输出以及当前 Transformer 块的前一个掩码注意力层的输出。

基于上述的编码器和解码器结构，待翻译的源语言文本，先经过编码器端的每个 Transformer 块对其上下文语义的层层抽象，然后**输出每一个源语言单词上下文相关的表示**。解码器端以自回归的方式**生成目标语言文本**，即在每个时间步 $t$，根据编码器端输出的源语言文本表示，与前 $t - 1$ 个时刻生成的目标语言文本，*生成当前时刻的目标语言单词*。

### 如何提高训练效果
- **调参**

老生常谈。将源代码[^2]的 epochs 调大一点，使用全部训练集，以及调整模型的参数，如 batch size、head、layers 等都是可行的方法。甚至增加模型的深度（更多的编码器/解码器层）或宽度（更大的隐藏层尺寸）也是可以的。

- **加入术语词典**

通过使用术语词典来替换翻译结果中的术语。这是最简单的一种方法。

```python
def load_dictionary(dict_path):
    term_dict = {}
    with open(dict_path, 'r', encoding='utf-8') as f:
        data = f.read()
    data = data.strip().split('\n')
    source_term = [line.split('\t')[0] for line in data]
    target_term = [line.split('\t')[1] for line in data]
    for i in range(len(source_term)):
        term_dict[source_term[i]] = target_term[i]
    return term_dict

def post_process_translation(translation, term_dict):
    # 如果单词在术语词典中存在，则将其替换为对应的术语，否则保持不变。
    translated_words = [term_dict.get(word, word) for word in translation]
    return "".join(translated_words)
```

- **数据清洗**

众所周知，原始数据集非常的**脏**。训练集与开发集包含许多“括号”，例如“笑声”，“掌声”，“一种致癌物质”，“多氯联苯”等等，它们对翻译结果不能说如虎添翼吧，也能说是雪上加霜。于是我写了一点简单的小代码来去除括号：

```python
import re


def date_clean(date):
    date = re.sub(u"\\（.*?\\）|\\(.*?\\)|\\(.*?\\）|\\（.*?\\)", "", date)
    return date


file01 = './dataset/dev_zh.txt'

with open(file01, "r", encoding="utf-8") as f:
    text = f.read()
    text_new = date_clean(text)
with open(file01, "w", encoding="utf-8") as f:
    f.write(text_new)

file02 = './dataset/train.txt'
with open(file02, "r", encoding="utf-8") as f:
    text = f.read()
    text_new = date_clean(text)
with open(file02, "w", encoding="utf-8") as f:
    f.write(text_new)
```

然后满怀信心去实践：

![](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/202407200001331.png)

啊，报错了（悲）！要匹配的元素不足？一番排查后发现，是如下代码的问题：

```python
train_data = read_data(train_path)
train_en, train_zh = zip(*(line.split('\t') for line in train_data))
```

读取来的训练数据（列表）中，每个元素包含了英文句子，制表符，和中文翻译。`看来数据清洗后少了点什么东西`。难道说有的语句是全被括号包括了吗？还真是。一个偶然的机会，我发现训练集中包含如下语句，当数据清洗后，整个中文翻译就没了！**读取数据时也不会有制表符**。自然就会报错了（幸运的是，我发现开发集并没有这样的问题）。

![](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/202407192355410.png)

于是我修改了*数据加载函数*下的`读取训练数据`部分，同时添加了去重功能：

```python
# 读取训练数据
train_data = read_data(train_path)
    for line in train_data:
        if '\t' in line:
            continue
        else:
            # 删掉没有 \t 的元素
            train_data.remove(line)
    # 去掉重复元素
    train_data = np.unique(train_data).tolist()
    train_en, train_zh = zip(*(line.split('\t') for line in train_data))
```

顺便获取了修改后的训练集最大长度:

```python
print(len(train_data))
# # 采样训练集的数量，刚开始最多 148363 
#数据清理后变为 148329，去重后为 92000
```

为了更好的数据，我又写了一点小代码，将英文语句的常见缩写展开，例如将`I'm`变为`I am`：

<details>
<summary><font size="4" color="orange">代码过长，请点击展开</font></summary> 
<pre>
<code class="language-python">
contractions = {
    "I'm": "I am",
    "he's": "he is",
    "she'll": "she will",
    "he'll": "he will",
    "you'll": "you will",
    "you're": "you are",
    "you've": "you have",
    "you'd": "you would",
    "we've": "we have",
    "we'd": "we would",
    "they've": "they have",
    "she's": "she is",
    "that's": "that is",
    "what's": "what is",
    "where's": "where is",
    "how's": "how is",
    "it's": "it is",
    "It's": "It is",
    "who's": "who is",
    "we're": "we are",
    "they're": "they are",
    "would've": "would have",
    "not've": "not have",
    "I've": "I have",
    "that'll": "that will",
    "I'll": "I will",
    "isn't": "is not",
    "wasn't": "was not",
    "aren't": "are not",
    "weren't": "were not",
    "can't": "can not",
    "couldn't": "could not",
    "don't": "do not",
    "didn't": "did not",
    "shouldn't": "should not",
    "wouldn't": "would not",
    "doesn't": "does not",
    "haven't": "have not",
    "hasn't": "has not",
    "hadn't": "had not",
    "won't": "will not",
    "ain't": "am not",
    "there's": "there is",
    "there'll": "there will",
    "there'd": "there would",
    "there're": "there are",
    "here's": "here is",
    "here'll": "here will",
    "here'd": "here would",
    "here're": "here are",
    "they'll": "they will",
    "they'd": "they would",
    "I'd": "I would",
    "that'd": "that would",
    "that're": "that are",
    "that've": "that have",
    "there've": "therehave",
    "There've": "There have",
    "That's": "That is",
    "That'll": "That will",
    "That'd": "That would",
    "That're": "That are",
    "That've": "That have",
    "There's": "There is",
    "There'll": "There will",
    "There'd": "There would",
    "There're": "There are",
    "Here's": "Here is",
    "Here'll": "Here will",
    "mother's": "mother is",
    "father's": "father is",
    "sister's": "sister is",
    "brother's": "brother is",
    "mother'll": "mother will",
    "father'll": "father will",
    "sister'll": "sister will",
    "brother'll": "brother will",
    "mother'd": "mother would",
    "father'd": "father would",
    "sister'd": "sister would",
    "He's": "He is",
    "She's": "She is",
    "We're": "We are",
    "They're": "They are",
    "You're": "You are",
    "You've": "You have",
    "You'd": "You would",
    "We've": "We have",
    "We'd": "We would",
    "They've": "They have",
    "Don't": "Do not",
    "Didn't": "Did not",
    "Can't": "Can not",
    "Couldn't": "Could not",
    "Shouldn't": "Should not",
    "Wouldn't": "Would not",
    "Ain't": "Am not",
    "Isn't": "Is not",
    "Wasn't": "Was not",
    "Weren't": "Were not",
    "Haven't": "Have not",
}
def expand_contractions(text):
    for contraction, replacement in contractions.items():
        text = text.replace(contraction, replacement)
    return text
file_path = './dataset/train.txt'
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()
    text_new = expand_contractions(text)
with open(file_path, "w", encoding="utf-8") as f:
    f.write(text_new)
file_path1 = './dataset/dev_en.txt'
with open(file_path1, "r", encoding="utf-8") as f:
    text = f.read()
    text_new = expand_contractions(text)
with open(file_path1, "w", encoding="utf-8") as f:
    f.write(text_new)
</code>
</pre>
</details>

至此，数据清洗完成，代码可正常运行了。

### 未来展望
1. 训练集中存在部分语句引号不完整的情况，我希望能想到一个好的数据改进的办法；

2. 用术语词典替换翻译结果可能效果有限，最好可以在模型中额外增加一层将术语融合进词嵌入层，仍需学习相关知识

### 参考资料
[Task3：基于Transformer解决机器翻译任务](https://datawhaler.feishu.cn/wiki/OgQWwkYkviPfpwkE1ZmcXwcWnAh?from=from_copylink)

[^1]: [*Attention Is All You Need*](https://arxiv.org/pdf/1706.03762)

[^2]: [Task3-Transformer-2024-07-16.ipynb](https://datawhaler.feishu.cn/wiki/OgQWwkYkviPfpwkE1ZmcXwcWnAh#KnOhdjSFNoqukyxsR9QcEM5onQd)