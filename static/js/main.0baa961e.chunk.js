(this["webpackJsonpyoutube-simple"]=this["webpackJsonpyoutube-simple"]||[]).push([[0],{27:function(e,t,a){e.exports={videos:"VideoList_videos__mVPtZ"}},3:function(e,t,a){e.exports={container:"VideoItems_container__1-o0J",video:"VideoItems_video__3uY23",thumbnail:"VideoItems_thumbnail__3SmZ6",metadata:"VideoItems_metadata__3jYot",title:"VideoItems_title__1vh7C",channel:"VideoItems_channel__28uXH",date:"VideoItems_date__33LTZ",desc:"VideoItems_desc__2UII-",viewCount:"VideoItems_viewCount__2eOKh",mini:"VideoItems_mini__34uUh"}},34:function(e,t,a){e.exports=a(60)},39:function(e,t,a){},4:function(e,t,a){e.exports={detail:"VideoDetail_detail__1BC1c",tags:"VideoDetail_tags__3OTcQ",tag:"VideoDetail_tag__1ZYvN",title:"VideoDetail_title__3eO3v",meta:"VideoDetail_meta__1Ck1C",channel:"VideoDetail_channel__1a8Ya",likeBox:"VideoDetail_likeBox__1jQ8X",description:"VideoDetail_description__3LIq9"}},5:function(e,t,a){e.exports={header:"Search_header__1vdBQ",container:"Search_container__30_LZ",logo:"Search_logo__2zoBm",inputBox:"Search_inputBox__2LzyV",input:"Search_input__K2AWf",button:"Search_button__mBLuw",searchIcon:"Search_searchIcon__u5exM"}},60:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(25),r=a.n(c),s=(a(39),a(13)),l=a(8),o=a.n(l),u=a(4),m=a.n(u),d=a(7),p=function(e){var t=e.video,a=e.video,n=a.snippet,c=a.statistics,r=e.onSearch,s=function(e){var t=e.currentTarget.textContent.replace("#","");console.log(t),r(t)};return i.a.createElement("section",{className:m.a.detail},i.a.createElement("iframe",{className:m.a.video,title:"youtube video player",type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),i.a.createElement("p",{className:m.a.tags},n.tags&&n.tags.map((function(e,t){return i.a.createElement("span",{className:m.a.tag,key:t,onClick:s},"#",e)}))),i.a.createElement("h2",{className:m.a.title},n.title),i.a.createElement("div",{className:m.a.meta},i.a.createElement("div",null,i.a.createElement("span",{className:m.a.channel},n.channelTitle),c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,"\uc870\ud68c\uc218 ",c.viewCount,"\ud68c"),i.a.createElement("span",null,n.publishedAt.substring(0,10)))),c&&i.a.createElement("div",{className:m.a.likeBox},i.a.createElement("span",null,i.a.createElement(d.b,null),c.likeCount),i.a.createElement("span",null,i.a.createElement(d.a,null),c.dislikeCount))),i.a.createElement("pre",{className:m.a.description},n.description))},_=a(15),h=a(14),v=a(3),b=a.n(v),E=a(11),f=a.n(E),N=a(26);var g=Object(n.memo)((function(e){var t=e.video,a=e.video,n=a.snippet,c=a.statistics,r=e.onVideoClick,s=e.size,l=function(e){var t=e.substring(0,10).split("-").map((function(e){return parseInt(e)})),a=Object(_.a)(Date,Object(h.a)(t)),n=function(e){var t=e.getFullYear(),a=1+e.getMonth();a=a>=10?a:"0"+a;var n=e.getDate();return[t,1*a,1*(n=n>=10?n:"0"+n)]}(new Date);return(Object(_.a)(Date,Object(h.a)(n))-a)/864e5}(n.publishedAt),o="mini"===s?b.a.mini:"";return i.a.createElement("li",{className:"".concat(b.a.container),onClick:function(){return r(t)}},i.a.createElement("div",{className:b.a.video},i.a.createElement("img",{className:b.a.thumbnail,src:n.thumbnails.medium.url,alt:"video thumbnail"}),i.a.createElement("div",{className:"".concat(b.a.metadata," ").concat(o)},i.a.createElement(f.a,{className:b.a.title,text:n.title,maxLine:"mini"===s?1:2,ellipsis:"...",trimRight:!0,basedOn:"letters"}),i.a.createElement("p",{className:b.a.channel},n.channelTitle),c&&i.a.createElement("span",{className:b.a.viewCount},"\uc870\ud68c\uc218 ",c.viewCount,"\ud68c ",i.a.createElement(N.a,null)),i.a.createElement("span",{className:b.a.date},l,"\uc77c \uc804"),""===s&&i.a.createElement(f.a,{className:b.a.desc,text:n.description,maxLine:"1",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))})),y=a(27),x=a.n(y),V=function(e){var t=e.videos,a=e.onVideoClick,n=e.size;return i.a.createElement("ul",{className:x.a.videos},t.map((function(e){return i.a.createElement(g,{key:e.id,video:e,onVideoClick:a,size:n})})))},k=a(5),O=a.n(k),w=a(28),I=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),c=function(){var e=a.current.value;t(e)};return i.a.createElement("header",{className:O.a.header},i.a.createElement("div",{className:O.a.container},i.a.createElement("a",{className:O.a.logo,href:"/youtube-simple"},i.a.createElement(w.a,null),i.a.createElement("h1",{className:O.a.title},"Simple Youtube")),i.a.createElement("div",{className:O.a.inputBox},i.a.createElement("input",{ref:a,className:O.a.input,type:"search",placeholder:"\uac80\uc0c9",onKeyPress:function(e){"Enter"===e.key&&c()}}),i.a.createElement("button",{className:O.a.button,type:"submit",onClick:function(){c()}},i.a.createElement(d.c,{className:O.a.searchIcon})))))})),j=a(29);var C=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],l=c[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),d=m[0],_=m[1],h=Object(n.useCallback)((function(e){_(null),t.search(e).then((function(e){return l(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return l(e)}))}),[t]),i.a.createElement("div",{className:o.a.app},i.a.createElement(I,{onSearch:h}),i.a.createElement("section",{className:o.a.content},d&&i.a.createElement("div",{className:o.a.detail},i.a.createElement(p,{video:d,onSearch:h})),i.a.createElement("div",{className:o.a.list},!d&&i.a.createElement("h2",null,i.a.createElement(j.a,null)," \uc778\uae30 Top 25"),i.a.createElement(V,{videos:r,onVideoClick:function(e){_(e)},size:d?"mini":""}))))},S=a(33),B=a(9),D=a.n(B),L=a(12),A=a(30),R=a(31),z=function(){function e(t){Object(A.a)(this,e),this.youtube=t}return Object(R.a)(e,[{key:"mostPopular",value:function(){var e=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet,statistics",chart:"mostPopular",maxResults:25,regionCode:"KR"}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(L.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:encodeURI(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(S.a)({},e,{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=a(32),Y=new z(a.n(T).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDjOgXVIijE9rbMsWwJypG9BJxkLSeV0DI"}}));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,{youtube:Y})),document.getElementById("root"))},8:function(e,t,a){e.exports={app:"App_app__1kX79",content:"App_content__3La4L",detail:"App_detail__3BK-U",list:"App_list__275a3"}}},[[34,1,2]]]);
//# sourceMappingURL=main.0baa961e.chunk.js.map