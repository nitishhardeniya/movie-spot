(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(50)},42:function(e,t,a){},43:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(42),a(43),a(16)),l=a(17),u=a(19),s=a(18),p=a(20),d=function(e){return r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"app-title"},r.a.createElement("span",{style:{fontWeight:"200"}},"Movie")," Spot"))},m=a(8),E=function(e){var t=e.movies;e.size;return r.a.createElement("div",{className:"mv-slider"},t.map(function(e){return r.a.createElement("div",{className:"slider-tiles",key:e.id},r.a.createElement("div",{className:"tile-body"},r.a.createElement("img",{src:m.IMG_THUMB+e.poster_path,width:240,height:360,alt:"no img"})),r.a.createElement("div",{className:"tile-footer"},r.a.createElement("div",null,e.title)))}))},f=a(12),h=function(){return{type:"GET_POPULAR"}},v=function(){return{type:"GET_TOPRATED"}},O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={movies:[],popular:[],toprated:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getPopular(),this.props.getToprated()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"cat-header"},"Most Popular ",r.a.createElement("a",{className:"view-all",href:"/popular"},"view all")," "),this.state.popular&&this.state.popular.length>0&&r.a.createElement(E,{movies:this.state.popular}),r.a.createElement("div",{className:"cat-header"},"Top rated ",r.a.createElement("a",{className:"view-all",href:"/toprated"},"view all")),this.state.toprated&&this.state.toprated.length>0&&r.a.createElement(E,{movies:this.state.toprated})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.popular?{popular:e.popular,toprated:e.toprated}:{}}}]),t}(n.Component),b={getPopular:h,getToprated:v},g=Object(f.b)(function(e){return{popular:e.popular,toprated:e.toprated}},b)(O),P=function(e){var t=e.cardMeta,a=t.id,n=t.poster_path,o=t.title;return r.a.createElement("div",{className:"card",key:a},r.a.createElement("img",{src:m.IMG_THUMB+n,width:240,height:360,alt:"no img"}),r.a.createElement("div",null,o))},_=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getPopular()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-title"},"Most popular"),r.a.createElement("div",{className:"container"},this.props.popular&&this.props.popular.map(function(e){return r.a.createElement(P,{key:e.id,cardMeta:e})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{}}}]),t}(n.Component),j={getPopular:h},w=Object(f.b)(function(e){return{popular:e.popular}},j)(_),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getToprated()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-title"},"Most toprated"),r.a.createElement("div",{className:"container"},this.props.toprated&&this.props.toprated.map(function(e){return r.a.createElement(P,{key:e.id,cardMeta:e})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{}}}]),t}(n.Component),y={getToprated:v},k=Object(f.b)(function(e){return{toprated:e.toprated}},y)(T),R=a(15),A=a(29),D=a(13),N=a(23),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POPULAR":case"GET_TOPRATED":return Object(N.a)({},e,{loading:!0});case"POPULAR_RECEIVED":return Object(N.a)({},e,{popular:t.data,loading:!1});case"TOPRATED_RECEIVED":return Object(N.a)({},e,{toprated:t.data,loading:!1});default:return e}},x=a(36),U=a(11),I=a.n(U),S=a(21),L=I.a.mark(F),G=I.a.mark(V),B=I.a.mark(H),C=I.a.mark(K);function F(){var e;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(m.BASE_URL+m.POPULAR+"api_key="+m.API_KEY).then(function(e){return e.json()});case 2:return e=t.sent,t.next=5,Object(S.b)({type:"POPULAR_RECEIVED",data:e.results});case 5:case"end":return t.stop()}},L)}function V(){var e;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(m.BASE_URL+m.TOP_RATED+"api_key="+m.API_KEY).then(function(e){return e.json()});case 2:return e=t.sent,t.next=5,Object(S.b)({type:"TOPRATED_RECEIVED",data:e.results});case 5:case"end":return t.stop()}},G)}function H(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)("GET_POPULAR",F);case 2:return e.next=4,Object(S.c)("GET_TOPRATED",V);case 4:case"end":return e.stop()}},B)}function K(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([H()]);case 2:case"end":return e.stop()}},C)}var W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.c,Y=Object(x.a)(),J=Object(D.d)(M,W(Object(D.a)(Y)));Y.run(K);var X=J;X.subscribe(function(){console.log("Redux state tree: ",X.getState())});var z=function(){return r.a.createElement(A.a,null,r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/",component:g,exact:!0}),r.a.createElement(R.a,{path:"/popular",render:function(){return r.a.createElement(w,{popular:X.getState().popular})}}),r.a.createElement(R.a,{path:"/toprated",component:k})))};var $=function(){return r.a.createElement(f.a,{store:X},r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t){e.exports={BASE_URL:"https://api.themoviedb.org/3/movie/",IMG_THUMB:"http://image.tmdb.org/t/p/w500",POPULAR:"popular?",TOP_RATED:"top_rated?",API_KEY:"d6dadf6fd94626fca2e1aab19a6cf5e0"}}},[[37,1,2]]]);
//# sourceMappingURL=main.50604516.chunk.js.map