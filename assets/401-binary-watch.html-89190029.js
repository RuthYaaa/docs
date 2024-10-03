import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="二进制手表" tabindex="-1"><a class="header-anchor" href="#二进制手表" aria-hidden="true">#</a> 二进制手表</h1><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力" aria-hidden="true">#</a> 暴力</h2><p>借助<a href="./191-number-of-1-bits">位 1 的个数</a>。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> countOne <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">&amp;=</span> n <span class="token operator">-</span> <span class="token number">1</span>
    count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">readBinaryWatch</span><span class="token punctuation">(</span>turnedOn<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> h <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">;</span> h<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> m <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">;</span> m<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">countOne</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countOne</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">===</span> turnedOn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>h<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>m <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>m<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=s(o,[["render",e],["__file","401-binary-watch.html.vue"]]);export{l as default};
