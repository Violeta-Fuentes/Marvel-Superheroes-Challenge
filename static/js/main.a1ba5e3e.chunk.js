(this.webpackJsonpscripting_challenge=this.webpackJsonpscripting_challenge||[]).push([[0],{10:function(A,e,a){A.exports={img:"Cards_img__wTB-b",textContainer:"Cards_textContainer__2LwKS",name:"Cards_name__3uzXJ",container:"Cards_container__2ADV3",knowMore:"Cards_knowMore__1tXwy",imageContainer:"Cards_imageContainer__2AIlJ"}},11:function(A,e,a){A.exports={cards:"Heroes_cards__MrBzM",container:"Heroes_container__51XY2",storieCard:"Heroes_storieCard__1Y-3a",hidden:"Heroes_hidden__3FKAT",visible:"Heroes_visible___ejk6",vHidden:"Heroes_vHidden__2C7Pj",vVisible:"Heroes_vVisible__3iFv2"}},15:function(A,e,a){A.exports={img:"CategoriesCards_img__2o1Hy",container:"CategoriesCards_container__2quaQ",title:"CategoriesCards_title__1p7E6"}},18:function(A,e,a){A.exports={form:"SearchBar_form__ka4Pj",input:"SearchBar_input__239_o"}},33:function(A,e,a){"use strict";a.r(e);var t=a(0),c=a.n(t),o=a(13),n=a.n(o),s=a(12),r=a(2),i=a(8),l=a.n(i),d=a.p+"static/media/Marvel-Logo-PNG.9b6663e1.png",h=a(1);function m(){return Object(h.jsxs)("section",{className:l.a.wrap,children:[Object(h.jsxs)("header",{className:l.a.header,children:[Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("img",{src:d,alt:"logo",className:l.a.logo})}),Object(h.jsx)("ul",{className:l.a.navigation,children:Object(h.jsx)("li",{className:l.a.navigationItems,children:Object(h.jsx)("a",{className:l.a.a,href:"/heroes",children:"Heroes"})})})]}),Object(h.jsx)("video",{className:l.a.video,src:"https://ak.picdn.net/shutterstock/videos/1055814122/preview/stock-footage-rostov-on-don-russia-july-hands-flipping-comic-book-pages-comics-background-k.webm",muted:!0,loop:!0,autoPlay:!0}),Object(h.jsx)("div",{className:l.a.content,children:Object(h.jsxs)("div",{className:l.a.textBox,children:[Object(h.jsxs)("h2",{className:l.a.h2,children:[Object(h.jsx)("span",{className:l.a.span,children:"Marvel"})," Superheroes"]}),Object(h.jsx)("p",{className:l.a.p,children:"Find out more about the marvel world, their characters, comics, stories and more!"}),Object(h.jsx)("a",{className:l.a.button,href:"/heroes",children:"Know our heroes!"})]})})]})}var b=a(5),u="GET_HEROES",j="GET_COMICS",p="GET_SERIES",O="GET_STORIES",g="GET_HEROES_ID",f="SEARCH_HEROES_BY_NAME",N="SEARCH_HEROES_BY_COMICS",x="SEARCH_HEROES_BY_SERIES",D="SEARCH_HEROES_BY_STORIES",E="GET_HEROES_COMICS",y="GET_HEROES_SERIES",K="GET_HEROES_STORIES";var C=a(10),R=a.n(C);function S(A){var e=A.image,a=A.name,t=A.id;return Object(h.jsx)("div",{className:R.a.container,children:Object(h.jsxs)("div",{className:R.a.imageContainer,children:[Object(h.jsx)(s.b,{to:"/heroeDetail/".concat(t),children:Object(h.jsx)("img",{className:R.a.img,src:e})}),Object(h.jsxs)("div",{className:R.a.textContainer,children:[Object(h.jsx)("div",{className:R.a.nameContainer,children:Object(h.jsx)("h3",{className:R.a.name,children:a})}),Object(h.jsx)("div",{className:R.a.knowMore,children:Object(h.jsx)("p",{children:"Click to know more about them"})})]})]})},t)}var v=a(15),w=a.n(v);function Q(A){var e=A.img,a=A.title,t=A.description;return Object(h.jsxs)("div",{className:w.a.container,children:[Object(h.jsx)("img",{className:w.a.img,src:e}),Object(h.jsx)("h1",{className:w.a.title,children:a}),Object(h.jsx)("p",{children:t})]})}var F=a(9),H=a(18),B=a.n(H);function G(){var A=Object(t.useState)(""),e=Object(F.a)(A,2),a=e[0],c=e[1],o=Object(b.b)();return Object(h.jsx)("div",{children:Object(h.jsx)("form",{className:B.a.form,onSubmit:function(A){A.preventDefault(),o({type:f,payload:a}),o(function(A){return{type:N,payload:A}}(a)),o(function(A){return{type:x,payload:A}}(a)),o(function(A){return{type:D,payload:A}}(a)),c("")},children:Object(h.jsx)("input",{type:"text",onChange:function(A){return c(A.target.value)},value:a,placeholder:"Search...",id:"searchbar",className:B.a.input})})})}var U=a(11),T=a.n(U);function Y(){var A=Object(b.c)((function(A){return A.allHeroes})),e=Object(b.c)((function(A){return A.searchedHeroe})),a=Object(b.c)((function(A){return A.searchedComic})),c=Object(b.c)((function(A){return A.searchedSerie})),o=Object(b.c)((function(A){return A.searchedStorie})),n=Object(b.b)();return Object(t.useEffect)((function(){n((function(A){return fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=".concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(e){A({type:u,payload:e.data.results})}))})),n((function(A){return fetch("https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=".concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(e){A({type:j,payload:e.data.results})}))})),n((function(A){return fetch("https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=".concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(e){A({type:p,payload:e.data.results})}))})),n((function(A){return fetch("https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=".concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(e){A({type:O,payload:e.data.results})}))}))}),[]),Object(h.jsxs)("div",{className:T.a.container,children:[Object(h.jsx)("div",{"data-aos":"fade-left","data-aos-duration":"1000",children:Object(h.jsx)(G,{})}),Object(h.jsx)("button",{onClick:function(A){return function(A){A.preventDefault(),window.location.reload()}(A)},className:e<=1&&a<=1&&o<=1&&c<=1?T.a.hidden:T.a.visible,children:"back to heroes"}),Object(h.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"1000",className:T.a.cards,children:e<=1&&a<=1&&o<=1&&c<=1?A.map((function(A){return Object(h.jsx)("div",{className:T.a.heroeSearched,"data-aos":"fade-right","data-aos-duration":"1000",children:Object(h.jsx)(S,{image:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),name:A.name,id:A.id})})})):null}),Object(h.jsxs)("div",{className:e<=1&&a<=1&&o<=1&&c<=1?T.a.vHidden:T.a.vVisible,children:[e?e.map((function(A){return Object(h.jsx)(S,{image:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),name:A.name,id:A.id})})):null,a?a.map((function(A){return Object(h.jsx)(Q,{img:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),title:A.title,description:A.description})})):null,c?c.map((function(A){return Object(h.jsx)(Q,{img:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),title:A.title})})):null,o?o.map((function(A){return Object(h.jsx)(Q,{title:A.title})})):null]})]})}var k=a(4),I=a.n(k);function L(){var A=Object(b.b)(),e=Object(b.c)((function(A){return A.heroeDetail})),a=Object(b.c)((function(A){return A.heroeComics})),c=Object(b.c)((function(A){return A.heroeSeries})),o=Object(b.c)((function(A){return A.heroeStories})),n=Object(r.g)().id;return Object(t.useEffect)((function(){A(function(A){return function(e){return fetch("https://gateway.marvel.com:443/v1/public/characters/".concat(A,"?ts=1&apikey=").concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(A){e({type:g,payload:A.data.results})}))}}(n)),A(function(A){return function(e){return fetch("https://gateway.marvel.com:443/v1/public/characters/".concat(A,"/comics?ts=1&apikey=").concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(A){e({type:E,payload:A.data.results})}))}}(n)),A(function(A){return function(e){return fetch("https://gateway.marvel.com:443/v1/public/characters/".concat(A,"/series?ts=1&apikey=").concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(A){e({type:y,payload:A.data.results})}))}}(n)),A(function(A){return function(e){return fetch("https://gateway.marvel.com:443/v1/public/characters/".concat(A,"/stories?ts=1&apikey=").concat("1676295427dbc8bb0a4a0792b8caf113","&hash=").concat("edf03bfd34b34c733d864793a7410fb7")).then((function(A){return A.json()})).then((function(A){e({type:K,payload:A.data.results})}))}}(n))}),[]),Object(h.jsxs)("div",{className:I.a.container,children:[e.map((function(A){return Object(h.jsxs)("div",{className:I.a.header,children:[Object(h.jsx)(s.b,{to:"/heroes",children:Object(h.jsx)("button",{className:I.a.b,children:"Back to heroes"})}),Object(h.jsx)("div",{className:I.a.infoContainer,children:Object(h.jsxs)("div",{className:I.a.imgContainer,children:[Object(h.jsx)("h2",{className:I.a.name,children:A.name}),Object(h.jsx)("img",{className:I.a.img,src:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),alt:""})]})})]})})),Object(h.jsxs)("div",{className:I.a.comicsContainer,children:[Object(h.jsx)("img",{className:I.a.arrow,src:"data:image/png;base64,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",alt:""}),Object(h.jsx)("h5",{className:I.a.scroll,children:"Scroll down!  ;)"}),Object(h.jsx)("p",{"data-aos":"fade-left","data-aos-duration":"1000",className:I.a.comicsHeader,children:"comics"})]}),Object(h.jsx)("div",{className:I.a.comics,children:a.map((function(A){return Object(h.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"1000","data-aos-delay":"200",children:Object(h.jsx)("img",{className:I.a.itemsImage,src:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),alt:""})})}))}),Object(h.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1000",className:I.a.seriesHeader,children:"Series"}),Object(h.jsx)("div",{className:I.a.comics,children:c.map((function(A){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{"data-aos":"fade-right","data-aos-duration":"1500","data-aos-delay":"200",className:I.a.itemsImage,src:"".concat(A.thumbnail.path,".").concat(A.thumbnail.extension),alt:""})})}))}),Object(h.jsxs)("div",{className:I.a.storiesContainer,children:[Object(h.jsx)("p",{"data-aos":"fade-right","data-aos-duration":"1000",className:I.a.storiesHeader,children:"Stories"}),Object(h.jsx)("div",{className:I.a.stories,children:o.map((function(A){return Object(h.jsx)("ul",{"data-aos":"fade-down","data-aos-duration":"1500","data-aos-delay":"200",children:Object(h.jsx)("li",{children:A.title})})}))})]})]})}var J=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/",element:Object(h.jsx)(m,{})}),Object(h.jsx)(r.a,{path:"/heroes",element:Object(h.jsx)(Y,{})}),Object(h.jsx)(r.a,{path:"/heroeDetail/:id",element:Object(h.jsx)(L,{})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(19),Z=a(3),W={allHeroes:[],comics:[],series:[],stories:[],heroeDetail:[],searchedHeroe:[],searchedComic:[],searchedSerie:[],searchedStorie:[],heroeComics:[],heroeSeries:[],heroeStories:[]};var q=a(21),P=Object(M.b)((function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(Z.a)(Object(Z.a)({},A),{},{allHeroes:e.payload});case j:return Object(Z.a)(Object(Z.a)({},A),{},{comics:e.payload});case p:return Object(Z.a)(Object(Z.a)({},A),{},{series:e.payload});case O:return Object(Z.a)(Object(Z.a)({},A),{},{stories:e.payload});case g:return Object(Z.a)(Object(Z.a)({},A),{},{heroeDetail:e.payload});case E:return Object(Z.a)(Object(Z.a)({},A),{},{heroeComics:e.payload});case y:return Object(Z.a)(Object(Z.a)({},A),{},{heroeSeries:e.payload});case K:return Object(Z.a)(Object(Z.a)({},A),{},{heroeStories:e.payload});case f:return Object(Z.a)(Object(Z.a)({},A),{},{searchedHeroe:A.allHeroes.filter((function(A){return A.name.toLocaleLowerCase()===e.payload}))});case N:return Object(Z.a)(Object(Z.a)({},A),{},{searchedComic:A.comics.filter((function(A){return A.title.toLowerCase()===e.payload}))});case x:return Object(Z.a)(Object(Z.a)({},A),{},{searchedSerie:A.series.filter((function(A){return A.title.toLocaleLowerCase()===e.payload}))});case D:return Object(Z.a)(Object(Z.a)({},A),{},{searchedStorie:A.stories.filter((function(A){return A.title.toLocaleLowerCase()===e.payload}))});default:return A}}),Object(M.a)(q.a)),_=P;n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b.a,{store:_,children:Object(h.jsx)(J,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))},4:function(A,e,a){A.exports={container:"HeroeDetail_container__yx0GQ",img:"HeroeDetail_img__3kmUv",imgContainer:"HeroeDetail_imgContainer__zxzYo",name:"HeroeDetail_name__14mOh",itemsImage:"HeroeDetail_itemsImage__1x-G7",comics:"HeroeDetail_comics__2Ydw0",comicsContainer:"HeroeDetail_comicsContainer__3GDei",stories:"HeroeDetail_stories__3BgpF",storiesHeader:"HeroeDetail_storiesHeader__3_YvN",storiesContainer:"HeroeDetail_storiesContainer__3hEK_",comicsHeader:"HeroeDetail_comicsHeader__2uLeP",seriesHeader:"HeroeDetail_seriesHeader__RgjCV",arrow:"HeroeDetail_arrow__2PXzL",scroll:"HeroeDetail_scroll__1X_Ni",b:"HeroeDetail_b__2-ctT"}},8:function(A,e,a){A.exports={wrap:"Home_wrap__2lWG8",video:"Home_video__3HrtS",header:"Home_header__1LnBy",logo:"Home_logo__2OXKV",navigation:"Home_navigation__n7tCt",navigationItems:"Home_navigationItems__3N833",a:"Home_a__9GPLZ",content:"Home_content__2reJJ",textBox:"Home_textBox__3GKvq",h2:"Home_h2__ZRsXY",span:"Home_span__2GPMa",p:"Home_p__lB5Sw",button:"Home_button__g0PNN"}}},[[33,1,2]]]);
//# sourceMappingURL=main.a1ba5e3e.chunk.js.map