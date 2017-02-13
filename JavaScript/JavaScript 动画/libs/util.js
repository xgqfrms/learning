function share_my_url(webid, url, mytitle, summary){

	var title = "分享【"+mytitle+"】";

	var tsummary = title + summary;

	var share_services = {
		'tsina':  "http://service.weibo.com/share/share.php?title="+encodeURIComponent( tsummary )+"&url="+url,
		'qzone':  "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+url+"&title="+encodeURIComponent( title )+"&pics=&summary="+encodeURIComponent( summary ),
		'tqq':    "http://share.v.t.qq.com/index.php?c=share&a=index&title="+encodeURIComponent( tsummary )+"&url="+url,
		'renren': "http://widget.renren.com/dialog/share?resourceUrl="+url+"&srcUrl="+url+"&title="+encodeURIComponent( title )+"&pic=&description="+encodeURIComponent( summary ),
		'twitter':"http://twitter.com/intent/tweet?url="+url+"&text="+encodeURIComponent( tsummary ),
		'facebook':"http://facebook.com/sharer.php?u="+url,
		'more':   "http://www.jiathis.com/send/?webid=" + webid + "&url="+url+"&title="+encodeURIComponent("分享好文：【"+title+"】")+"&summary="+encodeURIComponent(summary)
	};

	window.open(share_services[webid], "_blank", "width=615,height=505");
}

function w(app){

	var summary = '';
	var description;
	var metas = document.getElementsByTagName('meta');
	for (var x=0,y=metas.length; x<y; x++) {
	  if (metas[x].name.toLowerCase() == "description") {
	    description = metas[x];
	  }
	}
	if( description ) summary = description.content;
	var title = document.title;
	var url = document.location.href;
	share_my_url(app, url, title, summary);
}