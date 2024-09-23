import{d as h,v as C,A as k,l as v,o as s,e as i,g as a,t as _,f as o,q as u,C as T,F as S,j,n as L,s as x,c as m,a as U,S as A,I as D,as as F,a5 as b,ab as N,at as q,m as H,w as f,r as w,k as y,ad as I,aa as W}from"./app-3xK4bpXH.js";import{a as E,b as O,_ as Q}from"./YunPostMeta.vue_vue_type_style_index_0_lang-BsycgvDO.js";const G={class:"post-copyright"},J={class:"post-copyright-author"},K={key:0,class:"post-copyright-link"},X=["href","title"],Z={class:"post-copyright-license"},ee=["innerHTML"],te=h({__name:"ValaxyCopyright",props:{url:{default:""}},setup(g){const{t:e,locale:t}=C(),n=k(),c=n.value.license.type==="zero"?"1.0":"4.0",p=n.value.license.type==="zero"?"publicdomain":"licenses",l=v(()=>{const d=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${p}/${n.value.license.type}/${c}/deed.${d}`}),r=v(()=>e("post.copyright.license_content",[`<a href="${l.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${c}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(d,$)=>(s(),i("ul",G,[a("li",J,[a("strong",null,_(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),a("span",null,_(o(n).author.name),1)]),d.url?(s(),i("li",K,[a("strong",null,_(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),a("a",{href:d.url,target:"_blank",title:o(e)("post.copyright.link")},_(decodeURI(d.url)),9,X)])):u("v-if",!0),a("li",Z,[a("strong",null,_(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),a("span",{innerHTML:r.value},null,8,ee)])]))}}),ne={class:"yun-sponsor-container flex-center flex-col"},oe=["title"],se={key:0,class:"sponsor-description",mb:"4",text:"sm"},ae={class:"flex justify-around"},le=["href"],re=["src","title"],ie=h({__name:"YunSponsor",setup(g){const{t:e}=C(),t=k(),n=T(!1),c=v(()=>{var p;return((p=t.value.sponsor)==null?void 0:p.title)??e("reward.donate")});return(p,l)=>(s(),i("div",ne,[a("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:c.value,text:"red-400",onClick:l[0]||(l[0]=r=>n.value=!n.value)},l[1]||(l[1]=[a("div",{"i-ri-heart-line":""},null,-1)]),8,oe),a("div",{class:x(["qrcode-container qrcode flex-center flex-col",n.value&&"show"]),m:"y-4"},[o(t).sponsor.description?(s(),i("div",se,_(o(t).sponsor.description),1)):u("v-if",!0),a("div",ae,[(s(!0),i(S,null,j(o(t).sponsor.methods,(r,d)=>(s(),i("a",{key:d,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:r.url,target:"_blank",style:L(`color:${r.color}`)},[a("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:r.url,title:r.name},null,8,re),a("div",{text:"xl",m:"2",class:x(r.icon)},null,2)],12,le))),128))])],2)]))}}),ce={class:"inline-flex",text:"sm",py:"1"},ue={key:1,mx:"2"},pe=h({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(g){return(e,t)=>{const n=E,c=O;return s(),i("div",ce,[e.frontmatter.categories?(s(),m(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):u("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(s(),i("span",ue)):u("v-if",!0),e.frontmatter.tags?(s(),m(c,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):u("v-if",!0)])}}}),de={key:0,flex:"~",text:"sm",my:"1",h:"5"},me=["title"],_e=["data-path"],fe=["title"],ve=["data-path"],he=h({__name:"YunWalineMeta",setup(g){const e=U(),t=A(),n=v(()=>t.value.addons["valaxy-addon-waline"]),{t:c}=C();return(p,l)=>n.value&&n.value.options?(s(),i("div",de,[n.value.options.pageview?(s(),i("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:o(c)("post.pageview_count")},[l[0]||(l[0]=a("div",{"inline-flex":"","i-ri-eye-line":""},null,-1)),a("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":o(e).path},null,8,_e)],8,me)):u("v-if",!0),n.value.options.comment?(s(),i("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:o(c)("post.comment_count")},[l[1]||(l[1]=a("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1)),a("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":o(e).path},null,8,ve)],8,fe)):u("v-if",!0)])):u("v-if",!0)}}),$e=h({__name:"post",setup(g){const e=k(),t=D(),n=F(),c=v(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),p={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:b(t.value.date).toDate(),dateModified:b(t.value.updated).toDate()},l=t.value.image||t.value.cover;return l&&(p.image=l),N(q(p)),(r,d)=>{const $=W,Y=Q,P=he,V=pe,z=ie,B=te,M=H("RouterView");return s(),i(S,null,[r.$slots["sidebar-child"]?(s(),m($,{key:0},{default:f(()=>[w(r.$slots,"sidebar-child")]),_:3})):(s(),m($,{key:1})),y(M,null,{default:f(({Component:R})=>[(s(),m(I(R),null,{"main-header-after":f(()=>[y(Y,{frontmatter:o(t)},null,8,["frontmatter"]),y(P),y(V,{frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":f(()=>[c.value?(s(),m(z,{key:0,m:"t-6"})):u("v-if",!0),o(t).copyright||o(e).license.enabled?(s(),m(B,{key:1,url:o(n),m:"y-4"},null,8,["url"])):u("v-if",!0)]),"aside-custom":f(()=>[w(r.$slots,"aside-custom")]),_:2},1024))]),_:3})],64)}}});export{$e as default};
