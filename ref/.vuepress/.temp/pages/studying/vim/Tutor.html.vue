<template><div><p>IdeaVim<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup> Tutor: As you go through this tutor, do not try to memorize, learn by usage.</p>
<h3 id="壹" tabindex="-1"><a class="header-anchor" href="#壹"><span>壹</span></a></h3>
<p><s>使用鼠标来移动光标</s></p>
<p>当处于 <strong>NORMAL</strong> 模式时，使用 <code v-pre>h</code>，<code v-pre>j</code>，<code v-pre>k</code>，<code v-pre>l</code> 来移动光标，如下表；</p>
<table>
<thead>
<tr>
<th style="text-align:center">h</th>
<th style="text-align:center">j</th>
<th style="text-align:center">k</th>
<th style="text-align:center">l</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">向左</td>
<td style="text-align:center">向下</td>
<td style="text-align:center">向上</td>
<td style="text-align:center">向右</td>
</tr>
</tbody>
</table>
<p>多加练习，开始用他们辅助文本编辑吧！</p>
<ol>
<li>
<p>如何删除：</p>
<p>按一下 <code v-pre>x</code> 将删除光标下的一个字符。</p>
</li>
<li>
<p>插入模式（<strong>INSERTION</strong>）:</p>
<p>按一下 <code v-pre>i</code> 以进入插入模式。</p>
<p>按一下 <code v-pre>ESC</code> 以返回 <strong>NORMAL</strong> 模式。</p>
</li>
<li>
<p>行末添加文本：</p>
<p>按一下 <code v-pre>Caps</code> + <code v-pre>a</code> 将光标移至行末并切换为插入模式。（换用 <code v-pre>i</code> 也有不一样的效果呢）</p>
</li>
</ol>
<h3 id="贰" tabindex="-1"><a class="header-anchor" href="#贰"><span>贰</span></a></h3>
<ol>
<li>
<p>依然处于 <strong>NORMAL</strong> 模式下，当光标位于一个单词的首字母时，按一下 <code v-pre>d</code> + <code v-pre>w</code> 可以删除一个单词。而中文文本下，光标位于句首时会删掉一整句话。</p>
<p>值得注意的是，当按下 <code v-pre>d</code> 后，它将出现在状态栏，<em>等待下一步指令</em>（如 <code v-pre>w</code>）。如果发现第二个字母打错了，别慌，按一下 <code v-pre>ESC</code> 就可以重新开始。</p>
</li>
<li>
<p>额外地，按一下 <code v-pre>d</code> + <code v-pre>$</code> 则可以将一行文本中光标以后的部分全部删掉。
对于一个单词，按一下 <code v-pre>d</code> + <code v-pre>e</code> 则可以删除该单词中光标以后的部分（包括光标内容）。</p>
</li>
<li>
<p>用数字可以表示步长。例如，按一下 <code v-pre>3</code> + <code v-pre>w</code> 可以将光标移动到向右第三个单词的首字母；
按一下 <code v-pre>2</code> + <code v-pre>e</code> 可以将光标移动到向右第二个单词的尾字母。
按一下 <code v-pre>0</code> 使光标返回到该行首字母。</p>
</li>
<li>
<p>遇到单词是大写字母时，则可以将数字与 d 指令搭配使用。例如，按一下 <code v-pre>d</code> + <code v-pre>3</code> + <code v-pre>w</code> 可以删除连续三个单词（不论大小写）。</p>
</li>
<li>
<p>按两下 <code v-pre>d</code> 可以删除一整行，按一下 <code v-pre>2</code> 加两下 <code v-pre>d</code> 可以删除两行。</p>
</li>
<li>
<p>按一下 <code v-pre>u</code> 可以撤回，按一次 <code v-pre>Ctrl</code> + <code v-pre>r</code> 可以重做。</p>
</li>
</ol>
<h3 id="叁" tabindex="-1"><a class="header-anchor" href="#叁"><span>叁</span></a></h3>
<ol>
<li>
<p>按一下 <code v-pre>p</code> 可以把前一步删掉的文本添加回光标后。</p>
</li>
<li>
<p>按一下 <code v-pre>r</code> + <code v-pre> </code> 可以将光标下的字母替换掉。</p>
</li>
<li>
<p><code v-pre>c</code> 的用法：</p>
<p>按一下 <code v-pre>c</code> + <code v-pre>e</code> 以删掉单词在光标后的部分，<strong>并进入插入模式</strong>。</p>
<p>与 <code v-pre>d</code> 的用法基本一致。</p>
</li>
</ol>
<h3 id="肆" tabindex="-1"><a class="header-anchor" href="#肆"><span>肆</span></a></h3>
<ol>
<li>
<p>按一下 <code v-pre>Caps</code> + <code v-pre>g</code> 以将光标移动到文件最后一行句首。</p>
<p>按两下 <code v-pre>g</code> 以移动光标至文件第一行句首。</p>
<p>输入行数再按一下 <code v-pre>Caps</code> + <code v-pre>g</code> 或按两下 <code v-pre>g</code> 以将光标移动到指定行。</p>
</li>
<li>
<p>按一下 <code v-pre>/ (?)</code> 以进入正向（反向）搜索。
再按一下 <code v-pre>n (N)</code> 以正向（反向）查找下一个匹配对象。</p>
</li>
<li>
<p>匹配括号。在一个括号处按一下 <code v-pre>%</code> 可以将光标移动到与该括号匹配的另一括号处。</p>
<blockquote>
<p>对于 debug 十分有效</p>
</blockquote>
</li>
<li>
<p>敲入 <code v-pre>:s/old/new</code> 可以将该行第一个目标单词替换为新单词。</p>
<p>敲入 <code v-pre>:s/old/new/g</code> 则代表替换该行中所有的目标单词。</p>
<p>敲入 <code v-pre>:%s/old/new/g</code> 则代表替换该文件中所有的目标单词。</p>
<p>敲入 <code v-pre>:%s/old/new/gc</code> 则代表查找该文件中所有的目标单词，并提示是否替换。</p>
<p>敲入 <code v-pre>:n1,n2s/old/new/g</code> 则代表替换第 n1 行至第 n2 行中所有的目标单词。</p>
</li>
</ol>
<h3 id="伍" tabindex="-1"><a class="header-anchor" href="#伍"><span>伍</span></a></h3>
<ol>
<li>
<p>按一下 <code v-pre>o</code> 以向下新添加一行，并进入插入模式。</p>
<p>按一下 <code v-pre>Caps</code> + <code v-pre>o</code> 以向上新添加一行，并进入插入模式。</p>
</li>
<li>
<p>按一下 <code v-pre>a</code> 以在光标后插入文本。</p>
<p>按一下 <code v-pre>Caps</code> + <code v-pre>a</code> 以在行尾插入文本。</p>
</li>
<li>
<p>按一下 <code v-pre>e</code> 可以将光标移动到单词末尾。</p>
</li>
<li>
<p>按一下 <code v-pre>Caps</code> + <code v-pre>r</code> 进入替换模式，将光标位置的字符替换成新输入的字符。</p>
</li>
<li>
<p>按一下 <code v-pre>v</code> 进入<strong>视觉模式</strong>，移动光标选择文本，按一下 <code v-pre>y</code> 以复制选中文本。</p>
<p>按一下 <code v-pre>y</code> + <code v-pre>w</code> 以复制一个单词。</p>
<p>按两下 <code v-pre>y</code> 复制一整行文本。</p>
<p>按一下 <code v-pre>p</code> 以粘贴文本。</p>
</li>
<li>
<p>敲入 <code v-pre>:set (no)xxx</code>，为搜索或替换添加附加条件：</p>
<p>可选择的 <code v-pre>xxx</code> 有：</p>
<ul>
<li><code v-pre>ic</code> 忽略大小写</li>
<li><code v-pre>hls</code> 高亮所有匹配项</li>
<li><code v-pre>is</code> 额外显示搜索内容的部分匹配项</li>
</ul>
<p>在搜索或替换命令后敲入 <code v-pre>\c</code> 使上述条件只生效一次。</p>
</li>
</ol>
<h3 id="戛然而止" tabindex="-1"><a class="header-anchor" href="#戛然而止"><span>戛然而止</span></a></h3>
<p>至此，ideavim 教程结束。</p>
<p>不过 ideavim 的学习却远不止于此。官方教程中还涉及到了 ideavimrc 启动脚本的创建，vim 基础教学，以及一些推荐书籍。
感兴趣的同学请自行到 IdeaVim<sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1" /></sup> 官方学习。</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://github.com/JetBrains/ideavim" target="_blank" rel="noopener noreferrer">IdeaVim</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a> <a href="#footnote-ref1:1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


