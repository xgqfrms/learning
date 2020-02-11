

//------------------------------------------------------------------------------------
//无障碍快捷键及工具条调用JS
//Version：V1.0
//Author：ivan
//Date：2013-07-03
//------------------------------------------------------------------------------------
var serverUrl = "https://voice.ewdcloud.com/js/tongyi/jhelper/";
//var serverUrl = "http://www.wdit.com.cn/wza/V2.0/";
document.writeln("<script type=\"text/javascript\" src=\"" + serverUrl + "pinyin.js\"  charset=\"gb2312\" ></script>");
document.writeln("<script type=\"text/javascript\" src=\"" + serverUrl + "jhelper_urls.js\" charset=\"gb2312\" ></script>");


//------------------------------------------------------------------------------------
//-----------------------------------公共方法定义开始------------------------------------

function debugAlert(msg) {
	//alert(msg);
}

//浏览器类型判断

function browserFlag() {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	return Sys;
}

//cookie功能--------------------------
//设置cookie//两个参数，一个是cookie的名子，一个是值

function SetCookie(name, value) {
	//此 cookie 将被保存 30 天
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//取cookies

function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null;
}

//删除cookie

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

// 获取x，y位置的element

function getHTMLElementsAtPoint(x, y) {
	var tags = ",";
	var e = document.elementFromPoint(x, y);
	return e;
	while (e) {
		if (e.tagName) {
			tags += e.tagName + ',';
		}
		e = e.parentNode;
	}
	return tags;
}

// fengjunfeng 搜索使用

function changefoucs(newnav) {
	document.getElementById(newnav).style.display = "block";
}

function changeblur(newnav) {
	document.getElementById(newnav).style.display = "none";
}

function changeinput(newid) {
	if (newid.value != "") {
		newid.value = "";
	}
}

function blurinput(newid) {
	if (newid.value == "") {
		newid.value = "请输入关键词"
	}
}

function getText(element) {
	var elementText;
	if (element.nodeName == "H1" || element.nodeName == "H2" || element.nodeName == "H3" || element.nodeName == "H4" || element.nodeName == "H5" || element.nodeName == "H6")

	{
		element = element.firstChild;
	}
	if (element.nodeName == "#text") {
		elementText = thisElement.nodeValue;
	} else if (element.nodeName == "IMG") {
		if (element.getAttribute("alt")) {
			elementText = element.getAttribute("alt");
		} else if (element.getAttribute("title")) {
			elementText = element.getAttribute("title");
		} else {
			elementText = document.title;
		}
	} else {
		elementText = element.innerText || element.textContent;
	}
	return elementText;
}

// 简繁转换方法

function JTPYStr() {
	return '万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲干尽脏';
}

function FTPYStr() {
	return '萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒乾儘臟';
}

function Traditionalized(cc) {
	var str = '',
		ss = JTPYStr(),
		tt = FTPYStr();
	for (var i = 0; i < cc.length; i++) {
		if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) != -1) str += tt.charAt(ss.indexOf(cc.charAt(i)));
		else str += cc.charAt(i);
	}
	return str;
}

function Simplized(cc) {
	var str = '',
		ss = JTPYStr(),
		tt = FTPYStr();
	for (var i = 0; i < cc.length; i++) {
		if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1) str += ss.charAt(tt.indexOf(cc.charAt(i)));
		else str += cc.charAt(i);
	}
	return str;
}

// HashMap
function HashMap() { 

	var size=0; 
	var entry=new Object(); 
	this.put=function(key,value)
	{ 
		if(!this.containsKey(key)){ 
		size++; 
		entry[key]=value; 
		} 
	} 

	this.get=function(key){ 
		return this.containsKey(key) ? entry[key] : null; 
	}

	this.remove=function(key){ 
		if(this.containsKey(key) && ( delete entry[key] )){ 
			size--; 
		}	 
	}	 

	/**是否包含Key**/ 
	this.containsKey= function (key){ 
		return (key in entry); 
	} 

	/**是否包含Value**/ 
	this.containsValue=function(value){ 
		for(var prop in entry) 
		{ 
			if(entry[prop]==value){ 
			return true; 
			} 
		} 
		return false; 
	} 

	/**所有的Value**/ 
		this.values=function(){ 
			var values=new Array(); 
			for(var prop in entry) 
			{ 
				values.push(entry[prop]); 
			} 
			return values; 
	} 

	/**所有的 Key**/ 
	this.keys=function(){ 
		var keys=new Array(); 
		for(var prop in entry) 
		{ 
			keys.push(prop); 
		} 
		return keys; 
	}

	/**Map size**/ 
	this.size=function(){ 
		return size; 
	} 

	/**清空Map**/ 
	this.clear=function(){ 
		size=0; 
		entry=new Object(); 
	} 
}

// md5
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */ 
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance */ 
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */

/* 
* These are the functions you'll usually want to call 
* They take string arguments and return either hex or base-64 encoded strings 
*/ 
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));} 
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));} 
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); } 
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }

/* Backwards compatibility - same as hex_md5() */ 
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

/* 
* Perform a simple self-test to see if the VM is working 
*/ 
function md5_vm_test() 
{ 
return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"; 
}

/* 
* Calculate the MD5 of an array of little-endian words, and a bit length 
*/ 
function core_md5(x, len) 
{ 
/* append padding */ 
x[len >> 5] |= 0x80 << ((len) % 32); 
x[(((len + 64) >>> 9) << 4) + 14] = len;

var a = 1732584193; 
var b = -271733879; 
var c = -1732584194; 
var d = 271733878;

for(var i = 0; i < x.length; i += 16) 
{ 
var olda = a; 
var oldb = b; 
var oldc = c; 
var oldd = d;

a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936); 
d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586); 
c = md5_ff(c, d, a, b, x[i+ 2], 17, 606105819); 
b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330); 
a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897); 
d = md5_ff(d, a, b, c, x[i+ 5], 12, 1200080426); 
c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341); 
b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983); 
a = md5_ff(a, b, c, d, x[i+ 8], 7 , 1770035416); 
d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417); 
c = md5_ff(c, d, a, b, x[i+10], 17, -42063); 
b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162); 
a = md5_ff(a, b, c, d, x[i+12], 7 , 1804603682); 
d = md5_ff(d, a, b, c, x[i+13], 12, -40341101); 
c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290); 
b = md5_ff(b, c, d, a, x[i+15], 22, 1236535329);

a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510); 
d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632); 
c = md5_gg(c, d, a, b, x[i+11], 14, 643717713); 
b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302); 
a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691); 
d = md5_gg(d, a, b, c, x[i+10], 9 , 38016083); 
c = md5_gg(c, d, a, b, x[i+15], 14, -660478335); 
b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848); 
a = md5_gg(a, b, c, d, x[i+ 9], 5 , 568446438); 
d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690); 
c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961); 
b = md5_gg(b, c, d, a, x[i+ 8], 20, 1163531501); 
a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467); 
d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784); 
c = md5_gg(c, d, a, b, x[i+ 7], 14, 1735328473); 
b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558); 
d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463); 
c = md5_hh(c, d, a, b, x[i+11], 16, 1839030562); 
b = md5_hh(b, c, d, a, x[i+14], 23, -35309556); 
a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060); 
d = md5_hh(d, a, b, c, x[i+ 4], 11, 1272893353); 
c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632); 
b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640); 
a = md5_hh(a, b, c, d, x[i+13], 4 , 681279174); 
d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222); 
c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979); 
b = md5_hh(b, c, d, a, x[i+ 6], 23, 76029189); 
a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487); 
d = md5_hh(d, a, b, c, x[i+12], 11, -421815835); 
c = md5_hh(c, d, a, b, x[i+15], 16, 530742520); 
b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844); 
d = md5_ii(d, a, b, c, x[i+ 7], 10, 1126891415); 
c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905); 
b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055); 
a = md5_ii(a, b, c, d, x[i+12], 6 , 1700485571); 
d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606); 
c = md5_ii(c, d, a, b, x[i+10], 15, -1051523); 
b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799); 
a = md5_ii(a, b, c, d, x[i+ 8], 6 , 1873313359); 
d = md5_ii(d, a, b, c, x[i+15], 10, -30611744); 
c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380); 
b = md5_ii(b, c, d, a, x[i+13], 21, 1309151649); 
a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070); 
d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379); 
c = md5_ii(c, d, a, b, x[i+ 2], 15, 718787259); 
b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

a = safe_add(a, olda); 
b = safe_add(b, oldb); 
c = safe_add(c, oldc); 
d = safe_add(d, oldd); 
} 
return Array(a, b, c, d);

}

/* 
* These functions implement the four basic operations the algorithm uses. 
*/ 
function md5_cmn(q, a, b, x, s, t) 
{ 
return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b); 
} 
function md5_ff(a, b, c, d, x, s, t) 
{ 
return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t); 
} 
function md5_gg(a, b, c, d, x, s, t) 
{ 
return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t); 
} 
function md5_hh(a, b, c, d, x, s, t) 
{ 
return md5_cmn(b ^ c ^ d, a, b, x, s, t); 
} 
function md5_ii(a, b, c, d, x, s, t) 
{ 
return md5_cmn(c ^ (b | (~d)), a, b, x, s, t); 
}

/* 
* Calculate the HMAC-MD5, of a key and some data 
*/ 
function core_hmac_md5(key, data) 
{ 
var bkey = str2binl(key); 
if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

var ipad = Array(16), opad = Array(16); 
for(var i = 0; i < 16; i++) 
{ 
ipad[i] = bkey[i] ^ 0x36363636; 
opad[i] = bkey[i] ^ 0x5C5C5C5C; 
}

var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz); 
return core_md5(opad.concat(hash), 512 + 128); 
}

