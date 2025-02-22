<template><div><p>This practice of aligning LLMs with specific personas or characters is commonly konwn as Role-Playing, aiming to fulfill human needs at a psychological and entertainment level.</p>
<p><img src="@source/thinking/papereading/images/x1.png" alt="key components in role-playing" loading="lazy">
key components in role-playing</p>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span><strong>Data</strong></span></a></h3>
<blockquote>
<p>diversity and complexity</p>
</blockquote>
<p>Commonly, role-playing datasets contain two important components: <strong>interactions</strong> and <strong>role-related information</strong>.</p>
<figure><img src="@source/thinking/papereading/images/x2.png" alt="x2.png" tabindex="0" loading="lazy"><figcaption>x2.png</figcaption></figure>
<p>Character-based role-playing scenarios involve simulating a broad spectrum of roles, categorized mainly into two categories: <strong>real world-based</strong> and <strong>virtual scenario-based</strong>.</p>
<ul>
<li>
<p>LLMs as Dta Generator</p>
</li>
<li>
<p>Extracting from Literary Resources</p>
</li>
<li>
<p>Unpublished Resources: <em>role-playing forums</em>(Blue Moon, NationStates, Aryion, ...) <em>online role-playing products</em>, <em>fanfiction communities</em>.</p>
</li>
</ul>
<figure><img src="@source/thinking/papereading/images/Capture_20241111_220103.jpg" alt="Capture_20241111_220103.jpg" tabindex="0" loading="lazy"><figcaption>Capture_20241111_220103.jpg</figcaption></figure>
<h3 id="model-and-alignment" tabindex="-1"><a class="header-anchor" href="#model-and-alignment"><span><strong>Model and alignment</strong></span></a></h3>
<blockquote>
<p>Technically, we divide alignment approaches into Parameter-Tuning: Post-training, Supervised Fine-Tuning (SFT), and Reinforcement Learning; and Parameter-Frozen: In-context learning prompting and Retrieval-Augmented Generation (RAG).</p>
</blockquote>
<figure><img src="@source/thinking/papereading/images/Capture_20241111_220205.jpg" alt="Capture_20241111_220205.jpg" tabindex="0" loading="lazy"><figcaption>Capture_20241111_220205.jpg</figcaption></figure>
<p>Foundation models are critical in setting the base capability of role-playing models, which determine <strong>the lower bounds</strong> of performance and sophistication achievable in role-playing scenarios. A crucial step in pre-training an<em>effective foundation model for role-playing</em> involves incorporating <em>a substantial amount of novels</em> into the pretraining corpus, especially those with a worldview distinct from reality.</p>
<p>Alignment plays a crucial role in defining <strong>the upper limits</strong> of a model's role-playing ability.</p>
<ul>
<li>
<p>Paramater-Tuning Alignment</p>
<ul>
<li>
<p>Countinue-Pretrain</p>
</li>
<li>
<p>Supervised Fine-Tuning(SFT)</p>
</li>
<li>
<p>Self-Alignment To improve weaker LLM by fine-tuning it on outputs from a stronger LLM.</p>
</li>
<li>
<p>Parameter-Efficiency Fine-Tuning(PEFT) PersonaPKT</p>
</li>
<li>
<p>Reinforcement Learning(RLHF) <a href="https://zhuanlan.zhihu.com/p/624589622" target="_blank" rel="noopener noreferrer">详解大模型RLHF过程（配代码解读）</a></p>
</li>
</ul>
<blockquote>
<p>The task of annotating high-quality preference data for role-playing is significantly more challenging than for a generic assistant, as it necessitates a deep understanding of the specific character to accurately annotate preferences.</p>
</blockquote>
</li>
<li>
<p>Paramater-Frozen Alignment</p>
<ul>
<li>
<p>In-Context Learning(ICL) Prompting Typically, filling with role attributes, relations, task requirements within ICL, current LLMs can adapt to different roles swiftly.</p>
</li>
<li>
<p>Retrival Augmented Generation(RAG)</p>
</li>
</ul>
</li>
</ul>
<h3 id="agent-architecture" tabindex="-1"><a class="header-anchor" href="#agent-architecture"><span><strong>Agent architecture</strong></span></a></h3>
<blockquote>
<p>Effective Role-Playing Language Agents (RPLAs) require a comprehensive system architecture that includes several key modules: <strong>memory</strong>, for recalling and utilizing past interactions; <strong>planning</strong>, for strategic decision-making; and <strong>action</strong>, which encompasses both generating role-related responses and using tools. Such complex architectures ensure RPLAs are not only interactive but also adaptive and context-aware, essential for complex role-playing scenarios.</p>
</blockquote>
<p><img src="@source/thinking/papereading/images/Capture_20241111_220224.jpg" alt="The main content flow and categorization of Agent Architecture" loading="lazy">
The main content flow and categorization of Agent Architecture</p>
<figure><img src="@source/thinking/papereading/images/x3.png" alt="x3.png" tabindex="0" loading="lazy"><figcaption>x3.png</figcaption></figure>
<ul>
<li>
<p>RPLAs often operate in environments that require them to remember and synthesize information over time, making memory modules an essential component of their architecture.</p>
</li>
<li>
<p>By integrating such sophisticated planning and reflection capabilities, RPLAs can offer more dynamic and engaging experiences in role-play environments.</p>
</li>
</ul>
<p>Agent actions are the culmination of prior planning, memory utilization, and interactions.</p>
<h3 id="evaluation" tabindex="-1"><a class="header-anchor" href="#evaluation"><span><strong>Evaluation</strong></span></a></h3>
<blockquote>
<p>A composite approach, utilizing multiple metrics in tandem, is essential for a comprehensive evaluation.</p>
</blockquote>
<ul>
<li>
<p>Conversation Ability</p>
<ul>
<li>
<p>Linguistic Quality</p>
</li>
<li>
<p>Coherence</p>
</li>
</ul>
</li>
<li>
<p>Role-Rersona Consistency</p>
<ul>
<li>
<p>Attributes</p>
</li>
<li>
<p>Relations</p>
</li>
</ul>
</li>
<li>
<p>Role-Behavior Consistency</p>
<ul>
<li>
<p>Conversational Style</p>
</li>
<li>
<p>Personality</p>
</li>
<li>
<p>Linguistic Features</p>
</li>
</ul>
</li>
<li>
<p>Role-Playing Attractiveness</p>
<p>Delta PPL emphasizes the use of relative automatic metrics, to gauge the model's role-playing capability using triplets like <mjx-container v-pre class="MathJax" jax="SVG" style="position: relative;"><svg style="vertical-align: -0.566ex;" xmlns="http://www.w3.org/2000/svg" width="13.065ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 5774.6 1000" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g data-mml-node="mo" transform="translate(961,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g data-mml-node="msub" transform="translate(1405.7,0)"><g data-mml-node="mi"><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="TeXAtom" transform="translate(523,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D464" d="M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"></path></g><g data-mml-node="mi" transform="translate(716,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(1061,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g><g data-mml-node="mo" transform="translate(3153.2,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g data-mml-node="msub" transform="translate(3597.8,0)"><g data-mml-node="mi"><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="TeXAtom" transform="translate(523,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(298,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(783,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mi" transform="translate(1252,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g></g></g><g data-mml-node="mo" transform="translate(5385.6,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mrow data-mjx-texclass="ORD"><mi>w</mi><mi>i</mi><mi>n</mi></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow data-mjx-texclass="ORD"><mi>l</mi><mi>o</mi><mi>s</mi><mi>e</mi></mrow></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container>.</p>
<p>This is the most advanced level, where the role-playing models not only maintain persona and behavioral consistency but also enhances the interaction by being engaging, proactive, and empathetic.</p>
</li>
</ul>
<p>To evaluate role-playing language models on the aforementioned dimensions, existing methods can be categorized into three main types: Reference-based, human-based, and LLM-based evaluation.</p>
<p><strong>Reference-based metrics</strong> are efficient and objective, providing quick, quantifiable results ideal for preliminary assessments, though they lack depth and context sensitivity, failing to capture nuances like persona consistency. <strong>Human-based evaluations</strong> offer deep insights into nuances and subtleties in dialogues, including character alignment and user engagement, but are costly and less scalable, with potential for subjective variability between evaluators. <strong>LLM-based evaluations</strong>, leveraging the capabilities of large language models, offer scalability and speed and can mimic some aspects of human judgment, yet they may not always align with human evaluations and depend heavily on the used LLMs.</p>
<h3 id="challenges-and-future-directions" tabindex="-1"><a class="header-anchor" href="#challenges-and-future-directions"><span>Challenges and Future Directions</span></a></h3>
<ul>
<li>
<p>More Reference-based Metrics for evaluating Role-Playing</p>
</li>
<li>
<p>Sensitivity in LLM-Based Evaluation</p>
</li>
<li>
<p>Imbalance, Bias and Cost in Human-based Evaluation</p>
</li>
<li>
<p>Lack of deeper Role-specific Alignment Approaches</p>
</li>
<li>
<p>Ensure the safety in Role-Playing</p>
</li>
<li>
<p>Hallucination in Role-Playing</p>
</li>
</ul>
<p>In general, the advancement of role-playing language models faces numerous challenges, including <strong>the development of specific evaluation metrics</strong>, <strong>efficient memory management</strong>, <strong>ensuring role alignment</strong>, <strong>maintaining safety</strong>, and <strong>facilitating lifelong learning</strong>.</p>
<h3 id="referances" tabindex="-1"><a class="header-anchor" href="#referances"><span>Referances</span></a></h3>
<p><a href="https://arxiv.org/abs/2407.11484" target="_blank" rel="noopener noreferrer">The Oscars of AI Theater: A survey on Role-Playing with Language Models</a></p>
</div></template>


