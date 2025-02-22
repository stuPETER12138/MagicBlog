<template><div><h2 id="what-is-agent" tabindex="-1"><a class="header-anchor" href="#what-is-agent"><span>WHAT is Agent</span></a></h2>
<p>AGENT = LLM + Planning +Tool use + Feedback</p>
<p>智能体是一个能够感知环境并在环境中自主行动以实现特定目标的系统。它具有以下几个关键特征：</p>
<ol>
<li>自主性：智能体可以在没有直接人为干预的情况下运作，能够自行决策和行动。</li>
<li>响应性：能够感知环境并对环境变化做出及时响应。</li>
<li>主动性：不仅被动响应环境,还可以主动采取行动来实现目标。</li>
<li>社交能力：能够与其他智能体或人类进行交互和协作。</li>
</ol>
<p>在实现方面，现代智能体通常基于以下技术：</p>
<ul>
<li>大语言模型（LLM）作为认知和决策的核心</li>
<li>规划系统用于制定行动计划</li>
<li>记忆系统存储相关信息和经验</li>
<li>工具使用能力来扩展行动范围</li>
</ul>
<h2 id="how-to-use-agent" tabindex="-1"><a class="header-anchor" href="#how-to-use-agent"><span>HOW to use Agent</span></a></h2>
<h3 id="principles" tabindex="-1"><a class="header-anchor" href="#principles"><span>Principles</span></a></h3>
<p>在设计智能体时，我们首先要明确其<strong>目标导向性</strong>，即智能体的每个行为都应该服务于预定的目标。这种目标导向不仅体现在最终结果上，还需要贯穿整个执行过程中。同时，智能体的设计应该遵循<strong>模块化</strong>原则，将不同功能划分为独立的模块，既保证了代码的可维护性，也提高了系统的灵活性。</p>
<p>一个典型的智能体包含三个核心部分：</p>
<ul>
<li>感知模块：处理输入信息</li>
<li>决策模块：制定行动计划</li>
<li>执行模块：实施具体行动</li>
</ul>
<p>智能体的设计应该采用迭代开发的方式。首先实现基本功能，然后通过不断的测试和反馈来完善系统。在此过程中，要注重收集和分析性能数据，根据实际运行情况调整设计参数和策略。这种渐进式的开发方法可以帮助我们建立一个更加稳健和高效的智能体系统。</p>
<h3 id="messages" tabindex="-1"><a class="header-anchor" href="#messages"><span>Messages</span></a></h3>
<p>当你和朋友聊天、在网上搜索信息或是对手机语音助手说“帮我查一下天气”时，其实你都在向某个“代理者（Agent）”发送一条“信息（Message）”。这里的“代理者”既可以是一个人，也可以是一个能执行指令的智能程序或系统，而“信息”则是你传递的指令、问题或数据。在日常生活中，这种信息交互常常不易察觉，但在计算机科学、人工智能和自动化任务中，“Agent的Message”是一个至关重要的基础概念。</p>
<p>简单来说，Agent 的 Message 就是指系统中“智能体”或“代理者”之间互相传递的指令或数据包。</p>
<blockquote>
<p>以 CAMEL 系统的 BaseMessage 类为例</p>
<p>创建并使用 Message</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> PIL</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Image</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> io </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> BytesIO</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载一张图片并创建一个 PIL Image 对象</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">url </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://raw.githubusercontent.com/camel-ai/camel/master/misc/logo_light.png"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">response </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> requests.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(url)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">img </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Image.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">BytesIO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(response.content))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建包含图片的用户消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">image_message </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> BaseMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    role_name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"User_with_image"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    role_type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">RoleType.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    content</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Here is an image"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    meta_dict</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{},</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    image_list</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[img]  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将图片列表作为参数传入</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(image_message)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">>>></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">BaseMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">role_name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'User_with_image'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">role_type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">RoleType.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'user'</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">meta_dict</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{}, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">content</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Here is an image'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">video_bytes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">image_list</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">PIL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.PngImagePlugin.PngImageFile image mode=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">RGBA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> size=</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">3520x720</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> at </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1DDFF8E88F0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">], </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">image_detail</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'auto'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">video_detail</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'low'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">parsed</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> camel.messages </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> BaseMessage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建用户消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">user_msg </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> BaseMessage.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">make_user_message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    role_name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"User_1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    content</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hi, what can you do?"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建助手消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">assistant_msg </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> BaseMessage.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">make_assistant_message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    role_name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Assistant_1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    content</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"I can help you with various tasks."</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"User Message:"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, user_msg)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Assistant Message:"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, assistant_msg)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ChatAgent</strong> 是 CAMEL 系统中负责对话处理与智能回应的组件。当你将 BaseMessage 对象传递给 ChatAgent 时，ChatAgent 将根据系统和用户消息的内容，生成具有上下文感知的回复。</p>
<h3 id="memory" tabindex="-1"><a class="header-anchor" href="#memory"><span>Memory</span></a></h3>
<p>在 Agent 系统中，Memory 模块是一个关键的组件，其主要功能是存储与检索信息，以支持agent 的学习和决策过程。Memory 模块通常包括以下几个核心功能：</p>
<ol>
<li>信息储存：能够高效存储多种形式的数据，包括事实、事件、规则和上下文信息，以便在需要时快速访问。</li>
<li>信息检索：支持根据特定查询或上下文快速检索相关信息，帮助agent在需要时做出准确的判断。</li>
<li>记忆更新：能够根据新的信息和经验动态更新存储内容，以反映环境或任务的变化。</li>
<li>记忆管理：包括老化机制和优先级管理，确保较重要的信息能够长期保留，而不再需要的信息可以被有效清除，以优化存储资源的使用。</li>
</ol>
<h2 id="wow-multiple-agent" tabindex="-1"><a class="header-anchor" href="#wow-multiple-agent"><span>WOW, Multiple Agent</span></a></h2>
<p>多智能体（Multiple Agent）由多个相互作用的智能体组成，每个智能体都有自己的目标和策略。这些智能体可以相互通信、协作或竞争，以实现更复杂的行为和决策。</p>
<ul>
<li>特点：
<ul>
<li>协作：智能体之间可以协作，共同解决问题。</li>
<li>竞争：智能体之间也可以存在竞争关系，如在拍卖或游戏场景中。</li>
<li>自主性：每个智能体都有自己的决策过程，保持一定程度的自主性。</li>
<li>复杂性：多智能体系统的设计与分析比单一智能体系统更复杂，因为需要考虑智能体之间的交互和协调。</li>
<li>鲁棒性：多智能体系统通常具有更好的鲁棒性，因为系统的稳定性和效能不完全依赖于单一决策者。</li>
</ul>
</li>
</ul>
<blockquote>
<p>CAMEL（Communicative Agents for &quot;Mind&quot; Exploration of Large Language Models）是一个开源的多智能体框架，专注于构建基于大语言模型的智能体交互系统。该框架通过角色扮演和结构化对话机制，实现智能体之间的有效协作。</p>
<p>在 CAMEL 框架中，ChatAgent 是最基础的智能体单元，负责处理对话逻辑和任务执行。而 RolePlaying 和 Workforce 则是多智能体系统，用于协调多个智能体的协作。</p>
<ul>
<li>
<p><a href="https://ghli.org/camel.pdf" target="_blank" rel="noopener noreferrer">论文</a></p>
</li>
<li>
<p><a href="https://www.camel-ai.org/" target="_blank" rel="noopener noreferrer">项目主页</a></p>
</li>
</ul>
</blockquote>
<p>在 CAMEL 中主要是多智能体的实现主要是通过角色扮演<code v-pre>Role-Playing</code>的方式，让智能体扮演特定的角色，并拥有相应角色的专业知识背景。这些智能体通过对话和合作来共同完成任务。</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<p><a href="https://fmhw1n4zpn.feishu.cn/docx/AF4XdOZpIo6TOaxzDK8cxInNnCe" target="_blank" rel="noopener noreferrer">CAMEL Multi-Agent Tutorial</a></p>
</div></template>


