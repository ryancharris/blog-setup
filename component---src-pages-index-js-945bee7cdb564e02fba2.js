(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),c=n.n(i),o=n(153),u=(n(233),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(o.a,{location:this.props.location},c.a.createElement("div",{className:"Main"},c.a.createElement("h1",{className:"Main__header"},"It me_")))},t}(i.Component));t.default=u},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(144),u=n.n(o);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(146),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(48),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gritty's Blog",description:"A Philadelphian Flyin'"}}}}},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t){e.exports="data:image/png;base64,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"},152:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(148),c=n(0),o=n.n(c),u=n(158),l=n.n(u),s=n(145),d=(n(149),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleClick=function(){t.setState(function(e){return{menuOpen:!1===e.menuOpen}})},t.renderMenu=function(){return o.a.createElement("div",{className:"Header__menu"},o.a.createElement("div",{className:"Header__link-list",onClick:t.handleClick},o.a.createElement(s.Link,{className:"Header__link",to:"/"},"Home"),o.a.createElement(s.Link,{className:"Header__link",to:"/blog"},"Blog"),o.a.createElement(s.Link,{className:"Header__link",to:"/about"},"About"),o.a.createElement(s.Link,{className:"Header__link",to:"/contact"},"Contact")))},t}return r()(t,e),t.prototype.render=function(){var e=this.props.className,t=this.state.menuOpen,n="Header "+e+" "+(t?"is-blurred":"");return o.a.createElement("div",{className:n},o.a.createElement(s.Link,{className:"Header__name",to:"/"},"Gritty"),o.a.createElement("div",{className:"Header__nav",onClick:this.handleClick},o.a.createElement("div",{className:"Header__nav-hamburger"})),t&&this.renderMenu())},t}(c.Component)),m=(n(150),n(151)),p=n.n(m),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("span",null,"Made with "),o.a.createElement("img",{className:"Footer__love-logo",src:p.a}),o.a.createElement("span",null," by Ivana & Ryan"))},t}(c.Component),g=(n(152),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getPageTitle=function(e){switch(e){case"/blog-setup/about":return"About";case"/blog-setup/blog":return"Blog";case"/blog-setup/contact":return"Contact";case"/blog-setup/":return"Hi!"}},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children,a="/"===t.pathname?"is-homepage":"",r="Layout "+a,c=this.getPageTitle(t.pathname);return o.a.createElement("div",{className:r},o.a.createElement(s.StaticQuery,{query:"1962667233",render:function(e){return o.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e.site.siteMetadata.description}],title:e.site.siteMetadata.title+" | "+c})},data:i}),o.a.createElement(d,{className:a}),n,"/"!==t.pathname&&o.a.createElement(h,null))},t}(c.Component));t.a=g},233:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-945bee7cdb564e02fba2.js.map