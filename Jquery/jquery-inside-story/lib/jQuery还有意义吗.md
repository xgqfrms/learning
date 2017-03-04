## 行业专家聊：jQuery还有意义吗？

> freeeeeeeaker 译 · 2016-11-03 15:35

尽管jQuery的鼎盛时期已经过去了,但这个库仍然有着惊人的使用比率。但是究竟有多少是以前在使用的？还有多少开发者仍然使用jQuery来开发新应用？ 在今天的闲聊中我们邀请了一些行业专家来探讨这些问题。

### 话题

1. 在2016年，jQuery的利与弊是什么
2. 哪些应用最适合使用jQuery
3. 如果你明天就要开发一个新的网页应用，你会用jQuery吗？

### 嘉宾

- Jeremy Likness：我是一个7年的微软MVP（专长是Visual Studio 和技术开发）。我曾带领团队开发过iVision，一个位于Atlanta,GA的技术咨询公司。我还是一个认证的 Kendo UI开发者和一个 Telerik 开发专家。我从Kendo UI的beta版就开始使用它。

- Jen Looper：我和TJ是Developer Relations团队的成员

- Aurelio De Rosa：大家好.我是来自意大利的开发者，我喜爱web开发。同时我也是jQuery团队的成员。

- Nathanael Anderson：我是一个独立开发者，做过Web开发，桌面开发，服务器和移动应用。

- TJ VanToll：我和jen一样目前在 Dev Adovcate。我过去在jQuery UI团队，所以我的观点可能有些偏袒。我的同事Todd Motto 也在这并马上加入谈话。

### 正文

TJ VanToll：那我们开始第一个问题：2016年使用jQuery的利弊是什么？谁来起头？

Aurelio De Rosa： 用jQuery开发的一个主要优点就是很容易上手，这对于初级前端和业余开发者非常棒。

TJ VanToll：是的，个人来说我仍然觉得jQuery的API比原生DOM优雅一万倍。

Jen Looper：我觉得jQuery正变得越来越糟糕，不好用且过时，因为JavaScript疲劳且大量的新框架的冲击。

Jeremy Likness：从优点上来讲，jQuery是一个历史悠久的Web库，不仅仅是下载和使用，所以它是一个经历了考验的库，很多人都使用过它。事实上，很多JavaScript开发人员都把它和原生JavaScript搞混淆。

TJ VanToll：是的，而且因为这个， the breadth of knowledge online的课程也是这样，难以置信。

Todd Motto：对我来说jQuery就像黑莓手机，曾经盛极一时，但如今迅速衰败。

Jen Looper： 有一个坏处，有些新手开发人员提及，也正如Jermy提及的，jQuery使得一些开发人员对原生JavaScript知之甚少。

Jeremy Likness：jQuery有大量的可靠扩展，插件。甚至我已经把jQuery视作标准化DOM的一种方式。你只需要写一次，而jQuery团队已经为你作好了浏览器适配。当然他做到的不仅仅是这些，所以我认为这就是它如此迅速流行的原因

Nathanael Anderson：我认为优点你们说的都不错。但在这个年代，jQuery最大的问题就是现在流行的浏览器已经越来越符合W3C规范，而且直接操作DOM是很慢的，jQuery不适合大量操作DOM的项目。

Aurelio De Rosa：如Todd所说，比起以往，jQuery的作用正在减少。但是我认为它还是有很多有点：jQuery 造就了新的特性规范,比如
querySelectorAll(), prepend(), append(), before(), after(), 和 replaceWith().

Jeremy Likness：缺点:当有很多UI界面要制作的时候，很多jQuery的操作过于粗暴，导致HTML中有很多混乱的代码和标记。

Jen Looper：在我看来，Angular的崛起和jQuery的衰落是有关的，包括jQuery lite。如果我记得没错，是在Angular 1.x 的时候，人们开始抛弃jQuery。 @Todd Motto 你怎么看？

Jeremy Likness：优点:接着上个观点，大多数你们做的就是 从哪开始，做什么，不做什么。例如，获取一个或一组元素，并操作它们。用一个声明式的方法，你可以直接给元素的父级添加行为，而没必要需要选择器去找到位置。

