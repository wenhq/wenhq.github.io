(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{376:function(t,r,e){"use strict";e.r(r);var _=e(2),a=Object(_.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("四大亮点带你看 Linux 内核 5.6")]),t._v(" "),e("p",[t._v("当我们还在体验 Linux 5.5 稳定发行版带来更好的硬件支持时，Linux 5.6 已经来了。")]),t._v(" "),e("p",[t._v("说实话，Linux 5.6 比 5.5 更令人兴奋。即使即将发布的 Ubuntu 20.04 LTS 发行版将自带 Linux 5.5，你也需要切实了解一下 Linux 5.6 内核为我们提供了什么。")]),t._v(" "),e("h2",{attrs:{id:"_1、支持-wireguard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、支持-wireguard"}},[t._v("#")]),t._v(" 1、支持 WireGuard")]),t._v(" "),e("p",[t._v("WireGuard 将被添加到 Linux 5.6，出于各种原因的考虑它可能将取代"),e("a",{attrs:{href:"https://openvpn.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenVPN"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("你可以在官网上进一步了解 "),e("a",{attrs:{href:"https://www.wireguard.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WireGuard"),e("OutboundLink")],1),t._v(" 的优点。当然，如果你使用过它，那你可能已经知道它比 OpenVPN 更好的原因。")]),t._v(" "),e("p",[t._v("同样，"),e("a",{attrs:{href:"https://www.phoronix.com/scan.php?page=news_item&px=Ubuntu-20.04-Adds-WireGuard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 20.04 LTS 将支持 WireGuard"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_2、支持-usb4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、支持-usb4"}},[t._v("#")]),t._v(" 2、支持 USB4")]),t._v(" "),e("p",[t._v("Linux 5.6 也将支持 USB4。")]),t._v(" "),e("p",[t._v("根据"),e("a",{attrs:{href:"https://www.usb.org/sites/default/files/2019-09/USB-IF_USB4%20spec%20announcement_FINAL.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1),t._v("，“USB4 将使 USB 的最大带宽增大一倍并支持多并发数据和显示协议（multiple simultaneous data and display protocols）。”")]),t._v(" "),e("p",[t._v("USB4 基于 Thunderbolt 接口协议，但它将向后兼容 USB 2.0、USB 3.0 以及 Thunderbolt 3。")]),t._v(" "),e("h2",{attrs:{id:"_3、使用-lzo-lz4-压缩-f2fs-数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用-lzo-lz4-压缩-f2fs-数据"}},[t._v("#")]),t._v(" 3、使用 LZO/LZ4 压缩 F2FS 数据")]),t._v(" "),e("p",[t._v("Linux 5.6 也将支持使用 LZO/LZ4 算法压缩 F2FS 数据。")]),t._v(" "),e("h2",{attrs:{id:"_4、解决-32-位系统的-2038-年问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、解决-32-位系统的-2038-年问题"}},[t._v("#")]),t._v(" 4、解决 32 位系统的 2038 年问题")]),t._v(" "),e("p",[t._v("Unix 和 Linux 将时间值以 32 位有符号整数格式存储，其最大值为 2147483647。时间值如果超过这个数值则将由于整数溢出而存储为负数。")]),t._v(" "),e("p",[t._v("这意味着对于 32 位系统，时间值不能超过 1970 年 1 月 1 日后的 2147483647 秒。也就是说，在 UTC 时间 2038 年 1 月 19 日 03:14:07 时，由于整数溢出，时间将显示为 1901 年 12 月 13 日而不是 2038 年 1 月 19 日。")]),t._v(" "),e("p",[t._v("Linux kernel 5.6 解决了这个问题，因此 32 位系统也可以运行到 2038 年以后。")]),t._v(" "),e("h2",{attrs:{id:"_5、改进硬件支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、改进硬件支持"}},[t._v("#")]),t._v(" 5、改进硬件支持")]),t._v(" "),e("p",[t._v("新内核中将增加对 MX Master 3 鼠标以及罗技其他无线产品的支持。")]),t._v(" "),e("p",[t._v("除了罗技的产品外，你还可以期待获得许多不同硬件的支持（包括对 AMD GPU、NVIDIA GPU 和 Intel Tiger Lake 芯片组的支持）。")]),t._v(" "),e("h2",{attrs:{id:"_6、其他更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、其他更新"}},[t._v("#")]),t._v(" 6、其他更新")]),t._v(" "),e("p",[t._v("此外，Linux 5.6 中除了上述主要的新增功能或支持外，下一个内核版本也将进行其他一些改进：")]),t._v(" "),e("ul",[e("li",[t._v("改进 AMD Zen 的温度/功率报告")]),t._v(" "),e("li",[t._v("修复华硕飞行堡垒系列笔记本中 AMD CPU 过热")]),t._v(" "),e("li",[t._v("开源支持 NVIDIA RTX 2000 图灵系列显卡")]),t._v(" "),e("li",[t._v("内建 FSCRYPT 加密")])]),t._v(" "),e("p",[t._v("作者：Linux中国\n链接：https://juejin.im/post/5e3c1408518825493d6a7e63\n来源：掘金\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);r.default=a.exports}}]);