(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-49e9"],{"/gXl":function(t,e,o){"use strict";o.d(e,"d",function(){return r}),o.d(e,"a",function(){return a}),o.d(e,"b",function(){return i}),o.d(e,"c",function(){return s});var n=o("t3Un");function r(t){return Object(n.a)({url:"/vue/api/dept",method:"get",params:t})}function a(t){return Object(n.a)({url:"/vue/api/dept",method:"post",data:t})}function i(t){return Object(n.a)({url:"/vue/api/dept/"+t,method:"delete"})}function s(t){return Object(n.a)({url:"/vue/api/dept",method:"put",data:t})}},"2oBl":function(t,e,o){"use strict";var n=o("vR7f");o.n(n).a},MmD4:function(t,e,o){"use strict";o.r(e);var n=o("/gXl"),r=o("zF5t"),a=o("cCY5"),i=o.n(a),s=(o("VCwm"),{components:{Treeselect:i.a},props:{isAdd:{type:Boolean,required:!0}},data:function(){return{dateScopes:["全部","本级","自定义"],loading:!1,dialog:!1,depts:[],deptIds:[],form:{name:"",depts:[],remark:"",dataScope:"本级",level:3},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;if("自定义"===this.form.dataScope&&0===this.deptIds.length)this.$message({message:"自定义数据权限不能为空",type:"warning"});else{if(this.form.depts=[],"自定义"===this.form.dataScope)for(var e=0;e<this.deptIds.length;e++)this.form.depts.push({id:this.deptIds[e]});this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.isAdd?t.doAdd():t.doEdit()})}},doAdd:function(){var t=this;Object(r.a)(this.form).then(function(e){t.resetForm(),t.$notify({title:"添加成功",type:"success",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},doEdit:function(){var t=this;Object(r.c)(this.form).then(function(e){t.resetForm(),t.$notify({title:"修改成功",type:"success",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={name:"",depts:[],remark:"",dataScope:"本级",level:3}},getDepts:function(){var t=this;Object(n.d)({enabled:!0}).then(function(e){t.depts=e.content})},changeScope:function(){"自定义"===this.form.dataScope&&this.getDepts()}}}),l=(o("2oBl"),o("KHd+")),u=Object(l.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{visible:t.dialog,title:t.isAdd?"新增角色":"编辑角色","append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialog=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"80px"}},[o("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"角色级别",prop:"sort"}},[o("el-input-number",{staticStyle:{width:"370px"},attrs:{min:1,"controls-position":"right"},model:{value:t.form.level,callback:function(e){t.$set(t.form,"level",t._n(e))},expression:"form.level"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"数据范围"}},[o("el-select",{staticStyle:{width:"370px"},attrs:{placeholder:"请选择数据范围"},on:{change:t.changeScope},model:{value:t.form.dataScope,callback:function(e){t.$set(t.form,"dataScope",e)},expression:"form.dataScope"}},t._l(t.dateScopes,function(t){return o("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),"自定义"===t.form.dataScope?o("el-form-item",{attrs:{label:"数据权限"}},[o("treeselect",{staticStyle:{width:"370px"},attrs:{options:t.depts,multiple:"",placeholder:"请选择"},model:{value:t.deptIds,callback:function(e){t.deptIds=e},expression:"deptIds"}})],1):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"描述信息"}},[o("el-input",{staticStyle:{width:"370px"},attrs:{rows:"5",type:"textarea"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"6683953e",null);u.options.__file="form.vue";e.default=u.exports},vR7f:function(t,e,o){},zF5t:function(t,e,o){"use strict";o.d(e,"g",function(){return r}),o.d(e,"a",function(){return a}),o.d(e,"f",function(){return i}),o.d(e,"h",function(){return s}),o.d(e,"b",function(){return l}),o.d(e,"c",function(){return u}),o.d(e,"e",function(){return c}),o.d(e,"d",function(){return d});var n=o("t3Un");function r(){return Object(n.a)({url:"/vue/api/roles/all",method:"get"})}function a(t){return Object(n.a)({url:"/vue/api/roles",method:"post",data:t})}function i(t){return Object(n.a)({url:"/vue/api/roles/"+t,method:"get"})}function s(){return Object(n.a)({url:"/vue/api/roles/level",method:"get"})}function l(t){return Object(n.a)({url:"/vue/api/roles/"+t,method:"delete"})}function u(t){return Object(n.a)({url:"/vue/api/roles",method:"put",data:t})}function c(t){return Object(n.a)({url:"/vue/api/roles/permission",method:"put",data:t})}function d(t){return Object(n.a)({url:"/vue/api/roles/menu",method:"put",data:t})}}}]);