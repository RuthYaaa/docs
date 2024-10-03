import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function c(e,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="两个列表的最小索引总和" tabindex="-1"><a class="header-anchor" href="#两个列表的最小索引总和" aria-hidden="true">#</a> 两个列表的最小索引总和</h1><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h2><p>找相同且不重复，很容易联想到哈希表。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findRestaurant</span><span class="token punctuation">(</span>list1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> list2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">Infinity</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  list1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
  list2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mi <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mi <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> i <span class="token operator">+</span> mi
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        strs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        min <span class="token operator">=</span> index
        strs <span class="token operator">=</span> <span class="token punctuation">[</span>l<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> strs
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=s(o,[["render",c],["__file","599-minimum-index-sum-of-two-lists.html.vue"]]);export{l as default};
