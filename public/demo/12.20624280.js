webpackJsonp([12],{56:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),c=i(a),d=n(57),s=i(d),l=c["default"].extend({template:s["default"],ready:function(){},data:function(){return{isOpenDatetimePicker:!1,datetime:"2016-04-08 09:00:00"}},methods:{},computed:{},route:{data:function(e){e.next()}}});t["default"]=l},57:function(e,t){e.exports='<div class="page page-current">\n    <!-- 标题栏 -->\n    <header class="bar bar-nav">\n        <a class="icon icon-left pull-left" href="javascript:;" @click="goBack(this)"></a>\n        <h1 class="title">datetime-picker</h1>\n    </header>\n\n    <!-- 这里是页面内容区 -->\n    <div class="content">\n\n        <div class="list-block">\n            <ul>\n                <li>\n                    <div class="item-content">\n                        <div class="item-media"><i class="icon icon-form-gender"></i></div>\n                        <div class="item-inner">\n                            <div class="item-title label">日期时间</div>\n                            <div class="item-input" id="datetimeInput"\n                                @click="isOpenDatetimePicker = true">\n                                {{datetime}}\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<datetime-picker header-text="请选择日期" :open.sync="isOpenDatetimePicker" input="#datetimeInput" :datetime.sync="datetime">\n\n</datetime-picker>'}});