/* 
* Add integers, wrapping at 2^32. This uses 16-bit operations internally 
* to work around bugs in some JS interpreters. 
*/ 
function safe_add(x, y) 
{ 
var lsw = (x & 0xFFFF) + (y & 0xFFFF); 
var msw = (x >> 16) + (y >> 16) + (lsw >> 16); 
return (msw << 16) | (lsw & 0xFFFF); 
}

/* 
* Bitwise rotate a 32-bit number to the left. 
*/ 
function bit_rol(num, cnt) 
{ 
return (num << cnt) | (num >>> (32 - cnt)); 
}

/* 
* Convert a string to an array of little-endian words 
* If chrsz is ASCII, characters >255 have their hi-byte silently ignored. 
*/ 
function str2binl(str) 
{ 
var bin = Array(); 
var mask = (1 << chrsz) - 1; 
for(var i = 0; i < str.length * chrsz; i += chrsz) 
bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32); 
return bin; 
}

/* 
* Convert an array of little-endian words to a hex string. 
*/ 
function binl2hex(binarray) 
{ 
var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; 
var str = ""; 
for(var i = 0; i < binarray.length * 4; i++) 
{ 
str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) + 
hex_tab.charAt((binarray[i>>2] >> ((i%4)*8 )) & 0xF); 
} 
return str; 
}

/* 
* Convert an array of little-endian words to a base-64 string 
*/ 
function binl2b64(binarray) 
{ 
var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; 
var str = ""; 
for(var i = 0; i < binarray.length * 4; i += 3) 
{ 
var triplet = (((binarray[i >> 2] >> 8 * ( i %4)) & 0xFF) << 16) 
| (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 ) 
| ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF); 
for(var j = 0; j < 4; j++) 
{ 
if(i * 8 + j * 6 > binarray.length * 32) str += b64pad; 
else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F); 
} 
} 
return str; 
} 


//------------------------------------------------------------------------------------
//--------------------------------------公共方法定义结束---------------------------------
//---------------------------文字提示功能定义开始-----------------------------//
var toolbar = new Object();
toolbar.Function = new Object();
var hiddenTagName = "samp";
var elementFuncHashMap = new HashMap(); 

toolbar.hidestart = "<!--lsf20180515forhide start";
toolbar.hideend = "lsf20180515forhide end-->";

function elementContext() {
	this.thisContext 	= new Object();
	this.funcMouseOver 	= new function(){};
	this.funcMouseOut 	= new function(){};
	this.testValue 		= "what is your";
	this.element        = new Object();
}

