import{_ as o,M as e,p as c,q as l,a1 as p,R as s,t as a,N as k}from"./framework-e3e34937.js";const r={},u={href:"https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",target:"_blank",rel:"noopener noreferrer"};function i(d,n){const t=e("ExternalLinkIcon");return c(),l("div",null,[n[4]||(n[4]=p(`<h1 id="推导-ref-类型" tabindex="-1"><a class="header-anchor" href="#推导-ref-类型" aria-hidden="true">#</a> 推导 Ref 类型</h1><blockquote><p>类型体操使我更加强壮。</p></blockquote><p>使用 <code>ref</code> 的姿势为：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre></div><p>所以先摆个 <code>Ref</code>：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="推断-infer" tabindex="-1"><a class="header-anchor" href="#推断-infer" aria-hidden="true">#</a> 推断 infer</h2>`,7)),s("p",null,[s("a",u,[n[0]||(n[0]=a("infer")),k(t)]),n[1]||(n[1]=a(" 可在 ")),n[2]||(n[2]=s("code",null,"extends",-1)),n[3]||(n[3]=a(" 条件语句中进行推断："))]),n[5]||(n[5]=p(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Flatten<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token operator">=</span> Type <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token keyword">infer</span> Item<span class="token operator">&gt;</span></span> <span class="token operator">?</span> Item <span class="token operator">:</span> Type
</code></pre></div><h2 id="使用泛型来推导结果" tabindex="-1"><a class="header-anchor" href="#使用泛型来推导结果" aria-hidden="true">#</a> 使用泛型来推导结果</h2><p>有 <code>ref</code> 函数：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> count<span class="token punctuation">.</span>value <span class="token comment">// any</span>
</code></pre></div><p>加上泛型进行推导：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> count<span class="token punctuation">.</span>value <span class="token comment">// number</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">S</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> str<span class="token punctuation">.</span>value <span class="token comment">// string</span>
</code></pre></div><h2 id="ref-值嵌套" tabindex="-1"><a class="header-anchor" href="#ref-值嵌套" aria-hidden="true">#</a> ref 值嵌套</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> count<span class="token punctuation">.</span>value <span class="token comment">// Ref&lt;Ref&lt;number&gt;&gt;</span>
</code></pre></div><p>所以可以作出一个判断，当传入的类型是 Ref 类型时就用其内部的类型，于是得到：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre></div><p>配合使用：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token constant">T</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value
  <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解说：</span>
<span class="token comment">// ref(1) 传入类型是 number，所以条件语句 \`T extends Ref&lt;infer R&gt;\` 会走 false，返回 number</span>
<span class="token comment">// 于是 ref(1) 的类型为 Ref&lt;number&gt;</span>
<span class="token comment">// 再 ref(ref(1))，传入类型是 Ref&lt;number&gt;，所以条件语句 \`T extends Ref&lt;infer R&gt;\` 会走 True，返回 number</span>
<span class="token comment">// 于是 ref(ref(1)) 的类型依旧为 Ref&lt;number&gt;</span>
<span class="token comment">// 再 ref(ref(ref(1)))，传入类型是 Ref&lt;number&gt;，所以条件语句 \`T extends Ref&lt;infer R&gt;\` 会走 True，返回 number</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> count<span class="token punctuation">.</span>value <span class="token comment">// number</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">S</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> str<span class="token punctuation">.</span>value <span class="token comment">// string</span>
</code></pre></div><h2 id="ref-对象嵌套" tabindex="-1"><a class="header-anchor" href="#ref-对象嵌套" aria-hidden="true">#</a> ref 对象嵌套</h2><p>修改下示例：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">OF</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>foo <span class="token comment">// number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">OB</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>bar <span class="token comment">// string</span>
</code></pre></div><p>若其中的值是 <code>ref</code> 呢？</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">OF</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>foo <span class="token comment">// Ref&lt;number&gt;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">OB</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>bar <span class="token comment">// Ref&lt;string&gt;</span>
</code></pre></div><p>这就不符合期望了，需要修改 <code>UnwrapRef</code>：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span>
  <span class="token operator">?</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span>
  <span class="token operator">:</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
                                  
<span class="token comment">// UnwrapRef 仅作 infer，其余交给 UnwrapRefSimple</span>
<span class="token keyword">type</span> <span class="token class-name">UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref</span>
  <span class="token operator">?</span> <span class="token constant">T</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">object</span>
    <span class="token operator">?</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre></div><p>修改测试用例：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    baz<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> c1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C1</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> c1<span class="token punctuation">.</span>value <span class="token comment">// number</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> count<span class="token punctuation">.</span>value <span class="token comment">// number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">OF</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>foo <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">OB</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz <span class="token comment">// boolean</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>arr
obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> a<span class="token punctuation">.</span>foo <span class="token comment">// string | boolean</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="对比结果" tabindex="-1"><a class="header-anchor" href="#对比结果" aria-hidden="true">#</a> 对比结果</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span>
  <span class="token operator">?</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span>
  <span class="token operator">:</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref</span>
  <span class="token operator">?</span> <span class="token constant">T</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">object</span>
    <span class="token operator">?</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">:</span> <span class="token constant">T</span>
    
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value
  <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div><p>而 Vue 源码则是：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RefUnwrapBailTypes</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Ref<span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token operator">&gt;</span></span>
  <span class="token operator">?</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span>
  <span class="token operator">:</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span>
  <span class="token operator">|</span> <span class="token builtin">Function</span>
  <span class="token operator">|</span> CollectionTypes
  <span class="token operator">|</span> BaseTypes
  <span class="token operator">|</span> Ref
  <span class="token operator">|</span> RefUnwrapBailTypes<span class="token punctuation">[</span><span class="token keyword">keyof</span> RefUnwrapBailTypes<span class="token punctuation">]</span>
  <span class="token operator">?</span> <span class="token constant">T</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span>
    <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> UnwrapRefSimple<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">object</span>
      <span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">symbol</span></span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span> <span class="token operator">:</span> UnwrapRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
      <span class="token punctuation">}</span>
      <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre></div><p>源码中比较有意思的是添加了 <code>RefUnwrapBailTypes</code>，增加了外部扩展的空间。</p>`,26))])}const y=o(r,[["render",i],["__file","ref-type.html.vue"]]);export{y as default};
