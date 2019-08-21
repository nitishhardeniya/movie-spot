(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(53)},44:function(e,t,a){},45:function(e,t,a){},5:function(e,t){e.exports={BASE_URL:"https://api.themoviedb.org/3/",IMG_THUMB:"http://image.tmdb.org/t/p/w500",IMG_ORIGINAL:"http://image.tmdb.org/t/p/original",UPCOMING:"movie/upcoming?",POPULAR:"movie/popular?",TOP_RATED:"movie/top_rated?",SEARCH:"search/movie?",API_KEY:"d6dadf6fd94626fca2e1aab19a6cf5e0"}},53:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(24),c=a.n(i),o=(a(44),a(45),a(37)),s={getData:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},setData:function(e,t){var a=JSON.stringify(t);return localStorage.setItem(e,a),!0},clearAll:function(){return localStorage.clear(),!0}},l=a(5),m=a.n(l),u=n.a.memo(function(e){var t=s.getData("wishlist");return n.a.createElement("div",{className:"wl"},"Nitish's wishlist :",t&&Object.keys(t).map(function(e){return n.a.createElement("div",{className:"wl-box"},n.a.createElement("img",{className:"wl-poster",src:l.IMG_THUMB+t[e].poster_path}),n.a.createElement("div",{className:"wl-title"},t[e].name," "))}))}),p=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),i=a[0],c=a[1];return n.a.createElement("div",{className:"top-bar"},n.a.createElement("div",{className:"app-title"},n.a.createElement("span",{style:{fontWeight:"200"}},"Movie")," Spot"),n.a.createElement("i",{className:"material-icons mi-color wl-btn",title:"My wishlist",onClick:function(){return c(!i)}},"favorite"),i&&n.a.createElement(u,null))},d=a(12),v=a(13),E=a(16),h=a(14),f=a(17),g=a(7),y=n.a.memo(Object(g.f)(function(e){var t=e.movies,a=s.getData("wishlist");return n.a.createElement("div",{className:"mv-slider"},t.map(function(t){return n.a.createElement("div",{className:"slider-tiles",key:t.id,onClick:function(){return a=t.id,void e.history.push("/movie/"+a);var a}},n.a.createElement("div",{className:"tile-body"},n.a.createElement("img",{src:l.IMG_THUMB+t.poster_path,width:240,height:360,alt:"no img"}),a&&a.hasOwnProperty(t.id)?n.a.createElement("i",{className:"material-icons mi-color wishlist-icon"},"favorite"):n.a.createElement("i",{className:"material-icons mi-color wishlist-icon"},"favorite_border")),n.a.createElement("div",{className:"tile-footer"},n.a.createElement("div",null,t.title)))}))})),O={_debounce:function(e,t){var a;return function(){var r=this,n=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(r,n)},t)}},_throttle:function(e,t){var a=!0;return function(){var r=arguments;a&&(e.apply(this,r),a=!1,setTimeout(function(){a=!0},t))}}},b=a(15),_=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).getFilteredResults=O._debounce(function(e){a.props.getSearchResult(e)},2e3),a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-box"},n.a.createElement("i",{className:"material-icons mi-color mi-pointer",style:{position:"absolute",top:"15px",right:"10px"}},"search"),n.a.createElement("input",{type:"text",placeholder:"Search for movies ...",onChange:function(t){return e.getFilteredResults(t.target.value)}}))}}]),t}(r.Component),w={getSearchResult:function(e){return{type:"GET_SEARCH",query:e}}},N=Object(b.b)(null,w)(_),M=(r.Component,function(e){return{type:"GET_MOVIES_BY_CAT",query:e}}),j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(E.a)(this,Object(h.a)(t).call(this))).state={movies:[],popular:[],toprated:[],upcoming:[],filters:{}},e}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.getMoviesByCategory("UPCOMING"),this.props.getMoviesByCategory("TOP_RATED"),this.props.getMoviesByCategory("POPULAR")}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"section"},n.a.createElement(N,null),this.state.movies&&this.state.movies.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Search results : ",n.a.createElement("b",null,this.props.filters.query)," ")," ",n.a.createElement(y,{movies:this.state.movies})," "),this.state.upcoming&&this.state.upcoming.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Upcoming ",n.a.createElement("a",{className:"view-all",href:"/category/upcoming"},"view all")," ")," ",n.a.createElement(y,{movies:this.state.upcoming})," "),this.state.popular&&this.state.popular.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Most Popular ",n.a.createElement("a",{className:"view-all",href:"/category/popular"},"view all")," ")," ",n.a.createElement(y,{movies:this.state.popular})," "),this.state.toprated&&this.state.toprated.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Top rated ",n.a.createElement("a",{className:"view-all",href:"/category/top_rated"},"view all"))," ",n.a.createElement(y,{movies:this.state.toprated})," ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.popular?{popular:e.popular,toprated:e.toprated,upcoming:e.upcoming,movies:e.movies,filters:e.filters}:{}}}]),t}(r.PureComponent),I={getMoviesByCategory:M},C=Object(b.b)(function(e){return{popular:e.movies.POPULAR,toprated:e.movies.TOP_RATED,upcoming:e.movies.UPCOMING,movies:e.movies.results,filters:e.filters}},I)(j),T=a(27),R=a.n(T),S=function(e){e.score;return n.a.createElement("div",{className:"stars"},"\u2605 \u2605 \u2605 \u2605 \u2605")},A=n.a.memo(Object(g.f)(function(e){var t=e.cardMeta,a=t.id,r=t.poster_path,i=t.title,c=t.release_date,o=t.vote_average;return n.a.createElement("div",{className:"card",key:a,onClick:function(){return t=a,void e.history.push("/movie/"+t);var t}},n.a.createElement("img",{src:l.IMG_THUMB+r,width:240,height:360,alt:"no img"}),n.a.createElement("div",{className:"card-footer"},n.a.createElement("div",{className:"card-row-sm"},i),n.a.createElement("div",{className:"card-row-sm"},n.a.createElement(S,{score:o,total:10})),n.a.createElement("div",{className:"card-row-sm font-grey"},R()(c).format("dddd, MMMM D YYYY"))))})),P={POPULAR:"Popular",UPCOMING:"Upcoming",TOP_RATED:"Top rated"},k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={category:e.match.params.category,allMovies:[]},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.getMoviesByCategory(this.state.category.toUpperCase())}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-title"},P[this.state.category.toUpperCase()]),n.a.createElement("div",{className:"container"},this.state.allMovies&&this.state.allMovies.map(function(e){return n.a.createElement(A,{key:e.id,cardMeta:e})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(t.category)return{allMovies:e[t.category]}}}]),t}(r.Component),D={getMoviesByCategory:M},x=Object(b.b)(function(e){return{upcoming:e.movies.UPCOMING,top_rated:e.movies.TOP_RATED,popular:e.movies.POPULAR}},D)(k),U=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).addToWishlist=function(e){var t={id:e.id,name:e.title,poster_path:e.poster_path},a=s.getData("wishlist");a?a[t.id]=t:(a={})[t.id]=t,s.setData("wishlist",a)},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovieInfo(this.props.match.params.movieId)}},{key:"getMovieDisplay",value:function(e){var t=this,a=s.getData("wishlist");return a&&a.hasOwnProperty(e.id)&&console.log("Im in wishlist",e),n.a.createElement("div",{className:"main-content"},n.a.createElement("img",{src:l.IMG_ORIGINAL+e.backdrop_path,className:"img-fullpage",alt:"no img"}),n.a.createElement("div",{className:"card-lg"},n.a.createElement("div",{className:"card-popup"},n.a.createElement("div",{className:"popup-title"},e.title),n.a.createElement("div",{className:"card-row"},e.genres.map(function(e){return n.a.createElement("div",{key:e.id,className:"genre"},e.name)})," "),n.a.createElement("div",{className:"card-row font-grey",style:{marginLeft:"5px"}},R()(e.release_date).format("dddd, MMMM D YYYY")),n.a.createElement("p",{className:"card-row desc"},e.overview),n.a.createElement("div",{className:"card-row"},a&&a.hasOwnProperty(e.id)?n.a.createElement("div",{className:"wishlisted"},n.a.createElement("i",{class:"material-icons"},"done"),"Wishlisted"):n.a.createElement("button",{className:"btn-secondary",onClick:function(){t.addToWishlist(e)}},"Add to wishlist")))))}},{key:"render",value:function(){var e=this.props.info;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:""},e?this.getMovieDisplay(e):n.a.createElement("div",null,"Loading...")))}}]),t}(r.Component),G={getMovieInfo:function(e){return{type:"GET_MOVIE_INFO",query:e}}},B=Object(b.b)(function(e){return{info:e.movies.info}},G)(U),Y=a(30),F=a(18),L=a(20),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_BY_CAT":case"GET_MOVIE_INFO":case"GET_SEARCH":return Object(L.a)({},e,{loading:!0});case"MOVIES_BY_CAT_RECEIVED":var a={};return a[t.query]=t.data,Object(L.a)({},e,a,{loading:!1});case"RESULTS_RECIEVED":return Object(L.a)({},e,{results:t.data,loading:!1});case"INFO_RECIEVED":return Object(L.a)({},e,{info:t.data,loading:!1});default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH":return Object(L.a)({},e,{query:t.query,loading:!0});default:return e}},H=Object(F.c)({movies:V,filters:q}),W=a(38),J=a(11),K=a.n(J),X=a(22),$=K.a.mark(te),z=K.a.mark(ae),Q=K.a.mark(re),Z=K.a.mark(ne),ee=K.a.mark(ie);function te(e){var t;return K.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(l.BASE_URL+m.a[e.query]+"api_key="+l.API_KEY).then(function(e){return e.json()});case 2:return t=a.sent,a.next=5,Object(X.b)({type:"MOVIES_BY_CAT_RECEIVED",query:e.query,data:t.results});case 5:case"end":return a.stop()}},$)}function ae(e){var t,a;return K.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(l.BASE_URL+l.SEARCH+"api_key="+l.API_KEY+"&query="+t).then(function(e){return e.json()});case 3:return a=r.sent,r.next=6,Object(X.b)({type:"RESULTS_RECIEVED",data:a.results});case 6:case"end":return r.stop()}},z)}function re(e){var t,a;return K.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(l.BASE_URL+"movie/"+t+"?api_key="+l.API_KEY).then(function(e){return e.json()});case 3:return a=r.sent,r.next=6,Object(X.b)({type:"INFO_RECIEVED",data:a});case 6:case"end":return r.stop()}},Q)}function ne(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)("GET_MOVIES_BY_CAT",te);case 2:return e.next=4,Object(X.d)("GET_SEARCH",ae);case 4:return e.next=6,Object(X.d)("GET_MOVIE_INFO",re);case 6:case"end":return e.stop()}},Z)}function ie(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([ne()]);case 2:case"end":return e.stop()}},ee)}var ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,oe=Object(W.a)(),se=Object(F.e)(H,ce(Object(F.a)(oe)));oe.run(ie);var le=se;le.subscribe(function(){console.log("Redux state tree: ",le.getState())});var me=function(){return n.a.createElement(Y.a,{basename:"/movie-spot"},n.a.createElement(g.c,null,n.a.createElement(g.a,{path:"/",component:C,exact:!0}),n.a.createElement(g.a,{path:"/category/:category",component:x}),n.a.createElement(g.a,{path:"/movie/:movieId",component:B})))};var ue=function(){return n.a.createElement(b.a,{store:le},n.a.createElement(p,null),n.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.b5893f4e.chunk.js.map