function initTextTips() {
	var messageboxText = "";
	messageboxText += "<div class=\"disabilitiesLanguage\">";
        // 解决ie6下拉框浮在工具条上的方法
        messageboxText += "<iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;filter:alpha(opacity=0);\"></iframe>";
	messageboxText += "<div class=\"LanguageMain\" id=\"language\">";
	messageboxText += "<ul class=\"font_titleBar\">";
	messageboxText += "<li><input type=\"button\" title=\"转换简体字\" id=\"jhelper_btn01\" class=\"jhelper_btn01\" onclick=\"toolbar.Function.textTips.simpleModel()\"/></li>";
	messageboxText += "<li><input type=\"button\" title=\"转换繁体字\" class=\"jhelper_btn02\" onclick=\"toolbar.Function.textTips.raditionalModel()\"/></li>";
	messageboxText += "</ul>";
	messageboxText += "<ul class=\"LanguageSpell\">";
	messageboxText += "<li class=\"jhelper_btn01\" id=\"spell\"><input type=\"button\" title=\"显示拼音\" onclick=\"toolbar.Function.textTips.pinyinControl()\"/></li>";
	messageboxText += "<li class=\"jhelper_btn02\"><input type=\"button\" title=\"关闭文字放大阅读屏幕\" class=\"input\" onclick=\"toolbar.Function.textTips.mainMethod();\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	messageboxText += "</ul>";
	messageboxText += "</div>";
	messageboxText += "<div class=\"Languagetext\">";
	messageboxText += "<div class=\"LanguageTextMin\">";
	messageboxText += "<div class=\"LanguageTextContent\">";
	messageboxText += "<p><table><tr><td id=\"helper_messageBoxText\"></td></tr></table></p>";
	messageboxText += "</div>";
	messageboxText += "</div>";
	messageboxText += "</div>";
	messageboxText += "<div class=\"disabilitiesFooterBg\"></div>";
	messageboxText += "</div>";

	toolbar.Function.textTips = {
		showHTML: function() {
			if (ABTConfig.textTips.functionSwitch) {
				return "<input id=\"texttipsbutton\" type=\"button\" value=\"文字提示\" title=\"文字提示\" onclick=\"toolbar.Function.textTips.mainMethod()\" /><!--<input id=\"pinyinbutton\" type=\"button\" value=\"开启拼音功能\" title=\"开启拼音功能\"onclick=\"toolbar.Function.textTips.pinyinControl()\" />-->";
			} else {
				return "";
			}
		},
		cookieName: "textTips",
		cookieMethod: function() {
			if (ABTConfig.textTips.cookieSwitch && toolbar.cookie.getCookie(this.cookieName) == 1) {
				toolbar.Function.textTips.mainMethod();
			}
		},
		resetCookie: function() {
			toolbar.cookie.setCookie(this.cookieName, 0);
		},
		testTipsState: false,
		pinyinState: false,
		allTextNode: new Array(),
		isTextNode: function(element) {
			if (element.tagName == "IMG" || element.tagName == "INPUT" || element.tagName == "OBJECT" || element.tagName == "SELECT" || element.tagName == "H1" || element.tagName == "H2" || element.tagName == "H3" || element.tagName == "H4" || element.tagName == "H5" || element.tagName == "H6" || element.tagName == "A" || element.tagName == "li" || element.tagName == "SPAN"|| element.tagName=="a" || element.tagName=="input"|| element.tagName=="img") {
				return true;
			} else {
				return false;
			}
		},
		getTextNode: function(element) {
			var childNodes = element.childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				var thisChild = childNodes[i];
				switch (thisChild.nodeType) {
					case 1:
						this.getTextNode(thisChild);
						break;
					case 3:
						if (this.trim(thisChild.nodeValue).length == 0) {
							break;
						}
						this.allTextNode.push(thisChild);
						break;
				}
				if (thisChild.nodeName == "IMG" || thisChild.nodeName == "INPUT" || thisChild.nodeName == "OBJECT" || thisChild.nodeName == "SELECT") {
					this.allTextNode.push(thisChild);
				}
			}
		},
		AddTag: function() {
			if (this.firstRun) {
				return;
			}
			for (var a = 0; a < this.allTextNode.length; a++) {
				var tagNode = document.createElement(hiddenTagName);
				if (this.allTextNode[a].nodeName == "IMG" || this.allTextNode

					[a].nodeName == "INPUT" || this.allTextNode[a].nodeName == "SELECT") {
					tagNode.setAttribute("class", "getmessage");
					var newNode = this.allTextNode[a].cloneNode(true);
					tagNode.appendChild(newNode);
				} else if (this.allTextNode[a].nodeName == "OBJECT" && this.allTextNode[a].parentNode.nodeName != "OBJECT") {
					tagNode.setAttribute("class", "getmessage");
					var newNode = this.allTextNode[a].cloneNode(true);
					tagNode.appendChild(newNode);
				} else {
					var newString = this.allTextNode[a].nodeValue;
					var reg = /[，。！？；、：]/;
					if (true){//reg.exec(newString) == null) {
                        tagNode.setAttribute("class", "getmessage");
                        if (this.allTextNode[a].parentNode.nodeName.toLowerCase() == "script")
                            tagNode.innerHTML = toolbar.hidestart + newString + toolbar.hideend;
                        else
                            tagNode.innerHTML = newString;
					} else {
                        tagNode.setAttribute("class", "getmainmessage");
                        tagNode.innerHTML = this.mySplit(newString, /[，。！？；、：]/);
					}
                }
                // && this.allTextNode[a].parentNode.nodeName.toLowerCase() != "script"
                if (this.allTextNode[a].parentNode) {
                    this.allTextNode[a].parentNode.insertBefore(tagNode, this.allTextNode[a]);
                }
			}
			for (var b = 0; b < this.allTextNode.length; b++) {
				if(this.allTextNode[b].parentNode != null) {
					this.allTextNode[b].parentNode.removeChild(this.allTextNode[b]);
				}
			}
			var allOption = $(mainBoxID).get(0).getElementsByTagName("option");
			for (var c = 0; c < allOption.length; c++) {
				if(allOption[c].firstChild != null) {
					var thisMessage = allOption[c].firstChild.cloneNode(true);
					allOption[c].innerHTML = "";
					allOption[c].appendChild(thisMessage);
				}
			}
			this.firstRun = true;

		},
		trim: function(str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		mySplit: function(str, reg) {
			var result, x = str,
				y, zzz = true;
			var stringArray = new Array();
			do {
				result = reg.exec(x);
				if (result != null) {
					var stringIndex = result.index;
					stringArray.push(x.substring(0, stringIndex + 1));
					x = x.substring(stringIndex + 1);
				} else {
					stringArray.push(x)
					zzz = false;
				}
			}
			while (zzz)
            var yy = "<" + hiddenTagName + "class=\"getmessage\">";
			for (var a = 0; a < stringArray.length; a++) {
				yy += (a < stringArray.length - 1) ? (stringArray[a] + "</"+hiddenTagName+"><"+hiddenTagName+" class=\"getmessage\">") :

				(stringArray[a]);
            }
            yy += "</" + hiddenTagName + ">";
            return yy;
		},
		pinyingArray: new Array(),
		TraditionalArray: new Array(),
		simplifiedArray: new Array(),
		makeMsgHTMLText: function(arrayText, arrayPinyin) {
			var htmlText = "";
			var CLOUM = 17;

			htmlText += "<table>";

			for (var k = 0; k <= arrayPinyin.length / CLOUM; k++) {
				htmlText += "<tr>";
				for (var i = 0; i + k * CLOUM < arrayPinyin.length && i < CLOUM; i++) {
					htmlText += "<td class=\"jhelper_pinyin\">";
					htmlText += arrayPinyin[i + k * CLOUM];
					htmlText += "</td>";
				}
				htmlText += "</tr>";

				htmlText += "<tr>";
				for (var i = 0; i + k * CLOUM < arrayText.length && i < CLOUM; i++) {
					htmlText += "<td>";
					htmlText += arrayText[i + k * CLOUM];
					htmlText += "</td>";
				}
				htmlText += "</tr>";
			}

			htmlText += "</table>";

			return htmlText;
		},
		getTextNoParam:function() {
			toolbar.Function.textTips.getText(this);
		},
		getText: function(element) {
			var ele = element;
			if (!document.getElementById("helper_messageBoxText") || ele == null || ele.firstChild == null) {
				return;
			}
			var messagebox = document.getElementById("helper_messageBoxText");
			var textMessage = "";
			if (ele.firstChild.nodeName == "IMG") {

				if (ele.parentNode.parentNode.nodeName == "A" || ele.parentNode.nodeName == "A") {
					textMessage = "图片链接：" + getText(ele.firstChild);
				} else {
					textMessage = "图片：" + getText(ele.firstChild);
				}
			} else if (ele.firstChild.nodeName == "OBJECT") {
				textMessage = "媒体：" + ele.firstChild.getAttribute("title");
			} else if (ele.firstChild.nodeName == "SELECT") {
				textMessage = "下拉菜单";
			} else if (ele.firstChild.nodeName == "INPUT") {
				var inputType = ele.firstChild.getAttribute("type");
				switch (inputType) {
					case "button":
						textMessage = "表单按钮：" + ele.firstChild.getAttribute("value");
						break;
					case "image":
						textMessage = "图形按钮：" + ele.firstChild.getAttribute("alt");
						break;
					case "submit":
						textMessage = "提交按钮：" + ele.firstChild.getAttribute("value");
						break;
					case "reset":
						textMessage = "重置按钮：" + ele.firstChild.getAttribute("value");
						break;
					case "file":
						textMessage = "文件域：" + ele.firstChild.getAttribute("title");
						break;
					case "password":
						textMessage = "密码域：" + ele.firstChild.getAttribute("title");
						break;
					case "radio":
						textMessage = "单选框：" + ele.firstChild.getAttribute("title");
						break;
					case "checkbox":
						textMessage = "复选框：" + ele.firstChild.getAttribute("title");
						break;
					case "text":
						textMessage = "文本域：" + ele.firstChild.getAttribute("title");
						break;
				}
			} else if (ele.parentNode.parentNode.nodeName == "A" || ele.parentNode.nodeName == "A") {
				var thisContent;
				if (ele.parentNode.parentNode.nodeName == "A") {
					if (ele.parentNode.parentNode.getAttribute("title")) {
						thisContent = ele.parentNode.parentNode.getAttribute("title");
					} else {
						thisContent = ele.innerText || ele.textContent;
					}
				} else if (ele.parentNode.nodeName == "A") {
					if (ele.parentNode.getAttribute("title")) {
						thisContent = ele.parentNode.getAttribute("title");
					} else {
						thisContent = ele.innerText || ele.textContent;
					}
				}
				textMessage = "链接：" + thisContent;
			} else if (ele.parentNode.nodeName == "H1" || ele.parentNode.nodeName == "H2" || ele.parentNode.nodeName == "H3" || ele.parentNode.nodeName == "H4" || ele.parentNode.nodeName == "H5" || ele.parentNode.nodeName == "H6") {
				var thisContent = ele.innerText || ele.textContent;
				textMessage = "标题：" + thisContent;
			} else {
				//console.log("2:" + ele.innerHTML || ele.textContent);
				var thisContent = ele.innerText || ele.textContent;
				textMessage = "文本：" + thisContent;
			}
			var messageboxWidth = messagebox.offsetWidth;
			var fontRatio = messageboxWidth / textMessage.length;
			//alert(messageboxWidth+"|"+textMessage.length+"|"+fontRatio);
			if (fontRatio < 30) {
				if (fontRatio > 18) {
					messagebox.style.fontSize = parseInt(fontRatio) + "px";
					messagebox.style.lineHeight = parseInt(fontRatio) + "px";
				}
				if (fontRatio < 10) {
					messagebox.style.fontSize = parseInt(fontRatio * 2) + "px";
					messagebox.style.lineHeight = parseInt(fontRatio * 2) + "px";
				}
			} else {
				messagebox.style.fontSize = "";
			}

			if (INSTANCE.pinYing == "1") {

				if (INSTANCE.isSimplifiedModel == "0") {
					toolbar.Function.textTips.pinyinText(textMessage);
					var traditionText = Traditionalized(textMessage);
					toolbar.Function.textTips.TraditionalArray = traditionText.split("");
					textMessage = toolbar.Function.textTips.makeMsgHTMLText(toolbar.Function.textTips.TraditionalArray, toolbar.Function.textTips.pinyingArray);

				} else {
					toolbar.Function.textTips.simplifiedArray = textMessage.split("");
					toolbar.Function.textTips.pinyinText(textMessage);
					textMessage = toolbar.Function.textTips.makeMsgHTMLText(toolbar.Function.textTips.simplifiedArray, toolbar.Function.textTips.pinyingArray);
				}

			} else {
				if (INSTANCE.isSimplifiedModel == "0") {
					textMessage = Traditionalized(textMessage);
				}
			}

			// 设置信息框内容
			messagebox.innerHTML = textMessage;
			textMessage = "";
			if (toolbar.Function.textTips.textbgState) {
				ele.style.backgroundColor = "#F00";
				ele.style.color = "#FFF";
			}
		},
		pinyinText: function(text) {
			var messayArray = text.split("");
			var newString = "";
			this.pinyingArray = new Array();
			for (var a = 0; a < messayArray.length; a++) {
				var testVar = "";
				if (pinyin[messayArray[a]]) {
					testVar = pinyin[messayArray[a]];
				} else {
					testVar = "&nbsp;";
				}
				if (messayArray[a] == " ") {
					messayArray[a] = "&nbsp;";
				}
				this.pinyingArray.push(testVar);
			}
			return newString;
		},
		getEvent: function() {
			var allSpan = $(mainBoxID).get(0).getElementsByTagName(hiddenTagName);
			for (var c = 0; c < allSpan.length; c++) {
				if (allSpan[c].getAttribute("class") == "getmessage") {
					allSpan[c].onmouseover = this.getTextNoParam;
					allSpan[c].onmouseout = this.clearTextbgNoParam;
				}
			}

			// 设置iframe样式
			var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
			if (!iframeNode) {
				return;
			}
			for (var i = 0; i < iframeNode.length; i++) {
				var iframeObject = iframeNode[i].contentWindow;
				this.addEventForIframe(iframeObject);
			}
		},
		addEventForIframe: function(iframeObject) {
				try {
					var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
					for (var j = 0; j < iFrameAllNode.length; j++) {
						var element = iFrameAllNode[j];
						if(element.tagName == 'iframe' || element.tagName == 'IFRAME') {
							this.addEventForIframe(element.contentWindow);
						}else if (this.isTextNode(element)) {

							var value 			= new elementContext();
							value.thisContext 	= this;
							value.funcMouseOver = element.onmouseover;
							value.funcMouseOut 	= element.onmouseout;
							value.element 		= element;
							elementFuncHashMap.put(hex_md5(element.innerHTML),value);

							element.onmouseout = function() {

							    var context = elementFuncHashMap.get(hex_md5(this.innerHTML));
							    if (context && typeof(context.funcMouseOut) == 'function') {
							        context.funcMouseOut();
							    }
							    if(context) {
							    	context.thisContext.clearTextbg(this);
							    } else {
							    	//alert(hex_md5(this.innerHTML));	
							    }
							}

							element.onmouseover = function() {
							    var context = elementFuncHashMap.get(hex_md5(this.innerHTML));
							    if (context && typeof(context.funcMouseOver) == 'function') {
							        context.funcMouseOver();
							    }
							    if(context) {
							    	context.thisContext.getText(this);
							    } else {
							    	//alert(hex_md5(this.innerHTML));
							    }
							}

							//element.onmouseover = this.getText;
							//element.onmouseout = this.clearTextbg;
						}
					}
				} catch (e) {}
		},

		simpleModel: function() {
			INSTANCE.isSimplifiedModel = INSTANCE.isSimplifiedModel = "1";
		},
		raditionalModel: function() {
			INSTANCE.isSimplifiedModel = INSTANCE.isSimplifiedModel = "0";
		},
		pinyinControl: function() {
			INSTANCE.pinYing = INSTANCE.pinYing == "0" ? "1" : "0";
			//SetCookie("pinYing", INSTANCE.pinYing);
			/*
			this.pinyinState = this.pinyinState ? false : true;
			if (this.pinyinState) {
				document.getElementById("pinyinbuttonbox").firstChild.innerHTML = "关闭拼音功能";
			} else {
				document.getElementById("pinyinbuttonbox").firstChild.innerHTML = "开启拼音功能";
			}*/
		},
		firstRun: false,
		textbgState: false,
		textbg: function() {
			this.textbgState = this.textbgState ? false : true;
			document.getElementById("textbgbuttonbox").getElementsByTagName("a")[0].innerHTML =

			this.textbgState ? "关闭标记功能" : "开启标记功能";
		},
		clearTextbgNoParam: function() {
			toolbar.Function.textTips.clearTextbg(this);
		},
		clearTextbg: function(element) {
			var ele = element || this;
			ele.style.backgroundColor = "";
			ele.style.color = "";
		},
		mainMethod: function() {
			//if(!ABTConfig.textTips.functionSwitch||getE.error){return;};
			if (!this.textGetState) {
				if ($("#gettextmessagebox").length > 0) {

					this.textGetState = true;
					document.body.style.paddingBottom = 160 + "px";

					$("#gettextmessagebox").show();
					foldToolBar();
					toggleMsgBoxBtn();
					$("#jhelper_btn01").get(0).focus();
					return;
				}
				var newMessageBox = document.createElement("div");
				newMessageBox.setAttribute("id", "gettextmessagebox");
				newMessageBox.innerHTML = messageboxText;
				document.body.insertBefore(newMessageBox, $(mainBoxID).get(0));
				document.body.style.paddingBottom = 160 + "px";
				document.body.style.width = "100%";
				document.body.style.float = "left";
				//document.getElementById("pinyinbuttonbox").firstChild.focus();
				this.getTextNode($(mainBoxID).get(0));

				this.AddTag();
				this.getEvent();
				this.textGetState = true;
				//bindPageJS();
				bindMessageBoxJS();
				foldToolBar();
				toggleMsgBoxBtn();
				$("#jhelper_btn01").get(0).focus();
			} else {
				$("#gettextmessagebox").hide();
				document.body.style.paddingBottom = 0 + "px";
				document.body.style.overflow = "";
				this.textGetState = false;
				toggleMsgBoxBtn();
				$("#screen_input").get(0).focus();
			}
			INSTANCE.textTips = this.textGetState ? "1" : "0";
			SetCookie("textTips", this.textGetState ? "1" : "0");
			//toolbar.cookie.setCookie(this.cookieName,this.textGetState?1:0);
		},
		getIframeTextNode: function() {
			// 设置iframe样式
			var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
			if (!iframeNode) {
				return;
			}
			for (var i = 0; i < iframeNode.length; i++) {
				var iframeObject = iframeNode[i].contentWindow;
				try {
					var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0];
					this.getTextNode(iFrameAllNode);
				} catch (e) {
				//alert(e);
				}
			}
		}
	}
}
//---------------------------文字提示定义结束-----------------------------//

