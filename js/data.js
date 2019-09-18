// var data = [];
// var nav = document.querySelector(".nav-menu");
// console.log(nav);
// var dls = nav.querySelectorAll("dl");
// console.log(dls);
// for (var i = 0; i < dls.length; i++) {
//     var obj = {};
//     var dl = dls[i];
//     obj.title = dl.querySelector("dt a").innerText;
//     var hots = dl.querySelectorAll("dt span a");
//     obj.hots = [];
//     for (var j = 0; j < hots.length; j++) {
//         var hot = hots[j];
//         obj.hots.push(hot.innerText);
//     }
//     obj.details = [];
//     var items = dl.querySelectorAll(".nav-menu-item");
//     for (j = 0; j < items.length; j++) {
//         var o = {};
//         var item = items[j];
//         o.title = item.querySelector("h4").innerText;
//         o.items = [];
//         var oAs = item.querySelectorAll("a");
//         for (var k = 0; k < oAs.length; k++) {
//             o.items.push(oAs[k].innerText);
//         }
//         obj.details.push(o);
//     }
//     var imgs = dl.querySelectorAll(".menu_ad img");
//     obj.src = [];
//     obj.src.push(imgs[0].src, imgs[1].src);
//     data.push(obj);
// }


var data = [
    {
        "title": "手机通讯",
        "hots": ["5G手机", "三星 Note 10+", "华为 P30", "华为 Mate 20", "iPhone XR"],
        "details": [{
            "title": "热门品牌",
            "items": ["华为", "苹果", "荣耀", "小米", "OPPO", "vivo", "三星", "魅族", "美图", "一加", "努比亚", "全部手机"]
        }, {
            "title": "价位",
            "items": ["0-599", "600-999", "1000-1999", "2000-2999", "3000-3999", "4000-4999", "5000以上"]
        }, {
            "title": "网络制式",
            "items": ["5G网络", "4G全网通", "移动/联通双4G", "联通4G", "电信4G"]
        }, {
            "title": "产品特点",
            "items": ["屏幕指纹识别", "面部识别解锁", "全面屏", "快速充电", "无线充电", "液冷散热", "双卡双待", "指纹识别"]
        }, {
            "title": "热销机型",
            "items": ["华为 P30", "iPhone XR", "华为 Mate 20", "华为 nova 4e", "iPhone X", "三星S10", "OPPO Reno", "vivo X27", "华为 nova 4", "华为畅享 9"]
        }, {
            "title": "售后维修",
            "items": ["手机维修", "维修配件价格", "九机服务", "苹果电池快修", "苹果显示屏快修"]
        }],
        "src": ["https://img2.ch999img.com/newstatic/1529/f583b6eeb41700.jpg", "https://img2.ch999img.com/newstatic/1528/f583c3e4cee58d.jpg"]
    }, {
        "title": "智能家居",
        "hots": ["加湿器", "电动牙刷", "插座", "智能电视", "智能安防"],
        "details": [{
            "title": "生活周边",
            "items": ["生活周边", "电子烟", "路由器", "插座", "风扇", "电池"]
        }, {
            "title": "智能电器",
            "items": ["智能电器", "加湿器", "灯光照明", "榨汁机", "扫地机器人", "厨房小电", "除螨仪"]
        }, {
            "title": "电视/盒子",
            "items": ["电视/盒子", "小米电视", "小米盒子", "荣耀智慧屏", "荣耀盒子"]
        }, {
            "title": "智能安防",
            "items": ["智能安防", "智能门锁", "智能摄像头", "电子猫眼/门铃"]
        }, {
            "title": "智能健康",
            "items": ["智能健康", "电动牙刷", "剃须刀", "体脂称", "按摩设备"]
        }],
        "src": ["https://img2.ch999img.com/newstatic/1525/ccb0343809e1fb.jpg", "https://img2.ch999img.com/newstatic/1530/cc107d2281f08c.jpg"]
    }, {
        "title": "智能穿戴",
        "hots": ["智能手表", "智能手环", "儿童手表", "车载充电器", "车载支架"],
        "details": [{
            "title": "智能手表",
            "items": ["智能手表", "苹果", "华为", "荣耀", "三星"]
        }, {
            "title": "智能手环",
            "items": ["智能手环", "华为", "小米", "荣耀"]
        }, {
            "title": "儿童手表",
            "items": ["儿童手表", "华为", "小天才"]
        }, {
            "title": "智能车载",
            "items": ["智能车载", "车载支架", "车载充电器", "行车记录仪", "车载蓝牙耳机"]
        }],
        "src": ["https://img2.ch999img.com/newstatic/1526/ccb054c7e70515.jpg", "https://img2.ch999img.com/newstatic/1525/eac2fbe63a084a.jpg"]
    }, {
        "title": "手机配件",
        "hots": ["保护膜", "保护壳", "数据线", "充电器", "移动电源", "手机耳机"],
        "details": [{
            "title": "保护膜",
            "items": ["保护膜", "华为保护膜", "苹果保护膜", "荣耀保护膜", "一加保护膜", "OPPO保护膜", "vivo保护膜", "小米保护膜", "三星保护膜", "平板保护膜", "其他"]
        }, {
            "title": "保护壳",
            "items": ["保护壳", "华为保护壳", "苹果保护壳", "荣耀保护壳", "一加保护壳", "OPPO保护壳", "vivo保护壳", "小米保护壳", "三星保护壳", "平板保护壳", "其他"]
        }, {
            "title": "数据线",
            "items": ["数据线", "快充数据线", "苹果数据线", "MFI认证线", "安卓Type-C数据线", "安卓Micro数据线", "多合一数据线", "转接头"]
        }, {
            "title": "充电器",
            "items": ["充电器", "无线充电器", "快充充电器", "多口充电器", "单口充电器", "车载充电器"]
        }, {
            "title": "移动电源",
            "items": ["移动电源", "超轻薄", "双向快充", "自带线", "无线输出", "苹果输入", "Type-C输入", "安卓Micro输入", "单口输出", "多口输出", "自带线", "电量数字显示"]
        }, {
            "title": "手机耳机",
            "items": ["手机耳机", "华为耳机", "苹果耳机", "荣耀耳机", "小米耳机", "三星耳机", "OPPO耳机", "vivo耳机", "一加耳机"]
        }, {
            "title": "手机周边",
            "items": ["手机周边", "存储卡", "指环扣/支架", "自拍杆", "读卡器", "触控笔"]
        }],
        "src": ["https://img2.ch999img.com/newstatic/1528/e28cd77038e181.jpg", "https://img2.ch999img.com/newstatic/1524/e28cedc7e2ac1f.jpg"]
    }, {
        "title": "电脑办公",
        "hots": ["平板电脑", "轻薄本", "游戏本", "路由器", "键盘/鼠标", "U盘"],
        "details": [{
            "title": "电脑",
            "items": ["苹果", "华为", "荣耀", "联想", "小米", "华硕", "戴尔", "惠普", "微软", "机械革命", "三星", "微星", "神舟", "宏碁", "一体机", "品牌台式机", "显示器"]
        }, {
            "title": "平板电脑",
            "items": ["苹果", "华为", "荣耀", "小米", "微软", "亚马逊"]
        }, {
            "title": "外设产品",
            "items": ["外设产品", "鼠标", "键盘", "键鼠套", "U盘", "移动硬盘", "鼠标垫", "转接线", "适配器", "保护膜", "散热器", "防辐射眼镜", "电脑包", "清洁套装"]
        }, {
            "title": "网络产品",
            "items": ["网络产品", "路由器", "随行WiFi", "无线接收器", "网线"]
        }, {
            "title": "办公设备",
            "items": ["办公设备", "投影仪", "投影仪配件", "打印机", "办公耗材"]
        }, {
            "title": "服务产品",
            "items": ["服务产品", "九机上门"]
        }],
        "src": ["https://img2.ch999img.com/newstatic/1528/83e7c94021c4a5.jpg", "https://img2.ch999img.com/newstatic/1526/eebc499de6a54d.jpg"]
    }, {
        "title": "时尚影音",
        "hots": ["Beats", "SONY", "华为", "Bose", "智能音箱", "无人机", "摄影摄像"],
        "details": [{
            "title": "热门品牌",
            "items": ["Beats", "SONY", "哈曼卡顿", "华为", "Bose", "小鸟", "GoPro"]
        }, {
            "title": "耳机耳麦",
            "items": ["耳机耳麦", "华为", "苹果", "Beats", "SONY", "JBL", "B&O", "韶音", "三星", "小鸟"]
        }, {
            "title": "音箱/音响",
            "items": ["音箱/音响", "哈曼卡顿", "Bose", "JBL", "华为", "SONY", "小米"]
        }, {
            "title": "无人机",
            "items": ["无人机", "大疆悟", "大疆御", "大疆晓", "大疆云台"]
        }, {
            "title": "儿童专区",
            "items": ["儿童专区", "儿童手表", "儿童玩具", "益智教育"]
        }, {
            "title": "数码产品",
            "items": ["数码产品", "相机", "播放器", "翻译机"]
        }],
        "src": ["https://img2.ch999img.com/newstatic/1530/eebc70810bead2.jpg", "https://img2.ch999img.com/newstatic/1525/bb0d3859849caa.jpg"]
    }];


