import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const e={};function o(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="完美数" tabindex="-1"><a class="header-anchor" href="#完美数" aria-hidden="true">#</a> 完美数</h1><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力" aria-hidden="true">#</a> 暴力</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkPerfectNumber</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> i <span class="token operator">+</span> num <span class="token operator">/</span> i
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret <span class="token operator">===</span> num
<span class="token punctuation">}</span>
</code></pre></div>`,3)]))}const l=s(e,[["render",o],["__file","507-perfect-number.html.vue"]]);export{l as default};
