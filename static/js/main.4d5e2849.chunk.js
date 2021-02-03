(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a(1),s=a(7),o=a.n(s),i=(a(14),a(15),a(16),function(e){var t=e.label,a=e.clickHandler;return Object(n.jsxs)("div",{className:"toggle",children:[Object(n.jsx)("span",{className:"toggle__title",children:t}),Object(n.jsxs)("label",{className:"switch",children:[Object(n.jsx)("input",{type:"checkbox",onClick:a}),Object(n.jsx)("span",{className:"slider"})]})]})}),l=function(e){var t=e.enableDarkMode,a=e.enablePreviewMode,c=e.children;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"header__options",children:[Object(n.jsx)(i,{label:"Dark Mode",clickHandler:t}),Object(n.jsx)(i,{label:"Preview Mode",clickHandler:a})]}),c]})},j=(a(17),a(3)),d=function(e){var t=Object(r.useState)("Your Name"),a=Object(c.a)(t,2),s=a[0],o=a[1],i=Object(r.useState)("I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text."),l=Object(c.a)(i,2),d=l[0],u=l[1],b=Object(r.useState)("your-porfolio.com"),h=Object(c.a)(b,2),O=h[0],m=h[1],p=Object(r.useState)("your@email.com"),x=Object(c.a)(p,2),v=x[0],f=x[1],k=Object(r.useState)("080909999"),N=Object(c.a)(k,2),S=N[0],y=N[1],M=Object(r.useState)(!1),g=Object(c.a)(M,2),C=g[0],w=g[1],_=function(e){e.preventDefault(),w(!C)};return Object(n.jsx)("div",{className:"header__general-info",children:C?Object(n.jsxs)("form",{onSubmit:_,children:[Object(n.jsx)("input",{type:"text",name:"name",className:"header__name",placeholder:"Enter name",value:s,onChange:function(e){return o(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{name:"introduction",rows:"4",placeholder:"Enter your introduction here...",className:"header__introduction--text",value:d,onChange:function(e){return u(e.target.value)}}),Object(n.jsxs)("div",{className:"header__contact-details",children:[Object(n.jsx)("input",{type:"text",name:"link",placeholder:"Enter link",value:O,onChange:function(e){return m(e.target.value)}}),Object(n.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",value:v,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("input",{type:"number",name:"number",placeholder:"Enter number",value:S,onChange:function(e){return y(e.target.value)}})]}),Object(n.jsx)("button",{type:"submit",onClick:_,className:"btn btn--save",children:"Save"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"header__name",children:s}),Object(n.jsx)("p",{className:"header__introduction",children:d}),Object(n.jsxs)("div",{className:"header__contact-details",children:[Object(n.jsx)("p",{children:O}),Object(n.jsx)("p",{children:v}),Object(n.jsx)("p",{children:S})]}),e.previewMode?null:Object(n.jsx)("button",{className:"btn btn--edit ".concat(e.darkMode?"dark":""),onClick:_,children:Object(n.jsx)(j.a,{})})]})})},u=(a(18),a(8)),b=a.n(u),h=function(e){var t=Object(r.useState)([]),a=Object(c.a)(t,2),s=a[0],o=a[1];Object(r.useEffect)((function(){for(var t=0;t<e.items;t++)l()}),[e.items]);var i=function(e){var t=e.target.closest(".section__item").id;o(s.filter((function(e){return e!==t})))},l=function(){o((function(e){return e.concat(b()())}))},d=e.title;return Object(n.jsxs)("section",{className:"section",children:[Object(n.jsx)("h3",{className:"section__title",children:d}),function(){var t=e.buttons,a=e.previewMode,c=e.darkMode,r=e.children;return s.map((function(e){return Object(n.jsxs)("div",{id:e,className:"section__item",children:[t&&!a?Object(n.jsx)("button",{className:"btn btn--delete ".concat(c?"dark":""),onClick:i,children:Object(n.jsx)(j.b,{})}):null,r]},e)}))}(),function(){var t=e.buttons,a=e.previewMode;return t&&!a?Object(n.jsx)("button",{className:"btn btn--add",onClick:l,children:"Add"}):null}()]})},O=h;h.defaultProps={buttons:!0};var m=function(e){var t=Object(r.useState)("Company"),a=Object(c.a)(t,2),s=a[0],o=a[1],i=Object(r.useState)("Position"),l=Object(c.a)(i,2),d=l[0],u=l[1],b=Object(r.useState)("[Month] [Year]"),h=Object(c.a)(b,2),O=h[0],m=h[1],p=Object(r.useState)("[Month] [Year]"),x=Object(c.a)(p,2),v=x[0],f=x[1],k=Object(r.useState)("Some stuff about the work that you\u2019ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don\u2019t make it too long, keep it short but meaningful. Maximum 10 lines?"),N=Object(c.a)(k,2),S=N[0],y=N[1],M=Object(r.useState)(!1),g=Object(c.a)(M,2),C=g[0],w=g[1],_=function(e){e.preventDefault(),w(!C)};return Object(n.jsx)("div",{className:"section__info",children:C?Object(n.jsxs)("form",{onSubmit:_,children:[Object(n.jsx)("input",{type:"text",name:"company",className:"primary",placeholder:"Enter Company",value:s,onChange:function(e){return o(e.target.value)}})," ","\u2022"," ",Object(n.jsx)("input",{type:"text",name:"position",className:"secondary",placeholder:"Enter Position",value:d,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"dateStart",className:"date",placeholder:"[Month] [Year]",value:O,onChange:function(e){return m(e.target.value)}})," ","-"," ",Object(n.jsx)("input",{type:"text",name:"dateEnd",className:"date",placeholder:"[Month] [Year]",value:v,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{name:"description",rows:"4",placeholder:"Some stuff about the work that you\u2019ve done here.",value:S,onChange:function(e){return y(e.target.value)}}),Object(n.jsx)("button",{className:"btn btn--save",onClick:_,children:"Save"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"primary",children:s})," \u2022"," ",Object(n.jsx)("span",{className:"secondary",children:d})]}),Object(n.jsxs)("p",{className:"date",children:[O," - ",v]}),Object(n.jsx)("p",{className:"description",children:S}),e.previewMode?null:Object(n.jsx)("button",{className:"btn btn--edit ".concat(e.darkMode?"dark":""),onClick:_,children:Object(n.jsx)(j.a,{})})]})})},p=a(4),x=a(6),v=function(e){var t=Object(r.useState)({school:"School",course:"Course",dateStart:"[Month] [Year]",dateEnd:"[Month] [Year]"}),a=Object(c.a)(t,2),s=a[0],o=a[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),d=l[0],u=l[1],b=function(e){o(Object(x.a)(Object(x.a)({},s),{},Object(p.a)({},e.target.name,e.target.value)))},h=function(e){e.preventDefault(),u(!d)};return Object(n.jsx)("div",{children:d?Object(n.jsxs)("form",{onSubmit:h,children:[Object(n.jsx)("input",{type:"text",name:"school",className:"primary",placeholder:"Enter School",value:s.school,onChange:b})," ","\u2022"," ",Object(n.jsx)("input",{type:"text",name:"course",className:"secondary",placeholder:"Enter Course",value:s.course,onChange:b}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"dateStart",className:"date",placeholder:"[Month] [Year]",value:s.dateStart,onChange:b})," ","-"," ",Object(n.jsx)("input",{type:"text",name:"dateEnd",className:"date",placeholder:"[Month] [Year]",value:s.dateEnd,onChange:b}),Object(n.jsx)("button",{className:"btn btn--save",onClick:h,children:"Save"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"primary",children:s.school})," \u2022"," ",Object(n.jsx)("span",{className:"secondary",children:s.course})]}),Object(n.jsxs)("p",{className:"date",children:[s.dateStart," - ",s.dateEnd]}),e.previewMode?null:Object(n.jsx)("button",{className:"btn btn--edit ".concat(e.darkMode?"dark":""),onClick:h,children:Object(n.jsx)(j.a,{})})]})})},f=function(e){var t=Object(r.useState)("HTML - CSS - JavaScript - Figma - ReactJS - Webpack"),a=Object(c.a)(t,2),s=a[0],o=a[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),d=l[0],u=l[1],b=function(e){o(e.target.value)},h=function(e){e.preventDefault(),u(!d)};return Object(n.jsx)("div",{children:d?Object(n.jsxs)("form",{onSubmit:h,children:[Object(n.jsx)("textarea",{name:"skills",rows:"4",placeholder:"Enter your skills here",className:"primary skills-text",value:s,onChange:b}),Object(n.jsx)("button",{className:"btn btn--save",onClick:h,children:"Save"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"primary",children:s}),e.previewMode?null:Object(n.jsx)("button",{className:"btn btn--edit ".concat(e.darkMode?"dark":""),onClick:h,children:Object(n.jsx)(j.a,{})})]})})},k=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],o=Object(r.useState)(!1),i=Object(c.a)(o,2),j=i[0],u=i[1];return Object(n.jsxs)("div",{className:"container ".concat(a?"dark":""),children:[Object(n.jsx)(l,{enableDarkMode:function(){s(!a)},enablePreviewMode:function(){document.querySelector(".btn--save")?(document.querySelectorAll(".btn--save").forEach((function(e){return e.click()})),u(!j)):u(!j)},children:Object(n.jsx)(d,{previewMode:j,darkMode:a})}),Object(n.jsx)(O,{items:3,title:"Experience",previewMode:j,darkMode:a,children:Object(n.jsx)(m,{previewMode:j,darkMode:a})}),Object(n.jsx)(O,{items:2,title:"Education",previewMode:j,darkMode:a,children:Object(n.jsx)(v,{previewMode:j,darkMode:a})}),Object(n.jsx)(O,{items:1,title:"Skills",previewMode:j,darkMode:a,buttons:!1,children:Object(n.jsx)(f,{previewMode:j,darkMode:a})})]})};o.a.render(Object(n.jsx)(k,{}),document.querySelector("#root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4d5e2849.chunk.js.map