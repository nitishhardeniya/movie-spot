(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t){e.exports={BASE_URL:"https://api.themoviedb.org/3/",IMG_THUMB:"http://image.tmdb.org/t/p/w500",IMG_ORIGINAL:"http://image.tmdb.org/t/p/original",NOW_PLAYING:"movie/now_playing?",UPCOMING:"movie/upcoming?",POPULAR:"movie/popular?",TOP_RATED:"movie/top_rated?",SIMILAR:"similar?",SEARCH:"search/movie?",API_KEY:"d6dadf6fd94626fca2e1aab19a6cf5e0"}},41:function(e,t,a){e.exports=a(56)},46:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),o=(a(46),a(47),a(39)),s=a(13),l=a(11),u=a.n(l),m={removeFromWishlist:function(e){return{type:"REMOVE_ITEM_WISHLIST",query:e}},clearWishlist:function(){return{type:"CLEAR_WISHLIST"}}},p=Object(s.b)(null,m)(function(e){var t=e.data;return r.a.createElement("div",{className:"wl"},"Nitish's wishlist :",t&&Object.keys(t).map(function(a){return r.a.createElement("div",{className:"wl-box",key:t[a].id},r.a.createElement("img",{className:"wl-poster",alt:"movie_img",src:l.IMG_THUMB+t[a].poster_path}),r.a.createElement("div",{className:"wl-title"},t[a].name," "),r.a.createElement("i",{className:"material-icons mi-pointer",title:"Remove",onClick:function(){return e.removeFromWishlist(t[a])}},"clear"))}))}),d=Object(s.b)(function(e){return{wishlist:e.wishlist}},null)(function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],c=a[1];return r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"app-title"},r.a.createElement("span",{style:{fontWeight:"200"}},"Movie")," Spot"),r.a.createElement("i",{className:"material-icons mi-color wl-btn",title:"My wishlist",onClick:function(){return c(!i)}},"favorite"),i&&r.a.createElement(p,{data:e.wishlist}))}),v=a(6),h=a(7),E=a(10),f=a(8),g=a(9),y=a(16),O=Object(s.b)(function(e){return{wishlist:e.wishlist}},null)(r.a.memo(Object(y.f)(function(e){var t=e.movies,a=e.wishlist;return r.a.createElement("div",{className:"mv-slider"},t.map(function(t){return r.a.createElement("div",{className:"slider-tiles",key:t.id,onClick:function(){return a=t.id,void e.history.push("/movie/"+a);var a}},r.a.createElement("div",{className:"tile-body"},r.a.createElement("img",{src:l.IMG_THUMB+t.poster_path,width:240,height:360,alt:"no img"}),a&&a.hasOwnProperty(t.id)?r.a.createElement("i",{className:"material-icons mi-color wishlist-icon"},"favorite"):r.a.createElement("i",{className:"material-icons mi-color wishlist-icon"},"favorite_border")),r.a.createElement("div",{className:"tile-footer"},r.a.createElement("div",null,t.title)))}))}))),b={_debounce:function(e,t){var a;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,r)},t)}},_throttle:function(e,t){var a=!0;return function(){var n=arguments;a&&(e.apply(this,n),a=!1,setTimeout(function(){a=!0},t))}}},_=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).getFilteredResults=b._debounce(function(e){a.props.getSearchResult(e)},2e3),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-box"},r.a.createElement("i",{className:"material-icons mi-color mi-pointer",style:{position:"absolute",top:"15px",right:"10px"}},"search"),r.a.createElement("input",{type:"text",placeholder:"Search for movies ...",onChange:function(t){return e.getFilteredResults(t.target.value)}}))}}]),t}(n.Component),I={getSearchResult:function(e){return{type:"GET_SEARCH",query:e}}},w=Object(s.b)(null,I)(_),j=(n.Component,a(23)),N=(a(53),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component)),S=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"})}}]),t}(n.Component),M=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),T=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slider-tiles loading"},r.a.createElement("div",{className:"tile-body loading"}),r.a.createElement("div",{className:"tile-footer loading"}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).state={},a.buildSkeleton=a.buildSkeleton.bind(Object(j.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"buildSkeleton",value:function(e){switch(e){case"title":return r.a.createElement(N,null);case"content":return r.a.createElement(S,null);case"description":return r.a.createElement(M,null);case"card":return r.a.createElement(T,null);default:return r.a.createElement("div",null,"Loading...")}}},{key:"render",value:function(){for(var e=this.props,t=e.type,a=e.count,n=e.direction,i=[],c=0;c<a;)i.push(this.buildSkeleton(t)),c++;return r.a.createElement("div",{className:"sk-container",style:{flexDirection:n}},i)}}]),t}(n.Component),C=function(e){return{type:"GET_MOVIES_BY_CAT",query:e}},A={POPULAR:"Most popular",UPCOMING:"Upcoming",NOW_PLAYING:"Now playing",TOP_RATED:"Top rated"},R=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(E.a)(this,Object(f.a)(t).call(this))).goto=function(t,a){t.preventDefault(),e.props.history.push(a)},e.state={movies:[],popular:[],toprated:[],upcoming:[],nowplaying:[],filters:{}},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.nowplaying||this.props.getMoviesByCategory({category:"NOW_PLAYING",page:1}),this.props.upcoming||this.props.getMoviesByCategory({category:"UPCOMING",page:1}),this.props.toprated||this.props.getMoviesByCategory({category:"TOP_RATED",page:1}),this.props.popular||this.props.getMoviesByCategory({category:"POPULAR",page:1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement(w,null),this.state.movies&&this.state.movies.length>0&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"cat-header"},"Search results : ",r.a.createElement("b",null,this.props.filters.query)," ")," ",r.a.createElement(O,{movies:this.state.movies})," "),r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"cat-header"},A.NOW_PLAYING," ",r.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/now_playing")}},"view all")," ")," ",this.state.nowplaying&&this.state.nowplaying.length>0?r.a.createElement(O,{movies:this.state.nowplaying}):r.a.createElement(k,{type:"card",count:"6",direction:"row"})," "),r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"cat-header"},A.UPCOMING," ",r.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/upcoming")}},"view all")," ")," ",this.state.upcoming&&this.state.upcoming.length>0?r.a.createElement(O,{movies:this.state.upcoming}):r.a.createElement(k,{type:"card",count:"6",direction:"row"})," "),r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"cat-header"},A.POPULAR," ",r.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/popular")}},"view all")," ")," ",this.state.popular&&this.state.popular.length>0?r.a.createElement(O,{movies:this.state.popular}):r.a.createElement(k,{type:"card",count:"6",direction:"row"})," "),r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"cat-header"},A.TOP_RATED," ",r.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/top_rated")}},"view all"))," ",this.state.toprated&&this.state.toprated.length>0?r.a.createElement(O,{movies:this.state.toprated}):r.a.createElement(k,{type:"card",count:"6",direction:"row"})," ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.popular?{popular:e.popular,toprated:e.toprated,nowplaying:e.nowplaying,upcoming:e.upcoming,movies:e.movies,filters:e.filters}:{}}}]),t}(n.PureComponent),L={getMoviesByCategory:C},x=Object(s.b)(function(e){return{popular:e.movies.POPULAR,toprated:e.movies.TOP_RATED,nowplaying:e.movies.NOW_PLAYING,upcoming:e.movies.UPCOMING,movies:e.movies.results,filters:e.filters}},L)(R),P=a(28),D=a.n(P),G=function(e){e.score;return r.a.createElement("div",{className:"stars"},"\u2605 \u2605 \u2605 \u2605 \u2605")},U=r.a.memo(Object(y.f)(function(e){var t=e.cardMeta,a=t.id,n=t.poster_path,i=t.title,c=t.release_date,o=t.vote_average;return r.a.createElement("div",{className:"card",key:a,onClick:function(){return t=a,void e.history.push("/movie/"+t);var t}},r.a.createElement("img",{src:l.IMG_THUMB+n,width:240,height:360,alt:"no img"}),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"card-row-sm"},i),r.a.createElement("div",{className:"card-row-sm"},r.a.createElement(G,{score:o,total:10})),r.a.createElement("div",{className:"card-row-sm font-grey"},D()(c).format("dddd, MMMM D YYYY"))))})),W=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).state={category:e.match.params.category,allMovies:[],page:1},a.loadMoreMovies=a.loadMoreMovies.bind(Object(j.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.category.toUpperCase(),this.state.page}},{key:"loadMoreMovies",value:function(){var e=this,t=this.state.page;this.setState({page:t+1},function(){var t={category:e.state.category.toUpperCase(),page:e.state.page};e.props.getMoviesByCategory(t)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-title"},A[this.state.category.toUpperCase()]),r.a.createElement("div",{className:"container"},this.state.allMovies&&this.state.allMovies.map(function(e){return r.a.createElement(U,{key:e.id,cardMeta:e})}),r.a.createElement("button",{className:"btn-primary",onClick:this.loadMoreMovies},"+ Load more ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(t.category)return{allMovies:e[t.category]}}}]),t}(n.Component),Y={getMoviesByCategory:C},q=Object(s.b)(function(e){return{now_playing:e.movies.NOW_PLAYING,upcoming:e.movies.UPCOMING,top_rated:e.movies.TOP_RATED,popular:e.movies.POPULAR}},Y)(W),B=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovieInfo(this.props.match.params.movieId),this.props.getSimililar(this.props.match.params.movieId)}},{key:"getMovieDisplay",value:function(e){var t=this;return r.a.createElement("div",{className:"main-content"},r.a.createElement("img",{src:l.IMG_ORIGINAL+e.backdrop_path,className:"img-fullpage",alt:"no img"}),r.a.createElement("div",{className:"card-lg"},r.a.createElement("div",{className:"card-popup"},r.a.createElement("div",{className:"popup-title"},e.title),r.a.createElement("div",{className:"card-row"},e.genres.map(function(e){return r.a.createElement("div",{key:e.id,className:"genre"},e.name)})," "),r.a.createElement("div",{className:"card-row font-grey",style:{marginLeft:"5px"}},D()(e.release_date).format("dddd, MMMM D YYYY")),r.a.createElement("p",{className:"card-row desc"},e.overview),r.a.createElement("div",{className:"card-row"},r.a.createElement("div",{className:"card-column-2"},r.a.createElement("span",{className:"card-body-title"},r.a.createElement("i",{className:"material-icons"},"star"),e.vote_average)),r.a.createElement("div",{className:"card-column-2"},r.a.createElement("span",{className:"card-body-title"},r.a.createElement("i",{className:"material-icons"},"thumb_up_alt"),e.vote_count))),r.a.createElement("div",{className:"card-row"},this.props.wishlist&&this.props.wishlist.hasOwnProperty(e.id)?r.a.createElement("button",{className:"btn-primary"},r.a.createElement("i",{className:"material-icons"},"favorite"),r.a.createElement("span",null,"Wishlisted")):r.a.createElement("button",{className:"btn-secondary",onClick:function(){t.props.addToWishlist(e)}},"Add to wishlist")))),this.props.similar&&this.props.similar.length>0&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"cat-header"},"Similar movies : ")," ",r.a.createElement(O,{movies:this.props.similar})," "))}},{key:"render",value:function(){var e=this.props.info;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},e?this.getMovieDisplay(e):r.a.createElement("div",null,"Loading...")))}}]),t}(n.PureComponent),H={getMovieInfo:function(e){return{type:"GET_MOVIE_INFO",query:e}},getSimililar:function(e){return{type:"GET_SIMILAR_MOVIES",query:e}},addToWishlist:function(e){return{type:"ADD_ITEM_WISHLIST",query:e}}},V=Object(s.b)(function(e){return{info:e.movies.info,similar:e.movies.similar,wishlist:e.wishlist}},H)(B),F=a(31),K=a(20),J=a(35),X=a(15),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_BY_CAT":case"GET_MOVIE_INFO":case"GET_SEARCH":return Object(X.a)({},e,{loading:!0});case"MOVIES_BY_CAT_RECEIVED":var a={};return a[t.query.category]=[],a[t.query.category]=e[t.query.category]?[].concat(Object(J.a)(e[t.query.category]),Object(J.a)(t.data)):t.data,Object(X.a)({},e,a,{loading:!1});case"RESULTS_RECIEVED":return Object(X.a)({},e,{results:t.data,loading:!1});case"INFO_RECIEVED":return Object(X.a)({},e,{info:t.data,loading:!1});case"SIMILAR_MOVIES_RECIEVED":return Object(X.a)({},e,{similar:t.data,loading:!1});default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH":return Object(X.a)({},e,{query:t.query,loading:!0});default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WISHLIST_ITEMS":return t.reset?Object(X.a)({},t.data):Object(X.a)({},e,t.data);default:return e}},Z=Object(K.c)({movies:$,filters:z,wishlist:Q}),ee=a(40),te=a(5),ae=a.n(te),ne=a(12),re={getData:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},setData:function(e,t){var a=JSON.stringify(t);return localStorage.setItem(e,a),!0},clear:function(e){return localStorage.removeItem(e),!0},clearAll:function(){return localStorage.clear(),!0}},ie=ae.a.mark(he),ce=ae.a.mark(Ee),oe=ae.a.mark(fe),se=ae.a.mark(ge),le=ae.a.mark(ye),ue=ae.a.mark(Oe),me=ae.a.mark(be),pe=ae.a.mark(_e),de=ae.a.mark(Ie),ve=ae.a.mark(we);function he(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(l.BASE_URL+u.a[e.query.category]+"api_key="+l.API_KEY+"&page="+e.query.page).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 2:return t=a.sent,a.next=5,Object(ne.b)({type:"MOVIES_BY_CAT_RECEIVED",query:e.query,data:t.results});case 5:case"end":return a.stop()}},ie)}function Ee(e){var t,a;return ae.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,fetch(l.BASE_URL+l.SEARCH+"api_key="+l.API_KEY+"&query="+t).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=n.sent,n.next=6,Object(ne.b)({type:"RESULTS_RECIEVED",data:a.results});case 6:case"end":return n.stop()}},ce)}function fe(e){var t,a;return ae.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,fetch(l.BASE_URL+"movie/"+t+"?api_key="+l.API_KEY).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=n.sent,n.next=6,Object(ne.b)({type:"INFO_RECIEVED",data:a});case 6:case"end":return n.stop()}},oe)}function ge(e){var t,a;return ae.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,fetch(l.BASE_URL+"movie/"+t+"/similar?api_key="+l.API_KEY).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=n.sent,n.next=6,Object(ne.b)({type:"SIMILAR_MOVIES_RECIEVED",data:a.results});case 6:case"end":return n.stop()}},se)}function ye(){var e;return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=re.getData("wishlist"),t.next=3,Object(ne.b)({type:"WISHLIST_ITEMS",data:e});case 3:case"end":return t.stop()}},le)}function Oe(e){var t,a,n;return ae.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,a={id:t.id,name:t.title,poster_path:t.poster_path},(n=re.getData("wishlist"))?n[a.id]=a:(n={})[a.id]=a,re.setData("wishlist",n),r.next=7,Object(ne.b)({type:"WISHLIST_ITEMS",data:n});case 7:case"end":return r.stop()}},ue)}function be(e){var t,a;return ae.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.query,!(a=re.getData("wishlist"))||!a[t.id]){n.next=7;break}return delete a[t.id],re.setData("wishlist",a),n.next=7,Object(ne.b)({type:"WISHLIST_ITEMS",data:a,reset:!0});case 7:case"end":return n.stop()}},me)}function _e(){var e;return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((e=re.getData("wishlist"))&&Object.keys(e).length>0)){t.next=6;break}return e={},re.setData("wishlist",e),t.next=6,Object(ne.b)({type:"WISHLIST_ITEMS",data:e,reset:!0});case 6:case"end":return t.stop()}},pe)}function Ie(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.c)("GET_MOVIES_BY_CAT",he);case 2:return e.next=4,Object(ne.d)("GET_SEARCH",Ee);case 4:return e.next=6,Object(ne.d)("GET_MOVIE_INFO",fe);case 6:return e.next=8,Object(ne.d)("GET_SIMILAR_MOVIES",ge);case 8:return e.next=10,Object(ne.d)("GET_WISHLIST",ye);case 10:return e.next=12,Object(ne.d)("ADD_ITEM_WISHLIST",Oe);case 12:return e.next=14,Object(ne.d)("REMOVE_ITEM_WISHLIST",be);case 14:return e.next=16,Object(ne.d)("CLEAR_WISHLIST",_e);case 16:case"end":return e.stop()}},de)}function we(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([Ie()]);case 2:case"end":return e.stop()}},ve)}var je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,Ne=Object(ee.a)(),Se=Object(K.e)(Z,je(Object(K.a)(Ne)));Ne.run(we);var Me=Se;Me.subscribe(function(){console.log("Redux state tree: ",Me.getState())}),Me.dispatch({type:"GET_WISHLIST"});var Te=function(){return r.a.createElement(F.a,{basename:"/movie-spot"},r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",component:x,exact:!0}),r.a.createElement(y.a,{path:"/category/:category",component:q}),r.a.createElement(y.a,{path:"/movie/:movieId",component:V})))};var ke=function(){return r.a.createElement(s.a,{store:Me},r.a.createElement(d,null),r.a.createElement(Te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.02d1a498.chunk.js.map