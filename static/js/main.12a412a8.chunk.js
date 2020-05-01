(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{4:function(e,t){e.exports={BASE_URL:"https://api.themoviedb.org/3",IMG_THUMB:"http://image.tmdb.org/t/p/w500",IMG_ORIGINAL:"http://image.tmdb.org/t/p/original",NOW_PLAYING:"/movie/now_playing?",UPCOMING:"/movie/upcoming?",POPULAR:"/movie/popular?",TOP_RATED:"/movie/top_rated?",LATEST_TV:"/tv/on_the_air?",POPULAR_TV:"/tv/popular?",TOP_RATED_TV:"/tv/top_rated?",SIMILAR:"/similar?",SEARCH:"/search/multi?",SEARCH_MOVIE:"/search/movie?",API_KEY:"d6dadf6fd94626fca2e1aab19a6cf5e0"}},50:function(e,t,a){e.exports=a(68)},55:function(e,t,a){},56:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),o=a.n(c),i=(a(55),a(56),a(32)),s=a(33),l=a(13),u=a(15),m=a(20),p=a(28),d=a.n(p),v=d()("mode",{light:"#fff",dark:"#222"}),h=d()("mode",{light:"#000",dark:"#fff"}),E=(d()("mode",{light:"#222",dark:"#eee"}),d()("mode",{light:"#eee",dark:"#222"}),d()("mode",{light:"#f5f5f5",dark:"#4a4a4a"}));function f(){var e=Object(i.a)(["\n        background-color: ",";\n        color: ","\n    "]);return f=function(){return e},e}var g=n.a.createContext(),y=(m.a,a(46)),_=a.n(y),b=a(4),O=a.n(b),T=function(e){return{type:"ADD_ITEM_WISHLIST",query:e}},I={removeFromWishlist:function(e){return{type:"REMOVE_ITEM_WISHLIST",query:e}},clearWishlist:function(){return{type:"CLEAR_WISHLIST"}}},w=Object(l.b)(null,I)(function(e){var t=e.data;return n.a.createElement("div",{className:"wl"},"Nitish's wishlist :",t&&Object.keys(t).map(function(a){return n.a.createElement("div",{className:"wl-box",key:t[a].id},n.a.createElement("img",{className:"wl-poster",alt:"movie_img",src:b.IMG_THUMB+t[a].poster_path}),n.a.createElement("div",{className:"wl-title"},t[a].name||t[a].title," "),n.a.createElement("i",{className:"material-icons mi-pointer",title:"Remove",onClick:function(){return e.removeFromWishlist(t[a])}},"clear"))}))});function S(){var e=Object(i.a)(["\n\t\tbackground-color: ","\n\t"]);return S=function(){return e},e}var N=Object(l.b)(function(e){return{wishlist:e.wishlist}},null)(Object(m.c)(Object(u.f)(function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=n.a.useContext(g),l=m.b.div(S(),E);return n.a.createElement(l,{className:"top-bar"},"/"!==e.location.pathname?n.a.createElement("div",null,n.a.createElement("i",{className:"material-icons mi-color back-btn",onClick:function(){e.history.goBack()}},"keyboard_backspace")):n.a.createElement("div",{className:"mode-switch"},n.a.createElement("span",{className:"font-grey"},"Dark Mode"),n.a.createElement(_.a,{onChange:function(){return i.toggleTheme()},checked:"dark"===e.theme.mode,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:20,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:15,width:35,className:"react-switch",id:"material-switch"})),n.a.createElement("div",{className:"app-title"},n.a.createElement("span",{style:{fontWeight:"200"}},"Movie")," Spot"),n.a.createElement("div",null,n.a.createElement("i",{className:"material-icons mi-color wl-btn",title:"My wishlist",onClick:function(){return o(!c)}},"favorite")),c&&n.a.createElement(w,{data:e.wishlist}))}))),j=a(7),k=a(8),M=a(10),A=a(9),R=a(11),C=Object(l.b)(function(e){return{wishlist:e.wishlist}},null)(n.a.memo(Object(u.f)(function(e){var t=e.records,a=e.type,r=e.wishlist;return n.a.createElement("div",{className:"mv-slider"},t&&t.map(function(t){return n.a.createElement("div",{className:"slider-tiles",key:t.id,onClick:function(){return r=t.id,n=t.media_type,void((a||n)&&"movie"===(n||a)?e.history.push("/movie/"+r):e.history.push("/tv/"+r));var r,n}},n.a.createElement("div",{className:"tile-body"},n.a.createElement("img",{src:b.IMG_THUMB+t.poster_path,width:190,height:290,alt:"no img"}),r&&r.hasOwnProperty(t.id)?n.a.createElement("i",{className:"material-icons mi-color wishlist-icon"},"favorite"):n.a.createElement("i",{className:"material-icons mi-color wishlist-icon"},"favorite_border")),n.a.createElement("div",{className:"tile-footer"},n.a.createElement("div",null,t.title||t.name)))}))}))),L={_debounce:function(e,t){var a;return function(){var r=this,n=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(r,n)},t)}},_throttle:function(e,t){var a=!0;return function(){var r=arguments;a&&(e.apply(this,r),a=!1,setTimeout(function(){a=!0},t))}}},P=function(e){function t(){var e,a;Object(j.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(n)))).getFilteredResults=L._debounce(function(e){a.props.getSearchResult(e)},2e3),a}return Object(R.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-box"},n.a.createElement("i",{className:"material-icons mi-color mi-pointer",style:{position:"absolute",top:"15px",right:"10px"}},"search"),n.a.createElement("input",{type:"text",placeholder:"Search for movies ...",onChange:function(t){return e.getFilteredResults(t.target.value)}}))}}]),t}(r.Component),x={getSearchResult:function(e){return{type:"GET_SEARCH",query:e}}},V=Object(l.b)(null,x)(P),D=(r.Component,a(24)),G=(a(65),function(e){function t(){return Object(j.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"loading"})}}]),t}(r.Component)),U=function(e){function t(){return Object(j.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"loading"})}}]),t}(r.Component),B=function(e){function t(){return Object(j.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null)}}]),t}(r.Component),q=function(e){function t(){return Object(j.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"slider-tiles loading"},n.a.createElement("div",{className:"tile-body loading"}),n.a.createElement("div",{className:"tile-footer loading"}))}}]),t}(r.Component),W=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(M.a)(this,Object(A.a)(t).call(this,e))).state={},a.buildSkeleton=a.buildSkeleton.bind(Object(D.a)(a)),a}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){}},{key:"buildSkeleton",value:function(e){switch(e){case"title":return n.a.createElement(G,null);case"content":return n.a.createElement(U,null);case"description":return n.a.createElement(B,null);case"card":return n.a.createElement(q,null);default:return n.a.createElement("div",null,"Loading...")}}},{key:"render",value:function(){for(var e=this.props,t=e.type,a=e.count,r=e.direction,c=[],o=0;o<a;)c.push(this.buildSkeleton(t)),o++;return n.a.createElement("div",{className:"sk-container",style:{flexDirection:r}},c)}}]),t}(r.Component),Y=function(e){return{type:"GET_MOVIES_BY_CAT",query:e}},F=function(e){return{type:"GET_TV_SERIES_BY_CAT",query:e}},H={POPULAR:"Most popular",UPCOMING:"Upcoming",NOW_PLAYING:"Now playing",TOP_RATED:"Top rated",LATEST_TV:"Latest on TV",POPULAR_TV:"Popular on TV",TOP_RATED_TV:"Top rated on TV"},K=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(M.a)(this,Object(A.a)(t).call(this))).goto=function(t,a,r){t.preventDefault(),e.props.history.push({pathname:a})},e.state={movies:[],popular:[],toprated:[],upcoming:[],nowplaying:[],popularTv:[],topratedTv:[],latestTv:[],filters:{}},e}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.nowplaying||this.props.getMoviesByCategory({category:"NOW_PLAYING",page:1}),this.props.upcoming||this.props.getMoviesByCategory({category:"UPCOMING",page:1}),this.props.toprated||this.props.getMoviesByCategory({category:"TOP_RATED",page:1}),this.props.popular||this.props.getMoviesByCategory({category:"POPULAR",page:1}),this.props.latestTv||this.props.getTvSeriesByCategory({category:"LATEST_TV",page:1}),this.props.topratedTv||this.props.getTvSeriesByCategory({category:"TOP_RATED_TV",page:1}),this.props.popularTv||this.props.getTvSeriesByCategory({category:"POPULAR_TV",page:1})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"section"},n.a.createElement(V,null),this.state.movies&&this.state.movies.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Search results : ",n.a.createElement("b",null,this.props.filters.query)," ")," ",n.a.createElement(C,{records:this.state.movies,type:"movie"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.NOW_PLAYING," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/movie/now_playing")}},"view all")," ")," ",this.state.nowplaying&&this.state.nowplaying.length>0?n.a.createElement(C,{records:this.state.nowplaying,type:"movie"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.UPCOMING," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/movie/upcoming")}},"view all")," ")," ",this.state.upcoming&&this.state.upcoming.length>0?n.a.createElement(C,{records:this.state.upcoming,type:"movie"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.POPULAR," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/movie/popular")}},"view all")," ")," ",this.state.popular&&this.state.popular.length>0?n.a.createElement(C,{records:this.state.popular,type:"movie"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.TOP_RATED," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/movie/top_rated")}},"view all"))," ",this.state.toprated&&this.state.toprated.length>0?n.a.createElement(C,{records:this.state.toprated,type:"movie"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.LATEST_TV," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/tv/latest_tv")}},"view all"))," ",this.state.latestTv&&this.state.latestTv.length>0?n.a.createElement(C,{records:this.state.latestTv,type:"tv"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.POPULAR_TV," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/tv/popular_tv")}},"view all"))," ",this.state.popularTv&&this.state.popularTv.length>0?n.a.createElement(C,{records:this.state.popularTv,type:"tv"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," "),n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},H.TOP_RATED_TV," ",n.a.createElement("a",{className:"view-all",href:"",onClick:function(t){return e.goto(t,"/category/tv/top_rated_tv")}},"view all"))," ",this.state.topratedTv&&this.state.topratedTv.length>0?n.a.createElement(C,{records:this.state.topratedTv,type:"tv"}):n.a.createElement(W,{type:"card",count:"7",direction:"row"})," ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.popular?{popular:e.popular,toprated:e.toprated,nowplaying:e.nowplaying,upcoming:e.upcoming,movies:e.movies,popularTv:e.popularTv,topratedTv:e.topratedTv,latestTv:e.latestTv,filters:e.filters}:{}}}]),t}(r.PureComponent),J={getMoviesByCategory:Y,getTvSeriesByCategory:F},X=Object(l.b)(function(e){return{popular:e.movies.POPULAR,toprated:e.movies.TOP_RATED,nowplaying:e.movies.NOW_PLAYING,upcoming:e.movies.UPCOMING,movies:e.movies.results,topratedTv:e.tv.TOP_RATED_TV,latestTv:e.tv.LATEST_TV,popularTv:e.tv.POPULAR_TV,filters:e.filters}},J)(K),$=a(25),z=a.n($),Q=function(e){e.score;return n.a.createElement("div",{className:"stars"},"\u2605 \u2605 \u2605 \u2605 \u2605")},Z=n.a.memo(Object(u.f)(function(e){var t=e.type,a=e.cardMeta,r=a.id,c=a.poster_path,o=a.title,i=a.name,s=a.release_date,l=a.first_air_date,u=a.vote_average;return n.a.createElement("div",{className:"card",key:r,onClick:function(){return function(a){t&&"movie"===t?e.history.push("/movie/"+a):e.history.push("/tv/"+a)}(r)}},n.a.createElement("img",{src:b.IMG_THUMB+c,width:190,height:250,alt:"no img"}),n.a.createElement("div",{className:"card-footer"},n.a.createElement("div",{className:"card-row-sm"},o||i),n.a.createElement("div",{className:"card-row-sm"},n.a.createElement(Q,{score:u,total:10})),n.a.createElement("div",{className:"card-row-sm font-grey"},z()(s||l).format("dddd, MMMM D YYYY"))))})),ee=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(M.a)(this,Object(A.a)(t).call(this,e))).state={category:e.match.params.category,allMovies:[],page:1},a.loadMoreMovies=a.loadMoreMovies.bind(Object(D.a)(a)),a}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this.props[this.props.match.params.category];if(!e||0===e.length){var t=this.props.match.params.type,a={category:this.state.category.toUpperCase(),page:this.state.page};"movie"===t?this.props.getMoviesByCategory(a):this.props.getTvSeriesByCategory(a)}}},{key:"loadMoreMovies",value:function(){var e=this,t=this.state.page,a=this.props.match.params.type;this.setState({page:t+1},function(){var t={category:e.state.category.toUpperCase(),page:e.state.page};"movies"===a?e.props.getMoviesByCategory(t):e.props.getTvSeriesByCategory(t)})}},{key:"render",value:function(){var e=this.props.match.params?this.props.match.params.type:"movie";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-title"},H[this.state.category.toUpperCase()]),n.a.createElement("div",{className:"container"},this.state.allMovies&&this.state.allMovies.map(function(t){return n.a.createElement(Z,{key:t.id,cardMeta:t,type:e})}),n.a.createElement("button",{className:"btn-primary",onClick:this.loadMoreMovies},"+ Load more ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(t.category)return{allMovies:e[t.category]}}}]),t}(r.Component),te={getMoviesByCategory:Y,getTvSeriesByCategory:F},ae=Object(l.b)(function(e){return{now_playing:e.movies.NOW_PLAYING,upcoming:e.movies.UPCOMING,top_rated:e.movies.TOP_RATED,popular:e.movies.POPULAR,top_rated_tv:e.tv.TOP_RATED_TV,latest_tv:e.tv.LATEST_TV,popular_tv:e.tv.POPULAR_TV}},te)(ee),re=function(e){function t(){return Object(j.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovieInfo(this.props.match.params.movieId),this.props.getSimililar(this.props.match.params.movieId)}},{key:"componentDidUpdate",value:function(e){e.match.params.movieId!==this.props.match.params.movieId&&(this.props.getMovieInfo(this.props.match.params.movieId),this.props.getSimililar(this.props.match.params.movieId))}},{key:"getMovieDisplay",value:function(e){var t=this;return n.a.createElement("div",{className:"main-content"},n.a.createElement("img",{src:b.IMG_ORIGINAL+e.backdrop_path,className:"img-fullpage",alt:"no img"}),n.a.createElement("div",{className:"card-lg"},n.a.createElement("div",{className:"card-popup"},n.a.createElement("div",{className:"popup-title"},e.title),n.a.createElement("div",{className:"card-row"},e.genres.map(function(e){return n.a.createElement("div",{key:e.id,className:"genre"},e.name)})," "),n.a.createElement("div",{className:"card-row font-grey"},z()(e.release_date).format("dddd, MMMM D YYYY")),n.a.createElement("p",{className:"card-row desc"},e.overview),n.a.createElement("div",{className:"card-row"},n.a.createElement("div",{className:"card-column-2"},n.a.createElement("span",{className:"card-column-content"},n.a.createElement("i",{className:"material-icons"},"star"),e.vote_average," (",e.vote_count,")")),n.a.createElement("div",{className:"card-column-2"},n.a.createElement("span",{className:"card-body-title"},"Runtime"),n.a.createElement("div",{className:"card-column-content"},Math.floor(e.runtime/60)+"hr "+e.runtime%60+"min"))),n.a.createElement("div",{className:"card-row"},this.props.wishlist&&this.props.wishlist.hasOwnProperty(e.id)?n.a.createElement("button",{className:"btn-primary"},n.a.createElement("i",{className:"material-icons"},"favorite"),n.a.createElement("span",null,"Wishlisted")):n.a.createElement("button",{className:"btn-secondary",onClick:function(){t.props.addToWishlist(e)}},"Add to wishlist")))),this.props.similar&&this.props.similar.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Similar movies : ")," ",n.a.createElement(C,{records:this.props.similar,type:"movie"})," "))}},{key:"render",value:function(){var e=this.props.info;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:""},e?this.getMovieDisplay(e):n.a.createElement("div",null,"Loading...")))}}]),t}(r.PureComponent),ne={getMovieInfo:function(e){return{type:"GET_MOVIE_INFO",query:e}},getSimililar:function(e){return{type:"GET_SIMILAR_MOVIES",query:e}},addToWishlist:T},ce=Object(l.b)(function(e){return{info:e.movies.info,similar:e.movies.similar,wishlist:e.wishlist}},ne)(re),oe=function(e){function t(){return Object(j.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.getTvSeriesInfo(this.props.match.params.tvId),this.props.getSimililarTvSeries(this.props.match.params.tvId)}},{key:"componentDidUpdate",value:function(e){e.match.params.tvId!==this.props.match.params.tvId&&(this.props.getTvSeriesInfo(this.props.match.params.tvId),this.props.getSimililarTvSeries(this.props.match.params.tvId))}},{key:"getMovieDisplay",value:function(e){var t=this;return n.a.createElement("div",{className:"main-content"},n.a.createElement("img",{src:b.IMG_ORIGINAL+e.backdrop_path,className:"img-fullpage",alt:"no img"}),n.a.createElement("div",{className:"card-lg"},n.a.createElement("div",{className:"card-popup"},n.a.createElement("div",{className:"popup-title"},e.name),n.a.createElement("div",{className:"card-row"},e.genres.map(function(e){return n.a.createElement("div",{key:e.id,className:"genre"},e.name)})," "),n.a.createElement("div",{className:"card-row font-grey"},z()(e.first_air_date).format("dddd, MMMM D YYYY")),n.a.createElement("p",{className:"card-row desc"},e.overview),n.a.createElement("div",{className:"card-row"},n.a.createElement("div",{className:"card-column-2"},n.a.createElement("span",{className:"card-column-content"},n.a.createElement("i",{className:"material-icons"},"star"),e.vote_average," (",e.vote_count,")")),n.a.createElement("div",{className:"card-column-2"},n.a.createElement("span",{className:"card-body-title"},"Status"),n.a.createElement("div",{className:"card-column-content"},e.status)),n.a.createElement("div",{className:"card-column-2"},n.a.createElement("span",{className:"card-body-title"},"Number of Seasons"),n.a.createElement("div",{className:"card-column-content"},e.number_of_seasons)),n.a.createElement("div",{className:"card-column-2"},n.a.createElement("span",{className:"card-body-title"},"Number of Episodes"),n.a.createElement("div",{className:"card-column-content"},e.number_of_episodes))),n.a.createElement("div",{className:"season-list"},e.seasons&&e.seasons.map(function(e){return n.a.createElement("div",{className:"season-item",style:{backgroundImage:"url(".concat(b.IMG_ORIGINAL+e.poster_path,")")}})})),n.a.createElement("div",{className:"card-row"},this.props.wishlist&&this.props.wishlist.hasOwnProperty(e.id)?n.a.createElement("button",{className:"btn-primary"},n.a.createElement("i",{className:"material-icons"},"favorite"),n.a.createElement("span",null,"Wishlisted")):n.a.createElement("button",{className:"btn-secondary",onClick:function(){t.props.addToWishlist(e)}},"Add to wishlist")))),this.props.similar&&this.props.similar.length>0&&n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"cat-header"},"Similar movies : ")," ",n.a.createElement(C,{records:this.props.similar,type:"tv"})," "))}},{key:"render",value:function(){var e=this.props.info;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:""},e?this.getMovieDisplay(e):n.a.createElement("div",null,"Loading...")))}}]),t}(r.PureComponent),ie={getTvSeriesInfo:function(e){return{type:"GET_TV_SERIES_INFO",query:e}},getSimililarTvSeries:function(e){return{type:"GET_SIMILAR_TV_SERIES",query:e}},addToWishlist:T},se=Object(l.b)(function(e){return{info:e.tv.info,similar:e.tv.similar,wishlist:e.wishlist}},ie)(oe),le=a(35),ue=a(18),me=a(27),pe=a(14),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_BY_CAT":case"GET_MOVIE_INFO":case"GET_SEARCH":return Object(pe.a)({},e,{loading:!0});case"MOVIES_BY_CAT_RECEIVED":var a={};return a[t.query.category]=[],a[t.query.category]=e[t.query.category]?[].concat(Object(me.a)(e[t.query.category]),Object(me.a)(t.data)):t.data,Object(pe.a)({},e,a,{loading:!1});case"RESULTS_RECIEVED":return Object(pe.a)({},e,{results:t.data,loading:!1});case"INFO_RECIEVED":return Object(pe.a)({},e,{info:t.data,loading:!1});case"SIMILAR_MOVIES_RECIEVED":return Object(pe.a)({},e,{similar:t.data,loading:!1});default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TV_SERIES_BY_CAT_RECEIVED":var a={};return a[t.query.category]=[],a[t.query.category]=e[t.query.category]?[].concat(Object(me.a)(e[t.query.category]),Object(me.a)(t.data)):t.data,Object(pe.a)({},e,a);case"TV_SERIES_INFO_RECIEVED":return Object(pe.a)({},e,{info:t.data,loading:!1});case"SIMILAR_TV_SERIES_RECIEVED":return Object(pe.a)({},e,{similar:t.data,loading:!1});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH":return Object(pe.a)({},e,{query:t.query,loading:!0});default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WISHLIST_ITEMS":return t.reset?Object(pe.a)({},t.data):Object(pe.a)({},e,t.data);default:return e}},fe=Object(ue.c)({movies:de,tv:ve,filters:he,wishlist:Ee}),ge=a(48),ye=a(5),_e=a.n(ye),be=a(6),Oe={getData:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},setData:function(e,t){var a=JSON.stringify(t);return localStorage.setItem(e,a),!0},clear:function(e){return localStorage.removeItem(e),!0},clearAll:function(){return localStorage.clear(),!0}},Te=_e.a.mark(xe),Ie=_e.a.mark(Ve),we=_e.a.mark(De),Se=_e.a.mark(Ge),Ne=_e.a.mark(Ue),je=_e.a.mark(Be),ke=_e.a.mark(qe),Me=_e.a.mark(We),Ae=_e.a.mark(Ye),Re=_e.a.mark(Fe),Ce=_e.a.mark(He),Le=_e.a.mark(Ke),Pe=_e.a.mark(Je);function xe(e){var t;return _e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(b.BASE_URL+O.a[e.query.category]+"api_key="+b.API_KEY+"&page="+e.query.page).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 2:return t=a.sent,a.next=5,Object(be.b)({type:"MOVIES_BY_CAT_RECEIVED",query:e.query,data:t.results});case 5:case"end":return a.stop()}},Te)}function Ve(e){var t;return _e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(b.BASE_URL+O.a[e.query.category]+"api_key="+b.API_KEY+"&page="+e.query.page).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 2:return t=a.sent,a.next=5,Object(be.b)({type:"TV_SERIES_BY_CAT_RECEIVED",query:e.query,data:t.results});case 5:case"end":return a.stop()}},Ie)}function De(e){var t,a;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(b.BASE_URL+b.SEARCH+"api_key="+b.API_KEY+"&query="+t).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=r.sent,r.next=6,Object(be.b)({type:"RESULTS_RECIEVED",data:a.results});case 6:case"end":return r.stop()}},we)}function Ge(e){var t,a;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(b.BASE_URL+"/movie/"+t+"?api_key="+b.API_KEY).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=r.sent,r.next=6,Object(be.b)({type:"INFO_RECIEVED",data:a});case 6:case"end":return r.stop()}},Se)}function Ue(e){var t,a;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(b.BASE_URL+"/movie/"+t+"/similar?api_key="+b.API_KEY).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=r.sent,r.next=6,Object(be.b)({type:"SIMILAR_MOVIES_RECIEVED",data:a.results});case 6:case"end":return r.stop()}},Ne)}function Be(e){var t,a;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(b.BASE_URL+"/tv/"+t+"?api_key="+b.API_KEY).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=r.sent,r.next=6,Object(be.b)({type:"TV_SERIES_INFO_RECIEVED",data:a});case 6:case"end":return r.stop()}},je)}function qe(e){var t,a;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,fetch(b.BASE_URL+"/tv/"+t+"/similar?api_key="+b.API_KEY).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:return a=r.sent,r.next=6,Object(be.b)({type:"SIMILAR_TV_SERIES_RECIEVED",data:a.results});case 6:case"end":return r.stop()}},ke)}function We(){var e;return _e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Oe.getData("wishlist"),t.next=3,Object(be.b)({type:"WISHLIST_ITEMS",data:e});case 3:case"end":return t.stop()}},Me)}function Ye(e){var t,a,r;return _e.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,a={id:t.id,name:t.title||t.name,poster_path:t.poster_path},(r=Oe.getData("wishlist"))?r[a.id]=a:(r={})[a.id]=a,Oe.setData("wishlist",r),n.next=7,Object(be.b)({type:"WISHLIST_ITEMS",data:r});case 7:case"end":return n.stop()}},Ae)}function Fe(e){var t,a;return _e.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.query,!(a=Oe.getData("wishlist"))||!a[t.id]){r.next=7;break}return delete a[t.id],Oe.setData("wishlist",a),r.next=7,Object(be.b)({type:"WISHLIST_ITEMS",data:a,reset:!0});case 7:case"end":return r.stop()}},Re)}function He(){var e;return _e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((e=Oe.getData("wishlist"))&&Object.keys(e).length>0)){t.next=6;break}return e={},Oe.setData("wishlist",e),t.next=6,Object(be.b)({type:"WISHLIST_ITEMS",data:e,reset:!0});case 6:case"end":return t.stop()}},Ce)}function Ke(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.c)("GET_MOVIES_BY_CAT",xe);case 2:return e.next=4,Object(be.d)("GET_SEARCH",De);case 4:return e.next=6,Object(be.d)("GET_MOVIE_INFO",Ge);case 6:return e.next=8,Object(be.d)("GET_SIMILAR_MOVIES",Ue);case 8:return e.next=10,Object(be.d)("GET_TV_SERIES_INFO",Be);case 10:return e.next=12,Object(be.d)("GET_SIMILAR_TV_SERIES",qe);case 12:return e.next=14,Object(be.d)("GET_WISHLIST",We);case 14:return e.next=16,Object(be.d)("ADD_ITEM_WISHLIST",Ye);case 16:return e.next=18,Object(be.d)("REMOVE_ITEM_WISHLIST",Fe);case 18:return e.next=20,Object(be.d)("CLEAR_WISHLIST",He);case 20:return e.next=22,Object(be.c)("GET_TV_SERIES_BY_CAT",Ve);case 22:case"end":return e.stop()}},Le)}function Je(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.a)([Ke()]);case 2:case"end":return e.stop()}},Pe)}var Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,$e=Object(ge.a)(),ze=Object(ue.e)(fe,Xe(Object(ue.a)($e)));$e.run(Je);var Qe=ze;Qe.subscribe(function(){}),Qe.dispatch({type:"GET_WISHLIST"});var Ze=function(){return n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/",component:X,exact:!0}),n.a.createElement(u.a,{path:"/category/:type/:category",component:ae}),n.a.createElement(u.a,{path:"/movie/:movieId",component:ce}),n.a.createElement(u.a,{path:"/tv/:tvId",component:se}))};var et=Object(m.c)(function(){return n.a.createElement(l.a,{store:Qe},n.a.createElement(le.a,{basename:"/movie-spot"},n.a.createElement(N,null),n.a.createElement(Ze,null)))}),tt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function at(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(n.a.createElement(function(e){var t=e.children,a=n.a.useState({mode:"light"}),r=Object(s.a)(a,2),c=r[0],o=r[1],i=m.b.div(f(),v,h);return n.a.createElement(g.Provider,{value:{toggleTheme:function(){var e="light"===c.mode?"dark":"light";o({mode:e})}}},n.a.createElement(m.a,{theme:{mode:c.mode}},n.a.createElement(i,null,t)))},null,n.a.createElement(et,null)),document.getElementById("root")),function(e){if(console.log("registration su"),"serviceWorker"in navigator){if(new URL("/movie-spot",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/movie-spot","/service-worker.js");tt?(function(e,t){fetch(e).then(function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):at(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):at(t,e)})}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.12a412a8.chunk.js.map