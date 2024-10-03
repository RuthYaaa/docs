import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="重复的子字符串" tabindex="-1"><a class="header-anchor" href="#重复的子字符串" aria-hidden="true">#</a> 重复的子字符串</h1><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力" aria-hidden="true">#</a> 暴力</h2><p>不要说什么 KMP，暴力就完事了。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">repeatedSubstringPattern</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> si <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>si<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">/</span> i<span class="token punctuation">)</span> <span class="token operator">===</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const r=s(e,[["render",o],["__file","459-repeated-substring-pattern.html.vue"]]);export{r as default};
