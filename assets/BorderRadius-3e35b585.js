import{_,g as p,r as d,o as C,p as v,q as T,R as f}from"./framework-e3e34937.js";const m=p({setup(){const l=d(),a=d(),c=(e,o,n,t,s,r)=>{e.beginPath(),e.moveTo(o+r,n),e.lineTo(o+t-r,n),e.quadraticCurveTo(o+t,n,o+t,n+r),e.lineTo(o+t,n+s-r),e.quadraticCurveTo(o+t,n+s,o+t-r,n+s),e.lineTo(o+r,n+s),e.quadraticCurveTo(o,n+s,o,n+s-r),e.lineTo(o,n+r),e.quadraticCurveTo(o,n,o+r,n),e.closePath()},i=()=>{const e=l.value.getContext("2d");c(e,10,10,280,280,10),e.strokeStyle="#004643",e.stroke(),e.fillStyle="#f9bc60",e.fill(),e.restore()},u=()=>{const e=a.value.getContext("2d");e.save(),e.beginPath(),e.arc(150,150,130,0,Math.PI*2,!1),e.strokeStyle="#232946",e.stroke(),e.clip(),e.fillStyle="#eebbc3",e.fill(),e.restore()};return C(()=>{i(),u()}),{roundCorner:l,circle:a}}}),b={style:{display:"flex","align-items":"center","justify-content":"space-between"}},k={ref:"roundCorner",width:"300",height:"300"},q={ref:"circle",width:"300",height:"300"};function B(l,a,c,i,u,e){return v(),T("div",b,[f("canvas",k,null,512),f("canvas",q,null,512)])}const P=_(m,[["render",B],["__file","BorderRadius.vue"]]);export{P as default};
