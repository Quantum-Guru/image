(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),i=t.n(r),s=(t(15),t(1)),c=t(2),o=t(5),u=t(4),m=t(3),d=(t(16),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"box"},l.a.createElement("a",{href:"https://www.quantumcomputers.guru/"},l.a.createElement("img",{src:"./Asset/logo.png",alt:"Logo"}))),l.a.createElement("div",{className:"box"},l.a.createElement("i",{className:"fas fa-bars handburger open",onClick:this.props.handleIsSideNavOpen}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/",target:"_blank"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/news/",target:"_blank"},"News")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/learn/",target:"_blank"},"Learn")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/research/",target:"_blank"},"Research")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/video/",target:"_blank"},"Video")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/qc-apps/",target:"_blank"},"QC Apps")),l.a.createElement("li",{onClick:this.props.handleIsLoaded},l.a.createElement("a",{href:"https://www.quantumcomputers.guru/first-real-world-user-application-of-quantum-randomness-image-coloring/",target:"_blank"},l.a.createElement("i",{class:"fas fa-question"}))))))}}]),t}(n.Component)),h=t(6),g=t.n(h),p=t(7),f=(t(18),t(19),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={count:0},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=setInterval(function(){100!==e.state.count?e.setState(function(e){return{count:e.count+1}}):clearInterval(a)},600)}},{key:"render",value:function(){return l.a.createElement("div",{className:"circular"},l.a.createElement("div",{className:"inner"}),l.a.createElement("div",{className:"outer"}),l.a.createElement("div",{className:"numb"},this.state.count," %"),l.a.createElement("div",{className:"circle"},l.a.createElement("div",{className:"dot"},l.a.createElement("span",null)),l.a.createElement("div",{className:"bar left"},l.a.createElement("div",{className:"progress"})),l.a.createElement("div",{className:"bar right"},l.a.createElement("div",{className:"progress"}))))}}]),t}(n.Component)),v=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{width:"100%",height:"100%",position:"relative"},className:"outputWindow"},l.a.createElement("div",{className:"div",dangerouslySetInnerHTML:{__html:this.props.img}}),l.a.createElement("div",{className:"shareOption"},l.a.createElement("div",{className:"inner-share"},l.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){return e.props.handleisDownLoading(e.props.downloadLink)}},l.a.createElement("i",{className:"fas fa-download"})),l.a.createElement("a",{className:"share"},l.a.createElement("i",{className:"fas fa-share",onClick:this.props.handleIsSharing}),l.a.createElement("div",{className:"share-opt ".concat(this.props.isSharing&&"active")},l.a.createElement("a",{href:"https://www.facebook.com/"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{href:"https://www.linkedin.com/"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"https://www.instagram.com/"},l.a.createElement("i",{className:"fab fa-instagram"})))))))}}]),t}(n.Component);function w(e){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(g.a.mark(function e(a){var t,n,l,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<a)){e.next=13;break}return e.next=5,fetch("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=hex16&size=3");case 5:return l=e.sent,e.next=8,l.json();case 8:r=e.sent,t.push("#"+r.data[0]);case 10:n++,e.next=2;break;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(g.a.mark(function e(a){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e,a,t){var n=document.getElementById("download");console.log(n);var l=new Blob([e],{type:t}),r=URL.createObjectURL(l);return n.href=r,n.download=a,r}var O=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={outputImage:null,clickedOnBtn:!1,downloadLink:"/",isSharing:!1},n.generateImage=n.generateImage.bind(Object(o.a)(n)),n.handleIsSharing=n.handleIsSharing.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleIsSharing",value:function(){console.log("HEY....."),this.setState(function(e){return{isSharing:!e.isSharing}})}},{key:"generateImage",value:function(){var e=Object(p.a)(g.a.mark(function e(){var a,t,n,l,r,i,s,c,o,u,m,d,h,p,f,v,E,S;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==this.state.clickedOnBtn){e.next=2;break}return e.abrupt("return");case 2:return this.props.handleGenerateNewImage(),this.state.clickedOnBtn||this.setState({clickedOnBtn:!0}),this.setState({outputImage:null}),console.log("Lets start ..."),e.next=8,b(this.props.image);case 8:return l=e.sent,r=(l.match(/fill="/g)||[]).length,i=l,s=/fill="#[a-zA-Z0-9]{6}"/g,c=l.match(s),o=(null===(a=c)||void 0===a?void 0:a.length)||0,u=new Set(c),e.next=17,w(u.size);case 17:for(m=e.sent,c=[],u.forEach(function(e){return c.push(e)}),d=0;d<u.size;d++)h='fill="'.concat(m[d],'"'),i=i.replaceAll(c[d],h);return s=/fill="#[a-zA-Z0-9]{3}"/g,c=l.match(s),o+=(null===(t=c)||void 0===t?void 0:t.length)||0,u=new Set(c),e.next=27,w(u.size);case 27:for(m=e.sent,c=[],u.forEach(function(e){return c.push(e)}),p=0;p<u.size;p++)f='fill="'.concat(m[p],'"'),i=i.replaceAll(c[p],f);return s=/fill="#[a-zA-Z0-9]{4}"/g,c=l.match(s),o+=(null===(n=c)||void 0===n?void 0:n.length)||0,u=new Set(c),e.next=37,w(u.size);case 37:for(m=e.sent,c=[],u.forEach(function(e){return c.push(e)}),v=0;v<u.size;v++)E='fill="'.concat(m[v],'"'),i=i.replaceAll(c[v],E);S=N(i,"output.svg","image/svg"),this.setState({downloadLink:S}),this.setState({outputImage:i,clickedOnBtn:!1}),console.log(r,o),r>2*o&&alert("Number of fill tags are not same, try to use a different image");case 46:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.outputImage,a=l.a.createElement(v,{handleisDownLoading:this.props.handleisDownLoading,downloadLink:this.state.downloadLink,img:e,handleIsSharing:this.handleIsSharing,isSharing:this.state.isSharing});return l.a.createElement("div",{className:"canvas"},l.a.createElement("div",{className:"box ".concat(this.props.generateNewImage&&"haveImageToShow")},l.a.createElement("img",{src:this.props.image,alt:"Selected"}),l.a.createElement("div",{id:"forMobileView"},null!=this.state.outputImage?a:this.props.generateNewImage&&l.a.createElement(f,null))),l.a.createElement("div",{className:"reload"},l.a.createElement("i",{className:"fas fa-redo",onClick:this.generateImage}),l.a.createElement("p",null,"Refill Quantum Generated Colors")),l.a.createElement("div",{className:"box"},this.props.generateNewImage&&null!=this.state.outputImage?a:l.a.createElement("div",null,this.props.generateNewImage&&l.a.createElement(f,null),l.a.createElement("a",{href:"/",className:"hide",id:"download"},"Download"))))}}]),t}(n.Component),k=[{title:"1 SVG",value:"1",fileName:"./SVG/1.svg"},{title:"6 SVG",value:"6",fileName:"./SVG/6.svg"},{title:"2 SVG",value:"2",fileName:"./SVG/2.svg"},{title:"3 SVG",value:"3",fileName:"./SVG/3.svg"},{title:"4 SVG",value:"4",fileName:"./SVG/4.svg"},{title:"5 SVG",value:"5",fileName:"./SVG/5.svg"},{title:"9 SVG",value:"9",fileName:"./SVG/9.svg"},{title:"10 SVG",value:"10",fileName:"./SVG/10.svg"},{title:"2 SVG",value:"2",fileName:"./SVG/2.svg"},{title:"3 SVG",value:"3",fileName:"./SVG/3.svg"},{title:"4 SVG",value:"4",fileName:"./SVG/4.svg"},{title:"5 SVG",value:"5",fileName:"./SVG/5.svg"},{title:"1 SVG",value:"1",fileName:"./SVG/1.svg"},{title:"2 SVG",value:"2",fileName:"./SVG/2.svg"},{title:"3 SVG",value:"3",fileName:"./SVG/3.svg"},{title:"4 SVG",value:"4",fileName:"./SVG/4.svg"},{title:"5 SVG",value:"5",fileName:"./SVG/5.svg"}],I=(t(20),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={selectState:"cat",marginLeft:0},n.handleSlider=n.handleSlider.bind(Object(o.a)(n)),n.handleChangeSelect=n.handleChangeSelect.bind(Object(o.a)(n)),n.handleImageChange=n.handleImageChange.bind(Object(o.a)(n)),n.handleImageUpload=n.handleImageUpload.bind(Object(o.a)(n)),n.handleImageChanger=n.handleImageChanger.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleChangeSelect",value:function(e){this.setState({selectState:e.target.value}),this.props.changeSvgSource("./SVG/".concat(e.target.value,".svg"))}},{key:"handleImageChange",value:function(e){this.setState({selectState:e}),this.props.changeSvgSource("./SVG/".concat(e,".svg"))}},{key:"handleSlider",value:function(e){this.state.marginLeft+e>0||this.setState(function(a){return{marginLeft:a.marginLeft+e}})}},{key:"handleImageChanger",value:function(e){this.props.changeSvgSource(e.target.result)}},{key:"handleImageUpload",value:function(){var e=document.querySelector("#image-upload-input");if(e.files&&e.files[0]){var a=new FileReader;a.onload=this.handleImageChanger,a.readAsDataURL(e.files[0])}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"sideBar"},l.a.createElement("div",{className:"imageSelecter"},l.a.createElement("div",{className:"image-upload"},l.a.createElement("input",{id:"image-upload-input",type:"file",name:"abc",accept:".svg",onChange:this.handleImageUpload}),l.a.createElement("i",{className:"fas fa-upload"}),l.a.createElement("div",{className:"para"},l.a.createElement("p",null,"Select Image"),l.a.createElement("p",null,"(.SVG only)"))),l.a.createElement("div",{className:"div-wrapper"},l.a.createElement("div",{className:"innerDiv",style:{marginLeft:this.state.marginLeft}},k.map(function(a){return l.a.createElement("img",{key:a.title,src:a.fileName,alt:a.title,onClick:function(){e.handleImageChange(a.value)}})})))))}}]),t}(n.Component)),L=(t(21),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={svgSource:"./SVG/1.svg",generateNewImage:!1},n.changeSvgSource=n.changeSvgSource.bind(Object(o.a)(n)),n.handleGenerateNewImage=n.handleGenerateNewImage.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"changeSvgSource",value:function(e){console.log(e),this.setState({svgSource:e,generateNewImage:!1})}},{key:"handleGenerateNewImage",value:function(){console.log("HI"),this.setState({generateNewImage:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"mainComponent"},l.a.createElement(I,{changeSvgSource:this.changeSvgSource}),l.a.createElement(O,{handleisDownLoading:this.props.handleisDownLoading,image:this.state.svgSource,generateNewImage:this.state.generateNewImage,handleGenerateNewImage:this.handleGenerateNewImage}))}}]),t}(n.Component)),y=(t(22),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa92022 BIT TO QUBIT Limited. All rights reserved."),l.a.createElement("a",{href:"https://www.freepik.com/vectors/vintage"},"Image Source"),l.a.createElement("a",{href:"https://qrng.anu.edu.au/"},"POWERED BY ANU"))}}]),t}(n.Component)),j=(t(23),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;Object(s.a)(this,t),n=a.call(this,e);var l=(new Date).toDateString().split(" ");return n.state={name:"",mail:"",time:l[0]+", "+l[1]+" "+l[2]+" "+l[3]},n.handleNameChange=n.handleNameChange.bind(Object(o.a)(n)),n.handleMailChange=n.handleMailChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleMailChange",value:function(e){this.setState({mail:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("Try to submit the form"),document.querySelector("#download\\ show").click()}},{key:"render",value:function(){var e=this.props.isDownLoading?"download active":"download";return l.a.createElement("div",{className:e},l.a.createElement("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLSeqA35OPVYwl-_dPl7olrAGuuEan9SaiL8EP6BMh7CKk6C27Q/formResponse",encType:"text/plain",target:"hidden_iframe",className:"container",onSubmit:this.handleSubmit,onLoad:this.handleSubmit},l.a.createElement("div",{className:"input"},l.a.createElement("input",{name:"entry.804397340",type:"text",onChange:this.handleNameChange,value:this.state.name,placeholder:"Name",required:!0})),l.a.createElement("div",{className:"input"},l.a.createElement("input",{name:"entry.1219021070",type:"email",onChange:this.handleMailChange,value:this.state.mail,placeholder:"Email"})),l.a.createElement("p",null,this.state.time),l.a.createElement("div",{className:"innerDiv div1",style:{marginTop:"8px"}},l.a.createElement("input",{type:"checkbox",name:"subscribe"}),l.a.createElement("p",null,"Include Name and Date")),l.a.createElement("div",{className:"innerDiv div1",style:{marginBottom:"8px"}},l.a.createElement("input",{type:"checkbox",name:"subscribe"}),l.a.createElement("p",null,"Subscribe Newsletter")),l.a.createElement("div",{className:"innerDiv"},l.a.createElement("a",{onClick:this.props.handleisDownLoading},l.a.createElement("i",{class:"fas fa-times"})),l.a.createElement("button",{type:"submit",style:{border:"none",marginRight:"20px"}},l.a.createElement("a",{href:this.props.downloadLink,download:"Filled_Image.svg",type:"image/svg",id:"download show"},l.a.createElement("i",{className:"fas fa-check"}))))),l.a.createElement("iframe",{id:"hidden_iframe",name:"hidden_iframe",style:{display:"none"}}))}}]),t}(n.Component)),C=(t(24),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isSideNavOpen?"sidenav active":"sidenav";return l.a.createElement("div",{className:e},l.a.createElement("i",{onClick:this.props.handleIsSideNavOpen,className:"fas fa-angle-double-right"}),l.a.createElement("div",{className:"box"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/",target:"_blank"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/news/",target:"_blank"},"News")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/learn/",target:"_blank"},"Learn")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/research/",target:"_blank"},"Research")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/video/",target:"_blank"},"Video")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.quantumcomputers.guru/qc-apps/",target:"_blank"},"QC Apps")),l.a.createElement("li",{onClick:this.props.handleIsLoaded},l.a.createElement("a",{href:"https://www.quantumcomputers.guru/first-real-world-user-application-of-quantum-randomness-image-coloring/"},l.a.createElement("i",{class:"fas fa-question"}))))))}}]),t}(n.Component)),G=(t(25),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isLoaded?"documentation":"documentation active";return l.a.createElement("div",{className:e},l.a.createElement("div",{className:"documentation-container"},l.a.createElement("h1",null,"Visual application of quantum randomness - Image Coloring"),l.a.createElement("button",{onClick:this.props.handleIsLoaded},"Let's start")))}}]),t}(n.Component)),V=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isDownLoading:!1,isSideNavOpen:!1,isLoaded:!1,downloadLink:null},n.handleisDownLoading=n.handleisDownLoading.bind(Object(o.a)(n)),n.handleIsSideNavOpen=n.handleIsSideNavOpen.bind(Object(o.a)(n)),n.handleIsLoaded=n.handleIsLoaded.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleIsSideNavOpen",value:function(){this.setState(function(e){return{isSideNavOpen:!e.isSideNavOpen}})}},{key:"handleIsLoaded",value:function(){this.setState(function(e){return{isLoaded:!e.isLoaded}})}},{key:"handleisDownLoading",value:function(e){null!==e&&this.setState({downloadLink:e}),this.setState(function(e){return{isDownLoading:!e.isDownLoading}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container",style:{position:"relative"}},l.a.createElement(G,{isLoaded:this.state.isLoaded,handleIsLoaded:this.handleIsLoaded}),l.a.createElement(j,{isDownLoading:this.state.isDownLoading,handleisDownLoading:this.handleisDownLoading,downloadLink:this.state.downloadLink}),l.a.createElement(d,{handleIsLoaded:this.handleIsLoaded,handleIsSideNavOpen:this.handleIsSideNavOpen}),l.a.createElement(C,{handleIsLoaded:this.handleIsLoaded,isSideNavOpen:this.state.isSideNavOpen,handleIsSideNavOpen:this.handleIsSideNavOpen}),l.a.createElement(L,{handleisDownLoading:this.handleisDownLoading}),l.a.createElement(y,null))}}]),t}(n.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),l(e),r(e),i(e)})};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root")),D()}],[[10,1,2]]]);
//# sourceMappingURL=main.e4f6dbb8.chunk.js.map