var bannerData = [
    {
        "src": "images/20190815115914_4270.jpg",
    },
    {
        "src": "images/20190820180407_0777.jpg",
    },
    {
        "src": "images/20190821180849_4677.jpg",
    },
    {
        "src": "images/20190821205119_7360.jpg",
    },
    {
        "src": "images/20190822151629_6728.jpg",
    }
];



var floorData = [
    {
        "line-height": "28px",
        "name": "手机",
        "color": "rgb(115, 78, 139)",
        "title": "https://img2.ch999img.com//newstatic/722/212fbc0c0136e5.png",
        "left": {
            "name": "iPhone 8 全网通版",
            "detail": "官网直降 无线充电",
            "img": "https://img2.ch999img.com//newstatic/1590/01036077bddb6f3e.png",
            "hot": ["快速充电", "拍照神器", "全面屏", "面部解锁"]
        },
        "center": {
            "name": ["iPhone XS Max 全网通版", "华为 P30 Pro 全网通版", "华为畅享9 全网通高配版", "vivo Z5 全网通版", "华为 Mate 20 全网通版", "华为 nova 4e 全网通版", "华为 nova 5i Pro 全网通版", "华为 荣耀 20 全网通版"],
            "detail": ["超视网膜显示屏", "影像之美", "大电池 强劲续航", "全面实力派", "专享免息分期", "超广角AI三摄", "6.26英寸极点全面屏", "定格奇幻之美"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190618233537253.jpg", "https://img2.ch999img.com/pic/product/440x440/20190326225205984.jpg", "https://img2.ch999img.com/pic/product/440x440/2019061823444384.jpg", "https://img2.ch999img.com/pic/product/440x440/2019073110013366.jpg", "https://img2.ch999img.com/pic/product/440x440/20190618233229692.jpg", "https://img2.ch999img.com/pic/product/440x440/2019061823374895.jpg", "https://img2.ch999img.com/pic/product/440x440/20190726163932660.jpg", "https://img2.ch999img.com/pic/product/440x440/20190618233212736.jpg"],
            "price": ["￥8499.00", "￥4988.00", "￥1099.00", "￥1598.00", "￥3199.00", "￥1799.00", "￥2499.00", "￥2999.00"]
        },
        "right": {
            "name": ["华为 荣耀 20 Pro 全网通版", "华为 荣耀 20i 全网通版", "华为 nova 5i 全网通版", "小米 CC9 全网通版"],
            "detail": ["定格奇幻之美", "价低官网 爆款现货", "精致外观 强悍性能", "前后双旗舰相机"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190522000914609.jpg", "https://img2.ch999img.com/pic/product/440x440/20190618234642474.jpg", "https://img2.ch999img.com/pic/product/440x440/20190621164120689.jpg", "https://img2.ch999img.com/pic/product/440x440/20190702213745831.jpg"]
        },
        "footer": ["苹果", "华为", "荣耀", "小米", "三星", "OPPO", "vivo", "魅族", "美图", "一加"]
    }, {
        "line-height": "14px",
        "name": "手机配件",
        "color": "rgb(87, 118, 159)",
        "title": "https://img2.ch999img.com//newstatic/720/213275614dbdf6.png",
        "left": {
            "name": "乐物MFI认证快充线",
            "detail": "半小时从0充到50%",
            "img": "https://img2.ch999img.com//newstatic/1591/e28adcd0975a8a.png",
            "hot": ["保护壳", "保护膜", "移动电源", "数据线"]
        },
        "center": {
            "name": ["锐思 PD+QC充电器", "iPhone XS Max 3D钢化膜", "华为 原装 9V2A 充电套装", "乐物 iPhone XS/X 3D钢化膜", "乐物 10000mAh 移动电源", "摩可 华为nova 4/荣耀V20/荣耀magic2 钢化膜", "苹果内配原装耳机", "乐物 iPhone XR 3D钢化膜"],
            "detail": ["PD快充 小巧便携", "3D全屏防刮防爆", "华为品质 安全高效", "防刮防爆防指纹", "双输入 双输出", "裸机手感 经久耐用", "内配原装耳机", "3D覆盖防刮防爆"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190617151818484.jpg", "https://img2.ch999img.com/pic/product/440x440/20180914155954228.png", "https://img2.ch999img.com/pic/product/440x440/20170518194056441.jpg", "https://img2.ch999img.com/pic/product/440x440/20190416112553342.jpg", "https://img2.ch999img.com/pic/product/440x440/20190429143553617.jpg", "https://img2.ch999img.com/pic/product/440x440/20181107141928621.jpg", "https://img2.ch999img.com/pic/product/440x440/20190429150846103.jpg", "https://img2.ch999img.com/pic/product/440x440/20180929105231555.png"],
            "price": ["￥89.00", "￥189.00", "￥69.00", "￥189.00", "￥99.00", "￥79.00", "￥129.00", "￥169.00"]
        },
        "right": {
            "name": ["乐物 一拖三 编织充电线", "华为三脚架自拍杆", "华为40W超级快充移动电源", "TOTU iPhone X/XS 防摔保护壳"],
            "detail": ["三线合一 方便使用", "伸缩自如 蓝牙遥控", "40W超级快充", "防刮耐磨 手感舒适"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190530164454672.jpg", "https://img2.ch999img.com/pic/product/440x440/20181106152616552.jpg", "https://img2.ch999img.com/pic/product/440x440/20190429143651856.jpg", "https://img2.ch999img.com/pic/product/440x440/20190506113208997.jpg"]
        },
        "footer": ["苹果保护壳", "品牌保护壳", "平板保护壳", "苹果保护膜", "品牌保护膜", "平板保护膜", "移动电源", "数据线", "充电器", "手机耳机", "手机周边"]
    }, {
        "line-height": "14px",
        "name": "电脑办公",
        "color": "rgb(69, 134, 168)",
        "title": "https://img2.ch999img.com//newstatic/718/21327fc1422c6f.png",
        "left": {
            "name": "小米 RedmiBook",
            "detail": "独显轻薄本 智能解锁2.0",
            "img": "https://img2.ch999img.com//newstatic/1592/01043234d1b43228.png",
            "hot": ["平板电脑", "苹果电脑", "办公设备", "电脑外设"]
        },
        "center": {
            "name": ["iPad 2018款 wifi版", "联想 拯救者Y7000", "华硕 飞行堡垒7", "三星 27英寸 曲面显示器", "Kindle 青春版", "华为MateBook E 2019款", "联想 小新14英寸", "Macbook Pro 2019款"],
            "detail": ["9.7英寸 A10芯片", "高色域吃鸡本", "九代酷睿处理器", "大屏曲面 震撼体验", "纤薄机身，超长续航", "高清触屏 一碰传", "更快更薄 八代酷睿", "带触控栏触控 ID"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20180328023341569.jpg", "https://img2.ch999img.com/pic/product/440x440/20190507103718647.jpg", "https://img2.ch999img.com/pic/product/440x440/20190603170715881.jpg", "https://img2.ch999img.com/pic/product/440x440/20160524114754237.jpg", "https://img2.ch999img.com/pic/product/440x440/20190321114110608.jpg", "https://img2.ch999img.com/pic/product/440x440/20190411141526378.jpg", "https://img2.ch999img.com/pic/product/440x440/20190306170205414.jpg", "https://img2.ch999img.com/pic/product/440x440/2019052816084526.jpg"],
            "price": ["￥2260.00", "￥6599.00", "￥6699.00", "￥999.00", "￥658.00", "￥4999.00", "￥4789.00", "￥12799.00"]
        },
        "right": {
            "name": ["iPad Air 2019款", "WS5200 增强版", "戴尔 灵越14", "闪迪 酷铄CZ73 U盘"],
            "detail": ["10.5 英寸 A12处理器", "双核真双频 就是快", "八代处理器 微边框", "高速读取 金属盘体"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190318215137935.jpg", "https://img2.ch999img.com/pic/product/440x440/20181102150309600.jpg", "https://img2.ch999img.com/pic/product/440x440/20190505201626872.jpg", "https://img2.ch999img.com/pic/product/440x440/20170517162000689.jpg"]
        },
        "footer": ["iPad", "平板", "二合一笔记本", "游戏本", "投影仪", "新款Surface", "品质鼠标", "机械键盘", "高速U盘", "上门服务"]
    }, {
        "line-height": "14px",
        "name": "时尚影音",
        "color": "rgb(54, 167, 165)",
        "title": "https://img2.ch999img.com//newstatic/719/213280e4348b92.png",
        "left": {
            "name": "华为FreeBuds无线耳机",
            "detail": "智能语音 现货开售",
            "img": "https://img2.ch999img.com//newstatic/1592/bde4ea6cbfb733.png",
            "hot": ["耳机耳麦", "音箱音响", "无人机", "益智早教"]
        },
        "center": {
            "name": ["大疆 口袋云台相机", "华为mini 蓝牙音箱", "FreeLace 蓝牙耳机", "哈曼卡顿便携版智能音箱", "华为智能AI音箱", "大疆 御Mavic 2 新一代无人机", "盈佳机器狗", "乐写 13英寸大屏液晶手写板"],
            "detail": ["快拍快剪,精彩即现", "乐动听 悦随行", "快充闪连 18h续航", "经典音质 便携小巧", "语音控制家居", "可折叠无人机", "智能萌宠 乐趣陪伴", "益智早教绿色环保"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20181204172521934.jpg", "https://img2.ch999img.com/pic/product/440x440/20190621181042455.png", "https://img2.ch999img.com/pic/product/440x440/20190606105332183.jpg", "https://img2.ch999img.com/pic/product/440x440/20190613114824658.jpg", "https://img2.ch999img.com/pic/product/440x440/2018102618160746.png", "https://img2.ch999img.com/pic/product/440x440/20180828164548898.jpg", "https://img2.ch999img.com/pic/product/440x440/20190708175405863.jpg", "https://img2.ch999img.com/pic/product/440x440/20190716164221658.jpg"],
            "price": ["￥2499.00", "￥129.00", "￥499.00", "￥1799.00", "￥399.00", "￥9888.00", "￥199.00", "￥109.00"]
        },
        "right": {
            "name": ["华为FreeBuds 悦享版", "JBL Charge4蓝牙音箱", "Bose QC35 II主动降噪耳机", "Bos SoundSport Free蓝牙耳机"],
            "detail": ["智慧触控悦享无线", "Type-C接口 充电更方便", "主动降噪 纯净音质", "专为运动设计"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190528142656122.jpg", "https://img2.ch999img.com/pic/product/440x440/20181203172920995.jpg", "https://img2.ch999img.com/pic/product/440x440/20171114095245898.jpg", "https://img2.ch999img.com/pic/product/440x440/20180413133311784.jpg"]
        },
        "footer": ["beats耳机", "JBL音响", "大疆无人机", "益智早教"]
    }, {
        "line-height": "14px",
        "name": "智能家居",
        "color": "rgb(83, 140, 122)",
        "title": "https://img2.ch999img.com//newstatic/721/2132811415d4ec.png",
        "left": {
            "name": "华为720空气净化器",
            "detail": "高等级滤芯 高精度检测",
            "img": "https://img2.ch999img.com//newstatic/1587/0106c78176fd61e4.png",
            "hot": ["智能电视", "创意生活", "个人护理", "智能插座"]
        },
        "center": {
            "name": ["bink电子烟 Max烟弹 4只装", "绿之源无火藤条香薰精油套装", "米家互联网空调C1 一级能效", "罗曼L11电动牙刷情侣套装", "Yeelight迷你充电台灯", "鹿客 Classic 2X智能指纹锁", "德尔玛 Deerma 加湿器", "10L家用智能感应垃圾桶"],
            "detail": ["进口香料 真烟口感", "无明火 自然清香", "变频技术 自动清洁", "情侣套装浪漫定制", "清新颜值 超长续航", "升级6大便捷开锁方式", "净化加湿 恒湿控制", "感应开合 生活防水"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/2019072917232446.jpg", "https://img2.ch999img.com/pic/product/440x440/20190724091656799.jpg", "https://img2.ch999img.com/pic/product/440x440/20190513112828661.jpg", "https://img2.ch999img.com/pic/product/440x440/20190312112114397.jpg", "https://img2.ch999img.com/pic/product/440x440/20190620173751779.jpg", "https://img2.ch999img.com/pic/product/440x440/20190806142031533.jpg", "https://img2.ch999img.com/pic/product/440x440/20190318145017998.jpg", "https://img2.ch999img.com/pic/product/440x440/20190807150713920.jpg"],
            "price": ["￥119.00", "￥59.00", "￥2099.00", "￥399.00", "￥79.00", "￥1549.00", "￥159.00", "￥109.00"]
        },
        "right": {
            "name": ["公牛 USB开关插座", "特洛克柠萌插线板", "SKG按摩器有线", "飞利浦 电动剃须刀"],
            "detail": ["智能分流 独立开关", "创意圆形排插", "多位按摩 同步热敷", "全身水洗 三刀头"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20171220105146276.jpg", "https://img2.ch999img.com/pic/product/440x440/20181012102251532.jpg", "https://img2.ch999img.com/pic/product/440x440/20190222121040442.jpg", "https://img2.ch999img.com/pic/product/440x440/20180313155649841.jpg"]
        },
        "footer": ["公牛插座", "加湿设备", "电视盒子", "按摩设备"]
    }, {
        "line-height": "14px",
        "name": "智能穿戴",
        "color": "rgb(61, 132, 156)",
        "title": "https://img2.ch999img.com//newstatic/716/213282f13ef209.png",
        "left": {
            "name": "华为手环3Pro",
            "detail": "独立GPS 50米防水",
            "img": "https://img2.ch999img.com//newstatic/1588/e20a4fbba5a389.png",
            "hot": ["智能手环", "儿童手表", "蓝牙耳机", "平衡车"]
        },
        "center": {
            "name": ["小天才Z6", "华为WATCH GT 智能手表", "洛克 手机支架万向球款", "先科 双USB数显车载充电器", "小米手环4", "小米行车记录仪1S", "科大讯飞翻译机2.0", "临时停车号码牌"],
            "detail": ["AI智能识物识单词", "高清大屏 纤薄机身", "重力感应一放即合", "纯铜机身 自动识别", "全新真彩屏", "本地语音控制", "实时互译 口语学习", "有效保护车主隐私"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20190625101059895.jpg", "https://img2.ch999img.com/pic/product/440x440/20181026184637971.jpg", "https://img2.ch999img.com/pic/product/440x440/20190118144614955.jpg", "https://img2.ch999img.com/pic/product/440x440/20190301153409512.jpg", "https://img2.ch999img.com/pic/product/440x440/20190611172807435.png", "https://img2.ch999img.com/pic/product/440x440/2018121817200421.jpg", "https://img2.ch999img.com/pic/product/440x440/20180830143945253.jpg", "https://img2.ch999img.com/pic/product/440x440/20180423163501945.jpg"],
            "price": ["￥1598.00", "￥1288.00", "￥49.00", "￥69.00", "￥189.00", "￥349.00", "￥2759.00", "￥49.00"]
        },
        "right": {
            "name": ["Apple Watch Series 4 铝金属系列GPS版", "维肯 车载座式香薰", "三星 Galaxy Watch智能手表", "米家电动滑板车Pro"],
            "detail": ["唤醒更好的你", "合金材质 祛除车内异味", "息屏显示 一目了然", "超长续航 强劲动力"],
            "img": ["https://img2.ch999img.com/pic/product/440x440/20180913075620973.jpg", "https://img2.ch999img.com/pic/product/440x440/20190802183455379.jpg", "https://img2.ch999img.com/pic/product/440x440/20180911190407967.jpg", "https://img2.ch999img.com/pic/product/440x440/20190215145334580.jpg"]
        },
        "footer": ["华为手表", "小米手环", "米家滑板车", "小天才儿童手表"]
    }];