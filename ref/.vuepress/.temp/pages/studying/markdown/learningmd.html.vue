<template><div><h1 id="markdown-语法指北" tabindex="-1"><a class="header-anchor" href="#markdown-语法指北"><span>markdown 语法指北</span></a></h1>
<p>markdown语法汇总</p>
<h2 id="标题-段落" tabindex="-1"><a class="header-anchor" href="#标题-段落"><span>标题&amp;段落</span></a></h2>
<p>共有六级标题（这是一段）。</p>
<p>这是另一段。</p>
<h2 id="粗体斜体删除线" tabindex="-1"><a class="header-anchor" href="#粗体斜体删除线"><span>粗体斜体删除线</span></a></h2>
<p>1）粗体</p>
<p><strong>粗体方法一</strong></p>
<p><strong>粗体方法二</strong></p>
<p>2）斜体</p>
<p><em>斜体方式一</em></p>
<p><em>斜体方式二</em></p>
<p>3）粗斜体</p>
<p>随机对称组合</p>
<p><strong><em>粗斜体示例</em></strong></p>
<p>4）删除线</p>
<p><s>要被删除力</s></p>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h2>
<p>有序列表、无序列表及其嵌套</p>
<ul>
<li>无序列表1.1
<ul>
<li>无序列表</li>
<li>无序列表</li>
</ul>
</li>
<li>无序列表2.1</li>
</ul>
<ul>
<li>无序列表1.2
<ol>
<li>有序列表1</li>
<li>有序列表2</li>
<li>有序列表3</li>
</ol>
</li>
<li>无序列表2.2</li>
</ul>
<ol>
<li>有序列表
<ul>
<li>无序列表1.3</li>
<li>无序列表2.3</li>
</ul>
</li>
<li>有序列表</li>
</ol>
<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h2>
<blockquote>
<p>这是引用了一个段落</p>
</blockquote>
<blockquote>
<p>这是引用了另一个段落的第一行</p>
<blockquote>
<p>引用的引用</p>
</blockquote>
<p style="note"></p>
<blockquote>
<p>第二行</p>
</blockquote>
<p>第三行</p>
</blockquote>
<h2 id="行内代码" tabindex="-1"><a class="header-anchor" href="#行内代码"><span>行内代码</span></a></h2>
<p>1）普通代码快</p>
<pre><code>四个空格
就是一个代码块
</code></pre>
<!--

`这也是一个代码块`

2）围栏使代码块及`tab`的用法

例如：

<tabs>
    <tab title="python1">

```Python
import pandas
a = pandas.read_excel('xxx'.xlsx)
```

</tab>
<tab title="python2">

```Python
import numpy

```

</tab>
<tab title="markdown">

~~~
<tab title="xxx">
</tab>
~~~
</tab>
</tabs>

-->
<h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线"><span>分割线</span></a></h2>
<p>好像用不了（悲</p>
<h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接"><span>超链接</span></a></h2>
<p>1）连接到网站</p>
<p><a href="https://baidu.com/" target="_blank" rel="noopener noreferrer">百度</a></p>
<p>2）连接到markdown页面标题</p>
<!--
[Markdown  Default-topic](Default-topic.md "点击跳转")
-->
<p>3）同其他元素配合</p>
<p>例如：</p>
<p><a href="https://ys.mihoyo.com/" title="原神，启动！" target="_blank" rel="noopener noreferrer"><em><strong><code v-pre>原神</code></strong></em></a></p>
<h2 id="添加图骗" tabindex="-1"><a class="header-anchor" href="#添加图骗"><span>添加图骗</span></a></h2>
<figure><img src="/images/magicsquash.jpg" alt="这是一张图骗" tabindex="0" loading="lazy"><figcaption>魔法窝瓜</figcaption></figure>
<h2 id="emoji表情" tabindex="-1"><a class="header-anchor" href="#emoji表情"><span>Emoji表情</span></a></h2>
<p>有待开发（悲^2</p>
<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h2>
<table>
<thead>
<tr>
<th>表头1</th>
<th>表头2</th>
<th>表头3</th>
</tr>
</thead>
<tbody>
<tr>
<td>内容1</td>
<td>内容2</td>
<td>内容3</td>
</tr>
<tr>
<td>内容1</td>
<td>内容2</td>
<td>内容3</td>
</tr>
</tbody>
</table>
<h2 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h2>
<p>这是一个脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<h2 id="公式" tabindex="-1"><a class="header-anchor" href="#公式"><span>公式</span></a></h2>
<div class="language-tex line-numbers-mode" data-highlighter="shiki" data-ext="tex" data-title="tex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">a^2 + b^2 = c^2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>需要用一句话来使两个式子分开</p>
<div class="language-tex line-numbers-mode" data-highlighter="shiki" data-ext="tex" data-title="tex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">x=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\frac</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{-b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\mp\sqrt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{b^2-4ac}}{2a}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2>
<!-- 注释 -->
<p><code v-pre>&lt;!-- 注释 --&gt;</code></p>
<blockquote>
<p><code v-pre>这是xml语言</code></p>
</blockquote>
<h2 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图"><span>思维导图</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" data-title="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    a[blablabla] -->|blabla| b(bla)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    b -->c(la)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    b -->d(b)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    c -->e{l}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    c -->f[a]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" data-title="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    A{HAHAHA} --> |除以3| B[HA]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>脚注 <strong>可以包含特殊标记</strong> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