Todd Motto：100%同意。老实说，在Angular之前我写的几乎都是jQuery。虽然我也知道Javascript的API。Angular的出现告诉jQuery开发者如何有效的分离结构来构建复杂的应用。

Jen Looper：我的想法也是这样，Todd。

Todd Motto: 现在，我们说一些正面观点。相对于直接操作DOM，我们通过编程让javascript告诉DOM做什么。这是启发我的关键。事件监听？通过自动化的框架，比如React，Angular，一切都不是问题。

Jeremy Likness： 我认为Angular，Knockout，React，都减少了jQuery的必要性。我不再要求开发者使用它，我们也极少在项目中使用它，如果有的话。因为我们现在更关注于数据绑定而不是命令式编程。 DOM api已经越来越规范，所以当你开发在一个现代的或者是edge 浏览器时，你没必要再需要兼容处理。

TJ VanToll：是的，这也引发了我们下一个话题。现在什么种类的应用适合jQuery开发。

Aurelio De Rosa：我不认为还有特定种类的应用适合jQuery。我认为jQuery就是通用的，它什么地方都能使用。不过，当我在用Bootstrap开发原型时，很多时候我会用到jQuery。

Jeremy Likness：在我的工作中，它几乎只用于那种小册子网站或者老旧的网站。前者是因为网页大多数是静态代码，可以使用轻量的jQuery和插件来做动画。后者是因为他能处理旧的API。而99%的情况完全是副作用，比如因为我引入的库依赖它。然而这种情况在减少。

Aurelio De Rosa：当开发圆形的时候，我需要用尽量少的代码快速搭建，这个时候jQuery非常棒，因为它的生态完善。比如jQuery UI，还有其它数不尽的插件，你可以用它们轻松完成一些你要实现的基础的功能。

Nathanael Anderson：我同意，jQuery过去常常被用来模拟东西，或者兼容旧的浏览器。但是大多新的应用开发正在降低jQuery的使用。

Todd Motto：jQuery现在不适合构建应用。我们有组建模型。在现在的应用世界里，jQuery无需因为无用而羞愧。它助我们走过了浏览器的混乱时代，然而我们已经逐渐放弃了它，因为有了更好的框架。甚至Angular也是如此，我现在也很少用它。

Jeremy Likness：对，原型很棒。如果我想展示一个动画研究的结果，展示没有互动的应用，就该这么做。然而坦率地说，我们现在很多的原型使用Angular做的，然后从原型标记开始构建真实的应用。

TJ VanToll：对我来说，Web网页和Web APP是不同的。Web Apps倾向于更复杂，更先进，比如分层架构就很不一样。web网页倾向于大型，不需要很复杂。在那种情况下，Angular，React，都是多余的。我仍然认为jQuery是及其靠谱的。jQuery插件仍然是构建小册子网站最简单的方式。

Jeremy Likness：我得重申我的老观点。如果我想解析DOM，jQuery是最好的。也许我接受了一个大型网站，有很多代码，然后想添加一个简单的插件跑起来。我才不想用一个现代框架重写它。jQuery对我就是最简单的方式，DOM选择，DOM操作，不会就为了添加一个小效果就搞得惊天动地。恩，陈腔滥调，我又说了一遍。

Todd Motto：jQuery的问题是它只是一个库，即使它有丰富多样的插件生态。想象什么是框架。有没有分层，视图层，模型层。除非你花很多时间绞尽脑汁一番。如果你用正确的javascript模式去开发一个js模型，那么jQuery才能完全搞定。但是我们，IMO，作为一个社区很难做到。开发很慢，很难确定，没有控制数据流，事件，生命周期钩子...

TJ VanToll：不用大费周章地加个事件。新的jQuery 标签行吗

Jen Looper：在移动端上如何。有人会用它去写移动端应用吗？我想没有。

TJ VanToll：????

Nathanael Anderson：对PWA也许，原生APP不。

Aurelio De Rosa：我猜那基于你有多少特性想展示在原型上。如果我想展示一种奇偶奥胡或一个简单的特性，我绝对会用jQuery来避免任何框架。众所周知，MVC可以让你写更优雅的代码，让你分离层级。但是他也会急剧增加你的代码量。