//---------------------------页面js定义开始-----------------------------//
var toolBarFoldFlag = 0;
var openMsgBoxFlag = 0;

function toggleMsgBoxBtn() {
	if (openMsgBoxFlag == 0) {
		openMsgBox();
	} else {
		closeMsgBox();
	}
}

function openMsgBox() {
	openMsgBoxFlag = 1;
	$("#screen_input").attr("title", "关闭文字放大阅读屏幕");
	$("#screen").attr('class', 'jhelper_open');
	createNodeDiv("wcagnav", "屏幕辅助已开启");
}

function closeMsgBox() {
	openMsgBoxFlag = 0;
	$("#screen_input").attr("title", "开启文字放大阅读屏幕");
	$("#screen").attr('class', 'jhelper_close');
	createNodeDiv("wcagnav", "屏幕辅助已关闭");
}

function bindPageJS() {
	// 绑定页面对比度效果脚本
	doorList('tab');
	doorList('language');
	doorList('txt');

	// 绑定辅助线开关效果脚本
	$("#line").toggle(function() {
			$("#line_input").attr('title', '关闭辅助线');
			$(this).attr('class', 'jhelper_open');
		},
		function() {
			$("#line_input").attr('title', '打开辅助线');
			$(this).attr('class', 'jhelper_close');
		});

	$("#spell").toggle(function() {
			$(this).attr('class', 'jhelper_open')
		},
		function() {
			$(this).attr('class', 'jhelper_close')
		});

	//$("#screen").click(toggleMsgBoxBtn);

	$("#txt").toggle(function() {
			txtName.innerHTML = "文字"
			$(this).attr('class', 'jhelper_open')
			$("#txt_input").attr('title', '转换图文模式网页')
		},
		function() {
			txtName.innerHTML = "页面"
			$(this).attr('class', 'jhelper_close')
			$("#txt_input").attr('title', '转换纯文本模式网页')
		});

	$("#fold").click(function() {
		if (toolBarFoldFlag == 0) {
			foldToolBar();
		} else {
			unfoldToolBar();
		}
	});
}

// 折叠顶部工具条

function foldToolBar() {
	$("#fold").get(0).setAttribute("title", "展开工具条");
	$(".disabilitiesNav").attr('class', 'disabilitiesNavFold');
	toolBarFoldFlag = 1;
	document.body.style.paddingTop = '0px'; //wcagNavDiv.get(0).offsetHeight + "px";
}
// 折叠顶部工具条

function unfoldToolBar() {
	$("#fold").get(0).setAttribute("title", "折叠工具条");
	$(".disabilitiesNavFold").attr('class', 'disabilitiesNav');
	toolBarFoldFlag = 0;
	document.body.style.paddingTop = '34px';
}

// 初始化文字提示框界面

function bindMessageBoxJS() {
	doorList('language');

	$("#spell").toggle(function() {
			$(this).attr('class', 'jhelper_open')
		},
		function() {
			$(this).attr('class', 'jhelper_close')
		});
}

function doorList(id) {
	var curentId = 0;
	$("#" + id + " .font_titleBar li:eq(0)").addClass("disabilitiesNow");
	$("#" + id + " .door:eq(0)").show();
	$("#" + id + " .font_titleBar li").click(function() {
		if ($(this).attr('class') == 'link') {
			return;
		}
		if (curentId != $(this).index()) {
			curentId = $(this).index();
			var curentDiv = $("#" + id + " div div.door").eq(curentId);
			var curentHeight = $(curentDiv).height();
			$("#" + id + " .font_titleBar li").removeClass("disabilitiesNow");
			$(this).addClass("disabilitiesNow");

		};
	});
}
//---------------------------页面js定义结束-----------------------------//


function initJSHelperEvent() {
	addKeyListenerToIframe();
}
// 初始化工具模块

function initJSHelper() {
	debugAlert("initJSHelper");
	declareConfig();
	mainBoxID = "#" + JHelperConfig.mainBox;
	// 初始化
	initTextTips();
	initData();
	debugAlert(toolbar.Function.textTips);
	// 监听事件
	initKeyEventListener();
	// 恢复上次状态
	setTimeout(restoreStatus, 1000);
}
//------------------------------------------------------------------------------------
//--------------------------------------主方法开始结束-----------------------------------

// 初始化数据

function initData() {
	INSTANCE.openFlag = getCookie("openFlag");
	if (!INSTANCE.openFlag) {
		INSTANCE.openFlag = "0";
	}
	INSTANCE.textFlag = getCookie("textFlag");
	//if (!INSTANCE.textFlag) {
	INSTANCE.textFlag = "0";
	//}
	INSTANCE.zoomValue = parseInt(getCookie("zoomValue"));
	debugAlert("INSTANCE.zoomValue:" + INSTANCE.zoomValue);
	if (INSTANCE.zoomValue > 2 || INSTANCE.zoomValue <= 0 || isNaN(INSTANCE.zoomValue)) {
		INSTANCE.zoomValue = 1;
	}
	INSTANCE.fontValue = parseInt(getCookie("fontValue"));
	//if (INSTANCE.fontValue > 32 || INSTANCE.fontValue < 16 || isNaN(INSTANCE.fontValue)) {
	INSTANCE.fontValue = 16;
	//}
	INSTANCE.colorFlag = getCookie("colorFlag");
	if (!INSTANCE.colorFlag) {
		INSTANCE.colorFlag = "0";
	}
	INSTANCE.lineFlag = getCookie("lineFlag");
	if (!INSTANCE.lineFlag) {
		INSTANCE.lineFlag = "0";
	}
	INSTANCE.textTips = getCookie("textTips");
	if (!INSTANCE.textTips) {
		INSTANCE.textTips = "0";
	}

	INSTANCE.isSimplifiedModel = getCookie("isSimplifiedModel");
	if (!INSTANCE.isSimplifiedModel) {
		INSTANCE.isSimplifiedModel = "1";
	}
	INSTANCE.pinYing = getCookie("pinYing");
	if (!INSTANCE.pinYing) {
		INSTANCE.pinYing = "0";
	}
	INSTANCE.browser = browserFlag();
}

// 恢复到上次的状态

function restoreStatus() {
    $.fn.extend({
        toggle: function (fn1, fn2) {
            $(this).bind("click", function () {
                if ($(this).attr("lsfAlreadyToggle") && $(this).attr("lsfAlreadyToggle") == "1") {
                    $(this).attr("lsfAlreadyToggle", "0");
                    if (fn2)
                        fn2.call(this);
                    else
                        $(this).show();
                }
                else {
                    $(this).attr("lsfAlreadyToggle", "1");
                    if (fn1)
                        fn1.call(this);
                    else
                        $(this).hide();
                }
            });
        }
    });
	//工具条初始化	
	/*
	if (INSTANCE.textFlag == "1") {
		textFunction();
	}
	if (INSTANCE.zoomValue > 1) {
		pageFunction(INSTANCE.zoomValue);
	}
	if (INSTANCE.fontValue > 16) {
		fontFunction(INSTANCE.fontValue);
	}
	if (INSTANCE.colorFlag != "0") {
		asyDoSetColorFunction(INSTANCE.colorFlag);
	}
	if (INSTANCE.lineFlag == "1") {
		lineFunction();
	}*/
	if (INSTANCE.openFlag == "1" || (typeof(JHelperConfig.AutoOpen) != "undefined") && (JHelperConfig.AutoOpen == "1")) {
		openToolBar();
	}
	debugAlert("INSTANCE.openFlag:" + INSTANCE.openFlag);
}

// 监听key事件

