(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{385:function(e,n,l){"use strict";l.r(n);var t=l(2),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("p",[e._v("运行"),l("code",[e._v("npm run dev")]),e._v("竟然报错了，错误如下：")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.66.dylib\n  Referenced from: /usr/local/bin/node\n  Reason: image not found\n")])])]),l("p",[e._v("我还以为命令敲错了，然后赶紧去查。")]),e._v(" "),l("p",[e._v("终于找到解决方法：")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("brew uninstall node\n\nbrew install node\n\nnpm i docsify-cli -g //这段没有用上就好了\n")])])]),l("p",[e._v("大概是node版本对不上了吧，某天brew update了一下。")]),e._v(" "),l("p",[e._v("参考资料：")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://www.cnblogs.com/farwish/p/13202414.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("[FAQ] dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.64.dylib"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://blog.csdn.net/weixin_41194171/article/details/107982950",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.66.dylib macos npm i docsify-cli -g"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=a.exports}}]);