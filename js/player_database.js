// MP3播放器及歌曲库js
var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
     [
	{ title: "Dear my hometown", artist: "澤野弘之", mp3:"https://app.onenine.cc/m/api/url/yqd/id/7a4d-IN44gGLgzgzHsFpSJEVhUB-EluIPwsFeEaYU7tqpX4/format/320000", poster: "https://p2.music.126.net/Le89_I0CZujkNdNLNo1viA==/2324367581144218.jpg"},
	{ title: "aLIEz", artist: "澤野弘之,瑞葵", mp3:"http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&copyrightId=0&contentId=600914000003374607&resourceType=2&channel=0", poster: "http://d.musicapp.migu.cn/prod/file-service/file-down/b1899d500dda5db2da11df3efc89cba6/7985b2c25063613a3be1ccc02c62cd18/37627e0f0be7ba1b5d7e12e4bc73a320"},
		{ title: "Lemon", artist: "米津玄師", mp3:"https://app.onenine.cc/m/api/url/yqd/id/5b22QwLOL3WEZS-qjeSW3M0x4H-nAB_XahzdgGwV2E6eIBj-Rao/format/320000", poster: "https://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg"},
		{ title: "燕无歇", artist: "是七叔呢", mp3:"1.mp3", poster: "https://imgessl.kugou.com/stdmusic/20201215/20201215204702824213.jpg"},
		 { title: "7 years", artist: "Lukas Graham", mp3:"http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&copyrightId=0&contentId=600919000000019501&resourceType=2&channel=0", poster: "https://p2.music.126.net/DgYB0M-BUmDHnEgUesG7ZQ==/18154036486677921.jpg?param=130y130"},
		 { title: "Free loop", artist: "Daniel Powter", mp3:"https://app.onenine.cc/m/api/url/yqd/id/584ePMEP4V9-ZOtRjsn_C-6ijwCW0EYLWdUozJjHW5VijGgT/format/320000", poster: "https://p1.music.126.net/sZmj3A3PYM7ud0VeVcoEcg==/6666339000252867.jpg?param=130y130"},
		 { title: "comethru", artist: "Jeremy Zucker,Bea Miller", mp3:"https://app.onenine.cc/m/api/url/yqd/id/3674lXt8w1mtKwbwuoJAaRVoNg3KrJHBGkbSSMlH2UBxp16fI4uU/format/320000", poster: "https://p3.music.126.net/mmMLF6_a1yDnzGO1LVyCeg==/109951163926564641.jpg"},
		 { title: "Trippy Love", artist: "Vexento", mp3:"http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&copyrightId=0&contentId=600910000009984409&resourceType=2&channel=0", poster: "https://p1.music.126.net/4rXAf9LB3dZWoKSuRpI2PA==/109951164395808723.jpg?param=130y130"},
	 	{ title: "Attraction", artist: "小沢正淳", mp3:"http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28148079&response=res&type=convert_url&", poster: "https://p4.music.126.net/ZyybrDBGTH4027xZ6KwnaQ==/18988565811838996.jpg?param=200y200"},
		{ title: "Before You Go", artist: "Lewis Capaldi", mp3:"https://app.onenine.cc/m/api/url/yqd/id/b618s35WL3NCvFv78rqaCCWSI4Gd4nmDA3RF2XS3JdhZLQeIk7Sq/format/320000", poster: "https://p2.music.126.net/DMaSS74is5mbrlWBgn6qLw==/109951164499108360.jpg?param=130y130"},
		{ title: "One Day", artist: "Emblem3", mp3:"https://app.onenine.cc/m/api/url/yqd/id/1b66zGMOyLpfe4TPrUkkf7ZoS2RoYPpNiOIdD2f65KOB5B6FOA/format/320000", poster: "https://p4.music.126.net/9oMi0vgMdbKZlDYVXJt10A==/18338754440254103.jpg"},
		{ title: "Sold Out", artist: "Hawk Nelson", mp3:"https://app.onenine.cc/m/api/url/yqd/id/220dwD5Bcg5SmKPf9_3CYwW7XMOnnsoXJFDCJe7m0ZlaHL-e7w/format/320000", poster: "https://p4.music.126.net/UR8jAfqus_o1j_QkaYkZ_g==/109951163664241365.jpg"},
		{ title: "Waiting For Love", artist: "Avicii", mp3:"https://app.onenine.cc/m/api/url/yqd/id/b2ebqyQS0ajKNAvwYLNPcMZRpERvc7x6FTGs5Kb84maEmulBTZSe/format/320000", poster: "https://p2.music.126.net/1b0yLuIK1RUsup6oC_FUcw==/7883498372055171.jpg?param=177y177"},
		{ title: "Believe", artist: "Imagine Dragons / Lil Wayne", mp3:"https://app.onenine.cc/m/api/url/yqd/id/0f8bK8aGVPngQK7ELdvzn-x5jr2fif9s7RawiKMJhsn_N85pQ365/format/320000", poster: "https://p2.music.126.net/0_YzqMGHrDXU9C277IFerA==/109951163783209324.jpg?param=130y130"},
		{ title: "Revolution", artist: "The Score", mp3:"https://app.onenine.cc/m/api/url/yqd/id/42abcGeTE91cvmmdSQPhq9IFj5LFPX5rvhKuRYzWAqElW0xcHfY/format/320000", poster: "https://p1.music.126.net/SQHidvlLtjul2faOGvpHMg==/17719729393683020.jpg?param=130y130"},
		{ title: "Love Runs Out", artist: "OneRepublic", mp3:"https://app.onenine.cc/m/api/url/yqd/id/2cccGzDzByulQuaG8dQGvuudhsMZMMq1tqpGoNGh6q_K1Sfpjg/format/320000", poster: "https://p1.music.126.net/NZHfFGDOMlHn1I34uvsiGA==/109951163219138105.jpg?param=130y130"},
		{ title: "Rumors", artist: "Jake Miller", mp3:"https://app.onenine.cc/m/api/url/yqd/id/b5b3TbNjgpRYIuchq9-_p0h132a7WI4ed7cInV6pEfydx6zsXw/format/320000", poster: "https://p2.music.126.net/Pbd07aZL_UqBs5ffN7-5Dw==/2899412164898288.jpg?param=130y130"},
		{ title: "Raincheck", artist: "Hannah Jane Lewis", mp3:"https://app.onenine.cc/m/api/url/yqd/id/56077uiz6L76wcTKu5fJgRPXZLrh6rM_4oy1dSJC1fAow1iZYw0/format/320000", poster: "https://p4.music.126.net/njlggpeOwTA4M5htRVqsAQ==/18359645161383042.jpg"},
		{ title: "Try", artist: "Colbie Caillat", mp3:"https://app.onenine.cc/m/api/url/yqd/id/1b69rpg7ePV8wSgGKhQmKkpX4Nw4CyiqfWpnzoCrP1JKSk9lpQ/format/320000", poster: "https://p4.music.126.net/QBQvSe84znaWIm2PrhQ_ng==/5930765720512200.jpg"},
		{ title: "我管你", artist: "华晨宇", mp3:"https://app.onenine.cc/m/api/url/yqd/id/51d5D7LTDW6NNb0O7kYHtB-YzOWpLdO8Cfy72TXiN1FkXvJv-WI/format/320000", poster: "https://p2.music.126.net/_BE37Olq_HR3JVIvVcMbKg==/18796151278643005.jpg"},
		{ title: "春风十里", artist: "鹿先森乐队", mp3:"https://app.onenine.cc/m/api/url/yqd/id/ea1aP50o9iB9xMVCpU-3_soAS20JSYtv4J4hBbhux3YxW5bijA/format/320000", poster: "https://p1.music.126.net/hYjA4Th6CAdkWI_sm32juw==/109951163669459549.jpg"},
		{ title: "God's Country", artist: "Blake Shelton", mp3:"https://app.onenine.cc/m/api/url/yqd/id/e86akpr-nOqZ9W8A-scSKfP2h_21naP6gpuHBkuMBycyBke2Bpl-/format/320000", poster: "https://p4.music.126.net/VLe-NWkAeySUoVC3Y0MKCA==/109951163953825467.jpg"},
		{ title: "Take Me Home Country Roads", artist: "Music Travel Love", mp3:"https://app.onenine.cc/m/api/url/yqd/id/4b085opwJeXzmD-lgZGdBYWl_lmPR_CK1bjM3HMa4sGgpaTj_6VX/format/320000", poster: "https://p1.music.126.net/rEa6B0BIBz0JhDAc2nZFfw==/109951163459677784.jpg?param=130y130"},
	{ title: "Fleur de lis", artist: "Noicybino", mp3:"http://music.163.com/song/media/outer/url?id=533079474.mp3", poster: "http://p1.music.126.net/C3C4vPOMsTd_vX9Ccww06Q==/109951163117390906.jpg?param=130y130"},
	{ title: "Dance, cherry blossoms!", artist: "Yuri akiyama", mp3: "http://music.163.com/song/media/outer/url?id=518291899.mp3 ", poster:"http://p1.music.126.net/AKhQSRL6HyZu4YwWg4Wi6A==/109951163060585255.jpg?param=130y130"},
	{ title: "Lost in Love", artist: "Bois LanYun", mp3: "http://music.163.com/song/media/outer/url?id=521597063.mp3", poster:"http://p1.music.126.net/6o_M9dSbYPRqKRmwY1bOGg==/109951163073262137.jpg?param=130y130"},
	{ title: "I'm Yours", artist: "Jason Mraz", mp3: "https://app.onenine.cc/m/api/url/yqd/id/f8372zQ9X7i8jKT4vcTYZHb88RDAGIejULqKN-Zq3AkNkkXIRA/format/320000", poster:"https://p4.music.126.net/T-1lMoXoRngDE96TMimKyg==/569547023197662.jpg"},
		{ title: "远すぎた空", artist: "Akito", mp3: "http://music.163.com/song/media/outer/url?id=357185.mp3", poster:"http://p1.music.126.net/7cYhniBuLvU3fvLjeRFeNw==/106652627910735.jpg?param=130y130"},
		{ title: "Whether", artist: " AniFace", mp3: "http://music.163.com/song/media/outer/url?id=515384791.mp3", poster:"http://p1.music.126.net/PzE3JrY7QVqFghK9gJN67A==/109951163050326398.jpg?param=130y130"},
		{ title: "Anthem(2002 FIFA)", artist: "Vangelis", mp3: "http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&copyrightId=0&contentId=600919000003006695&resourceType=2&channel=0", poster:"http://d.musicapp.migu.cn/prod/file-service/file-down/8121e8df41a5c12f48b69aea89b71dab/c9a1f17d753752fa398536ac3a340865/744313be44b46eb7757953bc97e7e8c2"},
		{ title: "Princess", artist: "α·Pav", mp3: "http://music.163.com/song/media/outer/url?id=357023.mp3", poster:"http://p1.music.126.net/ktIGtL8eCh6bmDf5a27tFQ==/93458488378205.jpg?param=130y130"},
		{ title: "blue blossoms", artist: "久遠", mp3: "http://music.163.com/song/media/outer/url?id=803347.mp3", poster:"http://p1.music.126.net/j9u_wRtJMhlt64k-ZSUM3Q==/944480488305733.jpg?param=130y130"},
		{ title: "Nocturne No. 2 ", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=1060914.mp3", poster:"http://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg?param=130y130"},

	 ],
		{playlistOptions:{enableRemoveControls: true},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
	

	

	$("#latest li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:latest[k].title, artist:latest[k].artist,
			//free:true,
			mp3:latest[k].mp3,
			//oga:"",
			poster:latest[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#popular li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:popular[k].title, artist:popular[k].artist,
			//free:true,
			mp3:popular[k].mp3,
			//oga:"",
			poster:popular[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#rank li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:rank[k].title, artist:rank[k].artist,
			//free:true,
			mp3:rank[k].mp3,
			//oga:"",
			poster:rank[k].poster
		});
		myPlaylist.play(-1);
	});
	
$("#main li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: main[k].title, artist: main[k].artist,
		//free:true,
		mp3: main[k].mp3,
		//oga:"",
		poster: main[k].poster
	});
	myPlaylist.play(-1);
});
	
