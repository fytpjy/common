(function(){

    'use strict';

    var ys = function(){},

        shareCallback =  function(){},

        payCallback =  function(){},

        errorCode = {
            ERROR_PARAMS: "参数错误",
            NO_VERSIONS: "版本号不支持",
            NO_JQUERY: "请先加载jquery"
        },

        ysConfig = {
            jquery: "https://media.youshu.cc/static/js/jquery-2.1.4.min.js",
            weixin: "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
            mlink: "https://static.mlinks.cc/scripts/dist/mlink.min.js",
            player: "https://media.youshu.cc/static/js/aplayer.1.6.0.min.js",
            scroll: "https://media.youshu.cc/static/js/mobiscroll-2.13.2.full.min.js",
            handlebar: "https://media.youshu.cc/static/js/handlebars.3.0.3.min.js"
        },

        pro_city = [
            {
                province: "北京",
                id: "",
                city: [
                    {
                        name: "石景山",
                        id: ""
                    },
                    {
                        name: "朝阳",
                        id: ""
                    },
                    {
                        name: "丰台",
                        id: ""
                    },
                    {
                        name: "宣武",
                        id: ""
                    },
                    {
                        name: "崇文",
                        id: ""
                    },
                    {
                        name: "西城",
                        id: ""
                    },
                    {
                        name: "东城",
                        id: ""
                    },
                    {
                        name: "海淀",
                        id: ""
                    },
                    {
                        name: "门头沟",
                        id: ""
                    },
                    {
                        name: "延庆",
                        id: ""
                    },
                    {
                        name: "密云",
                        id: ""
                    },
                    {
                        name: "平谷",
                        id: ""
                    },
                    {
                        name: "怀柔",
                        id: ""
                    },
                    {
                        name: "大兴",
                        id: ""
                    },
                    {
                        name: "昌平",
                        id: ""
                    },
                    {
                        name: "顺义",
                        id: ""
                    },
                    {
                        name: "通州",
                        id: ""
                    },
                    {
                        name: "房山",
                        id: ""
                    },
                ]
            },
            {
                province: "上海",
                id: "",
                city: [
                    {
                        name: "杨浦",
                        id: ""
                    },
                    {
                        name: "虹口",
                        id: ""
                    },
                    {
                        name: "普陀",
                        id: ""
                    },
                    {
                        name: "闸北",
                        id: ""
                    },
                    {
                        name: "长宁",
                        id: ""
                    },
                    {
                        name: "静安",
                        id: ""
                    },
                    {
                        name: "黄浦",
                        id: ""
                    },
                    {
                        name: "徐汇",
                        id: ""
                    },
                    {
                        name: "闵行",
                        id: ""
                    },
                    {
                        name: "宝山",
                        id: ""
                    },
                    {
                        name: "嘉定",
                        id: ""
                    },
                    {
                        name: "崇明",
                        id: ""
                    },
                    {
                        name: "南汇",
                        id: ""
                    },
                    {
                        name: "青浦",
                        id: ""
                    },
                    {
                        name: "松江",
                        id: ""
                    },
                    {
                        name: "金山",
                        id: ""
                    },
                    {
                        name: "浦东",
                        id: ""
                    },
                    {
                        name: "卢湾",
                        id: ""
                    },
                    {
                        name: "奉贤",
                        id: ""
                    },
                ]
            },
            {
                province: "广东",
                id: "",
                city: [
                    {
                        name: "广州",
                        id: ""
                    },
                    {
                        name: "珠海",
                        id: ""
                    },
                    {
                        name: "汕头",
                        id: ""
                    },
                    {
                        name: "汕尾",
                        id: ""
                    },
                    {
                        name: "韶关",
                        id: ""
                    },
                    {
                        name: "云浮",
                        id: ""
                    },
                    {
                        name: "深圳",
                        id: ""
                    },
                    {
                        name: "佛山",
                        id: ""
                    },
                    {
                        name: "江门",
                        id: ""
                    },
                    {
                        name: "湛江",
                        id: ""
                    },
                    {
                        name: "茂名",
                        id: ""
                    },
                    {
                        name: "肇庆",
                        id: ""
                    },
                    {
                        name: "惠州",
                        id: ""
                    },
                    {
                        name: "梅州",
                        id: ""
                    },
                    {
                        name: "河源",
                        id: ""
                    },
                    {
                        name: "阳江",
                        id: ""
                    },
                    {
                        name: "清远",
                        id: ""
                    },
                    {
                        name: "东莞",
                        id: ""
                    },
                    {
                        name: "中山",
                        id: ""
                    },
                    {
                        name: "潮州",
                        id: ""
                    },
                    {
                        name: "揭阳",
                        id: ""
                    },
                ]
            },
            {
                province: "天津",
                id: "",
                city: [
                    {
                        name: "东丽",
                        id: ""
                    },
                    {
                        name: "武清",
                        id: ""
                    },
                    {
                        name: "塘沽",
                        id: ""
                    },
                    {
                        name: "汉沽",
                        id: ""
                    },
                    {
                        name: "大港",
                        id: ""
                    },
                    {
                        name: "蓟县",
                        id: ""
                    },
                    {
                        name: "静海",
                        id: ""
                    },
                    {
                        name: "宁河",
                        id: ""
                    },
                    {
                        name: "宝坻",
                        id: ""
                    },
                    {
                        name: "西青",
                        id: ""
                    },
                    {
                        name: "红桥",
                        id: ""
                    },
                    {
                        name: "河北",
                        id: ""
                    },
                    {
                        name: "南开",
                        id: ""
                    },
                    {
                        name: "津南",
                        id: ""
                    },
                    {
                        name: "和平",
                        id: ""
                    },
                    {
                        name: "河东",
                        id: ""
                    },
                    {
                        name: "河西",
                        id: ""
                    },
                    {
                        name: "北辰",
                        id: ""
                    },
                ]
            },
            {
                province: "辽宁",
                id: "",
                city: [
                    {
                        name: "阜新",
                        id: ""
                    },
                    {
                        name: "辽阳",
                        id: ""
                    },
                    {
                        name: "铁岭",
                        id: ""
                    },
                    {
                        name: "盘锦",
                        id: ""
                    },
                    {
                        name: "营口",
                        id: ""
                    },
                    {
                        name: "锦州",
                        id: ""
                    },
                    {
                        name: "丹东",
                        id: ""
                    },
                    {
                        name: "本溪",
                        id: ""
                    },
                    {
                        name: "抚顺",
                        id: ""
                    },
                    {
                        name: "大连",
                        id: ""
                    },
                    {
                        name: "沈阳",
                        id: ""
                    },
                    {
                        name: "朝阳",
                        id: ""
                    },
                    {
                        name: "葫芦岛",
                        id: ""
                    },
                    {
                        name: "鞍山",
                        id: ""
                    },
                ]
            },
            {
                province: "河北",
                id: "",
                city: [
                    {
                        name: "张家口",
                        id: ""
                    },
                    {
                        name: "承德",
                        id: ""
                    },
                    {
                        name: "沧州",
                        id: ""
                    },
                    {
                        name: "衡水",
                        id: ""
                    },
                    {
                        name: "廊坊",
                        id: ""
                    },
                    {
                        name: "邯郸",
                        id: ""
                    },
                    {
                        name: "秦皇岛",
                        id: ""
                    },
                    {
                        name: "唐山",
                        id: ""
                    },
                    {
                        name: "邢台",
                        id: ""
                    },
                    {
                        name: "石家庄",
                        id: ""
                    },
                    {
                        name: "保定",
                        id: ""
                    },
                ]
            },
            {
                province: "河南",
                id: "",
                city: [
                    {
                        name: "周口",
                        id: ""
                    },
                    {
                        name: "商丘",
                        id: ""
                    },
                    {
                        name: "信阳",
                        id: ""
                    },
                    {
                        name: "驻马店",
                        id: ""
                    },
                    {
                        name: "漯河",
                        id: ""
                    },
                    {
                        name: "许昌",
                        id: ""
                    },
                    {
                        name: "濮阳",
                        id: ""
                    },
                    {
                        name: "焦作",
                        id: ""
                    },
                    {
                        name: "新乡",
                        id: ""
                    },
                    {
                        name: "鹤壁",
                        id: ""
                    },
                    {
                        name: "南阳",
                        id: ""
                    },
                    {
                        name: "三门峡",
                        id: ""
                    },
                    {
                        name: "郑州",
                        id: ""
                    },
                    {
                        name: "开封",
                        id: ""
                    },
                    {
                        name: "洛阳",
                        id: ""
                    },
                    {
                        name: "平顶山",
                        id: ""
                    },
                    {
                        name: "安阳",
                        id: ""
                    },
                ]
            },
            {
                province: "四川",
                id: "",
                city: [
                    {
                        name: "雅安",
                        id: ""
                    },
                    {
                        name: "绵阳",
                        id: ""
                    },
                    {
                        name: "德阳",
                        id: ""
                    },
                    {
                        name: "泸州",
                        id: ""
                    },
                    {
                        name: "自贡",
                        id: ""
                    },
                    {
                        name: "成都",
                        id: ""
                    },
                    {
                        name: "广元",
                        id: ""
                    },
                    {
                        name: "攀枝花",
                        id: ""
                    },
                    {
                        name: "遂宁",
                        id: ""
                    },
                    {
                        name: "内江",
                        id: ""
                    },
                    {
                        name: "南充",
                        id: ""
                    },
                    {
                        name: "眉山",
                        id: ""
                    },
                    {
                        name: "宜宾",
                        id: ""
                    },
                    {
                        name: "广安",
                        id: ""
                    },
                    {
                        name: "达州",
                        id: ""
                    },
                    {
                        name: "乐山",
                        id: ""
                    },
                    {
                        name: "巴中",
                        id: ""
                    },
                    {
                        name: "资阳",
                        id: ""
                    },
                    {
                        name: "阿坝藏族羌族自治州",
                        id: ""
                    },
                    {
                        name: "甘孜藏族自治州",
                        id: ""
                    },
                    {
                        name: "凉山彝族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "重庆",
                id: "",
                city: [
                        {
                            name: "渝中",
                            id: ""
                        },
                        {
                            name: "巫溪",
                            id: ""
                        },
                        {
                            name: "巫山",
                            id: ""
                        },
                        {
                            name: "奉节",
                            id: ""
                        },
                        {
                            name: "云阳",
                            id: ""
                        },
                        {
                            name: "江津",
                            id: ""
                        },
                        {
                            name: "合川",
                            id: ""
                        },
                        {
                            name: "永川",
                            id: ""
                        },
                        {
                            name: "南川",
                            id: ""
                        },
                        {
                            name: "垫江",
                            id: ""
                        },
                        {
                            name: "开县",
                            id: ""
                        },
                        {
                            name: "忠县",
                            id: ""
                        },
                        {
                            name: "渝北",
                            id: ""
                        },
                        {
                            name: "双桥",
                            id: ""
                        },
                        {
                            name: "万盛",
                            id: ""
                        },
                        {
                            name: "北碚",
                            id: ""
                        },
                        {
                            name: "南岸",
                            id: ""
                        },
                        {
                            name: "九龙坡",
                            id: ""
                        },
                        {
                            name: "沙坪坝",
                            id: ""
                        },
                        {
                            name: "江北",
                            id: ""
                        },
                        {
                            name: "大渡口",
                            id: ""
                        },
                        {
                            name: "涪陵",
                            id: ""
                        },
                        {
                            name: "万州",
                            id: ""
                        },
                        {
                            name: "巴南",
                            id: ""
                        },
                        {
                            name: "黔江",
                            id: ""
                        },
                        {
                            name: "武隆",
                            id: ""
                        },
                        {
                            name: "丰都",
                            id: ""
                        },
                        {
                            name: "城口",
                            id: ""
                        },
                        {
                            name: "梁平",
                            id: ""
                        },
                        {
                            name: "璧山",
                            id: ""
                        },
                        {
                            name: "荣昌",
                            id: ""
                        },
                        {
                            name: "大足",
                            id: ""
                        },
                        {
                            name: "铜梁",
                            id: ""
                        },
                        {
                            name: "潼南",
                            id: ""
                        },
                        {
                            name: "綦江",
                            id: ""
                        },
                        {
                            name: "长寿",
                            id: ""
                        },
                        {
                            name: "石柱土家族自治县",
                            id: ""
                        },
                        {
                            name: "秀山土家族苗族自治县",
                            id: ""
                        },
                        {
                            name: "酉阳土家族苗族自治县",
                            id: ""
                        },
                        {
                            name: "彭水苗族土家族自治县",
                            id: ""
                        },
                ]
            },
            {
                province: "浙江",
                id: "",
                city: [
                    {
                        name: "绍兴",
                        id: ""
                    },
                    {
                        name: "湖州",
                        id: ""
                    },
                    {
                        name: "金华",
                        id: ""
                    },
                    {
                        name: "嘉兴",
                        id: ""
                    },
                    {
                        name: "温州",
                        id: ""
                    },
                    {
                        name: "杭州",
                        id: ""
                    },
                    {
                        name: "宁波",
                        id: ""
                    },
                    {
                        name: "衢州",
                        id: ""
                    },
                    {
                        name: "丽水",
                        id: ""
                    },
                    {
                        name: "舟山",
                        id: ""
                    },
                    {
                        name: "台州",
                        id: ""
                    },
                ]
            },
            {
                province: "吉林",
                id: "",
                city: [
                    {
                        name: "吉林",
                        id: ""
                    },
                    {
                        name: "辽源",
                        id: ""
                    },
                    {
                        name: "长春",
                        id: ""
                    },
                    {
                        name: "四平",
                        id: ""
                    },
                    {
                        name: "白城",
                        id: ""
                    },
                    {
                        name: "白山",
                        id: ""
                    },
                    {
                        name: "松原",
                        id: ""
                    },
                    {
                        name: "通化",
                        id: ""
                    },
                    {
                        name: "延边朝鲜族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "黑龙江",
                id: "",
                city: [
                        {
                            name: "齐齐哈尔",
                            id: ""
                        },
                        {
                            name: "七台河",
                            id: ""
                        },
                        {
                            name: "哈尔滨",
                            id: ""
                        },
                        {
                            name: "牡丹江",
                            id: ""
                        },
                        {
                            name: "佳木斯",
                            id: ""
                        },
                        {
                            name: "伊春",
                            id: ""
                        },
                        {
                            name: "双鸭山",
                            id: ""
                        },
                        {
                            name: "鹤岗",
                            id: ""
                        },
                        {
                            name: "鸡西",
                            id: ""
                        },
                        {
                            name: "大庆",
                            id: ""
                        },
                        {
                            name: "黑河",
                            id: ""
                        },
                        {
                            name: "绥化",
                            id: ""
                        },
                        {
                            name: "大兴安岭地区",
                            id: ""
                        },
                ]
            },
            {
                province: "江苏",
                id: "",
                city: [
                        {
                            name: "南京",
                            id: ""
                        },
                        {
                            name: "盐城",
                            id: ""
                        },
                        {
                            name: "宿迁",
                            id: ""
                        },
                        {
                            name: "泰州",
                            id: ""
                        },
                        {
                            name: "镇江",
                            id: ""
                        },
                        {
                            name: "淮安",
                            id: ""
                        },
                        {
                            name: "扬州",
                            id: ""
                        },
                        {
                            name: "连云港",
                            id: ""
                        },
                        {
                            name: "南通",
                            id: ""
                        },
                        {
                            name: "苏州",
                            id: ""
                        },
                        {
                            name: "常州",
                            id: ""
                        },
                        {
                            name: "徐州",
                            id: ""
                        },
                        {
                            name: "无锡",
                            id: ""
                        },
                ]
            },
            {
                province: "青海",
                id: "",
                city: [
                    {
                        name: "西宁",
                        id: ""
                    },
                    {
                        name: "海东地区",
                        id: ""
                    },
                    {
                        name: "玉树藏族自治州",
                        id: ""
                    },
                    {
                        name: "果洛藏族自治州",
                        id: ""
                    },
                    {
                        name: "黄南藏族自治州",
                        id: ""
                    },
                    {
                        name: "海北藏族自治州",
                        id: ""
                    },
                    {
                        name: "海南藏族自治州",
                        id: ""
                    },
                    {
                        name: "海西蒙古族藏族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "宁夏",
                id: "",
                city: [
                    {
                        name: "石嘴山",
                        id: ""
                    },
                    {
                        name: "中卫",
                        id: ""
                    },
                    {
                        name: "固原",
                        id: ""
                    },
                    {
                        name: "吴忠",
                        id: ""
                    },
                    {
                        name: "银川",
                        id: ""
                    },
                ]
            },
            {
                province: "贵州",
                id: "",
                city: [
                    {
                        name: "贵阳",
                        id: ""
                    },
                    {
                        name: "六盘水",
                        id: ""
                    },
                    {
                        name: "铜仁地区",
                        id: ""
                    },
                    {
                        name: "遵义",
                        id: ""
                    },
                    {
                        name: "安顺",
                        id: ""
                    },
                    {
                        name: "毕节地区",
                        id: ""
                    },
                    {
                        name: "黔南布依族苗族自治州",
                        id: ""
                    },
                    {
                        name: "黔东南苗族侗族自治州",
                        id: ""
                    },
                    {
                        name: "黔西南布依族苗族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "山东",
                id: "",
                city: [
                    {
                        name: "泰安",
                        id: ""
                    },
                    {
                        name: "济南",
                        id: ""
                    },
                    {
                        name: "青岛",
                        id: ""
                    },
                    {
                        name: "淄博",
                        id: ""
                    },
                    {
                        name: "枣庄",
                        id: ""
                    },
                    {
                        name: "东营",
                        id: ""
                    },
                    {
                        name: "烟台",
                        id: ""
                    },
                    {
                        name: "济宁",
                        id: ""
                    },
                    {
                        name: "威海",
                        id: ""
                    },
                    {
                        name: "日照",
                        id: ""
                    },
                    {
                        name: "莱芜",
                        id: ""
                    },
                    {
                        name: "临沂",
                        id: ""
                    },
                    {
                        name: "德州",
                        id: ""
                    },
                    {
                        name: "聊城",
                        id: ""
                    },
                    {
                        name: "滨州",
                        id: ""
                    },
                    {
                        name: "菏泽",
                        id: ""
                    },
                    {
                        name: "潍坊",
                        id: ""
                    },
                ]
            },
            {
                province: "江西",
                id: "",
                city: [
                    {
                        name: "景德镇",
                        id: ""
                    },
                    {
                        name: "南昌",
                        id: ""
                    },
                    {
                        name: "吉安",
                        id: ""
                    },
                    {
                        name: "宜春",
                        id: ""
                    },
                    {
                        name: "新余",
                        id: ""
                    },
                    {
                        name: "九江",
                        id: ""
                    },
                    {
                        name: "萍乡",
                        id: ""
                    },
                    {
                        name: "鹰潭",
                        id: ""
                    },
                    {
                        name: "抚州",
                        id: ""
                    },
                    {
                        name: "上饶",
                        id: ""
                    },
                    {
                        name: "赣州",
                        id: ""
                    },
                ]
            },
            {
                province: "福建",
                id: "",
                city: [
                    {
                        name: "福州",
                        id: ""
                    },
                    {
                        name: "厦门",
                        id: ""
                    },
                    {
                        name: "宁德",
                        id: ""
                    },
                    {
                        name: "龙岩",
                        id: ""
                    },
                    {
                        name: "南平",
                        id: ""
                    },
                    {
                        name: "漳州",
                        id: ""
                    },
                    {
                        name: "泉州",
                        id: ""
                    },
                    {
                        name: "三明",
                        id: ""
                    },
                    {
                        name: "莆田",
                        id: ""
                    },
                ]
            },
            {
                province: "山西",
                id: "",
                city: [
                    {
                        name: "大同",
                        id: ""
                    },
                    {
                        name: "太原",
                        id: ""
                    },
                    {
                        name: "临汾",
                        id: ""
                    },
                    {
                        name: "晋城",
                        id: ""
                    },
                    {
                        name: "长治",
                        id: ""
                    },
                    {
                        name: "晋中",
                        id: ""
                    },
                    {
                        name: "朔州",
                        id: ""
                    },
                    {
                        name: "运城",
                        id: ""
                    },
                    {
                        name: "忻州",
                        id: ""
                    },
                    {
                        name: "吕梁",
                        id: ""
                    },
                    {
                        name: "阳泉",
                        id: ""
                    },
                ]
            },
            {
                province: "甘肃",
                id: "",
                city: [
                    {
                        name: "陇南",
                        id: ""
                    },
                    {
                        name: "庆阳",
                        id: ""
                    },
                    {
                        name: "定西",
                        id: ""
                    },
                    {
                        name: "兰州",
                        id: ""
                    },
                    {
                        name: "金昌",
                        id: ""
                    },
                    {
                        name: "天水",
                        id: ""
                    },
                    {
                        name: "白银",
                        id: ""
                    },
                    {
                        name: "酒泉",
                        id: ""
                    },
                    {
                        name: "平凉",
                        id: ""
                    },
                    {
                        name: "张掖",
                        id: ""
                    },
                    {
                        name: "武威",
                        id: ""
                    },
                    {
                        name: "嘉峪关",
                        id: ""
                    },
                    {
                        name: "甘南藏族自治州",
                        id: ""
                    },
                    {
                        name: "临夏回族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "陕西",
                id: "",
                city: [
                    {
                        name: "汉中",
                        id: ""
                    },
                    {
                        name: "商洛",
                        id: ""
                    },
                    {
                        name: "西安",
                        id: ""
                    },
                    {
                        name: "安康",
                        id: ""
                    },
                    {
                        name: "铜川",
                        id: ""
                    },
                    {
                        name: "宝鸡",
                        id: ""
                    },
                    {
                        name: "渭南",
                        id: ""
                    },
                    {
                        name: "咸阳",
                        id: ""
                    },
                    {
                        name: "延安",
                        id: ""
                    },
                    {
                        name: "榆林",
                        id: ""
                    },
                ]
            },
            {
                province: "湖北",
                id: "",
                city: [
                    {
                        name: "武汉",
                        id: ""
                    },
                    {
                        name: "荆州",
                        id: ""
                    },
                    {
                        name: "黄石",
                        id: ""
                    },
                    {
                        name: "随州",
                        id: ""
                    },
                    {
                        name: "咸宁",
                        id: ""
                    },
                    {
                        name: "黄冈",
                        id: ""
                    },
                    {
                        name: "孝感",
                        id: ""
                    },
                    {
                        name: "鄂州",
                        id: ""
                    },
                    {
                        name: "荆门",
                        id: ""
                    },
                    {
                        name: "襄樊",
                        id: ""
                    },
                    {
                        name: "宜昌",
                        id: ""
                    },
                    {
                        name: "十堰",
                        id: ""
                    },
                    {
                        name: "省直辖行政单位",
                        id: ""
                    },
                    {
                        name: "恩施土家族苗族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "安徽",
                id: "",
                city: [
                    {
                        name: "安庆",
                        id: ""
                    },
                    {
                        name: "池州",
                        id: ""
                    },
                    {
                        name: "亳州",
                        id: ""
                    },
                    {
                        name: "宿州",
                        id: ""
                    },
                    {
                        name: "阜阳",
                        id: ""
                    },
                    {
                        name: "滁州",
                        id: ""
                    },
                    {
                        name: "六安",
                        id: ""
                    },
                    {
                        name: "黄山",
                        id: ""
                    },
                    {
                        name: "铜陵",
                        id: ""
                    },
                    {
                        name: "马鞍山",
                        id: ""
                    },
                    {
                        name: "淮北",
                        id: ""
                    },
                    {
                        name: "淮南",
                        id: ""
                    },
                    {
                        name: "蚌埠",
                        id: ""
                    },
                    {
                        name: "芜湖",
                        id: ""
                    },
                    {
                        name: "合肥",
                        id: ""
                    },
                    {
                        name: "宣城",
                        id: ""
                    },
                ]
            },
            {
                province: "广西",
                id: "",
                city: [
                    {
                        name: "桂林",
                        id: ""
                    },
                    {
                        name: "崇左",
                        id: ""
                    },
                    {
                        name: "河池",
                        id: ""
                    },
                    {
                        name: "贺州",
                        id: ""
                    },
                    {
                        name: "百色",
                        id: ""
                    },
                    {
                        name: "玉林",
                        id: ""
                    },
                    {
                        name: "贵港",
                        id: ""
                    },
                    {
                        name: "钦州",
                        id: ""
                    },
                    {
                        name: "防城港",
                        id: ""
                    },
                    {
                        name: "北海",
                        id: ""
                    },
                    {
                        name: "梧州",
                        id: ""
                    },
                    {
                        name: "柳州",
                        id: ""
                    },
                    {
                        name: "南宁",
                        id: ""
                    },
                    {
                        name: "来宾",
                        id: ""
                    },
                ]
            },
            {
                province: "云南",
                id: "",
                city: [
                    {
                        name: "昆明",
                        id: ""
                    },
                    {
                        name: "曲靖",
                        id: ""
                    },
                    {
                        name: "玉溪",
                        id: ""
                    },
                    {
                        name: "保山",
                        id: ""
                    },
                    {
                        name: "昭通",
                        id: ""
                    },
                    {
                        name: "思茅",
                        id: ""
                    },
                    {
                        name: "丽江",
                        id: ""
                    },
                    {
                        name: "临沧",
                        id: ""
                    },
                    {
                        name: "大理白族自治州",
                        id: ""
                    },
                    {
                        name: "西双版纳傣族自治州",
                        id: ""
                    },
                    {
                        name: "德宏傣族景颇族自治州",
                        id: ""
                    },
                    {
                        name: "怒江傈僳族自治州",
                        id: ""
                    },
                    {
                        name: "迪庆藏族自治州",
                        id: ""
                    },
                    {
                        name: "楚雄彝族自治州",
                        id: ""
                    },
                    {
                        name: "文山壮族苗族自治州",
                        id: ""
                    },
                    {
                        name: "红河哈尼族彝族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "海南",
                id: "",
                city: [
                    {
                        name: "三亚",
                        id: ""
                    },
                    {
                        name: "海口",
                        id: ""
                    },
                    {
                        name: "省直辖县级行政单位",
                        id: ""
                    },
                ]
            },
            {
                province: "湖南",
                id: "",
                city: [
                    {
                        name: "长沙",
                        id: ""
                    },
                    {
                        name: "株洲",
                        id: ""
                    },
                    {
                        name: "郴州",
                        id: ""
                    },
                    {
                        name: "湘潭",
                        id: ""
                    },
                    {
                        name: "怀化",
                        id: ""
                    },
                    {
                        name: "衡阳",
                        id: ""
                    },
                    {
                        name: "永州",
                        id: ""
                    },
                    {
                        name: "益阳",
                        id: ""
                    },
                    {
                        name: "张家界",
                        id: ""
                    },
                    {
                        name: "常德",
                        id: ""
                    },
                    {
                        name: "岳阳",
                        id: ""
                    },
                    {
                        name: "邵阳",
                        id: ""
                    },
                    {
                        name: "娄底",
                        id: ""
                    },
                    {
                        name: "湘西土家族苗族自治州",
                        id: ""
                    },
                ]
            },
            {
                province: "新疆",
                id: "",
                city: [
                    {
                        name: "乌鲁木齐",
                        id: ""
                    },
                    {
                        name: "克拉玛依",
                        id: ""
                    },
                    {
                        name: "吐鲁番地区",
                        id: ""
                    },
                    {
                        name: "哈密地区",
                        id: ""
                    },
                    {
                        name: "塔城地区",
                        id: ""
                    },
                    {
                        name: "阿勒泰地区",
                        id: ""
                    },
                    {
                        name: "喀什地区",
                        id: ""
                    },
                    {
                        name: "阿克苏地区",
                        id: ""
                    },
                    {
                        name: "省直辖行政单位",
                        id: ""
                    },
                    {
                        name: "和田地区",
                        id: ""
                    },
                    {
                        name: "伊犁哈萨克自治州",
                        id: ""
                    },
                    {
                        name: "巴音郭楞蒙古自治州",
                        id: ""
                    },
                    {
                        name: "博尔塔拉蒙古自治州",
                        id: ""
                    },
                    {
                        name: "昌吉回族自治州",
                        id: ""
                    },
                    {
                        name: "克孜勒苏柯尔克孜自治州",
                        id: ""
                    },
            ]
            },
            {
                province: "西藏",
                id: "",
                city: [
                    {
                        name: "拉萨",
                        id: ""
                    },
                    {
                        name: "林芝地区",
                        id: ""
                    },
                    {
                        name: "阿里地区",
                        id: ""
                    },
                    {
                        name: "那曲地区",
                        id: ""
                    },
                    {
                        name: "山南地区",
                        id: ""
                    },
                    {
                        name: "昌都地区",
                        id: ""
                    },
                    {
                        name: "日喀则地区",
                        id: ""
                    },
                ]
            },
            {
                province: "香港",
                id: "",
                city: [
                    {
                        name: "香港 香港",
                        id: ""
                    },
                ]
            },
                {
                    province: "台湾",
                    id: "",
                    city: [

                    {
                        name: "台北",
                        id: ""
                    },
                    {
                        name: "基隆",
                        id: ""
                    },
                ]
            },
            {
                province: "澳门",
                id: "",
                city: [
                    {
                        name: "澳门",
                        id: ""
                    },
                ]
            },
            {
                province: "内蒙古",
                id: "",
                city: [
                    {
                        name: "呼和浩特",
                        id: ""
                    },
                    {
                        name: "赤峰",
                        id: ""
                    },
                    {
                        name: "巴彦淖尔",
                        id: ""
                    },
                    {
                        name: "通辽",
                        id: ""
                    },
                    {
                        name: "乌海",
                        id: ""
                    },
                    {
                        name: "包头",
                        id: ""
                    },
                    {
                        name: "兴安盟",
                        id: ""
                    },
                    {
                        name: "阿拉善盟",
                        id: ""
                    },
                    {
                        name: "乌兰察布",
                        id: ""
                    },
                    {
                        name: "呼伦贝尔",
                        id: ""
                    },
                    {
                        name: "鄂尔多斯",
                        id: ""
                    },
                    {
                        name: "锡林郭勒盟",
                        id: ""
                    },
                ]
            }
        ];

    /*
     页面字体大小设置
     */
    function resizeBaseFontSize(){
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        if(deviceWidth > 800){
            deviceWidth = 800;
        }
        rootHtml.style.fontSize = deviceWidth /37.5 + "px";
    }
    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);

    ys.prototype.extend = ys.extend = function() {
        // copy reference to target object
        var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;

        // Handle a deep copy situation
        if ( target.constructor == Boolean ) {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target != "object" && typeof target != "function" )
            target = {};

        // extend ys itself if only one argument is passed
        if ( length == 1 ) {
            target = this;
            i = 0;
        }

        for ( ; i < length; i++ )
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null )
            // Extend the base object
                for ( var name in options ) {
                    // Prevent never-ending loop
                    if ( target === options[ name ] )
                        continue;

                    // Recurse if we're merging object values
                    if ( deep && options[ name ] && typeof options[ name ] == "object" && target[ name ] && !options[ name ].nodeType )
                        target[ name ] = ys.extend( target[ name ], options[ name ] );

                    // Don't bring in undefined values
                    else if ( options[ name ] != undefined )
                        target[ name ] = options[ name ];
                }

        // Return the modified object
        return target;
    }

    // args is for internal usage only
    ys.prototype.each = ys.each = function( object, callback, args ) {
        if ( args ) {
            if ( object.length == undefined ) {
                for ( var name in object )
                    if ( callback.apply( object[ name ], args ) === false )
                        break;
            } else
                for ( var i = 0, length = object.length; i < length; i++ )
                    if ( callback.apply( object[ i ], args ) === false )
                        break;

            // A special, fast, case for the most common use of each
        } else {
            if ( object.length == undefined ) {
                for ( var nam in object )
                    if ( callback.call( object[ nam ], nam, object[ nam ] ) === false )
                        break;
            } else
                for ( var ii = 0, len = object.len, value = object[0];
                    ii < len && callback.call( value, ii, value ) !== false; value = object[++ii] ){}
        }

        return object;
    }

    ys.extend({
        /*
         初始化加载第三方js
         */
        jsInsertBefore: function(url,callback){
            var hm = ys.createEle({
                div: "script",
                arrt: [
                    {
                        name: "src",
                        value: url
                    }
                ]
            });
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);

            hm.onload = function(){
                callback?callback():""
            }
        },

        /*
         错误日志接口
         */
        errorLog: function(content){
            var postData = content !=  null ? content : {};
            var timestamp=new Date().getTime();
            var userId = ys.getCookie("HTTP_X_YS_UID");
            //微信版本号
            var wechatInfo = navigator.userAgent.split("MicroMessenger")[1].split("/")[1].split(" ")[0];

            if(!wechatInfo) {
                wechatInfo="";
            }
            //请求url
            postData.requestUrl = window.location.href;
            //level取值：DEBUG,INFO,WARN,ERR,FATAL
            var message={
                msg: ys.config.logErrorType,
                level:"ERR",
                timestamp:timestamp,
                data:postData
            };

            var postData = content !=  null ? content : {};
            var timestamp=new Date().getTime();
            var user_id = ys.getCookie("HTTP_X_YS_UID");
            //微信版本号
            var wechatInfo = navigator.userAgent.split("MicroMessenger")[1].split("/")[1].split(" ")[0];

            if(!wechatInfo) {
                wechatInfo="";
            }
            //请求url
            postData.request_url = window.location.href;
            //PHPSESSID
            postData.phpsessID=ys.getCookie("PHPSESSID")
            //当前计划、活动的标题
            postData.title=document.title;
            //用户token
            postData.usertoken=ys.getCookie("HTTP_X_YS_USER_TOKEN");
            //level取值：DEBUG,INFO,WARN,ERR,FATAL
            var message=[{
                level:"ERR",
                timestamp:timestamp,
                data:postData,
            }];
            //存储log日志
            ys.ajax({
                url: "http://readooapi.youshu.cc/m/xlog",
                type: 'post',
                data: {"type":"WEB","user_id":user_id,"soft":"wechat_"+wechatInfo,"os":ys.versions(),"messages":JSON.stringify(message)},
                dataType: 'json',
                success: function(json){

                }
            })
        },

        /*
         json转字符串
         */
        jsonToString: function(json){
            var str = "";
            for(var i in json){
                var val = String(json[i])
                if((val.indexOf("http")>=0 || val.indexOf("https")>=0) && val.indexOf("&")>=0){
                    str += i + "=" + encodeURIComponent(val) + "&"
                }else{
                    str += i + "=" + json[i] + "&"
                }
            }
            return str.substring(0,str.length-1)
        },

        /*
         获取dom元素ID
         */
        domGetId: function(id){
            return document.getElementById(id)
        },

        /*
         ajax请求数据
         */
        ajax: function(options){
            var type = options.type.toUpperCase(),
                requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject("Microsoft.XMLHTTP");
            }

            requestObj.open(type, options.url, true);
            requestObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
            requestObj.setRequestHeader("Accept", "application/json");
            requestObj.withCredentials = options.withCredentials?true:false;
            requestObj.send(ys.jsonToString(options.data));
            requestObj.onreadystatechange = function(){
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        console.log(requestObj)
                        var obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        if(options.success){
                            options.success(obj)
                        }
                        //log日志
                        if(obj.code!=1){
                            var logContent={
                                code:"AJAX_CODE",
                                ajaxUrl:requestObj.responseURL,
                                requestData: options.data,
                                responseData: {
                                    code: obj.code,
                                    msg: obj.msg,
                                },
                            }
                            //存储log日志
                            ys.errorLog(logContent);
                            console.log(logContent)
                        }
                    } else {
                        if(options.fail){
                            options.fail(requestObj)
                        }
                        //记录错误日志
                        var logContent={
                            code:"AJAX_CODE",
                            responseData: {
                                msg: requestObj,
                            },
                        }
                        ys.errorLog(logContent);
                    }
                }
            }
        },

        /*
         判断当前是否微信
         */
        isWeiXin: function(){
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger')
                return true;
            return false;
        },

        /*
         判断当前是ios还是android
         */
        versions: function(){
            var u = navigator.userAgent,os;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

            if(isiOS){
                os= "ios";
            }else if(isAndroid){
                os = "android";
            }else {
                os = "";
            }
            return os;
        },

        /*
         点击统计事件
         */
        dbEvent: function(options){
            if(options.button){
                ys.domGetId(options.button).onclick = function(){
                    ys.addEvent(options)
                }
            }else{
                ys.addEvent(options)
            }
        },

        //事件统计
        addEvent: function(options){
            if(ys.config && ys.config.dbId){
                try{
                    _hmt.push([
                        '_trackEvent',
                        options.category,
                        options.action,
                        options.opt_label,
                        options.opt_value
                    ])
                }
                catch(e){
                    console.log(e)
                }
            }else{
                console.warn("未加载统计")
            }
        },

        /*
         微信分享配置
         */
        wxConfig: function(options){
            if(ys.config && ys.config.isLoadWx){
                window.onload = function(){
                    wx.config({
                        debug: options.debug,
                        appId: options.appId,
                        timestamp: options.timestamp,
                        nonceStr: options.nonceStr,
                        signature: options.signature,
                        jsApiList: [
                            'checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem',
                            'translateVoice', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'onVoicePlayEnd', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice',
                            'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay',
                        ]
                    });
                    wx.ready(function(){
                        if(options.shareTitle && options.shareLink && options.shareDesc){
                            var sharet = {
                                title: options.shareTitle,
                                desc: options.shareDesc,
                                link: options.shareLink,
                                imgUrl: options.shareImgUrl,
                                success: function () {
                                    // 用户确认分享后执行的回调函数
                                    options.ShareSuccess?options.ShareSuccess():'';
                                },
                                cancel: function () {
                                    // 用户取消分享后执行的回调函数
                                    options.ShareCancel?options.ShareCancel():'';
                                }
                            }
                            wx.onMenuShareTimeline(sharet);
                            wx.onMenuShareAppMessage(sharet);
                        }else if(!options.isShare){
                            wx.hideMenuItems();
                        }
                    })
                    wx.error(function(res){
                        var logContent={
                            code:"WECHAT_CONFIG",
                            requestData: {
                                "debug": options.debug,
                                "appId": options.appId,
                                "timestamp": options.timestamp,
                                "nonceStr": options.nonceStr,
                                "signature": options.signature,
                                "jsApiList": ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','chooseWXPay']
                            },
                            responseData: {
                                msg: res.errMsg,
                            },
                        }
                        ys.errorLog(logContent);
                    });
                }
            }else{
                console.warn("未启用微信")
            }
        },

        /**
         * 获取Cookies数据
         * @param string name cookies名称
         */
        getCookie: function(name){
            var arrstr = document.cookie.split(";");
            for(var i=0;i<arrstr.length;i++){
                var temp = arrstr[i].split("=");
                if(temp[0].replace(/(^\s+)|(\s+$)/g,"") == name){
                    return temp[1];
                }
            }
        },

        /**
         * 存储localStorage
         * @param string name cookies名称
         * @param string content 内容
         */
        setStore: function(name, content){
            if (!name){
                return;
            }
            if (typeof content !== 'string') {
                content = JSON.stringify(content);
            }
            window.localStorage.setItem(name, content);
        },

        /**
         * 获取localStorage
         * @param string name cookies名称
         */
        getStore: function(name){
            if (!name){
                return;
            }
            return window.localStorage.getItem(name);
        },

        /**
         * 删除localStorage
         * @param string name cookies名称
         */
        removeStore: function(name){
            if (!name){
                return;
            }
            window.localStorage.removeItem(name);
        },

        /**
         * 格式化日期
         * @param string value 日期(yyyy-MM-dd HH:mm:ss)
         * @param string symbol 日期格式符号(例如:"-",".","/")
         */
        formatDate: function(value, symbol){
            symbol = symbol?symbol:"."
            if(value){
                var date = new Date(value.replace(/-/g,'/'));
                var year = date.getFullYear();
                var month = ys.paddNum(date.getMonth()+1);
                var day = ys.paddNum(date.getDate());
                return year + symbol + month + symbol + day;
            }
        },

        /**
         * 日期格式，小于10的数字默认加0
         * @param string num 小于10的数字
         */
        paddNum: function(num){
            num += "";
            return num.replace(/^(\d)$/,"0$1");
        },

        /**
         * 获取发布时间到现在时间
         * @param string dateTime 时间
         */
        getDateDiff: function(dateTime){
            var dateTimeStamp=Date.parse(dateTime.replace(/-/gi,"/"));
            var result='';
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var month = day * 30;
            var now = new Date().getTime();
            var diffValue = now - dateTimeStamp;
            var monthC =diffValue/month;
            var weekC =diffValue/(7*day);
            var dayC =diffValue/day;
            var hourC =diffValue/hour;
            var minC =diffValue/minute;
            if(monthC>=1){
                result=parseInt(monthC) + "个月前";
            }
            else if(weekC>=1){
                result=parseInt(weekC) + "周前";
            }
            else if(dayC>=1){
                result=parseInt(dayC) +"天前";
            }
            else if(hourC>=1){
                result=parseInt(hourC) +"小时前";
            }
            else if(minC>=1){
                result=parseInt(minC) +"分钟前";
            }else{
                result="刚刚";
            }
            return result;
        },

        /**
         * 获取url传递数值
         * @param string name 参数名称
         */
        getUrlKeyValue: function(name){
            var text = "";
            if(window.location.href.split("?")[1]){
                var url = window.location.href.split("?")[1].split("&");
                for(var i=0;i<url.length;i++){
                    var id= window.location.href.split("?")[1].split("&")[i].indexOf("=");
                    var nick = window.location.href.split("?")[1].split("&")[i].substring(0,id);
                    if(name== nick){
                        text = window.location.href.split("?")[1].split("&")[i].substring(id+1)
                    }
                }
            }
            return text;
        },

        /**
         * 阿拉伯数字转化为中文（非金额）
         * @param  num string 转化数字
         */
        chinaNum: function(num){
            var china = new Array('零','一','二','三','四','五','六','七','八','九');
            var arr = new Array();
            var english = num.split("")
            for(var i=0;i<english.length;i++){
                arr[i] = china[english[i]];
            }
            return arr.join("")
        },

        /**
         * 判断对象是否为空
         * @param  object obj 所需判断的对象
         */
        isEmptyObject: function(obj){
            for(var i in obj){//如果不为空，则会执行到这一步，返回true
                return false;
            }
            return true;
        },

        /**
         * H5跳转APP方法
         * @param  object e 本对象
         * @param  string v 版本号
         * @param  string os 手机类型
         */
        jumpToApp: function(options){
            ys.domGetId(options.btn).onclick = function(){
                var nodata = "http://readooapi.youshu.cc/English/sharePrerogativePrompt?tips=2",
                    jsonIos = {}, jsonAndroid = {},
                    soft = ys.versions();
                if(options.v.replace(/\./g,"")>=206){
                    var type = options.type?options.type:options.btn.getAttribute("data-type");

                    if(type>0 && type <26){
                        jsonIos = jsonAndroid = options.data;
                        jsonIos.type = type
                    }else{
                        window.location.href = nodata;
                    }

                    if(type >= 24 && options.v.replace(/\./g,"")<250){
                        window.location.href = nodata;
                    }

                    if(soft=="ios"){
                        connectWebViewJavascriptBridge(function(bridge) {
                            bridge.callHandler('webToNative', jsonIos);
                        })
                    }else if(soft=="android"){
                        window.AndroidWebView.webToNative(type ,JSON.stringify(jsonAndroid));
                    }else{
                        console.warn("参数错误");
                    }
                }else{
                    window.location.href = nodata;
                }
            }
        },

        /**
         * 图片转Base64
         * @param  String url 图片url
         * @param  Function callback callback方法
         * @param  String outputFormat 图片格式
         */
        convertImgToBase64: function(url, callback, outputFormat){
            var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),
                img = new Image;
            img.crossOrigin = 'Anonymous';
            img.onload = function(){
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img,0,0);
                var dataURL = canvas.toDataURL(outputFormat || 'image/png');
                callback.call(this, dataURL);
                canvas = null;
            };
            img.crossOrigin = '';
            img.src = url;
        },

        /**
         * 随机数
         * @param  num min 范围区间最小值
         * @param  num max 范围区间最大值
         */
        getRandomNum: function (min,max) {
            var Range = max - min;
            var Rand = Math.random();
            return min + Math.round(Rand * Range);
        },

        /**
         * 创建element对象
         */
        createEle: function(options){
            var element = document.createElement(options.div?options.div:"div");
            options.html?element.innerHTML = options.html:"";
            if(options.arrt.length>0){
                for(var i = 0;i<options.arrt.length;i++){
                    element.setAttribute(options.arrt[i].name, options.arrt[i].value);
                }
            }
            return element
        },

        /**
         * 提示模板
         */
        insertTipsText: function(options,num){
            if(num == 1){
                var closeico = ys.createEle({
                    div: "img",
                    arrt: [
                        {
                            name: "src",
                            value: "http://media.youshu.cc/readwith/media/picture/591e6dc7d63bd.jpg"
                        }
                    ]
                });
                var close = ys.createEle({
                    div: "p",
                    arrt: [
                        {
                            name: "class",
                            value: "close"
                        }
                    ]
                });
                var tips = ys.createEle({
                    div: "p",
                    html: options,
                    arrt: [
                        {
                            name: "class",
                            value: "tips"
                        }
                    ]
                });
                var tiptxt = ys.createEle({
                    arrt: [
                        {
                            name: "class",
                            value: "alertBox"
                        }
                    ]
                });
                var alertbox = ys.createEle({
                    arrt: [
                        {
                            name: "class",
                            value: "alert-box"
                        }
                    ]
                });
                close.appendChild(closeico)
                alertbox.appendChild(close)
                alertbox.appendChild(tips)
                tiptxt.appendChild(alertbox)

                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(tiptxt, s);

                close.onclick = function(){
                    tiptxt.remove()
                }


            }else{
                ys.domGetId(options.button).onclick = function(){
                    var closeico = ys.createEle({
                        div: "img",
                        arrt: [
                            {
                                name: "src",
                                value: "http://media.youshu.cc/readwith/media/picture/591e6dc7d63bd.jpg"
                            }
                        ]
                    });
                    var close = ys.createEle({
                        div: "p",
                        arrt: [
                            {
                                name: "class",
                                value: "close"
                            }
                        ]
                    });
                    var confirm = ys.createEle({
                        div: "p",
                        html: "确定",
                        arrt: [
                            {
                                name: "class",
                                value: "microBtn rt bgGreen"
                            },
                            {
                                name: "style",
                                value: "background:"+options.buttoncolor
                            }
                        ]
                    });
                    var cancel = ys.createEle({
                        div: "p",
                        html: "取消",
                        arrt: [
                            {
                                name: "class",
                                value: "microBtn lf bgRed"
                            }
                        ]
                    });
                    var tips = ys.createEle({
                        div: "p",
                        html: options.tips,
                        arrt: [
                            {
                                name: "class",
                                value: "tips"
                            }
                        ]
                    });
                    var centerBtnBox = ys.createEle({
                        arrt: [
                            {
                                name: "class",
                                value: "dualCenterBox cl"
                            }
                        ]
                    });
                    var tiptxt = ys.createEle({
                        arrt: [
                            {
                                name: "class",
                                value: "alertBox"
                            }
                        ]
                    });
                    var alertbox = ys.createEle({
                        arrt: [
                            {
                                name: "class",
                                value: "alert-box"
                            }
                        ]
                    });

                    close.appendChild(closeico)
                    options.close?alertbox.appendChild(close):""
                    alertbox.appendChild(tips)
                    centerBtnBox.appendChild(confirm)
                    centerBtnBox.appendChild(cancel)
                    alertbox.appendChild(centerBtnBox)
                    tiptxt.appendChild(alertbox)

                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(tiptxt, s);

                    close.onclick = function(){
                        tiptxt.remove()
                    }

                    cancel.onclick = function(){
                        tiptxt.remove()
                        options.cancel?options.cancel():"";
                    }

                    confirm.onclick = function(){
                        options.success?options.success():"";
                        tiptxt.remove()
                    }

                }

            }
        },

        /**
         * 提示模板
         */
        alert: function(options){
            ys.insertTipsText(options, 1)
        },

        /**
         * 提示模板
         */
        confirm: function(options){
            ys.insertTipsText(options, 2)
        },

        /**
         * 微信分享提示
         */
        shareTips: function(options){
            ys.domGetId(options.button).onclick = function(){
                var shareBox = ys.createEle({
                    arrt: [
                        {
                            name: "class",
                            value: "shareBox"
                        }
                    ]
                });
                var Box = ys.createEle({
                    arrt: [
                        {
                            name: "class",
                            value: "share-box swing animated"
                        }
                    ]
                });
                var img = ys.createEle({
                    div: "img",
                    arrt: [
                        {
                            name: "src",
                            value: "http://media.youshu.cc/readwith/media/picture/59843fa2db9e4.png"
                        }
                    ]
                });
                var text = ys.createEle({
                    div: "p",
                    html: options.title,
                    arrt: [
                        {
                            name: "class",
                            value: options.type==1?"text":"share-text"
                        }
                    ]
                });
                options.type==1?Box.appendChild(img):"";
                Box.appendChild(text)
                shareBox.appendChild(Box)
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(shareBox, s);

                shareBox.onclick = function(){
                    shareBox.remove();
                }
            }
        },

        /**
         * 加载中
         */
        loading: function(options){
            if(options && options == "hide"){
                document.getElementById("ys-loading").setAttribute("style","display:none")
            }else{
                if(!document.getElementById("ys-loading")){
                    var loading = ys.createEle({
                        arrt: [
                            {
                                name: "id",
                                value: "ys-loading"
                            }
                        ]
                    });
                    var loadBox = ys.createEle({
                        arrt: [
                            {
                                name: "class",
                                value: "loadBox"
                            }
                        ]
                    });
                    var borLine = ys.createEle({
                        arrt: [
                            {
                                name: "class",
                                value: "borLine"
                            }
                        ]
                    });
                    var scale = ys.createEle({
                        div: "img",
                        arrt: [
                            {
                                name: "class",
                                value: "scale"
                            },
                            {
                                name: "src",
                                value: "data:image/jpeg;base64,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ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcEdJbWc9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9nL2ltZy8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6aWxsdXN0cmF0b3I9Imh0dHA6Ly9ucy5hZG9iZS5jb20vaWxsdXN0cmF0b3IvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGRmPSJodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9qcGVnPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxkYzp0aXRsZT4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+5omT5Y2wPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNy0wMy0xNFQxODozOTo1NCswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTctMDMtMTRUMTA6Mzk6NThaPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTctMDMtMTRUMTg6Mzk6NTQrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIElsbHVzdHJhdG9yIENDIChNYWNpbnRvc2gpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6VGh1bWJuYWlscz4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8eG1wR0ltZzp3aWR0aD4yNTY8L3htcEdJbWc6d2lkdGg+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmhlaWdodD4yNTY8L3htcEdJbWc6aGVpZ2h0PgogICAgICAgICAgICAgICAgICA8eG1wR0ltZzpmb3JtYXQ+SlBFRzwveG1wR0ltZzpmb3JtYXQ+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmltYWdlPi85ai80QUFRU2taSlJnQUJBZ0VBU0FCSUFBRC83UUFzVUdodmRHOXphRzl3SURNdU1BQTRRa2xOQSswQUFBQUFBQkFBU0FBQUFBRUEmI3hBO0FRQklBQUFBQVFBQi8rNEFEa0ZrYjJKbEFHVEFBQUFBQWYvYkFJUUFCZ1FFQkFVRUJnVUZCZ2tHQlFZSkN3Z0dCZ2dMREFvS0N3b0smI3hBO0RCQU1EQXdNREF3UURBNFBFQThPREJNVEZCUVRFeHdiR3hzY0h4OGZIeDhmSHg4Zkh3RUhCd2NOREEwWUVCQVlHaFVSRlJvZkh4OGYmI3hBO0h4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zi84QUFFUWdCQUFFQUF3RVImI3hBO0FBSVJBUU1SQWYvRUFhSUFBQUFIQVFFQkFRRUFBQUFBQUFBQUFBUUZBd0lHQVFBSENBa0tDd0VBQWdJREFRRUJBUUVBQUFBQUFBQUEmI3hBO0FRQUNBd1FGQmdjSUNRb0xFQUFDQVFNREFnUUNCZ2NEQkFJR0FuTUJBZ01SQkFBRklSSXhRVkVHRTJFaWNZRVVNcEdoQnhXeFFpUEImI3hBO1V0SGhNeFppOENSeWd2RWxRelJUa3FLeVkzUENOVVFuazZPek5oZFVaSFREMHVJSUpvTUpDaGdaaEpSRlJxUzBWdE5WS0JyeTQvUEUmI3hBOzFPVDBaWFdGbGFXMXhkWGw5V1oyaHBhbXRzYlc1dlkzUjFkbmQ0ZVhwN2ZIMStmM09FaFlhSGlJbUtpNHlOam8rQ2s1U1ZscGVZbVomI3hBO3FibkoyZW41S2pwS1dtcDZpcHFxdXNyYTZ2b1JBQUlDQVFJREJRVUVCUVlFQ0FNRGJRRUFBaEVEQkNFU01VRUZVUk5oSWdaeGdaRXkmI3hBO29iSHdGTUhSNFNOQ0ZWSmljdkV6SkRSRGdoYVNVeVdpWTdMQ0IzUFNOZUpFZ3hkVWt3Z0pDaGdaSmpaRkdpZGtkRlUzOHFPend5Z3AmI3hBOzArUHpoSlNrdE1UVTVQUmxkWVdWcGJYRjFlWDFSbFptZG9hV3ByYkcxdWIyUjFkbmQ0ZVhwN2ZIMStmM09FaFlhSGlJbUtpNHlOam8mI3hBOytEbEpXV2w1aVptcHVjblo2ZmtxT2twYWFucUttcXE2eXRycSt2L2FBQXdEQVFBQ0VRTVJBRDhBTk0wcnpUc1ZkaXJzVmRpcnNWZGkmI3hBO3JzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXImI3hBO3NWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnMmI3hBO1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1YmI3hBO2RpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmQmI3hBO2lyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGkmI3hBO3JzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXImI3hBO3NWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnMmI3hBO1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcVorWC9MMm82N2ZmVkxGVjVLdk9TUnpSRVhwVmlBZnd5ZVBHWkcmI3hBO2cyWXNVcG1nbXZtWDh2dFgwSzArdXZKSGMyb0lXUjQ2Z29TYURrQ09oTzFjc3lhY3hGdDJiU1NnTDVoaStVT0s3RlhZcTdGVTQ4dWUmI3hBO1ZOVzh3VFNKWXFxeHhBZXJQS1NxS1QwRlFHTlQ3RExNZUl6NU4ySEJMSWRsM21QeWpySGw5NC9ycW84TXUwZHhFU3lFajlrMUNrSDUmI3hBO2pISmlNT2E1dFBMSHpTWEsybDJLdXhWMktzbTBEOHZkZjFxeUY3Q1lyZTNldnBOT3pBdlRhcWhWWTByM09YNDlQS1F0eWNXa25NV08mI3hBO1NTNnZvOS9wRjg5bGZSK25PbERzYXF5bm95a2RRY3FuQXhORnB5WXpBMFVIa1dEc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGkmI3hBO3JzVmRpcnNWZGlyY2NieU9zY2FsM2NoVVZSVWtuWUFERlFIdW5rbnl3bWc2T3NVZ0J2cmlrbDIrMzJxYklENEordXViVERpNEI1dTkmI3hBOzAySHc0K2FCL016VzdXeDh2UzJUZkZjMzQ5T0tQd1VFRm5Qc1AxNUhVekFqWGUxNjNJSXdycVhqR2ExMHpzVmRpcnNWZXUvbENCL2gmI3hBO3U1Tk4vcmo3L3dEUEtQTmhwUHArTHQrei9vUHYvVXFmbXlCL2hkUGE2anAvd0w0ZFY5Q2RmL2QvRjQ5bXVkTzdGWFlxN0ZYMEY1WEEmI3hBO0hsclNRQlFmVTdjN2U4U25Odmkra2U1NkRCOUVmY0hudjV3b28xV3dlbnhHQmdUN0J6VDllWWVyNWgxM2FIMUQzUFA4eEhBZGlyc1YmI3hBO2RpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZWlmbGI1VTlhWDlPM2FmdW9pVnNVWWZhY2JOSi9zZWc5L2xtWnBjWDgmI3hBO1Jkam9jRm5qUHdlbDN0NWJXVnBMZDNMaU9DQlM4am5zQm1iSWdDeTdLVWhFV1hnZm1UWGJqWE5YbXY1cWhXUEdDTS9zUmo3Sy93QVQmI3hBOzc1cWNrekkyNkRObE01V1VzeURXN0ZYWXE3RlhydjVRL3dES05YUC9BREdQL3dBbW9zMkdrK240dTM3UCtnKy85U3IrYlA4QXlpNmYmI3hBOzh4VWYvRVh3NnI2RTYvOEF1L2k4ZHpYT25kaXJzVmRpcjZCOHF1aitXZEpLRU1CYVFLU1BGWXdDUG9JemJZdnBIdWVnd0gwUjl3ZWUmI3hBO2ZuQktoMWV4akIrTkxjc3c5bWMwL3dDSTVpYXM3aDEzYUI5UTl6QWN4SEFkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXEmI3hBO2YrUy9LLzhBaUhWVGJTU0dHMmhUMUozV25LbFFBcTEycWE1Ymh4Y1pwdjAyRHhKVjBlaG44cC9LMzgxeVArZWkvd0ROR1puNVdEc2YmI3hBO3lHUHpkL3lxYnl2L0FEM1gvSXhmK2FNZnlzRi9JWS9ObDFwYVc5cGF4V3R1Z2pnaFVKR2c2QUFVeklBb1VITWpFQVVFRnIrZ1dtdDImI3hBO1lzN3VTVklBd2RsaFlMeUk2Y3FocWdaSEpqRWhSYTh1SVRGRmozL0twdksvODkxL3lNWC9BSm95bjhyQngveUdQemQveXFieXYvUGQmI3hBO2Y4akYvd0NhTWZ5c0YvSVkvTjMvQUNxYnl2OEF6M1gvQUNNWC9takg4ckJmeUdQelEyby9sSm9yV1Vnc0pwbzd3QW1KcEdWa0o3S3cmI3hBOzRqYjNHQ1dralczTmpQUVJyYm14WHlKNUhpMTU3aWU5a2VLMHRtRVpTT2dkNUtWSXFRYUFkOXN4OEdEajV1SnBkTjRsazhnOVYwSFEmI3hBO05PME96ZTBzQXdoZVF5c0hia2VSVUtkL2tvelBoakVSUWR0aXhDQW9MOVowVFR0WnRCYVg4WmtnRGlRS0dLbmtvSUc2a2VPTTRDUW8mI3hBO3JreENZb3BIL3dBcXg4bi9BUExLL3dEeU5rL3JsZjVhSGMwZmtzZmM0ZmxsNVByL0FMeU9mYjFaUCthc2Z5ME81ZnlXUHVRdDkrVkgmI3hBO2xxZU9scTAxcEoyWlg5UmErNnZYOENNakxTeFBKakxRUVBMWjUxNW44b2FyNWZtQXVRSmJXUTBodWsrd3g2MFA4cmUzM1poNWNKaHomI3hBO2RkbTA4c1ozNUxkSDg1ZVl0SXR6YldOMFZ0NjFFVHFyaFNldkhrRFQ2TUVNMG9pZ1VZOVJPQW9GTGIrL3ZOUXVwTHU4bGFlNGxOWGsmI3hBO2JxZXc2YkFEd0dRbElrMld1VWpJMmVhSHdNWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxbmZsSHpQTDVlMVQ2MHNmclEmI3hBO1NMNmM4VmFFcVNEVlQ0Z2pMY1dYZ050Mm56SEhLM29hZm01NWRjcW90TDB1MUFGV09Ja2s5aCs4ekwvTng3aTdFYStIY1dheE9YaVImI3hBO3lqUmxsREdOcWNscUswTkNSVWV4ektEbWdwVDVrODE2VjVmaGlrdnVidE94V09HSUt6a0FidFJtVVVIenl2SmxFT2JWbXp4eGpkai8mI3hBO0FQeXQ3eTEveXpYbi9BUmY5VmNwL054ODNIL2xDSGNmeDhYZjhyZTh0ZjhBTE5lZjhCRi8xVngvTng4MS9sQ0hjZng4WGY4QUszdkwmI3hBO1gvTE5lZjhBQVJmOVZjZnpjZk5mNVFoM0g4ZkYzL0szdkxYL0FDelhuL0FSZjlWY2Z6Y2ZOZjVRaDNIOGZGQzZuK2IybmZVM0dtV2smI3hBOzV1MkJFYlRoRlJTZjJ2aFp5MVBESXkxWXJZTUo5b0N2U0RiRnZKUG5kdkw4czhkekUxeFozSkR1RUk1cTQyNUxYWTFIVVpSaHo4SFAmI3hBO2s0dW0xUGg4K1JlcStXdk1sbjVnc1pMeTBqa2lpamxNTkpRb1lsVlZxL0NXSDdmam1manlDWXNPMXc1aGtGaHZ6SjVodHRCMDhYMXomI3hBO0c4c1prV0xqSFN0V0JOZHlQNWNjbVFRRmxPYk1NWXNzVGI4NHRNcWVPbnprZGlXUUgrT1VmbXgzT0ovS0VlNTMvSzR0Ti82dDAzL0ImI3hBO3JqK2JIY2orVUIzSjc1YjgrYUxyc3YxYUxuYjNoQksyOHRLc0FLbmd3SkJvUHB5M0huakxicTVHSFZSeUd1UlRyVk5OdE5Uc0pyRzcmI3hBO1RuQk92RmgzQjdNUGNIY1paS0lrS0xkT0FrS0w1KzFUVDV0TzFHNHNadjd5M2thTmoyTkRzdzlpTjgxRW8wYWVmbkF4SkI2SVhBeGQmI3hBO2lyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXIwSDhyZktuMW00L1RsMm43aUJpTE5UKzFJT3IvSk8zdjhzeTlMaXYmI3hBOzFGMkdod1dlTS9CNmpjVHh3UVNUU1ZDUnFXYWdKTkFLN0FiazVuRTA3UW1oYng3WDlIODZlWk5VbDFCdE1uU0kvRGJ4U1VUaEVQc3ImI3hBO1J5dS9jKythN0pDY3pkT255NDh1U1YwVXUvd0I1dy82dHIvOEhIL3pWa1BBbjNOZjVYSjNPL3dCNXcvNnRyLzhISC96Vmo0RSs1ZnkmI3hBO3VUdVU1dkkvbTJGZVQ2Wk1SL2tBU0g3a0xIRTRKOXlEcHNnNkpOTkROREkwVXlOSElob3lPQ3JBKzRPVkVVMEVWeldZcTdGWHJ2NVEmI3hBOy93REtOWFAvQURHUC93QW1vczJHaytuNHUzN1ArZysvOVNyK2JQOEF5aTZmOHhVZi9FWHc2cjZFNi84QXUvaThkelhPbmRpcXJaM1UmI3hBOzFwZHczVUxjWllIV1NOaDRxYWpDRFJ0TVpFR3cra00zTDBqeFQ4ellnbm5DNllDbnFKRS96L2RoZitOYzFtcEhyZEpyUis4TEZjb2MmI3hBO1YyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4Vk5QTFdnWE91NnRGWXcxQ0g0NTVmNUl3ZmliK0E5OG5qeG1ScHR3NGomI3hBO09WQjczWjJsdloyc1ZyYklJNElWQ1JvT3dHYllBQVVIZlJpSWlncllXVHNWZGlyc1ZkaXFWZVlQTE9rNjdhbUc4aUhxZ1VpdVZBRWkmI3hBO0gyUGg3SGJLOG1NU0c3VGx3UnlEZDRmcitpWGVpNm5MWVhXN3B1a2creTZIN0xENTVyTWtERTBYU1pjWmhLaWwrUWEzcnY1US93REsmI3hBO05YUC9BREdQL3dBbW9zMkdrK240dTM3UCtnKy85U3IrYlA4QXlpNmY4eFVmL0VYdzZyNkU2LzhBdS9pOGR6WE9uZGlyc1ZmU3VicDYmI3hBO1Y0eCthZjhBeWxrbi9HR0w5V2EzVmZXNlhYZjNqRWN4M0VkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVlpWK1hYbUsmI3hBO3kwWFdaR3ZUd3RycVAwbW1vVHdZRUVFMHFhZGpsK255Q010M0swbVlRbHZ5TDJLdzFLdzFDRXoyTndsekNHNEY0eUdBWUFHaHAzb1ImI3hBO214aklIazdtRXhJV0RhRDh6NjdIb2VqVDZneTgzU2l3eG5vMGpiS0Q3ZHo3WkhMUGhqYkRQbDRJa3ZGYi93QTJlWTc2NGFlYlVKd1QmI3hBOzBTTjJqUmZaVlVnRE5iTExJOVhTU3p6a2JKUS82ZDF2L3E0WFAvSTZUK3VSNDVkN0h4WmQ1ZCtuZGIvNnVGei9BTWpwUDY0OGN1OWYmI3hBO0ZsM2xYc3ZOWG1Pem5XYUhVWitTL3N2SXpvZllxeElPU2psa09yS09lY1RZSmUwZVUvTUNhN29zVjl4Q1MxTWR3ZzZDUmFWcDdHb0kmI3hBO3paWXNuRkczZFlNdmlSdGkvd0NiK25SdnBsbnFJQTlhR1gwV1BjcElwYmY1RlB4eWpWeDJCY1h0Q0hwRW5sV1lEcW5ydjVRLzhvMWMmI3hBOy93RE1ZLzhBeWFpellhVDZmaTdmcy82RDcvMUt2NXMvOG91bi9NVkgvd0FSZkRxdm9Uci9BTzcrTHgzTmM2ZDJLdXhWOUkyMHl6MjAmI3hBO1U2a01zcUs2c3ZRaGhXb3pjZzJIcElteGJ4cjh6NVkzODJ6aEdER09PSlhwMmJqV240NXJkU2ZXNmJXbjk0V0o1UTRqc1ZkaXJzVmQmI3hBO2lyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZXcvbE1BUEs4bE85MUpYL2dVelk2WDZIY2FEKzcrTGY1cy84b3VuL01WSC93QVImI3hBO2ZIVmZRdXYvQUx2NHZIYzF6cDJRZVZQSm1vK1lubGFGMWd0b1NCSk85VDhSM0NxbzZuTGNXRXpjakJwNVpPWEpkNXI4azZqNWRFVXMmI3hBO3NpM0ZwS2VDem9DdEhwWGl5bnA3YjRjdUV3WFBwcFkvY3gzS1hIZXUvbEQvQU1vMWMvOEFNWS8vQUNhaXpZYVQ2Zmk3ZnMvNkQ3LzEmI3hBO0luODAvd0RsRTMvNHp4ZnJPUzFYME10ZC9kL0Y0em10ZE05ZC9LSC9BSlJxNS81akgvNU5SWnNOSjlQeGR2MmY5QjkvNmxYODJmOEEmI3hBO2xGMC81aW8vK0l2aDFYMEoxLzhBZC9GNDdtdWRPN0ZYWXFuT24rY2ZNdW5XZjFPenYzanRoc3FFSTNFSCtVc0dLL1Jsa2MwZ0tCYm8mI3hBO2FpY1JRT3lVU3l5elNOTEs1a2xjbG5kaVN4SjNKSk9Wa3RKTnJjVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGkmI3hBO3IyTDhwdjhBbEYzL0FPWXFUL2lLWnNkTDlEdU5CL2QvRjM1cy93REtMcC96RlIvOFJmSFZmUXV2L3UvaThkelhPbmV3L2xLQVBLOGgmI3hBO0EzTjFJVC93Q0ROanBmbytMdU5COUh4VmZ6VUFQbFJpUlVpZUlqNTdqRHF2b1Rydjd2NHZHYzFycG5yZjVRT0Q1ZXUwN3JkczFmbkYmI3hBO0dQNFpzTko5Sjk3dHV6ejZENzBYK2FmL0FDaWIvd0RHYUw5WnlXcStobnJ2N3Y0c1AvTHJ5YllhMkxpOTFFR1MyZ1lScEFyRmVUa1YmI3hBO0pZclJxQUVkTXh0UGhFdHk0ZWowNG5abHllbzZSb21tYVBiTmJhZEQ2RUR1WkdUazcxY2dLVFZ5eDZLTXo0UUVSUWRyanh4Z0tpdjEmI3hBO1RTZE8xUzJGdGZ3aWVBTUhDRWtmRUtnSDRTUEhHVUJJVVZuampNVVVwLzVWL3dDVC93RHEycC93Y24vTldWK0JEdWF2eW1QdWQveXImI3hBOy93QW4vd0RWdFQvZzVQOEFtckh3SWR5L2xNZmM3L2xYL2svL0FLdHFmOEhKL3dBMVkrQkR1WDhwajduSDh2dkp4RlAwYW0vK1hML3omI3hBO1ZqNEVPNUg1VEgzTVI4MS9sYUlJSkwzUTJaMVFGcExKenliaU92cHQxTlA1VHY3NWo1ZExXOFhFejZHaGNQazg1ekRkYzdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhzWDVUZjhvdS8vTVZKL3dBUlROanBmb2R4b1A3djRxZjV1a2p5MWJVNzNpVi8mI3hBOzVGU1lOWDlQeFIyaDlBOS82M2tPYTkxRDJMOHB2K1VYZi9tS2svNGltYkhTL1E3alFmM2Z4VlB6VC81Uk4vOEFqTkYrczRkVjlDZGQmI3hBOy9kL0Y0em10ZE05WS9KLy9BSTRsNy96RS93RE10Y3o5SjlKZHQyZjlKOTZPL05QL0FKUk4vd0RqTkYrczVQVmZRejEzOTM4WG5mbEQmI3hBO3puZCtYSnBRc1F1TFNlaGxnSjRtcTlHVnFHaDMzMjN6RHc1akIxMm4xQnhudkQxbnluNWxUekRwMGw2bHViWVJ6TkR3TGM2OFZWcTEmI3hBO0FYK2ZNL0ZrNHhidHNHYnhJM1ZPODJlWS93REQrbGkvK3IvV2F5ckY2ZlAwL3RBbXRlTC9BTXZoaHk1T0FXdWZONGNicTJIL0FQSzUmI3hBO3YrMVAvd0JQUC9Yck1iODU1T0gvQUNqL0FFZnQvWTBmem1ORFRTTiszK2tmOWVzZnpua3Y4by8wZnQvWXAvOEFLNUxuL3ExcC93QWomI3hBO2ovelJnL09IdVIvS0o3a1JZZm5ERTl5aVgybitqYnNhTkxISnpLKy9FcXRSOU9TanE5OXd5aDJodnVIbzBjaVNSckpHd1pIQVpHRzQmI3hBO0lPNEl6TWRrRGJ4UDh4OUhpMDN6Tkw2SzhJYnRCY0lvR3dMRWh3UDlrcFAwNXJOUkRobDczU2F6SHd6MjZzWHloeFhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYc1g1VGY4b3UvL0FERlNmOFJUTmpwZm9keG9QN3Y0cVg1dmY4bzFiZjhBTVluL0FDYWwmI3hBO3dhdjZmaWp0RDZCNy93QmJ5TE5lNmg3RitVMy9BQ2k3L3dETVZKL3hGTTJPbCtoM0dnL3UvaXFmbW4veWliLzhab3YxbkRxdm9UcnYmI3hBOzd2NHZHYzFycG5ySDVQOEEvSEV2ZitZbi9tV3VaK2sra3UyN1Arays5SGZtbi95aWIvOEFHYUw5WnllcStobnJ2N3Y0dkdjMXJwbnImI3hBO3Y1US84bzFjL3dETVkvOEF5YWl6WWFUNmZpN2ZzLzZENy8xS3Y1cy84b3VuL01WSC93QVJmRHF2b1RyL0FPNytMeDNOYzZkMkt1eFYmI3hBOzJLdm9QeXlTZkxla2s5ZnFkdjhBOG1semI0L3BIdWVndy9SSDNCNXgrY0gvQUIzTEwvbUYvd0NaalpoYXY2ZzY3dEQ2eDdtQjVpdUEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxOWkvS2IvbEYzL3dDWXFUL2lLWnNkTDlEdU5CL2QvRlMvTjcvbEdyYi8mI3hBO0FKakUvd0NUVXVEVi9UOFVkb2ZRUGY4QXJlUlpyM1VQWXZ5bS93Q1VYZjhBNWlwUCtJcG14MHYwTzQwSDkzOFZUODAvK1VUZi9qTkYmI3hBOytzNGRWOUNkZC9kL0Y0em10ZE05WS9KLy9qaVh2L01UL3dBeTF6UDBuMGwyM1ovMG4zcGgrYVNzZktVcEEyV2FJdDh1VlA0NVBWZlEmI3hBO3oxMzkyOFh6V3VtZXUvbEQvd0FvMWMvOHhqLzhtb3MyR2srbjR1MzdQK2crL3dEVXEvbXovd0FvdW4vTVZIL3hGOE9xK2hPdi91L2kmI3hBOzhkelhPbmRpcnNWZGlyNkQ4c2Y4bzFwUC9NSGIvd0RKcGMyK0w2Ujdub01QMFI5d2VjZm5CL3gzTEwvbUYvNW1ObUZxL3FEcnUwUHImI3hBO0h1WUhtSzREc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXIyTDhwditVWGYvbUtrL3dDSXBteDB2ME80MEg5MzhWTDgmI3hBOzN2OEFsR3JiL21NVC9rMUxnMWYwL0ZIYUgwRDMvcmVSWnIzVVBZdnltLzVSZC84QW1Lay80aW1iSFMvUTdqUWYzZnhWUHpUL0FPVVQmI3hBO2Yvak5GK3M0ZFY5Q2RkL2QvRjR6bXRkTTlZL0ovd0Q0NGw3L0FNeFAvTXRjejlKOUpkdDJmOUo5NlovbWQveWg5MS9yeGY4QUp3WlomI3hBO3Fmb0xacmY3c3ZGTTFqcFhydjVRL3dES05YUC9BREdQL3dBbW9zMkdrK240dTM3UCtnKy85U3IrYlA4QXlpNmY4eFVmL0VYdzZyNkUmI3hBOzYvOEF1L2k4ZHpYT25kaXJzVmRpcjZEOHNmOEFLTmFUL3dBd2R2OEE4bWx6YjR2cEh1ZWd3L1JIM0I1NytjUUg2VDA4OS9RYi9pZVkmI3hBO2VyNWgxL2FIMUQzUFBzeEhYdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt2WmZ5cVFMNVVCSFZwNUNmbnNQNFpzdEwmI3hBOzlEdWREL2QvRkQvbTkveWpWdC96R0oveWFseU9yK240c2UwUG9Idi9BRnZJczE3cUdmOEE1YmVjOU4wcTJuMDNVbjlHSjVETkRPUVcmI3hBO1dwQVZsYWxTUHNnajZjeTlObUVSUmMvUjZpTUFZeVZQekk4NmFWcWRqSHBlbXlHZGZVRXM4NEJDZkNDQWdxQlhjMThNT296Q1FvSjEmI3hBO21wakljTVhubVlicjNxMzVQT1RwTitsTmxuVnEvTkFQNFpuNlRrWGE5bm4wbjNwcitaMy9BQ2g5MS9yeGY4bkJsbXArZ3R1dC91eTgmI3hBO1V6V09sZXUvbEQveWpWei9BTXhqL3dESnFMTmhwUHArTHQrei9vUHYvVXEvbXoveWk2Zjh4VWYvQUJGOE9xK2hPdjhBN3Y0dkhjMXomI3hBO3AzWXE3RlhZcStnL0xIL0tOYVQvQU13ZHYveWFYTnZpK2tlNTZERDlFZmNIbnY1eGY4ZFBULzhBakMvL0FCUE1QVjh3Ni90RDZoN24mI3hBO24yWWpyM1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYczM1V2Y4QUtKcC94bWwvV00yV2wraDNPaC91L2lodnplLzUmI3hBO1JxMi81akUvNU5TNUhWL1Q4V1BhSDBEMy9yZVJacjNVT3hWMkt1QUxFQUNwT3dBNms0cTlyL0xuUUxuU05CUDF0ZlR1cnQvV2VNN0YmI3hBO0ZvQXF0NzdWK25ObnA4WmpIZDNXanhHRU4rWlEvd0NhMTVIRDVZOUFrYzdxWkZWZTlFcTVQL0NqSTZvMUZqcnBWQ3U5NDVtdWRPOWQmI3hBOy9LSC9BSlJxNS81akgvNU5SWnNOSjlQeGR2MmY5QjkvNmxYODJmOEFsRjAvNWlvLytJdmgxWDBKMS84QWQvRjQ3bXVkTzdGWFlxdWomI3hBO2prbGtXT05TOGprS2lLS2trN0FBREVCUUxmUW1nV1V0am9kaFp5N1N3UVJwSU90R0Nqa052Zk52ampVUUhvY1VlR0FIazgzL0FEaGwmI3hBO1E2eFl4QS9HbHVXSTltY2dmOFJ6RDFaM0RyZTBENmg3bUE1aU9BN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE5bS8mI3hBO0tzZytVMG9lazh0ZnZHYkxTL1E3blEvM2Z4UW41dnZUeS9hSlQ3VjJyVi8xWTNIL0FCdGtkWDlJOTdEdEErZ2U5NUptdmRTOUYvTEQmI3hBO3lwcE9vV1UrcDM4SzNMTEtZWVlYM1JlS3F4WXIwSlBQdm1acHNRSXN1eDBXQ01nWkhkbm84citXZ0tEU2JQYnhnaVA2MXpMOEtQY0gmI3hBO1A4Q0g4MGZKV3R0RDBTMWxFMXRwOXRCS09ra2NNYU1QcFVBNFJDSTVCa01VUnVBRVRjM052YXdQY1hFaXhRUkRsSkk1b29IdWNKTmMmI3hBOzJVcEFDeThRODhlYVRyK3E4NHFyWTI0S1dxbllrSDdUa2VMVSs2bWF6UGw0ejVPajFPZnhKZVFZN2xManZYZnloSS93M2NqdjljZi8mI3hBO0FKTlJac05KOVB4ZHYyZjlCOS82bFQ4MmYrVVhUL21Lai80aStIVmZRblgvQU4zOFhqMmE1MDdQdnl2OHNhWHFRdXIrL2lXNEVETEgmI3hBO0ZBKzZBa1ZMTXZmMnJtWHBzUWxaTG42TERHVms3dlJmOE1lV3YrclRaLzhBU1BGL3pUbVo0VWU0T3g4R0g4MGZKV3RkRjBhMGw5VzAmI3hBO3NMZTNsNmVwRkVpTjk2Z0hDSVJISU1vNDRqa0FxYWhxRm5wOW5MZVhrb2l0NGhWM1A2aDRrOWhobElBV1V6bUlpenllQytaZGJsMXImI3hBO1dialVIQlZaRHhoalA3TWE3S1B1NisrYW5KUGlsYm9NMlRqa1NsbVFhM1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1UvOEFMSG5UVnZMM3FSMndTYTJsUEo3ZVVHbkxweVVnZ2cweTNGbU1PVGZoMU1zZkxrcGVaZk5tcWVZWm8zdk9LUlExOUtDTUVJcFAmI3hBO1U3a2trMHdaTXBuelJtenl5SGRKY3JhVTk4citjZFU4dlBJTFVKTGJ6VU1zRWxlTlIrMHBCQkJ5M0ZtTU9UZmgxRXNmSmtuL0FDdUwmI3hBO1UvOEFxM3cvOEcrWGZtejNPVC9LRXU0S2MzNXdheVZwRlpXNk40dHpiOEFWeE9ybDNJUGFFdTRNWDF2elJyZXRNUHI5eXp4cWFwQ3QmI3hBO0VqQi8xUnRYM08rWTg4c3BjM0Z5WnBUNWxLc2cxT3hWTy9MUG03VmZMMHNodE9Fa00xUFZnbEJLa2pvd29RUWNzeDVURGszWWRSTEgmI3hBO3lYZVovT1dyZVlUR3Qxd2l0NFR5anQ0Z1F2STdjbXFTU2NPWE1aODA1dFJMSno1SkZsVFFuSGx2elZxbmwrNGtsc2lySk1BSm9aQVMmI3hBO2pjZWgySUlJcmxtUEtZSFp1dzU1WXpzeVUvbkJyZFRTeXRxZHY3ei9BSnF5L3dETnk3bkovbENmY0ZyL0FKdjYrVklTMHRWWTlHSWsmI3hBO05QbzU0UHpjdTRJL2xDZmNHTDYzNWsxbldwQStvWERTcXBySEVLTEd2eVViZlQxeWllU1V1Ymk1TTBwOHlsbVFhM1lxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxLy85az08L3htcEdJbWc6aW1hZ2U+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwveG1wOlRodW1ibmFpbHM+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZTY5Mjc3ZmMtZGIxYy00NGY0LWFjMjItZWZiOTYxNmFiYzgyPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU2OTI3N2ZjLWRiMWMtNDRmNC1hYzIyLWVmYjk2MTZhYmM4MjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD51dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpSZW5kaXRpb25DbGFzcz5wcm9vZjpwZGY8L3htcE1NOlJlbmRpdGlvbkNsYXNzPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD51dWlkOmFjOTVjMjFhLTM2MGEtNGVjZi1iNTBkLTE4ZGVhZmQ4NTYzNjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDozYzUyMWIzYy04ZTE3LTY0NDItYjVjYi0wMDAxYzVhYjNlMWI8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgICAgIDxzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+dXVpZDo1RDIwODkyNDkzQkZEQjExOTE0QTg1OTBEMzE1MDhDODwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6cmVuZGl0aW9uQ2xhc3M+cHJvb2Y6cGRmPC9zdFJlZjpyZW5kaXRpb25DbGFzcz4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmU2OTI3N2ZjLWRiMWMtNDRmNC1hYzIyLWVmYjk2MTZhYmM4Mjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0wMy0xNFQxODozOTo1NCswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgSWxsdXN0cmF0b3IgQ0MgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGlsbHVzdHJhdG9yOlN0YXJ0dXBQcm9maWxlPlByaW50PC9pbGx1c3RyYXRvcjpTdGFydHVwUHJvZmlsZT4KICAgICAgICAgPHBkZjpQcm9kdWNlcj5BZG9iZSBQREYgbGlicmFyeSAxMC4wMTwvcGRmOlByb2R1Y2VyPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAog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"
                            }
                        ]
                    });
                    loadBox.appendChild(borLine)
                    loadBox.appendChild(scale)
                    loading.appendChild(loadBox)
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(loading, s);
                }else{
                    document.getElementById("ys-loading").setAttribute("style","display:flex")
                }
            }
        },

        // 读取cookie中utm
        getUtmData: function(){
            var utmdata =  new Object();
            if(ys.getCookie('utm_source')){
                utmdata.utm_source = ys.getCookie('utm_source')
            }
            if(ys.getCookie('utm_medium')){
                utmdata.utm_medium = ys.getCookie('utm_medium')
            }
            if(ys.getCookie('utm_campaign')){
                utmdata.utm_campaign = ys.getCookie('utm_campaign')
            }
            if(ys.getCookie('utm_term')){
                utmdata.utm_term = ys.getCookie('utm_term')
            }
            if(ys.getCookie('utm_content')){
                utmdata.utm_content = ys.getCookie('utm_content')
            }
            return utmdata
        },

        // APP方法调取01
        appAction: function(options){
            switch(options.type){
                case "join":

                    var usage_data = {
                        "id": options.data.plan_id,
                        "utm": ys.getUtmData(),
                        "price_id": options.data.price_id
                    };

                    options.pay_json = {
                        'usage_type':options.data.usage_type,
                        'plan_id':options.data.plan_id,
                        'plan_price':options.data.plan_price,
                        'usage_data':usage_data
                    };
                    if(ys.versions() == "ios"){
                        options.pay_json.callback = "payCallbackIos"
                    }else if(ys.versions() == "android"){
                        options.pay_json.callback = "payCallback"
                        options.pay_json.product_id = options.data.product_id
                    }

                    break;
                case "share":
                    if(options.data.shareType == 2){  // 邀请卡
                        var content = {'plan_id': options.data.plan_id};
                        options.params = 'bag_id=';

                    }else if(options.data.shareType == 3){  // 图片支持BASE64
                        var content = {'url': options.data.share_img_url};
                    }else{
                        var content = {
                            'share_url': options.data.share_url,
                            'share_title': options.data.share_title,
                            'share_content': options.data.share_content,
                            'share_img_url': options.data.share_img_url
                        };
                    }

                    options.share_json = {
                        'platform':options.data.platform,
                        'shareType':options.data.shareType,
                        'content':content
                    };
                    if(ys.versions() == "ios"){
                        options.share_json.callback = "callbackshareIos"
                    }else if(ys.versions() == "android"){
                        options.share_json.callback = "callbackshare"
                    }
                    break
                default:
                    ys.alert(errorCode.ERROR_PARAMS)
                    break
            }

            ys.appMethod(options)
        },

        // APP方法调取02
        appMethod: function(options){
            if(ys.versions() == "ios" && options.v.replace(/\./g,"")>=150){
                switch(options.type){
                    case "share":
                        connectWebViewJavascriptBridge(function(bridge) {
                            bridge.callHandler('shareHandler', options.share_json);
                        })
                        break;

                    case "join":
                        connectWebViewJavascriptBridge(function(bridge) {
                            bridge.callHandler('subscribeHandler', options.pay_json);
                        })
                        break;

                }
            }else if(ys.versions() == "android" && options.v.replace(/\./g,"")>=150){
                switch(options.type){
                    case "share":
                        if(options.v.replace(/\./g,"")>=252){
                            window.AndroidWebView.shareHandler(options.share_json.platform,options.share_json.shareType,JSON.stringify(options.share_json.content), options.share_json.callback);
                        }else{
                            window.AndroidWebView.shareHandler(options.share_json.platform,options.share_json.shareType,JSON.stringify(options.share_json.content));
                        }
                        break;

                    case "join":
                        if(options.v.replace(/\./g,"")<230){
                            window.AndroidWebView.subscribeHandler(options.pay_json.usage_type,options.pay_json.plan_id,options.pay_json.plan_price,"");
                        }else{
                            window.AndroidWebView.subscribeHandler(JSON.stringify(options.pay_json));
                        }
                        break;

                }
            }else{
                ys.alert(errorCode.NO_VERSIONS)
            }
        },

        // 日期/城市/自定义选择器
        mscroll: function(options){
            switch(options.type){
                case "city":
                    var txt = "<ul id='treelist'>"
                    for(var i in pro_city){
                        txt += "<li data-val="+pro_city[i].province+"><div>"+pro_city[i].province+"</div><ul>"
                        for(var j in pro_city[i].city){
                            txt += "<li data-val='"+pro_city[i].city[j].name+"'>"+pro_city[i].city[j].name+"</li>"                            
                        }
                        txt += "</ul></li>"
                    }
                    txt += "</ul>"
                    $("#"+options.input).html(txt)
                    var opt = {
                        theme: 'ios7', //皮肤样式
                        display: 'bottom', //显示方式 ：modal（正中央）  bottom（底部）
                        lang: "zh",
                        placeholder: '请选择...',//空白等待提示  
                        //  defaultValue: ['', '', ''],//设置初始值  
                        labels: ['省', '市', '区'],  
                        showLabel: false,//是否显示labels  
                        closeOnOverlay:false,//如果为ture覆盖点击将滚动条内数据将关闭遮罩层  
                        tap:true,  
                        onSelect: function (valueText, inst) {  
                            options.onSelect?options.onSelect(valueText, inst):""
                        } 
                    };
                    $("#treelist").mobiscroll().treelist(opt);
                break;
                case "custom":
                    var txt = "<ul id='treelist'>",tj=0
                    for(var i in options.data){
                        tj=1;
                        if(options.data[i].data && options.data[i].data.length>0){
                            tj=2;
                            txt += "<li data-val="+options.data[i].class1+"><div>"+options.data[i].class1+"</div><ul>"
                            for(var j in options.data[i].data){
                                if(options.data[i].data[j].data && options.data[i].data[j].data.length>0){
                                    tj=3;
                                    txt += "<li data-val='"+options.data[i].data[j].class2+"'><div>"+options.data[i].data[j].class2+"</div><ul>"
                                    for(var b in options.data[i].data[j].data){
                                        txt += "<li data-val='"+options.data[i].data[j].data[b].class3+"'>"+options.data[i].data[j].data[b].class3+"</li>"                            
                                    }
                                    txt += "</ul></li>"
                                }else{
                                    txt += "<li data-val='"+options.data[i].data[j].class2+"'>"+options.data[i].data[j].class2+"</li>"
                                }
                            }
                            txt += "</ul></li>"
                        }else{
                            txt += "<li data-val="+options.data[i].class1+">"+options.data[i].class1+"</li>"
                        }
                    }
                    txt += "</ul>"
                    $("#"+options.input).html(txt)
                    var opt = {
                        theme: 'ios7', //皮肤样式
                        display: 'bottom', //显示方式 ：modal（正中央）  bottom（底部）
                        lang: "zh",
                        placeholder: '请选择...',//空白等待提示  
                        showLabel: false,//是否显示labels  
                        closeOnOverlay:false,//如果为ture覆盖点击将滚动条内数据将关闭遮罩层  
                        tap:true,  
                        onSelect: function (valueText, inst) {  
                            options.onSelect?options.onSelect(valueText, inst):""
                        },
                        onBeforeShow: function(){
                            if(tj==1){
                                $(".dw-i").css("text-align","center")
                            }
                        }
                    };
                    $("#treelist").mobiscroll().treelist(opt);
                break;
                default:
                    var opt = {  
                        theme: "ios7",
                        lang: "zh",  
                        display: 'bottom',
                        dateFormat: options.dateFormat?options.dateFormat:'yy-mm-dd', //返回结果格式化为年月格式  
                        // wheels:[], 设置此属性可以只显示年月，此处演示，就用下面的onBeforeShow方法,另外也可以用treelist去实现  
                        headerText: function (valueText) { //自定义弹出框头部格式  
                            var array = valueText.split('-'),data="";
                            if(options.dateFormat && options.dateFormat.indexOf("-dd")<0){
                                data = array[0] + "年" + array[1] + "月";  
                            }else{
                                data = array[0] + "年" + array[1] + "月" + array[2] + "日";  
                            }
                            return data  
                        },  
                        onSelect: function (valueText, inst) {  
                            options.onSelect?options.onSelect(valueText, inst):""
                        }  
                    }
                    if(options.dateFormat && options.dateFormat.indexOf("-dd")<0){
                        opt.onBeforeShow = function (inst) { inst.settings.wheels[0].length>2?inst.settings.wheels[0].pop():null; }
                    }
                    $("#"+options.input).mobiscroll().date(opt); 
                break;
            }
        },


    })

    ys.prototype.extend({

        /*
         初始化
         */
        init: function(options) {

            var jqueryLoad = function(next){
                if(options.isLoadJq){
                    ys.jsInsertBefore(ysConfig.jquery, function(){
                        next()
                    })
                }else{
                    next()
                }
            }

            var weixinLoad = function(next){
                if(options.isLoadWx){
                    ys.jsInsertBefore(ysConfig.weixin, function(){
                        next()
                    })
                }else{
                    next()
                }
            }

            var mlinkLoad = function(next){
                if(options.isLoadMc){
                    ys.jsInsertBefore(ysConfig.mlink, function(){
                        next()
                    })
                }else{
                    next()
                }
            }

            var playerLoad = function(next){
                if(options.isLoadMp3){
                    ys.jsInsertBefore(ysConfig.player, function(){
                        next()
                    })
                }else{
                    next()
                }
            }

            var scroll = function(next){
                if(options.scroll){
                    if(options.isLoadJq){
                        ys.jsInsertBefore(ysConfig.scroll, function(){
                            next()
                        })
                    }else{
                        ys.alert(errorCode.NO_JQUERY)
                    }
                }else{
                    next()
                }
            }

            var handlebar = function(next){
                if(options.handlebar){
                    ys.jsInsertBefore(ysConfig.handlebar, function(){
                        next()
                    })
                }else{
                    next()
                }
            }

            jqueryLoad(function(){
                weixinLoad(function(){
                    mlinkLoad(function(){
                        playerLoad(function(){
                            scroll(function(){
                                handlebar(function(){
                                    options.success?options.success():""
                                })
                            })
                        })
                    })
                })
            })

            if(options.dbId){
                var countFootCode = document.createElement("script");
                countFootCode.appendChild(document.createTextNode("var _hmt = _hmt || [];(function() {var hm = document.createElement('script');hm.src = 'https://hm.baidu.com/hm.js?"+options.dbId+"';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})()"));
                var ss = document.getElementsByTagName('script')[0];
                ss.parentNode.insertBefore(countFootCode, ss);
            }

            ys.config = options;
        },

        // 魔窗跳转
        jumpToAppMc: function(options){
            var link="https://a2hylk.mlinks.cc/A0BN",
                params = new Array();
            if(Array.prototype.isPrototypeOf(options)){
                if(options.length>0){
                    for(var i in options){
                        params.push({
                            mlink: link+"?type="+options[i].data.type+"&id="+options[i].data.id+"&ext="+options[i].data.ext,
                            button: document.querySelector("#"+options[i].button),
                        })
                    }
                }else{
                    ys.alert(errorCode.ERROR_PARAMS)
                }
            }else{
                params.push({
                    mlink: link+"?type="+options.data.type+"&id="+options.data.id+"&ext="+options.data.ext,
                    button: document.querySelector("#"+options.button),
                })
            }
            new Mlink(params);
        },

        mp3Player: function(options){

            var mp3 = ys.createEle({
                arrt: [
                    {
                        name: "id",
                        value: "ysplayer"
                    },
                    {
                        name: "class",
                        value: "aplayer"
                    }
                ]
            });
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(mp3, s);

            if(typeof(options) == "object"){
                var data = options
            }else{
                var data = {
                    src: options,
                    autoplay: false,
                    mode: "order",
                    title: "",
                    author: "",
                    pic: ""
                }
            }

            return new APlayer({
                element: document.getElementById('ysplayer'),
                narrow: false,
                autoplay: data.autoplay,
                showlrc: 0,
                mutex: true,
                preload: 'metadata',
                theme: '#e6d0b2',
                mode: data.mode,   //circulation(loop default),random,single,order(no loop)
                music: {
                    title: data.title,
                    author: data.author,
                    url: data.src,
                    pic: data.pic
                }
            });
        }
    })

    ys.each({
        jsInsertBefore: "jsInsertBefore",
        errorLog: "errorLog",
        jsonToString: "jsonToString",
        domGetId: "domGetId",
        ajax: "ajax",
        isWeiXin: "isWeiXin",
        versions:"versions",
        dbEvent: "dbEvent",
        wxConfig: "wxConfig",
        getCookie: "getCookie",
        setStore: "setStore",
        getStore: "getStore",
        removeStore: "removeStore",
        formatDate: "formatDate",
        paddNum: "paddNum",
        getDateDiff: "getDateDiff",
        getUrlKeyValue: "getUrlKeyValue",
        chinaNum: "chinaNum",
        isEmptyObject: "isEmptyObject",
        jumpToApp: "jumpToApp",
        convertImgToBase64: "convertImgToBase64",
        getRandomNum: "getRandomNum",
        createEle: "createEle",
        insertTipsText: "insertTipsText",
        alert: "alert",
        confirm: "confirm",
        shareTips: "shareTips",
        loading: "loading",
        appAction: "appAction",
        mscroll: "mscroll",
    }, function(name){
        ys.prototype[name] = function(object1, object2){
            return ys[name](object1, object2)
        }
    });

    window.$$ = window.ys = new ys()

})()

/*
 初始化ios通讯
 */
function connectWebViewJavascriptBridge(callback) {
    if(window.WebViewJavascriptBridge){
        callback(WebViewJavascriptBridge)
    }else{
        document.addEventListener('WebViewJavascriptBridgeReady', function(){
            callback(WebViewJavascriptBridge)
        }, false)
    }
}
connectWebViewJavascriptBridge(function(bridge) {
    bridge.init(function(message, responseCallback) {
        responseCallback()
    })

    //IOS支付成功回调
    bridge.registerHandler('payCallbackIos', function(data, responseCallback) {
        payCallback(data);
    })

    //IOS分享成功回调
    bridge.registerHandler('shareCallbackIos', function(data, responseCallback) {
        shareCallback(data);
    })
})