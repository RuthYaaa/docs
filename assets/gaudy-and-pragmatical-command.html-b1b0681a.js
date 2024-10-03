import{_ as s,p as n,q as e,a1 as t}from"./framework-e3e34937.js";const p={};function c(o,a){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="花里胡哨且实用的命令" tabindex="-1"><a class="header-anchor" href="#花里胡哨且实用的命令" aria-hidden="true">#</a> 花里胡哨且实用的命令</h1><h2 id="快速备份" tabindex="-1"><a class="header-anchor" href="#快速备份" aria-hidden="true">#</a> 快速备份</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> test.txt<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> test.txt* <span class="token comment"># 验证</span>
</code></pre></div><p>很多时候更希望以时间作为区分进行备份：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> test<span class="token punctuation">{</span>,_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%y%m%d_%H%M<span class="token variable">\`</span></span><span class="token punctuation">}</span>
</code></pre></div><p>这样有些麻烦，可将其制作为一个脚本，可通过类似 <code>bash cpfile.sh test</code> 调用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$1</span> <span class="token variable">$1_</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%y%m%d_%H%M<span class="token variable">\`</span></span>
</code></pre></div><h2 id="清空文件" tabindex="-1"><a class="header-anchor" href="#清空文件" aria-hidden="true">#</a> 清空文件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token boolean">true</span> <span class="token operator">&gt;</span> access.log
</code></pre></div><h2 id="创建文件夹" tabindex="-1"><a class="header-anchor" href="#创建文件夹" aria-hidden="true">#</a> 创建文件夹</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /app/<span class="token punctuation">{</span>template,logs,package/src<span class="token punctuation">}</span> <span class="token parameter variable">-p</span>
</code></pre></div><h2 id="生成序列文件内容" tabindex="-1"><a class="header-anchor" href="#生成序列文件内容" aria-hidden="true">#</a> 生成序列文件内容</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span>  <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span> <span class="token operator">&gt;</span> <span class="token variable">$i</span><span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre></div>`,13)]))}const r=s(p,[["render",c],["__file","gaudy-and-pragmatical-command.html.vue"]]);export{r as default};