$("#spirit li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: spirit[k].title,
		artist: spirit[k].artist,
		//free:true,
		mp3: spirit[k].mp3,
		//oga:"",
		poster: spirit[k].poster
	});
	myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function () {
	var m = $(this).parent("li").index();
	myPlaylist.add({
		title: magic[m].title,
		artist: magic[m].artist,
		//free:true,
		mp3: magic[m].mp3,
		//oga:"",
		poster: magic[m].poster
	});
	myPlaylist.play(-1);
});
	//添加歌曲结束


	//移除
	$("#playlist-remove").click(function() {
		myPlaylist.remove();		//（0 1 2 ... -2 -1）
	});
	
	$("#listRemove").click(function() {
		myPlaylist.remove();
	});

	// 上一曲、下一曲

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// 播放
	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// 暂停

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});



	//是否自动播放

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});




	//播放器列表滚动条js------------------------------------------------------------------------------------------------
	var $bar=$(".bar");
	var $scrollBar=$(".scrollBar");
	var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
	var $ul=$(".jp-playlist ul");
	var $li=$(".jp-playlist ul li");
	var disY=0; 
	var iScale=0;
	var iSpeed = 0;
	
	$ul.height(1000);		//设置ul的高度
	
	$bar.mousedown(function (event){
		var event = event || window.event;
		disY = event.clientY - $(this).position().top;                
		$(document).bind("mousemove",function (event){
				var event = event || window.event;
				var iH = event.clientY - disY;                        
				iH <= 0 && (iH = 0);
				iH >= $maxH && (iH = $maxH);
				$bar.css({top : iH + "px"});
				iScale = - iH/$maxH;
				$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});	
				return false;
		});                
		$(document).bind("mouseup",function (){		
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
		});
		return false;
	});
	
	 //当鼠标移入，监听事件
	$(".jp-playlist-box").mouseover(function(){
			//鼠标滚轮
			addHandler(this, "mousewheel", mouseWheel);//IE
			addHandler(this, "DOMMouseScroll", mouseWheel);//标准
			return false;			
	});
	//绑定事件重写兼容
	 function addHandler(element, type, handler){
			return element.addEventListener ? element.addEventListener(type, handler, false) :
			element.attachEvent("on" + type, handler, false)
	}
	 //鼠标滚轮事件
	function mouseWheel(event){
		var event = event || window.event;
		if(event.wheelDelta) {//IE
				iSpeed = event.wheelDelta > 0 ? -3 : 3;
		}else if(event.detail) {//火孤
				iSpeed = event.detail < 0 ? -3 : 3;
		}
		move();
		
		//FF,绑定事件，阻止默认事件  
		if (event.preventDefault) {  
			event.preventDefault();  
		} 	
	} ;
	//滚轮 要执行的
	function move(){
		var iH=$bar.position().top;
		iH=iH+iSpeed;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({top:iH+"px"});
		iScale = - iH/$maxH;
		$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});
		return false;
	};
	//播放器列表滚动条js 结束------------------------------------------------
	
	
	
	//音乐播放器 收缩、展开----------------------------------------------
	var fold=true;//标识
	
	//页面加载时，播放器运动出来，延迟2秒，运动回去
	$(".jp-video").animate({left:0},"slow",function(){
		slideOut($(this));		
	}).delay(10).animate({left:"-480px"},350,function(){
		slideIn($(this));	
	});
	
	//点击按钮运动出来，或运动回去
	$("#btnfold").mouseover(function(){
		if(fold){
			$(".jp-video").animate({left:"-480px"},350,function(){	
				slideIn($(this));
			});	
		}else{
			$(".jp-video").animate({left:0},350,function(){
				slideOut($(this));
			});	
		}
	});
	//封装按钮背景切换1
	function slideOut(obj){
		$("#btnfold").attr({"title":"点击收缩"});
		obj.find("span").css({"transform":"rotate(180deg)"});
		obj.find("span").css({"MozTransform":"rotate(180deg) translateX(2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(180deg)"});
		fold=true;		
	};
	//封装按钮背景切换2
	function slideIn(obj){
		$("#btnfold").attr({"title":"点击展开"});	
		obj.find("span").css({"transform":"rotate(0deg)"});
		obj.find("span").css({"MozTransform":"rotate(0deg) translateX(-2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(0deg)"});
		fold=false;	
	};
	
	//歌曲列表展开、收缩---------------------------------------------------
	var iOpen=false;
	$("#listClose").click(function(){
		if(iOpen){
			$(".jp-playlist-box").animate({height:0},100);
			$("#btnfold").css({top:"0px"});
			$("#listRemove").css({display:"none"});
			$(".scrollBar").css({display:"none"});
			$(".jp-video").animate({height:"94px",bottom:"0px"},100);
			iOpen=false;
		}else{
			$(".jp-playlist-box").animate({height:"80px"},100);
			$("#btnfold").css({top:"0px"});
			$("#listRemove").css({display:"block"});
			$(".scrollBar").css({display:"block"});
			$(".jp-video").animate({height:"175px",bottom:"20px"},100);
			iOpen=true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
