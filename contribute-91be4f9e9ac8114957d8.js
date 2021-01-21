(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{589:function(e,a,t){"use strict";t.r(a),function(e){var s,l=t(719),r=t(190),i=t(73),n=t(275),c=t(575),o=t(721),m=t(1),d=t.n(m),u=t(112),g=t(720),b=t(715),f=t(717),p=t(657),E=t.n(p),k=t(186),h=t(188);(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const N=Object(i.a)("div")({name:"Contribute",class:"c1b6b6t9"}),w=/^https:\/\/signal.art\/addstickers\/#pack_id=([\dA-Za-z]+)&pack_key=([\dA-Za-z]+)$/g,y=/^(?:([\w ]+))+(?:, ?([\w ]+))*$/g,O={signalArtUrl:"",source:"",tags:"",isNsfw:void 0,isOriginal:void 0,isAnimated:void 0},S={signalArtUrl:async e=>{if(!e)return"This field is required.";const a=new RegExp(w).exec(e);if(!a)return"Invalid signal.art URL.";const[,t,s]=a;if(n.a(c.a(["meta","id"],t),await Object(h.d)()))return"A sticker pack with that ID already exists in the directory.";try{await Object(h.c)(t,s)}catch{return"Invalid sticker pack. Please check the pack ID and key."}},source:e=>{if(e&&e.length>320)return"This field must be no longer than 320 characters."},tags:e=>{if(""!==e&&!new RegExp(y).test(e))return"Invalid value. Tags must be a list of comma-delimited strings."},isNsfw:e=>{if(void 0===e)return"This field is required."},isOriginal:e=>{if(void 0===e)return"This field is required."},isAnimated:e=>{if(void 0===e)return"This field is required."}};g.a.registerLanguage("yaml",b.a);const A=()=>{const[e,a]=d.a.useState(!1),[t,s]=d.a.useState(""),i=d.a.useRef(null),n=d.a.useCallback(()=>{a(!0),s("")},[a,s]),c=d.a.useCallback((e,a)=>{const t=new RegExp(w).exec(e.signalArtUrl);if(!t)throw new Error("Unable to extract pack ID and pack key from signal.art URL.");const[,l,r]=t,n=o.a(e.tags.split(",").map(e=>e.trim()).filter(e=>e.length)),c={key:r};e.source&&(c.source=e.source),n.length>0&&(c.tags=n),"true"===e.isNsfw&&(c.nsfw=!0),"true"===e.isOriginal&&(c.original=!0),"true"===e.isAnimated&&(c.animated=!0),s(E.a.safeDump({[l]:c},{indent:2}).trim()),i.current&&i.current.scrollIntoView({behavior:"smooth"}),a.setSubmitting(!1)},[s]),m=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://github.com",title:"GitHub"},"GitHub"),[]),b=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests",title:"Pull Request"},"Pull Request"),[]),p=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://support.signal.org/hc/articles/360031836512-Stickers#h_c2a0a45b-862f-4d12-9ab1-d9a6844062ca",title:"Sticker Creator Guidelines"},"Sticker Creator Guidelines"),[]),h=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://en.wikipedia.org/wiki/YAML",title:"YAML"},"YAML"),[]),v=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://github.com/signalstickers/stickers/edit/master/src/stickers.yml",title:"Signal Stickers repository"},"Signal Stickers repository"),[]),y=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://twitter.com/signalstickers",title:"Twitter"},"@signalstickers"),[]);return d.a.createElement(N,{className:"my-4 p-lg-3 px-lg-4"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("h1",{className:"mb-4"},"Contribute"),d.a.createElement("p",{className:"mt-lg-3 mb-4"},"To get your sticker pack listed in the Signal Stickers directory:"),d.a.createElement("ol",null,d.a.createElement("li",{className:"mb-2"},"If you don't already have one, create a ",m," account. You will need one in order to open a ",b," against the Signal Stickers repository."),d.a.createElement("li",{className:"mb-2"},"Create a sticker pack using the Signal desktop app. For help, see Signal's ",p,". Be sure to save the ",d.a.createElement("code",null,"signal.art")," URL for your pack. If you are creating a sticker pack derived from an existing one on another platform or from someone else's artwork, please consider using the original author's name in the ",d.a.createElement("strong",null,"Author")," field when creating your pack in Signal, and consider adding their website, Twitter handle, or other online presence to the ",d.a.createElement("strong",null,"Source")," field below."),d.a.createElement("li",{className:"mb-2"},"Open a Pull Request in the Signal Stickers GitHub repository updating ",d.a.createElement("code",null,"stickers.yml")," to to include an entry for your sticker pack.")),d.a.createElement("p",null,"The form below will guide you through the process of generating the ",h," entry for your pack that you will need to add to ",d.a.createElement("code",null,"stickers.yml"),"."),d.a.createElement("p",null,"Alternatively, you can send us the YAML via a Twitter message at ",y,". Please only use this if you have no way to open a Pull Request on GitHub!"))),d.a.createElement("hr",{className:"pt-3 pb-2"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement(l.d,{initialValues:O,onSubmit:c,validateOnChange:e,validateOnBlur:e},({values:e,errors:a,isValidating:t,isSubmitting:s})=>d.a.createElement(l.c,{noValidate:!0},d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.a)("col-12",a.signalArtUrl&&"text-danger"),htmlFor:"signal-art-url"},"Signal.art URL:",d.a.createElement(l.b,{type:"text",id:"signal-art-url",name:"signalArtUrl",validate:S.signalArtUrl,className:Object(r.a)("form-control","mt-2",a.signalArtUrl&&"is-invalid"),placeholder:"https://signal.art/addstickers/#pack_id=<your pack id>&pack_key=<your pack key>"}),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"signalArtUrl"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.a)("col-12",a.source&&"text-danger"),htmlFor:"source"},"(Optional) Source:",d.a.createElement(l.b,{type:"text",id:"source",name:"source",validate:S.source,className:Object(r.a)("form-control","mt-2",a.source&&"is-invalid")}),d.a.createElement("small",{className:"form-text text-muted"},"Original author, website, company, etc."),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"source"})," ")))),d.a.createElement("div",{className:"form-group mb-4"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.a)("col-12",a.tags&&"text-danger"),htmlFor:"tags"},"(Optional) Tags:",d.a.createElement(l.b,{type:"text",id:"tags",name:"tags",validate:S.tags,className:Object(r.a)("form-control","mt-2",a.tags&&"is-invalid")}),d.a.createElement("small",{className:"form-text text-muted"},"Comma-separated list of words."),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"tags"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.a)("col-12","mb-2",a.isNsfw&&"text-danger")},"Is your sticker pack ",d.a.createElement(k.a,{href:"https://www.urbandictionary.com/define.php?term=NSFW",title:"NSFW"},"NSFW"),"?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-nsfw-true",name:"isNsfw",validate:S.isNsfw,className:Object(r.a)("custom-control-input",a.isNsfw&&"is-invalid"),value:"true",checked:"true"===e.isNsfw}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-nsfw-false",name:"isNsfw",validate:S.isNsfw,className:Object(r.a)("custom-control-input",a.isNsfw&&"is-invalid"),value:"false",checked:"false"===e.isNsfw}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isNsfw"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.a)("col-12","mb-2",a.isOriginal&&"text-danger")},"Is your pack original? Did the author of the pack draw it exclusively for Signal, from original artworks?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-original-true",name:"isOriginal",validate:S.isOriginal,className:Object(r.a)("custom-control-input",a.isOriginal&&"is-invalid"),value:"true",checked:"true"===e.isOriginal}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-original-false",name:"isOriginal",validate:S.isOriginal,className:Object(r.a)("custom-control-input",a.isOriginal&&"is-invalid"),value:"false",checked:"false"===e.isOriginal}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isOriginal"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.a)("col-12","mb-2",a.isAnimated&&"text-danger")},"Is your pack animated?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-animated-true",name:"isAnimated",validate:S.isAnimated,className:Object(r.a)("custom-control-input",a.isAnimated&&"is-invalid"),value:"true",checked:"true"===e.isAnimated}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-animated-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-animated-false",name:"isAnimated",validate:S.isAnimated,className:Object(r.a)("custom-control-input",a.isAnimated&&"is-invalid"),value:"false",checked:"false"===e.isAnimated}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-animated-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isAnimated"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:s||t,onClick:n},"Generate YAML")))))))),t?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("hr",null),d.a.createElement("p",{className:"mt-4 mb-4"},"Great! Below is the YAML entry you will need to add to ",d.a.createElement("code",null,"stickers.yml")," in the ",v,":"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement("div",{className:"card"},d.a.createElement(g.a,{language:"yaml",style:f.a,customStyle:{margin:"0"}},t)))),d.a.createElement("div",{className:"row mt-4"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement(k.a,{title:"Open a Pull Request",href:"https://github.com/signalstickers/stickers/edit/master/src/stickers.yml",className:"btn btn-success btn-block btn-lg",ref:i},"Edit the file and open a Pull Request",d.a.createElement(u.c,{className:"ml-2"}))))):null)};v(A,"useState{[hasBeenSubmitted, setHasBeenSubmitted](false)}\nuseState{[ymlBlob, setYmlBlob]('')}\nuseRef{openPrButton}\nuseCallback{onSubmitClick}\nuseCallback{onSubmit}\nuseMemo{gitHubLink}\nuseMemo{pullRequestLink}\nuseMemo{stickerPackGuideLink}\nuseMemo{yamlLink}\nuseMemo{editStickersYmlLink}\nuseMemo{twitterLink}");const x=A;var L,C;a.default=x,t(718),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(N,"Contribute","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(w,"SIGNAL_ART_URL_PATTERN","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(y,"TAGS_PATTERN","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(O,"initialValues","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(S,"validators","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(A,"ContributeComponent","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(x,"default","/home/runner/work/signalstickers/signalstickers/src/components/contribute/Contribute.tsx")),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)}.call(this,t(27)(e))},718:function(e,a,t){"use strict";t.r(a)}}]);
//# sourceMappingURL=contribute-91be4f9e9ac8114957d8.js.map