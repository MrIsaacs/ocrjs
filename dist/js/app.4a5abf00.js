(function(e){function t(t){for(var r,n,o=t[0],c=t[1],l=t[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},i=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var r,s,i,n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"vue-app"}},[a("TestPictureInput")],1)},c=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("b-alert",{attrs:{variant:"warning",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[e._v("\n      First choose an image and then select the area which will be scanned!\n    ")]),e.imageSrc?a("b-progress",{staticClass:"rounded-0",attrs:{max:100}},[a("b-progress-bar",{attrs:{value:e.progress,label:e.progress.toFixed(0)+"%",max:100,"show-progress":""}})],1):e._e(),a("div",{staticClass:"col-lg-12"},[a("h1",{staticClass:"h2 text-center"},[e._v("\n        "+e._s(e.heading)+"\n      ")])]),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"content"},[e.imageSrc?a("section",{staticClass:"cropper-area"},[a("vue-cropper",{ref:"cropper",attrs:{src:e.imageSrc,alt:"Source Image",cropend:e.cropImage}})],1):e._e(),a("section",{staticClass:"preview-area"},[a("p",[e._v("Preview")]),a("div",{staticClass:"cropped-image"},[e.croppedImage?a("img",{attrs:{src:e.croppedImage,alt:"Cropped Image"}}):a("div",{staticClass:"crop-placeholder"})])])])]),100===e.progress?a("div",{staticClass:"col-lg-12"},[a("h3",{staticClass:"text-center"},[e._v("\n        Output goes here:\n      ")]),a("div",[a("b-card",{staticClass:"mb-3",attrs:{"img-src":e.imageSrc,"img-alt":"Card image","img-left":""}},[a("b-card-text",e._l(e.doc,(function(t){return a("p",{domProps:{innerHTML:e._s(t)}})})),0)],1)],1)]):e._e(),a("a",{staticClass:"float float-3nd upload-btn-wrapper",attrs:{href:"#",title:"Upload an Image"},on:{click:e.chooseImage}},[a("v-icon",{staticClass:"my-float",attrs:{icon:"image"}}),a("input",{ref:"input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}})],1),a("a",{staticClass:"float float-2nd",attrs:{href:"#"},on:{click:e.appendText}},[a("v-icon",{staticClass:"my-float",attrs:{icon:"plus"}})],1),a("a",{staticClass:"float",attrs:{id:"menu-share",href:"#"},on:{click:e.scanCroppedImage}},[a("v-icon",{staticClass:"my-float",attrs:{icon:"file-invoice"}})],1)],1)])},p=[],d=(a("a481"),a("1da1")),u=a("ade3"),f=a("c9bf"),g=a("e597"),m=a("60a3"),h=a("95c3"),b=a.n(h);a("6107");let v=(r=Object(m["a"])({components:{PictureInput:g["a"],VueCropper:b.a}}),r((i=class extends m["b"]{constructor(){super(...arguments),Object(u["a"])(this,"heading","OCRjs"),Object(u["a"])(this,"text",""),Object(u["a"])(this,"doc",[]),Object(u["a"])(this,"progress",0),Object(u["a"])(this,"imageSrc",null),Object(u["a"])(this,"croppedImage",null),Object(u["a"])(this,"showDismissibleAlert",!1),Object(u["a"])(this,"metho",void 0)}cropImage(e){this.$refs.cropper&&(this.croppedImage=this.$refs.cropper.getCroppedCanvas().toDataURL())}createImage(){console.log("Croppen wurde beendet.")}chooseImage(){this.$refs.input.click()}appendText(){this.doc.push(this.text)}scanCroppedImage(){var e=this;return Object(d["a"])((function*(){if(e.$refs.cropper){const t=Object(f["createWorker"])({logger:t=>{t.jobId&&(e.progress=0==t.progress?0:100*t.progress)}});yield t.load(),yield t.loadLanguage("deu"),yield t.initialize("deu");const a=yield t.recognize(e.croppedImage),r=a.data.text;e.doc.push(r.replace(/\n/g,"<br />")),yield t.terminate()}else e.showDismissibleAlert=!0}))()}setImage(e){const t=e.target.files[0];if(-1!==t.type.indexOf("image/"))if("function"===typeof FileReader){const e=new FileReader;e.onload=e=>{this.imageSrc=e.target.result,this.croppedImage=this.cropImage()},e.readAsDataURL(t)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")}},s=i))||s);var y,C,O=v,w=O,j=(a("b091"),a("2877")),I=Object(j["a"])(w,l,p,!1,null,"bda49ed2",null),x=I.exports;let _=(y=Object(m["a"])({components:{TestPictureInput:x}}),y(C=class extends m["b"]{})||C);var P=_,S=P,k=(a("034f"),Object(j["a"])(S,o,c,!1,null,null,null)),T=k.exports,A=(a("f9e3"),a("2dd8"),a("5f5b")),D=a("ecee"),$=a("c074"),R=a("ad3d");D["c"].add($["c"],$["b"],$["a"]),n["default"].use(A["a"]),n["default"].component("v-icon",R["a"]),n["default"].config.productionTip=!1,new n["default"]({render:e=>e(T)}).$mount("#vue-app")},"64a9":function(e,t,a){},b091:function(e,t,a){"use strict";var r=a("cebf"),s=a.n(r);s.a},cebf:function(e,t,a){}});
//# sourceMappingURL=app.4a5abf00.js.map