function initKeyEventListener() {
	// 事件监听
	document.onkeydown = function KeyDownEvent(e) {
		//快捷键获取
		var currkey = 0,
			e = e || event || window.event;
		currkey = e.keyCode || e.which || e.charCode;
		//快捷键键盘监听
		accessKeyboardListener(currkey, e);
		//工具条键盘监听
		toolBarKeyDownEvent(currkey, e);
	}
}
/*
 * 控制打开／关闭辅助工具条
 */

function toggleToolBar() {
	if(!checkValid()) {
		return;
	}
	if (INSTANCE.openFlag == "0") {
		openToolBar();
		INSTANCE.openFlag = "1";
		SetCookie("openFlag", "1");
	} else {
		INSTANCE.openFlag = "0";
		SetCookie("openFlag", "0");
		closeToolBar();
		setTimeout(resetNavToolbar, 1000);
		//resetNavToolbar();
	}
}
function checkValid() {
	var host = document.domain;
	if(1) {
		return true;
		}
	else {
		return true;
	}
}
/*
 * 打开辅助工具条
 */

function openToolBar() {

	var wcagNavDiv = $("#wcagnav");
	if (wcagNavDiv.length == 0) {
		creatWcagNav();
		wcagNavDiv = $("#wcagnav");
	}

	wcagNavDiv.show(1000, function() {
		wcagNavDiv.get(0).style.display = "block";
		document.body.style.paddingTop = wcagNavDiv.get(0).offsetHeight + "px";
	});

	INSTANCE.openFlag == "1";
	SetCookie("openFlag", "1");


	if (toolbar.Function.textTips.textGetState == true) {
		$("#gettextmessagebox").show();
	}
	createNodeDiv("wcagnav", "工具条已开启,帮助请按ALT+1");
	//wcagNavDiv.style.display = "block";
	//document.body.style.paddingTop = wcagNavDiv.offsetHeight + "px";
}

/*
 * 关闭辅助工具条
 */

function closeToolBar() {
	var wcagNavDiv = $("#wcagnav");
	wcagNavDiv.hide(1000, function() {
		wcagNavDiv.get(0).style.display = "none";
		document.body.style.paddingTop = wcagNavDiv.get(0).offsetHeight + "px";
	});

	$("#gettextmessagebox").hide();
	createNodeDiv("wcagnav", "工具条已关闭");
}

/*
 * 创建辅助工具条
 */

function creatWcagNav() {

	var toolbarinnerText = getToolbarInnerText();

	//工具条创建
	var navToolbarDiv = document.createElement("div");
	navToolbarDiv.setAttribute("id", "wcagnav");
	navToolbarDiv.style.display = "none";
	navToolbarDiv.innerHTML = toolbarinnerText;
	document.body.insertBefore(navToolbarDiv, document.body.firstChild);

	// 绑定页面效果脚本
	bindPageJS();
}

function getToolbarInnerText() {

	var textHTML = "";
	// 顶部区域
	textHTML += "<div class=\"disabilitiesNav\">";
        // 解决ie6下拉框浮在工具条上的方法
        textHTML += "<iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;filter:alpha(opacity=0);\"></iframe>";
	textHTML += "<div class=\"disabilitiesMain\"  id=\"tab\">";
	textHTML += "<div class=\"disabilitiesContent\">";
	textHTML += "<ul class=\"disabilitiesN1\">";
	textHTML += "<span id=\"txtName\">页面</span>";
	textHTML += "<li class=\"jhelper_btn01\"><input id=\"jhelper_zoom_in\" type=\"button\" title=\"放大页面\" onclick=\"openPageFunction(0);\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	textHTML += "<li class=\"jhelper_btn02\"><input id=\"jhelper_zoom_out\" type=\"button\" title=\"缩小页面\" onclick=\"openPageFunction(1);\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	textHTML += "</ul>";
	textHTML += "<ul class=\"disabilitiesN2 font_titleBar\">";
	textHTML += "<span>配色</span>";
	textHTML += "<li class=\"jhelper_btn01\"><input type=\"button\" title=\"页面无配色\" onclick=\"asySetColorFunction('0');\"class=\"disabilitiesM1\"/><em class=\"disabilitiesB1\"></em></li>";
	textHTML += "<li class=\"jhelper_btn02\"><input type=\"button\" title=\"蓝底黄字配色\" onclick=\"asySetColorFunction('1');\"class=\"disabilitiesM2\"/><em class=\"disabilitiesB2\"></em></li>";
	textHTML += "<li class=\"jhelper_btn03\"><input type=\"button\" title=\"黄底蓝字配色\" onclick=\"asySetColorFunction('2');\"class=\"disabilitiesM3\"/><em class=\"disabilitiesB3\"></em></li>";
	textHTML += "<li class=\"jhelper_btn04\"><input type=\"button\" title=\"黑底黄字配色\" onclick=\"asySetColorFunction('3');\"class=\"disabilitiesM4\"/><em class=\"disabilitiesB4\"></em></li>";
	textHTML += "<li class=\"jhelper_btn05\"><input type=\"button\" title=\"白底黑字配色\" onclick=\"asySetColorFunction('4');\"class=\"disabilitiesM5\"/><em class=\"disabilitiesB5\"></em></li>";
	textHTML += "</ul>";
	textHTML += "<ul class=\"disabilitiesN3\">";
	textHTML += "<span>辅助线</span>";
	textHTML += "<li id=\"line\"><input id='line_input' type=\"button\" title=\"打开辅助线\" onclick=\"openLineFunction()\"/></li>";
	textHTML += "</ul>";
	textHTML += "<ul class=\"disabilitiesN4\">";
	textHTML += "<li class=\"jhelper_btn01\"><input type=\"button\" title=\"重置页面\" onclick=\"resetNavToolbar();\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	textHTML += "<li class=\"jhelper_btn02\"><input type=\"button\" title=\"折叠工具条\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\" id=\"fold\"/></li>";
	textHTML += "</ul>";
	textHTML += "</div>";
	textHTML += "</div>";
	textHTML += "<div class=\"disabilitiesTopBg\"></div>";
	textHTML += "</div>";

	// 右侧区域
	textHTML += "<div class=\"disabilitiesRight\">";
	textHTML += "<ul>"
	textHTML += "<li id=\"screen\"><input id='screen_input' type=\"button\" class=\"jhelper_btn01\" title=\"开启文字放大阅读屏幕\" onclick=\"toolbar.Function.textTips.mainMethod();\"/></li>";
	textHTML += "<li id=\"txt\"><input id='txt_input' type=\"button\" class=\"jhelper_btn02\" title=\"转换纯文本模式网页\" onclick=\"openTextFunction();\"/></li>";
	textHTML += "<li><input type=\"button\" class=\"jhelper_btn03\" title=\"打开无障碍工具条帮助\" onclick=\"navToolbarHelp();\"/></li>";
	textHTML += "<li><input type=\"button\" class=\"jhelper_btn04\" title=\"关闭无障碍工具条\" onclick=\"toggleToolBar();\"/></li>";
	textHTML += "</ul>";
	textHTML += "</div>"

	return textHTML;
}

//---------------------------纯文本通道功能开始------------------------//
//执行函数

function openTextFunction() {
	if (INSTANCE.textFlag == "0") {
		textFunction();
		// 取消页面放大
		pageFunction(1);

		INSTANCE.textFlag = "1";
		SetCookie("textFlag", "1");

		$("#jhelper_zoom_in").get(0).setAttribute("title","放大文字");
		$("#jhelper_zoom_out").get(0).setAttribute("title","缩小文字");

		// 设置对比色
		if (INSTANCE.colorFlag != "0") {
			asyDoSetColorFunction(INSTANCE.colorFlag);
		}
	} else {
		//navgationIframeBack();
		INSTANCE.textFlag = "0";
		SetCookie("textFlag", "0");
		resetNavToolbar();
		//window.location.href = window.location.href;
		//window.location.reload();
	}
}
//纯文本功能实现

function textFunction() {
	//navgationIframe();
	changeiFrame();
	changeImage();
	changeStyle();
	changeiZXFT();
}
//替换、清除页面样式

function changeStyle() {
	//替换样式
	var linkStyle = document.getElementsByTagName("link");
	for (i = 0; i < linkStyle.length; i++) {
		if (linkStyle[i].getAttribute("href") != serverUrl + "jhelper_tool_style.css"
		&& linkStyle[i].getAttribute("href") != "/newlib/css/jhelper_no_clear.css") {
			linkStyle[i].setAttribute("href", textStyleCSS);
		}
	}
	//清除页面样式
	var allNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("*");
	for (var j = 0; j < allNode.length; j++) {
		allNode[j].style.cssText = "";
	}
	for (var k = 0; k < allNode.length; k++) {
		allNode[k].style.height = "auto";
	}
}
//用文字替换页面图片

function changeImage() {
	var allImage = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("img");
	var length = allImage.length;
	for (i = 0; i < allImage; i++) {
		var allImageAlt = allImage[i].getAttribute("alt");
		if (allImageAlt == "" || allImageAlt == null) {
			allImageAlt = allImage[i].getAttribute("title");
		}
		var newImageNode = document.createElement("span");
		newImageNode.innerHTML = allImageAlt;
		allImage[i].parentNode.insertBefore(newImageNode, allImage[i]);
	}
	while (allImage.length) {
		allImage[0].parentNode.removeChild(allImage[0]);
	}
}
//处理页面中的iframe

function changeiFrame() {
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}

	var length = iframeNode.length;
	for (var i = 0; i < length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		try {
			var iFrameHTML = iframeObject.document.body.innerHTML;
			var divForiFrame = document.createElement("div");
			divForiFrame.setAttribute("id", "iframeDiv_" + i);
			divForiFrame.innerHTML = iFrameHTML;
			iframeNode[i].parentNode.insertBefore(divForiFrame, iframeNode[i]);
		} catch (e) {}
	}
	while (iframeNode.length) {
		iframeNode[0].parentNode.removeChild(iframeNode[0]);
	}
}

