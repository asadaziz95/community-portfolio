(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2mvg":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),l=a("TSYQ"),i=a.n(l),o=a("q1tI"),c=a.n(o),m=a("17x9"),u=a.n(m),s=a("vUet"),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],p=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.fluid,m=e.rounded,u=e.roundedCircle,p=e.thumbnail,f=Object(r.a)(e,d);a=Object(s.a)(a,"img");var h=i()(o&&a+"-fluid",m&&"rounded",u&&"rounded-circle",p&&a+"-thumbnail");return c.a.createElement("img",Object(n.a)({ref:t},f,{className:i()(l,h)}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=p},"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Kvkj"),i=a("7vrA"),o=a("2mvg"),c=a("Wbzz"),m=a("7Qib");t.default=function(e){var t=e.data,a=function(e){var t=e.title,a=e.author,n=e.link;return r.a.createElement("li",{key:t,style:{color:"gray"}},r.a.createElement("a",{rel:"noopener noreferrer",href:n},t)," -",r.a.createElement("i",null,a))},u=t.site.siteMetadata,s=u.author,d=u.occupation,p=u.readingList,f=u.showsList,h=u.designations,b=u.unemployed,E=Object(n.useContext)(m.b).toString,g=p.map((function(e){return a(e)})),w=f.map((function(e){return a(e)}));return r.a.createElement(l.b,null,r.a.createElement(m.a,{title:"About Me"}),r.a.createElement(l.c,{title:"About Me"}),r.a.createElement(i.a,null,r.a.createElement(o.a,{rounded:!0,width:"140",height:"140",src:"../../icons/luke-"+E()+".png",alt:s}),r.a.createElement("article",{className:"w-75 m-auto pt-2 text-justify"},r.a.createElement("p",{className:"text-center"},h.map((function(e,t){return r.a.createElement("span",{key:e}," ",r.a.createElement("b",null,e)," ",t<h.length-1&&r.a.createElement(r.a.Fragment,null,"||"))}))),r.a.createElement("p",{className:"i-5 mt-4 pt-2"},"Hello there! My name is ",r.a.createElement("b",null,""+s),". I am a ",r.a.createElement("a",{href:"https://www.dictionary.com/e/fictional-characters/padawan/",target:"_blank",rel:"noopener noreferrer"},"padawan")," ",r.a.createElement("b",null,d)," discovering the ways of the code. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.a.createElement("p",{className:"i-5"},"In my spare time, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.a.createElement("p",{className:"i-5"},"Check out my ",r.a.createElement(c.Link,{to:"/projects"},"projects")," to see what I've been up to! Or check out my ",r.a.createElement(c.Link,{to:"/blog"},"blog")," to see what's recently caught my eye!")),r.a.createElement("article",{className:"w-75 m-auto"},b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("p",{className:"unemployed"},r.a.createElement("small",null,"I am ",r.a.createElement("b",null,"currently looking for new opportunities"),"! If you like what you ",r.a.createElement(c.Link,{to:"/resume"},"see"),", let's get in ",r.a.createElement("a",{href:"mailto:red.five@rebellion.com",target:"_blank",rel:"noopener noreferrer"},"touch"),"!"))),r.a.createElement("hr",null),r.a.createElement("h5",{className:"watch-list-title pt-4"},"Here are a couple of books from my reading list:"),r.a.createElement("ul",{style:{fontSize:"0.9rem",listStyle:"none"}},g),r.a.createElement("h5",{className:"watch-list-title pt-4"},"Here are a couple of shows from my watch list:"),r.a.createElement("ul",{style:{fontSize:"0.9rem",listStyle:"none"}},w),r.a.createElement("h5",{className:"watch-list-title pt-4"},"Here are a couple of movies from my watch list:"),r.a.createElement("p",null,r.a.createElement("i",null,"...waaaay too many to list.")))))}},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return r.b})),a.d(t,"c",(function(){return l}));var n=a("ElpU"),r=a("BYIe"),l={getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var i=[];i.push(r.node.childImageSharp.fluid),e[l]=i}else e[l]=r.node.childImageSharp.fluid;return e}),{})}}}}]);
//# sourceMappingURL=component---src-pages-about-js-aaac3efb96b645f8c585.js.map