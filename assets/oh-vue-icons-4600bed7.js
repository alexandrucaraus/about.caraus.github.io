Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:c=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(c)},hover:Boolean,flip:{validator:c=>["horizontal","vertical","both"].includes(c)},speed:{validator:c=>c==="fast"||c==="slow"},label:String,inverse:Boolean},setup(c){const a=S([]),e=f({outerScale:1.2,x:null,y:null}),i=f({width:0,height:0}),h=v(()=>{const t=Number(c.scale);return isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),e.outerScale):t*e.outerScale}),z=v(()=>({"ov-icon":!0,"ov-inverse":c.inverse,"ov-flip-horizontal":c.flip==="horizontal","ov-flip-vertical":c.flip==="vertical","ov-flip-both":c.flip==="both","ov-spin":c.animation==="spin","ov-spin-pulse":c.animation==="spin-pulse","ov-wrench":c.animation==="wrench","ov-ring":c.animation==="ring","ov-pulse":c.animation==="pulse","ov-flash":c.animation==="flash","ov-float":c.animation==="float","ov-hover":c.hover,"ov-fast":c.speed==="fast","ov-slow":c.speed==="slow"})),m=v(()=>c.name?s[c.name]:null),L=v(()=>m.value?`${m.value.minX} ${m.value.minY} ${m.value.width} ${m.value.height}`:`0 0 ${H.value} ${g.value}`),M=v(()=>{if(!m.value)return 1;const{width:t,height:n}=m.value;return Math.max(t,n)/16}),H=v(()=>i.width||m.value&&m.value.width/M.value*h.value||0),g=v(()=>i.height||m.value&&m.value.height/M.value*h.value||0),F=v(()=>h.value!==1&&{fontSize:h.value+"em"}),Y=v(()=>{if(!m.value||!m.value.raw)return null;const t={};let n=m.value.raw;return n=n.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(l,V,C)=>{const r=up("vat-");return t[C]=r,` id="${r}"`}),n=n.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(l,V,C,r)=>{const d=V||r;return d&&t[d]?`#${t[d]}`:l}),n}),X=v(()=>m.value&&m.value.attr?m.value.attr:{}),p=()=>{if(!c.name&&c.name!==null&&a.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(m.value)return;let t=0,n=0;a.value.forEach(l=>{l.outerScale=h.value,t=Math.max(t,l.width),n=Math.max(n,l.height)}),i.width=t,i.height=n,a.value.forEach(l=>{l.x=(t-l.width)/2,l.y=(n-l.height)/2})};return A(()=>{p()}),b(()=>{p()}),{...k(e),children:a,icon:m,klass:z,style:F,width:H,height:g,box:L,attribs:X,raw:Y}},created(){const c=this.$parent;c&&c.children&&c.children.push(this)},render(){const c=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?c.stroke=this.fill?this.fill:"currentColor":c.fill=this.fill?this.fill:"currentColor",this.x&&(c.x=this.x.toString()),this.y&&(c.y=this.y.toString());let a={class:this.klass,style:this.style};if(a=Object.assign(a,c),this.raw){const h=this.title?`<title>${Xp(this.title)}</title>${this.raw}`:this.raw;a.innerHTML=h}const e=this.title?[o("title",this.title)]:[],i=(h,z,m)=>o(h,{...z,key:`${h}-${m}`});return o("svg",a,this.raw?void 0:e.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((h,z)=>i("path",h,z)),...this.icon.polygons.map((h,z)=>i("polygon",h,z))]:[]]))}});function w(c,a){a===void 0&&(a={});var e=a.insertAt;if(c&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],h=document.createElement("style");h.type="text/css",e==="top"&&i.firstChild?i.insertBefore(h,i.firstChild):i.appendChild(h),h.styleSheet?h.styleSheet.cssText=c:h.appendChild(document.createTextNode(c))}}w(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);w(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);w(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);export{bp as F,kp as c,yp as g};
//# sourceMappingURL=oh-vue-icons-4600bed7.js.map