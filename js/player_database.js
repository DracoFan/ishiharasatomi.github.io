// MP3播放器及歌曲库js
var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
     [
		{ title: "Lemon", artist: "米津玄師", mp3:"https://app.onenine.cc/m/api/url/yqd/id/5b22QwLOL3WEZS-qjeSW3M0x4H-nAB_XahzdgGwV2E6eIBj-Rao/format/320000", poster: "https://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg"},
		{ title: "燕无歇", artist: "是七叔呢", mp3:"http://gf.sycdn.kuwo.cn/c1e5f16b1af99a83edfd4958e19c168c/600c0c8a/resource/n3/0/43/3816585219.mp3", poster: "https://imgessl.kugou.com/stdmusic/20201215/20201215204702824213.jpg"},
		 { title: "7 years", artist: "Lukas Graham", mp3:"http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&copyrightId=0&contentId=600919000000019501&resourceType=2&channel=0", poster: "https://p2.music.126.net/DgYB0M-BUmDHnEgUesG7ZQ==/18154036486677921.jpg?param=130y130"},
		 { title: "Free loop", artist: "Daniel Powter", mp3:"https://app.onenine.cc/m/api/url/yqd/id/584ePMEP4V9-ZOtRjsn_C-6ijwCW0EYLWdUozJjHW5VijGgT/format/320000", poster: "https://p1.music.126.net/sZmj3A3PYM7ud0VeVcoEcg==/6666339000252867.jpg?param=130y130"},
		 { title: "Trippy Love", artist: "Vexento", mp3:"http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&copyrightId=0&contentId=600910000009984409&resourceType=2&channel=0", poster: "https://p1.music.126.net/4rXAf9LB3dZWoKSuRpI2PA==/109951164395808723.jpg?param=130y130"},
	 	{ title: "Attraction", artist: "小沢正淳", mp3:"https://s.aigei.com/src/aud/mp3/05/055aa6837a2b4825bb486618fc2a62b8.mp3?download/%E5%90%B8%E5%BC%95%E5%8A%9B%28attraction%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3&e=1611428520&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:1_pK-3Xp575M-wZtzUuAA8ZSWu0=", poster: "https://p4.music.126.net/ZyybrDBGTH4027xZ6KwnaQ==/18988565811838996.jpg?param=200y200"},
		{ title: "Before You Go", artist: "Lewis Capaldi", mp3:"https://app.onenine.cc/m/api/url/yqd/id/b618s35WL3NCvFv78rqaCCWSI4Gd4nmDA3RF2XS3JdhZLQeIk7Sq/format/320000", poster: "https://p2.music.126.net/DMaSS74is5mbrlWBgn6qLw==/109951164499108360.jpg?param=130y130"},
		{ title: "Believe", artist: "Imagine Dragons / Lil Wayne", mp3:"https://app.onenine.cc/m/api/url/yqd/id/0f8bK8aGVPngQK7ELdvzn-x5jr2fif9s7RawiKMJhsn_N85pQ365/format/320000", poster: "https://p2.music.126.net/0_YzqMGHrDXU9C277IFerA==/109951163783209324.jpg?param=130y130"},
		{ title: "Revolution", artist: "The Score", mp3:"https://app.onenine.cc/m/api/url/yqd/id/42abcGeTE91cvmmdSQPhq9IFj5LFPX5rvhKuRYzWAqElW0xcHfY/format/320000", poster: "https://p1.music.126.net/SQHidvlLtjul2faOGvpHMg==/17719729393683020.jpg?param=130y130"},
		{ title: "Love Runs Out", artist: "OneRepublic", mp3:"https://app.onenine.cc/m/api/url/yqd/id/2cccGzDzByulQuaG8dQGvuudhsMZMMq1tqpGoNGh6q_K1Sfpjg/format/320000", poster: "https://p1.music.126.net/NZHfFGDOMlHn1I34uvsiGA==/109951163219138105.jpg?param=130y130"},
		{ title: "Rumors", artist: "Jake Miller", mp3:"https://app.onenine.cc/m/api/url/yqd/id/b5b3TbNjgpRYIuchq9-_p0h132a7WI4ed7cInV6pEfydx6zsXw/format/320000", poster: "https://p2.music.126.net/Pbd07aZL_UqBs5ffN7-5Dw==/2899412164898288.jpg?param=130y130"},
		{ title: "Raincheck", artist: "Hannah Jane Lewis", mp3:"https://app.onenine.cc/m/api/url/yqd/id/56077uiz6L76wcTKu5fJgRPXZLrh6rM_4oy1dSJC1fAow1iZYw0/format/320000", poster: "https://p4.music.126.net/njlggpeOwTA4M5htRVqsAQ==/18359645161383042.jpg"},
		{ title: "我管你", artist: "华晨宇", mp3:"https://app.onenine.cc/m/api/url/yqd/id/51d5D7LTDW6NNb0O7kYHtB-YzOWpLdO8Cfy72TXiN1FkXvJv-WI/format/320000", poster: "https://p2.music.126.net/_BE37Olq_HR3JVIvVcMbKg==/18796151278643005.jpg"},
		{ title: "春风十里", artist: "鹿先森乐队", mp3:"https://app.onenine.cc/m/api/url/yqd/id/ea1aP50o9iB9xMVCpU-3_soAS20JSYtv4J4hBbhux3YxW5bijA/format/320000", poster: "https://p1.music.126.net/hYjA4Th6CAdkWI_sm32juw==/109951163669459549.jpg"},
		{ title: "Take Me Home Country Roads", artist: "Music Travel Love", mp3:"https://app.onenine.cc/m/api/url/yqd/id/4b085opwJeXzmD-lgZGdBYWl_lmPR_CK1bjM3HMa4sGgpaTj_6VX/format/320000", poster: "https://p1.music.126.net/rEa6B0BIBz0JhDAc2nZFfw==/109951163459677784.jpg?param=130y130"},
	
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
	

	//past
	var latest=[
		{ title: "Fleur de lis", artist: "Noicybino", mp3: "http://music.163.com/song/media/outer/url?id=533079474.mp3", poster:"http://p1.music.126.net/C3C4vPOMsTd_vX9Ccww06Q==/109951163117390906.jpg?param=130y130"},
		{ title: "Dance, cherry blossoms!", artist: "Yuri akiyama", mp3: "http://music.163.com/song/media/outer/url?id=518291899.mp3 ", poster:"http://p1.music.126.net/AKhQSRL6HyZu4YwWg4Wi6A==/109951163060585255.jpg?param=130y130"},
		{ title: "Lost in Love", artist: "Bois LanYun", mp3: "http://music.163.com/song/media/outer/url?id=521597063.mp3", poster:"http://p1.music.126.net/6o_M9dSbYPRqKRmwY1bOGg==/109951163073262137.jpg?param=130y130"},
		{ title: "远すぎた空", artist: "Akito", mp3: "http://music.163.com/song/media/outer/url?id=357185.mp3", poster:"http://p1.music.126.net/7cYhniBuLvU3fvLjeRFeNw==/106652627910735.jpg?param=130y130"},
		{ title: "Whether", artist: " AniFace", mp3: "http://music.163.com/song/media/outer/url?id=515384791.mp3", poster:"http://p1.music.126.net/PzE3JrY7QVqFghK9gJN67A==/109951163050326398.jpg?param=130y130"},
		{ title: "Constellation Of Tatyana", artist: "Yakuro", mp3: "http://music.163.com/song/media/outer/url?id=28914253.mp3", poster:"http://p1.music.126.net/V7YrIWl2ALgg4QZTxD7_rw==/2937895071851575.jpg?param=130y130"},
		{ title: "Princess", artist: "α·Pav", mp3: "http://music.163.com/song/media/outer/url?id=357023.mp3", poster:"http://p1.music.126.net/ktIGtL8eCh6bmDf5a27tFQ==/93458488378205.jpg?param=130y130"},
		{ title: "Day by Day", artist: "Shirfine", mp3: "http://music.163.com/song/media/outer/url?id=27579054.mp3", poster:"http://p1.music.126.net/J6m3eJOw32G_wDim2tqloA==/5636096604060170.jpg?param=130y130"},
		{ title: "blue blossoms", artist: "久遠", mp3: "http://music.163.com/song/media/outer/url?id=803347.mp3", poster:"http://p1.music.126.net/j9u_wRtJMhlt64k-ZSUM3Q==/944480488305733.jpg?param=130y130"}
	];

	//now
	var popular=[
		{ title: "無神論者のためのセレナータ", artist: "love solfege", mp3: "http://music.163.com/song/media/outer/url?id=22676238.mp3", poster:"http://p1.music.126.net/ek5C5HeDHICGjziHhTMCow==/749866930165203.jpg?param=130y130"},
		{ title: "Proschenie", artist: "love solfege", mp3: "http://music.163.com/song/media/outer/url?id=22676239.mp3", poster:"http://p1.music.126.net/ek5C5HeDHICGjziHhTMCow==/749866930165203.jpg?param=130y130"},
		{ title: "神の光 -Μοιρα-", artist: "Sound Horizon", mp3: "http://music.163.com/song/media/outer/url?id=22782003.mp3", poster:"http://p1.music.126.net/ykne_IJENLMk5KvNUXC3Xg==/779553744115520.jpg?param=130y130"},
		{ title: "星女神の巫女 -Αρτεμισια-", artist: "Sound Horizon", mp3: "http://music.163.com/song/media/outer/url?id=816209.mp3", poster: "http://p1.music.126.net/jRkMO3QROnFeVrL2m3XuvQ==/18976471183854535.jpg?param=130y130"},
		{ title: "石畳の緋い悪魔", artist: "Sound Horizon", mp3: "http://music.163.com/song/media/outer/url?id=816217.mp3", poster:"http://p1.music.126.net/e0tsg402IoJLHyJIx4TWQw==/4451922580867675.jpg?param=130y130"},
		{ title: "この狭い鳥籠の中で", artist: "Sound Horizon", mp3: "http://music.163.com/song/media/outer/url?id=816197.mp3", poster:"http://p1.music.126.net/RNabeevAh1X4_U76fS1FCg==/4415638697151069.jpg?param=130y130"},
		{ title: "Secret Track", artist: "Sound Horizon", mp3: "http://music.163.com/song/media/outer/url?id=470573387.mp3", poster:"http://p1.music.126.net/RNabeevAh1X4_U76fS1FCg==/4415638697151069.jpg?param=130y130"},
		{ title: "a fairy tale", artist: "MUSIRISCA", mp3: "http://music.163.com/song/media/outer/url?id=4922555.mp3", poster:"http://p1.music.126.net/9vinX4XYfdNgSu3pQcWMMg==/2542070884388514.jpg?param=130y130"},
		{ title: "Prayer", artist: "MUSIRISCA", mp3: "http://music.163.com/song/media/outer/url?id=35504074.mp3", poster:"http://p1.music.126.net/g9dAq3k_Z9gE6GRcZo4XuA==/3420580674756260.jpg?param=130y130"}
	];

	//future
	var rank=[
		{ title: "创奏", artist: "霜月はるか", mp3: "http://music.163.com/song/media/outer/url?id=645239.mp3", poster:"http://p1.music.126.net/Fp7CYfdZsQAYZls-gD8KpQ==/2262794929982835.jpg?param=130y130"},
		{ title: "願い枯れゆく歌声", artist: "Ether", mp3: "http://music.163.com/song/media/outer/url?id=40915970.mp3", poster:"http://p1.music.126.net/DU6RM83OPR0KMcVP05f6zA==/3294136844455797.jpg?param=130y130"},
		{ title: "LICHT MEER", artist: "河合夕子", mp3: "http://music.163.com/song/media/outer/url?id=499086.mp3", poster:"http://p1.music.126.net/z7Mk6Au_otaoWozoM-t62w==/2402432906715323.jpg?param=130y130"},
		{ title: "Nocturne No. 2 ", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=1060914.mp3", poster:"http://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg?param=130y130"},
		{ title: "夜曲", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=5266269.mp3", poster:"http://p1.music.126.net/-jxEuvKopuUdXDTKL7KuWw==/105553116283769.jpg?param=130y130"},
		{ title: "降E大调夜曲", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=25830129.mp3", poster:"http://p1.music.126.net/h3MYwTuGIpkWiMuBwZ3Vmg==/6631154628238015.jpg?param=130y130"},
		{ title: "即兴幻想曲", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=25830133.mp3", poster:"http://p1.music.126.net/8cSVJulJa2tiLydRxyXuTg==/109951162938339077.jpg?param=130y130"},
		{ title: "Nocturne op. 32", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=26160789.mp3", poster:"http://p1.music.126.net/MiXbBt6j6xWNlv_QCFSRAw==/2288083697427927.jpg?param=130y130"},
		{ title: "Prelude in Des", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=26818399.mp3", poster:"http://p1.music.126.net/68_Rrtyz1A9MGImm2cUb-w==/2078076976524854.jpg?param=130y130"}
	];

   // oline song/dream/
   var main =[
	   { title: "手写着从前", artist: "澤野弘之", mp3: "http://music.163.com/song/media/outer/url?id=448706025.mp3 ", poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130" },
	   { title: "God of ink", artist: "澤野弘之", mp3: "http://music.163.com/song/media/outer/url?id=484056491.mp3", poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130" },
	   { title: "white silence (album version)", artist: "TK from 凛として時雨", mp3: "http://music.163.com/song/media/outer/url?id=769672.mp3", poster: "http://p1.music.126.net/OX-yCGzOUHbhqiKK9Xx4Vg==/4442026976217692.jpg?param=130y130" },
	   { title: "结び", artist: "饭碗的彼岸", mp3: "http://music.163.com/song/media/outer/url?id=445198872.mp3", poster: "http://p1.music.126.net/dlC4rAiDvq_uUi2fpnxKMA==/109951162819138078.jpg?param=130y130" },
	   { title: "VV - ALK", artist: "Tielle", mp3: "http://music.163.com/song/media/outer/url?id=507116416.mp3", poster: "http://p1.music.126.net/WStPGvMUlDC89Wus9813zA==/109951163014870789.jpg?param=130y130" },
	   { title: "M41+42", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=591021.mp3", poster: "http://p1.music.126.net/lf9G9OQf_ouA_FuPZjm1HA==/890604418498843.jpg?param=130y130" },
	   { title: "偏爱", artist: "张芸京", mp3: "http://music.163.com/song/media/outer/url?id=86369.mp3", poster: "http://p1.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg?param=130y130" },
	   { title: "算什么男人", artist: "周杰伦", mp3: "http://music.163.com/song/media/outer/url?id=29818120.mp3", poster: "http://p1.music.126.net/unW9CQcqjzh8BYjsVqosWw==/18874216602702134.jpg?param=130y130" },
	   { title: "兰若词", artist: "刘亦菲", mp3: "http://music.163.com/song/media/outer/url?id=255739.mp3", poster: "http://p1.music.126.net/YIhF9kpKMx_wBKQFN-DwTw==/81363860472987.jpg?param=130y130" },
	   { title: "open", artist: "miu-clips", mp3: "http://music.163.com/song/media/outer/url?id=618338.mp3", poster: "http://p1.music.126.net/fJ4Y4PN_h0Mg3ByQ2yfL9g==/838927371993316.jpg?param=130y130" }
	   ];
   var spirit =[
	   { title: "M19+20", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=591753.mp3 ", poster: "http://p1.music.126.net/lW4YKD6cMgm32nI66CzWVg==/5702067301704441.jpg?param=130y130" },
	   { title: "Sis puella magica!", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=496902072.mp3", poster: "http://p1.music.126.net/tFTRt1H87rReNTyO1K9IDQ==/18498183627713149.jpg?param=130y130" },
	   { title: "月は优しく (月)", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=590623.mp3", poster: "http://p1.music.126.net/7xaV2qB-T1d9m8b1XZC6tQ==/725677674344222.jpg?param=130y130" },
	   { title: "Euterpe エウテルペ ", artist: "染音若蔡", mp3: "http://music.163.com/song/media/outer/url?id=452654214.mp3", poster: "http://p1.music.126.net/Iqckrd2sOB1ztqrSOw4XzA==/109951162841140691.jpg?param=130y130" },
	   { title: "幻光", artist: "杨秉音", mp3: "http://music.163.com/song/media/outer/url?id=526989692.mp3", poster: "http://p1.music.126.net/4xHOkSVWH-n6p5pB3Jf0yQ==/109951162922204274.jpg" },
	   { title: "世界の約束", artist: "神罗Shinra", mp3: "http://music.163.com/song/media/outer/url?id=429460870.mp3", poster: "http://p1.music.126.net/rkJSVKRZkfLXOoVwXtiB4w==/18283778858733705.jpg?param=130y130" },
	   { title: "Cave OF Mind", artist: "久石譲", mp3: "http://music.163.com/song/media/outer/url?id=28457572.mp3", poster: "http://p1.music.126.net/HdmtedPRZEEBduHcmUnk3w==/853221023209311.jpg?param=130y130" },
	   { title: "幽灵公主", artist: "K. Williams", mp3: "http://qzone.haoduoge.com/music3/2015-01-26/1422203098.mp3", poster: "http://p1.music.126.net/GNKtRK8w7edPw3jAsavL2A==/5980243743832365.jpg?param=130y130" },
	   { title: "心之逆鳞", artist: "魏小涵", mp3: "http://music.163.com/song/media/outer/url?id=408280658.mp3", poster: "http://p1.music.126.net/k_WRxDY1qQ4ztB5uFFrvoA==/17907745881679448.jpg?param=130y130" },
	   { title: "愛を教えてくれた君へ", artist: "Qaijff", mp3: "http://music.163.com/song/media/outer/url?id=521416051.mp3", poster: "http://p1.music.126.net/-c3qURPNRNLe-YJMbiZoKA==/109951163072509863.jpg?param=130y130" }
	   ];
   var magic =[
	   { title: "群雄疾走", artist: "川井憲次", mp3: "http://music.163.com/song/media/outer/url?id=448153.mp3", poster: "http://p1.music.126.net/r4TK33y6f8cwlntVidXZbQ==/931286348726555.jpg?param=130y130" },
	   { title: "Ghost of a smile", artist: "EGOIST", mp3: "http://music.163.com/song/media/outer/url?id=35955908.mp3", poster: "http://p1.music.126.net/ivONokvElv9ZCzyrZp84FQ==/3297435373557125.jpg?param=130y130" },
	   { title: "樱子小姐的脚下埋着尸体", artist: "大竹佑季", mp3: "http://music.163.com/song/media/outer/url?id=36271375.mp3", poster:"http://p1.music.126.net/Q4Dg5QXwft213TBKMv26_A==/3276544653004159.jpg?param=130y130" },
	   { title: "非科学的表裏一体", artist: "豚乙女", mp3: "http://music.163.com/song/media/outer/url?id=30870899.mp3", poster: "http://p1.music.126.net/84dpde0vkfsDAVsNNjulXg==/7906588115750467.jpg?param=130y130" },
	   { title: "You're the Shine", artist: "：FELT", mp3: "http://music.163.com/song/media/outer/url?id=26260757.mp3", poster: "http://p1.music.126.net/b04i7LFbHLJkmkzwhwRLMA==/2343059278838229.jpg?param=130y130" },
	   { title: "旅の途中", artist: "清浦夏実", mp3: "http://music.163.com/song/media/outer/url?id=26220167.mp3", poster: "http://p1.music.126.net/4BgAnUbCDFex3m4z-hWULA==/2509085534622060.jpg?param=130y130" },
	   { title: "夏祭り", artist: "東山奈央", mp3: "http://music.163.com/song/media/outer/url?id=488388729.mp3", poster: "http://p1.music.126.net/3eyBH8RjxjXG-EqWShU1wg==/18887410742154555.jpg?param=130y130" },
	   { title: "Sway", artist: "Nevve", mp3: "http://music.163.com/song/media/outer/url?id=475073464.mp3", poster: "http://p1.music.126.net/KmPcFcxxg61d15R8yu5x_A==/18681802069425034.jpg?param=130y130" },
	   { title: "Vanish", artist: " Breathe Carolina", mp3: "http://music.163.com/song/media/outer/url?id=427542077.mp3", poster: "http://p1.music.126.net/xaX_RkkW0cT4f38k62N8yg==/3413983630702236.jpg?param=130y130" },
	   { title: "It's Over", artist: "MEIDEN", mp3: "http://music.163.com/song/media/outer/url?id=477933011.mp3", poster: "http://p1.music.126.net/foJM2P9nq8pXHnCZjcf75w==/19047939439716625.jpg?param=130y130" }
	   ];

	//添加播放歌曲

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
	
	
	
	
	
	
	
	
	
	
	
	
