(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(195),a(200)),l=a(198),i=a(221),c=a.n(i),o=(a(224),a(225)),u=a.n(o),m=(a(226),{opacity:1}),d={backgroundImage:'url("'+u.a+'")'};var p=function(){var e={speed:3e3,grabCursor:!0,watchSlidesProgress:!0,effect:"fade",mousewheelControl:!0,keyboardControl:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{progress:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].progress,this.width},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=e+"ms",this.slides[t].querySelectorAll(".single-square").forEach(function(e){var t,a;e.style.transition=(t=0,a=2,Math.random()*(a-t)+t+"s"),e.style.opacity="1"})},transitionStart:function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].classList.contains("swiper-slide-active")||this.slides[t].querySelectorAll(".single-square").forEach(function(e){e.style.opacity="0"})}}};return r.a.createElement("section",{className:"swiper-container"},r.a.createElement(c.a,e,r.a.createElement("div",{className:"swiper-slide hero"},r.a.createElement("div",{className:"square-container"},r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," "),r.a.createElement("div",{className:"single-square",style:m}," ",r.a.createElement("div",{style:d})," ")),r.a.createElement("div",{className:"headline"},r.a.createElement("h1",null,"L'évadé")))))},E=a(205),v=a(243),f=a.n(v),y=(a(244),function(){return r.a.createElement("section",{className:"container"},r.a.createElement("h2",null,r.a.createElement(E.Parallax,{y:[8,-8]},"À propos")),r.a.createElement("div",{className:"paragraph paragraph-left"},r.a.createElement("p",null,"L'évadé est un projet né à Montréal. C'est un regroupement de jeunes passionnés par la photographie ainsi que l'aventure qui parcours les villes à la recherche d'endroits abandonnés et/ou inexplorés. La recherche d'une photo unique et dans un endroit où peu de gens ont encore accès leur procure cette motivation qui les pousse à aller toujours plus loin.")),r.a.createElement("div",{className:"img-container"},r.a.createElement(E.Parallax,{y:[-10,10]},r.a.createElement("img",{src:f.a,alt:""}))))}),h=a(245),g=a.n(h),b=(a(246),function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-text"},"La Base Militaire"),r.a.createElement("div",{className:"card-overlay"}),r.a.createElement("img",{src:g.a,alt:""})))}),N=(a(247),function(){return r.a.createElement("section",{className:"container"},r.a.createElement("h2",null,r.a.createElement(E.Parallax,{y:[8,-8]},"Les lieux")),r.a.createElement("div",{className:"cards-container"},r.a.createElement(b,null),r.a.createElement(b,null),r.a.createElement(b,null)))});t.default=function(){return r.a.createElement(E.ParallaxProvider,null,r.a.createElement(s.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement(p,null),r.a.createElement(y,null),r.a.createElement(N,null)))}},194:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(66),l=a.n(s);a.d(t,"a",function(){return l.a});a(194),a(9).default.enqueue,r.a.createContext({})},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},197:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),s=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null}},198:function(e,t,a){"use strict";var n=a(199),r=a(0),s=a.n(r),l=a(204),i=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,o=t||c.siteMetadata.description;return s.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},200:function(e,t,a){"use strict";var n=a(196),r=a(0),s=a.n(r),l=(a(195),a(202),function(){return s.a.createElement("header",null,s.a.createElement("nav",null,s.a.createElement("a",{href:"#featured"},"Featured"),s.a.createElement("a",{href:"#collections"},"Work"),s.a.createElement("a",{href:"#contact"},"Contact")))});l.defaultProps={siteTitle:""};var i=l;a(203),t.a=function(e){var t=e.children,a=n.data;return s.a.createElement(s.a.Fragment,null,s.a.createElement(i,{siteTitle:a.site.siteMetadata.title}),s.a.createElement("div",{style:{paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement("footer",null)))}},225:function(e,t,a){e.exports=a.p+"static/urbex2-a997128a431e05a2b7fca24750393361.jpg"},243:function(e,t,a){e.exports=a.p+"static/jp_dark-84cc8a91b9db7c514bd57895201e68c1.jpg"},245:function(e,t,a){e.exports=a.p+"static/military_base-c81e3bb360c4561b0b2616dd73c93b64.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-2b432c007aecf8379cfc.js.map