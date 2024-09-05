---
date: 2024-07-14
title: Datawhale AI 夏令营（第二期） Task 1 学习笔记
article: false
category: 
    - 我做
tag: 
    - datawhale
    - AI
---

Task 1: 跑通baseline，体验NLP模型解决问题的流程，基本了解赛题要求，理解赛题场景

### 赛题提交流程
1. 获取数据集[^1]并完成模型训练代码
2. 在云端部署模型，得到结果文件
3. 在大赛官网提交结果文件，获取得分
4. 思考与总结

### 何为 MT
机器翻译（Machine Translation，简称MT）是自然语言处理领域的一个重要分支，其目标是将一种语言的文本自动转换为另一种语言的文本。

自 20 世纪 50 年代起，机器翻译逐渐发展完善，经历了从基于规则的方法、统计方法到深度学习方法的演变过程。当前，机器翻译正朝着更加智能化和个性化方向发展。

### 关于赛题
在特定领域或行业中，由于机器翻译难以保证术语的一致性，导致翻译效果还不够理想。而通过术语词典进行纠正，则可以避免了混淆或歧义，最大限度提高翻译质量。因此，本赛事需要我们基于提供的训练数据样本，进行多语言机器翻译模型的构建与训练，并基于测试集以及术语词典，提供最终的翻译结果。

### 尝试提升
运行代码 2[^2]，发现其得分（0.5356）较代码 1[^3]（0.3406）有了一定提升。

注意到，代码 2 修改了 N 和 N_EPOCHS，训练数据变为了数据集的前 2000 个样本，训练次数增加到了 50 轮。可以发现随着训练数据和训练次数的增加，模型的效果也会变好

吗？

如下图所示，当训练数据增加到前 6000 个样本，训练 60 轮，发现损失值在 4.3 左右“久居不下”，似乎模型此时处于过拟合状态，再增加 epoch 也可能收效甚微。值得一提的是，这次训练得分突破了 1.0 大关，获得了 1.6165 分。:yum: 

![Train Loss](https://gitee.com/stu-peter_0/picgopic/raw/main/pictures/202407171800679.png)

### 参考资料
[从零入门NLP竞赛](https://datawhaler.feishu.cn/wiki/FVs2wAVN5iqHMqk5lW2ckfhAncb)

[Task1：了解机器翻译 & 理解赛题](https://datawhaler.feishu.cn/wiki/FVs2wAVN5iqHMqk5lW2ckfhAncb)

[^1]: [dataset.zip](https://datawhaler.feishu.cn/wiki/TObSwHZdFi2y0XktauWcolpcnyf#J7nsdkrOmon0rUxILLHcVT26nPb)

[^2]: [task-1_terminology2-2.ipynb](https://datawhaler.feishu.cn/wiki/FVs2wAVN5iqHMqk5lW2ckfhAncb#NUSCd0Tw1orih7xbL6ic7y0AnPd)

[^3]: [task-1_terminology.ipynb](https://datawhaler.feishu.cn/wiki/TObSwHZdFi2y0XktauWcolpcnyf#AXE0d6E7GoglG8xbRmdc5UTznYb)
