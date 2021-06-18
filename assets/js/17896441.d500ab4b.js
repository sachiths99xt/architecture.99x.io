(self.webpackChunkarchitecture_at_99x=self.webpackChunkarchitecture_at_99x||[]).push([[7918],{3319:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(7294),l=a(6742),r=a(4973);var i=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(2263),o=a(907),c=a(6700);function d(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:n.createElement("strong",null,n.createElement(l.Z,{to:a,onClick:i},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,s.default)().siteConfig.title,t=(0,o.useActivePlugin)({failfast:!0}).pluginId,a=(0,c.J)(t).savePreferredVersionName,l=(0,o.useActiveVersion)(t),r=(0,o.useDocVersionSuggestions)(t),i=r.latestDocSuggestion,v=r.latestVersionSuggestion;if(!v)return n.createElement(n.Fragment,null);var p,h=null!=i?i:(p=v).docs.find((function(e){return e.id===p.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===l.name?n.createElement(d,{siteTitle:e,versionLabel:l.label}):n.createElement(m,{siteTitle:e,versionLabel:l.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:v.label,to:h.path,onClick:function(){return a(v.name)}})))},p=a(1217),h="lastUpdatedDate_1WI_";function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:h},a)}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("strong",null,t)}}," by {user}")}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("div",{className:"col text--right"},n.createElement("em",null,n.createElement("small",null,n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(g,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)))}var b=a(571),_=a(6146),N=a(6010),L="docTitle_3a4h",U="docItemContainer_33ec",T="docItemCol_3FnS";var k=function(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=r.image,c=r.keywords,d=r.hide_title,m=r.hide_table_of_contents,u=l.description,h=l.title,E=l.editUrl,g=l.lastUpdatedAt,k=l.formattedLastUpdatedAt,Z=l.lastUpdatedBy,y=(0,o.useActivePlugin)({failfast:!0}).pluginId,w=(0,o.useVersions)(y),A=(0,o.useActiveVersion)(y),C=w.length>1,x=r.title||h;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:x,description:u,keywords:c,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,N.Z)("col",(t={},t[T]=!m,t))},n.createElement(v,null),n.createElement("div",{className:U},n.createElement("article",null,C&&n.createElement("div",null,n.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!d&&n.createElement("header",null,n.createElement("h1",{className:L},h)),n.createElement("div",{className:"markdown"},n.createElement(a,null))),(E||g||Z)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},E&&n.createElement(_.Z,{editUrl:E})),(g||Z)&&n.createElement(f,{lastUpdatedAt:g,formattedLastUpdatedAt:k,lastUpdatedBy:Z}))),n.createElement("div",{className:"margin-vert--lg"},n.createElement(i,{metadata:l})))),!m&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(b.Z,{toc:a.toc}))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4973),r=a(2122),i=a(9756),s=a(6010),o="iconEdit_2_ui",c=["className"],d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-label":"Edit page"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010);var r=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return r(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);