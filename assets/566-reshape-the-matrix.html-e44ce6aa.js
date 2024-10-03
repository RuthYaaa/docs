import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const o={};function c(e,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="重塑矩阵" tabindex="-1"><a class="header-anchor" href="#重塑矩阵" aria-hidden="true">#</a> 重塑矩阵</h1><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">matrixReshape</span><span class="token punctuation">(</span>mat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> mat<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> n <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> n <span class="token operator">!==</span>  r <span class="token operator">*</span> c<span class="token punctuation">)</span> <span class="token keyword">return</span> mat

  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ret<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> c<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">%</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> mat<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> n<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">%</span> n<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><h2 id="展开" tabindex="-1"><a class="header-anchor" href="#展开" aria-hidden="true">#</a> 展开</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">matrixReshape</span><span class="token punctuation">(</span>mat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flatten <span class="token operator">=</span> mat<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>flatten<span class="token punctuation">.</span>length <span class="token operator">!==</span> r <span class="token operator">*</span> c<span class="token punctuation">)</span> <span class="token keyword">return</span> mat

  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> r <span class="token operator">*</span> c<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ret<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> c<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">%</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> flatten<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,5)]))}const l=s(o,[["render",c],["__file","566-reshape-the-matrix.html.vue"]]);export{l as default};
