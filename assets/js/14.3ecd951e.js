(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1119:function(t,e,r){"use strict";r.r(e);r(81);var i,n=r(286),o=r(292),a=r(289),s=r(553),l={components:(i={},Object(n.a)(i,o.a.name,o.a),Object(n.a)(i,a.a.name,a.a),Object(n.a)(i,s.a.name,s.a),i)},u=r(19),h=Object(u.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("ha-coordinater",{attrs:{grid:[[0,50,50]]}},[e("ha-rectangle",{attrs:{coor:[[[9,10],[7,20]]]}},[e("ha-letter",{attrs:{letter:"H",capital:!0,fillColor:"blue"}})],1),this._v(" "),e("ha-rectangle",{attrs:{coor:[[[18,10],[7,20]]]}},[e("ha-letter",{attrs:{letter:"a",fillColor:"yellow"}})],1),this._v(" "),e("ha-rectangle",{attrs:{coor:[[[27,10],[7,20]]]}},[e("ha-letter",{attrs:{letter:"r",fillColor:"green"}})],1),this._v(" "),e("ha-rectangle",{attrs:{coor:[[[36,10],[7,20]]]}},[e("ha-letter",{attrs:{letter:"u",fillColor:"red"}})],1)],1)}),[],!1,null,null,null);e.default=h.exports},282:function(t,e,r){},284:function(t,e,r){},286:function(t,e,r){"use strict";function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return i}))},287:function(t,e,r){"use strict";var i={wihte:"#ffffff",black:"#000000",green:"#8BC34A",lightGreen:"#DCEDC8",darkGreen:"#689F38",accentGreen:"#4CAF50",blue:"#03A9F4",lightBlue:"#B3E5FC",darkBlue:"#0288D1",accentBlue:"#448AFF",red:"#F44336",lightRed:"#FFCDD2",darkRed:"#D32F2F",accentRed:"#FF4081",yellow:"#FFEB3B",lightYellow:"#FFF9C4",darkYellow:"#FBC02D",accentYellow:"#FF9800",orange:"#FF9800",lightOrange:"#FFE0B2",darkOrange:"#F57C00",accentOrange:"#FFC107",purple:"#9C27B0",lightPurple:"#E1BEE7",darkPurple:"#7B1FA2",accentPurple:"#7C4DFF",grey:"#9E9E9E",lightGrey:"#F5F5F5",darkGrey:"#616161",accentGrey:"#607D8B"};e.a={props:{bgColor:{type:[String,Array],required:!1,default:""},fColor:{type:[String,Array],required:!1,default:""},fillColor:{type:String,required:!1,default:"balck"}},computed:{bgColorClass:function(){return this.getBgColorClass(this.bgColor)},fColorClass:function(){return this.getFColorClass(this.fColor)},fillColorNum:function(){return this.getFillColorNum(this.fillColor)}},methods:{getBgColorClass:function(t){return t},getFColorClass:function(t){return t},getFillColorNum:function(t){return i[t]?i[t]:t}}}},289:function(t,e,r){"use strict";r(139),r(81);function i(t){var e=function t(e,r){var i=e.$parent;return i?i.$options.name===r?i:t(i,r):null}(t,"ha-coordinater");return e||null}var n={shadow:"ha-hover-shadow",opacity:"ha-hover-opacity"},o={name:"ha-rectangle",mixins:[{props:{coor:{type:Array,required:!1,default:function(){return[[[1,1],[1,1]]]}}},computed:{gridColumnStart:function(){var t=1===this.coor.length?0:this.getDemNum(),e=this.coor[t][0][0],r=this.compareCoorX(e);return 0===r?e:r},gridRowStart:function(){var t=1===this.coor.length?0:this.getDemNum(),e=this.coor[t][0][1],r=this.compareCoorY(e);return 0===r?e:r},gridColumnEnd:function(){var t=1===this.coor.length?0:this.getDemNum(),e=this.coor[t][1][0];return this.gridColumnStart+e},gridRowEnd:function(){var t=1===this.coor.length?0:this.getDemNum(),e=this.coor[t][1][1];return this.gridRowStart+e}},methods:{getDemNum:function(){var t=i(this);return t?t.$data.gridDemNum:0},compareCoorX:function(t){var e=i(this);if(!e)return 0;var r=e.$props.grid[0];return t>r?r+2:0},compareCoorY:function(t){var e=i(this);if(!e)return 0;var r=e.$props.grid[1];return t>r?r+2:0}}},{props:{hover:{type:String,requiredL:!1,default:"none"}},methods:{getHoverClass:function(t){return n[t]}},computed:{haHover:function(){return this.getHoverClass(this.hover)}}},{data:function(){return{haShow:!0,flushListener:null}},methods:{getWinWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},flushShow:function(t){return function(){if(t.$attrs.haShow){var e=t.$attrs.haShow,r=t.getWinWidth();t.haShow=!(r<e)}}}},mounted:function(){this.flushListener=this.flushShow(this),this.flushListener(),window.addEventListener("resize",this.flushListener)},beforeDestroy:function(){window.removeEventListener("resize",this.flushListener)}}],props:{width:{type:String,required:!1,default:"100%"},height:{type:String,required:!1,default:"100%"},z:{type:Number,required:!1,default:0},overflow:{type:String,required:!1,default:"hidden"},border:{type:String,required:!1,default:void 0},radius:{type:String,required:!1,default:void 0},padding:{type:String,required:!1,default:void 0}}},a=(r(290),r(19)),s=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.haShow?r("div",{class:["ha-rectangle","ha-rectangle-default","grid-r-c-span2",t.haHover],style:{"grid-row-start":t.gridRowStart,"grid-column-start":t.gridColumnStart,"grid-row-end":t.gridRowEnd,"grid-column-end":t.gridColumnEnd,width:t.width,height:t.height,overflow:t.overflow,"z-index":t.z,border:t.border,"border-radius":t.radius,padding:t.padding}},[t._t("default")],2):t._e()}),[],!1,null,"62c39e06",null);e.a=s.exports},290:function(t,e,r){"use strict";var i=r(282);r.n(i).a},292:function(t,e,r){"use strict";var i={name:"ha-coordinater",data:function(){return{width:"100%",height:"100%",gridDem:this.grid[0],gridDemNum:0,resizeListener:null}},props:{grid:{type:Array,required:!1,default:function(){return[[0,0,0]]}}},computed:{gridComputed:function(){return function(t){var e=this.gridDem[1],r=this.gridDem[2],i=" 1fr ";for(0===e&&(e=20),0===r&&(r=20);r>2;)i+=" 1fr ",r--;for(i+=" / ";e>1;)i+=" 1fr ",e--;return i}}},methods:{getWinWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},onResize:function(t){return function(){var e=t.grid,r=t.getWinWidth;if(1!==e.length){for(var i=r(),n=e[0][0],o=0;o<e.length;o++)if(e[o][0]<i){n=e[o],t.gridDemNum=o;break}t.gridDem=n}}}},mounted:function(){this.resizeListener=this.onResize(this),this.resizeListener(),window.addEventListener("resize",this.resizeListener)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeListener)}},n=(r(293),r(19)),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ha-coordinater ha-coordinater-default",style:{width:this.width,height:this.height,grid:this.gridComputed(this.grid)}},[this._t("default")],2)}),[],!1,null,"c6bbe560",null);e.a=o.exports},293:function(t,e,r){"use strict";var i=r(284);r.n(i).a},312:function(t,e,r){},370:function(t,e,r){"use strict";var i=r(312);r.n(i).a},553:function(t,e,r){"use strict";r(142);var i={name:"ha-letter",mixins:[r(287).a],props:{letter:{type:String,required:!1,default:"a"},capital:{type:Boolean,required:!1,default:!1},family:{type:String,required:!1,default:"YaHei"},glowTube:{type:Boolean,required:!1,default:!0}},data:function(){return{canvass:[],alphabet:[],flushListener:null}},watch:{letter:function(){this.flushCanvas(this)()}},methods:{flushCanvas:function(t){return function(){for(var e=t.canvass.length-1;e>-1;e--)t.canvass[e].width=3*t.$refs.haLetter.offsetWidth,t.canvass[e].height=3*t.$refs.haLetter.offsetHeight,!0===t.glowTube?t.letter===t.alphabet[e]?t.fillLetter(t.canvass[e],t.alphabet[e]):t.strokeLetter(t.canvass[e],t.alphabet[e]):t.fillLetter(t.canvass[e],t.letter)}},strokeLetter:function(t,e){var r=t.getContext("2d"),i=this.$refs.haLetter.offsetWidth,n=this.$refs.haLetter.offsetHeight;r.font="".concat(2.4*n,"px ").concat(this.family),r.textAlign="center",r.textBaseline="bottom",r.strokeStyle="#dddddf",r.strokeText(e,3*i/2,3*n)},fillLetter:function(t,e){var r=t.getContext("2d"),i=this.$refs.haLetter.offsetWidth,n=this.$refs.haLetter.offsetHeight;r.font="".concat(2.4*n,"px ").concat(this.family),r.textAlign="center",r.textBaseline="bottom",r.fillStyle=this.fillColorNum,r.fillText(e,3*i/2,3*n)},init:function(){if(this.canvass=this.$refs.haLetter.children,!0===this.glowTube)for(var t=this.capital?65:97,e=0;e<26;e++)this.alphabet.unshift(String.fromCharCode(t+e));this.flushListener=this.flushCanvas(this),this.flushListener()}},mounted:function(){this.init(),window.addEventListener("resize",this.flushListener)},beforeDestroy:function(){window.removeEventListener("resize",this.flushListener)}},n=(r(370),r(19)),o=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"haLetter",staticClass:"ha-letter-default ha-letter"},this._l(this.glowTube?26:1,(function(t,r){return e("canvas",{key:r,staticClass:"ha-letter-canvas-default ha-letter-canvas"})})),0)}),[],!1,null,"46bf24e9",null);e.a=o.exports}}]);