TJ VanToll：我曾在移动端用过jQuery，而且绝对不想再有第二遍。你得及其注意你的所作所为，因为流量精贵啊。但是jQuery有很好的组件，所以你可以只用你需要的部分(Ajax，DOM操作，动画)

Nathanael Anderson：React Native和NativeScript没有DOM，所以jQuery没用。而对Cordova/PhoneGap或者PWA，他们使用WebvIEW,所以你仍需要操作DOM。

Todd Motto：甚至多年后，我仍能断言任何情况下jQuery mobile 也不会符合我的工作流

Jen Looper：是的，jQuery对移动端来说太重了。

TJ VanToll：我认为 如果你把它作为一个快速构建一个不错的app时，jQuery Mobile仍是可以的。记住，jQuery的初衷就是驯化不同的设备。 尽管好设备变得便宜起来。 但是它仍适合初学者和原型。比起现在的MVC框架易学易用

Jeremy Likness:：嗯，“驯化 UI”，因该说标准化它。标准化DOM，标准化UI。 我不确定我同意一个框架增加了我写的代码。也许吧。但是如果我能写一个可以重复使用或者声明的组件，指令，行为，比起命令式的jQuery，我能用一个数据绑定的框架快速模拟。事实上，我很喜欢重复利用一些东西作为元素或附加行为。 比如添加一个'my-focus-attribute'的特性就能搞定。

Aurelio De Rosa：我同意TJ，jQuery Mobile过去很有用，我现在仍发现有些网站在用。

TJ VanToll：有些Android 2.2里jQuery Mobile 的hack很有趣。

Jen Looper：你会教新手开发者jQuery吗，比如在一个代码学校。问一下。

Jeremy Likness：Jen,也许不会。 我只是没熟练使用它。

Aurelio De Rosa：我不会教它，但我会用它教学。

TJ VanToll：Jen, 我同意，它给了初学者一种能有能力快速有效解决问题的成就感。

Aurelio De Rosa:我觉得jQuery是一个极其有用的代码教学工具。有时你想教一门技术但不想卷入复杂的浏览性兼容性中，不想分心在一些DOM API上。或者你想简洁地介绍概念而不是进入到原生实现中，不用写太多代码。这种情况下，jQuery是很棒的工具。 Jen Looper Aurelio, 真是有趣的方式。 ????
Aurelio De Rosa：它给了初学者成就感。我听到你说了，TJ。

Todd Motto：性能对我来说是另一个关键因素。Angular 2通过提前编译可以静态分析，这样渲染是非常快速的。 而jQuery，它是完全的后处理DOM操作，没有办法控制状态突变或者模板层。单向数据流已经证明了这种方式，甚至 Angular 1.x 已经避免了组件的双向绑定来帮助迁移。从性能方面看，单向数据流比通过使用不可变操作创建新状态好太多，它使得侦测机器到计算改变的变化更快，同样时间旅行调试方法使得我们可以单步调试状态突变。
 
jQuery字面上（对我）是一个有用的操作DOM的工具，但是和Angular2，React比，DOM层被分离出来了，使得性能和原生渲染一样。 (NativeScript, hello!)

TJ VanToll：我同意Todd刚才说的，唯一要回应的是有有很多网站对这种细微差别的性能是无所谓的。他们只需要能奏效。

Jen Looper：我刚从我书架上拿了一本书。Nick Morgan写的“JavaScript for Kids: A Playful Introduction to Programming”。强烈推荐，你们猜第九章写了什么？

Aurelio De Rosa：jQuery Jen? ????

Jen Looper：《高级JavaScript: DOM 与 jQuery》

TJ VanToll： 所以让我们进入到最后一个问题：如果你开发一个新的web app，你会使用jQuery吗？ 我会给开发者一个我最爱的回答：它基于？？？
Aurelio De Rosa：我默认不会，但是它也基于项目和支持的浏览器。有段时间，我不用支持IE 8，但是我仍然保留了支持IE8的代码习惯几年。所以，我仍会是不是看到jQuery。

Jen Looper：结合我现在开发的案例，不会。也就是说我不再web/mobile 商店工作了。

Nathanael Anderson：不，不仅仅只是也许。如Tj所说，它基于什么。但是，似乎更是某些特殊案例才需要，而不是默认选择。

Jeremy Likness：是的，回到册子式的网站或者遗留项目，jQuery仍然奏效。

