webpackJsonp([1,0],[function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=i(3),s=a(n),r=i(6),h=a(r);new s["default"]({el:"body",render:function(t){return t(h["default"])}})},function(t,e){},function(t,e){},,function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),s=a(n);e["default"]={components:{tab:s["default"]},data:function(){return{tabtitles:["bajian","github","bajian","github"],tabtitles2:["bajian","github","bajian"]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,a=1,n=2;e["default"]={props:{tabtitles:{type:Array,"default":[]},curPage:{type:Number,"default":1},slideable:{type:Boolean,"default":!0}},watch:{curPage:function(){(void 0).currentPage=(void 0).curPage}},data:function(){return{lastPage:1,currentPage:this.curPage,translateX:0,startTranslateX:0,delta:0,deltaY:0,dragging:!1,startPos:null,startPosY:null,transitioning:!1,slideEls:[],invisible:!0,judge:i}},mounted:function(){this.$nextTick(function(){this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this.slideEls=this.$refs["tabswiper-wrap"].children,this.dragging=!0,this.setPage(this.currentPage);var t=this;setTimeout(function(){t.dragging=t.invisible=!1},100)})},methods:{next:function(){var t=this.currentPage;t<this.slideEls.length?(t++,this.setPage(t)):this._revert()},prev:function(){var t=this.currentPage;t>1?(t--,this.setPage(t)):this._revert()},setPage:function(t){this.lastPage=this.currentPage,this.currentPage=t,this.translateX=-[].reduce.call(this.slideEls,function(e,i,a){return a>t-2?e:e+i.clientWidth},0),this._onTransitionStart()},_onTouchStart:function(t){this.startPos=this._getTouchPos(t),this.startYPos=this._getTouchYPos(t),this.delta=0,this.startTranslateX=this.translateX,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1)},_onTouchMove:function(t){switch(this.delta=this._getTouchPos(t)-this.startPos,this.deltaY=Math.abs(this._getTouchYPos(t)-this.startYPos),this.judge){case i:Math.abs(this.delta)/this.deltaY>1.5?(this.judge=a,t.preventDefault(),t.stopPropagation()):this.judge=n;break;case n:break;case a:this.translateX=this.startTranslateX+this.delta}},_onTouchEnd:function(t){if(this.judge==a){this.dragging=!1;var e=(new Date).getTime()-this.startTime<1e3;this.delta<-100||e&&this.delta<-15&&this.deltaY/this.delta>-6?this.next():this.delta>100||e&&this.delta>15&&this.deltaY/this.delta<6?this.prev():this._revert()}this.judge=i,document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(t){var e="pageX";return t.changedTouches?t.changedTouches[0][e]:t[e]},_getTouchYPos:function(t){var e="pageY";return t.changedTouches?t.changedTouches[0][e]:t[e]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.$emit("tab-change-start",this.currentPage):this.$emit("tab-revert-start",this.currentPage)},_onTransitionEnd:function(t){t.stopPropagation(),"tabswiper-wrap"==t.target.className&&(this.transitioning=!1,this._isPageChanged()?this.$emit("tab-change-end",this.currentPage):this.$emit("tab-revert-end",this.currentPage))},_isPageChanged:function(){return this.lastPage!==this.currentPage}}}},function(t,e,i){var a,n;i(2),a=i(4);var s=i(9);n=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(n=a=a["default"]),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,i){var a,n;i(1),a=i(5);var s=i(8);n=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(n=a=a["default"]),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=a},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("div",{staticClass:"tab-title-container"},[_l(tabtitles,function(t,e){return _h("li",{key:e,staticClass:"tab-title","class":{active:e+1===currentPage},on:{click:function(t){setPage(e+1)}}},[_s(t)])})])," "," ",slideable?_h("div",{staticClass:"tabswiper","class":{invisible:invisible},on:{touchstart:_onTouchStart}},[_h("div",{ref:"tabswiper-wrap",staticClass:"tabswiper-wrap","class":{dragging:dragging},style:{transform:"translate3d("+translateX+"px,0, 0)"},on:{transitionend:_onTransitionEnd}},[_t("default")])]):_h("div",{staticClass:"tabswiper","class":{invisible:invisible}},[_h("div",{ref:"tabswiper-wrap",staticClass:"tabswiper-wrap","class":{dragging:dragging},style:{transform:"translate3d("+translateX+"px,0, 0)"},on:{transitionend:_onTransitionEnd}},[_t("default")])])," "])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("tab",{attrs:{tabtitles:tabtitles,"current-page":3}},[_m(0)," ",_m(1)," ",_m(2)," ",_m(3)])," ",_m(4)," ",_m(5)," ",_m(6)," ",_m(7)," ",_m(8)," ",_h("tab",{attrs:{tabtitles:tabtitles2,slideable:!1}},[_m(9)," ",_m(10)," ",_m(11)])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"tab-content-container"},[_h("button",{attrs:{onclick:"alert(2)"}},["click"])," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("img",{attrs:{src:"http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp"}})," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("img",{attrs:{src:"http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp"}})])},function(){with(this)return _h("div",{staticClass:"tab-content-container"},["\n      bajian2\n    "])},function(){with(this)return _h("div",{staticClass:"tab-content-container"},["\n      bajian3\n    "])},function(){with(this)return _h("div",{staticClass:"tab-content-container"},["\n      bajian4\n    "])},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("div",["allow different height、verticle scroll"])},function(){with(this)return _h("b",["disable slide below:"])},function(){with(this)return _h("br")},function(){with(this)return _h("div",{staticClass:"tab-content-container",attrs:{style:"height: 200px;background-color: green"}},["\n    hahaha1\n    ",_h("img",{attrs:{src:"http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp"}})," ",_h("div",["hahaha1"])," ",_h("div",["hahaha1"])," ",_h("img",{attrs:{src:"http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp"}})])},function(){with(this)return _h("div",{staticClass:"tab-content-container",attrs:{style:"height: 150px;background-color: #999"}},["\n    bajian2\n  "])},function(){with(this)return _h("div",{staticClass:"tab-content-container"},["\n    bajian3\n  "])}]}}]);
//# sourceMappingURL=app.832443d1a07222f09422.js.map