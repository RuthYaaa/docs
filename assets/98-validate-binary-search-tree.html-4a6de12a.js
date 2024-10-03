import{_ as a,p as s,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return s(),t("div",null,n[0]||(n[0]=[p(`<h1 id="验证二叉搜索树" tabindex="-1"><a class="header-anchor" href="#验证二叉搜索树" aria-hidden="true">#</a> 验证二叉搜索树</h1><h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h2><p>二叉搜索树的中序遍历是递增的，利用该特性进行处理。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span>

  <span class="token keyword">const</span> rec <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> prev<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    prev <span class="token operator">=</span> root<span class="token punctuation">.</span>val
    <span class="token keyword">return</span> <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">rec</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4)]))}const l=a(o,[["render",e],["__file","98-validate-binary-search-tree.html.vue"]]);export{l as default};