//处理中国上海特有在线访谈滚动

function changeiZXFT() {
	var ZXFT_ID = document.getElementById("interview_btn");
	if (!ZXFT_ID) {
		return;
	}
	ZXFT_ID.setAttribute("id", "interview_bt");
}
//---------------------------纯文本通道功能结束------------------------//
//---------------------------页面缩放功能开始--------------------------//
//执行函数

function openPageFunction(flag) {

	// 文字模式下 变为缩放文字
	if (INSTANCE.textFlag == "1") {
		openFontFunction(flag);
		return;
	}

	if (flag == "0") {
		INSTANCE.zoomValue = INSTANCE.zoomValue + 0.2;
		if (INSTANCE.zoomValue > 2) {
			INSTANCE.zoomValue = 2;
		}
	} else {
		INSTANCE.zoomValue = INSTANCE.zoomValue - 0.2;
		if (INSTANCE.zoomValue < 1) {
			INSTANCE.zoomValue = 1;
		}
	}
	debugAlert("INSTANCE.zoomValue:" + INSTANCE.zoomValue);
	SetCookie("zoomValue", INSTANCE.zoomValue);
	pageFunction(INSTANCE.zoomValue);
}
//缩放功能实现

var rabitPx = 1;
function pageFunction(value) {
	debugAlert("pageFunction 1");
	if(rabitPx == 1) {
	    rabitPx = 0;
	} else {
		rabitPx = 1;
	}

	//console.log("zoom scale:" + value);
	if (value == 1) {
		//window.location.href = window.location.href;
		//window.location.reload();
		//return;
	}
	if (INSTANCE.browser.safari || INSTANCE.browser.chrome) {
		$(mainBoxID).css({
			"-webkit-transform-origin": "top left",
			"-webkit-transform": "scale(" + value + ")",
			"padding":rabitPx +"px"
		});
		//document.getElementById(mainBox).style.cssText = "-webkit-transform-origin:top left;-webkit-transform:scale(" + value + ")";
	} else if (INSTANCE.browser.firefox) {
		$(mainBoxID).css({
			"-moz-transform-origin": "top left",
			"-moz-transform": "scale(" + value + ")",
			"padding":rabitPx +"px"
		});
		//document.getElementById(mainBox).style.cssText = "-moz-transform-origin:top left;-moz-transform:scale(" + value + ")";
	} else if (INSTANCE.browser.opera) {
		$(mainBoxID).css("-o-transform:scale(" + value + ")");
		//document.getElementById(mainBox).style.cssText = "-o-transform:scale(" + value + ")";
	} else {
		if (document.body.offsetWidth > document.getElementById(JHelperConfig.mainBox).offsetWidth * value) {
			document.getElementById(JHelperConfig.mainBox).style.cssText = "position:absolute;left:0%;margin:0px;";
			//document.getElementById(JHelperConfig.mainBox).style.marginLeft = 0 - Math.round(document.getElementById(JHelperConfig.mainBox).offsetWidth * value / 2) + "px";
			document.getElementById(JHelperConfig.mainBox).style.marginLeft = (document.body.offsetWidth - Math.round(document.getElementById(JHelperConfig.mainBox).offsetWidth * value)) / 2 + "px";
		} else {
			$(mainBoxID).css("position:absolute;left:0px;margin:0px;");
			document.getElementById(JHelperConfig.mainBox).style.cssText = "position:absolute;left:0px;margin:0px;";
		}
		//$(mainBoxID).css("room:" + value);
		document.getElementById(JHelperConfig.mainBox).style.zoom = value;
	}

	//console.log("zoom scale:" + value);
}
//---------------------------页面缩放功能结束--------------------------//
//---------------------------文字缩放功能结束----------------------------//

function openFontFunction(flag) {
	debugAlert("fontFunction 1");
	if (flag == "0") {
		INSTANCE.fontValue = parseInt(INSTANCE.fontValue) + 4;
		if (INSTANCE.fontValue > 32) {
			INSTANCE.fontValue = 32;
		}
	} else {
		INSTANCE.fontValue = parseInt(INSTANCE.fontValue) - 4;
		if (INSTANCE.fontValue < 16) {
			INSTANCE.fontValue = 16;
		}
	}
	SetCookie("fontValue", INSTANCE.fontValue);
	fontFunction(INSTANCE.fontValue);
}
//文字缩放功能实现

function fontFunction(sizeValue) {

	if (sizeValue == 16) {
		$(mainBoxID).css({
			"fontSize": "",
			"lineHeight": "",
			"height": ""
		});

		$("table").css({
			"fontSize": "",
			"lineHeight": "",
			"height": ""
		});

		// 设置iframe样式
		var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
		if (!iframeNode) {
			return;
		}
		for (var i = 0; i < iframeNode.length; i++) {
			var iframeObject = iframeNode[i].contentWindow;
			try {
				var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
				iframeObject.document.getElementsByTagName("body")[0].style.fontSize = "";
				iframeObject.document.getElementsByTagName("body")[0].style.lineHeight = "";
				iframeObject.document.getElementsByTagName("body")[0].style.height = "";
				for (var j = 0; j < iFrameAllNode.length; j++) {
					iFrameAllNode[j].style.fontSize = "";
					iFrameAllNode[j].style.lineHeight = "";
					iFrameAllNode[j].style.height = "";
				}
			} catch (e) {}
		}

	} else {

		$("table").css({
			"fontSize": sizeValue + "px",
			"lineHeight": "1.8em", //(parseInt(sizeValue) + 2) + "px",
			"height": "auto"
		});

		$(mainBoxID).css({
			"fontSize": sizeValue + "px",
			"lineHeight": "1.8em", //(parseInt(sizeValue) + 2) + "px",
			"height": "auto"
		});

		// 设置iframe样式
		var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
		if (!iframeNode) {
			return;
		}
		for (var i = 0; i < iframeNode.length; i++) {
			var iframeObject = iframeNode[i].contentWindow;
			try {
				var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
				iframeObject.document.getElementsByTagName("body")[0].style.fontSize = sizeValue + "px";
				iframeObject.document.getElementsByTagName("body")[0].style.lineHeight = (parseInt(sizeValue) + 2) + "px";
				iframeObject.document.getElementsByTagName("body")[0].style.height = "auto";
				for (var j = 0; j < iFrameAllNode.length; j++) {
					iFrameAllNode[j].style.fontSize = sizeValue + "px";
					iFrameAllNode[j].style.lineHeight = "1.8em", //(parseInt(sizeValue) + 2) + "px",
					iFrameAllNode[j].style.height = "auto";
				}
			} catch (e) {}
		}
	}
}
//---------------------------文字缩放功能结束----------------------------//

//---------------------------对比度功能开始----------------------------//
//执行函数

function setColorFunction() {
	var mode = parseInt(INSTANCE.colorFlag);
	switch (mode) {
		case 0:
			changeColorStyle("", "", "");
			break;
		case 1:
			changeColorStyle("#0000ff", "none", "#ffff00");
			break;
		case 2:
			changeColorStyle("#fefecc", "none", "#0000ff");
			break;
		case 3:
			changeColorStyle("#000000", "none", "#ffff00");
			break;
		case 4:
			changeColorStyle("#ffffff", "none", "#000000");
			break;

		default:
			break;
	}
}

function asyDoSetColorFunction(mode) {
	INSTANCE.colorFlag = mode;
	SetCookie("colorFlag", mode);

	setTimeout(setColorFunction, 10);
}

function asySetColorFunction(mode) {
	if (INSTANCE.colorFlag === mode)
		return;

	asyDoSetColorFunction(mode);
}

function changeColorStyle(bgColor, bgImage, color) {
	$(mainBoxID).find("*:not(#wcagnav)").css({
		"backgroundColor": bgColor,
		"backgroundImage": bgImage,
		"color": color
	});


	// 设置iframe样式
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		changeIframeColor(bgColor,bgImage,color,iframeObject);
		
		/*try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = bgImage;
			iframeObject.document.getElementsByTagName("body")[0].style.color = color;
			for (var j = 0; j < iFrameAllNode.length; j++) {
				iFrameAllNode[j].style.backgroundColor = bgColor;
				iFrameAllNode[j].style.backgroundImage = bgImage;
				iFrameAllNode[j].style.color = color;
			}
		} catch (e) {
			//alert(e);
		}*/
	}
}

function changeIframeColor(bgColor, bgImage, color, iframeObject) {
	try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = bgImage;
			iframeObject.document.getElementsByTagName("body")[0].style.color = color;
			for (var j = 0; j < iFrameAllNode.length; j++) {
				if(iFrameAllNode[j].tagName == 'iframe' || iFrameAllNode[j].tagName=='IFRAME') {
					changeIframeColor(bgColor,bgImage,color,iFrameAllNode[j].contentWindow);
				} else {
					iFrameAllNode[j].style.backgroundColor = bgColor;
					iFrameAllNode[j].style.backgroundImage = bgImage;
					iFrameAllNode[j].style.color = color;
				}
			}
		} catch (e) {
			//alert(e);
		}
}

function openColorFunction() {
	debugAlert("openColorFunction 1");
	if (INSTANCE.colorFlag == "0") {

		colorFunction();

		INSTANCE.colorFlag = "1";
		SetCookie("colorFlag", "1");

		debugAlert("open color function");

	} else {

		closeColorFunction();

		INSTANCE.colorFlag = "0";
		SetCookie("colorFlag", "0");

		debugAlert("close color function");
	}
}

function closeColorFunction() {
	debugAlert("closeColorFunction start");

	iframeClearColorFunction();
	$(mainBoxID).find("*:not(:#wcagnav)").css({
		"backgroundColor": "",
		"backgroundImage": "",
		"color": ""
	});
	debugAlert("closeColorFunction end");
}
//高对比度功能实现

