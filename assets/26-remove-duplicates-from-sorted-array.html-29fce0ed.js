import{_ as s,p as a,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="删除排序数组中的重复项" tabindex="-1"><a class="header-anchor" href="#删除排序数组中的重复项" aria-hidden="true">#</a> 删除排序数组中的重复项</h1><p>要求返回的是新数组的长度。</p><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// i 偏移，并赋值</span>
      nums<span class="token punctuation">[</span><span class="token operator">++</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=s(o,[["render",e],["__file","26-remove-duplicates-from-sorted-array.html.vue"]]);export{l as default};