TJ VanToll：对。我仍然绝对jQuery提供了有效的函数去写像那样的小网站。现在如果我动手一个大型复杂应用，我也许不会再用jQuery。我认为像Angular2那样的现代框架才是搭建那个量级应用的典范。

Aurelio De Rosa: 我想我们都同意jQuery不是构建单页面应用的工具，而且，实话实说，它也绝不会成为那样。

Jeremy Likness: 99%的可能性我不会使用jQuery构建新应用。除非它是我引入的某个库和框架的依赖。我们大多数都在构建web app而不是web 网页，99%都是响应式，移动优先，单页面应用。

Jen Looper:jQuery将会永远存在在遗留项目上，和那些框架一起。????

Todd Motto:我也不会用。不够如果我是写的小册子式的网页，没有多少交互，我当让会考虑下。

Aurelio De Rosa: 我们也应该考虑到jQuery不仅帮助了开发者，也促进了javascript。

Jen Looper: 对.

Aurelio De Rosa:jQuery不再实用，毫无置疑。但是它真的是个好东西。它意味着标准的进化，我们终于走到了jQuery带领的路上。

Jen Looper:我认为它为很多人理清了路。

TJ VanToll:很惊讶浏览器到现在才相对兼容。谁会想到jQuery2006年就推出了。

Jeremy Likness: 是的，很讽刺。但我还有一个有10年时间的博客。我曾写过Slilverlight，Kendo，Angular的文章，甚至你还能说出来。但是如果你看了我几千文章中浏览量最多的文章，你会发现那是一个很古老的关于如何使用timeout去修复IE6的事件处理。， 那是web开发的黑暗时代，jQuery改变了它，让web app 有了惊人的可能。

Aurelio De Rosa: 嗯，仅仅花了几十年的????

Nathanael Anderson: 是的，但是jQuery也许有很多方面花在了处理微软IE的问题上了。因为很多规范IE不支持。

Aurelio De Rosa:有件事我希望在今后的新框架和库中想看到的那就是有一个好的文档，与jQuery有可比性的。 与jQuery一样有好文档的可不多。
Jen Looper: 对，我想这一点赶上jQuery还要花点时间

Nathanael Anderson:PHP imho有更好的文档。但是jQuery比大多数项目也更好。

TJ VanToll: Aurelio,完全同意，关于这一点，我们要多谢谢一下Aurelio，又名 4th largest contributor to api.jquery.com ????

Jeremy Likness 谢谢, Aurelio!

Jen Looper: ????

Aurelio De Rosa:真不好意思, 谢谢大家 ????

Todd Motto: 最后一件事:我们没必要去劝阻开发者不用jQuery。它是一个强大成熟的库，虽然它在现代web开发的地位是被动摇了。也许5年后，我们又会再错一次。

Jeremy Likness:文档很棒，乐于看到新的框架吸收jQuery的文档哲学。希望开发者写完应用要测试，不要写完不管。

Jen Looper:我只想说如果web真的走到了不需要jQuery的地步，那真是天大的好消息。那就意味着浏览器已经足够标准化，框架也非常成熟。现在，我们有了一个伟大的目标去实现未来的开发。

Jeremy Likness:对。我不是明确反对jQuery或者说反对开发者使用它，就像我也很重React和Ember，尽管我是用Angular开发我的产品。

Nathanael Anderson:同意 Todd 和 Jeremy。jQuery 仍然是一个强大的库。

Aurelio De Rosa: 作为web开发者，我们歉 jquery 太多。它是一个非常成熟的库，还有一点，其它库做不到的，那就是它甚至达到了一种不需要再加更多有用的功能了。事实上，还减去了一些功能（比如slim版本）。所以，让我们谢谢jQuery和它背后的社区。

Nathanael Anderson: +1

Todd Motto: 恩。如果所有的框架都行不通，至少我仍能用jQuery搞定工作。

TJ VanToll: 对我来说，jQuery有着规范的标准，优雅的API设计，易于理解的文档。尽管我可能不会在我以后的应用中使用它，但我仍然觉得它方便的DOM操作和强大的插件使得开发应用非常简单。 有一点，在Progress，我们有n种方式让你选择去构建你的应用。