function colorFunction() {

	debugAlert("colorFunction 1");

	iframeColorFunction();
	$(mainBoxID).find("*:not(:#wcagnav)").css({
		"backgroundColor": "#000",
		"backgroundImage": "none",
		"color": "#FFF"
	});
}

//iframe对比度处理

function iframeColorFunction() {
	var iframeNode = document.getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = "#000";
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = "none";
			iframeObject.document.getElementsByTagName("body")[0].style.color = "#FFF";
			for (j = 0; j < iFrameAllNode.length; j++) {
				iFrameAllNode[j].style.backgroundColor = "#000";
				iFrameAllNode[j].style.backgroundImage = "none";
				iFrameAllNode[j].style.color = "#FFF";
			}
		} catch (e) {}
	}
}

// iframe 去掉高对比度

function iframeClearColorFunction() {
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = "";
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = "";
			iframeObject.document.getElementsByTagName("body")[0].style.color = "";
			for (j = 0; j < iFrameAllNode.length; j++) {
				iFrameAllNode[j].style.backgroundColor = "";
				iFrameAllNode[j].style.backgroundImage = "";
				iFrameAllNode[j].style.color = "";
			}
		} catch (e) {}
	}
}
//---------------------------对比度功能结束----------------------------//

//---------------------------辅助线功能开始---------------------------//
//辅助线执行函数

function openLineFunction() {
	debugAlert("openLineFunction 1 :" + INSTANCE.lineFlag);
	if (INSTANCE.lineFlag == "0") {
		INSTANCE.lineFlag = "1";
		lineFunction();

		//SetCookie("lineFlag", "1");
	} else {

		document.getElementById('lineX').style.display = 'none';
		document.getElementById('lineY').style.display = 'none';
		document.onmousemove = "";

		INSTANCE.lineFlag = "0";
		//SetCookie("lineFlag", "0");
	}
}
//辅助线功能实现，辅助线移动工具:页面出现2条辅助功能线，用来从水平和垂直两方面校对页面文本。

function lineFunction() {
	debugAlert("lineFunction 1");
	//初始化辅助线
	var lineDivHTML = "<div id=\"lineX\" style=\"border-top:5px red solid;position:absolute;width:100%;height:4px;left:0px;top:0px;font-size:0px;line-height:0px;z-index:99999;\"></div>";
	lineDivHTML = lineDivHTML + "<div id=\"lineY\" style=\"border-left:5px red solid;position:absolute;width:4px;height:100%;top:0px;font-size:0px;line-height:0px;z-index:99998;\"></div>";

	var lineDiv = document.getElementById("lineDiv");
	if (!lineDiv) {
		lineDiv = document.createElement("div");
		lineDiv.setAttribute("id", "lineDiv");
		lineDiv.setAttribute("style", "width:100%;height:0px;line-height:0px;font-size:0px;top:0px;left:0px;");
		lineDiv.innerHTML = lineDivHTML;
		document.body.insertBefore(lineDiv, document.body.firstChild);
	}

	document.getElementById('lineX').style.display = 'block';
	document.getElementById('lineY').style.display = 'block';
	debugAlert("onmousemove");
	document.onmousemove = mouseLineMove;
	//$("html").bind("mousemove", mouseLineMove);
	//$("iframe").bind("mousemove", mouseLineMove);
	setIframeOnMouseMoveEevent();
}

function setIframeOnMouseMoveEevent()
{
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		//alert("count:"+iframeNode.length + "/" + i);
		var iframeObject = iframeNode[i].contentWindow;
		bindOnMouseEvent(iframeObject);
	}
} 
function bindOnMouseEvent(iframeObject)
{
	try {
		iframeObject.document.onmousemove = mouseIframeLineMove;
		var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
		for (var j = 0; j < iFrameAllNode.length;j++ ) {
			if(iFrameAllNode[j].tagName == 'iframe' || iFrameAllNode[j].tagName=='IFRAME') {
				//alert(iFrameAllNode[j].tagName +" " + j + " count:" + iFrameAllNode.length);
				var innerIframeObject = iFrameAllNode[j].contentWindow;
				bindOnMouseEvent(innerIframeObject);
			}
		}
	} catch (e) {}
}

//当前鼠标位置判断
var browserToolBarHeight = 0;
function mouseLineMove(e) {
	//console.log(e.screenX + "  Y:" + e.screenY);
	e = e || event || window.event;
	var lineValueX = e.pageX;
	var lineValueY = e.pageY;

	if (!lineValueX && !lineValueY) {
		lineValueX = e.clientX;
		lineValueY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
	}

	document.getElementById('lineX').style.top = lineValueY + 5 + "px";
	document.getElementById('lineY').style.height = document.documentElement.scrollHeight + "px";
	document.getElementById('lineX').style.width = document.documentElement.scrollWidth + "px";
	document.getElementById('lineY').style.left = lineValueX + 5 + "px";
	
	browserToolBarHeight = e.screenY - e.clientY;
	//console.log("browserToolBarHeight:" + browserToolBarHeight);
}
function mouseIframeLineMove(e) {
	e = e || event || window.event;
	var lineValueX = e.screenX;
	var lineValueY = e.screenY - browserToolBarHeight + (document.documentElement.scrollTop || document.body.scrollTop);;

	document.getElementById('lineX').style.top = lineValueY + 5 + "px";
	document.getElementById('lineY').style.height = document.documentElement.scrollHeight + "px";
	document.getElementById('lineX').style.width = document.documentElement.scrollWidth + "px";
	document.getElementById('lineY').style.left = lineValueX + 5 + "px";
}
//---------------------------辅助线功能结束---------------------------//
//---------------------------帮组功能开始---------------------------//

function navToolbarHelp() {
	window.open(JHelperConfig.wzaHelp);
}
//---------------------------帮组功能结束---------------------------//
//---------------------------重置功能开始-----------------------------//

function resetNavToolbar() {
	delCookie("textFlag");
	delCookie("zoomValue");
	delCookie("fontValue");
	delCookie("colorFlag");
	delCookie("lineFlag");
	window.location.href = window.location.href;
	window.location.reload();
}
//---------------------------重置功能结束-----------------------------//
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//工具条监听函数

function toolBarKeyDownEvent(sKeycode, e) {
	if (sKeycode == 74 && e.altKey && !e.shiftKey && !e.ctrlKey) {
		//Alt+J:工具条开关
		toggleToolBar();
	} if (sKeycode == 49 && e.altKey && !e.shiftKey && !e.ctrlKey) {
		//Alt+1:打开帮助
		navToolbarHelp();
	} else if (sKeycode == 74 && e.altKey && e.shiftKey && !e.ctrlKey) {
		//Alt+Shift+J:纯文本开关
		openTextFunction();
	}
}


//----------------------------------------------------------------------
//无障碍快捷键JS
//Version：V0.01
//Author：action
//Date：2011-12-16
//----------------------------------------------------------------------

//键盘键
//大键盘 1
var NumOneKey = '49';
//大键盘 2
var NumTwoKey = '50';
//大键盘 3
var NumThreeKey = '51';
//大键盘 4
var NumFourKey = '52';
//大键盘 5
var NumFiveKey = '53';
//大键盘 6
var NumSixKey = '54';
//字母键 z
var GroupTagKey = '90';

//区域  ID
//无障碍操作说明ID//读屏软件语音接口：已定位到无障碍帮助
//var AccessHelp = JHelperConfig.AccessHelp;//'accesshelp';
var AccessHelpTitle = "已定位到无障碍帮助";

//主导航区ID//读屏软件语音接口：已定位到网站导航
//var MainNavigation = JHelperConfig.MainNavigation;//'nav';
var MainNavigationTitle = "已定位到网站导航";

//中国上海服务引导区//读屏软件语音接口：已跳转到网站服务引导区
//var HeaderGuide = JHelperConfig.HeaderGuide;//'headerGuideNav';
var HeaderGuideTitle = "已跳转到网站服务引导区";

//主要内容区ID//读屏软件语音接口：已跳转到主要内容区
//var MainContent = JHelperConfig.MainContent;//'mainbox';
var MainContentTitle = "已跳转到主要内容区";

//网站地图区ID//读屏软件语音接口：已跳转到网站地图
//var SiteMap = JHelperConfig.SiteMap;//'copyright';
var SiteMapTitle = "已跳转到网站地图区";

//搜索区ID//读屏软件语音接口：已跳转到搜索区域
//var SearchForm = JHelperConfig.SearchForm;//'searchbox';
var SearchFormTitle = "已跳转到搜索区域";

//头部内容区ID//读屏软件语音接口：已跳转到头部内容区域
//var HeadContent = JHelperConfig.HeadContent;//'header';
var HeadContentTitle = "已跳转到头部内容区域";

//底部内容区ID//读屏软件语音接口：已跳转到底部内容区域
//var BottomContent = JHelperConfig.BottomContent;//'copyright';
var BottomContentTitle = "已跳转到底部内容区域";

//网页左栏区ID//读屏软件语音接口：已跳转网页左栏区域
//var LeftContent = JHelperConfig.LeftContent;//'leftbox';
var LeftContentTitle = "已跳转网页左栏区域";

//网页中间区ID//读屏软件语音接口：已跳转到中间结构区域
//var MiddleContent = JHelperConfig.MiddleContent;//'leftbox';
var MiddleContentTitle = "已跳转到中间结构区域";

//网页右栏区ID//读屏软件语音接口：已跳转到网页右栏区域
//var RightContent = JHelperConfig.RightContent;//'rightbox';
var RightContentTitle = "已跳转到网页右栏区域";

//栏目分组变量
//栏目分组标记 H2 或 H3 或 H4
var GroupTagNameH2 = 'H2';
var GroupTagNameH3 = 'H3';
var GroupTagNameH4 = 'H4';
//栏目分组计数器初始化为-1
var GroupCount = -1;
//顺（逆）向标记
var ForwardFlag = false;
var BackwardFlag = false;

