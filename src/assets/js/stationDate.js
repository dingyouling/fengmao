// 热门车站
const hotStationData = 
[
    {
        "stationCode": "beijing",
        "match": "bj|beijing",
        "stationName": "北京",
        "hot": 47733767,
        "priority": 51
    },
    {
        "stationCode": "shanghai",
        "match": "sh|shanghai",
        "stationName": "上海",
        "hot": 45316345,
        "priority": 50
    },
    {
        "stationCode": "guangzhou",
        "match": "gz|guangzhou",
        "stationName": "广州",
        "hot": 35372673,
        "priority": 48
    },
    {
        "stationCode": "zhengzhou",
        "match": "zz|zhengzhou",
        "stationName": "郑州",
        "hot": 27855583,
        "priority": 45
    },
    {
        "stationCode": "guangzhounan",
        "match": "gzn|guangzhounan",
        "stationName": "广州南",
        "hot": 26033989,
        "priority": 1
    },
    {
        "stationCode": "xian",
        "match": "xa|xian",
        "stationName": "西安",
        "hot": 21319704,
        "priority": 41
    },
    {
        "stationCode": "tianjin",
        "match": "tj|tianjin",
        "stationName": "天津",
        "hot": 21056427,
        "priority": 36
    },
    {
        "stationCode": "chengdu",
        "match": "cdu|chengdu",
        "stationName": "成都",
        "hot": 19916063,
        "priority": 42
    },
    {
        "stationCode": "shenzhen",
        "match": "sz|shenzhen",
        "stationName": "深圳",
        "hot": 19033652,
        "priority": 43
    }
];

// 所有车站（排序后的）
const allStationData = 
{
    "A": [
        {
            "stationCode": "anyang",
            "match": "ay|anyang",
            "stationName": "安阳",
            "hot": 3445796,
            "priority": 10
        },
        {
            "stationCode": "ankang",
            "match": "ak|ankang",
            "stationName": "安康",
            "hot": 3157171,
            "priority": 10
        },
        {
            "stationCode": "anshan",
            "match": "as|anshan",
            "stationName": "鞍山",
            "hot": 2434930,
            "priority": 10
        },
        {
            "stationCode": "anqing",
            "match": "aq|anqing",
            "stationName": "安庆",
            "hot": 1480643,
            "priority": 10
        },
        {
            "stationCode": "anshun",
            "match": "as|anshun",
            "stationName": "安顺",
            "hot": 1462950,
            "priority": 10
        },
        {
            "stationCode": "anyangdong",
            "match": "ayd|anyangdong",
            "stationName": "安阳东",
            "hot": 1301736,
            "priority": 1
        },
        {
            "stationCode": "aojiang",
            "match": "aj|aojiang",
            "stationName": "鳌江",
            "hot": 941678,
            "priority": 1
        },
        {
            "stationCode": "akesu",
            "match": "aks|akesu",
            "stationName": "阿克苏",
            "hot": 697877,
            "priority": 10
        },
        {
            "stationCode": "anshanxi",
            "match": "asx|anshanxi",
            "stationName": "鞍山西",
            "hot": 676188,
            "priority": 1
        },
        {
            "stationCode": "anda",
            "match": "ad|anda",
            "stationName": "安达",
            "hot": 620677,
            "priority": 1
        },
        {
            "stationCode": "anlu",
            "match": "al|anlu",
            "stationName": "安陆",
            "hot": 571112,
            "priority": 1
        },
        {
            "stationCode": "anqingxi",
            "match": "aqx|anqingxi",
            "stationName": "安庆西",
            "hot": 411270,
            "priority": 1
        },
        {
            "stationCode": "anshunxi",
            "match": "asx|anshunxi",
            "stationName": "安顺西",
            "hot": 380557,
            "priority": 0
        },
        {
            "stationCode": "acheng",
            "match": "ach|acheng",
            "stationName": "阿城",
            "hot": 309368,
            "priority": 1
        },
        {
            "stationCode": "antingbei",
            "match": "atb|antingbei",
            "stationName": "安亭北",
            "hot": 160052,
            "priority": 1
        },
        {
            "stationCode": "anren",
            "match": "ar|anren",
            "stationName": "安仁",
            "hot": 144792,
            "priority": 1
        },
        {
            "stationCode": "anhua",
            "match": "ahu|anhua",
            "stationName": "安化",
            "hot": 128344,
            "priority": 1
        },
        {
            "stationCode": "ajin",
            "match": "aj|ajin",
            "stationName": "阿金",
            "hot": 124905,
            "priority": 1
        },
        {
            "stationCode": "antu",
            "match": "atu|antu",
            "stationName": "安图",
            "hot": 104181,
            "priority": 1
        },
        {
            "stationCode": "antuxi",
            "match": "antuxi|atx",
            "stationName": "安图西",
            "hot": 99121,
            "priority": 1
        },
        {
            "stationCode": "atushi",
            "match": "ats|atushi",
            "stationName": "阿图什",
            "hot": 81188,
            "priority": 1
        },
        {
            "stationCode": "ankouyao",
            "match": "aky|ankouyao",
            "stationName": "安口窑",
            "hot": 67395,
            "priority": 1
        },
        {
            "stationCode": "angangxi",
            "match": "aax|angangxi",
            "stationName": "昂昂溪",
            "hot": 56120,
            "priority": 1
        },
        {
            "stationCode": "anguang",
            "match": "agu|anguang",
            "stationName": "安广",
            "hot": 45430,
            "priority": 1
        },
        {
            "stationCode": "aketao",
            "match": "akt|aketao",
            "stationName": "阿克陶",
            "hot": 41210,
            "priority": 1
        },
        {
            "stationCode": "aershan",
            "match": "aes|aershan",
            "stationName": "阿尔山",
            "hot": 39665,
            "priority": 10
        },
        {
            "stationCode": "alihe",
            "match": "alh|alihe",
            "stationName": "阿里河",
            "hot": 38821,
            "priority": 1
        },
        {
            "stationCode": "ande",
            "match": "ad|ande",
            "stationName": "安德",
            "hot": 36006,
            "priority": 0
        },
        {
            "stationCode": "alashankou",
            "match": "alsk|alashankou",
            "stationName": "阿拉山口",
            "hot": 29385,
            "priority": 1
        },
        {
            "stationCode": "anjia",
            "match": "aji|anjia",
            "stationName": "安家",
            "hot": 26670,
            "priority": 1
        },
        {
            "stationCode": "aolibugao",
            "match": "alg|aolibugao",
            "stationName": "敖力布告",
            "hot": 26531,
            "priority": 1
        },
        {
            "stationCode": "amuer",
            "match": "ame|amuer",
            "stationName": "阿木尔",
            "hot": 21977,
            "priority": 1
        },
        {
            "stationCode": "aershanbei",
            "match": "aesb|aershanbei",
            "stationName": "阿尔山北",
            "hot": 10886,
            "priority": 0
        },
        {
            "stationCode": "alongshan",
            "match": "als|alongshan",
            "stationName": "阿龙山",
            "hot": 9291,
            "priority": 1
        },
        {
            "stationCode": "anxi",
            "match": "ax|anxi",
            "stationName": "安溪",
            "hot": 8373,
            "priority": 1
        },
        {
            "stationCode": "aijiacun",
            "match": "ajc|aijiacun",
            "stationName": "艾家村",
            "hot": 8060,
            "priority": 1
        },
        {
            "stationCode": "antang",
            "match": "ata|antang",
            "stationName": "安塘",
            "hot": 5583,
            "priority": 1
        },
        {
            "stationCode": "ananzhuang",
            "match": "anz|ananzhuang",
            "stationName": "阿南庄",
            "hot": 4439,
            "priority": 1
        },
        {
            "stationCode": "anping",
            "match": "ap|anping",
            "stationName": "安平",
            "hot": 4375,
            "priority": 10
        },
        {
            "stationCode": "anding",
            "match": "adi|anding",
            "stationName": "安定",
            "hot": 4106,
            "priority": 1
        },
        {
            "stationCode": "anlong",
            "match": "alo|anlong",
            "stationName": "安龙",
            "hot": 3969,
            "priority": 1
        },
        {
            "stationCode": "abagaqi",
            "match": "abgq|abagaqi",
            "stationName": "阿巴嘎旗",
            "hot": 3671,
            "priority": 0
        },
        {
            "stationCode": "aihe",
            "match": "ahe|aihe",
            "stationName": "艾河",
            "hot": 1209,
            "priority": 1
        }
    ],
    "B": [
        {
            "stationCode": "beijing",
            "match": "bj|beijing",
            "stationName": "北京",
            "hot": 47733767,
            "priority": 51
        },
        {
            "stationCode": "beijingxi",
            "match": "bjx|beijingxi",
            "stationName": "北京西",
            "hot": 10779341,
            "priority": 1
        },
        {
            "stationCode": "baoding",
            "match": "bd|baoding",
            "stationName": "保定",
            "hot": 5158882,
            "priority": 1
        },
        {
            "stationCode": "beijingnan",
            "match": "bjn|beijingnan",
            "stationName": "北京南",
            "hot": 5044833,
            "priority": 1
        },
        {
            "stationCode": "bengbu",
            "match": "bb|bengbu",
            "stationName": "蚌埠",
            "hot": 4701773,
            "priority": 10
        },
        {
            "stationCode": "baotou",
            "match": "bt|baotou",
            "stationName": "包头",
            "hot": 3564216,
            "priority": 10
        },
        {
            "stationCode": "baoji",
            "match": "bj|baoji",
            "stationName": "宝鸡",
            "hot": 3330206,
            "priority": 10
        },
        {
            "stationCode": "bengbunan",
            "match": "bbn|bengbunan",
            "stationName": "蚌埠南",
            "hot": 2874514,
            "priority": 1
        },
        {
            "stationCode": "foshan",
            "match": "fs|foshan",
            "stationName": "佛山",
            "hot": 2655374,
            "priority": 10
        },
        {
            "stationCode": "beihai",
            "match": "bh|beihai",
            "stationName": "北海",
            "hot": 2608447,
            "priority": 10
        },
        {
            "stationCode": "baodingdong",
            "match": "bdd|baodingdong",
            "stationName": "保定东",
            "hot": 2123971,
            "priority": 1
        },
        {
            "stationCode": "bozhou",
            "match": "bz|bozhou",
            "stationName": "亳州",
            "hot": 2009638,
            "priority": 10
        },
        {
            "stationCode": "beidaihe",
            "match": "bdh|beidaihe",
            "stationName": "北戴河",
            "hot": 1339232,
            "priority": 1
        },
        {
            "stationCode": "baise",
            "match": "bs|baise",
            "stationName": "百色",
            "hot": 1314696,
            "priority": 1
        },
        {
            "stationCode": "bazhou",
            "match": "bzh|bazhou",
            "stationName": "霸州",
            "hot": 1271608,
            "priority": 1
        },
        {
            "stationCode": "benxi",
            "match": "bx|benxi",
            "stationName": "本溪",
            "hot": 1229287,
            "priority": 10
        },
        {
            "stationCode": "binyang",
            "match": "by|binyang",
            "stationName": "宾阳",
            "hot": 1202081,
            "priority": 1
        },
        {
            "stationCode": "baicheng",
            "match": "bc|baicheng",
            "stationName": "白城",
            "hot": 1081284,
            "priority": 1
        },
        {
            "stationCode": "baotoudong",
            "match": "btd|baotoudong",
            "stationName": "包头东",
            "hot": 782994,
            "priority": 1
        },
        {
            "stationCode": "binhai",
            "match": "bh|binhai",
            "stationName": "滨海",
            "hot": 629217,
            "priority": 1
        },
        {
            "stationCode": "bazhouxi",
            "match": "bzx|bazhouxi",
            "stationName": "霸州西",
            "hot": 587932,
            "priority": 1
        },
        {
            "stationCode": "bayuquan",
            "match": "byq|bayuquan",
            "stationName": "鲅鱼圈",
            "hot": 584628,
            "priority": 1
        },
        {
            "stationCode": "baigou",
            "match": "bg|baigou",
            "stationName": "白沟",
            "hot": 512328,
            "priority": 1
        },
        {
            "stationCode": "baiyangdian",
            "match": "byd|baiyangdian",
            "stationName": "白洋淀",
            "hot": 490110,
            "priority": 1
        },
        {
            "stationCode": "baojinan",
            "match": "bjn|baojinan",
            "stationName": "宝鸡南",
            "hot": 473499,
            "priority": 0
        },
        {
            "stationCode": "botou",
            "match": "bt|botou",
            "stationName": "泊头",
            "hot": 472136,
            "priority": 1
        },
        {
            "stationCode": "beian",
            "match": "ba|beian",
            "stationName": "北安",
            "hot": 387268,
            "priority": 1
        },
        {
            "stationCode": "badong",
            "match": "bdo|badong",
            "stationName": "巴东",
            "hot": 350156,
            "priority": 1
        },
        {
            "stationCode": "bazhong",
            "match": "bz|bazhong",
            "stationName": "巴中",
            "hot": 334650,
            "priority": 1
        },
        {
            "stationCode": "baimajing",
            "match": "bmj|baimajing",
            "stationName": "白马井",
            "hot": 323715,
            "priority": 1
        },
        {
            "stationCode": "binzhou",
            "match": "binzhou|bz",
            "stationName": "滨州",
            "hot": 318415,
            "priority": 1
        },
        {
            "stationCode": "beibei",
            "match": "bb|beibei",
            "stationName": "北碚",
            "hot": 313798,
            "priority": 0
        },
        {
            "stationCode": "baotoudong1",
            "match": "btd|baotoudong",
            "stationName": "包头 东",
            "hot": 304556,
            "priority": 0
        },
        {
            "stationCode": "beijingdong",
            "match": "bjd|beijingdong",
            "stationName": "北京东",
            "hot": 267070,
            "priority": 1
        },
        {
            "stationCode": "binhaibei",
            "match": "bhb|binhaibei",
            "stationName": "滨海北",
            "hot": 216249,
            "priority": 1
        },
        {
            "stationCode": "baishanshi",
            "match": "bss|baishanshi",
            "stationName": "白山市",
            "hot": 187644,
            "priority": 1
        },
        {
            "stationCode": "beipiaonan",
            "match": "bpn|beipiaonan",
            "stationName": "北票南",
            "hot": 187132,
            "priority": 1
        },
        {
            "stationCode": "bachu",
            "match": "bch|bachu",
            "stationName": "巴楚",
            "hot": 179775,
            "priority": 1
        },
        {
            "stationCode": "bamiancheng",
            "match": "bmc|bamiancheng",
            "stationName": "八面城",
            "hot": 178450,
            "priority": 1
        },
        {
            "stationCode": "bayangol",
            "match": "byl|bayangol",
            "stationName": "巴彦高勒",
            "hot": 175610,
            "priority": 1
        },
        {
            "stationCode": "beijingbei",
            "match": "bjb|beijingbei",
            "stationName": "北京北",
            "hot": 165104,
            "priority": 12
        },
        {
            "stationCode": "baodi",
            "match": "bd|baodi",
            "stationName": "宝坻",
            "hot": 159958,
            "priority": 1
        },
        {
            "stationCode": "baiyinxi",
            "match": "byx|baiyinxi",
            "stationName": "白银西",
            "hot": 133417,
            "priority": 1
        },
        {
            "stationCode": "benxixincheng",
            "match": "bxxc|benxixincheng",
            "stationName": "本溪新城",
            "hot": 120946,
            "priority": 1
        },
        {
            "stationCode": "baokang",
            "match": "bk|baokang",
            "stationName": "保康",
            "hot": 111055,
            "priority": 1
        },
        {
            "stationCode": "bishan",
            "match": "bs|bishan",
            "stationName": "璧山",
            "hot": 110763,
            "priority": 1
        },
        {
            "stationCode": "beitunshi",
            "match": "bts|beitunshi",
            "stationName": "北屯市",
            "hot": 107569,
            "priority": 1
        },
        {
            "stationCode": "boao",
            "match": "ba|boao",
            "stationName": "博鳌",
            "hot": 106806,
            "priority": 1
        },
        {
            "stationCode": "baihexian",
            "match": "bhx|baihexian",
            "stationName": "白河县",
            "hot": 103295,
            "priority": 1
        },
        {
            "stationCode": "bijiang",
            "match": "bj|bijiang",
            "stationName": "碧江",
            "hot": 99061,
            "priority": 1
        },
        {
            "stationCode": "bole",
            "match": "bl|bole",
            "stationName": "博乐",
            "hot": 98959,
            "priority": 1
        },
        {
            "stationCode": "bobai",
            "match": "bobai|bb",
            "stationName": "博白",
            "hot": 97539,
            "priority": 1
        },
        {
            "stationCode": "baiyinhushuo",
            "match": "byhs|baiyinhushuo",
            "stationName": "白音胡硕",
            "hot": 90255,
            "priority": 1
        },
        {
            "stationCode": "beijiao",
            "match": "bj|beijiao",
            "stationName": "北滘",
            "hot": 86797,
            "priority": 1
        },
        {
            "stationCode": "baihedong",
            "match": "bhd|baihedong",
            "stationName": "白河东",
            "hot": 81038,
            "priority": 1
        },
        {
            "stationCode": "boli",
            "match": "bl|boli",
            "stationName": "勃利",
            "hot": 80953,
            "priority": 1
        },
        {
            "stationCode": "baikuipu",
            "match": "bkp|baikuipu",
            "stationName": "白奎堡",
            "hot": 77381,
            "priority": 1
        },
        {
            "stationCode": "baolongshan",
            "match": "bls|baolongshan",
            "stationName": "宝龙山",
            "hot": 76806,
            "priority": 1
        },
        {
            "stationCode": "binxian",
            "match": "bx|binxian",
            "stationName": "彬县",
            "hot": 72176,
            "priority": 1
        },
        {
            "stationCode": "baihe1",
            "match": "bh|baihe1",
            "stationName": "白河",
            "hot": 70570,
            "priority": 1
        },
        {
            "stationCode": "bugt",
            "match": "bkt|bugt",
            "stationName": "博克图",
            "hot": 69453,
            "priority": 10
        },
        {
            "stationCode": "baoqing",
            "match": "bq|baoqing",
            "stationName": "宝清",
            "hot": 66452,
            "priority": 1
        },
        {
            "stationCode": "bamiantong",
            "match": "bmt|bamiantong",
            "stationName": "八面通",
            "hot": 63996,
            "priority": 1
        },
        {
            "stationCode": "beijingzi",
            "match": "bjz|beijingzi",
            "stationName": "北井子",
            "hot": 63920,
            "priority": 1
        },
        {
            "stationCode": "baiguo",
            "match": "bg|baiguo",
            "stationName": "柏果",
            "hot": 58870,
            "priority": 1
        },
        {
            "stationCode": "baiyinshi",
            "match": "bys|baiyinshi",
            "stationName": "白银市",
            "hot": 54451,
            "priority": 1
        },
        {
            "stationCode": "baoquanling",
            "match": "bql|baoquanling",
            "stationName": "宝泉岭",
            "hot": 51613,
            "priority": 1
        },
        {
            "stationCode": "beiliu",
            "match": "bli|beiliu",
            "stationName": "北流",
            "hot": 47782,
            "priority": 1
        },
        {
            "stationCode": "baxiantong",
            "match": "bxt|baxiantong",
            "stationName": "八仙筒",
            "hot": 47605,
            "priority": 1
        },
        {
            "stationCode": "bantang",
            "match": "bt|bantang",
            "stationName": "板塘",
            "hot": 38712,
            "priority": 0
        },
        {
            "stationCode": "benhong",
            "match": "bh|benhong",
            "stationName": "贲红",
            "hot": 38393,
            "priority": 1
        },
        {
            "stationCode": "bijiashan",
            "match": "bjs|bijiashan",
            "stationName": "笔架山",
            "hot": 37320,
            "priority": 1
        },
        {
            "stationCode": "baolin",
            "match": "bl|baolin",
            "stationName": "宝林",
            "hot": 36657,
            "priority": 1
        },
        {
            "stationCode": "beiyinhe",
            "match": "byh|beiyinhe",
            "stationName": "背荫河",
            "hot": 35752,
            "priority": 1
        },
        {
            "stationCode": "balin",
            "match": "bli|balin",
            "stationName": "巴林",
            "hot": 33516,
            "priority": 1
        },
        {
            "stationCode": "bayanqagan",
            "match": "bycg|bayanqagan",
            "stationName": "白音察干",
            "hot": 31739,
            "priority": 1
        },
        {
            "stationCode": "baijian",
            "match": "bj|baijian",
            "stationName": "白涧",
            "hot": 30541,
            "priority": 1
        },
        {
            "stationCode": "boxing",
            "match": "bx|boxing",
            "stationName": "博兴",
            "hot": 30511,
            "priority": 1
        },
        {
            "stationCode": "baohuashan",
            "match": "bhs|baohuashan",
            "stationName": "宝华山",
            "hot": 29389,
            "priority": 1
        },
        {
            "stationCode": "bajiaotai",
            "match": "bjt|bajiaotai",
            "stationName": "八角台",
            "hot": 28477,
            "priority": 1
        },
        {
            "stationCode": "baiquan",
            "match": "bqu|baiquan",
            "stationName": "白泉",
            "hot": 21209,
            "priority": 1
        },
        {
            "stationCode": "baiyunebo",
            "match": "byeb|baiyunebo",
            "stationName": "白云鄂博",
            "hot": 20275,
            "priority": 1
        },
        {
            "stationCode": "beitun",
            "match": "bt|beitun",
            "stationName": "北屯",
            "hot": 20128,
            "priority": 1
        },
        {
            "stationCode": "baiyinhuanan",
            "match": "byhn|baiyinhuanan",
            "stationName": "白音华南",
            "hot": 19409,
            "priority": 1
        },
        {
            "stationCode": "bailixia",
            "match": "blx|bailixia",
            "stationName": "百里峡",
            "hot": 16506,
            "priority": 1
        },
        {
            "stationCode": "bencha",
            "match": "bc|bencha",
            "stationName": "栟茶",
            "hot": 16257,
            "priority": 0
        },
        {
            "stationCode": "buhai",
            "match": "bha|buhai",
            "stationName": "布海",
            "hot": 15572,
            "priority": 1
        },
        {
            "stationCode": "binjiang",
            "match": "bj|binjiang",
            "stationName": "滨江",
            "hot": 15376,
            "priority": 1
        },
        {
            "stationCode": "baishishan",
            "match": "bss|baishishan",
            "stationName": "白石山",
            "hot": 15208,
            "priority": 1
        },
        {
            "stationCode": "baisha",
            "match": "bsh|baisha",
            "stationName": "白沙",
            "hot": 8444,
            "priority": 1
        },
        {
            "stationCode": "baolage",
            "match": "blg|baolage",
            "stationName": "宝拉格",
            "hot": 7864,
            "priority": 1
        },
        {
            "stationCode": "baishuijiang",
            "match": "bsj|baishuijiang",
            "stationName": "白水江",
            "hot": 7546,
            "priority": 1
        },
        {
            "stationCode": "baiqi",
            "match": "bq|baiqi",
            "stationName": "白旗",
            "hot": 6445,
            "priority": 1
        },
        {
            "stationCode": "baishuizhen",
            "match": "bsz|baishuizhen",
            "stationName": "白水镇",
            "hot": 6030,
            "priority": 1
        },
        {
            "stationCode": "beimajuanzi",
            "match": "bmz|beimajuanzi",
            "stationName": "北马圈子",
            "hot": 6012,
            "priority": 1
        },
        {
            "stationCode": "baibiguan",
            "match": "bbg|baibiguan",
            "stationName": "白壁关",
            "hot": 6000,
            "priority": 1
        },
        {
            "stationCode": "baishapo",
            "match": "bsp|baishapo",
            "stationName": "白沙坡",
            "hot": 5136,
            "priority": 1
        },
        {
            "stationCode": "babu",
            "match": "bb|babu",
            "stationName": "八步",
            "hot": 5132,
            "priority": 0
        },
        {
            "stationCode": "baiyintala",
            "match": "bytl|baiyintala",
            "stationName": "白音他拉",
            "hot": 4496,
            "priority": 1
        },
        {
            "stationCode": "bazhongdong",
            "match": "bzd|bazhongdong",
            "stationName": "巴中东",
            "hot": 3922,
            "priority": 0
        },
        {
            "stationCode": "bailang",
            "match": "bla|bailang",
            "stationName": "白狼",
            "hot": 3862,
            "priority": 1
        },
        {
            "stationCode": "banmaoqing",
            "match": "bmq|banmaoqing",
            "stationName": "班猫箐",
            "hot": 3806,
            "priority": 1
        },
        {
            "stationCode": "baijipo",
            "match": "bjp|baijipo",
            "stationName": "白鸡坡",
            "hot": 3760,
            "priority": 1
        },
        {
            "stationCode": "baiyi",
            "match": "by|baiyi",
            "stationName": "百宜",
            "hot": 3067,
            "priority": 1
        },
        {
            "stationCode": "beizhai",
            "match": "bz|beizhai",
            "stationName": "北宅",
            "hot": 2998,
            "priority": 1
        },
        {
            "stationCode": "badaling",
            "match": "bdl|badaling",
            "stationName": "八达岭",
            "hot": 2118,
            "priority": 1
        },
        {
            "stationCode": "bancheng",
            "match": "bc|bancheng",
            "stationName": "板城",
            "hot": 2091,
            "priority": 1
        },
        {
            "stationCode": "bashan",
            "match": "bs|bashan",
            "stationName": "巴山",
            "hot": 1646,
            "priority": 1
        },
        {
            "stationCode": "baijigou",
            "match": "bjg|baijigou",
            "stationName": "白芨沟",
            "hot": 1015,
            "priority": 1
        },
        {
            "stationCode": "baishuixian",
            "match": "bsx|baishuixian",
            "stationName": "白水县",
            "hot": 407,
            "priority": 1
        },
        {
            "stationCode": "buliekai",
            "match": "blk|buliekai",
            "stationName": "布列开",
            "hot": 324,
            "priority": 1
        },
        {
            "stationCode": "bantian",
            "match": "bt|bantian",
            "stationName": "坂田",
            "hot": 287,
            "priority": 1
        },
        {
            "stationCode": "benxihu",
            "match": "bxh|benxihu",
            "stationName": "本溪湖",
            "hot": 269,
            "priority": 1
        },
        {
            "stationCode": "beitai",
            "match": "bt|beitai",
            "stationName": "北台",
            "hot": 68,
            "priority": 1
        },
        {
            "stationCode": "bijiguan",
            "match": "bjg|bijiguan",
            "stationName": "碧鸡关",
            "hot": 52,
            "priority": 1
        },
        {
            "stationCode": "beiying",
            "match": "byi|beiying",
            "stationName": "北营",
            "hot": 6,
            "priority": 1
        }
    ],
    "C": [
        {
            "stationCode": "chengdu",
            "match": "cdu|chengdu",
            "stationName": "成都",
            "hot": 19916063,
            "priority": 42
        },
        {
            "stationCode": "changzhou",
            "match": "cz|changzhou",
            "stationName": "常州",
            "hot": 6586193,
            "priority": 10
        },
        {
            "stationCode": "chengdudong",
            "match": "cdd|chengdudong",
            "stationName": "成都东",
            "hot": 5789868,
            "priority": 1
        },
        {
            "stationCode": "chenzhou",
            "match": "cz|chenzhou",
            "stationName": "郴州",
            "hot": 3691039,
            "priority": 1
        },
        {
            "stationCode": "cangzhou",
            "match": "cz|cangzhou",
            "stationName": "沧州",
            "hot": 3503667,
            "priority": 10
        },
        {
            "stationCode": "chaoshan",
            "match": "cs|chaoshan",
            "stationName": "潮汕",
            "hot": 3174562,
            "priority": 0
        },
        {
            "stationCode": "chenzhouxi",
            "match": "czx|chenzhouxi",
            "stationName": "郴州西",
            "hot": 2412441,
            "priority": 1
        },
        {
            "stationCode": "changzhoubei",
            "match": "czb|changzhoubei",
            "stationName": "常州北",
            "hot": 1774907,
            "priority": 1
        },
        {
            "stationCode": "changde",
            "match": "cd|changde",
            "stationName": "常德",
            "hot": 1751012,
            "priority": 10
        },
        {
            "stationCode": "cangzhouxi",
            "match": "czx|cangzhouxi",
            "stationName": "沧州西",
            "hot": 1704131,
            "priority": 1
        },
        {
            "stationCode": "chaoyang1",
            "match": "cy|chaoyang",
            "stationName": "潮阳",
            "hot": 1575796,
            "priority": 0
        },
        {
            "stationCode": "chuzhou",
            "match": "czh|chuzhou",
            "stationName": "滁州",
            "hot": 1438399,
            "priority": 1
        },
        {
            "stationCode": "chizhou",
            "match": "cz|chizhou",
            "stationName": "池州",
            "hot": 1310419,
            "priority": 10
        },
        {
            "stationCode": "cangnan",
            "match": "cn|cangnan",
            "stationName": "苍南",
            "hot": 1175325,
            "priority": 1
        },
        {
            "stationCode": "chifeng",
            "match": "cf|chifeng",
            "stationName": "赤峰",
            "hot": 1137615,
            "priority": 10
        },
        {
            "stationCode": "chengde",
            "match": "cd|chengde",
            "stationName": "承德",
            "hot": 961328,
            "priority": 10
        },
        {
            "stationCode": "changping1",
            "match": "cp|changping",
            "stationName": "常平",
            "hot": 937610,
            "priority": 1
        },
        {
            "stationCode": "changtu",
            "match": "ct|changtu",
            "stationName": "昌图",
            "hot": 873030,
            "priority": 1
        },
        {
            "stationCode": "chaohu",
            "match": "ch|chaohu",
            "stationName": "巢湖",
            "hot": 840218,
            "priority": 1
        },
        {
            "stationCode": "chibi",
            "match": "cb|chibi",
            "stationName": "赤壁",
            "hot": 699334,
            "priority": 1
        },
        {
            "stationCode": "caoxian",
            "match": "cx|caoxian",
            "stationName": "曹县",
            "hot": 645759,
            "priority": 1
        },
        {
            "stationCode": "chaozhou",
            "match": "sz|chaozhou",
            "stationName": "潮州",
            "hot": 622432,
            "priority": 1
        },
        {
            "stationCode": "chuzhoubei",
            "match": "czb|chuzhoubei",
            "stationName": "滁州北",
            "hot": 593440,
            "priority": 1
        },
        {
            "stationCode": "caohai",
            "match": "cha|caohai",
            "stationName": "草海",
            "hot": 554082,
            "priority": 1
        },
        {
            "stationCode": "chaoyang",
            "match": "cya|chaoyang",
            "stationName": "朝阳",
            "hot": 552743,
            "priority": 1
        },
        {
            "stationCode": "chibibei",
            "match": "cbb|chibibei",
            "stationName": "赤壁北",
            "hot": 531052,
            "priority": 1
        },
        {
            "stationCode": "chuxiong",
            "match": "cx|chuxiong",
            "stationName": "楚雄",
            "hot": 447243,
            "priority": 1
        },
        {
            "stationCode": "changli",
            "match": "cli|changli",
            "stationName": "昌黎",
            "hot": 443651,
            "priority": 1
        },
        {
            "stationCode": "congjiang",
            "match": "cj|congjiang",
            "stationName": "从江",
            "hot": 442819,
            "priority": 1
        },
        {
            "stationCode": "caijiapo",
            "match": "cjp|caijiapo",
            "stationName": "蔡家坡",
            "hot": 438257,
            "priority": 1
        },
        {
            "stationCode": "chaohudong",
            "match": "chaohudong|chd",
            "stationName": "巢湖东",
            "hot": 412674,
            "priority": 1
        },
        {
            "stationCode": "chengdunan",
            "match": "cdn|chengdunan",
            "stationName": "成都南",
            "hot": 347626,
            "priority": 1
        },
        {
            "stationCode": "cangxi",
            "match": "cx|cangxi",
            "stationName": "苍溪",
            "hot": 289633,
            "priority": 1
        },
        {
            "stationCode": "chongzuo",
            "match": "cz|chongzuo",
            "stationName": "崇左",
            "hot": 286852,
            "priority": 1
        },
        {
            "stationCode": "changpingbei",
            "match": "cpb|changpingbei",
            "stationName": "昌平北",
            "hot": 280834,
            "priority": 1
        },
        {
            "stationCode": "changtuxi",
            "match": "ctx|changtuxi",
            "stationName": "昌图西",
            "hot": 279587,
            "priority": 1
        },
        {
            "stationCode": "cili",
            "match": "cli|cili",
            "stationName": "慈利",
            "hot": 268122,
            "priority": 1
        },
        {
            "stationCode": "chaigoupu",
            "match": "cgp|chaigoupu",
            "stationName": "柴沟堡",
            "hot": 203962,
            "priority": 1
        },
        {
            "stationCode": "ciyao",
            "match": "cya|ciyao",
            "stationName": "磁窑",
            "hot": 167508,
            "priority": 1
        },
        {
            "stationCode": "changle",
            "match": "cle|changle",
            "stationName": "昌乐",
            "hot": 166086,
            "priority": 1
        },
        {
            "stationCode": "cenxi",
            "match": "cxi|cenxi",
            "stationName": "岑溪",
            "hot": 162654,
            "priority": 1
        },
        {
            "stationCode": "chasuqi",
            "match": "csq|chasuqi",
            "stationName": "察素齐",
            "hot": 159740,
            "priority": 1
        },
        {
            "stationCode": "chaoyangzhen",
            "match": "cyz|chaoyangzhen",
            "stationName": "朝阳镇",
            "hot": 156507,
            "priority": 1
        },
        {
            "stationCode": "chabuga",
            "match": "cbg|chabuga",
            "stationName": "查布嘎",
            "hot": 153150,
            "priority": 1
        },
        {
            "stationCode": "chalingnan",
            "match": "cln|chalingnan",
            "stationName": "茶陵南",
            "hot": 151459,
            "priority": 0
        },
        {
            "stationCode": "chaihe",
            "match": "ch|chaihe",
            "stationName": "柴河",
            "hot": 81123,
            "priority": 1
        },
        {
            "stationCode": "chenggu",
            "match": "cg|chenggu",
            "stationName": "城固",
            "hot": 77899,
            "priority": 1
        },
        {
            "stationCode": "caozili",
            "match": "czl|caozili",
            "stationName": "曹子里",
            "hot": 66694,
            "priority": 1
        },
        {
            "stationCode": "chengzitan",
            "match": "czt|chengzitan",
            "stationName": "城子坦",
            "hot": 62875,
            "priority": 0
        },
        {
            "stationCode": "changpingdong",
            "match": "changpingdong|cpd",
            "stationName": "常平东",
            "hot": 60596,
            "priority": 1
        },
        {
            "stationCode": "cixian",
            "match": "cxi|cixian",
            "stationName": "磁县",
            "hot": 56423,
            "priority": 1
        },
        {
            "stationCode": "chenggaozi",
            "match": "cgz|chenggaozi",
            "stationName": "成高子",
            "hot": 45083,
            "priority": 1
        },
        {
            "stationCode": "ceheng",
            "match": "ch|ceheng",
            "stationName": "册亨",
            "hot": 44191,
            "priority": 1
        },
        {
            "stationCode": "chenxi",
            "match": "cx|chenxi",
            "stationName": "辰溪",
            "hot": 42571,
            "priority": 1
        },
        {
            "stationCode": "chengjisihan",
            "match": "cjh|chengjisihan",
            "stationName": "成吉思汗",
            "hot": 39938,
            "priority": 1
        },
        {
            "stationCode": "chushan",
            "match": "cs|chushan",
            "stationName": "楚山",
            "hot": 33237,
            "priority": 1
        },
        {
            "stationCode": "caohekou",
            "match": "chk|caohekou",
            "stationName": "草河口",
            "hot": 32500,
            "priority": 1
        },
        {
            "stationCode": "chaling",
            "match": "cl|chaling",
            "stationName": "茶陵",
            "hot": 31486,
            "priority": 1
        },
        {
            "stationCode": "chenming",
            "match": "cm|chenming",
            "stationName": "晨明",
            "hot": 28726,
            "priority": 1
        },
        {
            "stationCode": "cangshi",
            "match": "cs|cangshi",
            "stationName": "苍石",
            "hot": 27651,
            "priority": 1
        },
        {
            "stationCode": "caijiagou",
            "match": "cjg|caijiagou",
            "stationName": "蔡家沟",
            "hot": 23078,
            "priority": 1
        },
        {
            "stationCode": "cishan",
            "match": "csh|cishan",
            "stationName": "磁山",
            "hot": 23049,
            "priority": 1
        },
        {
            "stationCode": "cuogang",
            "match": "cg|cuogang",
            "stationName": "嵯岗",
            "hot": 21505,
            "priority": 1
        },
        {
            "stationCode": "caoshi",
            "match": "csh|caoshi",
            "stationName": "草市",
            "hot": 19767,
            "priority": 1
        },
        {
            "stationCode": "chengyang",
            "match": "cy|chengyang",
            "stationName": "城阳",
            "hot": 16980,
            "priority": 1
        },
        {
            "stationCode": "chengdedong",
            "match": "cdd|chengdedong",
            "stationName": "承德东",
            "hot": 16105,
            "priority": 1
        },
        {
            "stationCode": "chaoyangdi",
            "match": "cyd|chaoyangdi",
            "stationName": "朝阳地",
            "hot": 14039,
            "priority": 1
        },
        {
            "stationCode": "chunyang",
            "match": "cy|chunyang",
            "stationName": "春阳",
            "hot": 13447,
            "priority": 1
        },
        {
            "stationCode": "chenqing",
            "match": "cq|chenqing",
            "stationName": "辰清",
            "hot": 13439,
            "priority": 1
        },
        {
            "stationCode": "chifengxi",
            "match": "cfx|chifengxi",
            "stationName": "赤峰西",
            "hot": 12070,
            "priority": 1
        },
        {
            "stationCode": "changping",
            "match": "cp|changping",
            "stationName": "昌平",
            "hot": 11774,
            "priority": 10
        },
        {
            "stationCode": "chenxiangtun",
            "match": "cxt|chenxiangtun",
            "stationName": "陈相屯",
            "hot": 9916,
            "priority": 1
        },
        {
            "stationCode": "chaoyangchuan",
            "match": "cyc|chaoyangchuan",
            "stationName": "朝阳川",
            "hot": 7835,
            "priority": 1
        },
        {
            "stationCode": "chenguanying",
            "match": "cgy|chenguanying",
            "stationName": "陈官营",
            "hot": 7775,
            "priority": 1
        },
        {
            "stationCode": "cuihuangkou",
            "match": "chk|cuihuangkou",
            "stationName": "崔黄口",
            "hot": 7325,
            "priority": 1
        },
        {
            "stationCode": "zengjiapingzi",
            "match": "zjpz|zengjiapingzi",
            "stationName": "曾家坪子",
            "hot": 4466,
            "priority": 1
        },
        {
            "stationCode": "chajiang",
            "match": "cj|chajiang",
            "stationName": "岔江",
            "hot": 4436,
            "priority": 1
        },
        {
            "stationCode": "chujiawan",
            "match": "cjw|chujiawan",
            "stationName": "褚家湾",
            "hot": 4380,
            "priority": 1
        },
        {
            "stationCode": "chezhuanwan",
            "match": "czw|chezhuanwan",
            "stationName": "车转湾",
            "hot": 3475,
            "priority": 1
        },
        {
            "stationCode": "changzhuang",
            "match": "czh|changzhuang",
            "stationName": "常庄",
            "hot": 3036,
            "priority": 1
        },
        {
            "stationCode": "chaolianggou",
            "match": "clg|chaolianggou",
            "stationName": "超梁沟",
            "hot": 2903,
            "priority": 1
        },
        {
            "stationCode": "caishan",
            "match": "caishan|cs",
            "stationName": "蔡山",
            "hot": 1264,
            "priority": 1
        },
        {
            "stationCode": "chengcheng",
            "match": "cc|chengcheng",
            "stationName": "澄城",
            "hot": 1116,
            "priority": 1
        },
        {
            "stationCode": "chongren",
            "match": "cr|chongren",
            "stationName": "崇仁",
            "hot": 798,
            "priority": 1
        },
        {
            "stationCode": "chuangyecun",
            "match": "cyc|chuangyecun",
            "stationName": "创业村",
            "hot": 489,
            "priority": 1
        },
        {
            "stationCode": "zengkou",
            "match": "zk|zengkou",
            "stationName": "曾口",
            "hot": 460,
            "priority": 0
        },
        {
            "stationCode": "chaka",
            "match": "ck|chaka",
            "stationName": "茶卡",
            "hot": 398,
            "priority": 0
        },
        {
            "stationCode": "chunwan",
            "match": "cw|chunwan",
            "stationName": "春湾",
            "hot": 336,
            "priority": 1
        },
        {
            "stationCode": "chaigang",
            "match": "cga|chaigang",
            "stationName": "柴岗",
            "hot": 309,
            "priority": 1
        },
        {
            "stationCode": "cixi",
            "match": "cxi|cixi",
            "stationName": "磁西",
            "hot": 285,
            "priority": 1
        }
    ],
    "D": [
        {
            "stationCode": "dalian",
            "match": "dl|dalian",
            "stationName": "大连",
            "hot": 6290831,
            "priority": 10
        },
        {
            "stationCode": "dazhou",
            "match": "dz|dazhou",
            "stationName": "达州",
            "hot": 4436366,
            "priority": 10
        },
        {
            "stationCode": "dongguan",
            "match": "dg|dongguan",
            "stationName": "东莞",
            "hot": 4365350,
            "priority": 0
        },
        {
            "stationCode": "dongguandong",
            "match": "dgd|dongguandong",
            "stationName": "东莞东",
            "hot": 4067351,
            "priority": 10
        },
        {
            "stationCode": "dezhou",
            "match": "dz|dezhou",
            "stationName": "德州",
            "hot": 3549836,
            "priority": 1
        },
        {
            "stationCode": "datong",
            "match": "dt|datong",
            "stationName": "大同",
            "hot": 2599468,
            "priority": 10
        },
        {
            "stationCode": "dalianbei",
            "match": "dlb|dalianbei",
            "stationName": "大连北",
            "hot": 1988405,
            "priority": 1
        },
        {
            "stationCode": "dandong",
            "match": "dd|dandong",
            "stationName": "丹东",
            "hot": 1856322,
            "priority": 10
        },
        {
            "stationCode": "daqing",
            "match": "dq|daqing",
            "stationName": "大庆",
            "hot": 1787452,
            "priority": 1
        },
        {
            "stationCode": "dezhoudong",
            "match": "dzd|dezhoudong",
            "stationName": "德州东",
            "hot": 1760879,
            "priority": 1
        },
        {
            "stationCode": "danyang",
            "match": "dya|danyang",
            "stationName": "丹阳",
            "hot": 1380949,
            "priority": 1
        },
        {
            "stationCode": "dingzhou",
            "match": "dz|dingzhou",
            "stationName": "定州",
            "hot": 1327555,
            "priority": 1
        },
        {
            "stationCode": "deyang",
            "match": "dy|deyang",
            "stationName": "德阳",
            "hot": 1233413,
            "priority": 1
        },
        {
            "stationCode": "daqingxi",
            "match": "dqx|daqingxi",
            "stationName": "大庆西",
            "hot": 1105525,
            "priority": 0
        },
        {
            "stationCode": "dongfang",
            "match": "df|dongfang",
            "stationName": "东方",
            "hot": 901139,
            "priority": 1
        },
        {
            "stationCode": "daqingdong",
            "match": "dqd|daqingdong",
            "stationName": "大庆东",
            "hot": 864391,
            "priority": 1
        },
        {
            "stationCode": "dashiqiao",
            "match": "dsq|dashiqiao",
            "stationName": "大石桥",
            "hot": 857327,
            "priority": 1
        },
        {
            "stationCode": "dongxiang",
            "match": "dxi|dongxiang",
            "stationName": "东乡",
            "hot": 820370,
            "priority": 1
        },
        {
            "stationCode": "dangshan",
            "match": "dsh|dangshan",
            "stationName": "砀山",
            "hot": 803924,
            "priority": 1
        },
        {
            "stationCode": "dali",
            "match": "dl|dali",
            "stationName": "大理",
            "hot": 802062,
            "priority": 10
        },
        {
            "stationCode": "deqing",
            "match": "dq|deqing",
            "stationName": "德清",
            "hot": 781141,
            "priority": 1
        },
        {
            "stationCode": "dengzhou",
            "match": "dz|dengzhou",
            "stationName": "邓州",
            "hot": 722626,
            "priority": 1
        },
        {
            "stationCode": "dongandong",
            "match": "dad|dongandong",
            "stationName": "东安东",
            "hot": 692760,
            "priority": 0
        },
        {
            "stationCode": "dingxi",
            "match": "dx|dingxi",
            "stationName": "定西",
            "hot": 636156,
            "priority": 1
        },
        {
            "stationCode": "dehui",
            "match": "dh|dehui",
            "stationName": "德惠",
            "hot": 620744,
            "priority": 1
        },
        {
            "stationCode": "dunhua",
            "match": "dh|dunhua",
            "stationName": "敦化",
            "hot": 615168,
            "priority": 1
        },
        {
            "stationCode": "dongshengxi",
            "match": "dsx|dongshengxi",
            "stationName": "东胜西",
            "hot": 603729,
            "priority": 1
        },
        {
            "stationCode": "dingzhoudong",
            "match": "dzd|dingzhoudong",
            "stationName": "定州东",
            "hot": 587684,
            "priority": 1
        },
        {
            "stationCode": "douyun",
            "match": "dy|douyun",
            "stationName": "都匀",
            "hot": 515739,
            "priority": 1
        },
        {
            "stationCode": "dahushan",
            "match": "dhs|dahushan",
            "stationName": "大虎山",
            "hot": 501134,
            "priority": 1
        },
        {
            "stationCode": "dingyuan",
            "match": "dy|dingyuan",
            "stationName": "定远",
            "hot": 470924,
            "priority": 1
        },
        {
            "stationCode": "dean",
            "match": "da|dean",
            "stationName": "德安",
            "hot": 461208,
            "priority": 1
        },
        {
            "stationCode": "dingbian",
            "match": "db|dingbian",
            "stationName": "定边",
            "hot": 442574,
            "priority": 1
        },
        {
            "stationCode": "dongguang",
            "match": "dgu|dongguang",
            "stationName": "东光",
            "hot": 435468,
            "priority": 1
        },
        {
            "stationCode": "dangshannan",
            "match": "dsn|dangshannan",
            "stationName": "砀山南",
            "hot": 432666,
            "priority": 0
        },
        {
            "stationCode": "daozhou",
            "match": "dzh|daozhou",
            "stationName": "道州",
            "hot": 422207,
            "priority": 1
        },
        {
            "stationCode": "dali1",
            "match": "dl|dali",
            "stationName": "大荔",
            "hot": 412618,
            "priority": 0
        },
        {
            "stationCode": "dongtai",
            "match": "dt|dongtai",
            "stationName": "东台",
            "hot": 392721,
            "priority": 1
        },
        {
            "stationCode": "delingha",
            "match": "dlh|delingha",
            "stationName": "德令哈",
            "hot": 359126,
            "priority": 1
        },
        {
            "stationCode": "duyundong",
            "match": "dyd|duyundong",
            "stationName": "都匀东",
            "hot": 350387,
            "priority": 1
        },
        {
            "stationCode": "dayingdong",
            "match": "dyd|dayingdong",
            "stationName": "大英东",
            "hot": 348736,
            "priority": 1
        },
        {
            "stationCode": "dianjiang",
            "match": "dj|dianjiang",
            "stationName": "垫江",
            "hot": 342111,
            "priority": 0
        },
        {
            "stationCode": "danyangbei",
            "match": "dyb|danyangbei",
            "stationName": "丹阳北",
            "hot": 338153,
            "priority": 1
        },
        {
            "stationCode": "dongying",
            "match": "dy|dongying",
            "stationName": "东营",
            "hot": 333024,
            "priority": 1
        },
        {
            "stationCode": "dangyang",
            "match": "dy|dangyang",
            "stationName": "当阳",
            "hot": 328438,
            "priority": 1
        },
        {
            "stationCode": "donghaixian",
            "match": "dhx|donghaixian",
            "stationName": "东海县",
            "hot": 308109,
            "priority": 1
        },
        {
            "stationCode": "dayebei",
            "match": "dyb|dayebei",
            "stationName": "大冶北",
            "hot": 296516,
            "priority": 1
        },
        {
            "stationCode": "dehuixi",
            "match": "dhx|dehuixi",
            "stationName": "德惠西",
            "hot": 277941,
            "priority": 1
        },
        {
            "stationCode": "dunhuang",
            "match": "dh|dunhuang",
            "stationName": "敦煌",
            "hot": 258742,
            "priority": 10
        },
        {
            "stationCode": "donggangbei",
            "match": "dgb|donggangbei",
            "stationName": "东港北",
            "hot": 249066,
            "priority": 1
        },
        {
            "stationCode": "daanbei",
            "match": "dab|daanbei",
            "stationName": "大安北",
            "hot": 242196,
            "priority": 1
        },
        {
            "stationCode": "dujiangyan",
            "match": "djy|dujiangyan",
            "stationName": "都江堰",
            "hot": 224737,
            "priority": 1
        },
        {
            "stationCode": "dingnan",
            "match": "dn|dingnan",
            "stationName": "定南",
            "hot": 218059,
            "priority": 1
        },
        {
            "stationCode": "dushan",
            "match": "dsh|dushan",
            "stationName": "独山",
            "hot": 216758,
            "priority": 1
        },
        {
            "stationCode": "deqingxi",
            "match": "dqx|deqingxi",
            "stationName": "德清西",
            "hot": 204750,
            "priority": 1
        },
        {
            "stationCode": "dexing",
            "match": "dexing|dx",
            "stationName": "德兴",
            "hot": 192694,
            "priority": 1
        },
        {
            "stationCode": "dayangshu",
            "match": "dys|dayangshu",
            "stationName": "大杨树",
            "hot": 189586,
            "priority": 1
        },
        {
            "stationCode": "daiyue",
            "match": "dy|daiyue",
            "stationName": "岱岳",
            "hot": 179001,
            "priority": 1
        },
        {
            "stationCode": "dazunan",
            "match": "dzn|dazunan",
            "stationName": "大足南",
            "hot": 167704,
            "priority": 1
        },
        {
            "stationCode": "dongmingxian",
            "match": "dmx|dongmingxian",
            "stationName": "东明县",
            "hot": 158799,
            "priority": 1
        },
        {
            "stationCode": "dangtudong",
            "match": "dtd|dangtudong",
            "stationName": "当涂东",
            "hot": 158394,
            "priority": 1
        },
        {
            "stationCode": "daban",
            "match": "dba|daban",
            "stationName": "大板",
            "hot": 157829,
            "priority": 1
        },
        {
            "stationCode": "dayingzhen",
            "match": "dyz|dayingzhen",
            "stationName": "大营镇",
            "hot": 157487,
            "priority": 1
        },
        {
            "stationCode": "dagushan",
            "match": "dgs|dagushan",
            "stationName": "大孤山",
            "hot": 146642,
            "priority": 1
        },
        {
            "stationCode": "danfeng",
            "match": "dfe|danfeng",
            "stationName": "丹凤",
            "hot": 126530,
            "priority": 1
        },
        {
            "stationCode": "dayu",
            "match": "dy|dayu",
            "stationName": "大余",
            "hot": 122168,
            "priority": 1
        },
        {
            "stationCode": "dongzhi",
            "match": "dzh|dongzhi",
            "stationName": "东至",
            "hot": 120454,
            "priority": 1
        },
        {
            "stationCode": "dailing",
            "match": "dli|dailing",
            "stationName": "带岭",
            "hot": 116020,
            "priority": 1
        },
        {
            "stationCode": "dingtao",
            "match": "dt|dingtao",
            "stationName": "定陶",
            "hot": 113111,
            "priority": 1
        },
        {
            "stationCode": "daixian",
            "match": "dx|daixian",
            "stationName": "代县",
            "hot": 110350,
            "priority": 1
        },
        {
            "stationCode": "dengta",
            "match": "dta|dengta",
            "stationName": "灯塔",
            "hot": 99331,
            "priority": 1
        },
        {
            "stationCode": "dalatexi",
            "match": "dltx|dalatexi",
            "stationName": "达拉特西",
            "hot": 87760,
            "priority": 1
        },
        {
            "stationCode": "dechang",
            "match": "dc|dechang",
            "stationName": "德昌",
            "hot": 86783,
            "priority": 1
        },
        {
            "stationCode": "dongsheng1",
            "match": "ds|dongsheng",
            "stationName": "东升",
            "hot": 82999,
            "priority": 1
        },
        {
            "stationCode": "dongjingcheng",
            "match": "djc|dongjingcheng",
            "stationName": "东京城",
            "hot": 78832,
            "priority": 1
        },
        {
            "stationCode": "dongdaihe",
            "match": "ddh|dongdaihe",
            "stationName": "东戴河",
            "hot": 78814,
            "priority": 0
        },
        {
            "stationCode": "dengshahe",
            "match": "dsh|dengshahe",
            "stationName": "登沙河",
            "hot": 77864,
            "priority": 1
        },
        {
            "stationCode": "dongsheng",
            "match": "ds|dongsheng",
            "stationName": "东胜",
            "hot": 73803,
            "priority": 1
        },
        {
            "stationCode": "dongfeng",
            "match": "dfe|dongfeng",
            "stationName": "东丰",
            "hot": 72819,
            "priority": 1
        },
        {
            "stationCode": "danxiashan",
            "match": "dxs|danxiashan",
            "stationName": "丹霞山",
            "hot": 70816,
            "priority": 1
        },
        {
            "stationCode": "daba1",
            "match": "dba|daba",
            "stationName": "大巴",
            "hot": 69124,
            "priority": 1
        },
        {
            "stationCode": "dujia",
            "match": "dj|dujia",
            "stationName": "杜家",
            "hot": 63795,
            "priority": 1
        },
        {
            "stationCode": "dayan",
            "match": "dya|dayan",
            "stationName": "大雁",
            "hot": 63697,
            "priority": 1
        },
        {
            "stationCode": "dandongxi",
            "match": "ddx|dandongxi",
            "stationName": "丹东西",
            "hot": 62376,
            "priority": 1
        },
        {
            "stationCode": "dongyingnan",
            "match": "dyn|dongyingnan",
            "stationName": "东营南",
            "hot": 61458,
            "priority": 1
        },
        {
            "stationCode": "dapu",
            "match": "dp|dapu",
            "stationName": "大埔",
            "hot": 60114,
            "priority": 1
        },
        {
            "stationCode": "daxing",
            "match": "dx|daxing",
            "stationName": "大兴",
            "hot": 57832,
            "priority": 1
        },
        {
            "stationCode": "debao",
            "match": "db|debao",
            "stationName": "德保",
            "hot": 55581,
            "priority": 1
        },
        {
            "stationCode": "dawang",
            "match": "dawang|dw",
            "stationName": "大旺",
            "hot": 52813,
            "priority": 1
        },
        {
            "stationCode": "dongbianjing",
            "match": "dbj|dongbianjing",
            "stationName": "东边井",
            "hot": 50974,
            "priority": 1
        },
        {
            "stationCode": "datongxi",
            "match": "dtx|datongxi",
            "stationName": "大通西",
            "hot": 50048,
            "priority": 1
        },
        {
            "stationCode": "donghai",
            "match": "dh|donghai",
            "stationName": "东海",
            "hot": 49372,
            "priority": 1
        },
        {
            "stationCode": "duiqingshan",
            "match": "dqs|duiqingshan",
            "stationName": "对青山",
            "hot": 47915,
            "priority": 1
        },
        {
            "stationCode": "dalin",
            "match": "dli|dalin",
            "stationName": "大林",
            "hot": 47625,
            "priority": 1
        },
        {
            "stationCode": "diwopu",
            "match": "dwp|diwopu",
            "stationName": "低窝铺",
            "hot": 46893,
            "priority": 1
        },
        {
            "stationCode": "dafangnan",
            "match": "dfn|dafangnan",
            "stationName": "大方南",
            "hot": 43916,
            "priority": 0
        },
        {
            "stationCode": "dantu",
            "match": "dtu|dantu",
            "stationName": "丹徒",
            "hot": 39674,
            "priority": 1
        },
        {
            "stationCode": "dongfanghong",
            "match": "dfh|dongfanghong",
            "stationName": "东方红",
            "hot": 37901,
            "priority": 1
        },
        {
            "stationCode": "dafeng",
            "match": "df|dafeng",
            "stationName": "大丰",
            "hot": 37674,
            "priority": 0
        },
        {
            "stationCode": "donglai",
            "match": "dl|donglai",
            "stationName": "东来",
            "hot": 36752,
            "priority": 1
        },
        {
            "stationCode": "dinghudong",
            "match": "dinghudong|dhd",
            "stationName": "鼎湖东",
            "hot": 36582,
            "priority": 1
        },
        {
            "stationCode": "daluhao",
            "match": "dlh|daluhao",
            "stationName": "大陆号",
            "hot": 30258,
            "priority": 1
        },
        {
            "stationCode": "douluo",
            "match": "dl|douluo",
            "stationName": "豆罗",
            "hot": 29579,
            "priority": 1
        },
        {
            "stationCode": "duanzhou",
            "match": "duanzhou|dz",
            "stationName": "端州",
            "hot": 25813,
            "priority": 1
        },
        {
            "stationCode": "dizhuang",
            "match": "dzh|dizhuang",
            "stationName": "低庄",
            "hot": 25324,
            "priority": 1
        },
        {
            "stationCode": "daguan",
            "match": "dg|daguan",
            "stationName": "大关",
            "hot": 25240,
            "priority": 1
        },
        {
            "stationCode": "dajiagou",
            "match": "djg|dajiagou",
            "stationName": "达家沟",
            "hot": 24730,
            "priority": 1
        },
        {
            "stationCode": "dongzhen",
            "match": "dzh|dongzhen",
            "stationName": "东镇",
            "hot": 24459,
            "priority": 1
        },
        {
            "stationCode": "dashitou",
            "match": "dst|dashitou",
            "stationName": "大石头",
            "hot": 22819,
            "priority": 1
        },
        {
            "stationCode": "dapingfang",
            "match": "dpf|dapingfang",
            "stationName": "大平房",
            "hot": 21427,
            "priority": 1
        },
        {
            "stationCode": "dongerdaohe",
            "match": "dedh|dongerdaohe",
            "stationName": "东二道河",
            "hot": 21127,
            "priority": 1
        },
        {
            "stationCode": "daqinggou",
            "match": "dqg|daqinggou",
            "stationName": "大青沟",
            "hot": 20460,
            "priority": 1
        },
        {
            "stationCode": "daan",
            "match": "dan|daan",
            "stationName": "大安",
            "hot": 20373,
            "priority": 1
        },
        {
            "stationCode": "daying",
            "match": "dyi|daying",
            "stationName": "大营",
            "hot": 19741,
            "priority": 1
        },
        {
            "stationCode": "dinghushan",
            "match": "dinghushan|dhs",
            "stationName": "鼎湖山",
            "hot": 19694,
            "priority": 1
        },
        {
            "stationCode": "dongjing",
            "match": "dj|dongjing",
            "stationName": "洞井",
            "hot": 19379,
            "priority": 0
        },
        {
            "stationCode": "dongxinzhuang",
            "match": "dxz|dongxinzhuang",
            "stationName": "东辛庄",
            "hot": 18090,
            "priority": 1
        },
        {
            "stationCode": "daguantun",
            "match": "dgt|daguantun",
            "stationName": "大官屯",
            "hot": 17836,
            "priority": 1
        },
        {
            "stationCode": "dazhuyuan",
            "match": "dzy|dazhuyuan",
            "stationName": "大竹园",
            "hot": 14285,
            "priority": 1
        },
        {
            "stationCode": "dazhanchang",
            "match": "dzc|dazhanchang",
            "stationName": "大战场",
            "hot": 11103,
            "priority": 1
        },
        {
            "stationCode": "dahongqi",
            "match": "dhq|dahongqi",
            "stationName": "大红旗",
            "hot": 10999,
            "priority": 1
        },
        {
            "stationCode": "dashizhai",
            "match": "dsz|dashizhai",
            "stationName": "大石寨",
            "hot": 10658,
            "priority": 1
        },
        {
            "stationCode": "didao",
            "match": "dd|didao",
            "stationName": "滴道",
            "hot": 10215,
            "priority": 1
        },
        {
            "stationCode": "dongyudi",
            "match": "dyd|dongyudi",
            "stationName": "东淤地",
            "hot": 9987,
            "priority": 1
        },
        {
            "stationCode": "dongzhuang",
            "match": "dz|dongzhuang",
            "stationName": "东庄",
            "hot": 9264,
            "priority": 1
        },
        {
            "stationCode": "debosi",
            "match": "dbs|debosi",
            "stationName": "德伯斯",
            "hot": 9254,
            "priority": 1
        },
        {
            "stationCode": "daju",
            "match": "dj|daju",
            "stationName": "大苴",
            "hot": 8961,
            "priority": 1
        },
        {
            "stationCode": "daxinggou",
            "match": "dxg|daxinggou",
            "stationName": "大兴沟",
            "hot": 8949,
            "priority": 1
        },
        {
            "stationCode": "dapanshi",
            "match": "dps|dapanshi",
            "stationName": "大盘石",
            "hot": 8859,
            "priority": 1
        },
        {
            "stationCode": "dianxin",
            "match": "dx|dianxin",
            "stationName": "甸心",
            "hot": 8845,
            "priority": 1
        },
        {
            "stationCode": "dawukou",
            "match": "dwk|dawukou",
            "stationName": "大武口",
            "hot": 8800,
            "priority": 1
        },
        {
            "stationCode": "dabao",
            "match": "db|dabao",
            "stationName": "大堡",
            "hot": 8794,
            "priority": 1
        },
        {
            "stationCode": "dingxiang",
            "match": "dx|dingxiang",
            "stationName": "定襄",
            "hot": 8423,
            "priority": 1
        },
        {
            "stationCode": "dakoutun",
            "match": "dkt|dakoutun",
            "stationName": "大口屯",
            "hot": 7565,
            "priority": 1
        },
        {
            "stationCode": "dachaigou",
            "match": "dcg|dachaigou",
            "stationName": "打柴沟",
            "hot": 7171,
            "priority": 1
        },
        {
            "stationCode": "daba",
            "match": "db|daba",
            "stationName": "大坝",
            "hot": 7051,
            "priority": 1
        },
        {
            "stationCode": "dongtonghua",
            "match": "dth|dongtonghua",
            "stationName": "东通化",
            "hot": 6988,
            "priority": 1
        },
        {
            "stationCode": "duizhen",
            "match": "dzh|duizhen",
            "stationName": "兑镇",
            "hot": 6714,
            "priority": 1
        },
        {
            "stationCode": "derbur",
            "match": "dee|derbur",
            "stationName": "得耳布尔",
            "hot": 6676,
            "priority": 1
        },
        {
            "stationCode": "douzhuang",
            "match": "dz|douzhuang",
            "stationName": "豆庄",
            "hot": 6474,
            "priority": 1
        },
        {
            "stationCode": "dongmingcun",
            "match": "dmc|dongmingcun",
            "stationName": "东明村",
            "hot": 6360,
            "priority": 1
        },
        {
            "stationCode": "datun",
            "match": "dtu|datun",
            "stationName": "大屯",
            "hot": 5870,
            "priority": 1
        },
        {
            "stationCode": "douzhangzhuang",
            "match": "dzz|douzhangzhuang",
            "stationName": "豆张庄",
            "hot": 5531,
            "priority": 1
        },
        {
            "stationCode": "dalateqi",
            "match": "dlq|dalateqi",
            "stationName": "达拉特旗",
            "hot": 5508,
            "priority": 1
        },
        {
            "stationCode": "dajian",
            "match": "dj|dajian",
            "stationName": "大涧",
            "hot": 4939,
            "priority": 1
        },
        {
            "stationCode": "daoqing",
            "match": "dqi|daoqing",
            "stationName": "道清",
            "hot": 4913,
            "priority": 1
        },
        {
            "stationCode": "datianbian",
            "match": "dtb|datianbian",
            "stationName": "大田边",
            "hot": 4693,
            "priority": 1
        },
        {
            "stationCode": "dahuichang",
            "match": "dhc|dahuichang",
            "stationName": "大灰厂",
            "hot": 4389,
            "priority": 1
        },
        {
            "stationCode": "dongmiaohe",
            "match": "dmh|dongmiaohe",
            "stationName": "洞庙河",
            "hot": 4367,
            "priority": 1
        },
        {
            "stationCode": "duge",
            "match": "dg|duge",
            "stationName": "都格",
            "hot": 3920,
            "priority": 1
        },
        {
            "stationCode": "dongjin",
            "match": "dj|dongjin",
            "stationName": "东津",
            "hot": 3690,
            "priority": 1
        },
        {
            "stationCode": "dadenggou",
            "match": "ddg|dadenggou",
            "stationName": "大磴沟",
            "hot": 3476,
            "priority": 1
        },
        {
            "stationCode": "dawanzi",
            "match": "dwz|dawanzi",
            "stationName": "大湾子",
            "hot": 3322,
            "priority": 1
        },
        {
            "stationCode": "daoerdeng",
            "match": "ded|daoerdeng",
            "stationName": "刀尔登",
            "hot": 2762,
            "priority": 1
        },
        {
            "stationCode": "dazhangzi",
            "match": "dzz|dazhangzi",
            "stationName": "大杖子",
            "hot": 2332,
            "priority": 1
        },
        {
            "stationCode": "dongwan",
            "match": "dwa|dongwan",
            "stationName": "东湾",
            "hot": 2015,
            "priority": 1
        },
        {
            "stationCode": "daobao",
            "match": "db|daobao",
            "stationName": "到保",
            "hot": 1972,
            "priority": 1
        },
        {
            "stationCode": "dacheng",
            "match": "dc|dacheng",
            "stationName": "大成",
            "hot": 565,
            "priority": 1
        },
        {
            "stationCode": "dulitun",
            "match": "dlt|dulitun",
            "stationName": "独立屯",
            "hot": 309,
            "priority": 1
        },
        {
            "stationCode": "dashitounan",
            "match": "dashitounan|dstn",
            "stationName": "大石头南",
            "hot": 108,
            "priority": 1
        },
        {
            "stationCode": "daqilaha",
            "match": "dqlh|daqilaha",
            "stationName": "大其拉哈",
            "hot": 90,
            "priority": 1
        },
        {
            "stationCode": "dayingzi",
            "match": "dyz|dayingzi",
            "stationName": "大营子",
            "hot": 61,
            "priority": 1
        },
        {
            "stationCode": "dushupu",
            "match": "dsp|dushupu",
            "stationName": "读书铺",
            "hot": 46,
            "priority": 1
        },
        {
            "stationCode": "dawangtan",
            "match": "dwt|dawangtan",
            "stationName": "大王滩",
            "hot": 37,
            "priority": 1
        },
        {
            "stationCode": "dahetang",
            "match": "dht|dahetang",
            "stationName": "大禾塘",
            "hot": 32,
            "priority": 1
        },
        {
            "stationCode": "dayuan",
            "match": "dy|dayuan",
            "stationName": "大元",
            "hot": 21,
            "priority": 1
        },
        {
            "stationCode": "dongxu",
            "match": "dx|dongxu",
            "stationName": "东戌",
            "hot": 17,
            "priority": 1
        },
        {
            "stationCode": "dani",
            "match": "dni|dani",
            "stationName": "大拟",
            "hot": 7,
            "priority": 1
        }
    ],
    "E": [
        {
            "stationCode": "enshi",
            "match": "es|enshi",
            "stationName": "恩施",
            "hot": 2954994,
            "priority": 10
        },
        {
            "stationCode": "ezhou",
            "match": "ezh|ezhou",
            "stationName": "鄂州",
            "hot": 1197528,
            "priority": 10
        },
        {
            "stationCode": "eerduosi",
            "match": "eeds|eerduosi",
            "stationName": "鄂尔多斯",
            "hot": 747134,
            "priority": 1
        },
        {
            "stationCode": "emeishan",
            "match": "ems|emeishan",
            "stationName": "峨眉山",
            "hot": 284455,
            "priority": 1
        },
        {
            "stationCode": "emei",
            "match": "em|emei",
            "stationName": "峨眉",
            "hot": 276586,
            "priority": 1
        },
        {
            "stationCode": "erlian",
            "match": "el|erlian",
            "stationName": "二连",
            "hot": 85421,
            "priority": 10
        },
        {
            "stationCode": "ebian",
            "match": "eb|ebian",
            "stationName": "峨边",
            "hot": 38607,
            "priority": 1
        },
        {
            "stationCode": "ezhoudong",
            "match": "ezd|ezhoudong",
            "stationName": "鄂州东",
            "hot": 36473,
            "priority": 0
        },
        {
            "stationCode": "erlongshantun",
            "match": "elst|erlongshantun",
            "stationName": "二龙山屯",
            "hot": 34681,
            "priority": 1
        },
        {
            "stationCode": "erdaowan",
            "match": "edw|erdaowan",
            "stationName": "二道湾",
            "hot": 31963,
            "priority": 1
        },
        {
            "stationCode": "ejina",
            "match": "ejn|ejina",
            "stationName": "额济纳",
            "hot": 25397,
            "priority": 1
        },
        {
            "stationCode": "erlong",
            "match": "el|erlong",
            "stationName": "二龙",
            "hot": 9534,
            "priority": 1
        },
        {
            "stationCode": "erying",
            "match": "ey|erying",
            "stationName": "二营",
            "hot": 7195,
            "priority": 10
        },
        {
            "stationCode": "erdaogoumen",
            "match": "edgm|erdaogoumen",
            "stationName": "二道沟门",
            "hot": 3748,
            "priority": 1
        },
        {
            "stationCode": "ermihe",
            "match": "emh|ermihe",
            "stationName": "二密河",
            "hot": 166,
            "priority": 1
        }
    ],
    "F": [
        {
            "stationCode": "fuzhou",
            "match": "fz|fuzhou",
            "stationName": "福州",
            "hot": 11304490,
            "priority": 26
        },
        {
            "stationCode": "fuyang",
            "match": "fy|fuyang",
            "stationName": "阜阳",
            "hot": 5478826,
            "priority": 10
        },
        {
            "stationCode": "fuzhounan",
            "match": "fzn|fuzhounan",
            "stationName": "福州南",
            "hot": 2445374,
            "priority": 1
        },
        {
            "stationCode": "fuzhou1",
            "match": "fz|fuzhou",
            "stationName": "抚州",
            "hot": 1943926,
            "priority": 1
        },
        {
            "stationCode": "futian",
            "match": "ft|futian",
            "stationName": "福田",
            "hot": 1549864,
            "priority": 1
        },
        {
            "stationCode": "fuqing",
            "match": "fq|fuqing",
            "stationName": "福清",
            "hot": 1540110,
            "priority": 1
        },
        {
            "stationCode": "fuxinnan",
            "match": "fxn|fuxinnan",
            "stationName": "阜新南",
            "hot": 989972,
            "priority": 0
        },
        {
            "stationCode": "fuding",
            "match": "fd|fuding",
            "stationName": "福鼎",
            "hot": 911388,
            "priority": 1
        },
        {
            "stationCode": "fengcheng",
            "match": "fc|fengcheng",
            "stationName": "丰城",
            "hot": 803383,
            "priority": 1
        },
        {
            "stationCode": "fuan",
            "match": "fa|fuan",
            "stationName": "福安",
            "hot": 756597,
            "priority": 1
        },
        {
            "stationCode": "fangchenggangbei",
            "match": "fcgb|fangchenggangbei",
            "stationName": "防城港北",
            "hot": 745439,
            "priority": 0
        },
        {
            "stationCode": "fuyu1",
            "match": "fy|fuyu",
            "stationName": "扶余",
            "hot": 724904,
            "priority": 1
        },
        {
            "stationCode": "fuzhoudong",
            "match": "fzd|fuzhoudong",
            "stationName": "抚州东",
            "hot": 618572,
            "priority": 1
        },
        {
            "stationCode": "fuling",
            "match": "fl|fuling",
            "stationName": "涪陵",
            "hot": 589139,
            "priority": 1
        },
        {
            "stationCode": "fengdu",
            "match": "fd|fengdu",
            "stationName": "丰都",
            "hot": 563997,
            "priority": 0
        },
        {
            "stationCode": "fulingbei",
            "match": "flb|fulingbei",
            "stationName": "涪陵北",
            "hot": 552399,
            "priority": 0
        },
        {
            "stationCode": "fengchengdong",
            "match": "fcd|fengchengdong",
            "stationName": "凤城东",
            "hot": 472320,
            "priority": 1
        },
        {
            "stationCode": "feidong",
            "match": "fd|feidong",
            "stationName": "肥东",
            "hot": 456602,
            "priority": 1
        },
        {
            "stationCode": "fushunbei",
            "match": "fsb|fushunbei",
            "stationName": "抚顺北",
            "hot": 412059,
            "priority": 1
        },
        {
            "stationCode": "fushun",
            "match": "fs|fushun",
            "stationName": "抚顺",
            "hot": 371143,
            "priority": 10
        },
        {
            "stationCode": "fuyu",
            "match": "fy|fuyu",
            "stationName": "富裕",
            "hot": 351915,
            "priority": 1
        },
        {
            "stationCode": "fenyang",
            "match": "fy|fenyang",
            "stationName": "汾阳",
            "hot": 335805,
            "priority": 1
        },
        {
            "stationCode": "fuxiandong",
            "match": "fxd|fuxiandong",
            "stationName": "富县东",
            "hot": 319250,
            "priority": 1
        },
        {
            "stationCode": "funing3",
            "match": "fn|funing",
            "stationName": "富宁",
            "hot": 315517,
            "priority": 0
        },
        {
            "stationCode": "feixian",
            "match": "fx|feixian",
            "stationName": "费县",
            "hot": 296692,
            "priority": 1
        },
        {
            "stationCode": "fengzhen",
            "match": "fz|fengzhen",
            "stationName": "丰镇",
            "hot": 271013,
            "priority": 1
        },
        {
            "stationCode": "fuyubei",
            "match": "fyb|fuyubei",
            "stationName": "扶余北",
            "hot": 269310,
            "priority": 1
        },
        {
            "stationCode": "fujin",
            "match": "fj|fujin",
            "stationName": "富锦",
            "hot": 251395,
            "priority": 1
        },
        {
            "stationCode": "fenghua",
            "match": "fh|fenghua",
            "stationName": "奉化",
            "hot": 249769,
            "priority": 1
        },
        {
            "stationCode": "fenghuangcheng",
            "match": "fhc|fenghuangcheng",
            "stationName": "凤凰城",
            "hot": 222642,
            "priority": 1
        },
        {
            "stationCode": "fuquan",
            "match": "fq|fuquan",
            "stationName": "福泉",
            "hot": 216219,
            "priority": 1
        },
        {
            "stationCode": "fulitun",
            "match": "flt|fulitun",
            "stationName": "福利屯",
            "hot": 208223,
            "priority": 1
        },
        {
            "stationCode": "fulaerji",
            "match": "flej|fulaerji",
            "stationName": "富拉尔基",
            "hot": 184813,
            "priority": 1
        },
        {
            "stationCode": "fuyuan",
            "match": "fy|fuyuan",
            "stationName": "富源",
            "hot": 171156,
            "priority": 1
        },
        {
            "stationCode": "fenyi",
            "match": "fy|fenyi",
            "stationName": "分宜",
            "hot": 166021,
            "priority": 1
        },
        {
            "stationCode": "funing1",
            "match": "fn|funing",
            "stationName": "阜宁",
            "hot": 158065,
            "priority": 1
        },
        {
            "stationCode": "fanchangxi",
            "match": "fcx|fanchangxi",
            "stationName": "繁昌西",
            "hot": 145544,
            "priority": 1
        },
        {
            "stationCode": "fanshi",
            "match": "fs|fanshi",
            "stationName": "繁峙",
            "hot": 119217,
            "priority": 1
        },
        {
            "stationCode": "fengshun",
            "match": "fs|fengshun",
            "stationName": "丰顺",
            "hot": 114001,
            "priority": 1
        },
        {
            "stationCode": "funan",
            "match": "fn|funan",
            "stationName": "阜南",
            "hot": 112181,
            "priority": 1
        },
        {
            "stationCode": "fusui",
            "match": "fs|fusui",
            "stationName": "扶绥",
            "hot": 106122,
            "priority": 1
        },
        {
            "stationCode": "fuyuanbei",
            "match": "fyb|fuyuanbei",
            "stationName": "富源北",
            "hot": 105249,
            "priority": 0
        },
        {
            "stationCode": "fushanzhen",
            "match": "fsz|fushanzhen",
            "stationName": "福山镇",
            "hot": 97125,
            "priority": 1
        },
        {
            "stationCode": "fuxian",
            "match": "fx|fuxian",
            "stationName": "富县",
            "hot": 91859,
            "priority": 1
        },
        {
            "stationCode": "fengchengnan",
            "match": "fcn|fengchengnan",
            "stationName": "丰城南",
            "hot": 88139,
            "priority": 1
        },
        {
            "stationCode": "fuyuan1",
            "match": "fy|fuyuan",
            "stationName": "抚远",
            "hot": 87431,
            "priority": 1
        },
        {
            "stationCode": "fenghuangjichang",
            "match": "fhjc|fenghuangjichang",
            "stationName": "凤凰机场",
            "hot": 65026,
            "priority": 1
        },
        {
            "stationCode": "fuchuan",
            "match": "fc|fuchuan",
            "stationName": "富川",
            "hot": 64149,
            "priority": 1
        },
        {
            "stationCode": "fenglingdu",
            "match": "fld|fenglingdu",
            "stationName": "风陵渡",
            "hot": 61234,
            "priority": 1
        },
        {
            "stationCode": "fengxian",
            "match": "fxi|fengxian",
            "stationName": "凤县",
            "hot": 60578,
            "priority": 1
        },
        {
            "stationCode": "fenglezhen",
            "match": "flz|fenglezhen",
            "stationName": "丰乐镇",
            "hot": 43253,
            "priority": 1
        },
        {
            "stationCode": "fengtun",
            "match": "ftu|fengtun",
            "stationName": "冯屯",
            "hot": 40141,
            "priority": 1
        },
        {
            "stationCode": "fuhai1",
            "match": "fh|fuhai",
            "stationName": "福海",
            "hot": 39902,
            "priority": 1
        },
        {
            "stationCode": "faer",
            "match": "fe|faer",
            "stationName": "发耳",
            "hot": 33448,
            "priority": 1
        },
        {
            "stationCode": "fusheng",
            "match": "fs|fusheng",
            "stationName": "复盛",
            "hot": 28233,
            "priority": 0
        },
        {
            "stationCode": "funing2",
            "match": "fn|funing",
            "stationName": "抚宁",
            "hot": 27896,
            "priority": 1
        },
        {
            "stationCode": "funing",
            "match": "fn|funing",
            "stationName": "抚宁",
            "hot": 26435,
            "priority": 1
        },
        {
            "stationCode": "fuzhoubei",
            "match": "fzb|fuzhoubei",
            "stationName": "抚州北",
            "hot": 23192,
            "priority": 1
        },
        {
            "stationCode": "fengzhou",
            "match": "fzh|fengzhou",
            "stationName": "凤州",
            "hot": 23091,
            "priority": 1
        },
        {
            "stationCode": "fuhai",
            "match": "fh|fuhai",
            "stationName": "富海",
            "hot": 21418,
            "priority": 1
        },
        {
            "stationCode": "furongnan",
            "match": "frn|furongnan",
            "stationName": "芙蓉南",
            "hot": 21320,
            "priority": 0
        },
        {
            "stationCode": "fanjiatun",
            "match": "fjt|fanjiatun",
            "stationName": "范家屯",
            "hot": 16673,
            "priority": 1
        },
        {
            "stationCode": "fusong",
            "match": "fs|fusong",
            "stationName": "抚松",
            "hot": 14861,
            "priority": 1
        },
        {
            "stationCode": "fenhe",
            "match": "fenhe|fh",
            "stationName": "汾河",
            "hot": 10532,
            "priority": 1
        },
        {
            "stationCode": "fengshuicun",
            "match": "fsc|fengshuicun",
            "stationName": "丰水村",
            "hot": 8167,
            "priority": 1
        },
        {
            "stationCode": "fengyang",
            "match": "fya|fengyang",
            "stationName": "凤阳",
            "hot": 4712,
            "priority": 1
        },
        {
            "stationCode": "fushankou",
            "match": "fsk|fushankou",
            "stationName": "福山口",
            "hot": 3141,
            "priority": 1
        },
        {
            "stationCode": "fanzhen",
            "match": "fzh|fanzhen",
            "stationName": "范镇",
            "hot": 2707,
            "priority": 1
        },
        {
            "stationCode": "futuyu",
            "match": "fty|futuyu",
            "stationName": "浮图峪",
            "hot": 1461,
            "priority": 1
        },
        {
            "stationCode": "fuliqu",
            "match": "flq|fuliqu",
            "stationName": "福利区",
            "hot": 1344,
            "priority": 1
        },
        {
            "stationCode": "faqi",
            "match": "fq|faqi",
            "stationName": "法启",
            "hot": 286,
            "priority": 0
        }
    ],
    "G": [
        {
            "stationCode": "guangzhou",
            "match": "gz|guangzhou",
            "stationName": "广州",
            "hot": 35372673,
            "priority": 48
        },
        {
            "stationCode": "guangzhounan",
            "match": "gzn|guangzhounan",
            "stationName": "广州南",
            "hot": 26033989,
            "priority": 1
        },
        {
            "stationCode": "guiyang",
            "match": "gy|guiyang",
            "stationName": "贵阳",
            "hot": 8668613,
            "priority": 26
        },
        {
            "stationCode": "ganzhou",
            "match": "gz|ganzhou",
            "stationName": "赣州",
            "hot": 5791552,
            "priority": 10
        },
        {
            "stationCode": "guilin",
            "match": "gli|guilin",
            "stationName": "桂林",
            "hot": 5086607,
            "priority": 10
        },
        {
            "stationCode": "guigang",
            "match": "gg|guigang",
            "stationName": "贵港",
            "hot": 4730972,
            "priority": 1
        },
        {
            "stationCode": "guiyangbei",
            "match": "gyb|guiyangbei",
            "stationName": "贵阳北",
            "hot": 4377697,
            "priority": 1
        },
        {
            "stationCode": "guangzhoudong",
            "match": "gzd|guangzhoudong",
            "stationName": "广州东",
            "hot": 3999381,
            "priority": 1
        },
        {
            "stationCode": "guilinbei",
            "match": "glb|guilinbei",
            "stationName": "桂林北",
            "hot": 3605573,
            "priority": 1
        },
        {
            "stationCode": "guangyuan",
            "match": "gy|guangyuan",
            "stationName": "广元",
            "hot": 2300185,
            "priority": 10
        },
        {
            "stationCode": "guangzhoubei",
            "match": "gzb|guangzhoubei",
            "stationName": "广州北",
            "hot": 2271423,
            "priority": 1
        },
        {
            "stationCode": "guiping",
            "match": "gp|guiping",
            "stationName": "桂平",
            "hot": 1498417,
            "priority": 0
        },
        {
            "stationCode": "guangan",
            "match": "gan|guangan",
            "stationName": "广安",
            "hot": 1373703,
            "priority": 1
        },
        {
            "stationCode": "gaomi",
            "match": "gm|gaomi",
            "stationName": "高密",
            "hot": 1358263,
            "priority": 1
        },
        {
            "stationCode": "gongzhuling",
            "match": "gzl|gongzhuling",
            "stationName": "公主岭",
            "hot": 1061827,
            "priority": 1
        },
        {
            "stationCode": "gongcheng",
            "match": "gc|gongcheng",
            "stationName": "恭城",
            "hot": 965320,
            "priority": 1
        },
        {
            "stationCode": "gongyi",
            "match": "gy|gongyi",
            "stationName": "巩义",
            "hot": 768967,
            "priority": 1
        },
        {
            "stationCode": "geermu",
            "match": "gem|geermu",
            "stationName": "格尔木",
            "hot": 743362,
            "priority": 10
        },
        {
            "stationCode": "gaoan",
            "match": "ga|gaoan",
            "stationName": "高安",
            "hot": 728572,
            "priority": 1
        },
        {
            "stationCode": "gaobeidian",
            "match": "gbd|gaobeidian",
            "stationName": "高碑店",
            "hot": 674490,
            "priority": 1
        },
        {
            "stationCode": "guangmingcheng",
            "match": "gmc|guangmingcheng",
            "stationName": "光明城",
            "hot": 623093,
            "priority": 1
        },
        {
            "stationCode": "guilinxi",
            "match": "glx|guilinxi",
            "stationName": "桂林西",
            "hot": 602262,
            "priority": 1
        },
        {
            "stationCode": "goubangzi",
            "match": "gbz|goubangzi",
            "stationName": "沟帮子",
            "hot": 596732,
            "priority": 1
        },
        {
            "stationCode": "guangning",
            "match": "gn|guangning",
            "stationName": "广宁",
            "hot": 569345,
            "priority": 1
        },
        {
            "stationCode": "gongqingcheng",
            "match": "gqc|gongqingcheng",
            "stationName": "共青城",
            "hot": 550198,
            "priority": 1
        },
        {
            "stationCode": "gangu",
            "match": "gg|gangu",
            "stationName": "甘谷",
            "hot": 535806,
            "priority": 1
        },
        {
            "stationCode": "guzhen1",
            "match": "gz|guzhen",
            "stationName": "古镇",
            "hot": 522387,
            "priority": 1
        },
        {
            "stationCode": "guyuan1",
            "match": "gy|guyuan",
            "stationName": "固原",
            "hot": 492654,
            "priority": 10
        },
        {
            "stationCode": "gutianbei",
            "match": "gutianbei|gtb",
            "stationName": "古田北",
            "hot": 467388,
            "priority": 1
        },
        {
            "stationCode": "gucheng1",
            "match": "gc|gucheng",
            "stationName": "谷城",
            "hot": 446714,
            "priority": 1
        },
        {
            "stationCode": "gaobeidiandong",
            "match": "gbdd|gaobeidiandong",
            "stationName": "高碑店东",
            "hot": 410947,
            "priority": 1
        },
        {
            "stationCode": "gaizhou",
            "match": "gz|gaizhou",
            "stationName": "盖州",
            "hot": 409225,
            "priority": 1
        },
        {
            "stationCode": "guangshui",
            "match": "gs|guangshui",
            "stationName": "广水",
            "hot": 402142,
            "priority": 1
        },
        {
            "stationCode": "guanzhishan",
            "match": "gzs|guanzhishan",
            "stationName": "冠豸山",
            "hot": 380386,
            "priority": 1
        },
        {
            "stationCode": "guixi",
            "match": "gx|guixi",
            "stationName": "贵溪",
            "hot": 327108,
            "priority": 1
        },
        {
            "stationCode": "guangannan",
            "match": "gan|guangannan",
            "stationName": "广安南",
            "hot": 320997,
            "priority": 1
        },
        {
            "stationCode": "guangshan",
            "match": "gs|guangshan",
            "stationName": "光山",
            "hot": 295520,
            "priority": 1
        },
        {
            "stationCode": "guangnanxian",
            "match": "gnx|guangnanxian",
            "stationName": "广南县",
            "hot": 294799,
            "priority": 0
        },
        {
            "stationCode": "guzhen",
            "match": "gz|guzhen",
            "stationName": "固镇",
            "hot": 292860,
            "priority": 1
        },
        {
            "stationCode": "guanlin",
            "match": "gli|guanlin",
            "stationName": "关林",
            "hot": 291024,
            "priority": 1
        },
        {
            "stationCode": "gaoping",
            "match": "gp|gaoping",
            "stationName": "高平",
            "hot": 272746,
            "priority": 1
        },
        {
            "stationCode": "ganqika",
            "match": "gqk|ganqika",
            "stationName": "甘旗卡",
            "hot": 270932,
            "priority": 1
        },
        {
            "stationCode": "guiding",
            "match": "gd|guiding",
            "stationName": "贵定",
            "hot": 268891,
            "priority": 1
        },
        {
            "stationCode": "gongzhulingnan",
            "match": "gzln|gongzhulingnan",
            "stationName": "公主岭南",
            "hot": 261640,
            "priority": 1
        },
        {
            "stationCode": "gaizhouxi",
            "match": "gzx|gaizhouxi",
            "stationName": "盖州西",
            "hot": 260958,
            "priority": 1
        },
        {
            "stationCode": "gediannan",
            "match": "gdn|gediannan",
            "stationName": "葛店南",
            "hot": 234128,
            "priority": 0
        },
        {
            "stationCode": "gushi",
            "match": "gs|gushi",
            "stationName": "固始",
            "hot": 211545,
            "priority": 1
        },
        {
            "stationCode": "guangde",
            "match": "gde|guangde",
            "stationName": "广德",
            "hot": 207669,
            "priority": 10
        },
        {
            "stationCode": "gaoyixi",
            "match": "gyx|gaoyixi",
            "stationName": "高邑西",
            "hot": 204493,
            "priority": 1
        },
        {
            "stationCode": "gongyinan",
            "match": "gyn|gongyinan",
            "stationName": "巩义南",
            "hot": 204456,
            "priority": 1
        },
        {
            "stationCode": "guanling",
            "match": "gl|guanling",
            "stationName": "关岭",
            "hot": 203940,
            "priority": 0
        },
        {
            "stationCode": "guangtongbei",
            "match": "gtb|guangtongbei",
            "stationName": "广通北",
            "hot": 198971,
            "priority": 0
        },
        {
            "stationCode": "guanghanbei",
            "match": "ghb|guanghanbei",
            "stationName": "广汉北",
            "hot": 188545,
            "priority": 1
        },
        {
            "stationCode": "ganluo",
            "match": "gl|ganluo",
            "stationName": "甘洛",
            "hot": 187611,
            "priority": 1
        },
        {
            "stationCode": "gutian",
            "match": "gt|gutian",
            "stationName": "古田",
            "hot": 180723,
            "priority": 1
        },
        {
            "stationCode": "gutianhuizhi",
            "match": "gthz|gutianhuizhi",
            "stationName": "古田会址",
            "hot": 173933,
            "priority": 1
        },
        {
            "stationCode": "guidingbei",
            "match": "gdb|guidingbei",
            "stationName": "贵定北",
            "hot": 167777,
            "priority": 1
        },
        {
            "stationCode": "guidingnan",
            "match": "gdn|guidingnan",
            "stationName": "贵定南",
            "hot": 153547,
            "priority": 1
        },
        {
            "stationCode": "gongyingzi",
            "match": "gyz|gongyingzi",
            "stationName": "公营子",
            "hot": 138974,
            "priority": 1
        },
        {
            "stationCode": "gaotai",
            "match": "gt|gaotai",
            "stationName": "高台",
            "hot": 126395,
            "priority": 1
        },
        {
            "stationCode": "guozhen",
            "match": "guozhen|gz",
            "stationName": "虢镇",
            "hot": 126025,
            "priority": 1
        },
        {
            "stationCode": "gaocheng",
            "match": "gc|gaocheng",
            "stationName": "藁城",
            "hot": 115032,
            "priority": 1
        },
        {
            "stationCode": "ganshui",
            "match": "gsh|ganshui",
            "stationName": "赶水",
            "hot": 108689,
            "priority": 1
        },
        {
            "stationCode": "gaoyi",
            "match": "gy|gaoyi",
            "stationName": "高邑",
            "hot": 100003,
            "priority": 1
        },
        {
            "stationCode": "ganquanbei",
            "match": "gqb|ganquanbei",
            "stationName": "甘泉北",
            "hot": 93676,
            "priority": 1
        },
        {
            "stationCode": "guangze",
            "match": "gz|guangze",
            "stationName": "光泽",
            "hot": 90939,
            "priority": 1
        },
        {
            "stationCode": "guidingxian",
            "match": "gdx|guidingxian",
            "stationName": "贵定县",
            "hot": 74600,
            "priority": 1
        },
        {
            "stationCode": "gaozhou",
            "match": "gz|gaozhou",
            "stationName": "高州",
            "hot": 64877,
            "priority": 1
        },
        {
            "stationCode": "guazhou",
            "match": "gz|guazhou",
            "stationName": "瓜州",
            "hot": 58467,
            "priority": 1
        },
        {
            "stationCode": "gaotainan",
            "match": "gtn|gaotainan",
            "stationName": "高台南",
            "hot": 56542,
            "priority": 1
        },
        {
            "stationCode": "guanghan",
            "match": "gh|guanghan",
            "stationName": "广汉",
            "hot": 50149,
            "priority": 1
        },
        {
            "stationCode": "gulang",
            "match": "gl|gulang",
            "stationName": "古浪",
            "hot": 48489,
            "priority": 1
        },
        {
            "stationCode": "guangningsi",
            "match": "gns|guangningsi",
            "stationName": "广宁寺",
            "hot": 46678,
            "priority": 1
        },
        {
            "stationCode": "gaolan",
            "match": "gl|gaolan",
            "stationName": "皋兰",
            "hot": 35904,
            "priority": 1
        },
        {
            "stationCode": "guchengzhen",
            "match": "gcz|guchengzhen",
            "stationName": "古城镇",
            "hot": 35144,
            "priority": 1
        },
        {
            "stationCode": "gujiao",
            "match": "gj|gujiao",
            "stationName": "古交",
            "hot": 34641,
            "priority": 1
        },
        {
            "stationCode": "gaocun",
            "match": "gc|gaocun",
            "stationName": "高村",
            "hot": 32186,
            "priority": 1
        },
        {
            "stationCode": "guojiadian",
            "match": "gjd|guojiadian",
            "stationName": "郭家店",
            "hot": 31745,
            "priority": 1
        },
        {
            "stationCode": "guanting",
            "match": "gt|guanting",
            "stationName": "官厅",
            "hot": 31333,
            "priority": 1
        },
        {
            "stationCode": "ganhe",
            "match": "gh|ganhe",
            "stationName": "甘河",
            "hot": 31076,
            "priority": 1
        },
        {
            "stationCode": "gongmiaozi",
            "match": "gmz|gongmiaozi",
            "stationName": "公庙子",
            "hot": 29960,
            "priority": 1
        },
        {
            "stationCode": "genhe",
            "match": "ghe|genhe",
            "stationName": "根河",
            "hot": 28301,
            "priority": 1
        },
        {
            "stationCode": "guangyuannan",
            "match": "gyn|guangyuannan",
            "stationName": "广元南",
            "hot": 27199,
            "priority": 1
        },
        {
            "stationCode": "gegenmiao",
            "match": "ggm|gegenmiao",
            "stationName": "葛根庙",
            "hot": 23205,
            "priority": 1
        },
        {
            "stationCode": "guantingxi",
            "match": "gtx|guantingxi",
            "stationName": "官厅西",
            "hot": 18698,
            "priority": 1
        },
        {
            "stationCode": "guangzhouxi",
            "match": "gzx|guangzhouxi",
            "stationName": "广州西",
            "hot": 17191,
            "priority": 0
        },
        {
            "stationCode": "gantang",
            "match": "gt|gantang",
            "stationName": "干塘",
            "hot": 15334,
            "priority": 1
        },
        {
            "stationCode": "gaoshanzi",
            "match": "gsz|gaoshanzi",
            "stationName": "高山子",
            "hot": 14065,
            "priority": 1
        },
        {
            "stationCode": "gongnonghu",
            "match": "gnh|gongnonghu",
            "stationName": "工农湖",
            "hot": 13319,
            "priority": 1
        },
        {
            "stationCode": "gudong",
            "match": "gd|gudong",
            "stationName": "古东",
            "hot": 11535,
            "priority": 1
        },
        {
            "stationCode": "guanshui",
            "match": "gs|guanshui",
            "stationName": "灌水",
            "hot": 9923,
            "priority": 1
        },
        {
            "stationCode": "gulian",
            "match": "gl|gulian",
            "stationName": "古莲",
            "hot": 9014,
            "priority": 1
        },
        {
            "stationCode": "guanzijing",
            "match": "gzj|guanzijing",
            "stationName": "官字井",
            "hot": 6785,
            "priority": 1
        },
        {
            "stationCode": "guiliuhe",
            "match": "glh|guiliuhe",
            "stationName": "归流河",
            "hot": 6689,
            "priority": 1
        },
        {
            "stationCode": "guangnanwei",
            "match": "gnw|guangnanwei",
            "stationName": "广南卫",
            "hot": 6231,
            "priority": 1
        },
        {
            "stationCode": "gashidianzi",
            "match": "gsdz|gashidianzi",
            "stationName": "嘎什甸子",
            "hot": 6026,
            "priority": 1
        },
        {
            "stationCode": "ganquan",
            "match": "gq|ganquan",
            "stationName": "甘泉",
            "hot": 5726,
            "priority": 1
        },
        {
            "stationCode": "guan",
            "match": "gan|guan",
            "stationName": "固安",
            "hot": 5413,
            "priority": 1
        },
        {
            "stationCode": "gushankou",
            "match": "gsk|gushankou",
            "stationName": "孤山口",
            "hot": 5112,
            "priority": 1
        },
        {
            "stationCode": "gancaodian",
            "match": "gcd|gancaodian",
            "stationName": "甘草店",
            "hot": 5105,
            "priority": 1
        },
        {
            "stationCode": "guyuan",
            "match": "gy|guyuan",
            "stationName": "菇园",
            "hot": 4905,
            "priority": 1
        },
        {
            "stationCode": "gongpengzi",
            "match": "gpz|gongpengzi",
            "stationName": "弓棚子",
            "hot": 4490,
            "priority": 1
        },
        {
            "stationCode": "geju",
            "match": "gj|geju",
            "stationName": "革居",
            "hot": 3837,
            "priority": 1
        },
        {
            "stationCode": "gaoqiaozhen",
            "match": "gqz|gaoqiaozhen",
            "stationName": "高桥镇",
            "hot": 2927,
            "priority": 1
        },
        {
            "stationCode": "guangao",
            "match": "gg|guangao",
            "stationName": "官高",
            "hot": 2517,
            "priority": 1
        },
        {
            "stationCode": "gaotan",
            "match": "gt|gaotan",
            "stationName": "高滩",
            "hot": 2254,
            "priority": 1
        },
        {
            "stationCode": "guian",
            "match": "ga|guian",
            "stationName": "贵安",
            "hot": 1546,
            "priority": 0
        },
        {
            "stationCode": "guosong",
            "match": "gs|guosong",
            "stationName": "果松",
            "hot": 1466,
            "priority": 1
        },
        {
            "stationCode": "gaogezhuang",
            "match": "ggz|gaogezhuang",
            "stationName": "高各庄",
            "hot": 1407,
            "priority": 1
        },
        {
            "stationCode": "gujiazi",
            "match": "gjz|gujiazi",
            "stationName": "孤家子",
            "hot": 471,
            "priority": 1
        },
        {
            "stationCode": "guangningsinan",
            "match": "gns|guangningsinan",
            "stationName": "广宁寺南",
            "hot": 454,
            "priority": 1
        },
        {
            "stationCode": "gangou",
            "match": "ggo|gangou",
            "stationName": "干沟",
            "hot": 175,
            "priority": 1
        },
        {
            "stationCode": "guoleizhuang",
            "match": "glz|guoleizhuang",
            "stationName": "郭磊庄",
            "hot": 27,
            "priority": 1
        },
        {
            "stationCode": "gaoloufang",
            "match": "glf|gaoloufang",
            "stationName": "高楼房",
            "hot": 26,
            "priority": 1
        },
        {
            "stationCode": "gezhenpu",
            "match": "gzp|gezhenpu",
            "stationName": "革镇堡",
            "hot": 25,
            "priority": 1
        }
    ],
    "H": [
        {
            "stationCode": "hangzhoudong",
            "match": "hzd|hangzhoudong",
            "stationName": "杭州东",
            "hot": 15085106,
            "priority": 1
        },
        {
            "stationCode": "haerbin",
            "match": "heb|haerbin",
            "stationName": "哈尔滨",
            "hot": 14306287,
            "priority": 26
        },
        {
            "stationCode": "hangzhou",
            "match": "hz|hangzhou",
            "stationName": "杭州",
            "hot": 13698736,
            "priority": 49
        },
        {
            "stationCode": "hefei",
            "match": "hf|hefei",
            "stationName": "合肥",
            "hot": 13494472,
            "priority": 40
        },
        {
            "stationCode": "hankou",
            "match": "hk|hankou",
            "stationName": "汉口",
            "hot": 10661281,
            "priority": 38
        },
        {
            "stationCode": "hefeinan",
            "match": "hfn|hefeinan",
            "stationName": "合肥南",
            "hot": 6238112,
            "priority": 1
        },
        {
            "stationCode": "hengyang",
            "match": "hy|hengyang",
            "stationName": "衡阳",
            "hot": 5739081,
            "priority": 10
        },
        {
            "stationCode": "handan",
            "match": "hd|handan",
            "stationName": "邯郸",
            "hot": 4809247,
            "priority": 10
        },
        {
            "stationCode": "huhehaote",
            "match": "hhht|huhehaote",
            "stationName": "呼和浩特",
            "hot": 4642026,
            "priority": 26
        },
        {
            "stationCode": "haikou",
            "match": "hk|haikou",
            "stationName": "海口",
            "hot": 4638732,
            "priority": 26
        },
        {
            "stationCode": "humen",
            "match": "hm|humen",
            "stationName": "虎门",
            "hot": 4465828,
            "priority": 1
        },
        {
            "stationCode": "heze",
            "match": "hz|heze",
            "stationName": "菏泽",
            "hot": 4426094,
            "priority": 1
        },
        {
            "stationCode": "huizhou",
            "match": "hz|huizhou",
            "stationName": "惠州",
            "hot": 4355511,
            "priority": 10
        },
        {
            "stationCode": "huaihua",
            "match": "hh|huaihua",
            "stationName": "怀化",
            "hot": 3794511,
            "priority": 10
        },
        {
            "stationCode": "hezhou",
            "match": "hz|hezhou",
            "stationName": "贺州",
            "hot": 3667650,
            "priority": 1
        },
        {
            "stationCode": "hengshui",
            "match": "hs|hengshui",
            "stationName": "衡水",
            "hot": 3267433,
            "priority": 1
        },
        {
            "stationCode": "hengyangdong",
            "match": "hyd|hengyangdong",
            "stationName": "衡阳东",
            "hot": 3220762,
            "priority": 1
        },
        {
            "stationCode": "haerbinxi",
            "match": "hebx|haerbinxi",
            "stationName": "哈尔滨西",
            "hot": 2915191,
            "priority": 1
        },
        {
            "stationCode": "huizhounan",
            "match": "hzn|huizhounan",
            "stationName": "惠州南",
            "hot": 2410740,
            "priority": 0
        },
        {
            "stationCode": "huzhou",
            "match": "hz|huzhou",
            "stationName": "湖州",
            "hot": 2391554,
            "priority": 1
        },
        {
            "stationCode": "huainan",
            "match": "hn|huainan",
            "stationName": "淮南",
            "hot": 1987736,
            "priority": 1
        },
        {
            "stationCode": "huludao",
            "match": "hld|huludao",
            "stationName": "葫芦岛",
            "hot": 1933670,
            "priority": 1
        },
        {
            "stationCode": "heyuan",
            "match": "hy|heyuan",
            "stationName": "河源",
            "hot": 1768398,
            "priority": 1
        },
        {
            "stationCode": "huaihuanan",
            "match": "hhn|huaihuanan",
            "stationName": "怀化南",
            "hot": 1731641,
            "priority": 1
        },
        {
            "stationCode": "huhehaotedong",
            "match": "hhhtdd|huhehaotedong",
            "stationName": "呼和浩特东",
            "hot": 1721196,
            "priority": 1
        },
        {
            "stationCode": "handandong",
            "match": "hdd|handandong",
            "stationName": "邯郸东",
            "hot": 1630113,
            "priority": 1
        },
        {
            "stationCode": "huangshi",
            "match": "hs|huangshi",
            "stationName": "黄石",
            "hot": 1584529,
            "priority": 1
        },
        {
            "stationCode": "hebi",
            "match": "hb|hebi",
            "stationName": "鹤壁",
            "hot": 1434094,
            "priority": 1
        },
        {
            "stationCode": "huaibei",
            "match": "hb|huaibei",
            "stationName": "淮北",
            "hot": 1343775,
            "priority": 1
        },
        {
            "stationCode": "haicheng",
            "match": "hc|haicheng",
            "stationName": "海城",
            "hot": 1288073,
            "priority": 1
        },
        {
            "stationCode": "huangchuan",
            "match": "hc|huangchuan",
            "stationName": "潢川",
            "hot": 1280317,
            "priority": 1
        },
        {
            "stationCode": "haerbindong",
            "match": "hebd|haerbindong",
            "stationName": "哈尔滨东",
            "hot": 1270151,
            "priority": 1
        },
        {
            "stationCode": "huaian",
            "match": "ha|huaian",
            "stationName": "淮安",
            "hot": 1228870,
            "priority": 10
        },
        {
            "stationCode": "huludaobei",
            "match": "hldb|huludaobei",
            "stationName": "葫芦岛北",
            "hot": 1176027,
            "priority": 1
        },
        {
            "stationCode": "huangshan",
            "match": "hs|huangshan",
            "stationName": "黄山",
            "hot": 1049419,
            "priority": 10
        },
        {
            "stationCode": "haikoudong",
            "match": "hkd|haikoudong",
            "stationName": "海口东",
            "hot": 1026141,
            "priority": 1
        },
        {
            "stationCode": "huaiji",
            "match": "hj|huaiji",
            "stationName": "怀集",
            "hot": 1019068,
            "priority": 1
        },
        {
            "stationCode": "huainandong",
            "match": "hnd|huainandong",
            "stationName": "淮南东",
            "hot": 1014064,
            "priority": 1
        },
        {
            "stationCode": "hami",
            "match": "hm|hami",
            "stationName": "哈密",
            "hot": 989989,
            "priority": 10
        },
        {
            "stationCode": "hanzhong",
            "match": "hz|hanzhong",
            "stationName": "汉中",
            "hot": 949707,
            "priority": 10
        },
        {
            "stationCode": "hechuan",
            "match": "hc|hechuan",
            "stationName": "合川",
            "hot": 923262,
            "priority": 1
        },
        {
            "stationCode": "haerbinbei",
            "match": "haerbinbei|hebb",
            "stationName": "哈尔滨北",
            "hot": 891235,
            "priority": 1
        },
        {
            "stationCode": "haining",
            "match": "hn|haining",
            "stationName": "海宁",
            "hot": 889727,
            "priority": 10
        },
        {
            "stationCode": "haianxian",
            "match": "hax|haianxian",
            "stationName": "海安县",
            "hot": 876736,
            "priority": 1
        },
        {
            "stationCode": "huidong",
            "match": "hd|huidong",
            "stationName": "惠东",
            "hot": 845117,
            "priority": 0
        },
        {
            "stationCode": "hebidong",
            "match": "hbd|hebidong",
            "stationName": "鹤壁东",
            "hot": 826345,
            "priority": 1
        },
        {
            "stationCode": "houma",
            "match": "hm|houma",
            "stationName": "侯马",
            "hot": 820336,
            "priority": 1
        },
        {
            "stationCode": "hainingxi",
            "match": "hnx|hainingxi",
            "stationName": "海宁西",
            "hot": 778003,
            "priority": 1
        },
        {
            "stationCode": "huashan",
            "match": "hs|huashan",
            "stationName": "华山",
            "hot": 762830,
            "priority": 1
        },
        {
            "stationCode": "hengshanxi",
            "match": "hsx|hengshanxi",
            "stationName": "衡山西",
            "hot": 750552,
            "priority": 1
        },
        {
            "stationCode": "hailaer",
            "match": "hle|hailaer",
            "stationName": "海拉尔",
            "hot": 708039,
            "priority": 1
        },
        {
            "stationCode": "hanjiang",
            "match": "hj|hanjiang",
            "stationName": "涵江",
            "hot": 691094,
            "priority": 1
        },
        {
            "stationCode": "huian",
            "match": "ha|huian",
            "stationName": "惠安",
            "hot": 657675,
            "priority": 1
        },
        {
            "stationCode": "houmaxi",
            "match": "hmx|houmaxi",
            "stationName": "侯马西",
            "hot": 655480,
            "priority": 0
        },
        {
            "stationCode": "huangshanbei",
            "match": "huangshanbei|hsb",
            "stationName": "黄山北",
            "hot": 613609,
            "priority": 1
        },
        {
            "stationCode": "haichengxi",
            "match": "hcx|haichengxi",
            "stationName": "海城西",
            "hot": 560470,
            "priority": 1
        },
        {
            "stationCode": "hengshan",
            "match": "hs|hengshan",
            "stationName": "衡山",
            "hot": 545509,
            "priority": 1
        },
        {
            "stationCode": "huozhou",
            "match": "hz|huozhou",
            "stationName": "霍州",
            "hot": 531073,
            "priority": 1
        },
        {
            "stationCode": "hepu",
            "match": "hp|hepu",
            "stationName": "合浦",
            "hot": 530725,
            "priority": 1
        },
        {
            "stationCode": "hanchuan",
            "match": "hc|hanchuan",
            "stationName": "汉川",
            "hot": 481056,
            "priority": 1
        },
        {
            "stationCode": "hongdong",
            "match": "hd|hongdong",
            "stationName": "洪洞",
            "hot": 476383,
            "priority": 1
        },
        {
            "stationCode": "huanggang",
            "match": "hg|huanggang",
            "stationName": "黄冈",
            "hot": 471309,
            "priority": 0
        },
        {
            "stationCode": "houmen",
            "match": "hm|houmen",
            "stationName": "鲘门",
            "hot": 440445,
            "priority": 0
        },
        {
            "stationCode": "huashanbei",
            "match": "hsb|huashanbei",
            "stationName": "华山北",
            "hot": 433499,
            "priority": 1
        },
        {
            "stationCode": "hailun",
            "match": "hl|hailun",
            "stationName": "海伦",
            "hot": 420689,
            "priority": 1
        },
        {
            "stationCode": "hongdongxi",
            "match": "hdx|hongdongxi",
            "stationName": "洪洞西",
            "hot": 415575,
            "priority": 0
        },
        {
            "stationCode": "huazhou",
            "match": "hz|huazhou",
            "stationName": "化州",
            "hot": 383371,
            "priority": 1
        },
        {
            "stationCode": "hegang",
            "match": "hg|hegang",
            "stationName": "鹤岗",
            "hot": 373337,
            "priority": 1
        },
        {
            "stationCode": "honganxi",
            "match": "hax|honganxi",
            "stationName": "红安西",
            "hot": 371695,
            "priority": 1
        },
        {
            "stationCode": "huozhoudong",
            "match": "hzd|huozhoudong",
            "stationName": "霍州东",
            "hot": 365100,
            "priority": 0
        },
        {
            "stationCode": "haikoudong1",
            "match": "hkd|haikoudong",
            "stationName": "海  口东",
            "hot": 363401,
            "priority": 1
        },
        {
            "stationCode": "hongguo",
            "match": "hg|hongguo",
            "stationName": "红果",
            "hot": 362730,
            "priority": 1
        },
        {
            "stationCode": "heihe",
            "match": "hh|heihe",
            "stationName": "黑河",
            "hot": 356391,
            "priority": 10
        },
        {
            "stationCode": "hulan",
            "match": "hl|hulan",
            "stationName": "呼兰",
            "hot": 339686,
            "priority": 1
        },
        {
            "stationCode": "huangcun",
            "match": "hc|huangcun",
            "stationName": "黄村",
            "hot": 324167,
            "priority": 1
        },
        {
            "stationCode": "huangzhou",
            "match": "hz|huangzhou",
            "stationName": "黄州",
            "hot": 323004,
            "priority": 1
        },
        {
            "stationCode": "huangshibei",
            "match": "hsb|huangshibei",
            "stationName": "黄石北",
            "hot": 313361,
            "priority": 0
        },
        {
            "stationCode": "hancheng",
            "match": "hc|hancheng",
            "stationName": "韩城",
            "hot": 292150,
            "priority": 1
        },
        {
            "stationCode": "hetian",
            "match": "ht|hetian",
            "stationName": "和田",
            "hot": 288405,
            "priority": 1
        },
        {
            "stationCode": "hunchun",
            "match": "hunchun|hch",
            "stationName": "珲春",
            "hot": 282340,
            "priority": 1
        },
        {
            "stationCode": "huairen",
            "match": "hr|huairen",
            "stationName": "怀仁",
            "hot": 274320,
            "priority": 1
        },
        {
            "stationCode": "haiyang",
            "match": "hy|haiyang",
            "stationName": "海阳",
            "hot": 257695,
            "priority": 1
        },
        {
            "stationCode": "huayuan",
            "match": "hy|huayuan",
            "stationName": "花园",
            "hot": 256871,
            "priority": 1
        },
        {
            "stationCode": "huaibin",
            "match": "hb|huaibin",
            "stationName": "淮滨",
            "hot": 251417,
            "priority": 1
        },
        {
            "stationCode": "hechun",
            "match": "hc|hechun",
            "stationName": "河唇",
            "hot": 243350,
            "priority": 1
        },
        {
            "stationCode": "haishiwan",
            "match": "hsw|haishiwan",
            "stationName": "海石湾",
            "hot": 243128,
            "priority": 1
        },
        {
            "stationCode": "hailin",
            "match": "hl|hailin",
            "stationName": "海林",
            "hot": 241822,
            "priority": 1
        },
        {
            "stationCode": "huanggangxi",
            "match": "hgx|huanggangxi",
            "stationName": "黄冈西",
            "hot": 239759,
            "priority": 0
        },
        {
            "stationCode": "hengfeng",
            "match": "hf|hengfeng",
            "stationName": "横峰",
            "hot": 204856,
            "priority": 1
        },
        {
            "stationCode": "huangliu",
            "match": "hl|huangliu",
            "stationName": "黄流",
            "hot": 186596,
            "priority": 1
        },
        {
            "stationCode": "huaying",
            "match": "hy|huaying",
            "stationName": "华蓥",
            "hot": 182472,
            "priority": 1
        },
        {
            "stationCode": "hejin",
            "match": "hj|hejin",
            "stationName": "河津",
            "hot": 179156,
            "priority": 1
        },
        {
            "stationCode": "huade",
            "match": "hd|huade",
            "stationName": "化德",
            "hot": 174533,
            "priority": 1
        },
        {
            "stationCode": "huanan",
            "match": "hn|huanan",
            "stationName": "桦南",
            "hot": 173542,
            "priority": 1
        },
        {
            "stationCode": "huangmei",
            "match": "hm|huangmei",
            "stationName": "黄梅",
            "hot": 164608,
            "priority": 1
        },
        {
            "stationCode": "huishan",
            "match": "hs|huishan",
            "stationName": "惠山",
            "hot": 156031,
            "priority": 1
        },
        {
            "stationCode": "huanglingnan",
            "match": "hln|huanglingnan",
            "stationName": "黄陵南",
            "hot": 153875,
            "priority": 1
        },
        {
            "stationCode": "huinong",
            "match": "hn|huinong",
            "stationName": "惠农",
            "hot": 147876,
            "priority": 1
        },
        {
            "stationCode": "haiyangbei",
            "match": "hyb|haiyangbei",
            "stationName": "海阳北",
            "hot": 147654,
            "priority": 1
        },
        {
            "stationCode": "huanggangdong",
            "match": "hgd|huanggangdong",
            "stationName": "黄冈东",
            "hot": 145890,
            "priority": 0
        },
        {
            "stationCode": "huixian",
            "match": "hx|huixian",
            "stationName": "徽县",
            "hot": 142404,
            "priority": 1
        },
        {
            "stationCode": "hulin",
            "match": "hl|hulin",
            "stationName": "虎林",
            "hot": 140040,
            "priority": 1
        },
        {
            "stationCode": "huolinguole",
            "match": "hlgl|huolinguole",
            "stationName": "霍林郭勒",
            "hot": 135360,
            "priority": 1
        },
        {
            "stationCode": "heshuo",
            "match": "hs|heshuo",
            "stationName": "和硕",
            "hot": 133931,
            "priority": 1
        },
        {
            "stationCode": "huairendong",
            "match": "hrd|huairendong",
            "stationName": "怀仁东",
            "hot": 107107,
            "priority": 0
        },
        {
            "stationCode": "huairou",
            "match": "hr|huairou",
            "stationName": "怀柔",
            "hot": 106009,
            "priority": 1
        },
        {
            "stationCode": "hangzhounan",
            "match": "hzn|hangzhounan",
            "stationName": "杭州南",
            "hot": 102006,
            "priority": 1
        },
        {
            "stationCode": "hekoubei",
            "match": "hkb|hekoubei",
            "stationName": "河口北",
            "hot": 101658,
            "priority": 1
        },
        {
            "stationCode": "huairoubei",
            "match": "hrb|huairoubei",
            "stationName": "怀柔北",
            "hot": 98239,
            "priority": 1
        },
        {
            "stationCode": "hanyuan",
            "match": "hy|hanyuan",
            "stationName": "汉源",
            "hot": 98144,
            "priority": 1
        },
        {
            "stationCode": "hanshou",
            "match": "hs|hanshou",
            "stationName": "汉寿",
            "hot": 96109,
            "priority": 1
        },
        {
            "stationCode": "huichangbei",
            "match": "hcb|huichangbei",
            "stationName": "会昌北",
            "hot": 94498,
            "priority": 1
        },
        {
            "stationCode": "heyangbei",
            "match": "hyb|heyangbei",
            "stationName": "合阳北",
            "hot": 92430,
            "priority": 1
        },
        {
            "stationCode": "hengdaohezi",
            "match": "hdhz|hengdaohezi",
            "stationName": "横道河子",
            "hot": 90023,
            "priority": 1
        },
        {
            "stationCode": "huizhouxi",
            "match": "hzx|huizhouxi",
            "stationName": "惠州西",
            "hot": 87272,
            "priority": 1
        },
        {
            "stationCode": "huayuankou",
            "match": "ddx|dandongxi",
            "stationName": "花园口",
            "hot": 81259,
            "priority": 1
        },
        {
            "stationCode": "hongguangzhen",
            "match": "hgz|hongguangzhen",
            "stationName": "红光镇",
            "hot": 78106,
            "priority": 1
        },
        {
            "stationCode": "heqing",
            "match": "hq|heqing",
            "stationName": "鹤庆",
            "hot": 77393,
            "priority": 1
        },
        {
            "stationCode": "huitong",
            "match": "ht|huitong",
            "stationName": "会同",
            "hot": 75649,
            "priority": 1
        },
        {
            "stationCode": "heishui",
            "match": "hs|heishui",
            "stationName": "黑水",
            "hot": 73493,
            "priority": 1
        },
        {
            "stationCode": "heyang",
            "match": "hy|heyang",
            "stationName": "合阳",
            "hot": 73365,
            "priority": 1
        },
        {
            "stationCode": "hukou",
            "match": "hk|hukou",
            "stationName": "湖口",
            "hot": 72608,
            "priority": 1
        },
        {
            "stationCode": "huahu",
            "match": "hh|huahu",
            "stationName": "花湖",
            "hot": 70656,
            "priority": 0
        },
        {
            "stationCode": "huangling",
            "match": "hl|huangling",
            "stationName": "黄陵",
            "hot": 68888,
            "priority": 1
        },
        {
            "stationCode": "haolianghe",
            "match": "hlh|haolianghe",
            "stationName": "浩良河",
            "hot": 68571,
            "priority": 1
        },
        {
            "stationCode": "huojia",
            "match": "hj|huojia",
            "stationName": "获嘉",
            "hot": 66565,
            "priority": 1
        },
        {
            "stationCode": "hanyin",
            "match": "hy|hanyin",
            "stationName": "汉阴",
            "hot": 62267,
            "priority": 1
        },
        {
            "stationCode": "huoqiu",
            "match": "hq|huoqiu",
            "stationName": "霍邱",
            "hot": 58802,
            "priority": 1
        },
        {
            "stationCode": "haibei",
            "match": "hb|haibei",
            "stationName": "海北",
            "hot": 57088,
            "priority": 1
        },
        {
            "stationCode": "huangkou",
            "match": "hk|huangkou",
            "stationName": "黄口",
            "hot": 56107,
            "priority": 1
        },
        {
            "stationCode": "hongxinglong",
            "match": "hxl|hongxinglong",
            "stationName": "红兴隆",
            "hot": 55886,
            "priority": 1
        },
        {
            "stationCode": "huashannan",
            "match": "hsn|huashannan",
            "stationName": "花山南",
            "hot": 50449,
            "priority": 1
        },
        {
            "stationCode": "hefeibeicheng",
            "match": "hfbc|hefeibeicheng",
            "stationName": "合肥北城",
            "hot": 48143,
            "priority": 1
        },
        {
            "stationCode": "heping",
            "match": "hp|heping",
            "stationName": "和平",
            "hot": 46570,
            "priority": 1
        },
        {
            "stationCode": "heli",
            "match": "hl|heli",
            "stationName": "鹤立",
            "hot": 46553,
            "priority": 1
        },
        {
            "stationCode": "haidongxi",
            "match": "hdx|haidongxi",
            "stationName": "海东西",
            "hot": 45179,
            "priority": 1
        },
        {
            "stationCode": "huanghejingqu",
            "match": "huanghejingqu|hhjq",
            "stationName": "黄河景区",
            "hot": 43515,
            "priority": 1
        },
        {
            "stationCode": "hongyan",
            "match": "hy|hongyan",
            "stationName": "红彦",
            "hot": 42635,
            "priority": 1
        },
        {
            "stationCode": "huarongnan",
            "match": "hrn|huarongnan",
            "stationName": "华容南",
            "hot": 42455,
            "priority": 0
        },
        {
            "stationCode": "hadapu",
            "match": "hdp|hadapu",
            "stationName": "哈达铺",
            "hot": 40035,
            "priority": 0
        },
        {
            "stationCode": "heshengqiaodong",
            "match": "hsqd|heshengqiaodong",
            "stationName": "贺胜桥东",
            "hot": 34347,
            "priority": 0
        },
        {
            "stationCode": "huoerguosi",
            "match": "hegs|huoerguosi",
            "stationName": "霍尔果斯",
            "hot": 33212,
            "priority": 0
        },
        {
            "stationCode": "heshituoluogai",
            "match": "hstlg|heshituoluogai",
            "stationName": "和什托洛盖",
            "hot": 33122,
            "priority": 1
        },
        {
            "stationCode": "huanxintian",
            "match": "hxt|huanxintian",
            "stationName": "换新天",
            "hot": 30838,
            "priority": 1
        },
        {
            "stationCode": "hekounan",
            "match": "hkn|hekounan",
            "stationName": "河口南",
            "hot": 30154,
            "priority": 1
        },
        {
            "stationCode": "hanconggou",
            "match": "hcg|hanconggou",
            "stationName": "寒葱沟",
            "hot": 29139,
            "priority": 1
        },
        {
            "stationCode": "huacheng",
            "match": "hc|huacheng",
            "stationName": "华城",
            "hot": 27489,
            "priority": 1
        },
        {
            "stationCode": "hebei",
            "match": "hb|hebei",
            "stationName": "鹤北",
            "hot": 26391,
            "priority": 1
        },
        {
            "stationCode": "huarongdong",
            "match": "hrd|huarongdong",
            "stationName": "华容东",
            "hot": 26036,
            "priority": 0
        },
        {
            "stationCode": "heitai",
            "match": "ht|heitai",
            "stationName": "黑台",
            "hot": 23980,
            "priority": 1
        },
        {
            "stationCode": "huangnihe",
            "match": "hnh|huangnihe",
            "stationName": "黄泥河",
            "hot": 23452,
            "priority": 1
        },
        {
            "stationCode": "heijing",
            "match": "hj|heijing",
            "stationName": "黑井",
            "hot": 23276,
            "priority": 1
        },
        {
            "stationCode": "honghuagou",
            "match": "hhg|honghuagou",
            "stationName": "红花沟",
            "hot": 23007,
            "priority": 1
        },
        {
            "stationCode": "honghe",
            "match": "hh|honghe",
            "stationName": "洪河",
            "hot": 22006,
            "priority": 1
        },
        {
            "stationCode": "huangyuan",
            "match": "hy|huangyuan",
            "stationName": "湟源",
            "hot": 20677,
            "priority": 1
        },
        {
            "stationCode": "henggouqiaodong",
            "match": "hgqd|henggouqiaodong",
            "stationName": "横沟桥东",
            "hot": 20452,
            "priority": 0
        },
        {
            "stationCode": "halasu",
            "match": "hls|halasu",
            "stationName": "哈拉苏",
            "hot": 20063,
            "priority": 1
        },
        {
            "stationCode": "huaiyin",
            "match": "hy|huaiyin",
            "stationName": "槐荫",
            "hot": 20028,
            "priority": 0
        },
        {
            "stationCode": "houhu",
            "match": "hh|houhu",
            "stationName": "后湖",
            "hot": 18749,
            "priority": 0
        },
        {
            "stationCode": "huaqiao1",
            "match": "hq|huaqiao",
            "stationName": "花桥",
            "hot": 17995,
            "priority": 1
        },
        {
            "stationCode": "hongxing",
            "match": "hx|hongxing",
            "stationName": "红星",
            "hot": 16723,
            "priority": 1
        },
        {
            "stationCode": "hongshan1",
            "match": "hs|hongshan",
            "stationName": "红山",
            "hot": 16560,
            "priority": 1
        },
        {
            "stationCode": "hefeixi",
            "match": "hefeixi|hfx",
            "stationName": "合肥西",
            "hot": 16297,
            "priority": 1
        },
        {
            "stationCode": "hualin",
            "match": "hl|hualin",
            "stationName": "桦林",
            "hot": 15693,
            "priority": 1
        },
        {
            "stationCode": "huihuan",
            "match": "huihuan|hh",
            "stationName": "惠环",
            "hot": 14580,
            "priority": 1
        },
        {
            "stationCode": "helong",
            "match": "hl|helong",
            "stationName": "和龙",
            "hot": 14344,
            "priority": 1
        },
        {
            "stationCode": "huangsongdian",
            "match": "hsd|huangsongdian",
            "stationName": "黄松甸",
            "hot": 14131,
            "priority": 1
        },
        {
            "stationCode": "huaiannan",
            "match": "han|huaiannan",
            "stationName": "淮安南",
            "hot": 13334,
            "priority": 1
        },
        {
            "stationCode": "hetang",
            "match": "ht|hetang",
            "stationName": "荷塘",
            "hot": 12660,
            "priority": 0
        },
        {
            "stationCode": "hongan",
            "match": "ha|hongan",
            "stationName": "红安",
            "hot": 12349,
            "priority": 1
        },
        {
            "stationCode": "haituozi",
            "match": "htz|haituozi",
            "stationName": "海坨子",
            "hot": 8751,
            "priority": 1
        },
        {
            "stationCode": "hejiadian",
            "match": "hjd|hejiadian",
            "stationName": "贺家店",
            "hot": 7822,
            "priority": 1
        },
        {
            "stationCode": "hongqing",
            "match": "hq|hongqing",
            "stationName": "宏庆",
            "hot": 7783,
            "priority": 1
        },
        {
            "stationCode": "hongsipu",
            "match": "hsp|hongsipu",
            "stationName": "红寺堡",
            "hot": 7219,
            "priority": 1
        },
        {
            "stationCode": "hebian",
            "match": "hb|hebian",
            "stationName": "河边",
            "hot": 6405,
            "priority": 1
        },
        {
            "stationCode": "huangshidong",
            "match": "hsd|huangshidong",
            "stationName": "黄石东",
            "hot": 6121,
            "priority": 1
        },
        {
            "stationCode": "halahai",
            "match": "hlh|halahai",
            "stationName": "哈拉海",
            "hot": 6067,
            "priority": 1
        },
        {
            "stationCode": "huangyangtan",
            "match": "hyt|huangyangtan",
            "stationName": "黄羊滩",
            "hot": 5546,
            "priority": 1
        },
        {
            "stationCode": "huangguayuan",
            "match": "hgy|huangguayuan",
            "stationName": "黄瓜园",
            "hot": 4221,
            "priority": 1
        },
        {
            "stationCode": "hejing",
            "match": "hj|hejing",
            "stationName": "和静",
            "hot": 3834,
            "priority": 1
        },
        {
            "stationCode": "huanghuatong",
            "match": "hht|huanghuatong",
            "stationName": "黄花筒",
            "hot": 3657,
            "priority": 1
        },
        {
            "stationCode": "huajiazhuang",
            "match": "hjz|huajiazhuang",
            "stationName": "花家庄",
            "hot": 3604,
            "priority": 1
        },
        {
            "stationCode": "hulusitai",
            "match": "hlst|hulusitai",
            "stationName": "呼鲁斯太",
            "hot": 3591,
            "priority": 1
        },
        {
            "stationCode": "hongxiantai",
            "match": "hxt|hongxiantai",
            "stationName": "红岘台",
            "hot": 3092,
            "priority": 1
        },
        {
            "stationCode": "huarong",
            "match": "hr|huarong",
            "stationName": "华容",
            "hot": 3090,
            "priority": 1
        },
        {
            "stationCode": "hanfuwan",
            "match": "hfw|hanfuwan",
            "stationName": "韩府湾",
            "hot": 3038,
            "priority": 1
        },
        {
            "stationCode": "hejianxi",
            "match": "hjx|hejianxi",
            "stationName": "河间西",
            "hot": 2879,
            "priority": 1
        },
        {
            "stationCode": "heiwang",
            "match": "hw|heiwang",
            "stationName": "黑旺",
            "hot": 2781,
            "priority": 1
        },
        {
            "stationCode": "hanling",
            "match": "hl|hanling",
            "stationName": "寒岭",
            "hot": 2231,
            "priority": 1
        },
        {
            "stationCode": "hongjiang",
            "match": "hj|hongjiang",
            "stationName": "红江",
            "hot": 2215,
            "priority": 1
        },
        {
            "stationCode": "hangu",
            "match": "hg|hangu",
            "stationName": "汉沽",
            "hot": 2119,
            "priority": 1
        },
        {
            "stationCode": "heichongtan",
            "match": "hct|heichongtan",
            "stationName": "黑冲滩",
            "hot": 2079,
            "priority": 1
        },
        {
            "stationCode": "hongshaxian",
            "match": "hsx|hongshaxian",
            "stationName": "红砂岘",
            "hot": 1925,
            "priority": 1
        },
        {
            "stationCode": "huangyangzhen",
            "match": "hyz|huangyangzhen",
            "stationName": "黄羊镇",
            "hot": 1833,
            "priority": 1
        },
        {
            "stationCode": "hanmaying",
            "match": "hmy|hanmaying",
            "stationName": "韩麻营",
            "hot": 1758,
            "priority": 1
        },
        {
            "stationCode": "huapengzi",
            "match": "hpz|huapengzi",
            "stationName": "花棚子",
            "hot": 1349,
            "priority": 1
        },
        {
            "stationCode": "hengnan",
            "match": "hn|hengnan",
            "stationName": "衡南",
            "hot": 1289,
            "priority": 1
        },
        {
            "stationCode": "huangbai",
            "match": "hb|huangbai",
            "stationName": "黄柏",
            "hot": 1267,
            "priority": 1
        },
        {
            "stationCode": "hangjinhouqi",
            "match": "hjhq|hangjinhouqi",
            "stationName": "杭锦后旗",
            "hot": 502,
            "priority": 1
        },
        {
            "stationCode": "hailong",
            "match": "hl|hailong",
            "stationName": "海龙",
            "hot": 419,
            "priority": 1
        },
        {
            "stationCode": "huantai",
            "match": "ht|huantai",
            "stationName": "桓台",
            "hot": 380,
            "priority": 1
        },
        {
            "stationCode": "hushitai",
            "match": "hst|hushitai",
            "stationName": "虎石台",
            "hot": 255,
            "priority": 1
        },
        {
            "stationCode": "haiwan",
            "match": "hw|haiwan",
            "stationName": "海湾",
            "hot": 206,
            "priority": 1
        },
        {
            "stationCode": "huolianzhai",
            "match": "hlz|huolianzhai",
            "stationName": "火连寨",
            "hot": 126,
            "priority": 1
        },
        {
            "stationCode": "huanggutun",
            "match": "hgt|huanggutun",
            "stationName": "皇姑屯",
            "hot": 115,
            "priority": 1
        },
        {
            "stationCode": "hunhe",
            "match": "hh|hunhe",
            "stationName": "浑河",
            "hot": 78,
            "priority": 1
        },
        {
            "stationCode": "hushiha",
            "match": "hsh|hushiha",
            "stationName": "虎什哈",
            "hot": 77,
            "priority": 1
        },
        {
            "stationCode": "huajia",
            "match": "hj|huajia",
            "stationName": "华家",
            "hot": 14,
            "priority": 1
        }
    ],
    "I": [],
    "J": [
        {
            "stationCode": "jinan",
            "match": "jn|jinan",
            "stationName": "济南",
            "hot": 14873295,
            "priority": 37
        },
        {
            "stationCode": "jinhua",
            "match": "jh|jinhua",
            "stationName": "金华",
            "hot": 5758614,
            "priority": 1
        },
        {
            "stationCode": "jinanxi",
            "match": "jnx|jinanxi",
            "stationName": "济南西",
            "hot": 4030905,
            "priority": 1
        },
        {
            "stationCode": "jiujiang",
            "match": "jj|jiujiang",
            "stationName": "九江",
            "hot": 4010598,
            "priority": 10
        },
        {
            "stationCode": "jinzhou2",
            "match": "jz|jinzhou",
            "stationName": "锦州",
            "hot": 3789510,
            "priority": 1
        },
        {
            "stationCode": "jian",
            "match": "ja|jian",
            "stationName": "吉安",
            "hot": 3227081,
            "priority": 10
        },
        {
            "stationCode": "jiaxing",
            "match": "jx|jiaxing",
            "stationName": "嘉兴",
            "hot": 2973303,
            "priority": 10
        },
        {
            "stationCode": "jinjiang",
            "match": "jj|jinjiang",
            "stationName": "晋江",
            "hot": 2972005,
            "priority": 1
        },
        {
            "stationCode": "jilin",
            "match": "jl|jilin",
            "stationName": "吉林",
            "hot": 2829713,
            "priority": 10
        },
        {
            "stationCode": "jingzhou1",
            "match": "jz|jingzhou",
            "stationName": "荆州",
            "hot": 2631398,
            "priority": 1
        },
        {
            "stationCode": "jiamusi",
            "match": "jms|jiamusi",
            "stationName": "佳木斯",
            "hot": 2175681,
            "priority": 1
        },
        {
            "stationCode": "jiaxingnan",
            "match": "jxn|jiaxingnan",
            "stationName": "嘉兴南",
            "hot": 1993843,
            "priority": 1
        },
        {
            "stationCode": "jining",
            "match": "jn|jining",
            "stationName": "济宁",
            "hot": 1883545,
            "priority": 10
        },
        {
            "stationCode": "jiningnan",
            "match": "jnn|jiningnan",
            "stationName": "集宁南",
            "hot": 1850970,
            "priority": 1
        },
        {
            "stationCode": "jiaozuo",
            "match": "jz|jiaozuo",
            "stationName": "焦作",
            "hot": 1598542,
            "priority": 1
        },
        {
            "stationCode": "jinzhounan",
            "match": "jzn|jinzhounan",
            "stationName": "锦州南",
            "hot": 1535079,
            "priority": 1
        },
        {
            "stationCode": "jinhuanan",
            "match": "jhn|jinhuanan",
            "stationName": "金华南",
            "hot": 1480444,
            "priority": 1
        },
        {
            "stationCode": "jingmen",
            "match": "jm|jingmen",
            "stationName": "荆门",
            "hot": 1394504,
            "priority": 1
        },
        {
            "stationCode": "jiangshan",
            "match": "js|jiangshan",
            "stationName": "江山",
            "hot": 1336987,
            "priority": 1
        },
        {
            "stationCode": "jinzhou1",
            "match": "jz|jinzhou",
            "stationName": "金州",
            "hot": 1228708,
            "priority": 1
        },
        {
            "stationCode": "jinandong",
            "match": "jnd|jinandong",
            "stationName": "济南东",
            "hot": 1166360,
            "priority": 1
        },
        {
            "stationCode": "jiashannan",
            "match": "jsn|jiashannan",
            "stationName": "嘉善南",
            "hot": 967485,
            "priority": 1
        },
        {
            "stationCode": "jiayuguan",
            "match": "jyg|jiayuguan",
            "stationName": "嘉峪关",
            "hot": 947775,
            "priority": 1
        },
        {
            "stationCode": "jiaozhou",
            "match": "jz|jiaozhou",
            "stationName": "胶州",
            "hot": 943522,
            "priority": 1
        },
        {
            "stationCode": "jiangyou",
            "match": "jy|jiangyou",
            "stationName": "江油",
            "hot": 886323,
            "priority": 1
        },
        {
            "stationCode": "jincheng",
            "match": "jc|jincheng",
            "stationName": "晋城",
            "hot": 876657,
            "priority": 1
        },
        {
            "stationCode": "jieyang",
            "match": "jy|jieyang",
            "stationName": "揭阳",
            "hot": 790751,
            "priority": 10
        },
        {
            "stationCode": "jiexiu",
            "match": "jx|jiexiu",
            "stationName": "介休",
            "hot": 773799,
            "priority": 1
        },
        {
            "stationCode": "jinxian",
            "match": "jx|jinxian",
            "stationName": "进贤",
            "hot": 762088,
            "priority": 1
        },
        {
            "stationCode": "jinzhai",
            "match": "jz|jinzhai",
            "stationName": "金寨",
            "hot": 753341,
            "priority": 1
        },
        {
            "stationCode": "jishou",
            "match": "js|jishou",
            "stationName": "吉首",
            "hot": 746448,
            "priority": 1
        },
        {
            "stationCode": "jingdezhen",
            "match": "jdz|jingdezhen",
            "stationName": "景德镇",
            "hot": 745981,
            "priority": 10
        },
        {
            "stationCode": "jimobei",
            "match": "jmb|jimobei",
            "stationName": "即墨北",
            "hot": 731454,
            "priority": 1
        },
        {
            "stationCode": "jianshi",
            "match": "js|jianshi",
            "stationName": "建始",
            "hot": 721207,
            "priority": 1
        },
        {
            "stationCode": "jixi",
            "match": "jx|jixi",
            "stationName": "鸡西",
            "hot": 687868,
            "priority": 1
        },
        {
            "stationCode": "jiuquan",
            "match": "jq|jiuquan",
            "stationName": "酒泉",
            "hot": 684534,
            "priority": 1
        },
        {
            "stationCode": "juye",
            "match": "jy|juye",
            "stationName": "巨野",
            "hot": 676931,
            "priority": 1
        },
        {
            "stationCode": "jianouxi",
            "match": "jianouxi|jox",
            "stationName": "建瓯西",
            "hot": 649593,
            "priority": 1
        },
        {
            "stationCode": "jinzhong",
            "match": "jz|jinzhong",
            "stationName": "晋中",
            "hot": 591549,
            "priority": 1
        },
        {
            "stationCode": "jinchang",
            "match": "jc|jinchang",
            "stationName": "金昌",
            "hot": 580098,
            "priority": 1
        },
        {
            "stationCode": "jinghai",
            "match": "jh|jinghai",
            "stationName": "静海",
            "hot": 497239,
            "priority": 1
        },
        {
            "stationCode": "jiyuan",
            "match": "jy|jiyuan",
            "stationName": "济源",
            "hot": 471183,
            "priority": 1
        },
        {
            "stationCode": "jinxiannan",
            "match": "jxn|jinxiannan",
            "stationName": "进贤南",
            "hot": 460148,
            "priority": 1
        },
        {
            "stationCode": "jiangmendong",
            "match": "jmd|jiangmendong",
            "stationName": "江门东",
            "hot": 454851,
            "priority": 0
        },
        {
            "stationCode": "jiashan",
            "match": "js|jiashan",
            "stationName": "嘉善",
            "hot": 453422,
            "priority": 1
        },
        {
            "stationCode": "jiexiudong",
            "match": "jxd|jiexiudong",
            "stationName": "介休东",
            "hot": 439650,
            "priority": 0
        },
        {
            "stationCode": "jiangle",
            "match": "jl|jiangle",
            "stationName": "将乐",
            "hot": 425206,
            "priority": 1
        },
        {
            "stationCode": "jiagedaqi",
            "match": "jgdq|jiagedaqi",
            "stationName": "加格达奇",
            "hot": 416541,
            "priority": 1
        },
        {
            "stationCode": "jingbian",
            "match": "jb|jingbian",
            "stationName": "靖边",
            "hot": 393084,
            "priority": 1
        },
        {
            "stationCode": "jinyunxi",
            "match": "jyx|jinyunxi",
            "stationName": "缙云西",
            "hot": 388364,
            "priority": 1
        },
        {
            "stationCode": "jiaohexi",
            "match": "jhx|jiaohexi",
            "stationName": "蛟河西",
            "hot": 388294,
            "priority": 1
        },
        {
            "stationCode": "jinzhou",
            "match": "jz|jinzhou",
            "stationName": "晋州",
            "hot": 372835,
            "priority": 1
        },
        {
            "stationCode": "jianningxianbei",
            "match": "jnxb|jianningxianbei",
            "stationName": "建宁县北",
            "hot": 361237,
            "priority": 1
        },
        {
            "stationCode": "jinggangshan",
            "match": "jgs|jinggangshan",
            "stationName": "井冈山",
            "hot": 352314,
            "priority": 10
        },
        {
            "stationCode": "jinshanbei",
            "match": "jsb|jinshanbei",
            "stationName": "金山北",
            "hot": 345306,
            "priority": 1
        },
        {
            "stationCode": "jiaxiang",
            "match": "jx|jiaxiang",
            "stationName": "嘉祥",
            "hot": 340579,
            "priority": 1
        },
        {
            "stationCode": "jinchengjiang",
            "match": "jcj|jinchengjiang",
            "stationName": "金城江",
            "hot": 335192,
            "priority": 1
        },
        {
            "stationCode": "jianou",
            "match": "jo|jianou",
            "stationName": "建瓯",
            "hot": 330733,
            "priority": 1
        },
        {
            "stationCode": "jianghua",
            "match": "jh|jianghua",
            "stationName": "江华",
            "hot": 315644,
            "priority": 1
        },
        {
            "stationCode": "jiaomei",
            "match": "jm|jiaomei",
            "stationName": "角美",
            "hot": 302399,
            "priority": 1
        },
        {
            "stationCode": "jiutai",
            "match": "jt|jiutai",
            "stationName": "九台",
            "hot": 287013,
            "priority": 1
        },
        {
            "stationCode": "jingxian",
            "match": "jingxian|jx",
            "stationName": "泾县",
            "hot": 266165,
            "priority": 1
        },
        {
            "stationCode": "jiaohe",
            "match": "jh|jiaohe",
            "stationName": "蛟河",
            "hot": 261628,
            "priority": 1
        },
        {
            "stationCode": "jieshoushi",
            "match": "jss|jieshoushi",
            "stationName": "界首市",
            "hot": 228791,
            "priority": 0
        },
        {
            "stationCode": "jiaocheng",
            "match": "jc|jiaocheng",
            "stationName": "交城",
            "hot": 220021,
            "priority": 1
        },
        {
            "stationCode": "junliangchengbei",
            "match": "jlcb|junliangchengbei",
            "stationName": "军粮城北",
            "hot": 218480,
            "priority": 0
        },
        {
            "stationCode": "jingshan",
            "match": "js|jingshan",
            "stationName": "京山",
            "hot": 208344,
            "priority": 1
        },
        {
            "stationCode": "jixibei",
            "match": "jixibei|jxb",
            "stationName": "绩溪北",
            "hot": 199336,
            "priority": 1
        },
        {
            "stationCode": "jiuquannan",
            "match": "jqn|jiuquannan",
            "stationName": "酒泉南",
            "hot": 197127,
            "priority": 1
        },
        {
            "stationCode": "junan",
            "match": "jn|junan",
            "stationName": "莒南",
            "hot": 191053,
            "priority": 1
        },
        {
            "stationCode": "jixixian",
            "match": "jxx|jixixian",
            "stationName": "绩溪县",
            "hot": 190606,
            "priority": 1
        },
        {
            "stationCode": "jinyun",
            "match": "jy|jinyun",
            "stationName": "缙云",
            "hot": 189307,
            "priority": 1
        },
        {
            "stationCode": "jiangning",
            "match": "jn|jiangning",
            "stationName": "江宁",
            "hot": 187450,
            "priority": 1
        },
        {
            "stationCode": "jianyang",
            "match": "jy|jianyang",
            "stationName": "建阳",
            "hot": 184744,
            "priority": 1
        },
        {
            "stationCode": "jianshui",
            "match": "js|jianshui",
            "stationName": "建水",
            "hot": 168925,
            "priority": 1
        },
        {
            "stationCode": "juxian",
            "match": "jx|juxian",
            "stationName": "莒县",
            "hot": 168840,
            "priority": 1
        },
        {
            "stationCode": "jiangyong",
            "match": "jy|jiangyong",
            "stationName": "江永",
            "hot": 162779,
            "priority": 1
        },
        {
            "stationCode": "jiangdu",
            "match": "jd|jiangdu",
            "stationName": "江都",
            "hot": 158858,
            "priority": 1
        },
        {
            "stationCode": "jizhou",
            "match": "jz|jizhou",
            "stationName": "蓟州",
            "hot": 150064,
            "priority": 0
        },
        {
            "stationCode": "jianyangnan",
            "match": "jyn|jianyangnan",
            "stationName": "简阳南",
            "hot": 142034,
            "priority": 1
        },
        {
            "stationCode": "jingzhou",
            "match": "jz|jingzhou",
            "stationName": "靖州",
            "hot": 136046,
            "priority": 1
        },
        {
            "stationCode": "jiangyan",
            "match": "jy|jiangyan",
            "stationName": "姜堰",
            "hot": 135948,
            "priority": 1
        },
        {
            "stationCode": "jiusan",
            "match": "js|jiusan",
            "stationName": "九三",
            "hot": 134086,
            "priority": 1
        },
        {
            "stationCode": "jingde",
            "match": "jingde|jd",
            "stationName": "旌德",
            "hot": 128210,
            "priority": 1
        },
        {
            "stationCode": "jinghenan",
            "match": "jhn|jinghenan",
            "stationName": "精河南",
            "hot": 127586,
            "priority": 1
        },
        {
            "stationCode": "jurongxi",
            "match": "jrx|jurongxi",
            "stationName": "句容西",
            "hot": 126873,
            "priority": 1
        },
        {
            "stationCode": "jingpeng",
            "match": "jp|jingpeng",
            "stationName": "经棚",
            "hot": 125675,
            "priority": 1
        },
        {
            "stationCode": "jiansanjiang",
            "match": "jsj|jiansanjiang",
            "stationName": "建三江",
            "hot": 123421,
            "priority": 1
        },
        {
            "stationCode": "jinyuewan",
            "match": "jyw|jinyuewan",
            "stationName": "金月湾",
            "hot": 113874,
            "priority": 0
        },
        {
            "stationCode": "jingtai",
            "match": "jt|jingtai",
            "stationName": "景泰",
            "hot": 110043,
            "priority": 1
        },
        {
            "stationCode": "jingxi",
            "match": "jx|jingxi",
            "stationName": "靖西",
            "hot": 105096,
            "priority": 1
        },
        {
            "stationCode": "jishan",
            "match": "js|jishan",
            "stationName": "稷山",
            "hot": 102427,
            "priority": 1
        },
        {
            "stationCode": "jianhu",
            "match": "jh|jianhu",
            "stationName": "建湖",
            "hot": 101888,
            "priority": 1
        },
        {
            "stationCode": "jianfeng",
            "match": "jf|jianfeng",
            "stationName": "尖峰",
            "hot": 100496,
            "priority": 1
        },
        {
            "stationCode": "jianyang1",
            "match": "jy|jianyang",
            "stationName": "简阳",
            "hot": 100457,
            "priority": 1
        },
        {
            "stationCode": "jiayuguannan",
            "match": "jygn|jiayuguannan",
            "stationName": "嘉峪关南",
            "hot": 99647,
            "priority": 1
        },
        {
            "stationCode": "jingchuan",
            "match": "jc|jingchuan",
            "stationName": "泾川",
            "hot": 94473,
            "priority": 1
        },
        {
            "stationCode": "jidong",
            "match": "jd|jidong",
            "stationName": "鸡东",
            "hot": 90727,
            "priority": 1
        },
        {
            "stationCode": "jiutainan",
            "match": "jtn|jiutainan",
            "stationName": "九台南",
            "hot": 85270,
            "priority": 0
        },
        {
            "stationCode": "jinbaotun",
            "match": "jbt|jinbaotun",
            "stationName": "金宝屯",
            "hot": 84210,
            "priority": 1
        },
        {
            "stationCode": "jiangqiao",
            "match": "jq|jiangqiao",
            "stationName": "江桥",
            "hot": 59956,
            "priority": 1
        },
        {
            "stationCode": "jiangjin",
            "match": "jj|jiangjin",
            "stationName": "江津",
            "hot": 56337,
            "priority": 1
        },
        {
            "stationCode": "jiangningxi",
            "match": "jnx1|jiangningxi",
            "stationName": "江宁西",
            "hot": 54096,
            "priority": 1
        },
        {
            "stationCode": "jiaozhoubei",
            "match": "jzb|jiaozhoubei",
            "stationName": "胶州北",
            "hot": 53935,
            "priority": 1
        },
        {
            "stationCode": "jinghe",
            "match": "jh|jinghe",
            "stationName": "精河",
            "hot": 52902,
            "priority": 1
        },
        {
            "stationCode": "jingxing",
            "match": "jx|jingxing",
            "stationName": "井陉",
            "hot": 51313,
            "priority": 1
        },
        {
            "stationCode": "jinshantun",
            "match": "jst|jinshantun",
            "stationName": "金山屯",
            "hot": 49774,
            "priority": 1
        },
        {
            "stationCode": "jijiagou",
            "match": "jjg|jijiagou",
            "stationName": "纪家沟",
            "hot": 41376,
            "priority": 1
        },
        {
            "stationCode": "juancheng",
            "match": "jc|juancheng",
            "stationName": "鄄城",
            "hot": 40183,
            "priority": 1
        },
        {
            "stationCode": "jiangyuan",
            "match": "jy|jiangyuan",
            "stationName": "江源",
            "hot": 26484,
            "priority": 1
        },
        {
            "stationCode": "jiwen",
            "match": "jw|jiwen",
            "stationName": "吉文",
            "hot": 25482,
            "priority": 1
        },
        {
            "stationCode": "jishu",
            "match": "js|jishu",
            "stationName": "吉舒",
            "hot": 23497,
            "priority": 1
        },
        {
            "stationCode": "jingdian",
            "match": "jd|jingdian",
            "stationName": "井店",
            "hot": 18499,
            "priority": 1
        },
        {
            "stationCode": "jingnan",
            "match": "jn|jingnan",
            "stationName": "井南",
            "hot": 17717,
            "priority": 1
        },
        {
            "stationCode": "jinyintan",
            "match": "jyt|jinyintan",
            "stationName": "金银潭",
            "hot": 17670,
            "priority": 0
        },
        {
            "stationCode": "jinhe2",
            "match": "jh|jinhe",
            "stationName": "锦河",
            "hot": 15614,
            "priority": 1
        },
        {
            "stationCode": "jiangjia",
            "match": "jj|jiangjia",
            "stationName": "姜家",
            "hot": 13388,
            "priority": 1
        },
        {
            "stationCode": "jinchengbei",
            "match": "jcb|jinchengbei",
            "stationName": "晋城北",
            "hot": 12558,
            "priority": 1
        },
        {
            "stationCode": "jiulangshan",
            "match": "jls|jiulangshan",
            "stationName": "九郎山",
            "hot": 12298,
            "priority": 0
        },
        {
            "stationCode": "jianshe",
            "match": "js|jianshe",
            "stationName": "建设",
            "hot": 11161,
            "priority": 1
        },
        {
            "stationCode": "jingyuan",
            "match": "jy|jingyuan",
            "stationName": "靖远",
            "hot": 11031,
            "priority": 1
        },
        {
            "stationCode": "junde",
            "match": "jd|junde",
            "stationName": "峻德",
            "hot": 11031,
            "priority": 1
        },
        {
            "stationCode": "jianchang",
            "match": "jc|jianchang",
            "stationName": "建昌",
            "hot": 10753,
            "priority": 1
        },
        {
            "stationCode": "jingyu",
            "match": "jy|jingyu",
            "stationName": "靖宇",
            "hot": 10254,
            "priority": 1
        },
        {
            "stationCode": "jiaozuodong",
            "match": "jzd|jiaozuodong",
            "stationName": "焦作东",
            "hot": 9563,
            "priority": 1
        },
        {
            "stationCode": "jinhe",
            "match": "jh|jinhe",
            "stationName": "金河",
            "hot": 8085,
            "priority": 1
        },
        {
            "stationCode": "jubao",
            "match": "jb|jubao",
            "stationName": "巨宝",
            "hot": 7965,
            "priority": 1
        },
        {
            "stationCode": "jian1",
            "match": "ja|jian",
            "stationName": "集安",
            "hot": 7631,
            "priority": 1
        },
        {
            "stationCode": "jiuzhuangwo",
            "match": "jzw|jiuzhuangwo",
            "stationName": "旧庄窝",
            "hot": 7430,
            "priority": 1
        },
        {
            "stationCode": "jinmacun",
            "match": "jmc|jinmacun",
            "stationName": "金马村",
            "hot": 5948,
            "priority": 1
        },
        {
            "stationCode": "jiangsuotian",
            "match": "jst|jiangsuotian",
            "stationName": "江所田",
            "hot": 5495,
            "priority": 1
        },
        {
            "stationCode": "jiguanshan",
            "match": "jgs|jiguanshan",
            "stationName": "鸡冠山",
            "hot": 4940,
            "priority": 1
        },
        {
            "stationCode": "jingyuanxi",
            "match": "jyx|jingyuanxi",
            "stationName": "靖远西",
            "hot": 4368,
            "priority": 1
        },
        {
            "stationCode": "jinkeng",
            "match": "jk|jinkeng",
            "stationName": "金坑",
            "hot": 3720,
            "priority": 1
        },
        {
            "stationCode": "jiling",
            "match": "jl|jiling",
            "stationName": "芨岭",
            "hot": 3308,
            "priority": 1
        },
        {
            "stationCode": "jingoutun",
            "match": "jgt|jingoutun",
            "stationName": "金沟屯",
            "hot": 3027,
            "priority": 1
        },
        {
            "stationCode": "jiashan1",
            "match": "js|jiashan",
            "stationName": "甲山",
            "hot": 2597,
            "priority": 1
        },
        {
            "stationCode": "jinzhangzi",
            "match": "jzz|jinzhangzi",
            "stationName": "金杖子",
            "hot": 2203,
            "priority": 1
        },
        {
            "stationCode": "jiafeng",
            "match": "jf|jiafeng",
            "stationName": "嘉峰",
            "hot": 960,
            "priority": 1
        },
        {
            "stationCode": "jingtieshan",
            "match": "jts|jingtieshan",
            "stationName": "镜铁山",
            "hot": 370,
            "priority": 1
        },
        {
            "stationCode": "jiangbiancun",
            "match": "jbc|jiangbiancun",
            "stationName": "江边村",
            "hot": 228,
            "priority": 1
        },
        {
            "stationCode": "jialuhe",
            "match": "jlh|jialuhe",
            "stationName": "贾鲁河",
            "hot": 223,
            "priority": 0
        },
        {
            "stationCode": "jiaxinzi",
            "match": "jxz|jiaxinzi",
            "stationName": "夹心子",
            "hot": 212,
            "priority": 1
        }
    ],
    "K": [
        {
            "stationCode": "kunming",
            "match": "km|kunming",
            "stationName": "昆明",
            "hot": 7926360,
            "priority": 26
        },
        {
            "stationCode": "kunshannan",
            "match": "ksn|kunshannan",
            "stationName": "昆山南",
            "hot": 3327228,
            "priority": 1
        },
        {
            "stationCode": "kaifeng",
            "match": "kf|kaifeng",
            "stationName": "开封",
            "hot": 3316870,
            "priority": 1
        },
        {
            "stationCode": "kunshan",
            "match": "ks|kunshan",
            "stationName": "昆山",
            "hot": 3014956,
            "priority": 10
        },
        {
            "stationCode": "kunmingnan",
            "match": "kmn|kunmingnan",
            "stationName": "昆明南",
            "hot": 1799441,
            "priority": 0
        },
        {
            "stationCode": "kaili",
            "match": "kl|kaili",
            "stationName": "凯里",
            "hot": 1175519,
            "priority": 1
        },
        {
            "stationCode": "kaifengbei",
            "match": "kfb|kaifengbei",
            "stationName": "开封北",
            "hot": 939916,
            "priority": 0
        },
        {
            "stationCode": "kaiyuan",
            "match": "ky|kaiyuan",
            "stationName": "开原",
            "hot": 919024,
            "priority": 1
        },
        {
            "stationCode": "kailinan",
            "match": "kln|kailinan",
            "stationName": "凯里南",
            "hot": 880210,
            "priority": 1
        },
        {
            "stationCode": "kuerle",
            "match": "kel|kuerle",
            "stationName": "库尔勒",
            "hot": 820262,
            "priority": 1
        },
        {
            "stationCode": "kashi",
            "match": "ks|kashi",
            "stationName": "喀什",
            "hot": 576416,
            "priority": 10
        },
        {
            "stationCode": "kuitan",
            "match": "kt|kuitan",
            "stationName": "葵潭",
            "hot": 562973,
            "priority": 0
        },
        {
            "stationCode": "kuitun",
            "match": "kt|kuitun",
            "stationName": "奎屯",
            "hot": 538454,
            "priority": 1
        },
        {
            "stationCode": "kelamayi",
            "match": "klmy|kelamayi",
            "stationName": "克拉玛依",
            "hot": 326121,
            "priority": 1
        },
        {
            "stationCode": "kaiyuanxi",
            "match": "kyx|kaiyuanxi",
            "stationName": "开原西",
            "hot": 320616,
            "priority": 1
        },
        {
            "stationCode": "kuche",
            "match": "kc|kuche",
            "stationName": "库车",
            "hot": 260537,
            "priority": 1
        },
        {
            "stationCode": "kaitong",
            "match": "kt|kaitong",
            "stationName": "开通",
            "hot": 216542,
            "priority": 1
        },
        {
            "stationCode": "keshan",
            "match": "ks|keshan",
            "stationName": "克山",
            "hot": 173130,
            "priority": 1
        },
        {
            "stationCode": "kangjinjing",
            "match": "kjj|kangjinjing",
            "stationName": "康金井",
            "hot": 154123,
            "priority": 1
        },
        {
            "stationCode": "kaijiang",
            "match": "kj|kaijiang",
            "stationName": "开江",
            "hot": 143736,
            "priority": 1
        },
        {
            "stationCode": "kailu",
            "match": "kl|kailu",
            "stationName": "开鲁",
            "hot": 141991,
            "priority": 1
        },
        {
            "stationCode": "kedong",
            "match": "kd|kedong",
            "stationName": "克东",
            "hot": 76231,
            "priority": 1
        },
        {
            "stationCode": "kaiyang",
            "match": "ky|kaiyang",
            "stationName": "开阳",
            "hot": 75957,
            "priority": 1
        },
        {
            "stationCode": "kunyang",
            "match": "ky|kunyang",
            "stationName": "昆阳",
            "hot": 56123,
            "priority": 0
        },
        {
            "stationCode": "kunmingxi",
            "match": "kmx|kunmingxi",
            "stationName": "昆明西",
            "hot": 47066,
            "priority": 1
        },
        {
            "stationCode": "kangzhuang",
            "match": "kz|kangzhuang",
            "stationName": "康庄",
            "hot": 44744,
            "priority": 1
        },
        {
            "stationCode": "kulun",
            "match": "kl|kulun",
            "stationName": "库伦",
            "hot": 40852,
            "priority": 1
        },
        {
            "stationCode": "huder",
            "match": "kde|huder",
            "stationName": "库都尔",
            "hot": 37251,
            "priority": 1
        },
        {
            "stationCode": "kouqian",
            "match": "kq|kouqian",
            "stationName": "口前",
            "hot": 29624,
            "priority": 1
        },
        {
            "stationCode": "keyihe",
            "match": "kyh|keyihe",
            "stationName": "克一河",
            "hot": 21373,
            "priority": 1
        },
        {
            "stationCode": "kuandian",
            "match": "kd|kuandian",
            "stationName": "宽甸",
            "hot": 13644,
            "priority": 1
        },
        {
            "stationCode": "kangcheng",
            "match": "kc|kangcheng",
            "stationName": "康城",
            "hot": 13218,
            "priority": 1
        },
        {
            "stationCode": "kuishan",
            "match": "ks|kuishan",
            "stationName": "奎山",
            "hot": 12591,
            "priority": 1
        },
        {
            "stationCode": "kelan",
            "match": "kl|kelan",
            "stationName": "岢岚",
            "hot": 11397,
            "priority": 1
        },
        {
            "stationCode": "kalaqi",
            "match": "klq|kalaqi",
            "stationName": "喀喇其",
            "hot": 9765,
            "priority": 1
        },
        {
            "stationCode": "kaian",
            "match": "ka|kaian",
            "stationName": "开安",
            "hot": 2141,
            "priority": 1
        },
        {
            "stationCode": "kundulunzhao",
            "match": "kdlz|kundulunzhao",
            "stationName": "昆都仑召",
            "hot": 64,
            "priority": 0
        },
        {
            "stationCode": "kangxiling",
            "match": "kxl|kangxiling",
            "stationName": "康熙岭",
            "hot": 33,
            "priority": 1
        }
    ],
    "L": [
        {
            "stationCode": "liuzhou",
            "match": "lz|liuzhou",
            "stationName": "柳州",
            "hot": 7196099,
            "priority": 10
        },
        {
            "stationCode": "lanzhou",
            "match": "lz|lanzhou",
            "stationName": "兰州",
            "hot": 6645512,
            "priority": 26
        },
        {
            "stationCode": "luoyang",
            "match": "ly|luoyang",
            "stationName": "洛阳",
            "hot": 5851306,
            "priority": 1
        },
        {
            "stationCode": "luohe",
            "match": "lh|luohe",
            "stationName": "漯河",
            "hot": 3707272,
            "priority": 1
        },
        {
            "stationCode": "liuan",
            "match": "la|luan",
            "stationName": "六安",
            "hot": 3222441,
            "priority": 1
        },
        {
            "stationCode": "loudi",
            "match": "ld|loudi",
            "stationName": "娄底",
            "hot": 3071149,
            "priority": 1
        },
        {
            "stationCode": "liaocheng",
            "match": "lc|liaocheng",
            "stationName": "聊城",
            "hot": 3042331,
            "priority": 1
        },
        {
            "stationCode": "longyan",
            "match": "ly|longyan",
            "stationName": "龙岩",
            "hot": 2625691,
            "priority": 10
        },
        {
            "stationCode": "liaoyang",
            "match": "ly|liaoyang",
            "stationName": "辽阳",
            "hot": 2245044,
            "priority": 1
        },
        {
            "stationCode": "linyi",
            "match": "ly|linyi",
            "stationName": "临沂",
            "hot": 2221240,
            "priority": 10
        },
        {
            "stationCode": "langfang",
            "match": "lf|langfang",
            "stationName": "廊坊",
            "hot": 2098456,
            "priority": 1
        },
        {
            "stationCode": "linfen",
            "match": "lf|linfen",
            "stationName": "临汾",
            "hot": 2016111,
            "priority": 1
        },
        {
            "stationCode": "lishui",
            "match": "ls|lishui",
            "stationName": "丽水",
            "hot": 1969079,
            "priority": 1
        },
        {
            "stationCode": "liupanshui",
            "match": "lps|liupanshui",
            "stationName": "六盘水",
            "hot": 1868959,
            "priority": 1
        },
        {
            "stationCode": "luoyanglongmen",
            "match": "lylm|luoyanglongmen",
            "stationName": "洛阳龙门",
            "hot": 1747418,
            "priority": 1
        },
        {
            "stationCode": "longchuan",
            "match": "lc|longchuan",
            "stationName": "龙川",
            "hot": 1702987,
            "priority": 1
        },
        {
            "stationCode": "lvliang",
            "match": "ll|lvliang",
            "stationName": "吕梁",
            "hot": 1660865,
            "priority": 1
        },
        {
            "stationCode": "lufeng1",
            "match": "lf|lufeng",
            "stationName": "陆丰",
            "hot": 1530657,
            "priority": 0
        },
        {
            "stationCode": "lasa",
            "match": "ls|lasa",
            "stationName": "拉萨",
            "hot": 1467705,
            "priority": 26
        },
        {
            "stationCode": "lankao",
            "match": "lk|lankao",
            "stationName": "兰考",
            "hot": 1411619,
            "priority": 1
        },
        {
            "stationCode": "loudinan",
            "match": "ldn|loudinan",
            "stationName": "娄底南",
            "hot": 1379727,
            "priority": 1
        },
        {
            "stationCode": "luohexi",
            "match": "lhx|luohexi",
            "stationName": "漯河西",
            "hot": 1379116,
            "priority": 1
        },
        {
            "stationCode": "lichuan",
            "match": "lc|lichuan",
            "stationName": "利川",
            "hot": 1366074,
            "priority": 1
        },
        {
            "stationCode": "laibin",
            "match": "lb|laibin",
            "stationName": "来宾",
            "hot": 1304346,
            "priority": 1
        },
        {
            "stationCode": "laibinbei",
            "match": "lbb|laibinbei",
            "stationName": "来宾北",
            "hot": 1276622,
            "priority": 0
        },
        {
            "stationCode": "linhe",
            "match": "lh|linhe",
            "stationName": "临河",
            "hot": 1028351,
            "priority": 1
        },
        {
            "stationCode": "laiyang",
            "match": "ly|laiyang",
            "stationName": "莱阳",
            "hot": 997243,
            "priority": 1
        },
        {
            "stationCode": "liyang",
            "match": "ly|liyang",
            "stationName": "溧阳",
            "hot": 940011,
            "priority": 1
        },
        {
            "stationCode": "longxi",
            "match": "lx|longxi",
            "stationName": "陇西",
            "hot": 914323,
            "priority": 1
        },
        {
            "stationCode": "longyou",
            "match": "ly|longyou",
            "stationName": "龙游",
            "hot": 907155,
            "priority": 1
        },
        {
            "stationCode": "liling",
            "match": "ll|liling",
            "stationName": "醴陵",
            "hot": 888469,
            "priority": 1
        },
        {
            "stationCode": "lushan",
            "match": "ls|lushan",
            "stationName": "庐山",
            "hot": 860748,
            "priority": 10
        },
        {
            "stationCode": "leshan",
            "match": "ls|leshan",
            "stationName": "乐山",
            "hot": 854485,
            "priority": 1
        },
        {
            "stationCode": "linfenxi",
            "match": "lfx|linfenxi",
            "stationName": "临汾西",
            "hot": 847367,
            "priority": 0
        },
        {
            "stationCode": "yueqing",
            "match": "yq|yueqing",
            "stationName": "乐清",
            "hot": 840643,
            "priority": 1
        },
        {
            "stationCode": "langfangbei",
            "match": "lfb|langfangbei",
            "stationName": "廊坊北",
            "hot": 810481,
            "priority": 1
        },
        {
            "stationCode": "leiyangxi",
            "match": "lyx|leiyangxi",
            "stationName": "耒阳西",
            "hot": 791317,
            "priority": 1
        },
        {
            "stationCode": "leiyang",
            "match": "ly|leiyang",
            "stationName": "耒阳",
            "hot": 751162,
            "priority": 1
        },
        {
            "stationCode": "lingbao",
            "match": "lb|lingbao",
            "stationName": "灵宝",
            "hot": 731786,
            "priority": 1
        },
        {
            "stationCode": "linhai1",
            "match": "lh|linhai1",
            "stationName": "临海",
            "hot": 707076,
            "priority": 1
        },
        {
            "stationCode": "luanxian",
            "match": "lx|luanxian",
            "stationName": "滦县",
            "hot": 702053,
            "priority": 1
        },
        {
            "stationCode": "lianyungang",
            "match": "lyg|lianyungang",
            "stationName": "连云港",
            "hot": 697969,
            "priority": 10
        },
        {
            "stationCode": "lilingdong",
            "match": "lld|lilingdong",
            "stationName": "醴陵东",
            "hot": 686039,
            "priority": 1
        },
        {
            "stationCode": "lijiang",
            "match": "lj|lijiang",
            "stationName": "丽江",
            "hot": 682819,
            "priority": 10
        },
        {
            "stationCode": "lishui1",
            "match": "ls|lishui",
            "stationName": "溧水",
            "hot": 641540,
            "priority": 1
        },
        {
            "stationCode": "lanzhouxi",
            "match": "lzx|lanzhouxi",
            "stationName": "兰州西",
            "hot": 627763,
            "priority": 1
        },
        {
            "stationCode": "liuzhi",
            "match": "lz|liuzhi",
            "stationName": "六枝",
            "hot": 549140,
            "priority": 1
        },
        {
            "stationCode": "lancun",
            "match": "lc|lancun",
            "stationName": "蓝村",
            "hot": 529644,
            "priority": 1
        },
        {
            "stationCode": "lingshui",
            "match": "ls|lingshui",
            "stationName": "陵水",
            "hot": 489761,
            "priority": 1
        },
        {
            "stationCode": "lianjiang1",
            "match": "lj|lianjiang",
            "stationName": "连江",
            "hot": 488991,
            "priority": 1
        },
        {
            "stationCode": "langzhong",
            "match": "lz|langzhong",
            "stationName": "阆中",
            "hot": 466521,
            "priority": 1
        },
        {
            "stationCode": "lianjiang",
            "match": "lj|lianjiang",
            "stationName": "廉江",
            "hot": 461539,
            "priority": 1
        },
        {
            "stationCode": "lianyungangdong",
            "match": "lygd|lianyungangdong",
            "stationName": "连云港东",
            "hot": 459223,
            "priority": 1
        },
        {
            "stationCode": "liangshan",
            "match": "ls|liangshan",
            "stationName": "梁山",
            "hot": 455599,
            "priority": 1
        },
        {
            "stationCode": "lankaonan",
            "match": "lkn|lankaonan",
            "stationName": "兰考南",
            "hot": 437848,
            "priority": 0
        },
        {
            "stationCode": "litang",
            "match": "lt|litang",
            "stationName": "黎塘",
            "hot": 430732,
            "priority": 1
        },
        {
            "stationCode": "linqing",
            "match": "lq|linqing",
            "stationName": "临清",
            "hot": 418778,
            "priority": 1
        },
        {
            "stationCode": "laixibei",
            "match": "lxb|laixibei",
            "stationName": "莱西北",
            "hot": 390382,
            "priority": 1
        },
        {
            "stationCode": "longnan",
            "match": "ln|longnan",
            "stationName": "陇南",
            "hot": 388177,
            "priority": 0
        },
        {
            "stationCode": "liaoyuan",
            "match": "ly|liaoyuan",
            "stationName": "辽源",
            "hot": 376635,
            "priority": 1
        },
        {
            "stationCode": "liuyuan",
            "match": "ly|liuyuan",
            "stationName": "柳园",
            "hot": 369257,
            "priority": 1
        },
        {
            "stationCode": "lingshi",
            "match": "ls|lingshi",
            "stationName": "灵石",
            "hot": 364572,
            "priority": 1
        },
        {
            "stationCode": "luanhe",
            "match": "lh|luanhe",
            "stationName": "滦河",
            "hot": 364303,
            "priority": 0
        },
        {
            "stationCode": "luoyuan",
            "match": "ly|luoyuan",
            "stationName": "罗源",
            "hot": 356789,
            "priority": 1
        },
        {
            "stationCode": "liulinnan",
            "match": "lln|liulinnan",
            "stationName": "柳林南",
            "hot": 335787,
            "priority": 1
        },
        {
            "stationCode": "longchangbei",
            "match": "lcb|longchangbei",
            "stationName": "隆昌北",
            "hot": 335466,
            "priority": 1
        },
        {
            "stationCode": "lushan1",
            "match": "ls|lushan",
            "stationName": "鲁山",
            "hot": 333815,
            "priority": 1
        },
        {
            "stationCode": "lueyang",
            "match": "ly|lueyang",
            "stationName": "略阳",
            "hot": 323425,
            "priority": 1
        },
        {
            "stationCode": "lengshuijiangdong",
            "match": "lsjd|lengshuijiangdong",
            "stationName": "冷水江东",
            "hot": 320196,
            "priority": 1
        },
        {
            "stationCode": "lianyuan",
            "match": "ly|lianyuan",
            "stationName": "涟源",
            "hot": 318615,
            "priority": 1
        },
        {
            "stationCode": "laixi",
            "match": "lx|laixi",
            "stationName": "莱西",
            "hot": 308579,
            "priority": 1
        },
        {
            "stationCode": "luchuan",
            "match": "lc|luchuan",
            "stationName": "陆川",
            "hot": 307161,
            "priority": 1
        },
        {
            "stationCode": "longandong",
            "match": "lad|longandong",
            "stationName": "隆安东",
            "hot": 302071,
            "priority": 1
        },
        {
            "stationCode": "liangping",
            "match": "lp|liangping",
            "stationName": "梁平",
            "hot": 292924,
            "priority": 1
        },
        {
            "stationCode": "lechang",
            "match": "lc|lechang",
            "stationName": "乐昌",
            "hot": 288716,
            "priority": 1
        },
        {
            "stationCode": "linyibei",
            "match": "lyb|linyibei",
            "stationName": "临沂北",
            "hot": 285285,
            "priority": 1
        },
        {
            "stationCode": "lufengnan",
            "match": "lfn|lufengnan",
            "stationName": "禄丰南",
            "hot": 275863,
            "priority": 0
        },
        {
            "stationCode": "longjiang",
            "match": "lj|longjiang",
            "stationName": "龙江",
            "hot": 259863,
            "priority": 1
        },
        {
            "stationCode": "liujiang",
            "match": "lj|liujiang",
            "stationName": "柳江",
            "hot": 252142,
            "priority": 0
        },
        {
            "stationCode": "liaozhong",
            "match": "lz|liaozhong",
            "stationName": "辽中",
            "hot": 243349,
            "priority": 1
        },
        {
            "stationCode": "linkou",
            "match": "lk|linkou",
            "stationName": "林口",
            "hot": 236494,
            "priority": 1
        },
        {
            "stationCode": "liangpingnan",
            "match": "lpn|liangpingnan",
            "stationName": "梁平南",
            "hot": 234981,
            "priority": 0
        },
        {
            "stationCode": "lepingshi",
            "match": "lps|lepingshi",
            "stationName": "乐平市",
            "hot": 234690,
            "priority": 1
        },
        {
            "stationCode": "ledong",
            "match": "ld|ledong",
            "stationName": "乐东",
            "hot": 234268,
            "priority": 1
        },
        {
            "stationCode": "lingbaoxi",
            "match": "lbx|lingbaoxi",
            "stationName": "灵宝西",
            "hot": 231964,
            "priority": 1
        },
        {
            "stationCode": "lingshidong",
            "match": "lsd|lingshidong",
            "stationName": "灵石东",
            "hot": 227467,
            "priority": 0
        },
        {
            "stationCode": "lingyuan",
            "match": "ly|lingyuan",
            "stationName": "凌源",
            "hot": 208582,
            "priority": 1
        },
        {
            "stationCode": "longchang",
            "match": "lc|longchang",
            "stationName": "隆昌",
            "hot": 203368,
            "priority": 1
        },
        {
            "stationCode": "luzhaibei",
            "match": "lzb|luzhaibei",
            "stationName": "鹿寨北",
            "hot": 200454,
            "priority": 1
        },
        {
            "stationCode": "luoping",
            "match": "lp|luoping",
            "stationName": "罗平",
            "hot": 199451,
            "priority": 1
        },
        {
            "stationCode": "linying",
            "match": "ly|linying",
            "stationName": "临颍",
            "hot": 198081,
            "priority": 1
        },
        {
            "stationCode": "longnan2",
            "match": "ln|longnan",
            "stationName": "龙南",
            "hot": 194508,
            "priority": 1
        },
        {
            "stationCode": "lingaonan",
            "match": "lgn|lingaonan",
            "stationName": "临高南",
            "hot": 192328,
            "priority": 1
        },
        {
            "stationCode": "lujiang",
            "match": "lj|lujiang",
            "stationName": "庐江",
            "hot": 190196,
            "priority": 1
        },
        {
            "stationCode": "lutai",
            "match": "lt|lutai",
            "stationName": "芦台",
            "hot": 185346,
            "priority": 1
        },
        {
            "stationCode": "luoyangdong",
            "match": "lyd|luoyangdong",
            "stationName": "洛阳东",
            "hot": 179351,
            "priority": 1
        },
        {
            "stationCode": "lincheng",
            "match": "lc|lincheng",
            "stationName": "临城",
            "hot": 176088,
            "priority": 0
        },
        {
            "stationCode": "luoshan",
            "match": "ls|luoshan",
            "stationName": "罗山",
            "hot": 172679,
            "priority": 1
        },
        {
            "stationCode": "langxiang",
            "match": "lx|langxiang",
            "stationName": "朗乡",
            "hot": 163623,
            "priority": 1
        },
        {
            "stationCode": "liuhe1",
            "match": "lh|liuhe",
            "stationName": "柳河",
            "hot": 160598,
            "priority": 1
        },
        {
            "stationCode": "longjia",
            "match": "lj|longjia",
            "stationName": "龙嘉",
            "hot": 146524,
            "priority": 1
        },
        {
            "stationCode": "linghai",
            "match": "lh|linghai",
            "stationName": "凌海",
            "hot": 144789,
            "priority": 1
        },
        {
            "stationCode": "lindong",
            "match": "ld|lindong",
            "stationName": "林东",
            "hot": 141776,
            "priority": 1
        },
        {
            "stationCode": "longhua",
            "match": "lh|longhua",
            "stationName": "隆化",
            "hot": 138673,
            "priority": 1
        },
        {
            "stationCode": "lingwu",
            "match": "lw|lingwu",
            "stationName": "灵武",
            "hot": 135474,
            "priority": 1
        },
        {
            "stationCode": "linli",
            "match": "ll|linli",
            "stationName": "临澧",
            "hot": 129243,
            "priority": 1
        },
        {
            "stationCode": "ledu",
            "match": "ld|ledu",
            "stationName": "乐都",
            "hot": 127634,
            "priority": 1
        },
        {
            "stationCode": "laha",
            "match": "lh|laha",
            "stationName": "拉哈",
            "hot": 124271,
            "priority": 1
        },
        {
            "stationCode": "linxi",
            "match": "lx|linxi",
            "stationName": "林西",
            "hot": 115598,
            "priority": 1
        },
        {
            "stationCode": "lingqiu",
            "match": "lq|lingqiu",
            "stationName": "灵丘",
            "hot": 106014,
            "priority": 1
        },
        {
            "stationCode": "lanzhoudong",
            "match": "lzd|lanzhoudong",
            "stationName": "兰州东",
            "hot": 101771,
            "priority": 1
        },
        {
            "stationCode": "lingling",
            "match": "ll|lingling",
            "stationName": "零陵",
            "hot": 99719,
            "priority": 1
        },
        {
            "stationCode": "leizhou",
            "match": "lz|leizhou",
            "stationName": "雷州",
            "hot": 99520,
            "priority": 1
        },
        {
            "stationCode": "luzhai",
            "match": "lz|luzhai",
            "stationName": "鹿寨",
            "hot": 97090,
            "priority": 1
        },
        {
            "stationCode": "linxiang",
            "match": "lx|linxiang",
            "stationName": "临湘",
            "hot": 92834,
            "priority": 1
        },
        {
            "stationCode": "laochengzhen",
            "match": "lcz|laochengzhen",
            "stationName": "老城镇",
            "hot": 90064,
            "priority": 1
        },
        {
            "stationCode": "longhua1",
            "match": "lh|longhua",
            "stationName": "龙华",
            "hot": 86936,
            "priority": 1
        },
        {
            "stationCode": "longxian",
            "match": "lx|longxian",
            "stationName": "陇县",
            "hot": 83703,
            "priority": 1
        },
        {
            "stationCode": "longdongbao",
            "match": "ldb|longdongbao",
            "stationName": "龙洞堡",
            "hot": 83121,
            "priority": 1
        },
        {
            "stationCode": "longshanzhen",
            "match": "lsz|longshanzhen",
            "stationName": "龙山镇",
            "hot": 80728,
            "priority": 1
        },
        {
            "stationCode": "luntai",
            "match": "lt|luntai",
            "stationName": "轮台",
            "hot": 77591,
            "priority": 1
        },
        {
            "stationCode": "luojiangdong",
            "match": "ljd|luojiangdong",
            "stationName": "罗江东",
            "hot": 72887,
            "priority": 1
        },
        {
            "stationCode": "lanlingbei",
            "match": "llb|lanlingbei",
            "stationName": "兰陵北",
            "hot": 71882,
            "priority": 0
        },
        {
            "stationCode": "leshanbei",
            "match": "lsb|leshanbei",
            "stationName": "乐山北",
            "hot": 70957,
            "priority": 1
        },
        {
            "stationCode": "liduigongyuan",
            "match": "ldgy|liduigongyuan",
            "stationName": "离堆公园",
            "hot": 68456,
            "priority": 1
        },
        {
            "stationCode": "luanping",
            "match": "lp|luanping",
            "stationName": "滦平",
            "hot": 68098,
            "priority": 1
        },
        {
            "stationCode": "longlibei",
            "match": "llb|longlibei",
            "stationName": "龙里北",
            "hot": 65561,
            "priority": 1
        },
        {
            "stationCode": "liangdang",
            "match": "ld|liangdang",
            "stationName": "两当",
            "hot": 65005,
            "priority": 1
        },
        {
            "stationCode": "longzhen",
            "match": "lz|longzhen",
            "stationName": "龙镇",
            "hot": 63411,
            "priority": 1
        },
        {
            "stationCode": "linze",
            "match": "lz|linze",
            "stationName": "临泽",
            "hot": 62854,
            "priority": 1
        },
        {
            "stationCode": "laiyuan",
            "match": "ly|laiyuan",
            "stationName": "涞源",
            "hot": 59521,
            "priority": 1
        },
        {
            "stationCode": "longshi",
            "match": "ls|longshi",
            "stationName": "龙市",
            "hot": 59416,
            "priority": 1
        },
        {
            "stationCode": "liuyuannan",
            "match": "lyn|liuyuannan",
            "stationName": "柳园南",
            "hot": 57795,
            "priority": 1
        },
        {
            "stationCode": "lalin",
            "match": "ll|lalin",
            "stationName": "拉林",
            "hot": 57285,
            "priority": 1
        },
        {
            "stationCode": "lingbi",
            "match": "lb|lingbi",
            "stationName": "灵璧",
            "hot": 50578,
            "priority": 0
        },
        {
            "stationCode": "ledunan",
            "match": "ldn|ledunan",
            "stationName": "乐都南",
            "hot": 49326,
            "priority": 1
        },
        {
            "stationCode": "lanling",
            "match": "ll|lanling",
            "stationName": "兰棱",
            "hot": 48520,
            "priority": 1
        },
        {
            "stationCode": "lixian",
            "match": "lx|lixian",
            "stationName": "澧县",
            "hot": 45790,
            "priority": 1
        },
        {
            "stationCode": "liangjia",
            "match": "lj|liangjia",
            "stationName": "两家",
            "hot": 45099,
            "priority": 1
        },
        {
            "stationCode": "lijia",
            "match": "lj|lijia",
            "stationName": "李家",
            "hot": 44931,
            "priority": 1
        },
        {
            "stationCode": "lianjiangkou",
            "match": "ljk|lianjiangkou",
            "stationName": "莲江口",
            "hot": 42516,
            "priority": 1
        },
        {
            "stationCode": "lanxi",
            "match": "lx|lanxi",
            "stationName": "兰溪",
            "hot": 42216,
            "priority": 1
        },
        {
            "stationCode": "laolai",
            "match": "ll|laolai",
            "stationName": "老莱",
            "hot": 39650,
            "priority": 1
        },
        {
            "stationCode": "liquan",
            "match": "lq|liquan",
            "stationName": "礼泉",
            "hot": 38356,
            "priority": 1
        },
        {
            "stationCode": "linzenan",
            "match": "lzn|linzenan",
            "stationName": "临泽南",
            "hot": 37822,
            "priority": 1
        },
        {
            "stationCode": "luocheng",
            "match": "lc|luocheng",
            "stationName": "罗城",
            "hot": 34684,
            "priority": 1
        },
        {
            "stationCode": "lechangdong",
            "match": "lcd|lechangdong",
            "stationName": "乐昌东",
            "hot": 34591,
            "priority": 0
        },
        {
            "stationCode": "lvboyuan",
            "match": "lby|lvboyuan",
            "stationName": "绿博园",
            "hot": 32055,
            "priority": 0
        },
        {
            "stationCode": "liuhezhen",
            "match": "lhz|liuhezhen",
            "stationName": "六合镇",
            "hot": 32022,
            "priority": 1
        },
        {
            "stationCode": "lukoupu",
            "match": "lkp|lukoupu",
            "stationName": "路口铺",
            "hot": 31196,
            "priority": 1
        },
        {
            "stationCode": "lucheng",
            "match": "lc|lucheng",
            "stationName": "潞城",
            "hot": 30027,
            "priority": 1
        },
        {
            "stationCode": "laobian",
            "match": "lb|laobian",
            "stationName": "老边",
            "hot": 28626,
            "priority": 1
        },
        {
            "stationCode": "laiwudong",
            "match": "lwd|laiwudong",
            "stationName": "莱芜东",
            "hot": 28497,
            "priority": 1
        },
        {
            "stationCode": "lanzhouxinqu",
            "match": "lzxq|lanzhouxinqu",
            "stationName": "兰州新区",
            "hot": 27641,
            "priority": 1
        },
        {
            "stationCode": "longjing",
            "match": "lj|longjing",
            "stationName": "龙井",
            "hot": 26080,
            "priority": 1
        },
        {
            "stationCode": "liujiadian",
            "match": "ljd|liujiadian",
            "stationName": "刘家店",
            "hot": 25983,
            "priority": 1
        },
        {
            "stationCode": "limudian",
            "match": "lmd|limudian",
            "stationName": "里木店",
            "hot": 24816,
            "priority": 1
        },
        {
            "stationCode": "linyuan",
            "match": "ly|linyuan",
            "stationName": "林源",
            "hot": 23600,
            "priority": 1
        },
        {
            "stationCode": "lishuzhen",
            "match": "lsz|lishuzhen",
            "stationName": "梨树镇",
            "hot": 23369,
            "priority": 1
        },
        {
            "stationCode": "lulong",
            "match": "ll|lulong",
            "stationName": "卢龙",
            "hot": 23238,
            "priority": 1
        },
        {
            "stationCode": "licheng",
            "match": "lc|licheng",
            "stationName": "黎城",
            "hot": 20656,
            "priority": 1
        },
        {
            "stationCode": "lishizhai",
            "match": "lsz|lishizhai",
            "stationName": "李石寨",
            "hot": 19459,
            "priority": 1
        },
        {
            "stationCode": "laituan",
            "match": "lt|laituan",
            "stationName": "濑湍",
            "hot": 18198,
            "priority": 1
        },
        {
            "stationCode": "luliang",
            "match": "ll|luliang",
            "stationName": "陆良",
            "hot": 18030,
            "priority": 1
        },
        {
            "stationCode": "lianshanguan",
            "match": "lsg|lianshanguan",
            "stationName": "连山关",
            "hot": 16097,
            "priority": 1
        },
        {
            "stationCode": "linhai",
            "match": "lh|linhai",
            "stationName": "林海",
            "hot": 14878,
            "priority": 1
        },
        {
            "stationCode": "lilinbei",
            "match": "lilinbei|llb",
            "stationName": "沥林北",
            "hot": 14828,
            "priority": 1
        },
        {
            "stationCode": "ludao",
            "match": "ld|ludao",
            "stationName": "鹿道",
            "hot": 14743,
            "priority": 1
        },
        {
            "stationCode": "lushuihe",
            "match": "lsh|lushuihe",
            "stationName": "露水河",
            "hot": 14440,
            "priority": 1
        },
        {
            "stationCode": "liupanshan",
            "match": "lps|liupanshan",
            "stationName": "六盘山",
            "hot": 14271,
            "priority": 1
        },
        {
            "stationCode": "linshengpu",
            "match": "lsp|linshengpu",
            "stationName": "林盛堡",
            "hot": 14170,
            "priority": 1
        },
        {
            "stationCode": "liujiahe",
            "match": "ljh|liujiahe",
            "stationName": "刘家河",
            "hot": 13783,
            "priority": 1
        },
        {
            "stationCode": "linyi1",
            "match": "ly1|linyi1",
            "stationName": "临邑",
            "hot": 13153,
            "priority": 1
        },
        {
            "stationCode": "lijinnan",
            "match": "ljn|lijinnan",
            "stationName": "利津南",
            "hot": 12785,
            "priority": 1
        },
        {
            "stationCode": "luomen",
            "match": "lm|luomen",
            "stationName": "洛门",
            "hot": 11669,
            "priority": 1
        },
        {
            "stationCode": "longli",
            "match": "ll|longli",
            "stationName": "龙里",
            "hot": 11595,
            "priority": 1
        },
        {
            "stationCode": "lingyuandong",
            "match": "lyd|lingyuandong",
            "stationName": "凌源东",
            "hot": 11321,
            "priority": 1
        },
        {
            "stationCode": "lagu",
            "match": "lg|lagu",
            "stationName": "拉古",
            "hot": 11125,
            "priority": 1
        },
        {
            "stationCode": "lingcheng",
            "match": "lc|lingcheng",
            "stationName": "陵城",
            "hot": 10940,
            "priority": 1
        },
        {
            "stationCode": "linxi1",
            "match": "lx|linxi",
            "stationName": "临西",
            "hot": 9646,
            "priority": 1
        },
        {
            "stationCode": "longquansi",
            "match": "lqs|longquansi",
            "stationName": "龙泉寺",
            "hot": 9626,
            "priority": 1
        },
        {
            "stationCode": "luojiang",
            "match": "lj|luojiang",
            "stationName": "罗江",
            "hot": 9418,
            "priority": 1
        },
        {
            "stationCode": "laofu",
            "match": "lf|laofu",
            "stationName": "老府",
            "hot": 8793,
            "priority": 1
        },
        {
            "stationCode": "lizhi",
            "match": "lz|lizhi",
            "stationName": "立志",
            "hot": 8730,
            "priority": 1
        },
        {
            "stationCode": "lufan",
            "match": "lf|lufan",
            "stationName": "鲁番",
            "hot": 6215,
            "priority": 1
        },
        {
            "stationCode": "langang",
            "match": "lg|langang",
            "stationName": "兰岗",
            "hot": 5927,
            "priority": 1
        },
        {
            "stationCode": "laiwuxi",
            "match": "lwx|laiwuxi",
            "stationName": "莱芜西",
            "hot": 5921,
            "priority": 1
        },
        {
            "stationCode": "longfeng",
            "match": "longfeng|lf",
            "stationName": "龙丰",
            "hot": 5681,
            "priority": 1
        },
        {
            "stationCode": "linjiang",
            "match": "lj|linjiang",
            "stationName": "临江",
            "hot": 5266,
            "priority": 1
        },
        {
            "stationCode": "lamadian",
            "match": "lmd|lamadian",
            "stationName": "喇嘛甸",
            "hot": 5080,
            "priority": 1
        },
        {
            "stationCode": "liwang",
            "match": "lw|liwang",
            "stationName": "李旺",
            "hot": 5069,
            "priority": 1
        },
        {
            "stationCode": "liudaohezi",
            "match": "ldhz|liudaohezi",
            "stationName": "六道河子",
            "hot": 5049,
            "priority": 1
        },
        {
            "stationCode": "laoying",
            "match": "ly|laoying",
            "stationName": "老营",
            "hot": 5002,
            "priority": 1
        },
        {
            "stationCode": "leshancun",
            "match": "lsc|leshancun",
            "stationName": "乐善村",
            "hot": 4797,
            "priority": 1
        },
        {
            "stationCode": "luopoling",
            "match": "lpl|luopoling",
            "stationName": "落坡岭",
            "hot": 4749,
            "priority": 1
        },
        {
            "stationCode": "lijiaping",
            "match": "ljp|lijiaping",
            "stationName": "李家坪",
            "hot": 4057,
            "priority": 1
        },
        {
            "stationCode": "longtangba",
            "match": "ltb|longtangba",
            "stationName": "龙塘坝",
            "hot": 3875,
            "priority": 1
        },
        {
            "stationCode": "lazha",
            "match": "lz|lazha",
            "stationName": "拉鲊",
            "hot": 3747,
            "priority": 1
        },
        {
            "stationCode": "longgudian",
            "match": "lgd|longgudian",
            "stationName": "龙骨甸",
            "hot": 3734,
            "priority": 1
        },
        {
            "stationCode": "luanheyan",
            "match": "lhy|luanheyan",
            "stationName": "滦河沿",
            "hot": 3312,
            "priority": 1
        },
        {
            "stationCode": "longgou",
            "match": "lg|longgou",
            "stationName": "龙沟",
            "hot": 3214,
            "priority": 1
        },
        {
            "stationCode": "liangdixia",
            "match": "ldx|liangdixia",
            "stationName": "梁底下",
            "hot": 3080,
            "priority": 1
        },
        {
            "stationCode": "luofa",
            "match": "lf|luofa",
            "stationName": "落垡",
            "hot": 2968,
            "priority": 1
        },
        {
            "stationCode": "linjialou",
            "match": "ljl|linjialou",
            "stationName": "蔺家楼",
            "hot": 2922,
            "priority": 1
        },
        {
            "stationCode": "liushutun",
            "match": "lst|liushutun",
            "stationName": "柳树屯",
            "hot": 2767,
            "priority": 1
        },
        {
            "stationCode": "lugou",
            "match": "lg|lugou",
            "stationName": "芦沟",
            "hot": 2638,
            "priority": 1
        },
        {
            "stationCode": "lvshun",
            "match": "ls|lvshun",
            "stationName": "旅顺",
            "hot": 2525,
            "priority": 1
        },
        {
            "stationCode": "liushuigou",
            "match": "lsg|liushuigou",
            "stationName": "流水沟",
            "hot": 2468,
            "priority": 1
        },
        {
            "stationCode": "lianggezhuang",
            "match": "lgz|lianggezhuang",
            "stationName": "良各庄",
            "hot": 2351,
            "priority": 1
        },
        {
            "stationCode": "luowansanjiang",
            "match": "lwsj|luowansanjiang",
            "stationName": "洛湾三江",
            "hot": 2259,
            "priority": 1
        },
        {
            "stationCode": "laizhou",
            "match": "lz|laizhou",
            "stationName": "来舟",
            "hot": 2246,
            "priority": 1
        },
        {
            "stationCode": "luotuoxiang",
            "match": "ltx|luotuoxiang",
            "stationName": "骆驼巷",
            "hot": 1794,
            "priority": 1
        },
        {
            "stationCode": "luxi",
            "match": "lx|luxi",
            "stationName": "芦溪",
            "hot": 1361,
            "priority": 0
        },
        {
            "stationCode": "longzhaogou",
            "match": "lzg|longzhaogou",
            "stationName": "龙爪沟",
            "hot": 910,
            "priority": 1
        },
        {
            "stationCode": "luhe",
            "match": "lh|luhe",
            "stationName": "六合",
            "hot": 829,
            "priority": 1
        },
        {
            "stationCode": "liangjiadian",
            "match": "ljd|liangjiadian",
            "stationName": "亮甲店",
            "hot": 518,
            "priority": 1
        },
        {
            "stationCode": "linchuan",
            "match": "lc|linchuan",
            "stationName": "临川",
            "hot": 495,
            "priority": 1
        },
        {
            "stationCode": "lvhua",
            "match": "lh|lvhua",
            "stationName": "绿化",
            "hot": 460,
            "priority": 1
        },
        {
            "stationCode": "luchaogang",
            "match": "lcg|luchaogang",
            "stationName": "芦潮港",
            "hot": 235,
            "priority": 1
        },
        {
            "stationCode": "langweishan",
            "match": "lws|langweishan",
            "stationName": "狼尾山",
            "hot": 139,
            "priority": 1
        }
    ],
    "M": [
        {
            "stationCode": "mianyang",
            "match": "my|mianyang",
            "stationName": "绵阳",
            "hot": 2884005,
            "priority": 10
        },
        {
            "stationCode": "mudanjiang",
            "match": "mdj|mudanjiang",
            "stationName": "牡丹江",
            "hot": 2553842,
            "priority": 10
        },
        {
            "stationCode": "maoming",
            "match": "mm|maoming",
            "stationName": "茂名",
            "hot": 1775001,
            "priority": 1
        },
        {
            "stationCode": "minquan",
            "match": "mq|minquan",
            "stationName": "民权",
            "hot": 1757937,
            "priority": 1
        },
        {
            "stationCode": "macheng",
            "match": "mc|macheng",
            "stationName": "麻城",
            "hot": 1197533,
            "priority": 1
        },
        {
            "stationCode": "machengbei",
            "match": "mcb|machengbei",
            "stationName": "麻城北",
            "hot": 960648,
            "priority": 1
        },
        {
            "stationCode": "maanshan",
            "match": "mas|maanshan",
            "stationName": "马鞍山",
            "hot": 890882,
            "priority": 1
        },
        {
            "stationCode": "meizhou",
            "match": "mz|meizhou",
            "stationName": "梅州",
            "hot": 836126,
            "priority": 1
        },
        {
            "stationCode": "minquanbei",
            "match": "mqb|minquanbei",
            "stationName": "民权北",
            "hot": 612044,
            "priority": 0
        },
        {
            "stationCode": "meishan",
            "match": "ms|meishan",
            "stationName": "眉山",
            "hot": 543881,
            "priority": 1
        },
        {
            "stationCode": "miluodong",
            "match": "mld|miluodong",
            "stationName": "汨罗东",
            "hot": 537805,
            "priority": 1
        },
        {
            "stationCode": "mianchi",
            "match": "mc|mianchi",
            "stationName": "渑池",
            "hot": 524079,
            "priority": 1
        },
        {
            "stationCode": "miluo",
            "match": "ml|miluo",
            "stationName": "汨罗",
            "hot": 518945,
            "priority": 1
        },
        {
            "stationCode": "meihekou",
            "match": "mhk|meihekou",
            "stationName": "梅河口",
            "hot": 513282,
            "priority": 1
        },
        {
            "stationCode": "maanshandong",
            "match": "pk|pikounan",
            "stationName": "马鞍山东",
            "hot": 392694,
            "priority": 1
        },
        {
            "stationCode": "mingguang",
            "match": "mg|mingguang",
            "stationName": "明光",
            "hot": 381861,
            "priority": 1
        },
        {
            "stationCode": "meilan",
            "match": "ml|meilan",
            "stationName": "美兰",
            "hot": 355960,
            "priority": 1
        },
        {
            "stationCode": "menyuan",
            "match": "my|menyuan",
            "stationName": "门源",
            "hot": 349754,
            "priority": 1
        },
        {
            "stationCode": "mile",
            "match": "ml|mile",
            "stationName": "弥勒",
            "hot": 326503,
            "priority": 0
        },
        {
            "stationCode": "maomingxi",
            "match": "mmx|maomingxi",
            "stationName": "茂名西",
            "hot": 292870,
            "priority": 0
        },
        {
            "stationCode": "manzhouli",
            "match": "mzl|manzhouli",
            "stationName": "满洲里",
            "hot": 280731,
            "priority": 10
        },
        {
            "stationCode": "mizhi",
            "match": "mz|mizhi",
            "stationName": "米脂",
            "hot": 264706,
            "priority": 1
        },
        {
            "stationCode": "meishandong",
            "match": "msd|meishandong",
            "stationName": "眉山东",
            "hot": 261029,
            "priority": 1
        },
        {
            "stationCode": "mingzhu",
            "match": "mz|mingzhu",
            "stationName": "明珠",
            "hot": 244747,
            "priority": 1
        },
        {
            "stationCode": "minqingbei",
            "match": "minqingbei|mqb",
            "stationName": "闽清北",
            "hot": 206789,
            "priority": 1
        },
        {
            "stationCode": "mengzi",
            "match": "mz|mengzi",
            "stationName": "蒙自",
            "hot": 185592,
            "priority": 1
        },
        {
            "stationCode": "mishan",
            "match": "ms|mishan",
            "stationName": "密山",
            "hot": 178209,
            "priority": 1
        },
        {
            "stationCode": "muping",
            "match": "mp|muping",
            "stationName": "牟平",
            "hot": 167637,
            "priority": 1
        },
        {
            "stationCode": "mianchinan",
            "match": "mcn|mianchinan",
            "stationName": "渑池南",
            "hot": 161620,
            "priority": 1
        },
        {
            "stationCode": "mengzibei",
            "match": "mzb|mengzibei",
            "stationName": "蒙自北",
            "hot": 142217,
            "priority": 1
        },
        {
            "stationCode": "mayang",
            "match": "my|mayang",
            "stationName": "麻阳",
            "hot": 130197,
            "priority": 1
        },
        {
            "stationCode": "mawei",
            "match": "mw|mawei",
            "stationName": "麻尾",
            "hot": 116794,
            "priority": 1
        },
        {
            "stationCode": "miaoshan",
            "match": "ms|miaoshan",
            "stationName": "庙山",
            "hot": 115111,
            "priority": 0
        },
        {
            "stationCode": "minhenan",
            "match": "mhn|minhenan",
            "stationName": "民和南",
            "hot": 112233,
            "priority": 1
        },
        {
            "stationCode": "miyi",
            "match": "my|miyi",
            "stationName": "米易",
            "hot": 106335,
            "priority": 1
        },
        {
            "stationCode": "maoershan",
            "match": "mes|maoershan",
            "stationName": "帽儿山",
            "hot": 99136,
            "priority": 1
        },
        {
            "stationCode": "muling",
            "match": "ml|muling",
            "stationName": "穆棱",
            "hot": 97067,
            "priority": 1
        },
        {
            "stationCode": "malan",
            "match": "ml|malan",
            "stationName": "马兰",
            "hot": 92834,
            "priority": 1
        },
        {
            "stationCode": "minle",
            "match": "ml|minle",
            "stationName": "民乐",
            "hot": 91845,
            "priority": 1
        },
        {
            "stationCode": "minggangdong",
            "match": "mgd|minggangdong",
            "stationName": "明港东",
            "hot": 88920,
            "priority": 1
        },
        {
            "stationCode": "miyunbei",
            "match": "myb|miyunbei",
            "stationName": "密云北",
            "hot": 88698,
            "priority": 1
        },
        {
            "stationCode": "mohe",
            "match": "mh|mohe",
            "stationName": "漠河",
            "hot": 79580,
            "priority": 10
        },
        {
            "stationCode": "mianxian",
            "match": "mx|mianxian",
            "stationName": "勉县",
            "hot": 69357,
            "priority": 1
        },
        {
            "stationCode": "manasi",
            "match": "mns|manasihu",
            "stationName": "玛纳斯",
            "hot": 59979,
            "priority": 1
        },
        {
            "stationCode": "minji",
            "match": "mj|minji",
            "stationName": "闵集",
            "hot": 59961,
            "priority": 0
        },
        {
            "stationCode": "minxian",
            "match": "mx|minxian",
            "stationName": "岷县",
            "hot": 56787,
            "priority": 0
        },
        {
            "stationCode": "masanjia",
            "match": "msj|masanjia",
            "stationName": "马三家",
            "hot": 50716,
            "priority": 1
        },
        {
            "stationCode": "mengjiagang",
            "match": "mjg|mengjiagang",
            "stationName": "孟家岗",
            "hot": 49970,
            "priority": 1
        },
        {
            "stationCode": "maolin",
            "match": "ml|maolin",
            "stationName": "茂林",
            "hot": 46131,
            "priority": 1
        },
        {
            "stationCode": "mianduhe",
            "match": "mdh|mianduhe",
            "stationName": "免渡河",
            "hot": 45281,
            "priority": 1
        },
        {
            "stationCode": "mianning",
            "match": "mn|mianning",
            "stationName": "冕宁",
            "hot": 43769,
            "priority": 1
        },
        {
            "stationCode": "mingcheng",
            "match": "mc|mingcheng",
            "stationName": "明城",
            "hot": 41552,
            "priority": 1
        },
        {
            "stationCode": "maochen",
            "match": "mc|maochen",
            "stationName": "毛陈",
            "hot": 33440,
            "priority": 0
        },
        {
            "stationCode": "meixi",
            "match": "mx|meixi",
            "stationName": "美溪",
            "hot": 33339,
            "priority": 1
        },
        {
            "stationCode": "mulitu",
            "match": "mlt|mulitu",
            "stationName": "木里图",
            "hot": 32714,
            "priority": 1
        },
        {
            "stationCode": "moyu",
            "match": "my|moyu",
            "stationName": "墨玉",
            "hot": 29992,
            "priority": 1
        },
        {
            "stationCode": "minggang",
            "match": "mg|minggang",
            "stationName": "明港",
            "hot": 26166,
            "priority": 1
        },
        {
            "stationCode": "modaoshi",
            "match": "mds|modaoshi",
            "stationName": "磨刀石",
            "hot": 24976,
            "priority": 1
        },
        {
            "stationCode": "mashan",
            "match": "ms|mashan",
            "stationName": "麻山",
            "hot": 20741,
            "priority": 1
        },
        {
            "stationCode": "muyun",
            "match": "my|muyun",
            "stationName": "暮云",
            "hot": 19932,
            "priority": 0
        },
        {
            "stationCode": "minqing",
            "match": "mq|minqing",
            "stationName": "闽清",
            "hot": 18412,
            "priority": 1
        },
        {
            "stationCode": "mishazi",
            "match": "msz|mishazi",
            "stationName": "米沙子",
            "hot": 16729,
            "priority": 1
        },
        {
            "stationCode": "malianhe",
            "match": "mlh|malianhe",
            "stationName": "马莲河",
            "hot": 15789,
            "priority": 1
        },
        {
            "stationCode": "mengdonghe",
            "match": "mdh|mengdonghe",
            "stationName": "猛洞河",
            "hot": 9822,
            "priority": 1
        },
        {
            "stationCode": "miaoling",
            "match": "ml|miaoling",
            "stationName": "庙岭",
            "hot": 9108,
            "priority": 1
        },
        {
            "stationCode": "midu",
            "match": "md|midu",
            "stationName": "弥渡",
            "hot": 9051,
            "priority": 1
        },
        {
            "stationCode": "mupang",
            "match": "mp|mupang",
            "stationName": "沐滂",
            "hot": 8961,
            "priority": 1
        },
        {
            "stationCode": "mangui",
            "match": "mg|mangui",
            "stationName": "满归",
            "hot": 8552,
            "priority": 1
        },
        {
            "stationCode": "malin",
            "match": "ml|malin",
            "stationName": "马林",
            "hot": 7733,
            "priority": 1
        },
        {
            "stationCode": "mengzhuang",
            "match": "mz|mengzhuang",
            "stationName": "孟庄",
            "hot": 7413,
            "priority": 1
        },
        {
            "stationCode": "malong",
            "match": "ml|malong",
            "stationName": "马龙",
            "hot": 7353,
            "priority": 1
        },
        {
            "stationCode": "mordaga",
            "match": "medg|moerdaoga",
            "stationName": "莫尔道嘎",
            "hot": 6555,
            "priority": 1
        },
        {
            "stationCode": "mingshuihe",
            "match": "msh|mingshuihe",
            "stationName": "明水河",
            "hot": 4827,
            "priority": 1
        },
        {
            "stationCode": "maocaoping",
            "match": "mcp|maocaoping",
            "stationName": "茅草坪",
            "hot": 4632,
            "priority": 1
        },
        {
            "stationCode": "miaozhuang",
            "match": "mz|miaozhuang",
            "stationName": "庙庄",
            "hot": 4461,
            "priority": 1
        },
        {
            "stationCode": "miaocheng",
            "match": "mc|miaocheng",
            "stationName": "庙城",
            "hot": 3984,
            "priority": 1
        },
        {
            "stationCode": "maoshezu",
            "match": "msz|maoshezu",
            "stationName": "茂舍祖",
            "hot": 3390,
            "priority": 1
        },
        {
            "stationCode": "maobaguan",
            "match": "mbg|maobaguan",
            "stationName": "毛坝关",
            "hot": 1916,
            "priority": 1
        },
        {
            "stationCode": "maoba",
            "match": "mb|maoba",
            "stationName": "毛坝",
            "hot": 1763,
            "priority": 1
        },
        {
            "stationCode": "maqiaohe",
            "match": "mqh|maqiaohe",
            "stationName": "马桥河",
            "hot": 374,
            "priority": 1
        },
        {
            "stationCode": "mahuang",
            "match": "mh|mahuang",
            "stationName": "马皇",
            "hot": 175,
            "priority": 1
        },
        {
            "stationCode": "manshuiwan",
            "match": "msw|manshuiwan",
            "stationName": "漫水湾",
            "hot": 99,
            "priority": 1
        },
        {
            "stationCode": "manasihu",
            "match": "mnsh|manasihu",
            "stationName": "玛纳斯湖",
            "hot": 47,
            "priority": 1
        },
        {
            "stationCode": "maiyuan",
            "match": "my|maiyuan",
            "stationName": "麦园",
            "hot": 28,
            "priority": 1
        },
        {
            "stationCode": "maoling",
            "match": "ml|maoling",
            "stationName": "茅岭",
            "hot": 14,
            "priority": 1
        }
    ],
    "N": [
        {
            "stationCode": "nanjing",
            "match": "nj|nanjing",
            "stationName": "南京",
            "hot": 16922542,
            "priority": 47
        },
        {
            "stationCode": "nanchang",
            "match": "nc|nanchang",
            "stationName": "南昌",
            "hot": 14400448,
            "priority": 26
        },
        {
            "stationCode": "nanning",
            "match": "nn|nanning",
            "stationName": "南宁",
            "hot": 11359509,
            "priority": 26
        },
        {
            "stationCode": "nanjingnan",
            "match": "njn|nanjingnan",
            "stationName": "南京南",
            "hot": 9564749,
            "priority": 1
        },
        {
            "stationCode": "ningbo",
            "match": "nb|ningbo",
            "stationName": "宁波",
            "hot": 9120426,
            "priority": 1
        },
        {
            "stationCode": "nanchangxi",
            "match": "ncx|nanchangxi",
            "stationName": "南昌西",
            "hot": 7888913,
            "priority": 1
        },
        {
            "stationCode": "nanningdong",
            "match": "nnd|nanningdong",
            "stationName": "南宁东",
            "hot": 5571618,
            "priority": 1
        },
        {
            "stationCode": "nanchong",
            "match": "nc|nanchong",
            "stationName": "南充",
            "hot": 2871004,
            "priority": 10
        },
        {
            "stationCode": "nantong",
            "match": "nt|nantong",
            "stationName": "南通",
            "hot": 2771413,
            "priority": 10
        },
        {
            "stationCode": "nanyang",
            "match": "ny|nanyang",
            "stationName": "南阳",
            "hot": 2758528,
            "priority": 10
        },
        {
            "stationCode": "ningde",
            "match": "nd|ningde",
            "stationName": "宁德",
            "hot": 1501190,
            "priority": 1
        },
        {
            "stationCode": "neijiang",
            "match": "nj|neijiang",
            "stationName": "内江",
            "hot": 918776,
            "priority": 1
        },
        {
            "stationCode": "nanpingbei",
            "match": "nanpingbei|npb",
            "stationName": "南平北",
            "hot": 848130,
            "priority": 1
        },
        {
            "stationCode": "ninghai",
            "match": "nh|ninghai",
            "stationName": "宁海",
            "hot": 746008,
            "priority": 1
        },
        {
            "stationCode": "nanping",
            "match": "np|nanping",
            "stationName": "南平",
            "hot": 742481,
            "priority": 10
        },
        {
            "stationCode": "nanjiangkou",
            "match": "njk|nanjiangkou",
            "stationName": "南江口",
            "hot": 545894,
            "priority": 1
        },
        {
            "stationCode": "neijiangbei",
            "match": "njb|neijiangbei",
            "stationName": "内江北",
            "hot": 525223,
            "priority": 1
        },
        {
            "stationCode": "nanbu",
            "match": "nb|nanbu",
            "stationName": "南部",
            "hot": 477125,
            "priority": 1
        },
        {
            "stationCode": "nanchongbei",
            "match": "ncb|nanchongbei",
            "stationName": "南充北",
            "hot": 468309,
            "priority": 1
        },
        {
            "stationCode": "nehe",
            "match": "nh|nehe",
            "stationName": "讷河",
            "hot": 458058,
            "priority": 1
        },
        {
            "stationCode": "nancheng",
            "match": "nc|nancheng",
            "stationName": "南城",
            "hot": 442221,
            "priority": 1
        },
        {
            "stationCode": "naqu",
            "match": "nq|naqu",
            "stationName": "那曲",
            "hot": 438482,
            "priority": 1
        },
        {
            "stationCode": "nanfeng",
            "match": "nf|nanfeng",
            "stationName": "南丰",
            "hot": 426064,
            "priority": 1
        },
        {
            "stationCode": "nenjiang",
            "match": "nj|nenjiang",
            "stationName": "嫩江",
            "hot": 342700,
            "priority": 1
        },
        {
            "stationCode": "nanjing1",
            "match": "nj|nanjing",
            "stationName": "南靖",
            "hot": 336269,
            "priority": 1
        },
        {
            "stationCode": "nancha",
            "match": "nc|nancha",
            "stationName": "南岔",
            "hot": 328417,
            "priority": 1
        },
        {
            "stationCode": "nanzhao",
            "match": "nz|nanzhao",
            "stationName": "南召",
            "hot": 311529,
            "priority": 1
        },
        {
            "stationCode": "nantou",
            "match": "nt|nantou",
            "stationName": "南头",
            "hot": 305836,
            "priority": 1
        },
        {
            "stationCode": "ningwu",
            "match": "nw|ningwu",
            "stationName": "宁武",
            "hot": 257137,
            "priority": 1
        },
        {
            "stationCode": "nanxiong",
            "match": "nx|nanxiong",
            "stationName": "南雄",
            "hot": 238630,
            "priority": 1
        },
        {
            "stationCode": "neixiang",
            "match": "nx|neixiang",
            "stationName": "内乡",
            "hot": 233012,
            "priority": 1
        },
        {
            "stationCode": "nanling",
            "match": "nanling|nl",
            "stationName": "南陵",
            "hot": 232836,
            "priority": 1
        },
        {
            "stationCode": "ninglingxian",
            "match": "nlx|ninglingxian",
            "stationName": "宁陵县",
            "hot": 219889,
            "priority": 1
        },
        {
            "stationCode": "naiman",
            "match": "nm|naiman",
            "stationName": "奈曼",
            "hot": 172564,
            "priority": 1
        },
        {
            "stationCode": "nanningxi",
            "match": "nnx|nanningxi",
            "stationName": "南宁西",
            "hot": 162397,
            "priority": 1
        },
        {
            "stationCode": "ningbodong",
            "match": "nbd|ningbodong",
            "stationName": "宁波东",
            "hot": 156251,
            "priority": 0
        },
        {
            "stationCode": "nandan",
            "match": "nd|nandan",
            "stationName": "南丹",
            "hot": 151622,
            "priority": 1
        },
        {
            "stationCode": "nanpingnan",
            "match": "npn|nanpingnan",
            "stationName": "南平南",
            "hot": 148374,
            "priority": 1
        },
        {
            "stationCode": "nianzishan",
            "match": "nzs|nianzishan",
            "stationName": "碾子山",
            "hot": 123334,
            "priority": 1
        },
        {
            "stationCode": "nanlang",
            "match": "nl|nanlang",
            "stationName": "南朗",
            "hot": 121647,
            "priority": 1
        },
        {
            "stationCode": "nongan",
            "match": "na|nongan",
            "stationName": "农安",
            "hot": 114496,
            "priority": 1
        },
        {
            "stationCode": "ningan",
            "match": "na|ningan",
            "stationName": "宁安",
            "hot": 98982,
            "priority": 1
        },
        {
            "stationCode": "ningguo",
            "match": "ng|ningguo",
            "stationName": "宁国",
            "hot": 94315,
            "priority": 1
        },
        {
            "stationCode": "ningxiang",
            "match": "nx|ningxiang",
            "stationName": "宁乡",
            "hot": 71136,
            "priority": 1
        },
        {
            "stationCode": "nileke",
            "match": "nlk|nileke",
            "stationName": "尼勒克",
            "hot": 69055,
            "priority": 1
        },
        {
            "stationCode": "ningdong",
            "match": "nd|ningdong",
            "stationName": "宁东",
            "hot": 62436,
            "priority": 1
        },
        {
            "stationCode": "ningming",
            "match": "nm|ningming",
            "stationName": "宁明",
            "hot": 57749,
            "priority": 1
        },
        {
            "stationCode": "nanzamu",
            "match": "nzm|nanzamu",
            "stationName": "南杂木",
            "hot": 55614,
            "priority": 1
        },
        {
            "stationCode": "nanfenbei",
            "match": "nfb|nanfenbei",
            "stationName": "南芬北",
            "hot": 53710,
            "priority": 1
        },
        {
            "stationCode": "nanhudong",
            "match": "nhd|nanhudong",
            "stationName": "南湖东",
            "hot": 53134,
            "priority": 0
        },
        {
            "stationCode": "nangongdong",
            "match": "ngd|nangongdong",
            "stationName": "南宫东",
            "hot": 48805,
            "priority": 1
        },
        {
            "stationCode": "nanfen",
            "match": "nf|nanfen",
            "stationName": "南芬",
            "hot": 48426,
            "priority": 1
        },
        {
            "stationCode": "nayong",
            "match": "nayong|ny",
            "stationName": "纳雍",
            "hot": 43822,
            "priority": 1
        },
        {
            "stationCode": "niangziguan",
            "match": "nzg|niangziguan",
            "stationName": "娘子关",
            "hot": 41052,
            "priority": 1
        },
        {
            "stationCode": "nankou",
            "match": "nk|nankou",
            "stationName": "南口",
            "hot": 39827,
            "priority": 1
        },
        {
            "stationCode": "niujia",
            "match": "nj|niujia",
            "stationName": "牛家",
            "hot": 38325,
            "priority": 1
        },
        {
            "stationCode": "nankouqian",
            "match": "nkq|nankouqian",
            "stationName": "南口前",
            "hot": 30220,
            "priority": 1
        },
        {
            "stationCode": "nanxiangbei",
            "match": "nxb|nanxiangbei",
            "stationName": "南翔北",
            "hot": 30070,
            "priority": 1
        },
        {
            "stationCode": "nanmu",
            "match": "nm|nanmu",
            "stationName": "南木",
            "hot": 25300,
            "priority": 1
        },
        {
            "stationCode": "nanyangzhai",
            "match": "nanyangzhai|nyz",
            "stationName": "南阳寨",
            "hot": 22071,
            "priority": 1
        },
        {
            "stationCode": "nanyu",
            "match": "ny|nanyu",
            "stationName": "南峪",
            "hot": 18306,
            "priority": 1
        },
        {
            "stationCode": "nanhua",
            "match": "nh|nanhua",
            "stationName": "南华",
            "hot": 14786,
            "priority": 1
        },
        {
            "stationCode": "nengjia",
            "match": "nj|nengjia",
            "stationName": "能家",
            "hot": 14578,
            "priority": 1
        },
        {
            "stationCode": "nimu",
            "match": "nm|nimu",
            "stationName": "尼木",
            "hot": 13251,
            "priority": 1
        },
        {
            "stationCode": "nailin",
            "match": "nl|nailin",
            "stationName": "乃林",
            "hot": 11189,
            "priority": 1
        },
        {
            "stationCode": "ningdongnan",
            "match": "ndn|ningdongnan",
            "stationName": "宁东南",
            "hot": 9235,
            "priority": 1
        },
        {
            "stationCode": "nancao",
            "match": "nc|nancao",
            "stationName": "南曹",
            "hot": 8134,
            "priority": 1
        },
        {
            "stationCode": "nanhechuan",
            "match": "nhc|nanhechuan",
            "stationName": "南河川",
            "hot": 6472,
            "priority": 1
        },
        {
            "stationCode": "nanjiang",
            "match": "nj|nanjiang",
            "stationName": "南江",
            "hot": 6104,
            "priority": 1
        },
        {
            "stationCode": "nanchou",
            "match": "nc|nanchou",
            "stationName": "南仇",
            "hot": 4594,
            "priority": 1
        },
        {
            "stationCode": "nanchengsi",
            "match": "ncs|nanchengsi",
            "stationName": "南城司",
            "hot": 4017,
            "priority": 1
        },
        {
            "stationCode": "nanboshan",
            "match": "nbs|nanboshan",
            "stationName": "南博山",
            "hot": 3951,
            "priority": 1
        },
        {
            "stationCode": "nanguancun",
            "match": "ngc|nanguancun",
            "stationName": "南观村",
            "hot": 3656,
            "priority": 1
        },
        {
            "stationCode": "nanwanzi",
            "match": "nwz|nanwanzi",
            "stationName": "南湾子",
            "hot": 3606,
            "priority": 1
        },
        {
            "stationCode": "nuanquan",
            "match": "nq|nuanquan",
            "stationName": "暖泉",
            "hot": 3527,
            "priority": 1
        },
        {
            "stationCode": "nandamiao",
            "match": "ndm|nandamiao",
            "stationName": "南大庙",
            "hot": 2943,
            "priority": 1
        },
        {
            "stationCode": "nanqiao",
            "match": "nq|nanqiao",
            "stationName": "南桥",
            "hot": 2135,
            "priority": 1
        },
        {
            "stationCode": "niuxintai",
            "match": "nxt|niuxintai",
            "stationName": "牛心台",
            "hot": 756,
            "priority": 1
        },
        {
            "stationCode": "napu",
            "match": "np|napu",
            "stationName": "那铺",
            "hot": 471,
            "priority": 1
        },
        {
            "stationCode": "naluo",
            "match": "nl|naluo",
            "stationName": "那罗",
            "hot": 352,
            "priority": 1
        },
        {
            "stationCode": "nanguanling",
            "match": "ngl|nanguanling",
            "stationName": "南关岭",
            "hot": 260,
            "priority": 1
        },
        {
            "stationCode": "ningjia",
            "match": "nj|ningjia",
            "stationName": "宁家",
            "hot": 196,
            "priority": 1
        },
        {
            "stationCode": "nantai",
            "match": "nt|nantai",
            "stationName": "南台",
            "hot": 124,
            "priority": 1
        },
        {
            "stationCode": "ningcun",
            "match": "nc|ningcun",
            "stationName": "宁村",
            "hot": 83,
            "priority": 1
        },
        {
            "stationCode": "nihezi",
            "match": "nhz|nihezi",
            "stationName": "泥河子",
            "hot": 48,
            "priority": 1
        }
    ],
    "O": [],
    "P": [
        {
            "stationCode": "putian",
            "match": "pt|putian",
            "stationName": "莆田",
            "hot": 4372651,
            "priority": 1
        },
        {
            "stationCode": "puning",
            "match": "pn|puning",
            "stationName": "普宁",
            "hot": 2765694,
            "priority": 0
        },
        {
            "stationCode": "pingxiang1",
            "match": "px|pingxiang",
            "stationName": "萍乡",
            "hot": 2447820,
            "priority": 1
        },
        {
            "stationCode": "panjin",
            "match": "pj|panjin",
            "stationName": "盘锦",
            "hot": 1855341,
            "priority": 1
        },
        {
            "stationCode": "pingnannan",
            "match": "pnn|pingnannan",
            "stationName": "平南南",
            "hot": 1777022,
            "priority": 1
        },
        {
            "stationCode": "pingxiangbei",
            "match": "pxb|pingxiangbei",
            "stationName": "萍乡北",
            "hot": 1536537,
            "priority": 1
        },
        {
            "stationCode": "pingdingshan",
            "match": "pds|pingdingshan",
            "stationName": "平顶山",
            "hot": 1075481,
            "priority": 1
        },
        {
            "stationCode": "pingdingshanxi",
            "match": "pdsx|pingdingshanxi",
            "stationName": "平顶山西",
            "hot": 751417,
            "priority": 1
        },
        {
            "stationCode": "pizhou",
            "match": "pz|pizhou",
            "stationName": "邳州",
            "hot": 685491,
            "priority": 1
        },
        {
            "stationCode": "panzhihua",
            "match": "pzh|panzhihua",
            "stationName": "攀枝花",
            "hot": 680036,
            "priority": 10
        },
        {
            "stationCode": "pingguo",
            "match": "pg|pingguo",
            "stationName": "平果",
            "hot": 657886,
            "priority": 1
        },
        {
            "stationCode": "panjinbei",
            "match": "pjb|panjinbei",
            "stationName": "盘锦北",
            "hot": 637370,
            "priority": 1
        },
        {
            "stationCode": "pingyao",
            "match": "py|pingyao",
            "stationName": "平遥",
            "hot": 626159,
            "priority": 1
        },
        {
            "stationCode": "puchengdong",
            "match": "pcd|puchengdong",
            "stationName": "蒲城东",
            "hot": 599067,
            "priority": 1
        },
        {
            "stationCode": "pingliang",
            "match": "pl|pingliang",
            "stationName": "平凉",
            "hot": 569855,
            "priority": 1
        },
        {
            "stationCode": "pulandian",
            "match": "pld|pulandian",
            "stationName": "普兰店",
            "hot": 476146,
            "priority": 1
        },
        {
            "stationCode": "pingshi",
            "match": "ps|pingshi",
            "stationName": "坪石",
            "hot": 421874,
            "priority": 1
        },
        {
            "stationCode": "panzhou",
            "match": "pz|panzhou",
            "stationName": "盘州",
            "hot": 417751,
            "priority": 0
        },
        {
            "stationCode": "pingyaogucheng",
            "match": "pygc|pingyaogucheng",
            "stationName": "平遥古城",
            "hot": 415705,
            "priority": 0
        },
        {
            "stationCode": "pengan",
            "match": "pa|pengan",
            "stationName": "蓬安",
            "hot": 400910,
            "priority": 1
        },
        {
            "stationCode": "pingyi",
            "match": "py|pingyi",
            "stationName": "平邑",
            "hot": 360956,
            "priority": 1
        },
        {
            "stationCode": "puzhehei",
            "match": "pzh|puzhehei",
            "stationName": "普者黑",
            "hot": 316614,
            "priority": 0
        },
        {
            "stationCode": "pengshui",
            "match": "ps|pengshui",
            "stationName": "彭水",
            "hot": 299256,
            "priority": 1
        },
        {
            "stationCode": "pingyuan",
            "match": "py|pingyuan",
            "stationName": "平原",
            "hot": 250592,
            "priority": 1
        },
        {
            "stationCode": "puyang",
            "match": "py|puyang",
            "stationName": "濮阳",
            "hot": 228648,
            "priority": 1
        },
        {
            "stationCode": "panshi",
            "match": "ps|panshi",
            "stationName": "磐石",
            "hot": 159603,
            "priority": 1
        },
        {
            "stationCode": "pingchang",
            "match": "pc|pingchang",
            "stationName": "平昌",
            "hot": 153781,
            "priority": 1
        },
        {
            "stationCode": "puxiong",
            "match": "px|puxiong",
            "stationName": "普雄",
            "hot": 152097,
            "priority": 1
        },
        {
            "stationCode": "pengshanbei",
            "match": "psb|pengshanbei",
            "stationName": "彭山北",
            "hot": 130168,
            "priority": 1
        },
        {
            "stationCode": "pucheng",
            "match": "pc|pucheng",
            "stationName": "蒲城",
            "hot": 128726,
            "priority": 1
        },
        {
            "stationCode": "puanxian",
            "match": "pax|puanxian",
            "stationName": "普安县",
            "hot": 128667,
            "priority": 0
        },
        {
            "stationCode": "puwan",
            "match": "pw|puwan",
            "stationName": "普湾",
            "hot": 126193,
            "priority": 1
        },
        {
            "stationCode": "pinghu",
            "match": "ph|pinghu",
            "stationName": "平湖",
            "hot": 124363,
            "priority": 0
        },
        {
            "stationCode": "pingbanan",
            "match": "pbn|pingbanan",
            "stationName": "平坝南",
            "hot": 120030,
            "priority": 0
        },
        {
            "stationCode": "pengze",
            "match": "pz|pengze",
            "stationName": "彭泽",
            "hot": 100003,
            "priority": 1
        },
        {
            "stationCode": "pinganyi",
            "match": "pay|pinganyi",
            "stationName": "平安驿",
            "hot": 99079,
            "priority": 1
        },
        {
            "stationCode": "pikou",
            "match": "pk|pikou",
            "stationName": "皮口",
            "hot": 83275,
            "priority": 1
        },
        {
            "stationCode": "pingquan",
            "match": "pq|pingquan",
            "stationName": "平泉",
            "hot": 74129,
            "priority": 1
        },
        {
            "stationCode": "pingzhuang",
            "match": "pz|pingzhuang",
            "stationName": "平庄",
            "hot": 66412,
            "priority": 1
        },
        {
            "stationCode": "pixianxi",
            "match": "pxx|pixianxi",
            "stationName": "郫县西",
            "hot": 63254,
            "priority": 1
        },
        {
            "stationCode": "pingshang",
            "match": "pingshang|ps",
            "stationName": "坪上",
            "hot": 61787,
            "priority": 1
        },
        {
            "stationCode": "puan",
            "match": "pa|puan",
            "stationName": "普安",
            "hot": 61776,
            "priority": 0
        },
        {
            "stationCode": "pingfang1",
            "match": "pf|pingfang",
            "stationName": "平房",
            "hot": 58962,
            "priority": 1
        },
        {
            "stationCode": "pishan",
            "match": "ps|pishan",
            "stationName": "皮山",
            "hot": 58331,
            "priority": 1
        },
        {
            "stationCode": "pingshan",
            "match": "ps|pingshan",
            "stationName": "平山",
            "hot": 56165,
            "priority": 1
        },
        {
            "stationCode": "puding",
            "match": "pd1|puding",
            "stationName": "普定",
            "hot": 48620,
            "priority": 1
        },
        {
            "stationCode": "pengshan",
            "match": "ps|pengshan",
            "stationName": "彭山",
            "hot": 47267,
            "priority": 1
        },
        {
            "stationCode": "pingbian",
            "match": "pb|pingbian",
            "stationName": "屏边",
            "hot": 46809,
            "priority": 0
        },
        {
            "stationCode": "paozi",
            "match": "pz|paozi",
            "stationName": "泡子",
            "hot": 44161,
            "priority": 1
        },
        {
            "stationCode": "pingxiang",
            "match": "px|pingxiang",
            "stationName": "凭祥",
            "hot": 43806,
            "priority": 1
        },
        {
            "stationCode": "pixian",
            "match": "px|pixian",
            "stationName": "郫县",
            "hot": 38759,
            "priority": 1
        },
        {
            "stationCode": "pingshe",
            "match": "ps|pingshe",
            "stationName": "平社",
            "hot": 31764,
            "priority": 1
        },
        {
            "stationCode": "pingdu",
            "match": "pd|pingdu",
            "stationName": "平度",
            "hot": 28625,
            "priority": 1
        },
        {
            "stationCode": "panguan",
            "match": "pg|panguan",
            "stationName": "盘关",
            "hot": 22183,
            "priority": 1
        },
        {
            "stationCode": "pengzhou",
            "match": "pz|pengzhou",
            "stationName": "彭州",
            "hot": 21885,
            "priority": 1
        },
        {
            "stationCode": "pingwang",
            "match": "pw|pingwang",
            "stationName": "平旺",
            "hot": 21349,
            "priority": 1
        },
        {
            "stationCode": "pingliangnan",
            "match": "pln|pingliangnan",
            "stationName": "平凉南",
            "hot": 19878,
            "priority": 1
        },
        {
            "stationCode": "peide",
            "match": "pd|peide",
            "stationName": "裴德",
            "hot": 18518,
            "priority": 1
        },
        {
            "stationCode": "pingyang",
            "match": "py|pingyang",
            "stationName": "平洋",
            "hot": 15232,
            "priority": 1
        },
        {
            "stationCode": "pingan",
            "match": "pa|pingan",
            "stationName": "平安",
            "hot": 14636,
            "priority": 1
        },
        {
            "stationCode": "pananzhen",
            "match": "paz|pananzhen",
            "stationName": "磐安镇",
            "hot": 10179,
            "priority": 1
        },
        {
            "stationCode": "pingzhuangnan",
            "match": "pzn|pingzhuangnan",
            "stationName": "平庄南",
            "hot": 9315,
            "priority": 1
        },
        {
            "stationCode": "podixia",
            "match": "pdx|podixia",
            "stationName": "坡底下",
            "hot": 8906,
            "priority": 1
        },
        {
            "stationCode": "pengyang",
            "match": "py|pengyang",
            "stationName": "彭阳",
            "hot": 7801,
            "priority": 1
        },
        {
            "stationCode": "pingguan",
            "match": "pg|pingguan",
            "stationName": "平关",
            "hot": 7405,
            "priority": 1
        },
        {
            "stationCode": "pingyuanpu",
            "match": "pyp|pingyuanpu",
            "stationName": "平原堡",
            "hot": 6966,
            "priority": 1
        },
        {
            "stationCode": "pinghekou",
            "match": "phk|pinghekou",
            "stationName": "平河口",
            "hot": 5680,
            "priority": 1
        },
        {
            "stationCode": "piaoertun",
            "match": "pet|piaoertun",
            "stationName": "瓢儿屯",
            "hot": 5496,
            "priority": 1
        },
        {
            "stationCode": "pingxingguan",
            "match": "pxg|pingxingguan",
            "stationName": "平型关",
            "hot": 4863,
            "priority": 1
        },
        {
            "stationCode": "pingtian",
            "match": "pt|pingtian",
            "stationName": "平田",
            "hot": 4606,
            "priority": 1
        },
        {
            "stationCode": "paihuibei",
            "match": "phb|paihuibei",
            "stationName": "徘徊北",
            "hot": 4587,
            "priority": 1
        },
        {
            "stationCode": "pingyu",
            "match": "py|pingyu",
            "stationName": "平峪",
            "hot": 3330,
            "priority": 1
        },
        {
            "stationCode": "pingtai",
            "match": "pt|pingtai",
            "stationName": "平台",
            "hot": 1998,
            "priority": 1
        },
        {
            "stationCode": "panjiadian",
            "match": "pjd|panjiadian",
            "stationName": "潘家店",
            "hot": 1155,
            "priority": 1
        },
        {
            "stationCode": "pikounan",
            "match": "pkn|pikounan",
            "stationName": "皮口南",
            "hot": 1155,
            "priority": 1
        },
        {
            "stationCode": "pianling",
            "match": "pl|pianling",
            "stationName": "偏岭",
            "hot": 943,
            "priority": 1
        },
        {
            "stationCode": "pinganzhen",
            "match": "paz|pinganzhen",
            "stationName": "平安镇",
            "hot": 439,
            "priority": 1
        },
        {
            "stationCode": "panlongcheng",
            "match": "plc|panlongcheng",
            "stationName": "盘龙城",
            "hot": 261,
            "priority": 0
        },
        {
            "stationCode": "pinggang",
            "match": "pg|pinggang",
            "stationName": "平岗",
            "hot": 29,
            "priority": 1
        },
        {
            "stationCode": "putaoqing",
            "match": "ptj|putaoqing",
            "stationName": "葡萄菁",
            "hot": 21,
            "priority": 1
        },
        {
            "stationCode": "piandian",
            "match": "pd|piandian",
            "stationName": "偏店",
            "hot": 19,
            "priority": 1
        }
    ],
    "Q": [
        {
            "stationCode": "qingdao",
            "match": "qd|qingdao",
            "stationName": "青岛",
            "hot": 6189632,
            "priority": 33
        },
        {
            "stationCode": "quanzhou1",
            "match": "qz|quanzhou",
            "stationName": "泉州",
            "hot": 5900392,
            "priority": 10
        },
        {
            "stationCode": "qinhuangdao",
            "match": "qhd|qinhuangdao",
            "stationName": "秦皇岛",
            "hot": 4929523,
            "priority": 10
        },
        {
            "stationCode": "quzhou",
            "match": "qz|quzhou",
            "stationName": "衢州",
            "hot": 3418206,
            "priority": 10
        },
        {
            "stationCode": "qiqihaer",
            "match": "qqhe|qiqihaer",
            "stationName": "齐齐哈尔",
            "hot": 3412309,
            "priority": 10
        },
        {
            "stationCode": "qingdaobei",
            "match": "qdb|qingdaobei",
            "stationName": "青岛北",
            "hot": 2822759,
            "priority": 0
        },
        {
            "stationCode": "qujing",
            "match": "qj|qujing",
            "stationName": "曲靖",
            "hot": 1986138,
            "priority": 1
        },
        {
            "stationCode": "qingzhoushi",
            "match": "qzs|qingzhoushi",
            "stationName": "青州市",
            "hot": 1947608,
            "priority": 1
        },
        {
            "stationCode": "qufudong",
            "match": "qfd|qufudong",
            "stationName": "曲阜东",
            "hot": 1882720,
            "priority": 1
        },
        {
            "stationCode": "qianjiang1",
            "match": "qj|qianjiang1",
            "stationName": "潜江",
            "hot": 1217136,
            "priority": 1
        },
        {
            "stationCode": "qingyuan1",
            "match": "qy|qingyuan",
            "stationName": "清远",
            "hot": 1168780,
            "priority": 1
        },
        {
            "stationCode": "qidong",
            "match": "qd|qidong",
            "stationName": "祁东",
            "hot": 1075820,
            "priority": 0
        },
        {
            "stationCode": "qiyang",
            "match": "qy|qiyang",
            "stationName": "祁阳",
            "hot": 1071116,
            "priority": 0
        },
        {
            "stationCode": "qufu",
            "match": "qf|qufu",
            "stationName": "曲阜",
            "hot": 1034819,
            "priority": 1
        },
        {
            "stationCode": "quanjiao",
            "match": "qj|quanjiao",
            "stationName": "全椒",
            "hot": 910551,
            "priority": 1
        },
        {
            "stationCode": "qinzhoudong",
            "match": "qzd|qinzhoudong",
            "stationName": "钦州东",
            "hot": 904061,
            "priority": 1
        },
        {
            "stationCode": "qingtian",
            "match": "qt|qingtian",
            "stationName": "青田",
            "hot": 795053,
            "priority": 1
        },
        {
            "stationCode": "quanzhounan",
            "match": "qzn|quanzhounan",
            "stationName": "全州南",
            "hot": 755192,
            "priority": 0
        },
        {
            "stationCode": "quxian",
            "match": "qx|quxian",
            "stationName": "渠县",
            "hot": 746652,
            "priority": 1
        },
        {
            "stationCode": "qinghecheng",
            "match": "qhc|qinghecheng",
            "stationName": "清河城",
            "hot": 737885,
            "priority": 1
        },
        {
            "stationCode": "qinzhou",
            "match": "qz|qinzhou",
            "stationName": "钦州",
            "hot": 619518,
            "priority": 1
        },
        {
            "stationCode": "qionghai",
            "match": "qh|qionghai",
            "stationName": "琼海",
            "hot": 607411,
            "priority": 1
        },
        {
            "stationCode": "qianjiang",
            "match": "qj|qianjiang",
            "stationName": "黔江",
            "hot": 512738,
            "priority": 10
        },
        {
            "stationCode": "qichun",
            "match": "qc|qichun",
            "stationName": "蕲春",
            "hot": 452914,
            "priority": 1
        },
        {
            "stationCode": "qingan",
            "match": "qa|qingan",
            "stationName": "庆安",
            "hot": 401669,
            "priority": 1
        },
        {
            "stationCode": "qujingbei",
            "match": "qjb|qujingbei",
            "stationName": "曲靖北",
            "hot": 322585,
            "priority": 0
        },
        {
            "stationCode": "qiqihaernan",
            "match": "qiqihaernan|qqhen",
            "stationName": "齐齐哈尔南",
            "hot": 322172,
            "priority": 1
        },
        {
            "stationCode": "qixian1",
            "match": "qx|qixian",
            "stationName": "祁县",
            "hot": 288570,
            "priority": 1
        },
        {
            "stationCode": "qingxian",
            "match": "qx|qingxian",
            "stationName": "青县",
            "hot": 271934,
            "priority": 1
        },
        {
            "stationCode": "qingjianxian",
            "match": "qjx|qingjianxian",
            "stationName": "清涧县",
            "hot": 260032,
            "priority": 1
        },
        {
            "stationCode": "qingtongxia",
            "match": "qtx|qingtongxia",
            "stationName": "青铜峡",
            "hot": 242527,
            "priority": 1
        },
        {
            "stationCode": "qitaihe",
            "match": "qth|qitaihe",
            "stationName": "七台河",
            "hot": 234563,
            "priority": 1
        },
        {
            "stationCode": "qingsheng",
            "match": "qs|qingsheng",
            "stationName": "庆盛",
            "hot": 220966,
            "priority": 1
        },
        {
            "stationCode": "qingyuan",
            "match": "qy|qingyuan",
            "stationName": "清原",
            "hot": 199535,
            "priority": 1
        },
        {
            "stationCode": "qijiang",
            "match": "qj|qijiang",
            "stationName": "綦江",
            "hot": 182652,
            "priority": 1
        },
        {
            "stationCode": "qishan1",
            "match": "qs1|qishan1",
            "stationName": "岐山",
            "hot": 179000,
            "priority": 0
        },
        {
            "stationCode": "qingbaijiangdong",
            "match": "qbjd|qingbaijiangdong",
            "stationName": "青白江东",
            "hot": 177774,
            "priority": 1
        },
        {
            "stationCode": "qixiandong",
            "match": "qxd|qixiandong",
            "stationName": "祁县东",
            "hot": 168533,
            "priority": 0
        },
        {
            "stationCode": "qiziwan",
            "match": "qzw|qiziwan",
            "stationName": "棋子湾",
            "hot": 167319,
            "priority": 1
        },
        {
            "stationCode": "qishuyan",
            "match": "qsy|qishuyan",
            "stationName": "戚墅堰",
            "hot": 166214,
            "priority": 1
        },
        {
            "stationCode": "queshan",
            "match": "qs|queshan",
            "stationName": "确山",
            "hot": 164154,
            "priority": 1
        },
        {
            "stationCode": "qidongbei",
            "match": "qdb|qidongbei",
            "stationName": "祁东北",
            "hot": 149241,
            "priority": 1
        },
        {
            "stationCode": "qingshui",
            "match": "qs|qingshui",
            "stationName": "清水",
            "hot": 136984,
            "priority": 1
        },
        {
            "stationCode": "qingchengshan",
            "match": "qcs|qingchengshan",
            "stationName": "青城山",
            "hot": 126692,
            "priority": 1
        },
        {
            "stationCode": "qiyangbei",
            "match": "qyb|qiyangbei",
            "stationName": "祁阳北",
            "hot": 119206,
            "priority": 1
        },
        {
            "stationCode": "qingshen",
            "match": "qs|qingshen",
            "stationName": "青神",
            "hot": 114172,
            "priority": 1
        },
        {
            "stationCode": "quanzhoudong",
            "match": "qzd|quanzhoudong",
            "stationName": "泉州东",
            "hot": 109311,
            "priority": 1
        },
        {
            "stationCode": "qinghemen",
            "match": "qhm|qinghemen",
            "stationName": "清河门",
            "hot": 104142,
            "priority": 1
        },
        {
            "stationCode": "qinxian",
            "match": "qx|qinxian",
            "stationName": "沁县",
            "hot": 97462,
            "priority": 1
        },
        {
            "stationCode": "qingdui",
            "match": "qd|qingdui",
            "stationName": "青堆",
            "hot": 95106,
            "priority": 1
        },
        {
            "stationCode": "qianxian",
            "match": "qx|qianxian",
            "stationName": "乾县",
            "hot": 78605,
            "priority": 1
        },
        {
            "stationCode": "qianan1",
            "match": "qa|qianan",
            "stationName": "迁安",
            "hot": 73286,
            "priority": 1
        },
        {
            "stationCode": "qianjinzhen",
            "match": "qjz|qianjinzhen",
            "stationName": "前进镇",
            "hot": 71348,
            "priority": 1
        },
        {
            "stationCode": "qianfeng",
            "match": "qf|qianfeng",
            "stationName": "前锋",
            "hot": 56760,
            "priority": 1
        },
        {
            "stationCode": "qianshan",
            "match": "qs|qianshan",
            "stationName": "前山",
            "hot": 56048,
            "priority": 1
        },
        {
            "stationCode": "qinjia",
            "match": "qj|qinjia",
            "stationName": "秦家",
            "hot": 36534,
            "priority": 1
        },
        {
            "stationCode": "qinglian",
            "match": "ql|qinglian",
            "stationName": "青莲",
            "hot": 36126,
            "priority": 1
        },
        {
            "stationCode": "qianmotou",
            "match": "qmt|qianmotou",
            "stationName": "前磨头",
            "hot": 34126,
            "priority": 1
        },
        {
            "stationCode": "qimen",
            "match": "qm|qimen",
            "stationName": "祁门",
            "hot": 33859,
            "priority": 1
        },
        {
            "stationCode": "qingshuibei",
            "match": "qsb|qingshuibei",
            "stationName": "清水北",
            "hot": 32417,
            "priority": 1
        },
        {
            "stationCode": "qingxu",
            "match": "qx|qingxu",
            "stationName": "清徐",
            "hot": 31784,
            "priority": 1
        },
        {
            "stationCode": "qujiu",
            "match": "qj|qujiu",
            "stationName": "渠旧",
            "hot": 28218,
            "priority": 1
        },
        {
            "stationCode": "qingshan",
            "match": "qs|qingshan",
            "stationName": "青山",
            "hot": 27961,
            "priority": 1
        },
        {
            "stationCode": "qinling",
            "match": "ql|qinling",
            "stationName": "秦岭",
            "hot": 25332,
            "priority": 1
        },
        {
            "stationCode": "qinyang",
            "match": "qy|qinyang",
            "stationName": "沁阳",
            "hot": 23156,
            "priority": 1
        },
        {
            "stationCode": "qianan",
            "match": "qa|qianan",
            "stationName": "乾安",
            "hot": 21836,
            "priority": 1
        },
        {
            "stationCode": "qinghe",
            "match": "qh|qinghe",
            "stationName": "清河",
            "hot": 20207,
            "priority": 1
        },
        {
            "stationCode": "qinglongshan",
            "match": "qls|qinglongshan",
            "stationName": "青龙山",
            "hot": 19984,
            "priority": 1
        },
        {
            "stationCode": "qushuixian",
            "match": "qsx|qushuixian",
            "stationName": "曲水县",
            "hot": 19513,
            "priority": 0
        },
        {
            "stationCode": "qixiaying",
            "match": "qxy|qixiaying",
            "stationName": "旗下营",
            "hot": 19240,
            "priority": 1
        },
        {
            "stationCode": "qingyangshan",
            "match": "qys|qingyangshan",
            "stationName": "庆阳山",
            "hot": 18325,
            "priority": 10
        },
        {
            "stationCode": "quli",
            "match": "ql|quli",
            "stationName": "渠黎",
            "hot": 18128,
            "priority": 1
        },
        {
            "stationCode": "quanyang",
            "match": "qy|quanyang",
            "stationName": "泉阳",
            "hot": 16226,
            "priority": 1
        },
        {
            "stationCode": "qijiapu",
            "match": "qjp|qijiapu",
            "stationName": "祁家堡",
            "hot": 13113,
            "priority": 1
        },
        {
            "stationCode": "qiaotou",
            "match": "qt|qiaotou",
            "stationName": "桥头",
            "hot": 11829,
            "priority": 1
        },
        {
            "stationCode": "qujiang",
            "match": "qj|qujiang",
            "stationName": "曲江",
            "hot": 11067,
            "priority": 1
        },
        {
            "stationCode": "qingfeng",
            "match": "qf|qingfeng",
            "stationName": "庆丰",
            "hot": 8734,
            "priority": 1
        },
        {
            "stationCode": "qiying",
            "match": "qy|qiying",
            "stationName": "七营",
            "hot": 7788,
            "priority": 1
        },
        {
            "stationCode": "qinjiazhuang",
            "match": "qjz|qinjiazhuang",
            "stationName": "秦家庄",
            "hot": 5768,
            "priority": 1
        },
        {
            "stationCode": "qianyang",
            "match": "qy|qianyang",
            "stationName": "千阳",
            "hot": 5657,
            "priority": 1
        },
        {
            "stationCode": "qidian",
            "match": "qd|qidian",
            "stationName": "七甸",
            "hot": 4902,
            "priority": 1
        },
        {
            "stationCode": "qianweitang",
            "match": "qwt|qianweitang",
            "stationName": "前苇塘",
            "hot": 4406,
            "priority": 1
        },
        {
            "stationCode": "qianhe",
            "match": "qh|qianhe",
            "stationName": "千河",
            "hot": 4129,
            "priority": 1
        },
        {
            "stationCode": "qinglong",
            "match": "qinglong|ql",
            "stationName": "青龙",
            "hot": 4103,
            "priority": 1
        },
        {
            "stationCode": "qifengta",
            "match": "qft|qifengta",
            "stationName": "奇峰塔",
            "hot": 3064,
            "priority": 1
        },
        {
            "stationCode": "qilihe",
            "match": "qlh|qilihe",
            "stationName": "七里河",
            "hot": 1357,
            "priority": 1
        },
        {
            "stationCode": "qinghuayuan",
            "match": "qhy|qinghuayuan",
            "stationName": "清华园",
            "hot": 321,
            "priority": 1
        },
        {
            "stationCode": "qiaoxi",
            "match": "qx|qiaoxi",
            "stationName": "桥西",
            "hot": 151,
            "priority": 1
        },
        {
            "stationCode": "qianwei",
            "match": "qw|qianwei",
            "stationName": "前卫",
            "hot": 59,
            "priority": 1
        }
    ],
    "R": [
        {
            "stationCode": "ruian",
            "match": "ra|ruian",
            "stationName": "瑞安",
            "hot": 1328080,
            "priority": 10
        },
        {
            "stationCode": "renqiu",
            "match": "rq|renqiu",
            "stationName": "任丘",
            "hot": 1058350,
            "priority": 1
        },
        {
            "stationCode": "rizhao",
            "match": "rz|rizhao",
            "stationName": "日照",
            "hot": 972709,
            "priority": 10
        },
        {
            "stationCode": "ruijin",
            "match": "rj|ruijin",
            "stationName": "瑞金",
            "hot": 832197,
            "priority": 1
        },
        {
            "stationCode": "raoping",
            "match": "rp|raoping",
            "stationName": "饶平",
            "hot": 656275,
            "priority": 0
        },
        {
            "stationCode": "ruzhou",
            "match": "rz|ruzhou",
            "stationName": "汝州",
            "hot": 569535,
            "priority": 1
        },
        {
            "stationCode": "ruichang",
            "match": "rc|ruichang",
            "stationName": "瑞昌",
            "hot": 514536,
            "priority": 1
        },
        {
            "stationCode": "ronggui",
            "match": "rg|ronggui",
            "stationName": "容桂",
            "hot": 440853,
            "priority": 1
        },
        {
            "stationCode": "rugao",
            "match": "rg|rugao",
            "stationName": "如皋",
            "hot": 393822,
            "priority": 10
        },
        {
            "stationCode": "rongcheng",
            "match": "rc|rongcheng",
            "stationName": "荣成",
            "hot": 350598,
            "priority": 1
        },
        {
            "stationCode": "rongchangbei",
            "match": "rcb|rongchangbei",
            "stationName": "荣昌北",
            "hot": 303308,
            "priority": 1
        },
        {
            "stationCode": "rikaze",
            "match": "rkz|rikaze",
            "stationName": "日喀则",
            "hot": 295751,
            "priority": 1
        },
        {
            "stationCode": "rushan",
            "match": "rs|rushan",
            "stationName": "乳山",
            "hot": 247804,
            "priority": 1
        },
        {
            "stationCode": "rongjiang",
            "match": "rj|rongjiang",
            "stationName": "榕江",
            "hot": 240461,
            "priority": 1
        },
        {
            "stationCode": "raoyang",
            "match": "ry|raoyang",
            "stationName": "饶阳",
            "hot": 230863,
            "priority": 1
        },
        {
            "stationCode": "rongshui",
            "match": "rs|rongshui",
            "stationName": "融水",
            "hot": 151289,
            "priority": 1
        },
        {
            "stationCode": "rongan",
            "match": "ra|rongan",
            "stationName": "融安",
            "hot": 109776,
            "priority": 1
        },
        {
            "stationCode": "rongxian",
            "match": "rx|rongxian",
            "stationName": "容县",
            "hot": 109334,
            "priority": 1
        },
        {
            "stationCode": "rongchang",
            "match": "rc|rongchang",
            "stationName": "荣昌",
            "hot": 108814,
            "priority": 1
        },
        {
            "stationCode": "rudong",
            "match": "rd|rudong",
            "stationName": "如东",
            "hot": 38029,
            "priority": 0
        },
        {
            "stationCode": "raoyanghe",
            "match": "ryh|raoyanghe",
            "stationName": "绕阳河",
            "hot": 14147,
            "priority": 1
        },
        {
            "stationCode": "renbu",
            "match": "rb|renbu",
            "stationName": "仁布",
            "hot": 12143,
            "priority": 1
        },
        {
            "stationCode": "reshui",
            "match": "rs|reshui",
            "stationName": "热水",
            "hot": 10800,
            "priority": 1
        },
        {
            "stationCode": "rujigou",
            "match": "rjg|rujigou",
            "stationName": "汝箕沟",
            "hot": 1214,
            "priority": 1
        },
        {
            "stationCode": "ruyang",
            "match": "ry|ruyang",
            "stationName": "汝阳",
            "hot": 732,
            "priority": 10
        }
    ],
    "S": [
        {
            "stationCode": "shanghai",
            "match": "sh|shanghai",
            "stationName": "上海",
            "hot": 45316345,
            "priority": 50
        },
        {
            "stationCode": "shenzhen",
            "match": "sz|shenzhen",
            "stationName": "深圳",
            "hot": 19033652,
            "priority": 43
        },
        {
            "stationCode": "shenyang",
            "match": "sy|shenyang",
            "stationName": "沈阳",
            "hot": 15957009,
            "priority": 34
        },
        {
            "stationCode": "shijiazhuang",
            "match": "sjz|shijiazhuang",
            "stationName": "石家庄",
            "hot": 15291404,
            "priority": 26
        },
        {
            "stationCode": "shenzhenbei",
            "match": "szb|shenzhenbei",
            "stationName": "深圳北",
            "hot": 14723646,
            "priority": 1
        },
        {
            "stationCode": "suzhou",
            "match": "sz|suzhou",
            "stationName": "苏州",
            "hot": 13237265,
            "priority": 35
        },
        {
            "stationCode": "xiamen",
            "match": "xm|xiamen",
            "stationName": "厦门",
            "hot": 10778711,
            "priority": 32
        },
        {
            "stationCode": "shangqiu",
            "match": "sq|shangqiu",
            "stationName": "商丘",
            "hot": 8050503,
            "priority": 10
        },
        {
            "stationCode": "shangrao",
            "match": "sr|shangrao",
            "stationName": "上饶",
            "hot": 7537865,
            "priority": 10
        },
        {
            "stationCode": "shanghaihongqiao",
            "match": "shhq|shanghaihongqiao",
            "stationName": "上海虹桥",
            "hot": 7443317,
            "priority": 1
        },
        {
            "stationCode": "shenyangbei",
            "match": "syb|shenyangbei",
            "stationName": "沈阳北",
            "hot": 7112033,
            "priority": 1
        },
        {
            "stationCode": "xiamenbei",
            "match": "xmb|xiamenbei",
            "stationName": "厦门北",
            "hot": 5671164,
            "priority": 1
        },
        {
            "stationCode": "shijiazhuangbei",
            "match": "sjzb|shijiazhuangbei",
            "stationName": "石家庄北",
            "hot": 3286267,
            "priority": 1
        },
        {
            "stationCode": "siping",
            "match": "sp|siping",
            "stationName": "四平",
            "hot": 2967625,
            "priority": 1
        },
        {
            "stationCode": "suzhoubei",
            "match": "szb|suzhoubei",
            "stationName": "苏州北",
            "hot": 2888822,
            "priority": 1
        },
        {
            "stationCode": "shaoguan",
            "match": "sg|shaoguan",
            "stationName": "韶关",
            "hot": 2641601,
            "priority": 10
        },
        {
            "stationCode": "sanya",
            "match": "sy|sanya",
            "stationName": "三亚",
            "hot": 2294369,
            "priority": 10
        },
        {
            "stationCode": "shiyan",
            "match": "sy|shiyan",
            "stationName": "十堰",
            "hot": 2214842,
            "priority": 1
        },
        {
            "stationCode": "shaoyang",
            "match": "sy|shaoyang",
            "stationName": "邵阳",
            "hot": 2206115,
            "priority": 1
        },
        {
            "stationCode": "suining",
            "match": "sn|suining",
            "stationName": "遂宁",
            "hot": 2189214,
            "priority": 1
        },
        {
            "stationCode": "sanmenxia",
            "match": "smx|sanmenxia",
            "stationName": "三门峡",
            "hot": 2083821,
            "priority": 1
        },
        {
            "stationCode": "shaoxingbei",
            "match": "sxb|shaoxingbei",
            "stationName": "绍兴北",
            "hot": 2020673,
            "priority": 1
        },
        {
            "stationCode": "shanwei",
            "match": "sw|shanwei",
            "stationName": "汕尾",
            "hot": 1928715,
            "priority": 0
        },
        {
            "stationCode": "shanghainan",
            "match": "shn|shanghainan",
            "stationName": "上海南",
            "hot": 1909572,
            "priority": 1
        },
        {
            "stationCode": "shaoxing",
            "match": "sx|shaoxing",
            "stationName": "绍兴",
            "hot": 1868220,
            "priority": 10
        },
        {
            "stationCode": "shenzhendong",
            "match": "szd|shenzhendong",
            "stationName": "深圳东",
            "hot": 1861063,
            "priority": 1
        },
        {
            "stationCode": "shanhaiguan",
            "match": "shg|shanhaiguan",
            "stationName": "山海关",
            "hot": 1804856,
            "priority": 1
        },
        {
            "stationCode": "suihua",
            "match": "sh|suihua",
            "stationName": "绥化",
            "hot": 1763324,
            "priority": 10
        },
        {
            "stationCode": "shaoguandong",
            "match": "sgd|shaoguandong",
            "stationName": "韶关东",
            "hot": 1660121,
            "priority": 1
        },
        {
            "stationCode": "sanmingbei",
            "match": "smb|sanmingbei",
            "stationName": "三明北",
            "hot": 1561230,
            "priority": 1
        },
        {
            "stationCode": "shenzhenpingshan",
            "match": "szps|shenzhenpingshan",
            "stationName": "深圳坪山",
            "hot": 1354600,
            "priority": 1
        },
        {
            "stationCode": "suizhou",
            "match": "sz|suizhou",
            "stationName": "随州",
            "hot": 1346496,
            "priority": 1
        },
        {
            "stationCode": "sanshuinan",
            "match": "ssn|sanshuinan",
            "stationName": "三水南",
            "hot": 1301593,
            "priority": 1
        },
        {
            "stationCode": "suide",
            "match": "sd|suide",
            "stationName": "绥德",
            "hot": 1265734,
            "priority": 1
        },
        {
            "stationCode": "shangqiunan",
            "match": "sqn|shangqiunan",
            "stationName": "商丘南",
            "hot": 1204572,
            "priority": 1
        },
        {
            "stationCode": "shaodong",
            "match": "sd|shaodong",
            "stationName": "邵东",
            "hot": 1126755,
            "priority": 1
        },
        {
            "stationCode": "shenzhenxi",
            "match": "szx|shenzhenxi",
            "stationName": "深圳西",
            "hot": 1088648,
            "priority": 1
        },
        {
            "stationCode": "shantou",
            "match": "st|shantou",
            "stationName": "汕头",
            "hot": 948684,
            "priority": 10
        },
        {
            "stationCode": "suizhong",
            "match": "sz|suizhong",
            "stationName": "绥中",
            "hot": 923593,
            "priority": 1
        },
        {
            "stationCode": "sanming",
            "match": "sm|sanming",
            "stationName": "三明",
            "hot": 900867,
            "priority": 10
        },
        {
            "stationCode": "sanjiangnan",
            "match": "sjn|sanjiangnan",
            "stationName": "三江南",
            "hot": 827636,
            "priority": 1
        },
        {
            "stationCode": "sanmenxianan",
            "match": "smxn|sanmenxianan",
            "stationName": "三门峡南",
            "hot": 801373,
            "priority": 1
        },
        {
            "stationCode": "shimenxianbei",
            "match": "smxb|shimenxianbei",
            "stationName": "石门县北",
            "hot": 793556,
            "priority": 1
        },
        {
            "stationCode": "songjiangnan",
            "match": "sjn|songjiangnan",
            "stationName": "松江南",
            "hot": 741170,
            "priority": 1
        },
        {
            "stationCode": "shaoyangbei",
            "match": "syb|shaoyangbei",
            "stationName": "邵阳北",
            "hot": 708062,
            "priority": 1
        },
        {
            "stationCode": "songyuan",
            "match": "sy|songyuan",
            "stationName": "松原",
            "hot": 707198,
            "priority": 1
        },
        {
            "stationCode": "shenyangnan",
            "match": "syn|shenyangnan",
            "stationName": "沈阳南",
            "hot": 706117,
            "priority": 1
        },
        {
            "stationCode": "shaoxingdong",
            "match": "syb|shaoxingdong",
            "stationName": "绍兴东",
            "hot": 701384,
            "priority": 0
        },
        {
            "stationCode": "shuozhou",
            "match": "sz|shuozhou",
            "stationName": "朔州",
            "hot": 650874,
            "priority": 1
        },
        {
            "stationCode": "sipingdong",
            "match": "spd|sipingdong",
            "stationName": "四平东",
            "hot": 633889,
            "priority": 1
        },
        {
            "stationCode": "shihezi",
            "match": "shz|shihezi",
            "stationName": "石河子",
            "hot": 627754,
            "priority": 1
        },
        {
            "stationCode": "shizhuxian",
            "match": "szx|shizhuxian",
            "stationName": "石柱县",
            "hot": 530406,
            "priority": 0
        },
        {
            "stationCode": "sanya1",
            "match": "sy|sanya",
            "stationName": "三  亚",
            "hot": 520593,
            "priority": 1
        },
        {
            "stationCode": "shuyang",
            "match": "sy|shuyang",
            "stationName": "沭阳",
            "hot": 515827,
            "priority": 1
        },
        {
            "stationCode": "sanmenxian",
            "match": "smx|sanmenxian",
            "stationName": "三门县",
            "hot": 496158,
            "priority": 1
        },
        {
            "stationCode": "sujiatun",
            "match": "sjt|sujiatun",
            "stationName": "苏家屯",
            "hot": 487838,
            "priority": 1
        },
        {
            "stationCode": "suizhongbei",
            "match": "szb|suizhongbei",
            "stationName": "绥中北",
            "hot": 485736,
            "priority": 1
        },
        {
            "stationCode": "shangzhi",
            "match": "sz|shangzhi",
            "stationName": "尚志",
            "hot": 475025,
            "priority": 1
        },
        {
            "stationCode": "shengfang",
            "match": "sf|shengfang",
            "stationName": "胜芳",
            "hot": 458168,
            "priority": 1
        },
        {
            "stationCode": "shacheng",
            "match": "sc|shacheng",
            "stationName": "沙城",
            "hot": 439010,
            "priority": 1
        },
        {
            "stationCode": "shangyu",
            "match": "sy|shangyu",
            "stationName": "上虞",
            "hot": 438817,
            "priority": 1
        },
        {
            "stationCode": "salaqi",
            "match": "slq|salaqi",
            "stationName": "萨拉齐",
            "hot": 437929,
            "priority": 1
        },
        {
            "stationCode": "suning",
            "match": "sn|suning",
            "stationName": "肃宁",
            "hot": 433559,
            "priority": 1
        },
        {
            "stationCode": "shenfang",
            "match": "sf|shenfang",
            "stationName": "绅坊",
            "hot": 432728,
            "priority": 1
        },
        {
            "stationCode": "suzhouyuanqu",
            "match": "szyq|suzhouyuanqu",
            "stationName": "苏州园区",
            "hot": 417969,
            "priority": 1
        },
        {
            "stationCode": "shuangliao",
            "match": "sl|shuangliao",
            "stationName": "双辽",
            "hot": 401882,
            "priority": 1
        },
        {
            "stationCode": "shuangchengpu",
            "match": "scp|shuangchengpu",
            "stationName": "双城堡",
            "hot": 398472,
            "priority": 1
        },
        {
            "stationCode": "shangluo",
            "match": "sl|shangluo",
            "stationName": "商洛",
            "hot": 395591,
            "priority": 1
        },
        {
            "stationCode": "shunde",
            "match": "sd|shunde",
            "stationName": "顺德",
            "hot": 389465,
            "priority": 10
        },
        {
            "stationCode": "shaoshannan",
            "match": "ssn|shaoshannan",
            "stationName": "韶山南",
            "hot": 386139,
            "priority": 1
        },
        {
            "stationCode": "shenmu",
            "match": "sm|shenmu",
            "stationName": "神木",
            "hot": 374820,
            "priority": 1
        },
        {
            "stationCode": "shuangyashan",
            "match": "sys|shuangyashan",
            "stationName": "双鸭山",
            "hot": 371605,
            "priority": 1
        },
        {
            "stationCode": "suifenhe",
            "match": "sfh|suifenhe",
            "stationName": "绥芬河",
            "hot": 359148,
            "priority": 1
        },
        {
            "stationCode": "shuijiahu",
            "match": "sjh|shuijiahu",
            "stationName": "水家湖",
            "hot": 356834,
            "priority": 1
        },
        {
            "stationCode": "sansui",
            "match": "ss|sansui",
            "stationName": "三穗",
            "hot": 331222,
            "priority": 1
        },
        {
            "stationCode": "shizuishan",
            "match": "szs|shizuishan",
            "stationName": "石嘴山",
            "hot": 318555,
            "priority": 0
        },
        {
            "stationCode": "songjiang",
            "match": "sj|songjiang",
            "stationName": "松江",
            "hot": 291927,
            "priority": 1
        },
        {
            "stationCode": "shuangfengbei",
            "match": "sfb|shuangfengbei",
            "stationName": "双峰北",
            "hot": 290322,
            "priority": 1
        },
        {
            "stationCode": "shenqiu",
            "match": "sq|shenqiu",
            "stationName": "沈丘",
            "hot": 272571,
            "priority": 1
        },
        {
            "stationCode": "suiling",
            "match": "sl|suiling",
            "stationName": "绥棱",
            "hot": 267273,
            "priority": 1
        },
        {
            "stationCode": "shanshan",
            "match": "ss|shanshan",
            "stationName": "鄯善",
            "hot": 260936,
            "priority": 1
        },
        {
            "stationCode": "shuangliujichang",
            "match": "sljc|shuangliujichang",
            "stationName": "双流机场",
            "hot": 254104,
            "priority": 1
        },
        {
            "stationCode": "shanshanbei",
            "match": "ssb|shanshanbei",
            "stationName": "鄯善北",
            "hot": 238736,
            "priority": 1
        },
        {
            "stationCode": "shaheshi",
            "match": "shs|shaheshi",
            "stationName": "沙河市",
            "hot": 229289,
            "priority": 1
        },
        {
            "stationCode": "shenzhou1",
            "match": "sz|shenzhou1",
            "stationName": "深州",
            "hot": 225345,
            "priority": 1
        },
        {
            "stationCode": "shangcheng",
            "match": "sc|shangcheng",
            "stationName": "商城",
            "hot": 213083,
            "priority": 1
        },
        {
            "stationCode": "sanshui",
            "match": "ss|sanshui",
            "stationName": "三水",
            "hot": 202581,
            "priority": 1
        },
        {
            "stationCode": "sanduxian",
            "match": "sdx|sanduxian",
            "stationName": "三都县",
            "hot": 189623,
            "priority": 1
        },
        {
            "stationCode": "shaowu",
            "match": "sw|shaowu",
            "stationName": "邵武",
            "hot": 188856,
            "priority": 1
        },
        {
            "stationCode": "shangdu",
            "match": "sd|shangdu",
            "stationName": "商都",
            "hot": 186536,
            "priority": 1
        },
        {
            "stationCode": "sishui",
            "match": "ss|sishui",
            "stationName": "泗水",
            "hot": 185537,
            "priority": 1
        },
        {
            "stationCode": "shawanxian",
            "match": "swx|shawanxian",
            "stationName": "沙湾县",
            "hot": 181974,
            "priority": 1
        },
        {
            "stationCode": "suixi1",
            "match": "sx|suixi",
            "stationName": "遂溪",
            "hot": 180628,
            "priority": 1
        },
        {
            "stationCode": "shuangchengbei",
            "match": "scb|shuangchengbei",
            "stationName": "双城北",
            "hot": 171056,
            "priority": 1
        },
        {
            "stationCode": "xiamengaoqi",
            "match": "xmgq|xiamengaoqi",
            "stationName": "厦门高崎",
            "hot": 164802,
            "priority": 1
        },
        {
            "stationCode": "shanghaixi",
            "match": "shx|shanghaixi",
            "stationName": "上海西",
            "hot": 157623,
            "priority": 1
        },
        {
            "stationCode": "sanmenxiaxi",
            "match": "smxx|sanmenxiaxi",
            "stationName": "三门峡西",
            "hot": 151499,
            "priority": 1
        },
        {
            "stationCode": "shangnan",
            "match": "sn|shangnan",
            "stationName": "商南",
            "hot": 145970,
            "priority": 1
        },
        {
            "stationCode": "sanggendalai",
            "match": "sgdl|sanggendalai",
            "stationName": "桑根达来",
            "hot": 143205,
            "priority": 1
        },
        {
            "stationCode": "shandan",
            "match": "sd|shandan",
            "stationName": "山丹",
            "hot": 140724,
            "priority": 1
        },
        {
            "stationCode": "shizong",
            "match": "sz|shizong",
            "stationName": "师宗",
            "hot": 139182,
            "priority": 1
        },
        {
            "stationCode": "sanjiangxian",
            "match": "sjx|sanjiangxian",
            "stationName": "三江县",
            "hot": 136554,
            "priority": 1
        },
        {
            "stationCode": "siyang",
            "match": "sy|siyang",
            "stationName": "泗阳",
            "hot": 125755,
            "priority": 0
        },
        {
            "stationCode": "songzi",
            "match": "sz|songzi",
            "stationName": "松滋",
            "hot": 121173,
            "priority": 1
        },
        {
            "stationCode": "sanjiadian",
            "match": "sjd|sanjiadian",
            "stationName": "三家店",
            "hot": 115877,
            "priority": 1
        },
        {
            "stationCode": "shanyin",
            "match": "sy|shanyin",
            "stationName": "山阴",
            "hot": 114076,
            "priority": 1
        },
        {
            "stationCode": "suzhouxinqu",
            "match": "szxq|suzhouxinqu",
            "stationName": "苏州新区",
            "hot": 111188,
            "priority": 1
        },
        {
            "stationCode": "suiyang",
            "match": "sy|suiyang",
            "stationName": "绥阳",
            "hot": 110776,
            "priority": 1
        },
        {
            "stationCode": "siheyong",
            "match": "shy|siheyong",
            "stationName": "四合永",
            "hot": 108242,
            "priority": 1
        },
        {
            "stationCode": "shuifu",
            "match": "sf|shuifu",
            "stationName": "水富",
            "hot": 105769,
            "priority": 1
        },
        {
            "stationCode": "shundexueyuan",
            "match": "sdxy|shundexueyuan",
            "stationName": "顺德学院",
            "hot": 103706,
            "priority": 1
        },
        {
            "stationCode": "sanhexian",
            "match": "shx|sanhexian",
            "stationName": "三河县",
            "hot": 98423,
            "priority": 1
        },
        {
            "stationCode": "shache",
            "match": "sc|shache",
            "stationName": "莎车",
            "hot": 96690,
            "priority": 1
        },
        {
            "stationCode": "shilin",
            "match": "sl|shilin",
            "stationName": "石林",
            "hot": 95424,
            "priority": 1
        },
        {
            "stationCode": "sunwu",
            "match": "sw|sunwu",
            "stationName": "孙吴",
            "hot": 91458,
            "priority": 1
        },
        {
            "stationCode": "shunchang",
            "match": "sc|shunchang",
            "stationName": "顺昌",
            "hot": 89880,
            "priority": 1
        },
        {
            "stationCode": "shuangliuxi",
            "match": "slx|shuangliuxi",
            "stationName": "双流西",
            "hot": 86731,
            "priority": 1
        },
        {
            "stationCode": "sifangtai",
            "match": "sft|sifangtai",
            "stationName": "四方台",
            "hot": 85112,
            "priority": 1
        },
        {
            "stationCode": "shilinxi",
            "match": "slx|shilinxi",
            "stationName": "石林西",
            "hot": 84554,
            "priority": 0
        },
        {
            "stationCode": "sanjiangkou",
            "match": "sjk|sanjiangkou",
            "stationName": "三江口",
            "hot": 84372,
            "priority": 1
        },
        {
            "stationCode": "shanchengzhen",
            "match": "scz|shanchengzhen",
            "stationName": "山城镇",
            "hot": 82784,
            "priority": 1
        },
        {
            "stationCode": "songtao",
            "match": "st|songtao",
            "stationName": "松桃",
            "hot": 82126,
            "priority": 1
        },
        {
            "stationCode": "shulan",
            "match": "sl|shulan",
            "stationName": "舒兰",
            "hot": 77956,
            "priority": 1
        },
        {
            "stationCode": "shixing",
            "match": "sx|shixing",
            "stationName": "始兴",
            "hot": 76966,
            "priority": 1
        },
        {
            "stationCode": "shibing",
            "match": "sb|shibing",
            "stationName": "施秉",
            "hot": 74830,
            "priority": 1
        },
        {
            "stationCode": "songchenglu",
            "match": "scl|songchenglu",
            "stationName": "宋城路",
            "hot": 74104,
            "priority": 1
        },
        {
            "stationCode": "songjianghe",
            "match": "sjh|songjianghe",
            "stationName": "松江河",
            "hot": 73627,
            "priority": 1
        },
        {
            "stationCode": "shanshi",
            "match": "ss|shanshi",
            "stationName": "山市",
            "hot": 72767,
            "priority": 1
        },
        {
            "stationCode": "shunyi",
            "match": "sy|shunyi",
            "stationName": "顺义",
            "hot": 70620,
            "priority": 1
        },
        {
            "stationCode": "song",
            "match": "s|song",
            "stationName": "宋",
            "hot": 70312,
            "priority": 1
        },
        {
            "stationCode": "shenzhou",
            "match": "sz|shenzhou",
            "stationName": "神州",
            "hot": 69114,
            "priority": 0
        },
        {
            "stationCode": "songming",
            "match": "sm|songming",
            "stationName": "嵩明",
            "hot": 68932,
            "priority": 0
        },
        {
            "stationCode": "shirencheng",
            "match": "src|shirencheng",
            "stationName": "石人城",
            "hot": 67140,
            "priority": 1
        },
        {
            "stationCode": "shucheng",
            "match": "sc|shucheng",
            "stationName": "舒城",
            "hot": 66115,
            "priority": 1
        },
        {
            "stationCode": "suiping",
            "match": "sp|suiping",
            "stationName": "遂平",
            "hot": 63896,
            "priority": 1
        },
        {
            "stationCode": "shiquanxian",
            "match": "sqx|shiquanxian",
            "stationName": "石泉县",
            "hot": 61387,
            "priority": 1
        },
        {
            "stationCode": "shiling",
            "match": "sl|shiling",
            "stationName": "石岭",
            "hot": 61160,
            "priority": 1
        },
        {
            "stationCode": "shanghe",
            "match": "sh|shanghe",
            "stationName": "商河",
            "hot": 59422,
            "priority": 1
        },
        {
            "stationCode": "shiqiaozi",
            "match": "sqz|shiqiaozi",
            "stationName": "石桥子",
            "hot": 59406,
            "priority": 1
        },
        {
            "stationCode": "sanyuanpu",
            "match": "syp|sanyuanpu",
            "stationName": "三源浦",
            "hot": 57816,
            "priority": 1
        },
        {
            "stationCode": "shaoshan",
            "match": "ss|shaoshan",
            "stationName": "韶山",
            "hot": 53610,
            "priority": 1
        },
        {
            "stationCode": "sixian",
            "match": "sx|sixian",
            "stationName": "泗县",
            "hot": 50787,
            "priority": 0
        },
        {
            "stationCode": "shexian1",
            "match": "sx|shexian",
            "stationName": "涉县",
            "hot": 50026,
            "priority": 1
        },
        {
            "stationCode": "shouyang",
            "match": "sy|shouyang",
            "stationName": "寿阳",
            "hot": 47936,
            "priority": 1
        },
        {
            "stationCode": "shulehe",
            "match": "slh|shulehe",
            "stationName": "疏勒河",
            "hot": 46846,
            "priority": 1
        },
        {
            "stationCode": "shenjia",
            "match": "sj|shenjia",
            "stationName": "沈家",
            "hot": 45652,
            "priority": 1
        },
        {
            "stationCode": "shishan",
            "match": "shishan|ss",
            "stationName": "狮山",
            "hot": 42560,
            "priority": 1
        },
        {
            "stationCode": "shuangfeng",
            "match": "sf|shuangfeng",
            "stationName": "双丰",
            "hot": 41684,
            "priority": 1
        },
        {
            "stationCode": "sunjia",
            "match": "sj|sunjia",
            "stationName": "孙家",
            "hot": 40585,
            "priority": 1
        },
        {
            "stationCode": "sanshuibei",
            "match": "sanshuibei|ssb",
            "stationName": "三水北",
            "hot": 39299,
            "priority": 1
        },
        {
            "stationCode": "shuangpai",
            "match": "sp|shuangpai",
            "stationName": "双牌",
            "hot": 36114,
            "priority": 1
        },
        {
            "stationCode": "shanhetun",
            "match": "sht|shanhetun",
            "stationName": "山河屯",
            "hot": 35213,
            "priority": 1
        },
        {
            "stationCode": "sihong",
            "match": "sh|sihong",
            "stationName": "泗洪",
            "hot": 34917,
            "priority": 0
        },
        {
            "stationCode": "songshu",
            "match": "ss|songshu",
            "stationName": "松树",
            "hot": 34069,
            "priority": 1
        },
        {
            "stationCode": "saihantaila",
            "match": "shtl|saihantaila",
            "stationName": "赛汗塔拉",
            "hot": 33935,
            "priority": 1
        },
        {
            "stationCode": "shangyuan",
            "match": "sy|shangyuan",
            "stationName": "上园",
            "hot": 32449,
            "priority": 1
        },
        {
            "stationCode": "shishanbei",
            "match": "shishanbei|ssb",
            "stationName": "狮山北",
            "hot": 31447,
            "priority": 1
        },
        {
            "stationCode": "shanpodong",
            "match": "spd|shanpodong",
            "stationName": "山坡东",
            "hot": 30820,
            "priority": 0
        },
        {
            "stationCode": "sihui",
            "match": "sihui|sh",
            "stationName": "四会",
            "hot": 28714,
            "priority": 1
        },
        {
            "stationCode": "shilong",
            "match": "sl|shilong",
            "stationName": "石龙",
            "hot": 28150,
            "priority": 1
        },
        {
            "stationCode": "shanghang",
            "match": "sh|shanghang",
            "stationName": "上杭",
            "hot": 28141,
            "priority": 1
        },
        {
            "stationCode": "sunzhen",
            "match": "sz|sunzhen",
            "stationName": "孙镇",
            "hot": 27720,
            "priority": 1
        },
        {
            "stationCode": "sidaowan",
            "match": "sdw|sidaowan",
            "stationName": "四道湾",
            "hot": 25809,
            "priority": 1
        },
        {
            "stationCode": "shenshu",
            "match": "ss|shenshu",
            "stationName": "神树",
            "hot": 23992,
            "priority": 1
        },
        {
            "stationCode": "shentou",
            "match": "st|shentou",
            "stationName": "神头",
            "hot": 23496,
            "priority": 1
        },
        {
            "stationCode": "santangji",
            "match": "stj|santangji",
            "stationName": "三堂集",
            "hot": 23329,
            "priority": 1
        },
        {
            "stationCode": "shangjia",
            "match": "sj|shangjia",
            "stationName": "尚家",
            "hot": 23236,
            "priority": 1
        },
        {
            "stationCode": "shangbancheng",
            "match": "sbc|shangbancheng",
            "stationName": "上板城",
            "hot": 22898,
            "priority": 1
        },
        {
            "stationCode": "shumuling",
            "match": "sml|shumuling",
            "stationName": "树木岭",
            "hot": 22642,
            "priority": 0
        },
        {
            "stationCode": "songshuzhen",
            "match": "ssz|songshuzhen",
            "stationName": "松树镇",
            "hot": 22630,
            "priority": 1
        },
        {
            "stationCode": "shuangji",
            "match": "sj|shuangji",
            "stationName": "双吉",
            "hot": 22327,
            "priority": 0
        },
        {
            "stationCode": "shidu",
            "match": "sd|shidu",
            "stationName": "十渡",
            "hot": 21270,
            "priority": 1
        },
        {
            "stationCode": "shimenxian",
            "match": "smx|shimenxian",
            "stationName": "石门县",
            "hot": 19319,
            "priority": 1
        },
        {
            "stationCode": "songhe",
            "match": "sh|songhe",
            "stationName": "松河",
            "hot": 18964,
            "priority": 1
        },
        {
            "stationCode": "shahe",
            "match": "sh|shahe",
            "stationName": "沙河",
            "hot": 18818,
            "priority": 1
        },
        {
            "stationCode": "sanshijia",
            "match": "ssj|sanshijia",
            "stationName": "三十家",
            "hot": 17456,
            "priority": 1
        },
        {
            "stationCode": "sanyuan",
            "match": "sy|sanyuan",
            "stationName": "三原",
            "hot": 16659,
            "priority": 1
        },
        {
            "stationCode": "suolun",
            "match": "sl|suolun",
            "stationName": "索伦",
            "hot": 16608,
            "priority": 1
        },
        {
            "stationCode": "shenchi",
            "match": "sc|shenchi",
            "stationName": "神池",
            "hot": 16367,
            "priority": 1
        },
        {
            "stationCode": "sanjianfang",
            "match": "sjf|sanjianfang",
            "stationName": "三间房",
            "hot": 15555,
            "priority": 1
        },
        {
            "stationCode": "shitou",
            "match": "st|shitou",
            "stationName": "石头",
            "hot": 13850,
            "priority": 1
        },
        {
            "stationCode": "shalingzi",
            "match": "slz|shalingzi",
            "stationName": "沙岭子",
            "hot": 12659,
            "priority": 1
        },
        {
            "stationCode": "shenjingzi",
            "match": "sjz|shenjingzi",
            "stationName": "深井子",
            "hot": 12005,
            "priority": 1
        },
        {
            "stationCode": "shahai",
            "match": "sh|shahai",
            "stationName": "沙海",
            "hot": 11423,
            "priority": 1
        },
        {
            "stationCode": "songyuanbei",
            "match": "syb|songyuanbei",
            "stationName": "松原北",
            "hot": 11068,
            "priority": 1
        },
        {
            "stationCode": "shuanghezhen",
            "match": "shz|shuanghezhen",
            "stationName": "双河镇",
            "hot": 10838,
            "priority": 1
        },
        {
            "stationCode": "shilinnan",
            "match": "sln|shilinnan",
            "stationName": "石林南",
            "hot": 10756,
            "priority": 1
        },
        {
            "stationCode": "shaxian",
            "match": "sx|shaxian",
            "stationName": "沙县",
            "hot": 9875,
            "priority": 1
        },
        {
            "stationCode": "shangbanchengnan",
            "match": "sbcn|shangbanchengnan",
            "stationName": "上板城南",
            "hot": 9574,
            "priority": 1
        },
        {
            "stationCode": "shaqiao",
            "match": "shaqiao|sq",
            "stationName": "沙桥",
            "hot": 9348,
            "priority": 1
        },
        {
            "stationCode": "sanhuizhen",
            "match": "shz|sanhuizhen",
            "stationName": "三汇镇",
            "hot": 9245,
            "priority": 1
        },
        {
            "stationCode": "shiba",
            "match": "sb|shiba",
            "stationName": "石坝",
            "hot": 8628,
            "priority": 1
        },
        {
            "stationCode": "songjiangzhen",
            "match": "sjz|songjiangzhen",
            "stationName": "松江镇",
            "hot": 8454,
            "priority": 1
        },
        {
            "stationCode": "shaojiatang",
            "match": "sjt|shaojiatang",
            "stationName": "邵家堂",
            "hot": 8419,
            "priority": 1
        },
        {
            "stationCode": "sanyangchuan",
            "match": "syc|sanyangchuan",
            "stationName": "三阳川",
            "hot": 8242,
            "priority": 1
        },
        {
            "stationCode": "sandaohu",
            "match": "sdh|sandaohu",
            "stationName": "三道湖",
            "hot": 8221,
            "priority": 1
        },
        {
            "stationCode": "sanguankou",
            "match": "sgk|sanguankou",
            "stationName": "三关口",
            "hot": 7977,
            "priority": 1
        },
        {
            "stationCode": "shicheng",
            "match": "sc|shicheng",
            "stationName": "石城",
            "hot": 7713,
            "priority": 1
        },
        {
            "stationCode": "sanjiazhai",
            "match": "sjz|sanjiazhai",
            "stationName": "三家寨",
            "hot": 7554,
            "priority": 1
        },
        {
            "stationCode": "shuiyuan",
            "match": "sy|shuiyuan",
            "stationName": "水源",
            "hot": 7488,
            "priority": 1
        },
        {
            "stationCode": "sanshilipu",
            "match": "sslp|sanshilipu",
            "stationName": "三十里堡",
            "hot": 7312,
            "priority": 1
        },
        {
            "stationCode": "shuidong",
            "match": "sd|shuidong",
            "stationName": "水洞",
            "hot": 7272,
            "priority": 1
        },
        {
            "stationCode": "shenyangdong",
            "match": "syd|shenyangdong",
            "stationName": "沈阳东",
            "hot": 7031,
            "priority": 1
        },
        {
            "stationCode": "sanying",
            "match": "sy|sanying",
            "stationName": "三营",
            "hot": 6781,
            "priority": 1
        },
        {
            "stationCode": "shilin1",
            "match": "sl|shilin",
            "stationName": "石磷",
            "hot": 6696,
            "priority": 1
        },
        {
            "stationCode": "sanyijing",
            "match": "syj|sanyijing",
            "stationName": "三义井",
            "hot": 6185,
            "priority": 1
        },
        {
            "stationCode": "shijiazi",
            "match": "sjz|shijiazi",
            "stationName": "十家子",
            "hot": 5941,
            "priority": 1
        },
        {
            "stationCode": "shenjiahe",
            "match": "sjh|shenjiahe",
            "stationName": "沈家河",
            "hot": 5424,
            "priority": 1
        },
        {
            "stationCode": "sanhezhuang",
            "match": "shz|sanhezhuang",
            "stationName": "三合庄",
            "hot": 5420,
            "priority": 1
        },
        {
            "stationCode": "shelihu",
            "match": "slh|shelihu",
            "stationName": "舍力虎",
            "hot": 4922,
            "priority": 1
        },
        {
            "stationCode": "shilidian",
            "match": "sld|shilidian",
            "stationName": "什里店",
            "hot": 4539,
            "priority": 1
        },
        {
            "stationCode": "sanjingzi",
            "match": "sjz|sanjingzi",
            "stationName": "三井子",
            "hot": 4311,
            "priority": 1
        },
        {
            "stationCode": "shatuo",
            "match": "st|shatuo",
            "stationName": "沙沱",
            "hot": 3909,
            "priority": 1
        },
        {
            "stationCode": "shangwan",
            "match": "sw|shangwan",
            "stationName": "上万",
            "hot": 3778,
            "priority": 1
        },
        {
            "stationCode": "shijiazui",
            "match": "sjz|shijiazui",
            "stationName": "施家嘴",
            "hot": 3523,
            "priority": 1
        },
        {
            "stationCode": "sijialing",
            "match": "sjl|sijialing",
            "stationName": "司家岭",
            "hot": 2935,
            "priority": 1
        },
        {
            "stationCode": "suotuhan",
            "match": "sth|suotuhan",
            "stationName": "索图罕",
            "hot": 2876,
            "priority": 1
        },
        {
            "stationCode": "shanggaozhen",
            "match": "sgz|shanggaozhen",
            "stationName": "上高镇",
            "hot": 2836,
            "priority": 1
        },
        {
            "stationCode": "shizhuang",
            "match": "sz|shizhuang",
            "stationName": "师庄",
            "hot": 2743,
            "priority": 1
        },
        {
            "stationCode": "shangxipu",
            "match": "sxp|shangxipu",
            "stationName": "上西铺",
            "hot": 2678,
            "priority": 1
        },
        {
            "stationCode": "sunitezuoqi",
            "match": "sntzq|sunitezuoqi",
            "stationName": "苏尼特左旗",
            "hot": 2565,
            "priority": 0
        },
        {
            "stationCode": "shapotou",
            "match": "spt|shapotou",
            "stationName": "沙坡头",
            "hot": 2022,
            "priority": 1
        },
        {
            "stationCode": "sangyuanzi",
            "match": "syz|sangyuanzi",
            "stationName": "桑园子",
            "hot": 1852,
            "priority": 1
        },
        {
            "stationCode": "shangyaodun",
            "match": "syd|shangyaodun",
            "stationName": "上腰墩",
            "hot": 1704,
            "priority": 1
        },
        {
            "stationCode": "shixiazi",
            "match": "sxz|shixiazi",
            "stationName": "石峡子",
            "hot": 1271,
            "priority": 1
        },
        {
            "stationCode": "shuiquan",
            "match": "sq|shuiquan",
            "stationName": "水泉",
            "hot": 1150,
            "priority": 1
        },
        {
            "stationCode": "shiqiao",
            "match": "sq|shiqiao",
            "stationName": "石桥",
            "hot": 823,
            "priority": 0
        },
        {
            "stationCode": "shiti",
            "match": "st|shiti",
            "stationName": "石梯",
            "hot": 820,
            "priority": 0
        },
        {
            "stationCode": "shule",
            "match": "sl|shule",
            "stationName": "疏勒",
            "hot": 800,
            "priority": 1
        },
        {
            "stationCode": "shahekou",
            "match": "shk|shahekou",
            "stationName": "沙河口",
            "hot": 657,
            "priority": 1
        },
        {
            "stationCode": "shoushan",
            "match": "ss|shoushan",
            "stationName": "首山",
            "hot": 431,
            "priority": 1
        },
        {
            "stationCode": "shiren",
            "match": "sr|shiren",
            "stationName": "石人",
            "hot": 416,
            "priority": 1
        },
        {
            "stationCode": "shijingshannan",
            "match": "sjsn|shijingshannan",
            "stationName": "石景山南",
            "hot": 282,
            "priority": 1
        },
        {
            "stationCode": "shixian",
            "match": "sx|shixian",
            "stationName": "石岘",
            "hot": 147,
            "priority": 1
        },
        {
            "stationCode": "shahousuo",
            "match": "shs|shahousuo",
            "stationName": "沙后所",
            "hot": 82,
            "priority": 1
        },
        {
            "stationCode": "shiboyuan",
            "match": "sby|shiboyuan",
            "stationName": "世博园",
            "hot": 72,
            "priority": 1
        },
        {
            "stationCode": "shuiyang",
            "match": "sy|shuiyang",
            "stationName": "水洋",
            "hot": 14,
            "priority": 1
        }
    ],
    "T": [
        {
            "stationCode": "tianjin",
            "match": "tj|tianjin",
            "stationName": "天津",
            "hot": 21056427,
            "priority": 36
        },
        {
            "stationCode": "taiyuan",
            "match": "ty|taiyuan",
            "stationName": "太原",
            "hot": 12156626,
            "priority": 26
        },
        {
            "stationCode": "tangshan",
            "match": "ts|tangshan",
            "stationName": "唐山",
            "hot": 6226757,
            "priority": 10
        },
        {
            "stationCode": "taiyuannan",
            "match": "tyn|taiyuannan",
            "stationName": "太原南",
            "hot": 4915112,
            "priority": 0
        },
        {
            "stationCode": "tianjinxi",
            "match": "tjx|tianjinxi",
            "stationName": "天津西",
            "hot": 4445113,
            "priority": 1
        },
        {
            "stationCode": "taizhou1",
            "match": "tz|taizhou",
            "stationName": "台州",
            "hot": 2887903,
            "priority": 10
        },
        {
            "stationCode": "taian1",
            "match": "ta|taian",
            "stationName": "泰安",
            "hot": 2794924,
            "priority": 10
        },
        {
            "stationCode": "tianshui",
            "match": "ts|tianshui",
            "stationName": "天水",
            "hot": 2372741,
            "priority": 1
        },
        {
            "stationCode": "tongliao",
            "match": "tl|tongliao",
            "stationName": "通辽",
            "hot": 2032973,
            "priority": 10
        },
        {
            "stationCode": "tieling",
            "match": "tl|tieling",
            "stationName": "铁岭",
            "hot": 1834902,
            "priority": 1
        },
        {
            "stationCode": "taizhou",
            "match": "tz|taizhou",
            "stationName": "泰州",
            "hot": 1781107,
            "priority": 10
        },
        {
            "stationCode": "tengzhou",
            "match": "tz|tengzhou",
            "stationName": "滕州",
            "hot": 1706672,
            "priority": 1
        },
        {
            "stationCode": "tianjinnan",
            "match": "tjn|tianjinnan",
            "stationName": "天津南",
            "hot": 1580660,
            "priority": 1
        },
        {
            "stationCode": "tongxiang",
            "match": "tx|tongxiang",
            "stationName": "桐乡",
            "hot": 1466893,
            "priority": 1
        },
        {
            "stationCode": "tongling",
            "match": "tl|tongling",
            "stationName": "铜陵",
            "hot": 1349619,
            "priority": 1
        },
        {
            "stationCode": "taishan",
            "match": "ts|taishan",
            "stationName": "泰山",
            "hot": 1326061,
            "priority": 1
        },
        {
            "stationCode": "tianmennan",
            "match": "tmn|tianmennan",
            "stationName": "天门南",
            "hot": 1274477,
            "priority": 1
        },
        {
            "stationCode": "tongren",
            "match": "tr|tongren",
            "stationName": "铜仁",
            "hot": 1192001,
            "priority": 1
        },
        {
            "stationCode": "tengxian",
            "match": "tx|tengxian",
            "stationName": "藤县",
            "hot": 1148934,
            "priority": 1
        },
        {
            "stationCode": "tengzhoudong",
            "match": "tzd|tengzhoudong",
            "stationName": "滕州东",
            "hot": 1041847,
            "priority": 1
        },
        {
            "stationCode": "tangshanbei",
            "match": "tsb|tangshanbei",
            "stationName": "唐山北",
            "hot": 950322,
            "priority": 1
        },
        {
            "stationCode": "tanggu",
            "match": "tg|tanggu",
            "stationName": "塘沽",
            "hot": 817327,
            "priority": 10
        },
        {
            "stationCode": "tulufan",
            "match": "tlf|tulufan",
            "stationName": "吐鲁番",
            "hot": 786209,
            "priority": 1
        },
        {
            "stationCode": "tongrennan",
            "match": "trn|tongrennan",
            "stationName": "铜仁南",
            "hot": 762225,
            "priority": 1
        },
        {
            "stationCode": "tielingxi",
            "match": "tlx|tielingxi",
            "stationName": "铁岭西",
            "hot": 624392,
            "priority": 1
        },
        {
            "stationCode": "tonghua",
            "match": "th|tonghua",
            "stationName": "通化",
            "hot": 578025,
            "priority": 10
        },
        {
            "stationCode": "taining",
            "match": "tn|taining",
            "stationName": "泰宁",
            "hot": 574366,
            "priority": 1
        },
        {
            "stationCode": "tongnan",
            "match": "tn|tongnan",
            "stationName": "潼南",
            "hot": 573571,
            "priority": 1
        },
        {
            "stationCode": "taigu",
            "match": "tg|taigu",
            "stationName": "太谷",
            "hot": 498192,
            "priority": 1
        },
        {
            "stationCode": "taikang",
            "match": "tk|taikang",
            "stationName": "泰康",
            "hot": 437389,
            "priority": 1
        },
        {
            "stationCode": "taihe1",
            "match": "th|taihe",
            "stationName": "泰和",
            "hot": 432519,
            "priority": 1
        },
        {
            "stationCode": "tieli",
            "match": "tl|tieli",
            "stationName": "铁力",
            "hot": 425705,
            "priority": 1
        },
        {
            "stationCode": "tonglingbei",
            "match": "tonglingbei|tlb1",
            "stationName": "铜陵北",
            "hot": 409117,
            "priority": 1
        },
        {
            "stationCode": "taimushan",
            "match": "tms|taimushan",
            "stationName": "太姥山",
            "hot": 370402,
            "priority": 1
        },
        {
            "stationCode": "tulufanbei",
            "match": "tlfb|tulufanbei",
            "stationName": "吐鲁番北",
            "hot": 367038,
            "priority": 1
        },
        {
            "stationCode": "tianyang",
            "match": "ty|tianyang",
            "stationName": "田阳",
            "hot": 365793,
            "priority": 1
        },
        {
            "stationCode": "taiqian",
            "match": "tq|taiqian",
            "stationName": "台前",
            "hot": 362812,
            "priority": 1
        },
        {
            "stationCode": "tianmen",
            "match": "tm|tianmen",
            "stationName": "天门",
            "hot": 362069,
            "priority": 1
        },
        {
            "stationCode": "tanghe",
            "match": "th|tanghe",
            "stationName": "唐河",
            "hot": 353328,
            "priority": 1
        },
        {
            "stationCode": "tongcheng",
            "match": "tc|tongcheng",
            "stationName": "桐城",
            "hot": 344901,
            "priority": 1
        },
        {
            "stationCode": "tongzi",
            "match": "tz|tongzi",
            "stationName": "桐梓",
            "hot": 304696,
            "priority": 1
        },
        {
            "stationCode": "tangyin",
            "match": "ty|tangyin",
            "stationName": "汤阴",
            "hot": 298001,
            "priority": 1
        },
        {
            "stationCode": "tongguan",
            "match": "tg|tongguan",
            "stationName": "潼关",
            "hot": 287082,
            "priority": 10
        },
        {
            "stationCode": "taiguxi",
            "match": "tgx|taiguxi",
            "stationName": "太谷西",
            "hot": 265968,
            "priority": 0
        },
        {
            "stationCode": "taonan",
            "match": "tn|taonan",
            "stationName": "洮南",
            "hot": 247784,
            "priority": 1
        },
        {
            "stationCode": "taipingchuan",
            "match": "tpc|taipingchuan",
            "stationName": "太平川",
            "hot": 242923,
            "priority": 1
        },
        {
            "stationCode": "tuxi",
            "match": "tx|tuxi",
            "stationName": "土溪",
            "hot": 241144,
            "priority": 1
        },
        {
            "stationCode": "taiyuandong",
            "match": "tyd|taiyuandong",
            "stationName": "太原东",
            "hot": 237989,
            "priority": 1
        },
        {
            "stationCode": "tailai",
            "match": "tl|tailai",
            "stationName": "泰来",
            "hot": 233947,
            "priority": 1
        },
        {
            "stationCode": "tiandongbei",
            "match": "tdb|tiandongbei",
            "stationName": "田东北",
            "hot": 232657,
            "priority": 1
        },
        {
            "stationCode": "taian",
            "match": "ta|taian",
            "stationName": "台安",
            "hot": 223080,
            "priority": 1
        },
        {
            "stationCode": "tianzhen",
            "match": "tz|tianzhen",
            "stationName": "天镇",
            "hot": 221287,
            "priority": 1
        },
        {
            "stationCode": "taocun",
            "match": "tc|taocun",
            "stationName": "桃村",
            "hot": 206663,
            "priority": 1
        },
        {
            "stationCode": "tongyuanpuxi",
            "match": "typx|tongyuanpuxi",
            "stationName": "通远堡西",
            "hot": 202800,
            "priority": 1
        },
        {
            "stationCode": "tianzhushan",
            "match": "tzs|tianzhushan",
            "stationName": "天柱山",
            "hot": 188364,
            "priority": 1
        },
        {
            "stationCode": "taihu",
            "match": "th|taihu",
            "stationName": "太湖",
            "hot": 188130,
            "priority": 1
        },
        {
            "stationCode": "tongxin",
            "match": "tx|tongxin",
            "stationName": "同心",
            "hot": 180788,
            "priority": 1
        },
        {
            "stationCode": "tongbai",
            "match": "tb|tongbai",
            "stationName": "桐柏",
            "hot": 175302,
            "priority": 1
        },
        {
            "stationCode": "tianjinbei",
            "match": "tjb|tianjinbei",
            "stationName": "天津北",
            "hot": 174372,
            "priority": 1
        },
        {
            "stationCode": "tianhejichang",
            "match": "thjc|tianhejichang",
            "stationName": "天河机场",
            "hot": 170205,
            "priority": 0
        },
        {
            "stationCode": "tangyuan",
            "match": "ty|tangyuan",
            "stationName": "汤原",
            "hot": 165470,
            "priority": 1
        },
        {
            "stationCode": "tangjiawan",
            "match": "tjw|tangjiawan",
            "stationName": "唐家湾",
            "hot": 152774,
            "priority": 1
        },
        {
            "stationCode": "tongbei",
            "match": "tb|tongbei",
            "stationName": "通北",
            "hot": 150988,
            "priority": 1
        },
        {
            "stationCode": "tongjiang",
            "match": "tj|tongjiang",
            "stationName": "同江",
            "hot": 148174,
            "priority": 0
        },
        {
            "stationCode": "tongzhouxi",
            "match": "tzx|tongzhouxi",
            "stationName": "通州西",
            "hot": 114581,
            "priority": 1
        },
        {
            "stationCode": "taocunbei",
            "match": "tcb|taocunbei",
            "stationName": "桃村北",
            "hot": 113068,
            "priority": 1
        },
        {
            "stationCode": "tancheng",
            "match": "tc|tancheng",
            "stationName": "郯城",
            "hot": 102686,
            "priority": 1
        },
        {
            "stationCode": "tianyi",
            "match": "ty|tianyi",
            "stationName": "天义",
            "hot": 94180,
            "priority": 1
        },
        {
            "stationCode": "tumen",
            "match": "tm|tumen",
            "stationName": "图们",
            "hot": 86287,
            "priority": 1
        },
        {
            "stationCode": "taiyuanbei",
            "match": "tyb|taiyuanbei",
            "stationName": "太原北",
            "hot": 84327,
            "priority": 1
        },
        {
            "stationCode": "tahe",
            "match": "th|tahe",
            "stationName": "塔河",
            "hot": 82326,
            "priority": 1
        },
        {
            "stationCode": "tongyuanpu",
            "match": "typ|tongyuanpu",
            "stationName": "通远堡",
            "hot": 80071,
            "priority": 1
        },
        {
            "stationCode": "taoshan",
            "match": "ts|taoshan",
            "stationName": "桃山",
            "hot": 78919,
            "priority": 1
        },
        {
            "stationCode": "tianzhu",
            "match": "tz|tianzhu",
            "stationName": "天祝",
            "hot": 70891,
            "priority": 1
        },
        {
            "stationCode": "taha",
            "match": "th|taha",
            "stationName": "塔哈",
            "hot": 61328,
            "priority": 1
        },
        {
            "stationCode": "tiandong",
            "match": "td|tiandong",
            "stationName": "田东",
            "hot": 61296,
            "priority": 1
        },
        {
            "stationCode": "tumenbei",
            "match": "tumenbei|tmb",
            "stationName": "图们北",
            "hot": 58374,
            "priority": 1
        },
        {
            "stationCode": "tonghai",
            "match": "th|tonghai",
            "stationName": "通海",
            "hot": 55280,
            "priority": 1
        },
        {
            "stationCode": "tongdao",
            "match": "td|tongdao",
            "stationName": "通道",
            "hot": 54079,
            "priority": 1
        },
        {
            "stationCode": "tuha",
            "match": "th|tuha",
            "stationName": "吐哈",
            "hot": 51563,
            "priority": 1
        },
        {
            "stationCode": "tangxunhu",
            "match": "txh|tangxunhu",
            "stationName": "汤逊湖",
            "hot": 49551,
            "priority": 0
        },
        {
            "stationCode": "taolaizhao",
            "match": "tlz|taolaizhao",
            "stationName": "陶赖昭",
            "hot": 48808,
            "priority": 1
        },
        {
            "stationCode": "taipingzhen",
            "match": "tpz|taipingzhen",
            "stationName": "太平镇",
            "hot": 43215,
            "priority": 1
        },
        {
            "stationCode": "tuguiwula",
            "match": "tgwl|tuguiwula",
            "stationName": "土贵乌拉",
            "hot": 42289,
            "priority": 1
        },
        {
            "stationCode": "taiyangsheng",
            "match": "tys|taiyangsheng",
            "stationName": "太阳升",
            "hot": 42227,
            "priority": 1
        },
        {
            "stationCode": "tuditangdong",
            "match": "tdtd|tuditangdong",
            "stationName": "土地堂东",
            "hot": 35745,
            "priority": 0
        },
        {
            "stationCode": "tuanjie",
            "match": "tj|tuanjie",
            "stationName": "团结",
            "hot": 33665,
            "priority": 1
        },
        {
            "stationCode": "tianlin",
            "match": "tl|tianlin",
            "stationName": "田林",
            "hot": 32141,
            "priority": 1
        },
        {
            "stationCode": "tulihe",
            "match": "tlh|tulihe",
            "stationName": "图里河",
            "hot": 30972,
            "priority": 1
        },
        {
            "stationCode": "tianxindong",
            "match": "txd|tianxindong",
            "stationName": "田心东",
            "hot": 30890,
            "priority": 0
        },
        {
            "stationCode": "tuoyaoling",
            "match": "tyl|tuoyaoling",
            "stationName": "驼腰岭",
            "hot": 25636,
            "priority": 1
        },
        {
            "stationCode": "tuliemaodu",
            "match": "tlmd|tuliemaodu",
            "stationName": "吐列毛杜",
            "hot": 24088,
            "priority": 1
        },
        {
            "stationCode": "tuqiang",
            "match": "tq|tuqiang",
            "stationName": "图强",
            "hot": 20668,
            "priority": 1
        },
        {
            "stationCode": "tingliang",
            "match": "tl|tingliang",
            "stationName": "亭亮",
            "hot": 18572,
            "priority": 1
        },
        {
            "stationCode": "tangchi",
            "match": "tc|tangchi",
            "stationName": "汤池",
            "hot": 18184,
            "priority": 1
        },
        {
            "stationCode": "tongzilin",
            "match": "tzl|tongzilin",
            "stationName": "桐子林",
            "hot": 17977,
            "priority": 1
        },
        {
            "stationCode": "tianhejie",
            "match": "thj|tianhejie",
            "stationName": "天河街",
            "hot": 17392,
            "priority": 0
        },
        {
            "stationCode": "tangwanghe",
            "match": "twh|tangwanghe",
            "stationName": "汤旺河",
            "hot": 17241,
            "priority": 1
        },
        {
            "stationCode": "tianqiaoling",
            "match": "tql|tianqiaoling",
            "stationName": "天桥岭",
            "hot": 13210,
            "priority": 1
        },
        {
            "stationCode": "tumuertai",
            "match": "tmet|tumuertai",
            "stationName": "土牧尔台",
            "hot": 10336,
            "priority": 1
        },
        {
            "stationCode": "taiyangshan",
            "match": "tys|taiyangshan",
            "stationName": "太阳山",
            "hot": 9561,
            "priority": 1
        },
        {
            "stationCode": "tangshancheng",
            "match": "tsc|tangshancheng",
            "stationName": "汤山城",
            "hot": 7401,
            "priority": 1
        },
        {
            "stationCode": "tiangang",
            "match": "tg|tiangang",
            "stationName": "天岗",
            "hot": 6821,
            "priority": 1
        },
        {
            "stationCode": "tonghuaxian",
            "match": "thx|tonghuaxian",
            "stationName": "通化县",
            "hot": 6250,
            "priority": 1
        },
        {
            "stationCode": "taojiatun",
            "match": "tjt|taojiatun",
            "stationName": "陶家屯",
            "hot": 6245,
            "priority": 1
        },
        {
            "stationCode": "tuqiaozi",
            "match": "tqz|tuqiaozi",
            "stationName": "土桥子",
            "hot": 6143,
            "priority": 1
        },
        {
            "stationCode": "tongjunzhuang",
            "match": "tjz|tongjunzhuang",
            "stationName": "统军庄",
            "hot": 4703,
            "priority": 1
        },
        {
            "stationCode": "tanjiajing",
            "match": "tjj|tanjiajing",
            "stationName": "谭家井",
            "hot": 4170,
            "priority": 1
        },
        {
            "stationCode": "tayanyi",
            "match": "tyy|tayanyi",
            "stationName": "塔崖驿",
            "hot": 4006,
            "priority": 1
        },
        {
            "stationCode": "tonganyi",
            "match": "tay|tonganyi",
            "stationName": "通安驿",
            "hot": 3757,
            "priority": 1
        },
        {
            "stationCode": "tumenzi",
            "match": "tmz|tumenzi",
            "stationName": "土门子",
            "hot": 2971,
            "priority": 1
        },
        {
            "stationCode": "tarqi",
            "match": "teq|tarqi",
            "stationName": "塔尔气",
            "hot": 2736,
            "priority": 1
        },
        {
            "stationCode": "tangbao",
            "match": "tb|tangbao",
            "stationName": "塘豹",
            "hot": 2434,
            "priority": 1
        },
        {
            "stationCode": "tiechang",
            "match": "tc|tiechang",
            "stationName": "铁厂",
            "hot": 1528,
            "priority": 1
        },
        {
            "stationCode": "tianshifu",
            "match": "tsf|tianshifu",
            "stationName": "田师府",
            "hot": 1165,
            "priority": 1
        },
        {
            "stationCode": "tashizui",
            "match": "tsz|tashizui",
            "stationName": "塔石嘴",
            "hot": 427,
            "priority": 1
        },
        {
            "stationCode": "tongtu",
            "match": "tt|tongtu",
            "stationName": "通途",
            "hot": 272,
            "priority": 1
        },
        {
            "stationCode": "tonggou",
            "match": "tg|tonggou",
            "stationName": "通沟",
            "hot": 40,
            "priority": 1
        },
        {
            "stationCode": "tanghai",
            "match": "th|tanghai",
            "stationName": "棠海",
            "hot": 15,
            "priority": 1
        }
    ],
    "U": [],
    "V": [],
    "W": [
        {
            "stationCode": "wuhan",
            "match": "wh|wuhan",
            "stationName": "武汉",
            "hot": 17587329,
            "priority": 46
        },
        {
            "stationCode": "wuxi",
            "match": "wx|wuxi",
            "stationName": "无锡",
            "hot": 8774680,
            "priority": 10
        },
        {
            "stationCode": "wuchang2",
            "match": "wc|wuchang",
            "stationName": "武昌",
            "hot": 6983678,
            "priority": 10
        },
        {
            "stationCode": "weifang",
            "match": "wf|weifang",
            "stationName": "潍坊",
            "hot": 5759835,
            "priority": 10
        },
        {
            "stationCode": "wenzhou",
            "match": "wz|wenzhou",
            "stationName": "温州",
            "hot": 5070743,
            "priority": 10
        },
        {
            "stationCode": "wenzhounan",
            "match": "wzn|wenzhounan",
            "stationName": "温州南",
            "hot": 4123353,
            "priority": 1
        },
        {
            "stationCode": "wulumuqi",
            "match": "wlmq|wulumuqi",
            "stationName": "乌鲁木齐",
            "hot": 3681439,
            "priority": 0
        },
        {
            "stationCode": "wuhu",
            "match": "wh|wuhu",
            "stationName": "芜湖",
            "hot": 3487541,
            "priority": 10
        },
        {
            "stationCode": "weinan",
            "match": "wn|weinan",
            "stationName": "渭南",
            "hot": 2413383,
            "priority": 10
        },
        {
            "stationCode": "wuxidong",
            "match": "wxd|wuxidong",
            "stationName": "无锡东",
            "hot": 2248163,
            "priority": 1
        },
        {
            "stationCode": "wenling",
            "match": "wl|wenling",
            "stationName": "温岭",
            "hot": 2174073,
            "priority": 1
        },
        {
            "stationCode": "wulumuqinan",
            "match": "wlmqn|wulumuqinan",
            "stationName": "乌鲁木齐南",
            "hot": 2024066,
            "priority": 1
        },
        {
            "stationCode": "weihai",
            "match": "wh|weihai",
            "stationName": "威海",
            "hot": 1696347,
            "priority": 1
        },
        {
            "stationCode": "wuzhounan",
            "match": "wzn|wuzhounan",
            "stationName": "梧州南",
            "hot": 1634082,
            "priority": 0
        },
        {
            "stationCode": "wanzhou",
            "match": "wz|wanzhou",
            "stationName": "万州",
            "hot": 1632561,
            "priority": 10
        },
        {
            "stationCode": "wuwei",
            "match": "ww|wuwei",
            "stationName": "武威",
            "hot": 1125152,
            "priority": 1
        },
        {
            "stationCode": "wuzhou",
            "match": "wz|wuzhou",
            "stationName": "梧州",
            "hot": 1071895,
            "priority": 10
        },
        {
            "stationCode": "wuyishandong",
            "match": "wuyishandong|wysd",
            "stationName": "武夷山东",
            "hot": 1047449,
            "priority": 1
        },
        {
            "stationCode": "wanyuan",
            "match": "wy|wanyuan",
            "stationName": "万源",
            "hot": 891945,
            "priority": 1
        },
        {
            "stationCode": "weinanbei",
            "match": "wnb|weinanbei",
            "stationName": "渭南北",
            "hot": 866535,
            "priority": 1
        },
        {
            "stationCode": "wafangdian",
            "match": "wfd|wafangdian",
            "stationName": "瓦房店",
            "hot": 846749,
            "priority": 1
        },
        {
            "stationCode": "wuhai",
            "match": "wh|wuhai",
            "stationName": "乌海",
            "hot": 787114,
            "priority": 10
        },
        {
            "stationCode": "wuyishanbei",
            "match": "wuyishanbei|wysb",
            "stationName": "武夷山北",
            "hot": 676487,
            "priority": 1
        },
        {
            "stationCode": "wuyuan",
            "match": "wuyuan|wy",
            "stationName": "婺源",
            "hot": 667964,
            "priority": 1
        },
        {
            "stationCode": "wanning",
            "match": "wn|wanning",
            "stationName": "万宁",
            "hot": 631816,
            "priority": 1
        },
        {
            "stationCode": "wuwei1",
            "match": "wuwei1|ww1",
            "stationName": "无为",
            "hot": 612656,
            "priority": 1
        },
        {
            "stationCode": "wanzhoubei",
            "match": "wzb|wanzhoubei",
            "stationName": "万州北",
            "hot": 602664,
            "priority": 0
        },
        {
            "stationCode": "wulanhaote",
            "match": "wlht|wulanhaote",
            "stationName": "乌兰浩特",
            "hot": 594186,
            "priority": 10
        },
        {
            "stationCode": "guoyang",
            "match": "gy|guoyang",
            "stationName": "涡阳",
            "hot": 588462,
            "priority": 1
        },
        {
            "stationCode": "wuyishan",
            "match": "wys|wuyishan",
            "stationName": "武夷山",
            "hot": 484384,
            "priority": 1
        },
        {
            "stationCode": "wenshui",
            "match": "ws|wenshui",
            "stationName": "文水",
            "hot": 456386,
            "priority": 1
        },
        {
            "stationCode": "wuyibei",
            "match": "wyb|wuyibei",
            "stationName": "武义北",
            "hot": 406056,
            "priority": 1
        },
        {
            "stationCode": "wenchang",
            "match": "wc|wenchang",
            "stationName": "文昌",
            "hot": 367907,
            "priority": 1
        },
        {
            "stationCode": "wuyi",
            "match": "wy|wuyi",
            "stationName": "武义",
            "hot": 322273,
            "priority": 1
        },
        {
            "stationCode": "wendi",
            "match": "wd|wendi",
            "stationName": "文地",
            "hot": 309343,
            "priority": 1
        },
        {
            "stationCode": "wuqiao",
            "match": "wq|wuqiao",
            "stationName": "吴桥",
            "hot": 306990,
            "priority": 1
        },
        {
            "stationCode": "wulateqianqi",
            "match": "wltqq|uradqranqi",
            "stationName": "乌拉特前旗",
            "hot": 305207,
            "priority": 1
        },
        {
            "stationCode": "weihaibei",
            "match": "whb|weihaibei",
            "stationName": "威海北",
            "hot": 295768,
            "priority": 1
        },
        {
            "stationCode": "wuqing",
            "match": "wq|wuqing",
            "stationName": "武清",
            "hot": 290099,
            "priority": 1
        },
        {
            "stationCode": "wulong",
            "match": "wl|wulong",
            "stationName": "武隆",
            "hot": 273729,
            "priority": 1
        },
        {
            "stationCode": "wuxixinqu",
            "match": "wxxq|wuxixinqu",
            "stationName": "无锡新区",
            "hot": 273229,
            "priority": 1
        },
        {
            "stationCode": "wuxue",
            "match": "wx|wuxue",
            "stationName": "武穴",
            "hot": 251664,
            "priority": 1
        },
        {
            "stationCode": "wupu",
            "match": "wp|wupu",
            "stationName": "吴堡",
            "hot": 249574,
            "priority": 1
        },
        {
            "stationCode": "weishe",
            "match": "ws|weishe",
            "stationName": "威舍",
            "hot": 244711,
            "priority": 1
        },
        {
            "stationCode": "wafangdianxi",
            "match": "wfdx|wafangdianxi",
            "stationName": "瓦房店西",
            "hot": 241353,
            "priority": 1
        },
        {
            "stationCode": "wendengdong",
            "match": "wdd|wendengdong",
            "stationName": "文登东",
            "hot": 225863,
            "priority": 1
        },
        {
            "stationCode": "wuzhi",
            "match": "wuzhi|wz",
            "stationName": "武陟",
            "hot": 224199,
            "priority": 1
        },
        {
            "stationCode": "wushan",
            "match": "ws|wushan",
            "stationName": "武山",
            "hot": 209796,
            "priority": 1
        },
        {
            "stationCode": "wudangshan",
            "match": "wds|wudangshan",
            "stationName": "武当山",
            "hot": 205721,
            "priority": 1
        },
        {
            "stationCode": "wusheng",
            "match": "ws|wusheng",
            "stationName": "武胜",
            "hot": 201601,
            "priority": 1
        },
        {
            "stationCode": "wugong",
            "match": "wg|wugong",
            "stationName": "武功",
            "hot": 198967,
            "priority": 1
        },
        {
            "stationCode": "wenxixi",
            "match": "wxx|wenxixi",
            "stationName": "闻喜西",
            "hot": 176608,
            "priority": 0
        },
        {
            "stationCode": "wuchang",
            "match": "wc|wuchang",
            "stationName": "五常",
            "hot": 173554,
            "priority": 1
        },
        {
            "stationCode": "wendeng",
            "match": "wd|wendeng",
            "stationName": "文登",
            "hot": 171878,
            "priority": 1
        },
        {
            "stationCode": "wuyuan1",
            "match": "wy1|wuyuan1",
            "stationName": "五原",
            "hot": 165433,
            "priority": 1
        },
        {
            "stationCode": "wuhaixi",
            "match": "whx|wuhaixi",
            "stationName": "乌海西",
            "hot": 157869,
            "priority": 1
        },
        {
            "stationCode": "weihe",
            "match": "wh|weihe",
            "stationName": "苇河",
            "hot": 157438,
            "priority": 1
        },
        {
            "stationCode": "wenxi",
            "match": "wx|wenxi",
            "stationName": "闻喜",
            "hot": 154701,
            "priority": 1
        },
        {
            "stationCode": "wutaishan",
            "match": "wts|wutaishan",
            "stationName": "五台山",
            "hot": 140160,
            "priority": 1
        },
        {
            "stationCode": "weihui",
            "match": "wh|weihui",
            "stationName": "卫辉",
            "hot": 120963,
            "priority": 1
        },
        {
            "stationCode": "wuweinan",
            "match": "wwn|wuweinan",
            "stationName": "武威南",
            "hot": 118599,
            "priority": 1
        },
        {
            "stationCode": "wannian",
            "match": "wn|wannian",
            "stationName": "万年",
            "hot": 116183,
            "priority": 1
        },
        {
            "stationCode": "wulian",
            "match": "wl|wulian",
            "stationName": "五莲",
            "hot": 112398,
            "priority": 1
        },
        {
            "stationCode": "wuxiang",
            "match": "wx|wuxiang",
            "stationName": "武乡",
            "hot": 95449,
            "priority": 1
        },
        {
            "stationCode": "wufushan",
            "match": "wufushan|wfs",
            "stationName": "五府山",
            "hot": 94903,
            "priority": 1
        },
        {
            "stationCode": "wawushan",
            "match": "wws|wawushan",
            "stationName": "瓦屋山",
            "hot": 78064,
            "priority": 1
        },
        {
            "stationCode": "wudalianchi",
            "match": "wdlc|wudalianchi",
            "stationName": "五大连池",
            "hot": 76735,
            "priority": 1
        },
        {
            "stationCode": "wulongbeidong",
            "match": "wlbd|wulongbeidong",
            "stationName": "五龙背东",
            "hot": 68758,
            "priority": 1
        },
        {
            "stationCode": "wuxi1",
            "match": "wx|wuxi",
            "stationName": "乌西",
            "hot": 67667,
            "priority": 1
        },
        {
            "stationCode": "wolitun",
            "match": "wlt|wolitun",
            "stationName": "卧里屯",
            "hot": 58404,
            "priority": 1
        },
        {
            "stationCode": "wulongbei",
            "match": "wlb|wulongbei",
            "stationName": "五龙背",
            "hot": 57775,
            "priority": 1
        },
        {
            "stationCode": "weizhuang",
            "match": "wz|weizhuang",
            "stationName": "韦庄",
            "hot": 42530,
            "priority": 1
        },
        {
            "stationCode": "wangfu",
            "match": "wf|wangfu",
            "stationName": "王府",
            "hot": 40337,
            "priority": 1
        },
        {
            "stationCode": "wuan",
            "match": "wa|wuan",
            "stationName": "武安",
            "hot": 39924,
            "priority": 1
        },
        {
            "stationCode": "wulashan",
            "match": "wls|wulashan",
            "stationName": "乌拉山",
            "hot": 35885,
            "priority": 1
        },
        {
            "stationCode": "wulongquannan",
            "match": "wlqn|wulongquannan",
            "stationName": "乌龙泉南",
            "hot": 35739,
            "priority": 0
        },
        {
            "stationCode": "wukeshu",
            "match": "wks|wukeshu",
            "stationName": "五棵树",
            "hot": 35170,
            "priority": 1
        },
        {
            "stationCode": "wuwu",
            "match": "ww|wuwu",
            "stationName": "五五",
            "hot": 32627,
            "priority": 1
        },
        {
            "stationCode": "wuerqihan",
            "match": "weqh|wuerqihan",
            "stationName": "乌尔旗汗",
            "hot": 29497,
            "priority": 1
        },
        {
            "stationCode": "weixing",
            "match": "wx|weixing",
            "stationName": "卫星",
            "hot": 28127,
            "priority": 1
        },
        {
            "stationCode": "wujia",
            "match": "wj|wujia",
            "stationName": "五家",
            "hot": 26804,
            "priority": 1
        },
        {
            "stationCode": "wanggang",
            "match": "wg|wanggang",
            "stationName": "王岗",
            "hot": 24940,
            "priority": 1
        },
        {
            "stationCode": "wunuer",
            "match": "wne|wunuer",
            "stationName": "乌奴耳",
            "hot": 23076,
            "priority": 1
        },
        {
            "stationCode": "wuzhai",
            "match": "wz|wuzhai",
            "stationName": "五寨",
            "hot": 22452,
            "priority": 1
        },
        {
            "stationCode": "wanle",
            "match": "wl|wanle",
            "stationName": "万乐",
            "hot": 21583,
            "priority": 1
        },
        {
            "stationCode": "wangqing",
            "match": "wq|wangqing",
            "stationName": "汪清",
            "hot": 21496,
            "priority": 1
        },
        {
            "stationCode": "wudaogou",
            "match": "wdg|wudaogou",
            "stationName": "五道沟",
            "hot": 21061,
            "priority": 1
        },
        {
            "stationCode": "wuying",
            "match": "wy|wuying",
            "stationName": "五营",
            "hot": 18650,
            "priority": 1
        },
        {
            "stationCode": "wangou",
            "match": "wg|wangou",
            "stationName": "湾沟",
            "hot": 16399,
            "priority": 1
        },
        {
            "stationCode": "wanfatun",
            "match": "wft|wanfatun",
            "stationName": "万发屯",
            "hot": 15521,
            "priority": 1
        },
        {
            "stationCode": "wopi",
            "match": "wp|wopi",
            "stationName": "沃皮",
            "hot": 14796,
            "priority": 1
        },
        {
            "stationCode": "wuyiling",
            "match": "wyl|wuyiling",
            "stationName": "乌伊岭",
            "hot": 13770,
            "priority": 1
        },
        {
            "stationCode": "woken",
            "match": "wk|woken",
            "stationName": "倭肯",
            "hot": 12584,
            "priority": 1
        },
        {
            "stationCode": "waitoushan",
            "match": "wts|waitoushan",
            "stationName": "歪头山",
            "hot": 12470,
            "priority": 1
        },
        {
            "stationCode": "wulanhada",
            "match": "wlhd|wulanhada",
            "stationName": "乌兰哈达",
            "hot": 11255,
            "priority": 1
        },
        {
            "stationCode": "weiqing",
            "match": "wq|weiqing",
            "stationName": "威箐",
            "hot": 10893,
            "priority": 1
        },
        {
            "stationCode": "wujiatun",
            "match": "wjt|wujiatun",
            "stationName": "吴家屯",
            "hot": 10536,
            "priority": 1
        },
        {
            "stationCode": "weinannan",
            "match": "wnn|weinannan",
            "stationName": "渭南南",
            "hot": 9474,
            "priority": 1
        },
        {
            "stationCode": "walagan",
            "match": "wlg|walagan",
            "stationName": "瓦拉干",
            "hot": 7648,
            "priority": 1
        },
        {
            "stationCode": "weishanzhuang",
            "match": "wsz|weishanzhuang",
            "stationName": "魏善庄",
            "hot": 7540,
            "priority": 1
        },
        {
            "stationCode": "weinanzhen",
            "match": "wnz|weinanzhen",
            "stationName": "渭南镇",
            "hot": 7133,
            "priority": 1
        },
        {
            "stationCode": "wuji",
            "match": "wj|wuji",
            "stationName": "午汲",
            "hot": 6473,
            "priority": 1
        },
        {
            "stationCode": "wuguantian",
            "match": "wgt|wuguantian",
            "stationName": "吴官田",
            "hot": 6440,
            "priority": 1
        },
        {
            "stationCode": "wuchagou",
            "match": "wcg|wuchagou",
            "stationName": "五叉沟",
            "hot": 5927,
            "priority": 1
        },
        {
            "stationCode": "wangjiayingxi",
            "match": "wjyx|wangjiayingxi",
            "stationName": "王家营西",
            "hot": 5860,
            "priority": 1
        },
        {
            "stationCode": "wenchun",
            "match": "wc|wenchun",
            "stationName": "温春",
            "hot": 5561,
            "priority": 1
        },
        {
            "stationCode": "wunvshan",
            "match": "wns|wunvshan",
            "stationName": "五女山",
            "hot": 5186,
            "priority": 0
        },
        {
            "stationCode": "wangtuanzhuang",
            "match": "wtz|wangtuanzhuang",
            "stationName": "王团庄",
            "hot": 4677,
            "priority": 1
        },
        {
            "stationCode": "wayaotian",
            "match": "wyt|wayaotian",
            "stationName": "瓦窑田",
            "hot": 3525,
            "priority": 1
        },
        {
            "stationCode": "wudaohe",
            "match": "wdh|wudaohe",
            "stationName": "五道河",
            "hot": 3401,
            "priority": 1
        },
        {
            "stationCode": "wangcang",
            "match": "wc|wangcang",
            "stationName": "旺苍",
            "hot": 3362,
            "priority": 1
        },
        {
            "stationCode": "wujiachuan",
            "match": "wjc|wujiachuan",
            "stationName": "吴家川",
            "hot": 3299,
            "priority": 1
        },
        {
            "stationCode": "wanganzhen",
            "match": "waz|wanganzhen",
            "stationName": "王安镇",
            "hot": 2090,
            "priority": 1
        },
        {
            "stationCode": "weizhangzi",
            "match": "wzz|weizhangzi",
            "stationName": "魏杖子",
            "hot": 1661,
            "priority": 1
        },
        {
            "stationCode": "wangyang",
            "match": "wy|wangyang",
            "stationName": "王杨",
            "hot": 1571,
            "priority": 1
        },
        {
            "stationCode": "wenan",
            "match": "wa|wenan",
            "stationName": "文安",
            "hot": 1391,
            "priority": 1
        },
        {
            "stationCode": "wangdu",
            "match": "wd|wangdu",
            "stationName": "望都",
            "hot": 672,
            "priority": 1
        },
        {
            "stationCode": "wuxu",
            "match": "wx|wuxu",
            "stationName": "吴圩",
            "hot": 553,
            "priority": 1
        },
        {
            "stationCode": "wangzhaotun",
            "match": "wzt|wangzhaotun",
            "stationName": "王兆屯",
            "hot": 510,
            "priority": 1
        },
        {
            "stationCode": "weiyuan",
            "match": "wy|weiyuan",
            "stationName": "渭源",
            "hot": 320,
            "priority": 0
        },
        {
            "stationCode": "weijin",
            "match": "wj|weijin",
            "stationName": "渭津",
            "hot": 280,
            "priority": 1
        },
        {
            "stationCode": "wangjiawan",
            "match": "wjw|wangjiawan",
            "stationName": "王家湾",
            "hot": 108,
            "priority": 1
        },
        {
            "stationCode": "weizigou",
            "match": "wzg|weizigou",
            "stationName": "苇子沟",
            "hot": 101,
            "priority": 1
        },
        {
            "stationCode": "weizizhen",
            "match": "wzz|weizizhen",
            "stationName": "微子镇",
            "hot": 95,
            "priority": 1
        },
        {
            "stationCode": "weidong",
            "match": "wd|weidong",
            "stationName": "卫东",
            "hot": 69,
            "priority": 1
        },
        {
            "stationCode": "weihulingbei",
            "match": "weihulingbei|whlb",
            "stationName": "威虎岭北",
            "hot": 67,
            "priority": 1
        },
        {
            "stationCode": "wangtong",
            "match": "wt|wangtong",
            "stationName": "王瞳",
            "hot": 61,
            "priority": 1
        }
    ],
    "X": [
        {
            "stationCode": "xian",
            "match": "xa|xian",
            "stationName": "西安",
            "hot": 21319704,
            "priority": 41
        },
        {
            "stationCode": "xuzhou",
            "match": "xzh|xuzhou",
            "stationName": "徐州",
            "hot": 11262959,
            "priority": 10
        },
        {
            "stationCode": "xuzhoudong",
            "match": "xzd|xuzhoudong",
            "stationName": "徐州东",
            "hot": 5548781,
            "priority": 1
        },
        {
            "stationCode": "xinyang",
            "match": "xy|xinyang",
            "stationName": "信阳",
            "hot": 5131474,
            "priority": 1
        },
        {
            "stationCode": "xiangyang1",
            "match": "xy|xiangyang1",
            "stationName": "襄阳",
            "hot": 4215299,
            "priority": 10
        },
        {
            "stationCode": "xinxiang",
            "match": "xx|xinxiang",
            "stationName": "新乡",
            "hot": 4162452,
            "priority": 1
        },
        {
            "stationCode": "xining",
            "match": "xn|xining",
            "stationName": "西宁",
            "hot": 3993849,
            "priority": 1
        },
        {
            "stationCode": "xianbei",
            "match": "xab|xianbei",
            "stationName": "西安北",
            "hot": 3621450,
            "priority": 1
        },
        {
            "stationCode": "xingtai",
            "match": "xt|xingtai",
            "stationName": "邢台",
            "hot": 3321013,
            "priority": 10
        },
        {
            "stationCode": "xuchang",
            "match": "xc|xuchang",
            "stationName": "许昌",
            "hot": 2616487,
            "priority": 10
        },
        {
            "stationCode": "suzhou1",
            "match": "sz|suzhou1",
            "stationName": "宿州",
            "hot": 2586440,
            "priority": 10
        },
        {
            "stationCode": "xinyu",
            "match": "xy|xinyu",
            "stationName": "新余",
            "hot": 2032226,
            "priority": 1
        },
        {
            "stationCode": "xinyangdong",
            "match": "xyd|xinyangdong",
            "stationName": "信阳东",
            "hot": 1879301,
            "priority": 1
        },
        {
            "stationCode": "xiangtan",
            "match": "xt|xiangtan",
            "stationName": "湘潭",
            "hot": 1853829,
            "priority": 1
        },
        {
            "stationCode": "xianyang",
            "match": "xy|xianyang",
            "stationName": "咸阳",
            "hot": 1844201,
            "priority": 10
        },
        {
            "stationCode": "suzhoudong",
            "match": "szd|suzhoudong",
            "stationName": "宿州东",
            "hot": 1739432,
            "priority": 1
        },
        {
            "stationCode": "xiaogan",
            "match": "xg|xiaogan",
            "stationName": "孝感",
            "hot": 1586381,
            "priority": 1
        },
        {
            "stationCode": "xianyou",
            "match": "xy|xianyou",
            "stationName": "仙游",
            "hot": 1534612,
            "priority": 1
        },
        {
            "stationCode": "xianning",
            "match": "xn|xianning",
            "stationName": "咸宁",
            "hot": 1413577,
            "priority": 1
        },
        {
            "stationCode": "xinxiangdong",
            "match": "xxd|xinxiangdong",
            "stationName": "新乡东",
            "hot": 1317586,
            "priority": 1
        },
        {
            "stationCode": "xingtaidong",
            "match": "xtd|xingtaidong",
            "stationName": "邢台东",
            "hot": 1177182,
            "priority": 1
        },
        {
            "stationCode": "xuchangdong",
            "match": "xcd|xuchangdong",
            "stationName": "许昌东",
            "hot": 1119856,
            "priority": 1
        },
        {
            "stationCode": "xinzhou",
            "match": "xz|xinzhou",
            "stationName": "忻州",
            "hot": 1107695,
            "priority": 1
        },
        {
            "stationCode": "xinyubei",
            "match": "xyb|xinyubei",
            "stationName": "新余北",
            "hot": 1065741,
            "priority": 1
        },
        {
            "stationCode": "xiannan",
            "match": "xan|xiannan",
            "stationName": "西安南",
            "hot": 1011047,
            "priority": 1
        },
        {
            "stationCode": "xianningbei",
            "match": "xnb|xianningbei",
            "stationName": "咸宁北",
            "hot": 923752,
            "priority": 1
        },
        {
            "stationCode": "xuancheng",
            "match": "xc|xuancheng",
            "stationName": "宣城",
            "hot": 902897,
            "priority": 10
        },
        {
            "stationCode": "xinhua",
            "match": "xh|xinhua",
            "stationName": "新化",
            "hot": 901689,
            "priority": 1
        },
        {
            "stationCode": "xiaolan",
            "match": "xl|xiaolan",
            "stationName": "小榄",
            "hot": 857718,
            "priority": 1
        },
        {
            "stationCode": "xiapu",
            "match": "xp|xiapu",
            "stationName": "霞浦",
            "hot": 842609,
            "priority": 1
        },
        {
            "stationCode": "xingguo",
            "match": "xg|xingguo",
            "stationName": "兴国",
            "hot": 794669,
            "priority": 1
        },
        {
            "stationCode": "xiangtanbei",
            "match": "xtb|xiangtanbei",
            "stationName": "湘潭北",
            "hot": 788359,
            "priority": 1
        },
        {
            "stationCode": "xinyi",
            "match": "xy|xinyi",
            "stationName": "新沂",
            "hot": 778637,
            "priority": 1
        },
        {
            "stationCode": "xinji",
            "match": "xj|xinji",
            "stationName": "辛集",
            "hot": 732519,
            "priority": 1
        },
        {
            "stationCode": "xiongyuecheng",
            "match": "xyc|xiongyuecheng",
            "stationName": "熊岳城",
            "hot": 706674,
            "priority": 1
        },
        {
            "stationCode": "xichang",
            "match": "xc|xichang",
            "stationName": "西昌",
            "hot": 705051,
            "priority": 10
        },
        {
            "stationCode": "xiangyangdong",
            "match": "xyd|xiangyangdong",
            "stationName": "襄阳东",
            "hot": 695838,
            "priority": 1
        },
        {
            "stationCode": "xuanwei",
            "match": "xw|xuanwei",
            "stationName": "宣威",
            "hot": 691687,
            "priority": 1
        },
        {
            "stationCode": "xiushan",
            "match": "xs|xiushan",
            "stationName": "秀山",
            "hot": 676355,
            "priority": 1
        },
        {
            "stationCode": "xiangtang",
            "match": "xt|xiangtang",
            "stationName": "向塘",
            "hot": 665474,
            "priority": 1
        },
        {
            "stationCode": "xupu",
            "match": "xp|xupu",
            "stationName": "溆浦",
            "hot": 619744,
            "priority": 1
        },
        {
            "stationCode": "xuanhua",
            "match": "xh|xuanhua",
            "stationName": "宣化",
            "hot": 610220,
            "priority": 1
        },
        {
            "stationCode": "xingcheng",
            "match": "xc|xingcheng",
            "stationName": "兴城",
            "hot": 607626,
            "priority": 1
        },
        {
            "stationCode": "xinhuanan",
            "match": "xhn|xinhuanan",
            "stationName": "新化南",
            "hot": 591474,
            "priority": 1
        },
        {
            "stationCode": "xiaoganbei",
            "match": "xgb|xiaoganbei",
            "stationName": "孝感北",
            "hot": 543007,
            "priority": 1
        },
        {
            "stationCode": "xingyi",
            "match": "xy|xingyi",
            "stationName": "兴义",
            "hot": 537688,
            "priority": 10
        },
        {
            "stationCode": "xingan1",
            "match": "xg|xingan",
            "stationName": "新干",
            "hot": 471450,
            "priority": 1
        },
        {
            "stationCode": "xingning",
            "match": "xn|xingning",
            "stationName": "兴宁",
            "hot": 445931,
            "priority": 1
        },
        {
            "stationCode": "xushui",
            "match": "xs|xushui",
            "stationName": "徐水",
            "hot": 392215,
            "priority": 1
        },
        {
            "stationCode": "xiaoxianbei",
            "match": "xxb|xiaoxianbei",
            "stationName": "萧县北",
            "hot": 389557,
            "priority": 0
        },
        {
            "stationCode": "xinglongzhen",
            "match": "xlz|xinglongzhen",
            "stationName": "兴隆镇",
            "hot": 387521,
            "priority": 1
        },
        {
            "stationCode": "xiangxiang",
            "match": "xx|xiangxiang",
            "stationName": "湘乡",
            "hot": 376077,
            "priority": 1
        },
        {
            "stationCode": "xinfeng",
            "match": "xf|xinfeng",
            "stationName": "信丰",
            "hot": 362768,
            "priority": 1
        },
        {
            "stationCode": "xiping",
            "match": "xp|xiping",
            "stationName": "西平",
            "hot": 352969,
            "priority": 1
        },
        {
            "stationCode": "xianyangqindu",
            "match": "xyqd|xianyangqindu",
            "stationName": "咸阳秦都",
            "hot": 338735,
            "priority": 0
        },
        {
            "stationCode": "xilinhaote",
            "match": "xlht|xilinhaote",
            "stationName": "锡林浩特",
            "hot": 333245,
            "priority": 1
        },
        {
            "stationCode": "xinganbei",
            "match": "xab|xinganbei",
            "stationName": "兴安北",
            "hot": 331705,
            "priority": 1
        },
        {
            "stationCode": "xunyangbei",
            "match": "xyb|xunyangbei",
            "stationName": "旬阳北",
            "hot": 323385,
            "priority": 1
        },
        {
            "stationCode": "xunyang",
            "match": "xy|xunyang",
            "stationName": "旬阳",
            "hot": 319891,
            "priority": 1
        },
        {
            "stationCode": "xuanhan",
            "match": "xh|xuanhan",
            "stationName": "宣汉",
            "hot": 308220,
            "priority": 1
        },
        {
            "stationCode": "xishui",
            "match": "xs|xishui",
            "stationName": "浠水",
            "hot": 307675,
            "priority": 1
        },
        {
            "stationCode": "xiaogandong",
            "match": "xgd|xiaogandong",
            "stationName": "孝感东",
            "hot": 300125,
            "priority": 0
        },
        {
            "stationCode": "xiantaoxi",
            "match": "xtx|xiantaoxi",
            "stationName": "仙桃西",
            "hot": 290324,
            "priority": 1
        },
        {
            "stationCode": "xinxian",
            "match": "xx|xinxian",
            "stationName": "新县",
            "hot": 286849,
            "priority": 1
        },
        {
            "stationCode": "xixia",
            "match": "xx|xixia",
            "stationName": "西峡",
            "hot": 266521,
            "priority": 1
        },
        {
            "stationCode": "xupunan",
            "match": "xpn|xupunan",
            "stationName": "溆浦南",
            "hot": 262412,
            "priority": 1
        },
        {
            "stationCode": "xinlitun",
            "match": "xlt|xinlitun",
            "stationName": "新立屯",
            "hot": 229043,
            "priority": 1
        },
        {
            "stationCode": "susong",
            "match": "ss|susong",
            "stationName": "宿松",
            "hot": 222822,
            "priority": 1
        },
        {
            "stationCode": "xuwen",
            "match": "xw|xuwen",
            "stationName": "徐闻",
            "hot": 222614,
            "priority": 1
        },
        {
            "stationCode": "xindudong",
            "match": "xdd|xindudong",
            "stationName": "新都东",
            "hot": 217839,
            "priority": 1
        },
        {
            "stationCode": "xiangfenxi",
            "match": "xfx|xiangfenxi",
            "stationName": "襄汾西",
            "hot": 208877,
            "priority": 0
        },
        {
            "stationCode": "xiangfen",
            "match": "xf|xiangfen",
            "stationName": "襄汾",
            "hot": 202643,
            "priority": 1
        },
        {
            "stationCode": "xixiang",
            "match": "xx|xixiang",
            "stationName": "西乡",
            "hot": 194122,
            "priority": 1
        },
        {
            "stationCode": "xinmin",
            "match": "xm|xinmin",
            "stationName": "新民",
            "hot": 191578,
            "priority": 1
        },
        {
            "stationCode": "xixian",
            "match": "xx|xixian",
            "stationName": "息县",
            "hot": 186680,
            "priority": 1
        },
        {
            "stationCode": "xinhui",
            "match": "xh|xinhui",
            "stationName": "新会",
            "hot": 185987,
            "priority": 1
        },
        {
            "stationCode": "xipu",
            "match": "xp|xipu",
            "stationName": "犀浦",
            "hot": 176828,
            "priority": 1
        },
        {
            "stationCode": "xiangfang",
            "match": "xf|xiangfang",
            "stationName": "香坊",
            "hot": 167126,
            "priority": 1
        },
        {
            "stationCode": "xiangcheng",
            "match": "xc|xiangcheng",
            "stationName": "项城",
            "hot": 165656,
            "priority": 1
        },
        {
            "stationCode": "xingye",
            "match": "xy|xingye",
            "stationName": "兴业",
            "hot": 162051,
            "priority": 1
        },
        {
            "stationCode": "xiliu",
            "match": "xl|xiliu",
            "stationName": "西柳",
            "hot": 161027,
            "priority": 1
        },
        {
            "stationCode": "xiahuayuan",
            "match": "xhy|xiahuayuan",
            "stationName": "下花园",
            "hot": 158233,
            "priority": 1
        },
        {
            "stationCode": "xinhuanxi",
            "match": "xhx|xinhuanxi",
            "stationName": "新晃西",
            "hot": 157866,
            "priority": 1
        },
        {
            "stationCode": "xingping",
            "match": "xp|xingping",
            "stationName": "兴平",
            "hot": 154436,
            "priority": 1
        },
        {
            "stationCode": "xinzhengjichang",
            "match": "xzjc|xinzhengjichang",
            "stationName": "新郑机场",
            "hot": 143907,
            "priority": 1
        },
        {
            "stationCode": "xinzhao",
            "match": "xz|xinzhao",
            "stationName": "新肇",
            "hot": 131405,
            "priority": 1
        },
        {
            "stationCode": "xiajiang",
            "match": "xj|xiajiang",
            "stationName": "峡江",
            "hot": 122718,
            "priority": 1
        },
        {
            "stationCode": "xiaohezhen",
            "match": "xhz|xiaohezhen",
            "stationName": "小河镇",
            "hot": 121271,
            "priority": 1
        },
        {
            "stationCode": "xinqiu",
            "match": "xq|xinqiu",
            "stationName": "新邱",
            "hot": 102378,
            "priority": 1
        },
        {
            "stationCode": "xinjin",
            "match": "xj|xinjin",
            "stationName": "新津",
            "hot": 100854,
            "priority": 1
        },
        {
            "stationCode": "shexianbei",
            "match": "shexianbei|sxb",
            "stationName": "歙县北",
            "hot": 96925,
            "priority": 1
        },
        {
            "stationCode": "xiangyuan",
            "match": "xy|xiangyuan",
            "stationName": "襄垣",
            "hot": 96633,
            "priority": 1
        },
        {
            "stationCode": "xiaodong1",
            "match": "xd|xiaodong1",
            "stationName": "小东",
            "hot": 89220,
            "priority": 1
        },
        {
            "stationCode": "xiuwuxi",
            "match": "xiuwuxi|xwx",
            "stationName": "修武西",
            "hot": 86045,
            "priority": 1
        },
        {
            "stationCode": "xinhe",
            "match": "xh|xinhe",
            "stationName": "新和",
            "hot": 84828,
            "priority": 1
        },
        {
            "stationCode": "xinjinnan",
            "match": "xjn|xinjinnan",
            "stationName": "新津南",
            "hot": 83859,
            "priority": 1
        },
        {
            "stationCode": "xinglongxian",
            "match": "xlx|xinglongxian",
            "stationName": "兴隆县",
            "hot": 82673,
            "priority": 1
        },
        {
            "stationCode": "xinyouyi",
            "match": "xyy|xinyouyi",
            "stationName": "新友谊",
            "hot": 73645,
            "priority": 1
        },
        {
            "stationCode": "xifeng",
            "match": "xf|xifeng",
            "stationName": "息烽",
            "hot": 73544,
            "priority": 1
        },
        {
            "stationCode": "xiayixian",
            "match": "xyx|xiayixian",
            "stationName": "夏邑县",
            "hot": 72993,
            "priority": 1
        },
        {
            "stationCode": "xinhuang",
            "match": "xh|xinhuang",
            "stationName": "新晃",
            "hot": 67493,
            "priority": 1
        },
        {
            "stationCode": "xianningnan",
            "match": "xnn|xianningnan",
            "stationName": "咸宁南",
            "hot": 67475,
            "priority": 0
        },
        {
            "stationCode": "xinghexi",
            "match": "xhx|xinghexi",
            "stationName": "兴和西",
            "hot": 66087,
            "priority": 1
        },
        {
            "stationCode": "xingshutun",
            "match": "xst|xingshutun",
            "stationName": "杏树屯",
            "hot": 63265,
            "priority": 1
        },
        {
            "stationCode": "xilin",
            "match": "xl|xilin",
            "stationName": "西林",
            "hot": 61072,
            "priority": 1
        },
        {
            "stationCode": "xinanxian",
            "match": "xax|xinanxian",
            "stationName": "新安县",
            "hot": 60338,
            "priority": 1
        },
        {
            "stationCode": "shexian",
            "match": "sx|shexian",
            "stationName": "歙县",
            "hot": 59414,
            "priority": 1
        },
        {
            "stationCode": "xiangyun",
            "match": "xy|xiangyun",
            "stationName": "祥云",
            "hot": 54612,
            "priority": 1
        },
        {
            "stationCode": "xipudong",
            "match": "xpd|xipudong",
            "stationName": "犀浦东",
            "hot": 51251,
            "priority": 0
        },
        {
            "stationCode": "xinsongpu",
            "match": "xsp|xinsongpu",
            "stationName": "新松浦",
            "hot": 51239,
            "priority": 1
        },
        {
            "stationCode": "xianglan",
            "match": "xl|xianglan",
            "stationName": "香兰",
            "hot": 50351,
            "priority": 1
        },
        {
            "stationCode": "xuangang",
            "match": "xg|xuangang",
            "stationName": "轩岗",
            "hot": 48905,
            "priority": 1
        },
        {
            "stationCode": "xizhelimu",
            "match": "xzlm|xizhelimu",
            "stationName": "西哲里木",
            "hot": 48765,
            "priority": 1
        },
        {
            "stationCode": "xide",
            "match": "xd|xide",
            "stationName": "喜德",
            "hot": 47116,
            "priority": 1
        },
        {
            "stationCode": "xinlin",
            "match": "xl|xinlin",
            "stationName": "新林",
            "hot": 42082,
            "priority": 1
        },
        {
            "stationCode": "xinjiang1",
            "match": "xj|xinjiang",
            "stationName": "新绛",
            "hot": 41890,
            "priority": 1
        },
        {
            "stationCode": "xianfeng",
            "match": "xf|xianfeng",
            "stationName": "先锋",
            "hot": 41598,
            "priority": 0
        },
        {
            "stationCode": "xinhua1",
            "match": "xh|xinhua",
            "stationName": "新华",
            "hot": 41444,
            "priority": 1
        },
        {
            "stationCode": "xiuwu",
            "match": "xw|xiuwu",
            "stationName": "修武",
            "hot": 40291,
            "priority": 1
        },
        {
            "stationCode": "xichangnan",
            "match": "xcn|xichangnan",
            "stationName": "西昌南",
            "hot": 38120,
            "priority": 1
        },
        {
            "stationCode": "xiashe",
            "match": "xs|xiashe",
            "stationName": "下社",
            "hot": 36973,
            "priority": 1
        },
        {
            "stationCode": "xinyi1",
            "match": "xy|xinyi",
            "stationName": "信宜",
            "hot": 36436,
            "priority": 1
        },
        {
            "stationCode": "xiaoling",
            "match": "xl|xiaoling",
            "stationName": "小岭",
            "hot": 35991,
            "priority": 1
        },
        {
            "stationCode": "xiwuqi",
            "match": "xwq|xiwuqi",
            "stationName": "西乌旗",
            "hot": 34893,
            "priority": 1
        },
        {
            "stationCode": "xiabancheng",
            "match": "xbc|xiabancheng",
            "stationName": "下板城",
            "hot": 34709,
            "priority": 1
        },
        {
            "stationCode": "xiaoxinjie",
            "match": "xxj|xiaoxinjie",
            "stationName": "小新街",
            "hot": 33167,
            "priority": 1
        },
        {
            "stationCode": "xiachengzi",
            "match": "xcz|xiachengzi",
            "stationName": "下城子",
            "hot": 33111,
            "priority": 1
        },
        {
            "stationCode": "xixiaozhao",
            "match": "xxz|xixiaozhao",
            "stationName": "西小召",
            "hot": 32980,
            "priority": 1
        },
        {
            "stationCode": "xujiatun",
            "match": "xjt|xujiatun",
            "stationName": "许家屯",
            "hot": 31526,
            "priority": 1
        },
        {
            "stationCode": "ximashan",
            "match": "xms|ximashan",
            "stationName": "西麻山",
            "hot": 29387,
            "priority": 1
        },
        {
            "stationCode": "xujia",
            "match": "xj|xujia",
            "stationName": "徐家",
            "hot": 28067,
            "priority": 1
        },
        {
            "stationCode": "xifeng1",
            "match": "xf|xifeng",
            "stationName": "西丰",
            "hot": 27007,
            "priority": 1
        },
        {
            "stationCode": "xiangzhanglu",
            "match": "xzl|xiangzhanglu",
            "stationName": "香樟路",
            "hot": 25925,
            "priority": 0
        },
        {
            "stationCode": "xiaoxi",
            "match": "xx|xiaoxi",
            "stationName": "孝西",
            "hot": 24539,
            "priority": 1
        },
        {
            "stationCode": "xiangyang",
            "match": "xy|xiangyang",
            "stationName": "向阳",
            "hot": 23230,
            "priority": 1
        },
        {
            "stationCode": "xiangfulu",
            "match": "xfl|xiangfulu",
            "stationName": "湘府路",
            "hot": 23155,
            "priority": 0
        },
        {
            "stationCode": "xianghe",
            "match": "xh|xianghe",
            "stationName": "襄河",
            "hot": 22926,
            "priority": 1
        },
        {
            "stationCode": "xingkai",
            "match": "xk|xingkai",
            "stationName": "兴凯",
            "hot": 20967,
            "priority": 1
        },
        {
            "stationCode": "xianningdong",
            "match": "xnd|xianningdong",
            "stationName": "咸宁东",
            "hot": 20917,
            "priority": 0
        },
        {
            "stationCode": "xinqing",
            "match": "xq|xinqing",
            "stationName": "新青",
            "hot": 20862,
            "priority": 1
        },
        {
            "stationCode": "xinlizhen",
            "match": "xlz|xinlizhen",
            "stationName": "新立镇",
            "hot": 19511,
            "priority": 1
        },
        {
            "stationCode": "xiaoyangqi",
            "match": "xyq|xiaoyangqi",
            "stationName": "小扬气",
            "hot": 18195,
            "priority": 1
        },
        {
            "stationCode": "xiaojinkou",
            "match": "xiaojinkou|xjk",
            "stationName": "小金口",
            "hot": 17258,
            "priority": 1
        },
        {
            "stationCode": "xingan",
            "match": "xa|xingan",
            "stationName": "兴安",
            "hot": 17145,
            "priority": 1
        },
        {
            "stationCode": "xiashi",
            "match": "xs|xiashi",
            "stationName": "夏石",
            "hot": 16849,
            "priority": 1
        },
        {
            "stationCode": "xiataizi",
            "match": "xtz|xiataizi",
            "stationName": "下台子",
            "hot": 16677,
            "priority": 1
        },
        {
            "stationCode": "xianlin",
            "match": "xl|xianlin",
            "stationName": "仙林",
            "hot": 16606,
            "priority": 1
        },
        {
            "stationCode": "xingshu",
            "match": "xs|xingshu",
            "stationName": "杏树",
            "hot": 15879,
            "priority": 1
        },
        {
            "stationCode": "xianrenqiao",
            "match": "xrq|xianrenqiao",
            "stationName": "仙人桥",
            "hot": 15851,
            "priority": 1
        },
        {
            "stationCode": "xinhuatun",
            "match": "xht|xinhuatun",
            "stationName": "新华屯",
            "hot": 15687,
            "priority": 1
        },
        {
            "stationCode": "xiaoyugu",
            "match": "xyg|xiaoyugu",
            "stationName": "小雨谷",
            "hot": 13924,
            "priority": 1
        },
        {
            "stationCode": "xihudong",
            "match": "xihudong|xhd",
            "stationName": "西湖东",
            "hot": 13776,
            "priority": 1
        },
        {
            "stationCode": "xiejiazhen",
            "match": "xjz|xiejiazhen",
            "stationName": "谢家镇",
            "hot": 13758,
            "priority": 1
        },
        {
            "stationCode": "xiamatang",
            "match": "xmt|xiamatang",
            "stationName": "下马塘",
            "hot": 11624,
            "priority": 1
        },
        {
            "stationCode": "xizi",
            "match": "xz|xizi",
            "stationName": "汐子",
            "hot": 11068,
            "priority": 1
        },
        {
            "stationCode": "xigucheng",
            "match": "xgc|xigucheng",
            "stationName": "西固城",
            "hot": 10558,
            "priority": 1
        },
        {
            "stationCode": "xuanhe",
            "match": "xh|xuanhe",
            "stationName": "宣和",
            "hot": 9289,
            "priority": 1
        },
        {
            "stationCode": "xinglongdian",
            "match": "xld|xinglongdian",
            "stationName": "兴隆店",
            "hot": 9086,
            "priority": 1
        },
        {
            "stationCode": "xiaoshao",
            "match": "xs|xiaoshao",
            "stationName": "小哨",
            "hot": 8738,
            "priority": 1
        },
        {
            "stationCode": "xinzhangfang",
            "match": "xzf|xinzhangfang",
            "stationName": "新帐房",
            "hot": 8001,
            "priority": 1
        },
        {
            "stationCode": "xinzhangzi",
            "match": "xzz|xinzhangzi",
            "stationName": "新杖子",
            "hot": 7779,
            "priority": 1
        },
        {
            "stationCode": "xigangzi",
            "match": "xgz|xigangzi",
            "stationName": "西岗子",
            "hot": 7476,
            "priority": 1
        },
        {
            "stationCode": "xiaonan",
            "match": "xn|xiaonan",
            "stationName": "孝南",
            "hot": 7176,
            "priority": 1
        },
        {
            "stationCode": "xinyangzhen",
            "match": "xyz|xinyangzhen",
            "stationName": "新阳镇",
            "hot": 6962,
            "priority": 1
        },
        {
            "stationCode": "xiyangcun",
            "match": "xyc|xiyangcun",
            "stationName": "西阳村",
            "hot": 6912,
            "priority": 1
        },
        {
            "stationCode": "xiehejian",
            "match": "xhj|xiehejian",
            "stationName": "斜河涧",
            "hot": 6656,
            "priority": 1
        },
        {
            "stationCode": "xinan",
            "match": "xa|xinan",
            "stationName": "新安",
            "hot": 6625,
            "priority": 1
        },
        {
            "stationCode": "xusanwan",
            "match": "xsw|xusanwan",
            "stationName": "许三湾",
            "hot": 6530,
            "priority": 1
        },
        {
            "stationCode": "xinli",
            "match": "xl|xinli",
            "stationName": "新李",
            "hot": 5890,
            "priority": 1
        },
        {
            "stationCode": "xinwopu",
            "match": "xwp|xinwopu",
            "stationName": "新窝铺",
            "hot": 5772,
            "priority": 1
        },
        {
            "stationCode": "xiaguanying",
            "match": "xgy|xiaguanying",
            "stationName": "夏官营",
            "hot": 5674,
            "priority": 1
        },
        {
            "stationCode": "xiaoheyan",
            "match": "xhy|xiaoheyan",
            "stationName": "小河沿",
            "hot": 5661,
            "priority": 1
        },
        {
            "stationCode": "xiaocun",
            "match": "xc|xiaocun",
            "stationName": "小村",
            "hot": 5096,
            "priority": 1
        },
        {
            "stationCode": "xiaosigou",
            "match": "xsg|xiaosigou",
            "stationName": "小寺沟",
            "hot": 4729,
            "priority": 1
        },
        {
            "stationCode": "xuanzhong",
            "match": "xz|xuanzhong",
            "stationName": "悬钟",
            "hot": 4330,
            "priority": 1
        },
        {
            "stationCode": "xujiatai",
            "match": "xjt|xujiatai",
            "stationName": "许家台",
            "hot": 3915,
            "priority": 1
        },
        {
            "stationCode": "xiaoyuejiu",
            "match": "xyj|xiaoyuejiu",
            "stationName": "小月旧",
            "hot": 3902,
            "priority": 1
        },
        {
            "stationCode": "xiaodejiang",
            "match": "xdj|xiaodejiang",
            "stationName": "小得江",
            "hot": 3749,
            "priority": 1
        },
        {
            "stationCode": "xinpingtian",
            "match": "xpt|xinpingtian",
            "stationName": "新坪田",
            "hot": 3560,
            "priority": 1
        },
        {
            "stationCode": "xinjiang",
            "match": "xj|xinjiang",
            "stationName": "新江",
            "hot": 3512,
            "priority": 1
        },
        {
            "stationCode": "xidamiao",
            "match": "xdm|xidamiao",
            "stationName": "西大庙",
            "hot": 3069,
            "priority": 1
        },
        {
            "stationCode": "xingquanpu",
            "match": "xqp|xingquanpu",
            "stationName": "兴泉堡",
            "hot": 3001,
            "priority": 1
        },
        {
            "stationCode": "xijiekou",
            "match": "xjk|xijiekou",
            "stationName": "西街口",
            "hot": 2695,
            "priority": 1
        },
        {
            "stationCode": "xiaoshi",
            "match": "xs|xiaoshi",
            "stationName": "小市",
            "hot": 2432,
            "priority": 1
        },
        {
            "stationCode": "xinchuoyuan",
            "match": "xcy|xinchuoyuan",
            "stationName": "新绰源",
            "hot": 1592,
            "priority": 1
        },
        {
            "stationCode": "xinxingxian",
            "match": "xxx|xinxingxian",
            "stationName": "新兴县",
            "hot": 1459,
            "priority": 1
        },
        {
            "stationCode": "xiaoxizhuang",
            "match": "xxz|xiaoxizhuang",
            "stationName": "小西庄",
            "hot": 1098,
            "priority": 1
        },
        {
            "stationCode": "xinle",
            "match": "xl|xinle",
            "stationName": "新乐",
            "hot": 1085,
            "priority": 1
        },
        {
            "stationCode": "xigu",
            "match": "xg|xigu",
            "stationName": "西固",
            "hot": 891,
            "priority": 1
        },
        {
            "stationCode": "xibali",
            "match": "xbl|xibali",
            "stationName": "西八里",
            "hot": 447,
            "priority": 1
        },
        {
            "stationCode": "xinchengzi",
            "match": "xcz|xinchengzi",
            "stationName": "新城子",
            "hot": 437,
            "priority": 1
        },
        {
            "stationCode": "xiaodong",
            "match": "xd|xiaodong",
            "stationName": "小董",
            "hot": 96,
            "priority": 1
        },
        {
            "stationCode": "xinbaoan",
            "match": "xba|xinbaoan",
            "stationName": "新保安",
            "hot": 58,
            "priority": 1
        }
    ],
    "Y": [
        {
            "stationCode": "yiwu",
            "match": "ywu|yiwu",
            "stationName": "义乌",
            "hot": 9577162,
            "priority": 10
        },
        {
            "stationCode": "yichun1",
            "match": "yc|yichun",
            "stationName": "宜春",
            "hot": 4284352,
            "priority": 1
        },
        {
            "stationCode": "yueyang",
            "match": "yya|yueyang",
            "stationName": "岳阳",
            "hot": 3662514,
            "priority": 1
        },
        {
            "stationCode": "yantai",
            "match": "yta|yantai",
            "stationName": "烟台",
            "hot": 3494842,
            "priority": 10
        },
        {
            "stationCode": "yingtan",
            "match": "yt|yingtan",
            "stationName": "鹰潭",
            "hot": 3397821,
            "priority": 1
        },
        {
            "stationCode": "yichangdong",
            "match": "ycd|yichangdong",
            "stationName": "宜昌东",
            "hot": 3375289,
            "priority": 1
        },
        {
            "stationCode": "yongzhou",
            "match": "yzh|yongzhou",
            "stationName": "永州",
            "hot": 3325020,
            "priority": 1
        },
        {
            "stationCode": "yinchuan",
            "match": "yc|yinchuan",
            "stationName": "银川",
            "hot": 2959916,
            "priority": 26
        },
        {
            "stationCode": "yulin1",
            "match": "yli|yulin",
            "stationName": "玉林",
            "hot": 2425535,
            "priority": 1
        },
        {
            "stationCode": "yanan",
            "match": "yan|yanan",
            "stationName": "延安",
            "hot": 2386250,
            "priority": 10
        },
        {
            "stationCode": "yueyangdong",
            "match": "yyd|yueyangdong",
            "stationName": "岳阳东",
            "hot": 2333645,
            "priority": 1
        },
        {
            "stationCode": "yuyaobei",
            "match": "yyb|yuyaobei",
            "stationName": "余姚北",
            "hot": 2278241,
            "priority": 1
        },
        {
            "stationCode": "yanzhou",
            "match": "yz|yanzhou",
            "stationName": "兖州",
            "hot": 2176937,
            "priority": 1
        },
        {
            "stationCode": "yulin",
            "match": "yl|yulin",
            "stationName": "榆林",
            "hot": 2136006,
            "priority": 1
        },
        {
            "stationCode": "yangzhou",
            "match": "yz|yangzhou",
            "stationName": "扬州",
            "hot": 2130070,
            "priority": 1
        },
        {
            "stationCode": "yancheng1",
            "match": "yc|yancheng",
            "stationName": "盐城",
            "hot": 1753526,
            "priority": 10
        },
        {
            "stationCode": "yichang",
            "match": "yc|yichang",
            "stationName": "宜昌",
            "hot": 1640920,
            "priority": 10
        },
        {
            "stationCode": "yingtanbei",
            "match": "ytb|yingtanbei",
            "stationName": "鹰潭北",
            "hot": 1639073,
            "priority": 1
        },
        {
            "stationCode": "yuncheng",
            "match": "yc|yuncheng",
            "stationName": "运城",
            "hot": 1583000,
            "priority": 10
        },
        {
            "stationCode": "yangquanbei",
            "match": "yqb|yangquanbei",
            "stationName": "阳泉北",
            "hot": 1454162,
            "priority": 1
        },
        {
            "stationCode": "yixing",
            "match": "yx|yixing",
            "stationName": "宜兴",
            "hot": 1428011,
            "priority": 1
        },
        {
            "stationCode": "yiyang",
            "match": "yy|yiyang",
            "stationName": "益阳",
            "hot": 1260655,
            "priority": 1
        },
        {
            "stationCode": "yangxin",
            "match": "yxi|yangxin",
            "stationName": "阳新",
            "hot": 1180085,
            "priority": 1
        },
        {
            "stationCode": "yuyao",
            "match": "yy|yuyao",
            "stationName": "余姚",
            "hot": 1107127,
            "priority": 1
        },
        {
            "stationCode": "yuci",
            "match": "yc|yuci",
            "stationName": "榆次",
            "hot": 1079999,
            "priority": 1
        },
        {
            "stationCode": "yongkangnan",
            "match": "ykn|yongkangnan",
            "stationName": "永康南",
            "hot": 1054826,
            "priority": 1
        },
        {
            "stationCode": "yunxiao",
            "match": "yx|yunxiao",
            "stationName": "云霄",
            "hot": 1003275,
            "priority": 0
        },
        {
            "stationCode": "yongkang",
            "match": "yk|yongkang",
            "stationName": "永康",
            "hot": 898054,
            "priority": 1
        },
        {
            "stationCode": "yunfudong",
            "match": "yfd|yunfudong",
            "stationName": "云浮东",
            "hot": 865234,
            "priority": 1
        },
        {
            "stationCode": "yiyang1",
            "match": "yy1|yiyang1",
            "stationName": "弋阳",
            "hot": 843498,
            "priority": 1
        },
        {
            "stationCode": "yangling",
            "match": "yl|yangling",
            "stationName": "杨陵",
            "hot": 838792,
            "priority": 1
        },
        {
            "stationCode": "yibin",
            "match": "yb|yibin",
            "stationName": "宜宾",
            "hot": 818983,
            "priority": 10
        },
        {
            "stationCode": "yingshan",
            "match": "ys|yingshan",
            "stationName": "营山",
            "hot": 812376,
            "priority": 1
        },
        {
            "stationCode": "yantainan",
            "match": "ytn|yantainan",
            "stationName": "烟台南",
            "hot": 757098,
            "priority": 1
        },
        {
            "stationCode": "yunchengbei",
            "match": "ycb|yunchengbei",
            "stationName": "运城北",
            "hot": 728746,
            "priority": 0
        },
        {
            "stationCode": "yuhang",
            "match": "yh|yuhang",
            "stationName": "余杭",
            "hot": 717295,
            "priority": 1
        },
        {
            "stationCode": "yongchengbei",
            "match": "ycb|yongchengbei",
            "stationName": "永城北",
            "hot": 666426,
            "priority": 0
        },
        {
            "stationCode": "yingdexi",
            "match": "ydx|yingdexi",
            "stationName": "英德西",
            "hot": 660684,
            "priority": 1
        },
        {
            "stationCode": "yingkoudong",
            "match": "ykd|yingkoudong",
            "stationName": "营口东",
            "hot": 635364,
            "priority": 1
        },
        {
            "stationCode": "yingkou",
            "match": "yk|yingkou",
            "stationName": "营口",
            "hot": 622158,
            "priority": 1
        },
        {
            "stationCode": "youxi",
            "match": "yx|youxi",
            "stationName": "尤溪",
            "hot": 621757,
            "priority": 1
        },
        {
            "stationCode": "yushannan",
            "match": "ysn|yushannan",
            "stationName": "玉山南",
            "hot": 620302,
            "priority": 1
        },
        {
            "stationCode": "yining",
            "match": "yn|yining",
            "stationName": "伊宁",
            "hot": 618003,
            "priority": 1
        },
        {
            "stationCode": "yushan",
            "match": "ysh|yushan",
            "stationName": "玉山",
            "hot": 616969,
            "priority": 1
        },
        {
            "stationCode": "yangquan",
            "match": "yqu|yangquan",
            "stationName": "阳泉",
            "hot": 616284,
            "priority": 1
        },
        {
            "stationCode": "yuncheng1",
            "match": "yc|yuncheng",
            "stationName": "郓城",
            "hot": 578791,
            "priority": 1
        },
        {
            "stationCode": "yichunxi",
            "match": "ycx|yichunxi",
            "stationName": "宜春西",
            "hot": 570482,
            "priority": 0
        },
        {
            "stationCode": "yanji",
            "match": "yji|yanji",
            "stationName": "延吉",
            "hot": 562916,
            "priority": 1
        },
        {
            "stationCode": "yangshuo",
            "match": "ys|yangshuo",
            "stationName": "阳朔",
            "hot": 561729,
            "priority": 1
        },
        {
            "stationCode": "yingde",
            "match": "yd|yingde",
            "stationName": "英德",
            "hot": 557829,
            "priority": 1
        },
        {
            "stationCode": "yuping",
            "match": "ypi|yuping",
            "stationName": "玉屏",
            "hot": 554427,
            "priority": 1
        },
        {
            "stationCode": "yudu",
            "match": "yd|yudu",
            "stationName": "于都",
            "hot": 554184,
            "priority": 1
        },
        {
            "stationCode": "yuanping",
            "match": "yp|yuanping",
            "stationName": "原平",
            "hot": 542603,
            "priority": 1
        },
        {
            "stationCode": "yunan",
            "match": "yn|yunan",
            "stationName": "郁南",
            "hot": 524936,
            "priority": 1
        },
        {
            "stationCode": "yanjixi",
            "match": "yanjixi|yjx",
            "stationName": "延吉西",
            "hot": 512232,
            "priority": 1
        },
        {
            "stationCode": "yongxiu",
            "match": "yx|yongxiu",
            "stationName": "永修",
            "hot": 453204,
            "priority": 1
        },
        {
            "stationCode": "yongchuandong",
            "match": "ycd|yongchuandong",
            "stationName": "永川东",
            "hot": 421925,
            "priority": 1
        },
        {
            "stationCode": "yunmeng",
            "match": "ym|yunmeng",
            "stationName": "云梦",
            "hot": 414815,
            "priority": 1
        },
        {
            "stationCode": "yongfunan",
            "match": "yfn|yongfunan",
            "stationName": "永福南",
            "hot": 397009,
            "priority": 0
        },
        {
            "stationCode": "yongjia",
            "match": "yj|yongjia",
            "stationName": "永嘉",
            "hot": 383353,
            "priority": 1
        },
        {
            "stationCode": "yangchun",
            "match": "yc|yangchun",
            "stationName": "阳春",
            "hot": 373414,
            "priority": 1
        },
        {
            "stationCode": "yanjiao",
            "match": "yj|yanjiao",
            "stationName": "燕郊",
            "hot": 365345,
            "priority": 1
        },
        {
            "stationCode": "yichun",
            "match": "ych|yichun",
            "stationName": "伊春",
            "hot": 319904,
            "priority": 10
        },
        {
            "stationCode": "youyang",
            "match": "yy|youyang",
            "stationName": "酉阳",
            "hot": 314675,
            "priority": 1
        },
        {
            "stationCode": "yucheng",
            "match": "yc|yucheng",
            "stationName": "禹城",
            "hot": 313596,
            "priority": 1
        },
        {
            "stationCode": "yandangshan",
            "match": "yds|yandangshan",
            "stationName": "雁荡山",
            "hot": 312219,
            "priority": 1
        },
        {
            "stationCode": "yakeshi",
            "match": "yks|yakeshi",
            "stationName": "牙克石",
            "hot": 305759,
            "priority": 1
        },
        {
            "stationCode": "yuxi",
            "match": "yx|yuxi",
            "stationName": "玉溪",
            "hot": 300512,
            "priority": 1
        },
        {
            "stationCode": "yongtai",
            "match": "yt|yongtai",
            "stationName": "永泰",
            "hot": 293595,
            "priority": 1
        },
        {
            "stationCode": "yumen",
            "match": "ym|yumen",
            "stationName": "玉门",
            "hot": 289104,
            "priority": 0
        },
        {
            "stationCode": "yutianxian",
            "match": "ytx|yutianxian",
            "stationName": "玉田县",
            "hot": 280388,
            "priority": 1
        },
        {
            "stationCode": "yanshi",
            "match": "ys|yanshi",
            "stationName": "偃师",
            "hot": 275723,
            "priority": 1
        },
        {
            "stationCode": "yueshan",
            "match": "ys|yueshan",
            "stationName": "月山",
            "hot": 248515,
            "priority": 1
        },
        {
            "stationCode": "yangpingguan",
            "match": "ypg|yangpingguan",
            "stationName": "阳平关",
            "hot": 241177,
            "priority": 1
        },
        {
            "stationCode": "yabuli",
            "match": "ybl|yabuli",
            "stationName": "亚布力",
            "hot": 239126,
            "priority": 1
        },
        {
            "stationCode": "yingcheng",
            "match": "yc|yingcheng",
            "stationName": "应城",
            "hot": 235023,
            "priority": 1
        },
        {
            "stationCode": "yanglingnan",
            "match": "yln|yanglingnan",
            "stationName": "杨陵南",
            "hot": 235010,
            "priority": 0
        },
        {
            "stationCode": "yizhou",
            "match": "yz|yizhou",
            "stationName": "宜州",
            "hot": 234408,
            "priority": 1
        },
        {
            "stationCode": "yongchuan",
            "match": "ych|yongchuan",
            "stationName": "永川",
            "hot": 230327,
            "priority": 1
        },
        {
            "stationCode": "yanggao",
            "match": "yg|yanggao",
            "stationName": "阳高",
            "hot": 226175,
            "priority": 1
        },
        {
            "stationCode": "yanjin1",
            "match": "yj|yanjin",
            "stationName": "盐津",
            "hot": 219952,
            "priority": 1
        },
        {
            "stationCode": "yongji",
            "match": "yji|yongji",
            "stationName": "永济",
            "hot": 218923,
            "priority": 1
        },
        {
            "stationCode": "yanqi",
            "match": "yq|yanqi",
            "stationName": "焉耆",
            "hot": 217124,
            "priority": 1
        },
        {
            "stationCode": "yancheng",
            "match": "yc|yancheng",
            "stationName": "晏城",
            "hot": 212309,
            "priority": 1
        },
        {
            "stationCode": "yuechi",
            "match": "yc|yuechi",
            "stationName": "岳池",
            "hot": 210932,
            "priority": 1
        },
        {
            "stationCode": "yanggu",
            "match": "yg|yanggu",
            "stationName": "阳谷",
            "hot": 206683,
            "priority": 1
        },
        {
            "stationCode": "yixian",
            "match": "yxi|yixian",
            "stationName": "义县",
            "hot": 203775,
            "priority": 1
        },
        {
            "stationCode": "yebaishou",
            "match": "ybs|yebaishou",
            "stationName": "叶柏寿",
            "hot": 200834,
            "priority": 1
        },
        {
            "stationCode": "yongjibei",
            "match": "yjb|yongjibei",
            "stationName": "永济北",
            "hot": 191584,
            "priority": 0
        },
        {
            "stationCode": "yalongwan",
            "match": "ylw|yalongwan",
            "stationName": "亚龙湾",
            "hot": 191538,
            "priority": 1
        },
        {
            "stationCode": "yuantan",
            "match": "yt|yuantan",
            "stationName": "源潭",
            "hot": 173204,
            "priority": 1
        },
        {
            "stationCode": "yimianpo",
            "match": "ymp|yimianpo",
            "stationName": "一面坡",
            "hot": 165083,
            "priority": 1
        },
        {
            "stationCode": "yanghe",
            "match": "yh|yanghe",
            "stationName": "洋河",
            "hot": 163362,
            "priority": 0
        },
        {
            "stationCode": "yazhou",
            "match": "yz|yazhou",
            "stationName": "崖州",
            "hot": 154613,
            "priority": 1
        },
        {
            "stationCode": "yingxian",
            "match": "yx|yingxian",
            "stationName": "应县",
            "hot": 153192,
            "priority": 1
        },
        {
            "stationCode": "yangliuqing",
            "match": "ylq|yangliuqing",
            "stationName": "杨柳青",
            "hot": 141474,
            "priority": 1
        },
        {
            "stationCode": "yangcun",
            "match": "ycu|yangcun",
            "stationName": "杨村",
            "hot": 139580,
            "priority": 1
        },
        {
            "stationCode": "yian",
            "match": "ya|yian",
            "stationName": "依安",
            "hot": 138780,
            "priority": 1
        },
        {
            "stationCode": "yushu",
            "match": "ys|yushu",
            "stationName": "榆树",
            "hot": 138662,
            "priority": 1
        },
        {
            "stationCode": "yuchengxian",
            "match": "ycx|yuchengxian",
            "stationName": "虞城县",
            "hot": 129408,
            "priority": 1
        },
        {
            "stationCode": "yangchenghu",
            "match": "ych|yangchenghu",
            "stationName": "阳澄湖",
            "hot": 128268,
            "priority": 1
        },
        {
            "stationCode": "yujiapu",
            "match": "yujiapu|yjp",
            "stationName": "于家堡",
            "hot": 125794,
            "priority": 1
        },
        {
            "stationCode": "yinan",
            "match": "yn|yinan",
            "stationName": "沂南",
            "hot": 116660,
            "priority": 1
        },
        {
            "stationCode": "yishui",
            "match": "ys|yishui",
            "stationName": "沂水",
            "hot": 114083,
            "priority": 1
        },
        {
            "stationCode": "yushe",
            "match": "ys|yushe",
            "stationName": "榆社",
            "hot": 111843,
            "priority": 1
        },
        {
            "stationCode": "yima",
            "match": "ym|yima",
            "stationName": "义马",
            "hot": 106807,
            "priority": 1
        },
        {
            "stationCode": "yintan",
            "match": "yt|yintan",
            "stationName": "银滩",
            "hot": 98734,
            "priority": 1
        },
        {
            "stationCode": "yuexi",
            "match": "yx|yuexi",
            "stationName": "越西",
            "hot": 97049,
            "priority": 1
        },
        {
            "stationCode": "yanchi1",
            "match": "yc|yanchi",
            "stationName": "盐池",
            "hot": 95852,
            "priority": 1
        },
        {
            "stationCode": "yongan",
            "match": "ya|yongan",
            "stationName": "永安",
            "hot": 92168,
            "priority": 1
        },
        {
            "stationCode": "yanling",
            "match": "yl|yanling",
            "stationName": "炎陵",
            "hot": 90997,
            "priority": 1
        },
        {
            "stationCode": "yongdeng",
            "match": "yd|yongdeng",
            "stationName": "永登",
            "hot": 90590,
            "priority": 1
        },
        {
            "stationCode": "yuquan",
            "match": "yqu|yuquan",
            "stationName": "玉泉",
            "hot": 86732,
            "priority": 1
        },
        {
            "stationCode": "yangqu",
            "match": "yq|yangqu",
            "stationName": "阳曲",
            "hot": 81841,
            "priority": 1
        },
        {
            "stationCode": "youxiannan",
            "match": "yxn|youxiannan",
            "stationName": "攸县南",
            "hot": 79236,
            "priority": 0
        },
        {
            "stationCode": "yingshouyingzi",
            "match": "ysyz|yingshouyingzi",
            "stationName": "鹰手营子",
            "hot": 75113,
            "priority": 1
        },
        {
            "stationCode": "yecheng",
            "match": "yc|yecheng",
            "stationName": "叶城",
            "hot": 73570,
            "priority": 1
        },
        {
            "stationCode": "yongding",
            "match": "yd|yongding",
            "stationName": "永定",
            "hot": 71593,
            "priority": 1
        },
        {
            "stationCode": "yuanmou",
            "match": "ym|yuanmou",
            "stationName": "元谋",
            "hot": 68758,
            "priority": 1
        },
        {
            "stationCode": "yicheng",
            "match": "yc|yicheng",
            "stationName": "宜城",
            "hot": 62926,
            "priority": 1
        },
        {
            "stationCode": "yushutun",
            "match": "yst|yushutun",
            "stationName": "榆树屯",
            "hot": 53320,
            "priority": 1
        },
        {
            "stationCode": "yangxin1",
            "match": "yx1|yangxin1|yx1",
            "stationName": "阳信",
            "hot": 51690,
            "priority": 1
        },
        {
            "stationCode": "yijiang",
            "match": "yj2|yijiang",
            "stationName": "弋江",
            "hot": 49777,
            "priority": 1
        },
        {
            "stationCode": "yatunpu",
            "match": "ytp|yatunpu",
            "stationName": "牙屯堡",
            "hot": 46851,
            "priority": 1
        },
        {
            "stationCode": "yiningdong",
            "match": "ynd|yiningdong",
            "stationName": "伊宁东",
            "hot": 45109,
            "priority": 1
        },
        {
            "stationCode": "yinlang",
            "match": "yl|yinlang",
            "stationName": "银浪",
            "hot": 44935,
            "priority": 1
        },
        {
            "stationCode": "yingjisha",
            "match": "yjs|yingjisha",
            "stationName": "英吉沙",
            "hot": 44142,
            "priority": 1
        },
        {
            "stationCode": "yantongshan",
            "match": "yts|yantongshan",
            "stationName": "烟筒山",
            "hot": 44041,
            "priority": 1
        },
        {
            "stationCode": "yitulihe",
            "match": "yth|yitulihe",
            "stationName": "伊图里河",
            "hot": 41883,
            "priority": 1
        },
        {
            "stationCode": "yujiang",
            "match": "yj|yujiang",
            "stationName": "余江",
            "hot": 41330,
            "priority": 1
        },
        {
            "stationCode": "yingbinlu",
            "match": "ybl|yingbinlu",
            "stationName": "迎宾路",
            "hot": 40473,
            "priority": 1
        },
        {
            "stationCode": "yangchang",
            "match": "yc|yangchang",
            "stationName": "羊场",
            "hot": 39781,
            "priority": 1
        },
        {
            "stationCode": "yanglin",
            "match": "yl|yanglin",
            "stationName": "杨林",
            "hot": 37890,
            "priority": 1
        },
        {
            "stationCode": "yantongtun",
            "match": "ytt|yantongtun",
            "stationName": "烟筒屯",
            "hot": 32600,
            "priority": 1
        },
        {
            "stationCode": "yonganxiang",
            "match": "yax|yonganxiang",
            "stationName": "永安乡",
            "hot": 32322,
            "priority": 1
        },
        {
            "stationCode": "yonglang",
            "match": "yl|yonglang",
            "stationName": "永郎",
            "hot": 31677,
            "priority": 1
        },
        {
            "stationCode": "yangang",
            "match": "yg|yangang",
            "stationName": "燕岗",
            "hot": 30653,
            "priority": 1
        },
        {
            "stationCode": "yundonghai",
            "match": "yundonghai|ydh",
            "stationName": "云东海",
            "hot": 28953,
            "priority": 1
        },
        {
            "stationCode": "yaodu",
            "match": "yd|yaodu",
            "stationName": "姚渡",
            "hot": 28787,
            "priority": 0
        },
        {
            "stationCode": "yingchun",
            "match": "yc|yingchun",
            "stationName": "迎春",
            "hot": 27270,
            "priority": 1
        },
        {
            "stationCode": "yilaha",
            "match": "ylh|yilaha",
            "stationName": "伊拉哈",
            "hot": 26836,
            "priority": 1
        },
        {
            "stationCode": "yangmingpu",
            "match": "ymp|yangmingpu",
            "stationName": "阳明堡",
            "hot": 26050,
            "priority": 1
        },
        {
            "stationCode": "yiliangbei",
            "match": "ylb|yiliangbei",
            "stationName": "宜良北",
            "hot": 25325,
            "priority": 1
        },
        {
            "stationCode": "yuanshi",
            "match": "ys|yuanshi",
            "stationName": "元氏",
            "hot": 23428,
            "priority": 1
        },
        {
            "stationCode": "yaojia",
            "match": "yj|yaojia",
            "stationName": "姚家",
            "hot": 23299,
            "priority": 1
        },
        {
            "stationCode": "yanliang",
            "match": "yl|yanliang",
            "stationName": "阎良",
            "hot": 23057,
            "priority": 1
        },
        {
            "stationCode": "youhao",
            "match": "yh|youhao",
            "stationName": "友好",
            "hot": 21991,
            "priority": 1
        },
        {
            "stationCode": "yangyi",
            "match": "yy|yangyi",
            "stationName": "阳邑",
            "hot": 18877,
            "priority": 1
        },
        {
            "stationCode": "yuanbaoshan",
            "match": "ybs|yuanbaoshan",
            "stationName": "元宝山",
            "hot": 18811,
            "priority": 1
        },
        {
            "stationCode": "yanhui",
            "match": "yh|yanhui",
            "stationName": "岩会",
            "hot": 17703,
            "priority": 1
        },
        {
            "stationCode": "yuliangpu",
            "match": "ylp|yuliangpu",
            "stationName": "余粮堡",
            "hot": 17501,
            "priority": 1
        },
        {
            "stationCode": "yesanpo",
            "match": "ysp|yesanpo",
            "stationName": "野三坡",
            "hot": 17284,
            "priority": 1
        },
        {
            "stationCode": "yongshou",
            "match": "ys|yongshou",
            "stationName": "永寿",
            "hot": 16547,
            "priority": 1
        },
        {
            "stationCode": "yanggang",
            "match": "yg|yanggang",
            "stationName": "杨岗",
            "hot": 15462,
            "priority": 1
        },
        {
            "stationCode": "yangcao",
            "match": "yc|yangcao",
            "stationName": "羊草",
            "hot": 15406,
            "priority": 1
        },
        {
            "stationCode": "youxian",
            "match": "yx|youxian",
            "stationName": "攸县",
            "hot": 14367,
            "priority": 1
        },
        {
            "stationCode": "yaoqianhutun",
            "match": "yqht|yaoqianhutun",
            "stationName": "姚千户屯",
            "hot": 12797,
            "priority": 1
        },
        {
            "stationCode": "yabulinan",
            "match": "ybln|yabulinan",
            "stationName": "亚布力南",
            "hot": 12120,
            "priority": 1
        },
        {
            "stationCode": "yiliang",
            "match": "yl|yiliang",
            "stationName": "彝良",
            "hot": 10087,
            "priority": 1
        },
        {
            "stationCode": "yaoan",
            "match": "ya|yaoan",
            "stationName": "姚安",
            "hot": 10081,
            "priority": 1
        },
        {
            "stationCode": "yunshan",
            "match": "yunshan|ys",
            "stationName": "云山",
            "hot": 9868,
            "priority": 1
        },
        {
            "stationCode": "yanchuan",
            "match": "yc|yanchuan",
            "stationName": "砚川",
            "hot": 9447,
            "priority": 1
        },
        {
            "stationCode": "yangquanqu",
            "match": "yqq|yangquanqu",
            "stationName": "阳泉曲",
            "hot": 9222,
            "priority": 1
        },
        {
            "stationCode": "yangshuling",
            "match": "ysl|yangshuling",
            "stationName": "杨树岭",
            "hot": 8994,
            "priority": 1
        },
        {
            "stationCode": "yangpu",
            "match": "yp|yangpu",
            "stationName": "羊堡",
            "hot": 8975,
            "priority": 1
        },
        {
            "stationCode": "yongledian",
            "match": "yld|yongledian",
            "stationName": "永乐店",
            "hot": 8361,
            "priority": 1
        },
        {
            "stationCode": "yuanyangzhen",
            "match": "yyz|yuanyangzhen",
            "stationName": "鸳鸯镇",
            "hot": 8312,
            "priority": 1
        },
        {
            "stationCode": "yanhecheng",
            "match": "yhc|yanhecheng",
            "stationName": "沿河城",
            "hot": 7958,
            "priority": 1
        },
        {
            "stationCode": "yimianshan",
            "match": "yms|yimianshan",
            "stationName": "一面山",
            "hot": 7580,
            "priority": 1
        },
        {
            "stationCode": "yayuan",
            "match": "yy|yayuan",
            "stationName": "鸭园",
            "hot": 7547,
            "priority": 1
        },
        {
            "stationCode": "yuge",
            "match": "yg|yuge",
            "stationName": "雨格",
            "hot": 7313,
            "priority": 1
        },
        {
            "stationCode": "yinping",
            "match": "yinping|yp",
            "stationName": "银瓶",
            "hot": 7241,
            "priority": 1
        },
        {
            "stationCode": "yimin",
            "match": "ym|yimin",
            "stationName": "伊敏",
            "hot": 5684,
            "priority": 0
        },
        {
            "stationCode": "yanzibian",
            "match": "yzb|yanzibian",
            "stationName": "燕子砭",
            "hot": 5407,
            "priority": 1
        },
        {
            "stationCode": "yueliangtian",
            "match": "ylt|yueliangtian",
            "stationName": "月亮田",
            "hot": 5046,
            "priority": 1
        },
        {
            "stationCode": "yijianpu",
            "match": "yjp|yijianpu",
            "stationName": "一间堡",
            "hot": 4860,
            "priority": 1
        },
        {
            "stationCode": "yangjiuhe",
            "match": "yjh|yangjiuhe",
            "stationName": "羊臼河",
            "hot": 4815,
            "priority": 1
        },
        {
            "stationCode": "yongfengying",
            "match": "yfy|yongfengying",
            "stationName": "永丰营",
            "hot": 4709,
            "priority": 1
        },
        {
            "stationCode": "yinai",
            "match": "yn|yinai",
            "stationName": "宜耐",
            "hot": 4572,
            "priority": 1
        },
        {
            "stationCode": "yangcheng",
            "match": "yc|yangcheng",
            "stationName": "阳城",
            "hot": 4520,
            "priority": 1
        },
        {
            "stationCode": "yuanqian",
            "match": "yq|yuanqian",
            "stationName": "源迁",
            "hot": 4295,
            "priority": 1
        },
        {
            "stationCode": "yunjusi",
            "match": "yjs|yunjusi",
            "stationName": "云居寺",
            "hot": 4269,
            "priority": 1
        },
        {
            "stationCode": "yindi",
            "match": "yd|yindi",
            "stationName": "尹地",
            "hot": 4220,
            "priority": 1
        },
        {
            "stationCode": "yushe1",
            "match": "ys|yushe1",
            "stationName": "玉舍",
            "hot": 4111,
            "priority": 0
        },
        {
            "stationCode": "yanshan",
            "match": "ys|yanshan",
            "stationName": "燕山",
            "hot": 3980,
            "priority": 1
        },
        {
            "stationCode": "yingjie",
            "match": "yj|yingjie",
            "stationName": "营街",
            "hot": 3967,
            "priority": 1
        },
        {
            "stationCode": "yangweishao",
            "match": "yws|yangweishao",
            "stationName": "羊尾哨",
            "hot": 3825,
            "priority": 1
        },
        {
            "stationCode": "yangcaodi",
            "match": "ycd|yangcaodi",
            "stationName": "秧草地",
            "hot": 3638,
            "priority": 1
        },
        {
            "stationCode": "yuxixi",
            "match": "yxx|yuxixi",
            "stationName": "玉溪西",
            "hot": 3566,
            "priority": 0
        },
        {
            "stationCode": "yangzhewo",
            "match": "yzw|yangzhewo",
            "stationName": "羊者窝",
            "hot": 3236,
            "priority": 1
        },
        {
            "stationCode": "yanqing",
            "match": "yqi|yanqing",
            "stationName": "延庆",
            "hot": 3038,
            "priority": 1
        },
        {
            "stationCode": "yanjiazhuang",
            "match": "yjz|yanjiazhuang",
            "stationName": "燕家庄",
            "hot": 2730,
            "priority": 1
        },
        {
            "stationCode": "yangzhangzi",
            "match": "yzz|yangzhangzi",
            "stationName": "杨杖子",
            "hot": 2551,
            "priority": 1
        },
        {
            "stationCode": "yizheng",
            "match": "yz|yizheng",
            "stationName": "仪征",
            "hot": 2529,
            "priority": 1
        },
        {
            "stationCode": "yushugou",
            "match": "ysg|yushugou",
            "stationName": "榆树沟",
            "hot": 2461,
            "priority": 1
        },
        {
            "stationCode": "yushi",
            "match": "ys|yushi",
            "stationName": "玉石",
            "hot": 2424,
            "priority": 1
        },
        {
            "stationCode": "yuandun",
            "match": "yd|yuandun",
            "stationName": "园墩",
            "hot": 1828,
            "priority": 1
        },
        {
            "stationCode": "yushutai",
            "match": "yst|yushutai",
            "stationName": "榆树台",
            "hot": 1795,
            "priority": 1
        },
        {
            "stationCode": "yuncailing",
            "match": "ycl|yuncailing",
            "stationName": "云彩岭",
            "hot": 1370,
            "priority": 1
        },
        {
            "stationCode": "yangcha",
            "match": "yc|yangcha",
            "stationName": "阳岔",
            "hot": 1279,
            "priority": 1
        },
        {
            "stationCode": "yuejiajing",
            "match": "yjj|yuejiajing",
            "stationName": "岳家井",
            "hot": 1195,
            "priority": 1
        },
        {
            "stationCode": "yizi",
            "match": "yz|yizi",
            "stationName": "迤资",
            "hot": 1187,
            "priority": 1
        },
        {
            "stationCode": "yaoshang",
            "match": "ys|yaoshang",
            "stationName": "窑上",
            "hot": 960,
            "priority": 1
        },
        {
            "stationCode": "yingpanshui",
            "match": "yps|yingpanshui",
            "stationName": "营盘水",
            "hot": 733,
            "priority": 1
        },
        {
            "stationCode": "yilin",
            "match": "yl|yilin",
            "stationName": "伊林",
            "hot": 599,
            "priority": 1
        },
        {
            "stationCode": "yirshi",
            "match": "yes|yirshi",
            "stationName": "伊尔施",
            "hot": 322,
            "priority": 1
        },
        {
            "stationCode": "yanchi",
            "match": "yc|yanchi",
            "stationName": "雁翅",
            "hot": 306,
            "priority": 1
        },
        {
            "stationCode": "yingchengzi",
            "match": "ycz|yingchengzi",
            "stationName": "营城子",
            "hot": 161,
            "priority": 1
        },
        {
            "stationCode": "yunlianghe",
            "match": "ylh|yunlianghe",
            "stationName": "运粮河",
            "hot": 48,
            "priority": 0
        }
    ],
    "Z": [
        {
            "stationCode": "zhengzhou",
            "match": "zz|zhengzhou",
            "stationName": "郑州",
            "hot": 27855583,
            "priority": 45
        },
        {
            "stationCode": "changsha",
            "match": "cs|changsha",
            "stationName": "长沙",
            "hot": 18899025,
            "priority": 44
        },
        {
            "stationCode": "chongqing",
            "match": "cq|chongqing",
            "stationName": "重庆",
            "hot": 10805706,
            "priority": 39
        },
        {
            "stationCode": "changchun",
            "match": "cc|changchun",
            "stationName": "长春",
            "hot": 10694900,
            "priority": 26
        },
        {
            "stationCode": "chongqingbei",
            "match": "cqb|chongqingbei",
            "stationName": "重庆北",
            "hot": 9321902,
            "priority": 1
        },
        {
            "stationCode": "changshanan",
            "match": "csn|changshanan",
            "stationName": "长沙南",
            "hot": 8677111,
            "priority": 1
        },
        {
            "stationCode": "zhengzhoudong",
            "match": "zzd|zhengzhoudong",
            "stationName": "郑州东",
            "hot": 7038162,
            "priority": 1
        },
        {
            "stationCode": "zhuzhou",
            "match": "zz|zhuzhou",
            "stationName": "株洲",
            "hot": 5687916,
            "priority": 10
        },
        {
            "stationCode": "zibo",
            "match": "zbo|zibo",
            "stationName": "淄博",
            "hot": 5269778,
            "priority": 10
        },
        {
            "stationCode": "zhenjiang",
            "match": "zj|zhenjiang",
            "stationName": "镇江",
            "hot": 3089354,
            "priority": 10
        },
        {
            "stationCode": "zhumadian",
            "match": "zmd|zhumadian",
            "stationName": "驻马店",
            "hot": 2911522,
            "priority": 1
        },
        {
            "stationCode": "zhangzhou",
            "match": "zz|zhangzhou",
            "stationName": "漳州",
            "hot": 2895036,
            "priority": 1
        },
        {
            "stationCode": "zhuhai",
            "match": "zh|zhuhai",
            "stationName": "珠海",
            "hot": 2787551,
            "priority": 10
        },
        {
            "stationCode": "zhuji",
            "match": "zj|zhuji",
            "stationName": "诸暨",
            "hot": 2572841,
            "priority": 1
        },
        {
            "stationCode": "zhuzhouxi",
            "match": "zzx|zhuzhouxi",
            "stationName": "株洲西",
            "hot": 2091591,
            "priority": 1
        },
        {
            "stationCode": "zaozhuang",
            "match": "zz|zaozhuang",
            "stationName": "枣庄",
            "hot": 1897418,
            "priority": 10
        },
        {
            "stationCode": "zhaoqing",
            "match": "zq|zhaoqing",
            "stationName": "肇庆",
            "hot": 1776326,
            "priority": 10
        },
        {
            "stationCode": "zunyi",
            "match": "zyi|zunyi",
            "stationName": "遵义",
            "hot": 1733205,
            "priority": 10
        },
        {
            "stationCode": "zhangjiajie",
            "match": "zjj|zhangjiajie",
            "stationName": "张家界",
            "hot": 1563562,
            "priority": 10
        },
        {
            "stationCode": "zhongshan1",
            "match": "zs|zhongshan",
            "stationName": "中山",
            "hot": 1522432,
            "priority": 1
        },
        {
            "stationCode": "zhanjiang",
            "match": "zji|zhanjiang",
            "stationName": "湛江",
            "hot": 1469309,
            "priority": 10
        },
        {
            "stationCode": "zhaoqingdong",
            "match": "zqd|zhaoqingdong",
            "stationName": "肇庆东",
            "hot": 1399805,
            "priority": 1
        },
        {
            "stationCode": "zhumadianxi",
            "match": "zmdx|zhumadianxi",
            "stationName": "驻马店西",
            "hot": 1273216,
            "priority": 1
        },
        {
            "stationCode": "zhangjiakounan",
            "match": "zjkn|zhangjiakounan",
            "stationName": "张家口南",
            "hot": 1167576,
            "priority": 1
        },
        {
            "stationCode": "zhenjiangnan",
            "match": "zjn|zhenjiangnan",
            "stationName": "镇江南",
            "hot": 1152033,
            "priority": 1
        },
        {
            "stationCode": "changzhi",
            "match": "cz|changzhi",
            "stationName": "长治",
            "hot": 1142516,
            "priority": 1
        },
        {
            "stationCode": "zhangqiu",
            "match": "zq|zhangqiu",
            "stationName": "章丘",
            "hot": 1124125,
            "priority": 1
        },
        {
            "stationCode": "changchunxi",
            "match": "ccx|changchunxi",
            "stationName": "长春西",
            "hot": 1095865,
            "priority": 1
        },
        {
            "stationCode": "zhangye",
            "match": "zy|zhangye",
            "stationName": "张掖",
            "hot": 1042633,
            "priority": 1
        },
        {
            "stationCode": "zhoukou",
            "match": "zk|zhoukou",
            "stationName": "周口",
            "hot": 1014251,
            "priority": 1
        },
        {
            "stationCode": "zhongwei",
            "match": "zwe|zhongwei",
            "stationName": "中卫",
            "hot": 1012472,
            "priority": 1
        },
        {
            "stationCode": "zhongshanxi",
            "match": "zsx|zhongshanxi",
            "stationName": "钟山西",
            "hot": 975507,
            "priority": 1
        },
        {
            "stationCode": "zhaotong",
            "match": "zt|zhaotong",
            "stationName": "昭通",
            "hot": 915624,
            "priority": 1
        },
        {
            "stationCode": "zhaodong1",
            "match": "zd|zhaodong",
            "stationName": "肇东",
            "hot": 910470,
            "priority": 1
        },
        {
            "stationCode": "zaozhuangxi",
            "match": "zzx|zaozhuangxi",
            "stationName": "枣庄西",
            "hot": 866205,
            "priority": 1
        },
        {
            "stationCode": "changxing",
            "match": "cx|changxing",
            "stationName": "长兴",
            "hot": 842253,
            "priority": 1
        },
        {
            "stationCode": "zhangjiakou",
            "match": "zjk|zhangjiakou",
            "stationName": "张家口",
            "hot": 770514,
            "priority": 10
        },
        {
            "stationCode": "zhongshanbei",
            "match": "zsb|zhongshanbei",
            "stationName": "中山北",
            "hot": 686906,
            "priority": 1
        },
        {
            "stationCode": "zaoyang1",
            "match": "zy|zaoyang",
            "stationName": "枣阳",
            "hot": 682052,
            "priority": 1
        },
        {
            "stationCode": "zhangpu",
            "match": "zp|zhangpu",
            "stationName": "漳浦",
            "hot": 676029,
            "priority": 0
        },
        {
            "stationCode": "zhangshu",
            "match": "zs|zhangshu",
            "stationName": "樟树",
            "hot": 650087,
            "priority": 1
        },
        {
            "stationCode": "zhaoan",
            "match": "za|zhaoan",
            "stationName": "诏安",
            "hot": 648939,
            "priority": 0
        },
        {
            "stationCode": "zoucheng",
            "match": "zc|zoucheng",
            "stationName": "邹城",
            "hot": 567550,
            "priority": 1
        },
        {
            "stationCode": "zichang",
            "match": "zc|zichang",
            "stationName": "子长",
            "hot": 538454,
            "priority": 1
        },
        {
            "stationCode": "changshoubei",
            "match": "csb|changshoubei",
            "stationName": "长寿北",
            "hot": 519978,
            "priority": 1
        },
        {
            "stationCode": "ziyang1",
            "match": "zy|ziyang",
            "stationName": "资阳",
            "hot": 514365,
            "priority": 1
        },
        {
            "stationCode": "zhengzhouxi",
            "match": "zzx|zhengzhouxi",
            "stationName": "郑州西",
            "hot": 460894,
            "priority": 1
        },
        {
            "stationCode": "zhuozhoudong",
            "match": "zzd|zhuozhoudong",
            "stationName": "涿州东",
            "hot": 442656,
            "priority": 1
        },
        {
            "stationCode": "zhuozhou",
            "match": "zz|zhuozhou",
            "stationName": "涿州",
            "hot": 432542,
            "priority": 1
        },
        {
            "stationCode": "zhenping",
            "match": "zp|zhenping",
            "stationName": "镇平",
            "hot": 432478,
            "priority": 1
        },
        {
            "stationCode": "zigong",
            "match": "zgo|zigong",
            "stationName": "自贡",
            "hot": 425150,
            "priority": 10
        },
        {
            "stationCode": "changtingnan",
            "match": "ctn|changtingnan",
            "stationName": "长汀南",
            "hot": 420796,
            "priority": 1
        },
        {
            "stationCode": "zhanjiangxi",
            "match": "zjx|zhanjiangxi",
            "stationName": "湛江西",
            "hot": 378877,
            "priority": 1
        },
        {
            "stationCode": "zhengdingjichang",
            "match": "zdjc|zhengdingjichang",
            "stationName": "正定机场",
            "hot": 374207,
            "priority": 1
        },
        {
            "stationCode": "zhalantun",
            "match": "zlt|zhalantun",
            "stationName": "扎兰屯",
            "hot": 363946,
            "priority": 1
        },
        {
            "stationCode": "changxingnan",
            "match": "cxn|changxingnan",
            "stationName": "长兴南",
            "hot": 361679,
            "priority": 1
        },
        {
            "stationCode": "zizhongbei",
            "match": "zzb|zizhongbei",
            "stationName": "资中北",
            "hot": 357710,
            "priority": 1
        },
        {
            "stationCode": "zhuanghebei",
            "match": "zgb|zhuanghebei",
            "stationName": "庄河北",
            "hot": 353862,
            "priority": 1
        },
        {
            "stationCode": "zhangyexi",
            "match": "zyx|zhangyexi",
            "stationName": "张掖西",
            "hot": 335647,
            "priority": 1
        },
        {
            "stationCode": "zhijiangbei",
            "match": "zjb|zhijiangbei",
            "stationName": "枝江北",
            "hot": 335456,
            "priority": 1
        },
        {
            "stationCode": "zhenyuan",
            "match": "zy|zhenyuan",
            "stationName": "镇远",
            "hot": 314836,
            "priority": 1
        },
        {
            "stationCode": "zhangwu",
            "match": "zw|zhangwu",
            "stationName": "彰武",
            "hot": 280212,
            "priority": 1
        },
        {
            "stationCode": "zhongxiang",
            "match": "zx|zhongxiang",
            "stationName": "钟祥",
            "hot": 266938,
            "priority": 1
        },
        {
            "stationCode": "changge",
            "match": "cg|changge",
            "stationName": "长葛",
            "hot": 264558,
            "priority": 1
        },
        {
            "stationCode": "zhucheng",
            "match": "zc|zhucheng",
            "stationName": "诸城",
            "hot": 257218,
            "priority": 1
        },
        {
            "stationCode": "ziyangbei",
            "match": "zyb|ziyangbei",
            "stationName": "资阳北",
            "hot": 245825,
            "priority": 1
        },
        {
            "stationCode": "zhenan",
            "match": "za|zhenan",
            "stationName": "镇安",
            "hot": 233670,
            "priority": 1
        },
        {
            "stationCode": "zhongning",
            "match": "zn|zhongning",
            "stationName": "中宁",
            "hot": 229071,
            "priority": 1
        },
        {
            "stationCode": "zhengding",
            "match": "zhengding|zd",
            "stationName": "正定",
            "hot": 225200,
            "priority": 1
        },
        {
            "stationCode": "zhangmutou",
            "match": "zmt|zhangmutou",
            "stationName": "樟木头",
            "hot": 224139,
            "priority": 1
        },
        {
            "stationCode": "changzhibei",
            "match": "czb|changzhibei",
            "stationName": "长治北",
            "hot": 223607,
            "priority": 1
        },
        {
            "stationCode": "ziyang",
            "match": "zy|ziyang",
            "stationName": "紫阳",
            "hot": 207390,
            "priority": 1
        },
        {
            "stationCode": "changyuan",
            "match": "cyu|changyuan",
            "stationName": "长垣",
            "hot": 202154,
            "priority": 1
        },
        {
            "stationCode": "zhuhaibei",
            "match": "zhb|zhuhaibei",
            "stationName": "珠海北",
            "hot": 199837,
            "priority": 1
        },
        {
            "stationCode": "zaozhuangdong",
            "match": "zzd|zaozhuangdong",
            "stationName": "枣庄东",
            "hot": 197449,
            "priority": 0
        },
        {
            "stationCode": "zhijiang",
            "match": "zj|zhijiang",
            "stationName": "芷江",
            "hot": 191637,
            "priority": 1
        },
        {
            "stationCode": "changshou",
            "match": "csh|changshou",
            "stationName": "长寿",
            "hot": 179797,
            "priority": 1
        },
        {
            "stationCode": "zizhong",
            "match": "zz|zizhong",
            "stationName": "资中",
            "hot": 174818,
            "priority": 1
        },
        {
            "stationCode": "zaoqiang",
            "match": "zq|zaoqiang",
            "stationName": "枣强",
            "hot": 167842,
            "priority": 1
        },
        {
            "stationCode": "zhangzhoudong",
            "match": "zzd|zhangzhoudong",
            "stationName": "漳州东",
            "hot": 166211,
            "priority": 1
        },
        {
            "stationCode": "zizhou",
            "match": "zz|zizhou",
            "stationName": "子洲",
            "hot": 148690,
            "priority": 1
        },
        {
            "stationCode": "zhangshudong",
            "match": "zsd|zhangshudong",
            "stationName": "樟树东",
            "hot": 144946,
            "priority": 1
        },
        {
            "stationCode": "zhengxiangbaiqi",
            "match": "zxbq|zhengxiangbaiqi",
            "stationName": "正镶白旗",
            "hot": 136655,
            "priority": 1
        },
        {
            "stationCode": "zhenlai",
            "match": "zl|zhenlai",
            "stationName": "镇赉",
            "hot": 134733,
            "priority": 1
        },
        {
            "stationCode": "zixi1",
            "match": "zx|zixi",
            "stationName": "资溪",
            "hot": 132938,
            "priority": 1
        },
        {
            "stationCode": "changqingqiao",
            "match": "cqq|changqingqiao",
            "stationName": "长庆桥",
            "hot": 128403,
            "priority": 1
        },
        {
            "stationCode": "zhuozidong",
            "match": "zzd|zhuozidong",
            "stationName": "卓资东",
            "hot": 128073,
            "priority": 1
        },
        {
            "stationCode": "chongqingnan",
            "match": "cqn|chongqingnan",
            "stationName": "重庆南",
            "hot": 121375,
            "priority": 1
        },
        {
            "stationCode": "changting",
            "match": "cti|changting",
            "stationName": "长汀",
            "hot": 116167,
            "priority": 1
        },
        {
            "stationCode": "zhongchuanjichang",
            "match": "zcjc|zhongchuanjichang",
            "stationName": "中川机场",
            "hot": 105864,
            "priority": 1
        },
        {
            "stationCode": "zhijin",
            "match": "zj|zhijin",
            "stationName": "织金",
            "hot": 98418,
            "priority": 1
        },
        {
            "stationCode": "zhifangdong",
            "match": "zfd|zhifangdong",
            "stationName": "纸坊东",
            "hot": 91414,
            "priority": 0
        },
        {
            "stationCode": "zhaoguang",
            "match": "zg|zhaoguang",
            "stationName": "赵光",
            "hot": 90884,
            "priority": 1
        },
        {
            "stationCode": "zhalainuoerxi",
            "match": "zlnex|zhalainuoerxi",
            "stationName": "扎赉诺尔西",
            "hot": 86931,
            "priority": 1
        },
        {
            "stationCode": "zhangweitun",
            "match": "zwt|zhangweitun",
            "stationName": "张维屯",
            "hot": 86450,
            "priority": 1
        },
        {
            "stationCode": "zhangqiao",
            "match": "zq|zhangqiao",
            "stationName": "张桥",
            "hot": 86443,
            "priority": 1
        },
        {
            "stationCode": "changchunnan",
            "match": "ccn|changchunnan",
            "stationName": "长春南",
            "hot": 76879,
            "priority": 1
        },
        {
            "stationCode": "zhangping",
            "match": "zp|zhangping",
            "stationName": "漳平",
            "hot": 76282,
            "priority": 1
        },
        {
            "stationCode": "zhalute",
            "match": "zlt|zhalute",
            "stationName": "扎鲁特",
            "hot": 75766,
            "priority": 1
        },
        {
            "stationCode": "zhuangqiao",
            "match": "zq|zhuangqiao",
            "stationName": "庄桥",
            "hot": 74831,
            "priority": 1
        },
        {
            "stationCode": "changshouhu",
            "match": "csh|changshouhu",
            "stationName": "长寿湖",
            "hot": 68714,
            "priority": 0
        },
        {
            "stationCode": "zhujiagou",
            "match": "zjg|zhujiagou",
            "stationName": "朱家沟",
            "hot": 63624,
            "priority": 1
        },
        {
            "stationCode": "zhicheng",
            "match": "zc|zhicheng",
            "stationName": "枝城",
            "hot": 56823,
            "priority": 1
        },
        {
            "stationCode": "zhuozishan",
            "match": "zzs|zhuozishan",
            "stationName": "卓资山",
            "hot": 53931,
            "priority": 1
        },
        {
            "stationCode": "zhuzhounan",
            "match": "zzn|zhuzhounan",
            "stationName": "株洲南",
            "hot": 53424,
            "priority": 0
        },
        {
            "stationCode": "zepu",
            "match": "zp|zepu",
            "stationName": "泽普",
            "hot": 49944,
            "priority": 1
        },
        {
            "stationCode": "changlinhe",
            "match": "changlinhe|clh",
            "stationName": "长临河",
            "hot": 48260,
            "priority": 1
        },
        {
            "stationCode": "zuoling",
            "match": "zl|zuoling",
            "stationName": "左岭",
            "hot": 46865,
            "priority": 0
        },
        {
            "stationCode": "changshantun",
            "match": "cst|changshantun",
            "stationName": "长山屯",
            "hot": 44345,
            "priority": 1
        },
        {
            "stationCode": "zhashui",
            "match": "zs|zhashui",
            "stationName": "柞水",
            "hot": 43479,
            "priority": 1
        },
        {
            "stationCode": "zhongjiacun",
            "match": "zjc|zhongjiacun",
            "stationName": "钟家村",
            "hot": 43025,
            "priority": 1
        },
        {
            "stationCode": "changwu",
            "match": "cw|changwu",
            "stationName": "长武",
            "hot": 36983,
            "priority": 1
        },
        {
            "stationCode": "zhanggutai",
            "match": "zgt|zhanggutai",
            "stationName": "章古台",
            "hot": 31786,
            "priority": 1
        },
        {
            "stationCode": "zhongkai",
            "match": "zhongkai|zk",
            "stationName": "仲恺",
            "hot": 30767,
            "priority": 1
        },
        {
            "stationCode": "zhaocheng",
            "match": "zc|zhaocheng",
            "stationName": "赵城",
            "hot": 28454,
            "priority": 1
        },
        {
            "stationCode": "zhoujia",
            "match": "zj|zhoujia",
            "stationName": "周家",
            "hot": 25125,
            "priority": 1
        },
        {
            "stationCode": "zhangdang",
            "match": "zd|zhangdang",
            "stationName": "章党",
            "hot": 20061,
            "priority": 1
        },
        {
            "stationCode": "zhoujiatun",
            "match": "zjt|zhoujiatun",
            "stationName": "周家屯",
            "hot": 19504,
            "priority": 1
        },
        {
            "stationCode": "zhonghe",
            "match": "zh|zhonghe",
            "stationName": "中和",
            "hot": 19319,
            "priority": 1
        },
        {
            "stationCode": "zhangmutoudong",
            "match": "zhangmutoudong|zmtd",
            "stationName": "樟木头东",
            "hot": 18566,
            "priority": 1
        },
        {
            "stationCode": "zhian",
            "match": "za|zhian",
            "stationName": "治安",
            "hot": 18518,
            "priority": 1
        },
        {
            "stationCode": "zhuyuanba",
            "match": "zyb|zhuyuanba",
            "stationName": "竹园坝",
            "hot": 17494,
            "priority": 1
        },
        {
            "stationCode": "zhaoshan",
            "match": "zs|zhaoshan",
            "stationName": "昭山",
            "hot": 16226,
            "priority": 0
        },
        {
            "stationCode": "zhelimu",
            "match": "zlm|zhelimu",
            "stationName": "哲里木",
            "hot": 16081,
            "priority": 1
        },
        {
            "stationCode": "zhanglan",
            "match": "zl|zhanglan",
            "stationName": "张兰",
            "hot": 15894,
            "priority": 1
        },
        {
            "stationCode": "zaolin",
            "match": "zl|zaolin",
            "stationName": "枣林",
            "hot": 13699,
            "priority": 1
        },
        {
            "stationCode": "zhurihe",
            "match": "zrh|zhurihe",
            "stationName": "朱日和",
            "hot": 13165,
            "priority": 1
        },
        {
            "stationCode": "zhenchengdi",
            "match": "zcd|zhenchengdi",
            "stationName": "镇城底",
            "hot": 11206,
            "priority": 1
        },
        {
            "stationCode": "zhongningdong",
            "match": "znd|zhongningdong",
            "stationName": "中宁东",
            "hot": 10322,
            "priority": 1
        },
        {
            "stationCode": "zhongshan",
            "match": "zs|zhongshan",
            "stationName": "钟山",
            "hot": 10013,
            "priority": 1
        },
        {
            "stationCode": "changchong",
            "match": "cc|changchong",
            "stationName": "长冲",
            "hot": 7726,
            "priority": 1
        },
        {
            "stationCode": "zhujiayao",
            "match": "zjy|zhujiayao",
            "stationName": "朱家窑",
            "hot": 7115,
            "priority": 1
        },
        {
            "stationCode": "changyang",
            "match": "cy|changyang",
            "stationName": "长阳",
            "hot": 6860,
            "priority": 1
        },
        {
            "stationCode": "zhongningnan",
            "match": "znn|zhongningnan",
            "stationName": "中宁南",
            "hot": 6855,
            "priority": 1
        },
        {
            "stationCode": "zhuwo",
            "match": "zw|zhuwo",
            "stationName": "珠窝",
            "hot": 6691,
            "priority": 1
        },
        {
            "stationCode": "changzheng",
            "match": "cz|changzheng",
            "stationName": "长征",
            "hot": 6650,
            "priority": 1
        },
        {
            "stationCode": "zhuyangxi",
            "match": "zyx|zhuyangxi",
            "stationName": "朱杨溪",
            "hot": 6290,
            "priority": 1
        },
        {
            "stationCode": "zhaofupu",
            "match": "zfp|zhaofupu",
            "stationName": "照福铺",
            "hot": 5820,
            "priority": 1
        },
        {
            "stationCode": "zhijinbei",
            "match": "zjb|zhijinbei",
            "stationName": "织金北",
            "hot": 5453,
            "priority": 0
        },
        {
            "stationCode": "changnong",
            "match": "cn|changnong",
            "stationName": "长农",
            "hot": 4709,
            "priority": 1
        },
        {
            "stationCode": "zhangbaiwan",
            "match": "zbw|zhangbaiwan",
            "stationName": "张百湾",
            "hot": 3412,
            "priority": 1
        },
        {
            "stationCode": "zhongzhai",
            "match": "zz|zhongzhai",
            "stationName": "中寨",
            "hot": 3336,
            "priority": 1
        },
        {
            "stationCode": "zhangxin",
            "match": "zx|zhangxin",
            "stationName": "张辛",
            "hot": 3210,
            "priority": 1
        },
        {
            "stationCode": "changpoling",
            "match": "cpl|changpoling",
            "stationName": "长坡岭",
            "hot": 2677,
            "priority": 1
        },
        {
            "stationCode": "changdian",
            "match": "cd|changdian",
            "stationName": "长甸",
            "hot": 2672,
            "priority": 1
        },
        {
            "stationCode": "zhongmu",
            "match": "zm|zhongmu",
            "stationName": "中牟",
            "hot": 2539,
            "priority": 1
        },
        {
            "stationCode": "zijingguan",
            "match": "zjg|zijingguan",
            "stationName": "紫荆关",
            "hot": 2538,
            "priority": 1
        },
        {
            "stationCode": "changcheng",
            "match": "cch|changcheng",
            "stationName": "长城",
            "hot": 1659,
            "priority": 1
        },
        {
            "stationCode": "changtingzhen",
            "match": "ctz|changtingzhen",
            "stationName": "长汀镇",
            "hot": 1554,
            "priority": 1
        },
        {
            "stationCode": "zhaohua",
            "match": "zh|zhaohua",
            "stationName": "昭化",
            "hot": 1151,
            "priority": 1
        },
        {
            "stationCode": "zhazi",
            "match": "zz|zhazi",
            "stationName": "咋子",
            "hot": 886,
            "priority": 1
        },
        {
            "stationCode": "zhoushuizi",
            "match": "zsz|zhoushuizi",
            "stationName": "周水子",
            "hot": 793,
            "priority": 1
        },
        {
            "stationCode": "zhaobai",
            "match": "zb|zhaobai",
            "stationName": "招柏",
            "hot": 756,
            "priority": 1
        },
        {
            "stationCode": "zhangxian",
            "match": "zx|zhangxian",
            "stationName": "漳县",
            "hot": 530,
            "priority": 0
        },
        {
            "stationCode": "changlingzi",
            "match": "clz|changlingzi",
            "stationName": "长岭子",
            "hot": 462,
            "priority": 1
        },
        {
            "stationCode": "zhuangzhi",
            "match": "zz|zhuangzhi",
            "stationName": "壮志",
            "hot": 353,
            "priority": 1
        },
        {
            "stationCode": "zhonghuamen",
            "match": "zhm|zhonghuamen",
            "stationName": "中华门",
            "hot": 324,
            "priority": 1
        },
        {
            "stationCode": "zhenxi",
            "match": "zx|zhenxi",
            "stationName": "镇西",
            "hot": 123,
            "priority": 1
        },
        {
            "stationCode": "zerunli",
            "match": "zrl|zerunli",
            "stationName": "泽润里",
            "hot": 101,
            "priority": 1
        },
        {
            "stationCode": "zongxi",
            "match": "zx|zongxi",
            "stationName": "棕溪",
            "hot": 57,
            "priority": 1
        }
    ]
};
export default{
  hotStationData,
  allStationData
}