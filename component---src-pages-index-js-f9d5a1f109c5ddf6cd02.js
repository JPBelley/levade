(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(195),a(201)),s=a(198),i=a(222),c=a.n(i),m=(a(225),a(226)),o=a.n(m),u=(a(227),{opacity:1}),d={backgroundImage:'url("'+o.a+'")'};var E=function(){var e={speed:3e3,grabCursor:!0,watchSlidesProgress:!0,effect:"fade",mousewheelControl:!0,keyboardControl:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{progress:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].progress,this.width},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=e+"ms",this.slides[t].querySelectorAll(".single-square").forEach(function(e){var t,a;e.style.transition=(t=0,a=2,Math.random()*(a-t)+t+"s"),e.style.opacity="1"})},transitionStart:function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].classList.contains("swiper-slide-active")||this.slides[t].querySelectorAll(".single-square").forEach(function(e){e.style.opacity="0"})}}};return r.a.createElement("section",{className:"swiper-container"},r.a.createElement(c.a,e,r.a.createElement("div",{className:"swiper-slide hero"},r.a.createElement("div",{className:"square-container"},r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:u}," ",r.a.createElement("div",{style:d})," ")),r.a.createElement("div",{className:"headline"},r.a.createElement("h1",null,"L'évadé")))))},p=a(200),v=a(244),f=a.n(v),g=(a(245),function(){return r.a.createElement("section",{className:"container"},r.a.createElement("h2",null,r.a.createElement(p.Parallax,{y:[8,-8],x:[-8,0]},"À propos")),r.a.createElement("div",{className:"paragraph paragraph-left"},r.a.createElement("p",null,"L'évadé est un projet né à Montréal. C'est un regroupement de jeunes passionnés par la photographie ainsi que l'aventure qui parcours les villes à la recherche d'endroits abandonnés et/ou inexplorés. La recherche d'une photo unique et dans un endroit où peu de gens ont encore accès leur procure cette motivation qui les pousse à aller toujours plus loin.")),r.a.createElement("div",{className:"img-container"},r.a.createElement(p.Parallax,{y:[-10,10]},r.a.createElement("img",{src:f.a,alt:""}))))}),y=a(246),h=a.n(y),N=a(215),b=a.n(N),x=(a(247),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-text"},e.title),r.a.createElement(p.Parallax,{y:e.invert?[1,-1]:[-1,1],x:e.invert?[1,-1]:[-1,1]},r.a.createElement("div",{className:"card-overlay"}),r.a.createElement("img",{src:e.picture,alt:""}))))}),q=(a(248),function(){return r.a.createElement("section",{className:"container-full"},r.a.createElement("h2",null,r.a.createElement(p.Parallax,{y:[12,-6],x:[3,-3]},"Les lieux")),r.a.createElement("div",{className:"cards-container"},r.a.createElement(x,{title:"La base",invert:!0,picture:h.a}),r.a.createElement(x,{title:"L'église",invert:!1,picture:b.a}),r.a.createElement(x,{title:"Le silo",invert:!0}),r.a.createElement(x,{title:"La piscine",invert:!1})))}),w=(a(249),function(){return r.a.createElement("section",{className:"container-full"},r.a.createElement("h2",null,r.a.createElement(p.Parallax,{y:[8,-8],x:[-3,3]},"L'équipe")),r.a.createElement("div",{className:"name-container left"},r.a.createElement("div",{className:"name"},r.a.createElement("span",{className:"first-name"},"Jean-Philippe"),r.a.createElement("span",{className:"last-name"},"Belley"),r.a.createElement("div",{className:"name-img-container"},r.a.createElement("img",{src:b.a,alt:""}))),r.a.createElement("div",{className:"name"},r.a.createElement("span",{className:"first-name"},"Pierre-Louis"),r.a.createElement("span",{className:"last-name"},"Gourga"),r.a.createElement("div",{className:"name-img-container"},r.a.createElement("img",{src:b.a,alt:""})))),r.a.createElement("div",{className:"name-container right"},r.a.createElement("div",{className:"name"},r.a.createElement("span",{className:"first-name"},"Bat de"),r.a.createElement("span",{className:"last-name"},"la batte"),r.a.createElement("div",{className:"name-img-container"},r.a.createElement("img",{src:b.a,alt:""})))))});t.default=function(){return r.a.createElement(p.ParallaxProvider,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement(E,null),r.a.createElement(g,null),r.a.createElement(q,null),r.a.createElement(w,null)))}},194:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66),s=a.n(l);a.d(t,"a",function(){return s.a});a(194),a(9).default.enqueue,r.a.createContext({})},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},197:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},198:function(e,t,a){"use strict";var n=a(199),r=a(0),l=a.n(r),s=a(205),i=a.n(s);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,c=n.data.site,m=t||c.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},201:function(e,t,a){"use strict";var n=a(196),r=a(0),l=a.n(r),s=(a(195),a(203),function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("a",{href:"#featured"},"Featured"),l.a.createElement("a",{href:"#collections"},"Work"),l.a.createElement("a",{href:"#contact"},"Contact")))});s.defaultProps={siteTitle:""};var i=s;a(204),t.a=function(e){var t=e.children,a=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null)))}},215:function(e,t,a){e.exports=a.p+"static/eglise-0dec47b8942de854347a72aa9e7c7590.jpg"},226:function(e,t,a){e.exports=a.p+"static/urbex2-a997128a431e05a2b7fca24750393361.jpg"},244:function(e,t,a){e.exports=a.p+"static/jp_dark-84cc8a91b9db7c514bd57895201e68c1.jpg"},246:function(e,t,a){e.exports=a.p+"static/military_base-c81e3bb360c4561b0b2616dd73c93b64.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-f9d5a1f109c5ddf6cd02.js.map