!function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}([function(e,t,n){var s,a,i={};s=n(5),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] resources/assets/js/components/MyBranch.vue: named exports in *.vue files are ignored."),a=n(13),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},function(e,t,n){var s,a,i={};s=n(6),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] resources/assets/js/components/MyBranches.vue: named exports in *.vue files are ignored."),a=n(14),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},function(e,t,n){var s,a,i={};s=n(7),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] resources/assets/js/components/MyCustomLink.vue: named exports in *.vue files are ignored."),a=n(15),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},function(e,t,n){var s,a,i={};s=n(8),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] resources/assets/js/components/MyFilter.vue: named exports in *.vue files are ignored."),a=n(16),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},function(e,t,n){var s,a,i={};s=n(9),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] resources/assets/js/components/MyPageTree.vue: named exports in *.vue files are ignored."),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{isActive:!1}},props:{branchIndex:Number,uuid:String,title:String,original_title:String,url:String,type:String,childPages:{type:Array,"default":function(){return[]}},depth:Number},computed:{hasChildren:function(){return this.childPages.length},isSingleTopLevelPage:function(){return 1===this.$parent.pages.length&&1===this.depth},classObject:function(){return{active:this.isActive}}},methods:{deletePage:function(){var e=this,t=this.$parent.pages.findIndex(function(t,n){return t.id===e.uuid});t>-1&&this.$parent.pages.splice(t,1),this.$dispatch("page.deleted")},editTitle:function(e){var t=this,n=this.$parent.pages.filter(function(e){return e.id==t.uuid});console.log(n),n[0].title=e.target.value,this.$dispatch("page.edit",e.target.value)},editPage:function(){var e=this;e.isActive=!e.isActive},cancelTitleChange:function(){var e=this;e.isActive=!e.isActive,e.title=e.original_title}}},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{pages:Array,depth:Number,parentUrl:{type:String,"default":""}},computed:{classes:function n(){var n=["branches"];n.push("depth-"+this.depth),this.pages.length||n.push("empty");var e=this.collapsed?"collapsed":"open";return n.push("branches-"+e),n.join(" ")}},methods:{toggle:function(e){e.$set("collapsed",!e.collapsed)},buildUrl:function(e){return this.parentUrl+"/"+e}}},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{possibleLinks:[],customInfo:{},customTitle:"",customUrl:"",customType:"Custom"}},computed:{},watch:{},methods:{add:function(){this.possibleLinks.push({id:(new Date).valueOf(),order:1,url:this.customUrl,title:this.customTitle,type:this.customType,items:[],pages:[]}),this.$eventHub.$emit("append-links",this.possibleLinks)}}},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{allpages:[],searchTerm:"",possibleLinks:[]}},ready:function(){this.getPages()},computed:{contentCount:function(){return this.allpages.length}},watch:{searchTerm:function(){this.getPages()}},methods:{getPages:_.debounce(function(){var e=cp_url("addons/big-kahuna/allpages");this.searchTerm.length>0&&(e=e+"?q="+this.searchTerm),this.$http.get(e,function(e){this.allpages=e.allpages})},250),add:function(){this.$eventHub.$emit("append-links",this.possibleLinks)},handleChange:function(e){if(1==e.target.checked){var t=this.allpages.filter(function(t){return t.id==e.target.id});this.possibleLinks.push({id:t[0].id,order:1,title:t[0].title,type:t[0].type,items:[],pages:[]})}else{var n=this.possibleLinks.findIndex(function(t,n){return t.id===e.target.id});n>-1&&this.possibleLinks.splice(n,1)}}}},e.exports=t["default"]},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),i=s(a),r=n(3),o=s(r),l=n(2),c=s(l),p=n(0),u=s(p),d=n(1),h=s(d);t["default"]={components:{MyFilter:o["default"],MyCustomLink:c["default"],MyBranches:h["default"],MyBranch:u["default"]},data:function(){return{placeholder:!0,loading:!0,saving:!1,changed:!1,showUrls:!1,show:"urls",pages:[],allpages:[],arePages:!0,name:[]}},created:function(){this.$eventHub.$on("append-links",this.appendLinks)},beforeDestroy:function(){this.$eventHub.$off("append-links")},computed:{hasChildren:function(){return _.some(this.pages,function(e){return e.pages.length})},isSortable:function(){return Vue.can("pages:reorder")}},ready:function(){var e=this;this.getPages(),Mousetrap.bindGlobal("mod+s",function(t){t.preventDefault(),e.save()})},methods:{appendLinks:function(e){this.page=e,this.pages.push.apply(this.pages,e),this.changed=!0},getPages:function(){this.pages=[],this.loading=!1,this.placeholder=!0;var e=cp_url("addons/big-kahuna/json");this.$http.get(e,function(e){e&&(this.arePages=e.pages.length>0,this.pages=e.pages,this.loading=!1,this.placeholder=!1,this.$nextTick(function(){this.initSortable()}))})},initSortable:function(){if(this.isSortable){var e,t,n,s=this,a='<li class="branch branch-placeholder"><div class="branch-row w-full flex items-center depth-{{ depth }}"><div class="page-move drag-handle w-6 h-full"></div><div class="flex p-1 items-center flex-1"><div class="page-text">&nbsp;</div></div></div></li>';$(this.$el).find(".page-tree > ul + ul").nestedSortable({containerSelector:"ul",handle:".drag-handle",placeholderClass:"branch-placeholder",placeholder:a,bodyClass:"page-tree-dragging",draggedClass:"branch-dragged",onMousedown:function(e,t,n){var s=e[0].__vue__,a=parseInt(e[0].dataset.depth);return 1!==s.$parent.pages.length||1!==a},onDragStart:function(s,a,i,r){var o=s[0].__vue__;n=o,e=o.branchIndex,t=o.$parent.pages[e],i(s,a)},onDrag:function(e,n,s,a){$(".branch-placeholder").find(".page-text").text(t.title),s(e,n)},onDrop:function(a,i,r,o){s.$els.click.play(),s.changed=!0,n.$parent.pages.splice(e,1);var l=a.index(),c=a.parent()[0].__vue__;t=s.updateDroppedUrl(t,c.$parent.url),c.pages.splice(l,0,t);var p=s.pages;s.pages=[],s.$nextTick(function(){s.pages=p}),r(a,i)}})}},updateDroppedUrl:function(e,t){var n=this;return t=t||"",e.url=t+"/"+e.slug,e.pages=_.map(e.pages,function(t){return n.updateDroppedUrl(t,e.url)}),e},save:function(){var e=this;e.saving=!0;var t=JSON.parse((0,i["default"])(e.pages));t=e.updateOrderIndexes(t),this.$http.post(cp_url("addons/big-kahuna/save"),{pages:t}).success(function(t){e.getPages(),e.changed=!1,e.saving=!1,e.$dispatch("setFlashSuccess",translate("cp.pages_reordered"))})},updateOrderIndexes:function(e){var t=this;return _.map(e,function(e,n){return e.items.length&&(e.items=t.updateOrderIndexes(e.items)),e.order=n+1,e})},onShowDraftsChanged:function(){this.getPages()},onLocaleChanged:function(){this.getPages()}},events:{"page.edit":function(){var e=this;e.changed=!0},"page.deleted":function(){var e=this;e.changed=!0}},watch:{changed:function(e){this.$dispatch("changesMade",e)}}},e.exports=t["default"]},function(e,t,n){e.exports={"default":n(11),__esModule:!0}},function(e,t,n){var s=n(12),a=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports='\n<li class="branch" :data-depth="depth">\n    <div class="branch-row w-full flex items-center">\n\n        <div class="page-move drag-handle w-6 h-full"></div>\n\n        <div class="flex items-center flex-1 p-1">\n\n            <div class="page-text" v-bind:class="classObject">\n                <div class="page-title">{{ title }} <span class="text-muted">({{ type }})</span></div>\n                <div class="edit-url pt-1">\n                    <input type="text" value="{{ title }}" v-model="title" v-on:input="editTitle">\n                    <button type="button" class="btn btn-default" @click="cancelTitleChange">{{ translate(\'cp.cancel\') }}</button>\n                    <span v-if="title != original_title" class="original-title mt-1 text-muted">Original title: {{ original_title }}</span>\n                </div>\n            </div>\n\n        </div>\n\n        <div class="branch-meta flex items-center pr-1">\n            <div class="page-actions">\n                <a :href="url" :title="url" class="page-action text-grey-dark px-sm bloop" target="_blank">\n                    <svg-icon name="visit" class="opacity-25 hover:opacity-75 h-4 w-4"></svg-icon>\n                </a>\n                <div class="btn-group page-action action-more px-sm">\n                    <i class="icon icon-dots-three-vertical opacity-25 hover:opacity-75" data-toggle="dropdown"></i>\n                    <ul class="dropdown-menu">\n                        <li>\n                            <button type="button" class="btn btn-block" @click="editPage">{{ translate(\'cp.edit\') }}</button>\n                        </li>\n                        <li class="warning">\n                            <button type="button" class="btn btn-block btn-danger" @click="deletePage">{{ translate(\'cp.delete\') }}</button>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <mybranches :pages="childPages"\n              :depth="depth + 1"\n              :parent-url="url"\n              :collapsed.sync="collapsed">\n    </mybranches>\n</li>\n'},function(e,t){e.exports='\n<ul :class="classes">\n    <mybranch v-for="page in pages"\n            :branch-index="$index"\n            :uuid="page.id"\n            :title="page.title || page.url"\n            :original_title="page.original_title || page.url"\n            :url="page.url"\n            :type="page.type"\n            :child-pages="page.items"\n            :depth="depth"\n    ></mybranch>\n</ul>\n'},function(e,t){e.exports='\n<div class="card flush">\n    <div class="card-body">\n        <div class="card-heading p-2 mb-0">{{ translate(\'cp.Add a custom link\') }}</div>\n        <div class="form-group p-2 mb-0 w-full flex items-center border-b">\n            <div class="w-1/3 pr-2">\n                <label class="block">{{ translate(\'cp.title\') }}</label>\n            </div>\n            <div class="w-2/3 flex justify-end">\n                <input type="text" class="form-control" v-model="customTitle">\n            </div>\n        </div>\n        <div class="form-group p-2 mb-0 w-full flex items-center border-b">\n            <div class="w-1/3 pr-2">\n                <label class="block">{{ translate(\'cp.url\') }}</label>\n            </div>\n            <div class="w-2/3 flex justify-end">\n                <input type="url" class="form-control" v-model="customUrl">\n            </div>\n        </div>\n        <div class="form-group p-2 mb-0 w-full flex items-end border-b">\n            <button type="button" class="btn btn-primary add-row float-right" @click="add">\n                {{ translate(\'cp.add\') }}\n                <i class="icon icon-plus icon-right"></i>\n            </button>\n        </div>\n    </div>\n</div>\n'},function(e,t){e.exports='\n<div class="card flush">\n    <div class="dossier-table-wrapper">\n        <table class="dossier has-checkboxes">\n            <thead>\n                <tr>\n                    <th colspan="2">\n                        {{ translate(\'cp.All content\') }} ({{ contentCount }})\n                    </th>\n                </tr>\n                <tr>\n                    <th colspan="2">\n                        <input v-model="searchTerm" type="search" placeholder="{{ translate(\'cp.Search for a page, entry or collection\') }}" class="form-control">\n                    </th>\n                </tr>\n            </thead>\n            <tbody id="tbody">\n                <tr v-for="(index, page) in allpages">\n                    <td class="checkbox-col">\n                        <input type="checkbox" id="{{page.id}}" value="{{page.id}}" @change="handleChange($event)">\n                        <label for="{{page.id}}"></label>\n                    </td>\n                    <td class="cell-title first-cell">\n                        <span class="column-label"></span>\n                        {{ page.title }} <span class="text-muted">({{ page.type }})</span>\n                    </td>\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr>\n                    <td colspan="2" class="p-2">\n                        <button type="button" class="btn btn-primary add-row" @click="add">\n                            {{ translate(\'cp.add\') }}\n                            <i class="icon icon-plus icon-right"></i>\n                        </button>\n                    </td>\n                </tr>\n            </tfoot>\n        </table>\n    </div>\n</div>\n'},function(e,t,n){"use strict";Vue.prototype.$eventHub=new Vue,Vue.component("myfilter",n(3)),Vue.component("mycustomlink",n(2)),Vue.component("mybranch",n(0)),Vue.component("mybranches",n(1)),Vue.component("my-page-tree",n(4))}]);