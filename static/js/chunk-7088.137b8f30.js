(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7088"],{"1CxD":function(e,t,s){"use strict";s.r(t);var a=s("41Be"),i=s("3ADX"),r=s("nY+0"),n=s("eeyI"),o=s("wd/R"),l=s.n(o),c={components:{eForm:r.default},mixins:[i.a],data:function(){return{delLoading:!1,height:document.documentElement.clientHeight-180+"px;",isAdd:!1,downloadLoading:!1,queryTypeOptions:[{key:"2",display_name:"上架"},{key:"1",display_name:"下架"}]}},created:function(){var e=this;this.$nextTick(function(){e.init()})},mounted:function(){var e=this;window.onresize=function(){e.height=document.documentElement.clientHeight-180+"px;"}},methods:{checkPermission:a.a,dateFormat:function(e,t){var s=e[t.property];return s?l()(s).format("YYYY-MM-DD HH:mm:ss"):""},beforeInit:function(){this.url="http://www.miaomiao888.com/susu/backstage/goods/api/gift/list";var e=this.query.type;return this.params={pageNum:this.page+1,pageSize:this.size,sortField:"id",order:"desc",deptId:this.deptId},this.params.del=e||2,!0},subUpdate:function(e,t){var s=this;this.delLoading=!0,Object(n.a)(e,t).then(function(e){s.delLoading=!1,s.dleChangePage(),s.init(),s.$notify({title:"删除成功",type:"success",duration:2500})}).catch(function(e){s.delLoading=!1,console.log(e.message)})},add:function(){this.isAdd=!0,this.$refs.form.form={},this.$refs.form.dialog=!0},edit:function(e){this.isAdd=!1;var t=this.$refs.form;t.form={id:e.id,name:e.name,price:e.price,image:e.image,del:e.del,desc:e.desc,note:e.note,code:e.code},t.dialog=!0}}},d=(s("v8gE"),s("KHd+")),u=Object(d.a)(c,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("eForm",{ref:"form",attrs:{"is-add":e.isAdd}}),e._v(" "),s("div",{staticClass:"head-container"},[s("span",{staticStyle:{"margin-left":"20px","font-size":"small"}},[e._v("礼物状态：")]),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"上架"},on:{change:e.toQuery},model:{value:e.query.type,callback:function(t){e.$set(e.query,"type",t)},expression:"query.type"}},e._l(e.queryTypeOptions,function(e){return s("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),s("div",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_CREATE"],expression:"['ADMIN','USER_ALL','USER_CREATE']"}],staticStyle:{display:"inline-block",margin:"0px 2px"}},[s("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")])],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.data,border:"",size:"small"}},[s("el-table-column",{attrs:{prop:"id",label:"id",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"image",label:"图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("viewer",{ref:"viewer",staticClass:"viewer"},[s("img",{staticClass:"user-avatar",attrs:{src:e.row.image,alt:"",title:"点击查看大图"}})])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"price",label:"价格",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"del",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.del?s("div",[e._v("上架")]):e._e(),e._v(" "),1===t.row.del?s("div",[e._v("下架")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"note",label:"版本号",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{formatter:e.dateFormat,prop:"createTime",label:"创建时间","min-width":"81",align:"center"}}),e._v(" "),e.checkPermission(["ADMIN","USER_ALL","USER_EDIT","USER_DELETE"])?s("el-table-column",{attrs:{label:"操作",width:"125",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[s("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_EDIT"],expression:"['ADMIN','USER_ALL','USER_EDIT']"}],attrs:{size:"mini",type:"primary"},on:{click:function(s){e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),1===t.row.del?s("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_EDIT"],expression:"['ADMIN','USER_ALL','USER_EDIT']"}],attrs:{size:"mini",type:"primary"},on:{click:function(s){e.subUpdate(t.row.id,2)}}},[e._v("上架")]):e._e(),e._v(" "),2===t.row.del?s("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_EDIT"],expression:"['ADMIN','USER_ALL','USER_EDIT']"}],attrs:{size:"mini",type:"danger"},on:{click:function(s){e.subUpdate(t.row.id,1)}}},[e._v("下架")]):e._e()],1)]}}])}):e._e()],1),e._v(" "),s("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:e.total,"current-page":e.page+1,layout:"total, prev, pager, next, sizes"},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1)},[],!1,null,"be60445c",null);u.options.__file="index.vue";t.default=u.exports},"3ADX":function(e,t,s){"use strict";var a=s("14Xm"),i=s.n(a),r=s("4d7F"),n=s.n(r),o=s("D3Ub"),l=s.n(o),c=s("t3Un");function d(e,t){return Object(c.a)({url:e,method:"get",params:t})}t.a={data:function(){return{loading:!0,data:[],page:0,size:10,total:0,url:"",params:{},query:{},time:10,isAdd:!1}},methods:{init:function(){var e=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeInit();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.abrupt("return",new n.a(function(t,s){e.loading=!0,d(e.url,e.params).then(function(s){0===s.status?(e.total=s.obj.total,e.data=s.obj.list):(e.total=s.totalElements,e.data=s.content),setTimeout(function(){e.loading=!1},e.time),console.log("initData"),t(s)}).catch(function(t){e.loading=!1,s(t)})}));case 5:case"end":return t.stop()}},t,e)}))()},beforeInit:function(){return!0},pageChange:function(e){this.page=e-1,this.init()},sizeChange:function(e){this.page=0,this.size=e,this.init()},dleChangePage:function(e){void 0===e&&(e=1),this.data.length===e&&0!==this.page&&(this.page=this.page-1)},toQuery:function(){this.page=0,this.init()}}}},"41Be":function(e,t,s){"use strict";s.d(t,"a",function(){return i});var a=s("Q2AE");function i(e){if(e&&e instanceof Array&&e.length>0){var t=e;return!!(a.a.getters&&a.a.getters.roles).some(function(e){return t.includes(e)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},HuZF:function(e,t,s){"use strict";var a=s("zveP");s.n(a).a},RnhZ:function(e,t,s){var a={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function i(e){var t=r(e);return s(t)}function r(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="RnhZ"},a44W:function(e,t,s){},eeyI:function(e,t,s){"use strict";s.d(t,"a",function(){return i}),s.d(t,"b",function(){return r});var a=s("t3Un");s("Qyje");function i(e,t){return Object(a.a)({url:"http://www.miaomiao888.com/susu/backstage/goods/api/gift/del?giftId="+e+"&del="+t,method:"delete"})}function r(e){return Object(a.a)({url:"http://www.miaomiao888.com/susu/backstage/goods/api/gift/edit",method:"post",data:e})}},"nY+0":function(e,t,s){"use strict";s.r(t);var a=s("eeyI"),i={components:{},props:{isAdd:{type:Boolean,required:!0}},data:function(){return{fileUploadingFlag:!1,uploadPercent:0,uploadUrl:"http://www.miaomiao888.com/susu/file/upload",dragging:null,dialogVisible:!1,dialog:!1,loading:!1,form:{name:"",price:"",image:"1"},style:"width: 184px",level:3,rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}],price:[{required:!0,message:"请输入price",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}]}}},computed:{},watch:{dialog:function(){this.dialog||this.$refs.uploadZipBtn.clearFiles()}},created:function(){navigator.userAgent.indexOf("Chrome")>=0?this.style="width: 184px":this.style="width: 172px"},methods:{beforeZIPUpload:function(e){var t="application/x-zip-compressed"===e.type,s=e.size/1024/1024<2;return t||this.$message.error("上传只能是 ZIP 格式!"),s||this.$message.error("上传头像图片大小不能超过 2MB!"),s&&t},handleZIPSuccess:function(e,t){if(0===e.status){this.$set(this.form,"desc",e.obj[0]);var s=e.obj[0].split("/");if(s.length>0){var a=s[s.length-1];this.$refs.zipName.innerHTML=a,this.$set(this.form,"code",a.split(".")[0])}}else this.$message.error("上传失败!")},uploadZipError:function(e,t){this.$message.error("上传失败! "+e.status)},handleProgress:function(e,t){this.fileUploadingFlag=!0,this.uploadPercent=parseInt(t.percentage.toFixed(0))},beforeAvatarUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("上传头像图片大小不能超过 5MB!"),t},handleAvatarSuccess:function(e,t){0===e.status?this.$set(this.form,"image",e.obj[0]):this.$message.error("上传失败!"),this.fileUploadingFlag=!1},cancel:function(){this.resetForm()},doSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;null===e.form.name||void 0===e.form.name?e.$message({message:"名称不能为空",type:"warning"}):null===e.form.price?e.$message({message:"price不能为空",type:"warning"}):(e.loading=!0,e.isAdd?e.doAdd():e.doEdit())})},doAdd:function(){var e=this;console.log(this.form),Object(a.b)(this.form).then(function(t){0===t.status?(e.resetForm(),e.$notify({type:"success",message:t.msg,duration:2500}),e.$parent.init()):e.$notify({type:"error",message:t.msg,duration:2500}),e.loading=!1}).catch(function(t){e.loading=!1,console.log(t.response.data.message)})},doEdit:function(){var e=this;Object(a.b)(this.form).then(function(t){0===t.status?(e.resetForm(),e.$notify({title:"修改成功",type:"success",duration:2500}),e.$parent.init()):e.$message.error(t.msg),e.loading=!1}).catch(function(t){e.loading=!1,console.log(t.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={},this.loading=!1}}},r=(s("HuZF"),s("KHd+")),n=Object(r.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{visible:e.dialog,title:e.isAdd?"新增":"编辑","append-to-body":"",width:"940px"},on:{"update:visible":function(t){e.dialog=t}}},[s("el-form",{ref:"form",attrs:{inline:!0,model:e.form,rules:e.rules,size:"small","label-width":"88px"}},[s("div",[s("div",{staticClass:"left_form"},[s("div",{staticClass:"left_top"},[s("div",{staticClass:"user_avatar"},[s("span",[e._v("图片")]),e._v(" "),s("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-progress":e.handleProgress,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,action:e.uploadUrl}},[e.form.image&&!e.fileUploadingFlag?s("img",{ref:"refImage",staticClass:"avatar",attrs:{src:e.form.image,title:"点击更换"}}):e._e(),e._v(" "),e.form.image||e.fileUploadingFlag?e._e():s("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{border:"1px solid gray"}}),e._v(" "),1==e.fileUploadingFlag?s("el-progress",{staticStyle:{"margin-top":"30px"},attrs:{percentage:e.uploadPercent,type:"circle"}}):e._e()],1)],1)]),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"left_bottom"},[s("div")])]),e._v(" "),s("div",{staticClass:"right_form"},[s("el-form-item",{attrs:{label:"礼物名称",prop:"name"}},[s("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"价格(钻石)",prop:"price"}},[s("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"版本号",prop:"note"}},[s("el-input",{model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"zip文件",prop:"desc"}},[s("el-button",{staticClass:"btns",attrs:{size:"mini",type:"info",disabled:""}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.form.code,expression:"form.code"}],ref:"zipName",domProps:{innerHTML:e._s(e.form.code+".zip")}})]),e._v(" "),s("el-upload",{ref:"uploadZipBtn",staticStyle:{float:"right","margin-left":"40px"},attrs:{"before-upload":e.beforeZIPUpload,"on-success":e.handleZIPSuccess,"on-error":e.uploadZipError,limit:1,action:e.uploadUrl}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"zip文件名称",prop:"code"}},[s("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"礼物状态",prop:"del"}},[s("div",{style:e.style},[s("el-radio",{attrs:{label:1},model:{value:e.form.del,callback:function(t){e.$set(e.form,"del",t)},expression:"form.del"}},[e._v("下架")]),e._v(" "),s("el-radio",{attrs:{label:2},model:{value:e.form.del,callback:function(t){e.$set(e.form,"del",t)},expression:"form.del"}},[e._v("上架")])],1)])],1)])]),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("确认")])],1)],1)},[],!1,null,null,null);n.options.__file="form.vue";t.default=n.exports},v8gE:function(e,t,s){"use strict";var a=s("a44W");s.n(a).a},zveP:function(e,t,s){}}]);