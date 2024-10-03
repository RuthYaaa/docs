import{_ as s,p as a,q as p,a1 as t}from"./framework-e3e34937.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="可以被一步捕获的棋子数" tabindex="-1"><a class="header-anchor" href="#可以被一步捕获的棋子数" aria-hidden="true">#</a> 可以被一步捕获的棋子数</h1><h2 id="暴力" tabindex="-1"><a class="header-anchor" href="#暴力" aria-hidden="true">#</a> 暴力</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">numRookCaptures</span><span class="token punctuation">(</span>board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dx <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> dy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> board<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> ry <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 寻找 R</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rx <span class="token operator">=</span> i
        ry <span class="token operator">=</span> j
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 收集 p</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">;</span> step<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tx <span class="token operator">=</span> rx <span class="token operator">+</span> step <span class="token operator">*</span> dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">const</span> ty <span class="token operator">=</span> ry <span class="token operator">+</span> step <span class="token operator">*</span> dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 0 不做位移</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>tx <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> tx <span class="token operator">&gt;=</span> n <span class="token operator">||</span> ty <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> ty <span class="token operator">&gt;=</span> n <span class="token operator">||</span> board<span class="token punctuation">[</span>tx<span class="token punctuation">]</span><span class="token punctuation">[</span>ty<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>tx<span class="token punctuation">]</span><span class="token punctuation">[</span>ty<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token operator">++</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3)]))}const k=s(o,[["render",e],["__file","999-available-captures-for-rook.html.vue"]]);export{k as default};
