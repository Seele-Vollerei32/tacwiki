(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{478:function(t,a,_){"use strict";_.r(a);var s=_(14),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动画制作规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画制作规范"}},[t._v("#")]),t._v(" 动画制作规范")]),t._v(" "),a("p",[t._v("本篇教程内容作者: Lesraisins-伯爵"),a("br")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#分组"}},[t._v("分组")]),a("ul",[a("li",[a("a",{attrs:{href:"#分好组的手部模型下载"}},[t._v("分好组的手部模型下载")])])])]),a("li",[a("a",{attrs:{href:"#枢轴点设置"}},[t._v("枢轴点设置")])]),a("li",[a("a",{attrs:{href:"#动画类型与规范"}},[t._v("动画类型与规范")]),a("ul",[a("li",[a("a",{attrs:{href:"#必备动画"}},[t._v("必备动画")])]),a("li",[a("a",{attrs:{href:"#可选动画类型"}},[t._v("可选动画类型")])])])]),a("li",[a("a",{attrs:{href:"#动画制作"}},[t._v("动画制作")]),a("ul",[a("li",[a("a",{attrs:{href:"#一、通道设置"}},[t._v("一、通道设置")])]),a("li",[a("a",{attrs:{href:"#二、关键帧"}},[t._v("二、关键帧")])]),a("li",[a("a",{attrs:{href:"#三、曲线"}},[t._v("三、曲线")])])])]),a("li",[a("a",{attrs:{href:"#烘焙动画"}},[t._v("烘焙动画")])]),a("li",[a("a",{attrs:{href:"#导出动画"}},[t._v("导出动画")]),a("ul",[a("li",[a("a",{attrs:{href:"#导出gltf动画格式"}},[t._v("导出glTF动画格式")])]),a("li",[a("a",{attrs:{href:"#导出json动画格式"}},[t._v("导出json动画格式")])])])]),a("li",[a("a",{attrs:{href:"#填写枪械效果文件"}},[t._v("填写枪械效果文件")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[t._v("#")]),t._v(" 分组")]),t._v(" "),a("blockquote",[a("p",[t._v("为方便动画制作与程序读取，在开始制作动画之前应提前将模型分好组。以下为模型分组建议。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("硬性要求")]),a("br"),t._v("\n无论您如何分组，以下分组名是不可更改的！")]),t._v(" "),a("ul",[a("li",[t._v("root: 根组，除摄像机动画分组、各个定位组以外所有内容都应当在根组下。如果没有 root 组，默认动画将无法使用。")]),t._v(" "),a("li",[t._v("magazine: 弹匣组，程序会自动识别magazine组下的内容，包括默认弹匣，扩容1-3级弹匣。如果你的枪械不允许扩容，那么扩容弹匣分组可以不放。"),a("strong",[t._v("注意: 如果枪械允许扩容，无论3个级别的扩容弹匣模型是否相同，都需放置3个扩容弹匣的分组，如果模型相同，你需要拷贝。")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("默认弹匣：mag_standard")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("1级扩容弹匣：mag_extended_1")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("2级扩容弹匣：mag_extended_2")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("3级扩容弹匣：mag_extended_3")])])]),t._v(" "),a("li",[t._v("additional_magazine：额外弹匣组，如果您想制作使用旧弹匣替换新弹匣(画面同时出现两个弹匣)的动画，则创建一个"),a("strong",[t._v("枢纽点与弹匣组相同")]),t._v("的此分组。程序会识别该分组额外渲染相应的弹匣。"),a("strong",[t._v("注意：当您导出动画时请确保此分组内容为空。")])]),t._v(" "),a("li",[t._v("constraint：约束组，制作约束动画时所使用的分组")]),t._v(" "),a("li",[t._v("camera: 摄像机动画分组，若要创建摄像机动画，则需在该分组下使用摄像机插件添加一个摄像机，当您k帧的时候请对摄像机分组camera进行。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("分组建议")])]),t._v(" "),a("ul",[a("li",[t._v("right_hand_and_gun: 右手及枪械，可以自由命名。动画中大多数情况右手和枪械一起运动，因此可以置于同一分组便于 k 帧。")]),t._v(" "),a("li",[t._v("left_hand_and_mag: 左手及弹匣，可以自由命名。动画中换弹时左手和弹匣有很长时间需要一起运动，因此可以置于同一分组便于 k 帧。")]),t._v(" "),a("li",[t._v("left_hand: 左手组，可以自由命名。它应该套在 lefthand_pos (左手手臂定位组)的外层。更改它的枢纽点相对于手臂模型的位置，并用它 k 帧，更加方便。")]),t._v(" "),a("li",[t._v("right_hand: 与左手组同理。")]),t._v(" "),a("li",[t._v("default: 名字任意。枪械内所有不可运动的部件的集合（不参与动画的所有东西丢进去）")]),t._v(" "),a("li",[t._v("其他所有运动件和main组同级，如弹匣magazine，枪栓handle等，这些运动件可以自由命名。")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"分好组的手部模型下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分好组的手部模型下载"}},[t._v("#")]),t._v(" 分好组的手部模型下载")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pan.quark.cn/s/03b2c15e7403",target:"_blank",rel:"noopener noreferrer"}},[t._v("夸克网盘"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://pan.baidu.com/s/1wgj3tFTzPd2ZOaRbkgSaYw?pwd=17e0",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度网盘"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://drive.google.com/drive/folders/1C8CsGzRCsaQfA5ako51ljNKG5VOER1lF?usp=drive_link",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷歌网盘"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/fenzu.png",alt:"group"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"枢轴点设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枢轴点设置"}},[t._v("#")]),t._v(" 枢轴点设置")]),t._v(" "),a("blockquote",[a("p",[t._v("枢轴点设置是为了方便动画的制作，除"),a("strong",[t._v("lefthand_pos")]),t._v("和"),a("strong",[t._v("righthand_pos")]),t._v("组外其他组的枢轴点皆以自己舒适的方式进行设置。以下内容为参考建议。")])]),t._v(" "),a("p",[t._v("**枢轴点：**枢轴点是零件/模型将围绕其旋转的点。")]),t._v(" "),a("p",[t._v("**需要设置枢轴点的内容：**通常来说所有参与k帧的分组都要设定枢轴点，如果你想偷懒的话则可以只设置会旋转的分组")]),t._v(" "),a("p",[a("strong",[t._v("如何设置枢轴点：")]),t._v("\n快捷键：P\n工具栏的圆形按钮\n枢轴点居中：右侧枢轴点数值的旁边")]),t._v(" "),a("p",[t._v("**推荐枢轴点位置：**此内容仅为编者建议不具任何权威，一切以顺手为主。")]),t._v(" "),a("ul",[a("li",[t._v("right_hand_and_gun：置于右手手心")]),t._v(" "),a("li",[t._v("left_hand & right_hand组：置于手心")]),t._v(" "),a("li",[t._v("特别地，"),a("strong",[t._v("推荐 root 组将枢纽点置于枪械模型的后握把处")]),t._v("，以使枪械默认动画得到最好的观感。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/pivot.png",alt:"pivot"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"动画类型与规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画类型与规范"}},[t._v("#")]),t._v(" 动画类型与规范")]),t._v(" "),a("blockquote",[a("p",[t._v("为了程序能正确读取，动画命名请严格参照以下内容！")])]),t._v(" "),a("h3",{attrs:{id:"必备动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必备动画"}},[t._v("#")]),t._v(" 必备动画")]),t._v(" "),a("blockquote",[a("p",[t._v("以下为不可或缺的动画类型，若缺少该类型的动画则会导致画面出现严重问题")])]),t._v(" "),a("h4",{attrs:{id:"static-idle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-idle"}},[t._v("#")]),t._v(" static_idle")]),t._v(" "),a("p",[t._v("默认持枪动画，该动画只需用设置左右手的位置，约束组的参数，以及特殊定位组")]),t._v(" "),a("ul",[a("li",[t._v("动画类型：静止动画")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/static_idle.png",alt:"static_idle"}})]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"reload-tactical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reload-tactical"}},[t._v("#")]),t._v(" reload_tactical")]),t._v(" "),a("p",[t._v("战术换弹动画，如枪内还有剩余弹药的战术换弹方式。如您的枪没有战术换弹和空仓换弹之分，则可复制该动画到空仓换弹。")]),t._v(" "),a("ul",[a("li",[t._v("动画起始状态和终止状态应该与 static_idle 完全相同")])]),t._v(" "),a("h4",{attrs:{id:"reload-empty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reload-empty"}},[t._v("#")]),t._v(" reload_empty")]),t._v(" "),a("p",[t._v("空仓换弹动画，弹药耗尽后的换弹动画。")]),t._v(" "),a("ul",[a("li",[t._v("动画起始状态和终止状态应该与 static_idle 完全相同")])]),t._v(" "),a("h4",{attrs:{id:"inspect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inspect"}},[t._v("#")]),t._v(" inspect")]),t._v(" "),a("p",[t._v("检视动画：武器检视动画。")]),t._v(" "),a("ul",[a("li",[t._v("动画起始状态和终止状态应该与 static_idle 完全相同")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"shoot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shoot"}},[t._v("#")]),t._v(" shoot")]),t._v(" "),a("p",[t._v("射击动画，武器开火时的视觉后坐力动画")]),t._v(" "),a("ul",[a("li",[t._v("动画起始状态和终止状态应该与 static_idle 完全相同")]),t._v(" "),a("li",[t._v("动画类型：混合型。此动画将和其他类型动画混合播放")]),t._v(" "),a("li",[t._v("注意事项：因为是混合动画，可以互相叠加，所以不需要包含手部关键帧\n"),a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/shoot.png",alt:"shoot"}})])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"可选动画类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选动画类型"}},[t._v("#")]),t._v(" 可选动画类型")]),t._v(" "),a("blockquote",[a("p",[t._v("可选动画为非所有枪都需要制作的动画，可根据需求自行选择是否制作")])]),t._v(" "),a("h4",{attrs:{id:"static-bolt-caught"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-bolt-caught"}},[t._v("#")]),t._v(" static_bolt_caught")]),t._v(" "),a("p",[t._v("空仓动画，当武器处于空仓状态时的静止动画")]),t._v(" "),a("ul",[a("li",[t._v("动画类型：静止动画")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/sbc.png",alt:"sbc"}})]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"draw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draw"}},[t._v("#")]),t._v(" draw")]),t._v(" "),a("p",[t._v("掏枪动画，当玩家拿出武器时播放的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画终止状态应与static_idle完全相同")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"put-away"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put-away"}},[t._v("#")]),t._v(" put_away")]),t._v(" "),a("p",[t._v("收枪动画，当玩家切换物品栏，丢弃武器..时播放的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画起始状态应与static_idle完全相同")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"inspect-empty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inspect-empty"}},[t._v("#")]),t._v(" inspect_empty")]),t._v(" "),a("p",[t._v("空仓检视动画，当武器处于空仓状态时播放的检视动画。\n如果缺少inspect_empty动画则空仓时无法触发检视")]),t._v(" "),a("ul",[a("li",[t._v("动画起始状态和终止状态应该与 static_idle 完全相同")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"bolt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bolt"}},[t._v("#")]),t._v(" bolt")]),t._v(" "),a("p",[t._v("拉栓动画，手动武器在开火后播放的动画")]),t._v(" "),a("ul",[a("li",[t._v("动画起始状态和终止状态应该与 static_idle 完全相同")]),t._v(" "),a("li",[t._v("约束组动画：制作约束组动画后可以使拉栓时枪械始终围绕约束点范围内运动。")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"运动类动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运动类动画"}},[t._v("#")]),t._v(" 运动类动画")]),t._v(" "),a("hr"),t._v(" "),a("h5",{attrs:{id:"跑步类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跑步类"}},[t._v("#")]),t._v(" 跑步类")]),t._v(" "),a("p",[a("strong",[t._v("run_start")]),t._v("\n进入奔跑状态时的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画起始状态应与static_idle完全相同")])]),t._v(" "),a("p",[a("strong",[t._v("run")]),t._v("\n奔跑时的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画类型：循环")]),t._v(" "),a("li",[t._v("动画起时/终止状态与run_start相同")])]),t._v(" "),a("p",[a("strong",[t._v("run_hold")]),t._v("\n奔跑时跳跃的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画类型：静止")])]),t._v(" "),a("p",[a("strong",[t._v("run_end")]),t._v("\n奔跑结束时的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画起始状态应与run相同")]),t._v(" "),a("li",[t._v("动画终止状态应与static_idle完全相同")])]),t._v(" "),a("hr"),t._v(" "),a("h5",{attrs:{id:"走路类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#走路类"}},[t._v("#")]),t._v(" 走路类")]),t._v(" "),a("p",[a("strong",[t._v("walk_aiming")]),t._v("\n走路时瞄准的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画类型：循环")]),t._v(" "),a("li",[t._v("动画起始/终止状态应与static_idle完全相同")])]),t._v(" "),a("p",[a("strong",[t._v("walk_forward")]),t._v("\n【向前】走路时的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画类型：循环")]),t._v(" "),a("li",[t._v("动画起始/终止状态应与static_idle完全相同")])]),t._v(" "),a("p",[a("strong",[t._v("walk_sideway")]),t._v("\n【横向】走路时的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画类型：循环")]),t._v(" "),a("li",[t._v("动画起始/终止状态应与static_idle完全相同")])]),t._v(" "),a("p",[a("strong",[t._v("walk_backward")]),t._v("\n【向后】走路时的动画")]),t._v(" "),a("ul",[a("li",[t._v("默认动画中包含此动画")]),t._v(" "),a("li",[t._v("动画类型：循环")]),t._v(" "),a("li",[t._v("动画起始/终止状态应与static_idle完全相同")])]),t._v(" "),a("h2",{attrs:{id:"动画制作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画制作"}},[t._v("#")]),t._v(" 动画制作")]),t._v(" "),a("blockquote",[a("p",[t._v("下文仅为作者对blockbench软件制作动画的说明")])]),t._v(" "),a("h3",{attrs:{id:"一、通道设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、通道设置"}},[t._v("#")]),t._v(" 一、通道设置")]),t._v(" "),a("p",[t._v("将通道中的旋转、移动、缩放勾选")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/753v.png",alt:"channel"}})]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"二、关键帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、关键帧"}},[t._v("#")]),t._v(" 二、关键帧")]),t._v(" "),a("p",[a("strong",[t._v("添加关键帧")]),t._v("\n动画的原理便是一个物件从一个关键帧运动到另一个关键帧的过程\n在blockbench软件中可以通过组下的+号添加关键帧，也可以使用旋转(R)，移动(V)，缩放(S)工具对物体的状态进行变化添加关键帧\n"),a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/addkey.png",alt:"addkey"}}),t._v(" "),a("strong",[t._v("关键帧类型")]),t._v("\n关键帧有1.线性 2.平滑 3.贝塞尔 4.步 四种类型。当您选中关键帧后可以在屏幕左下角进行更改\n"),a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/keytype.png",alt:"keytype"}})]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"三、曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、曲线"}},[t._v("#")]),t._v(" 三、曲线")]),t._v(" "),a("p",[t._v("为了更精细的制作动画，可以在时间窗口切换曲线模式编辑\n"),a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/line.png",alt:"graph"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"烘焙动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#烘焙动画"}},[t._v("#")]),t._v(" 烘焙动画")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你的动画带有贝塞尔，需要烘焙成线性动画以保证其在游戏内的正确渲染")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("烘培动画仅应当在导出动画前进行。如果你希望动画能够二次修改，你应当将原始的动画文件拷贝并保存，然后再进行烘培。")])]),t._v(" "),a("p",[t._v("**需用插件：**Bakery, https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/bakery.js\n**烘焙方法：**载入动画，选中贝塞尔曲线插值的关键帧，点击菜单栏 动画-烘焙动画\n"),a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/05/07/bake.png",alt:"bake"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"导出动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出动画"}},[t._v("#")]),t._v(" 导出动画")]),t._v(" "),a("blockquote",[a("p",[t._v("动画支持gltf与json动画格式")])]),t._v(" "),a("h3",{attrs:{id:"导出gltf动画格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出gltf动画格式"}},[t._v("#")]),t._v(" 导出glTF动画格式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/06/02/export_gltf.png",alt:"gltf"}})]),t._v(" "),a("h3",{attrs:{id:"导出json动画格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出json动画格式"}},[t._v("#")]),t._v(" 导出json动画格式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.3hov.com/lesraisins/i/2024/06/02/export_json.png",alt:"json"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"填写枪械效果文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#填写枪械效果文件"}},[t._v("#")]),t._v(" 填写枪械效果文件")]),t._v(" "),a("blockquote",[a("p",[t._v("只有填写完枪械效果文件，才会在游戏内正确加载动画\n在gunname_display.json中添加")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用的动画名，会在包目录下的 animations 文件夹中寻找，不建议为空")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"animation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tacz:ak47"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定使用缺省动画，可为空。如果上文指定的动画文件里缺少某个动画，如 draw 动画，则会从缺省动画拷贝。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 值可为 rifle、pistol")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use_default_animation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rifle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);