(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"19fb":function(t,e,n){"use strict";n("d281")},"2c01":function(t,e,n){},"50d9":function(t,e,n){},5278:function(t,e,n){"use strict";n("2c01")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-collapse",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-collapse-item",{attrs:{title:"第0步：确认日期（可选） 当前日期 "+t.dateRange[0]+" - "+t.dateRange[1],name:"0"}},[n("el-alert",{staticStyle:{margin:"0 0 8px"},attrs:{title:"默认情况，周报的起始日期为本周一至本周五。但是也有特殊情况，比如小长假或是其它原因，这时需要手动改变起始日期",type:"error"}}),n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyyMMdd","value-format":"yyyyMMdd"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),n("el-collapse-item",{attrs:{title:"第1步：填写表单",name:"1"}},[n("Step1",{ref:"step1"})],1),n("el-collapse-item",{attrs:{title:"第2步：填写“姓名”并“下载Word”",name:"2"}},[n("el-form",{attrs:{"label-width":"auto"}},[n("el-form-item",{attrs:{label:"你的姓名："}},[n("el-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("el-form-item",{staticStyle:{margin:"0"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.download}},[t._v(" 下载Word ")])],1)],1)],1),n("el-collapse-item",{attrs:{title:"第3步：点击按钮 启动客户端 确认信息并发送",name:"3"}},[n("el-alert",{staticStyle:{margin:"0 0 10px"},attrs:{title:"标准邮件标题",type:"success",description:t.emailTitle}}),n("div",[n("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"primary"},on:{click:t.copy}},[t._v(" 点击复制 标准邮件标题 并启动本地邮件客户端（foxmail/网易邮箱大师） "),n("i",{staticClass:"el-icon-d-arrow-right"})])],1),n("el-card",{staticStyle:{"margin-bottom":"15px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("完善"),n("el-tag",[t._v("收件人和抄送人")]),t._v("，自动填充邮件客户端。（缓存本地，一次填写，多次利用）")],1)]),n("div",{staticStyle:{"margin-bottom":"10px"}},[t._v(" 邮件客户端（邮件客户端影响邮箱是否填充正确）： "),n("el-radio-group",{on:{change:t.changeRadio},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("el-radio",{attrs:{label:";"}},[t._v(" foxmail ")]),n("el-radio",{attrs:{label:","}},[t._v(" 网易邮箱大师 ")])],1)],1),n("Receiver",{attrs:{title:"收件人",list:t.sjList},on:{"update:list":function(e){var n=arguments.length,a=Array(n);while(n--)a[n]=arguments[n];return t.updateList.apply(void 0,["sjList"].concat(a))}}}),n("Receiver",{attrs:{title:"抄送人",list:t.csList},on:{"update:list":function(e){var n=arguments.length,a=Array(n);while(n--)a[n]=arguments[n];return t.updateList.apply(void 0,["csList"].concat(a))}}})],1),t._v(" 在邮件客户端中确认 "),n("el-tag",[t._v("收件人和抄送人")]),t._v("、"),n("el-tag",[t._v("邮件标题")]),t._v("、"),n("el-tag",[t._v("附件是否已上传")]),t._v("、"),n("el-tag",[t._v("邮件签名")]),t._v(" 无误，发送邮件 ")],1)],1)],1)},f=[],p=n("5530"),m=(n("99af"),n("b0c0"),n("d81d"),n("a15b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{attrs:{header:"一、本周完成重点工作"}},[n("el-switch",{staticStyle:{"margin-bottom":"15px"},attrs:{"active-text":"我需要填写进度","inactive-text":"我不需要填写进度"},model:{value:t.isShowCurrentWeekProgress,callback:function(e){t.isShowCurrentWeekProgress=e},expression:"isShowCurrentWeekProgress"}}),n("MyForm",{ref:"currentJob",attrs:{"is-progress":t.isShowCurrentWeekProgress}})],1),n("el-card",{attrs:{header:"二、下周重点工作"}},[n("MyForm",{ref:"nextJob",attrs:{"is-progress":!1}})],1),n("el-card",{attrs:{header:"三、意见建议"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"意见建议（不填默认为“暂无”）"},model:{value:t.form.suggestion,callback:function(e){t.$set(t.form,"suggestion",e)},expression:"form.suggestion"}})],1),n("el-card",{attrs:{header:"四、培训需求"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"培训需求（不填默认为“暂无”）"},model:{value:t.form.train,callback:function(e){t.$set(t.form,"train",e)},expression:"form.train"}})],1),n("el-card",{attrs:{header:"五、待解决问题"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"待解决问题（不填默认为“暂无”）"},model:{value:t.form.unresolved,callback:function(e){t.$set(t.form,"unresolved",e)},expression:"form.unresolved"}})],1)],1)}),h=[],g=n("d4ec"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.formList,(function(e,a){return n("el-form",{key:a,attrs:{"label-width":"auto"}},[n("el-form-item",{attrs:{label:a+1+"、"}},[n("el-input",{attrs:{placeholder:"项目名称"},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"form.title"}}),a===t.formList.length-1?n("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:t.addForm}}):t._e(),a>0?n("el-button",{attrs:{icon:"el-icon-minus",circle:""},on:{click:function(e){return t.delForm(a)}}}):t._e()],1),n("el-form-item",[n("el-form",{attrs:{"label-width":"auto"}},t._l(e.list,(function(a,r){return n("el-form-item",{key:r,attrs:{label:r+1+"）"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"工作内容"+(r+1)},model:{value:a.content,callback:function(e){t.$set(a,"content",e)},expression:"item.content"}}),n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.isProgress,expression:"isProgress"}],attrs:{placeholder:"进度"},model:{value:a.progress,callback:function(e){t.$set(a,"progress",e)},expression:"item.progress"}},[n("template",{slot:"append"},[t._v(" % ")])],2),n("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(n){return t.addItem(e.list,r)}}}),r>0?n("el-button",{attrs:{icon:"el-icon-minus",circle:""},on:{click:function(n){return t.delItem(e.list,r)}}}):t._e()],1)})),1)],1)],1)})),1)},b=[],w=(n("a434"),function t(){Object(g["a"])(this,t),this.content="",this.progress=""}),y=function t(){Object(g["a"])(this,t),this.title="",this.list=[new w]},x={props:{isProgress:{type:Boolean,default:!0}},data:function(){return{formList:[new y]}},methods:{addForm:function(){this.formList.push(new y)},delForm:function(t){this.formList.splice(t,1)},addItem:function(t,e){t.splice(e+1,0,new w)},delItem:function(t,e){t.splice(e,1)}}},T=x,_=(n("c0b9"),Object(i["a"])(T,v,b,!1,null,"11b6e495",null)),O=_.exports,k=function t(){Object(g["a"])(this,t),this.suggestion="",this.train="",this.unresolved=""},S={components:{MyForm:O},data:function(){return{isShowCurrentWeekProgress:!0,form:new k}},methods:{getData:function(){return Object(p["a"])(Object(p["a"])({},this.form),{},{isShowCurrentWeekProgress:this.isShowCurrentWeekProgress,currentJob:this.$refs.currentJob.formList,nextJob:this.$refs.nextJob.formList})}}},E=S,j=(n("19fb"),Object(i["a"])(E,m,h,!1,null,"063e5994",null)),I=j.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"receiver"},[n("span",{staticClass:"receiver__title"},[t._v(" "+t._s(t.title)+"： ")]),t._l(t.list,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.del(e)}}},[t._v(" "+t._s(e)+" ")])})),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{placeholder:"例：789@qq.com 或 123@qq.com,456@qq.com"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}):n("el-button",{staticClass:"button-new-tag",on:{click:t.showInput}},[t._v(" + 添加邮箱，支持输入一个或多个，多个以英文逗号(,)分隔 ")])],2)},R=[],P=(n("fb6a"),n("c740"),n("ac1f"),n("1276"),{props:{title:{type:String,default:""},list:{type:Array,default:function(){return[]}}},data:function(){return{inputVisible:!1,val:""}},methods:{del:function(t){var e=this.list.slice(0),n=e.findIndex((function(e){return e===t}));e.splice(n,1),this.$emit("update:list",e)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.val;if(t){var e=this.list.slice(0);this.$emit("update:list",e.concat(t.split(",")))}this.inputVisible=!1,this.val=""}}}),C=P,M=(n("5278"),Object(i["a"])(C,L,R,!1,null,"72e85bb7",null)),Y=M.exports,$=n("21a6"),z=n("49fb"),N=n("2909"),D=n("bee2"),J=(n("0481"),{TITLE:44,DATE:24,SECTION_TITLE:32,SECTION_SUB_TITLE:28,TEXT:22}),W=function(){function t(){Object(g["a"])(this,t)}return Object(D["a"])(t,[{key:"create",value:function(t){console.log(t);var e=t.isShowCurrentWeekProgress,n=t.name,a=t.currentJob,r=t.nextJob,o=t.suggestion,i=t.train,s=t.unresolved,c=t.dateRange,l=new z["Document"]({sections:[{children:[new z["Paragraph"]({alignment:z["AlignmentType"].CENTER,children:[new z["TextRun"]({text:"郑州开发中心周报—".concat(n),font:"Microsoft Yahei",size:J.TITLE,bold:!0})]}),new z["Paragraph"]({alignment:z["AlignmentType"].CENTER,children:[new z["TextRun"]({text:"（".concat(c[0]," - ").concat(c[1],"）"),font:"Microsoft Yahei",size:J.DATE})]}),new z["Paragraph"]({children:[new z["TextRun"]({text:"一、本周完成重点工作",font:"Microsoft Yahei",size:J.SECTION_TITLE,bold:!0})]})].concat(Object(N["a"])(a.map((function(t,n){return[new z["Paragraph"]({children:[new z["TextRun"]({text:"".concat(n+1,"、").concat(t.title),font:"Microsoft Yahei",size:J.SECTION_SUB_TITLE,bold:!0})],indent:{left:360}})].concat(Object(N["a"])(t.list.map((function(t,n){return new z["Paragraph"]({children:[new z["TextRun"]({text:"".concat(n+1,"）").concat(t.content).concat(e?"   ----".concat(t.progress,"%"):""),font:"Microsoft Yahei",size:J.TEXT})],indent:{left:720}})}))))})).flat(1)),[new z["Paragraph"]({children:[new z["TextRun"]({text:"二、下周重点工作",font:"Microsoft Yahei",size:J.SECTION_TITLE,bold:!0})]})],Object(N["a"])(r.map((function(t,e){return[new z["Paragraph"]({children:[new z["TextRun"]({text:"".concat(e+1,"、").concat(t.title),font:"Microsoft Yahei",size:J.SECTION_SUB_TITLE,bold:!0})],indent:{left:360}})].concat(Object(N["a"])(t.list.map((function(t,e){return new z["Paragraph"]({children:[new z["TextRun"]({text:"".concat(e+1,"）").concat(t.content).concat(t.progress?"   ----".concat(t.progress,"%"):""),font:"Microsoft Yahei",size:J.TEXT})],indent:{left:720}})}))))})).flat(1)),[new z["Paragraph"]({children:[new z["TextRun"]({text:"三、意见建议",font:"Microsoft Yahei",size:J.SECTION_TITLE,bold:!0})]}),new z["Paragraph"]({children:[new z["TextRun"]({text:o||"暂无",font:"Microsoft Yahei",size:J.TEXT})],indent:{left:360}}),new z["Paragraph"]({children:[new z["TextRun"]({text:"四、培训需求",font:"Microsoft Yahei",size:J.SECTION_TITLE,bold:!0})]}),new z["Paragraph"]({children:[new z["TextRun"]({text:i||"暂无",font:"Microsoft Yahei",size:J.TEXT})],indent:{left:360}}),new z["Paragraph"]({children:[new z["TextRun"]({text:"五、待解决问题",font:"Microsoft Yahei",size:J.SECTION_TITLE,bold:!0})]}),new z["Paragraph"]({children:[new z["TextRun"]({text:s||"暂无",font:"Microsoft Yahei",size:J.TEXT})],indent:{left:360}})])}]});return l}}]),t}();function A(t){function e(e){e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",t),e.preventDefault()}document.addEventListener("copy",e),document.execCommand("copy"),document.removeEventListener("copy",e)}var F={name:"Home",components:{Step1:I,Receiver:Y},data:function(){return{radio:";",sjList:[],csList:[],activeName:["0","2","3"],name:"",dateRange:[dayjs().startOf("week").add(1,"day").format("YYYYMMDD"),dayjs().endOf("week").subtract(1,"day").format("YYYYMMDD")]}},computed:{emailTitle:function(){return"郑州开发中心-".concat(this.name||"[先填写姓名]","-周报-").concat(this.dateRange[0],"_").concat(this.dateRange[1])}},mounted:function(){this.radio=window.localStorage.getItem("radio")||";",this.sjList=JSON.parse(window.localStorage.getItem("sjList")||"[]"),this.csList=JSON.parse(window.localStorage.getItem("csList")||"[]")},methods:{changeRadio:function(t){window.localStorage.setItem("radio",t)},updateList:function(t,e){window.localStorage.setItem(t,JSON.stringify(e)),this[t]=e},download:function(){var t=this,e=this.$refs.step1.getData(),n=(new W).create(Object(p["a"])(Object(p["a"])({},e),{},{name:this.name,dateRange:this.dateRange.map((function(t){return dayjs(t).format("YYYY年MM月DD日")}))}));z["Packer"].toBlob(n).then((function(e){Object($["saveAs"])(e,"郑州开发中心周报-".concat(t.name,"-").concat(t.dateRange[0],"_").concat(t.dateRange[1],".docx"))}))},copy:function(){var t=this;A(this.emailTitle),this.$confirm("已复制 标准邮件标题，是否立即启动本地邮件客户端？","提示").then((function(){var e=document.createElement("a");console.log(t.radio),e.href="mailto:".concat(t.sjList.join(t.radio),"?cc=").concat(t.csList.join(t.radio),"&subject=").concat(t.emailTitle),e.style="display: none",document.body.appendChild(e),e.click()})).catch((function(){}))}}},q=F,X=Object(i["a"])(q,d,f,!1,null,null,null),B=X.exports;a["default"].use(u["a"]);var V=[{path:"/",name:"Home",component:B}],U=new u["a"]({routes:V}),H=U,G=n("5c96"),K=n.n(G);n("0fae");a["default"].use(K.a,{size:"small"}),a["default"].config.productionTip=!1,new a["default"]({router:H,render:function(t){return t(l)}}).$mount("#app")},c0b9:function(t,e,n){"use strict";n("50d9")},d281:function(t,e,n){}});
//# sourceMappingURL=app.23e898d0.js.map