//快捷键执行函数

function accessKeyboardListener(currkey, e) {
	var browser = browserFlag();
	//浏览器类型判断
	/*--------------------------------------------------------热点跳转开始--------------------------------------------------------*/
	if (String(navigator.platform).indexOf("Win") != -1) {
		//windows操作系统
		if ((e.altKey && !e.shiftKey && !e.ctrlKey) || (!e.altKey && !e.shiftKey && e.ctrlKey)) {
			if (currkey == NumOneKey) {
				//alt+1: 定位到无障碍操作说明连接锚点，
				document.getElementById(JHelperConfig.AccessHelp).focus();
			} else if (currkey == NumTwoKey) {
				//alt+2: 定位到网站导航容器，
				createNodeDiv(JHelperConfig.MainNavigation, JHelperConfig.MainNavigationTitle);
			} else if (currkey == NumThreeKey) {
				//alt+3: 定位到网站服务引导区，
				createNodeDiv(JHelperConfig.HeaderGuide, JHelperConfig.HeaderGuideTitle);
			} else if (currkey == NumFourKey) {
				//alt+4: 定位到主要内容区，
				createNodeDiv(JHelperConfig.MainContent, JHelperConfig.MainContentTitle);
			} else if (currkey == NumFiveKey) {
				//alt+5: 定位到网站地图连接，
				createNodeDiv(JHelperConfig.SiteMap, JHelperConfig.SiteMapTitle);
				//document.getElementById(SiteMap).focus();
			} else if (currkey == NumSixKey) {
				//alt+6: 定位到页面主要搜索框，
				createNodeDiv(JHelperConfig.SearchForm, JHelperConfig.SearchFormTitle);
			}
		}
	} else if (String(navigator.platform).indexOf("Mac") != -1) {
		//Mac操作系统
		if (!e.altKey && !e.shiftKey && e.ctrlKey) {
			if (currkey == NumOneKey) {
				//alt+1: 定位到无障碍操作说明连接锚点，
				document.getElementById(JHelperConfig.AccessHelp).focus();
			} else if (currkey == NumTwoKey) {
				//alt+2: 定位到网站导航容器，
				createNodeDiv(JHelperConfig.MainNavigation, JHelperConfig.MainNavigationTitle);
			} else if (currkey == NumThreeKey) {
				//alt+3: 定位到网站服务引导区，
				createNodeDiv(JHelperConfig.HeaderGuide, JHelperConfig.HeaderGuideTitle);
			} else if (currkey == NumFourKey) {
				//alt+4: 定位到主要内容区，
				createNodeDiv(JHelperConfig.MainContent, JHelperConfig.MainContentTitle);
			} else if (currkey == NumFiveKey) {
				//alt+5: 定位到网站地图连接，
				createNodeDiv(JHelperConfig.SiteMap, JHelperConfig.SiteMapTitle);
				//document.getElementById(SiteMap).focus();
			} else if (currkey == NumSixKey) {
				//alt+6: 定位到页面主要搜索框，
				createNodeDiv(JHelperConfig.SearchForm, JHelperConfig.SearchFormTitle);
			}
		}
	}
	/*--------------------------------------------------------热点跳转结束-------------------------------------------------------*/
	/*------------------------------------------------------分组栏目跳转开始-----------------------------------------------------*/
	if (currkey == GroupTagKey) {
		if ((!e.altKey && !e.shiftKey && e.ctrlKey) || (e.altKey && !e.shiftKey && !e.ctrlKey)) {
			groupSkip(0);
			//分组栏目跳转快捷键：ctrl+Z
		} else if ((!e.altKey && e.shiftKey && e.ctrlKey) || (e.altKey && e.shiftKey && !e.ctrlKey)) {
			groupSkip(1);
			//分组栏目逆向跳转快捷键：ctrl+shift+z
		}
	}
	/*--------------------------------------------------------分组栏目跳转结束----------------------------------------------------*/
	/*----------------------------------------------------------区域跳转开始------------------------------------------------------*/
	if (e.altKey && e.shiftKey && !e.ctrlKey) {
		if (currkey == NumOneKey) {
			//alt+shift+1：跳转到头部，
			createNodeDiv(JHelperConfig.HeadContent, JHelperConfig.HeadContentTitle);
		} else if (currkey == NumTwoKey) {
			//alt+shift+4: 跳转到左栏，
			createNodeDiv(JHelperConfig.LeftContent, JHelperConfig.LeftContentTitle);
		} else if (currkey == NumThreeKey) {
			//alt+shift+3: 跳转到中间区域，
			createNodeDiv(JHelperConfig.MiddleContent, JHelperConfig.MiddleContentTitle);
		} else if (currkey == NumFourKey) {
			//alt+shift+5: 跳转到右栏，
			createNodeDiv(JHelperConfig.RightContent, JHelperConfig.RightContentTitle);
		} else if (currkey == NumFiveKey) {
			//alt+shift+2: 跳转到底部，
			createNodeDiv(JHelperConfig.BottomContent, JHelperConfig.BottomContentTitle);
		}
	}
	/*----------------------------------------------------------区域跳转结束------------------------------------------------------*/
}

//栏目分组跳转

function groupSkip(skipFlag, GroupTagName) {
	var allSkipNode = new Array();
	var j = 0;
	var allNode = document.getElementsByTagName("*");
	for (i = 0; i < allNode.length; i++) {
		var newNodeName = allNode[i].nodeName;
		if (newNodeName == JHelperConfig.GroupTagNameH2 || newNodeName == JHelperConfig.GroupTagNameH3 || newNodeName == JHelperConfig.GroupTagNameH4) {
			allSkipNode[j] = i;
			j++;
		}
	}
	//获取栏目分组跳转标签的个数
	var NumGroupTagID = allSkipNode.length
	if (NumGroupTagID == 0) {
		return;
	}
	//没有栏目分组标签返回
	if (skipFlag == 0) {
		//分组栏目正向跳转
		ForwardFlag = true;
		if (BackwardFlag) {
			BackwardFlag = false;
		}
		this.GroupCount++;
		if (this.GroupCount > NumGroupTagID - 1) {
			this.GroupCount = 0;
		}
	} else if (skipFlag == 1) {
		//分组栏目逆向跳转
		BackwardFlag = true;
		if (ForwardFlag) {
			ForwardFlag = false;
		}
		this.GroupCount--;
		if (this.GroupCount < 0) {
			this.GroupCount = NumGroupTagID - 1;
		}
	}
	var mainDiv = allNode[allSkipNode[GroupCount]];
	var titleText = mainDiv.innerText || mainDiv.textContent;
	var title = titleText + "";
	if (mainDiv.nodeName == JHelperConfig.GroupTagNameH2) {
		title = titleText + "";
	}
	createNode(mainDiv, title);
}

//创建层节点：----------------------------------

function createNodeDiv(divID, title) {
	var mainDiv = document.getElementById(divID);
	//若主目录下无跳转ID，查看Iframe中是否有
	if (!mainDiv) {
		mainDiv = iframeSearch(divID);
		if (!mainDiv) {
			return;
		}
	}
	createNode(mainDiv, title);
}
//在跳转区域第一个子节点前创建----------------

function createNode(mainDiv, title) {
	var newNode = document.createElement("div");
	newNode.style.cssText = "width:0px;height:0px;overflow:hidden;";
	newNode.innerHTML = "<a href=\"javascript:\" title=\"" + title + "\" onblur=\"deleteNodeDiv(this)\">" + title + "</a>";
	mainDiv.parentNode.insertBefore(newNode, mainDiv);
	newNode.firstChild.focus();
}

//删除层节点----------------------------------

function deleteNodeDiv(node) {
	var browser = browserFlag();
	if (browser.ie) {
		node.parentNode.removeNode(true);
	} else {
		node.parentNode.parentNode.removeChild(node.parentNode);
	}
}
//查找Iframe中快捷键ID

function iframeSearch(divID) {
	var iframeNode = document.body.getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		try {
			var newDivID = iframeNode[i].contentWindow.document.getElementById("divID");
		} catch (e) {}
	}
	return newDivID;
}

//在iframe中增加监听调用父页面监听函数
function addKeyListenerToIframe(iframeObject)
{
	var iframeNode = document.body.getElementsByTagName("iframe");
	if(!iframeNode){return;}	
	for(var i=0;i<iframeNode.length;i++){
		var iframeObject = iframeNode[i].contentWindow;
		bindKeyDownEvent(iframeObject);
	}
}

function bindKeyDownEvent(iframeObject)
{
	try {
		iframeObject.document.onkeydown = KeyDownEvent;
		var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
		for (var j = 0; j < iFrameAllNode.length;j++ ) {
			if(iFrameAllNode[j].tagName == 'iframe' || iFrameAllNode[j].tagName=='IFRAME') {
				var innerIframeObject = iFrameAllNode[j].contentWindow;
				bindKeyDownEvent(innerIframeObject);
			}
		}
	} catch (e) {}
}
function KeyDownEvent(e) {
	//快捷键获取
	var currkey = 0,
	e = e || event || window.event;
	currkey = e.keyCode || e.which || e.charCode;
	//快捷键键盘监听
	top.accessKeyboardListener(currkey, e);
	//工具条键盘监听
	top.toolBarKeyDownEvent(currkey, e);
}
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////	//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// 全局对象
var INSTANCE = new Object();
//定义主内容盒子
var mainBoxID; // = JHelperConfig.mainBox;
//纯文本样式
var textStyleCSS = serverUrl + "jhelper_style.css";

//------------------------------------------------------------------------------------
//--------------------------------------主方法开始------------------------------------

//declareConfig();
// 全局入口
//$(document).ready(initJSHelper());
initJSHelper();

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


