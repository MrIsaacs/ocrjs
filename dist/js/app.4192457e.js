(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12fb":function(e,t,n){"use strict";var r=n("cfe0"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ocrjs"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"text-center"},[n("b-col",[n("h1",[e._v("\n          "+e._s(e.heading)+"\n        ")]),n("hr"),n("List",{attrs:{items:e.scans}})],1),n("Modal",{on:{save:e.onSave}},[e.add?n("PictureHandler"):n("ScanView",{attrs:{content:e.getItem}})],1),n("a",{staticClass:"float",attrs:{id:"item-add",href:"#",title:"Add scanned text"},on:{click:e.openModal}},[n("v-icon",{staticClass:"my-float",attrs:{icon:"plus"}})],1)],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-row",{staticClass:"text-center"},[n("b-col",[n("b-alert",{attrs:{variant:"warning",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[e._v("\n        First choose an image and then select the area which will be scanned!\n      ")])],1),n("div",{staticClass:"w-100"}),e.imageSrc?e._e():n("b-col",[n("v-icon",{staticStyle:{"font-size":"56px"},attrs:{icon:"image"}}),n("br"),e._v("\n      No image here"),n("br"),n("br"),n("b-button",{attrs:{id:"upld-wrpr",size:"lg",variant:"outline-dark"},on:{click:e.uploadImage}},[n("v-icon",{attrs:{icon:"image"}}),e._v("\n        Upload\n      ")],1),n("input",{ref:"input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}})],1),e.imageSrc?n("div",{attrs:{id:"preview-overlay"}},[n("b-img",{attrs:{src:e.croppedImage,fluid:""}})],1):e._e(),e.imageSrc?n("section",{staticClass:"cropper-area"},[n("VueCropper",{ref:"cropper",attrs:{src:e.imageSrc,alt:"Source Image",ready:e.cropperIsReady,cropend:e.cropImage}})],1):e._e(),e.imageSrc?n("b-progress",{staticClass:"rounded-0",attrs:{max:100}},[n("b-progress-bar",{attrs:{value:e.progress,label:e.progress.toFixed(0)+"%",max:100,"show-progress":""}})],1):e._e(),100===e.progress?n("div",{staticClass:"col-lg-12"},[n("h3",{staticClass:"text-center"},[e._v("\n        Output goes here:\n      ")]),n("div",e._l(e.doc,(function(t){return n("p",{domProps:{innerHTML:e._s(t)}})})),0)]):e._e()],1)],1)},i=[],c=n("1da1"),l=n("c9bf"),d=n("95c3"),u=n.n(d),p=(n("6107"),{name:"PictureHandler",components:{VueCropper:u.a},data:function(){return{text:"",doc:[],cropperReady:!1,progress:0,imageSrc:null,croppedImage:null,showDismissibleAlert:!1}},computed:{getCroppedImage(){return this.croppedImage}},mounted:function(){this.$root.$on("scanCrop",()=>{this.scanCroppedImage()}),this.$root.$on("saveRequest",()=>{this.doc.length?this.$root.$emit("saveResponse",{croppedImage:this.croppedImage,reference:this.imageSrc,scannedText:this.doc[this.doc.length-1]}):this.showDismissibleAlert=!0})},methods:{cropImage(){this.$refs.cropper&&(this.croppedImage=this.$refs.cropper.getCroppedCanvas().toDataURL())},uploadImage(e){e.preventDefault(),this.$refs.input.click()},appendText(){this.doc.push(this.text)},cropperIsReady(){this.cropperReady=!0,this.cropImage()},scanCroppedImage(){var e=this;return Object(c["a"])((function*(){if(e.$refs.cropper){const t=Object(l["createWorker"])({logger:t=>{t.jobId&&(e.progress=0==t.progress?0:100*t.progress)}});yield t.load(),yield t.loadLanguage("deu"),yield t.initialize("deu");const n=yield t.recognize(e.croppedImage),r=n.data.text;e.doc.push(r),yield t.terminate()}else e.showDismissibleAlert=!0}))()},setImage(e){const t=e.target.files[0];if(-1!==t.type.indexOf("image/"))if("function"===typeof FileReader){const e=new FileReader;e.onload=e=>{this.imageSrc=e.target.result},e.readAsDataURL(t)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")}}}),f=p,m=(n("65d4"),n("2877")),h=Object(m["a"])(f,s,i,!1,null,"6d6ae28a",null),g=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal",title:"Add your Image here",size:"xl",scrollable:""},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("b-button",{attrs:{id:"scan-area",size:"lg",variant:"outline-dark"},on:{click:e.scanCroppedArea}},[n("v-icon",{attrs:{icon:"crop-alt"}}),e._v("\n      Scan\n    ")],1),n("b-button",{attrs:{id:"save-item",size:"lg",variant:"outline-dark"},on:{click:e.saveItem}},[n("v-icon",{attrs:{icon:"save"}}),e._v("\n      Save\n    ")],1),n("b-button",{attrs:{size:"lg",variant:"outline-dark"},on:{click:e.exit}},[n("v-icon",{attrs:{icon:"running"}}),e._v("\n      Exit\n    ")],1)]},proxy:!0}])},[e._t("default")],2)},b=[],y={name:"Modal",props:{save:{type:Function,default:function(){return 42}}},data:function(){return{infoMessage:"Crop your image in this window",getRecord:this.save}},mounted:function(){this.$root.$on("saveResponse",e=>{this.$emit("save",e)})},methods:{exit(){this.$bvModal.hide("modal")},scanCroppedArea(){this.$root.$emit("scanCrop")},saveItem(){this.$root.$emit("saveRequest")}}},_=y,x=Object(m["a"])(_,v,b,!1,null,"d493d15e",null),w=x.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{attrs:{id:"preview-overlay"}},[n("b-img",{attrs:{src:e.croppedImage,fluid:""}})],1),n("div",{staticClass:"content"},[n("b-img",{attrs:{src:e.reference,"fluid-grow":""}}),n("div",[e._m(0),n("p",[e._v(e._s(e.scannedText))])])],1)])])},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[n("u",[e._v("Scanned Text:")])])}],C={name:"ScanView",props:{content:{type:Function,default:function(){return"SchuHschuH"}}},data:function(){return{reference:this.content().reference,croppedImage:this.content().croppedImage,scannedText:this.content().scannedText}}},S=C,O=(n("84b3"),Object(m["a"])(S,I,$,!1,null,"097c3d4d",null)),j=O.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"List"},[e.scanData.length>0?n("div",[n("b-table",{attrs:{striped:"",hover:"",fields:e.fields,items:e.scanData},on:{"row-clicked":e.openEditModal},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[e._v("\n        "+e._s(t.index+1)+"\n      ")]}},{key:"cell(reference)",fn:function(e){return[n("b-img",{attrs:{src:e.item.reference,alt:"Reference Image",fluid:""}})]}},{key:"cell(croppedImage)",fn:function(e){return[n("img",{attrs:{src:e.item.croppedImage,alt:"Cropped Image"}})]}},{key:"cell(scannedText)",fn:function(t){return[n("p",{domProps:{textContent:e._s(t.item.scannedText)}})]}}],null,!1,1148545201)})],1):n("div",[n("v-icon",{staticStyle:{"font-size":"56px",margin:"15px 0"},attrs:{icon:"file-invoice"}}),n("br"),e._v("\n    Empty Scanlist\n  ")],1)])},M=[],R={name:"List",props:{items:{type:Array,default:function(){return[]}}},data:function(){return{fields:["id","reference","croppedImage","scannedText"],scanData:this.items}},methods:{openEditModal(e,t){this.$root.$emit("openEditModal",e,t)}}},A=R,P=(n("cead"),Object(m["a"])(A,k,M,!1,null,"cc52096c",null)),T=P.exports,D={name:"OCRjs",components:{PictureHandler:g,Modal:w,ScanView:j,List:T},data:function(){return{heading:"OCRjs",modalObj:null,add:!1,tour:!0,scans:[]}},mounted:function(){this.$root.$on("openEditModal",(e,t)=>{this.add=!1,this.modalObj=e,this.$bvModal.show("modal")}),this.$root.$on("openAddModal",(e,t)=>{this.add=!0,this.$bvModal.show("modal")})},methods:{openModal(e,t){this.$root.$emit("openAddModal",e,t)},getItem(){return this.modalObj},onSave(e){this.scans.push(e)}}},E=D,z=(n("12fb"),Object(m["a"])(E,a,o,!1,null,null,null)),L=z.exports,F=(n("f9e3"),n("2dd8"),n("5f5b")),H=n("ecee"),V=n("c074"),U=n("ad3d");H["c"].add(V["a"],V["b"],V["c"],V["f"],V["d"],V["e"]),r["default"].use(F["a"]),r["default"].component("v-icon",U["a"]),r["default"].config.productionTip=!1,new r["default"]({render:e=>e(L)}).$mount("#ocrjs")},"65d4":function(e,t,n){"use strict";var r=n("ca7a"),a=n.n(r);a.a},"84b3":function(e,t,n){"use strict";var r=n("c50f"),a=n.n(r);a.a},9047:function(e,t,n){},c50f:function(e,t,n){},ca7a:function(e,t,n){},cead:function(e,t,n){"use strict";var r=n("9047"),a=n.n(r);a.a},cfe0:function(e,t,n){}});
//# sourceMappingURL=app.4192457e.js.map