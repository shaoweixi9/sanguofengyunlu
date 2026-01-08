
import { Character, HistoricalEvent, Kingdom } from './types';

export const START_YEAR = 139; 
export const END_YEAR = 285;

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  { year: 184, title: '黄巾起义', description: '张角自称“天公将军”，爆发大规模起义，动摇东汉根基。' },
  { year: 188, title: '刘焉入蜀', description: '刘焉向朝廷建议设立牧伯，开启地方割据序幕。' },
  { year: 189, title: '董卓进京', description: '废少帝立献帝，火烧洛阳，挟持天子。' },
  { year: 190, title: '关东军讨董', description: '曹操、袁绍等十八路诸侯结盟讨伐董卓。' },
  { year: 191, title: '界桥之战', description: '袁绍与公孙瓒争夺冀州霸权的巅峰对决。' },
  { year: 192, title: '初平之乱', description: '吕布刺杀董卓，李傕郭汜乱京，汉室名存实亡。' },
  { year: 194, title: '曹操征徐州', description: '曹操为父报仇大规模攻伐陶谦，引发徐州大屠杀。' },
  { year: 196, title: '挟天子以令诸侯', description: '曹操迁都许县，正式开启“挟天子”的政治局面。' },
  { year: 197, title: '宛城之战', description: '曹操征张绣遇袭，典韦、曹昂、曹安民战死。' },
  { year: 198, title: '下邳之战', description: '曹操水淹下邳，擒杀吕布，平定徐州。' },
  { year: 200, title: '官渡之战', description: '曹操奇袭乌巢焚袁绍粮草，奠定北方统一基础。' },
  { year: 202, title: '袁绍病逝', description: '北方最强势力袁氏开始走向分裂。' },
  { year: 207, title: '隆中对', description: '刘备三顾茅庐，诸葛亮定下三分天下之宏图。' },
  { year: 208, title: '长坂坡之战', description: '刘备败走，赵云单骑救主，张飞据水断桥。' },
  { year: 208, title: '赤壁之战', description: '孙刘联军火烧赤壁，阻断曹操南征，形成鼎立格局。' },
  { year: 211, title: '渭南之战', description: '曹操施离间计击败马超、韩遂联军。' },
  { year: 214, title: '刘备平定益州', description: '刘备取代刘璋，正式入主成都。' },
  { year: 215, title: '逍遥津之战', description: '张辽率八百壮士冲击吴军，威震逍遥津。' },
  { year: 217, title: '鲁肃病逝', description: '东吴温和派统帅逝世，吕蒙接任，战略转向荆州。' },
  { year: 219, title: '汉中之战', description: '刘备正面击败曹操，自封汉中王。' },
  { year: 219, title: '襄樊之战', description: '关羽威震华夏；随后吕蒙白衣渡江偷袭荆州。' },
  { year: 220, title: '曹丕代汉', description: '曹操病逝；曹丕称帝建立魏国，东汉灭亡。' },
  { year: 220, title: '九品中正制', description: '陈群建议实行，成为魏晋南北朝核心选官制度。' },
  { year: 221, title: '刘备称帝', description: '在成都延续汉室。随后发动夷陵之战。' },
  { year: 222, title: '夷陵之战', description: '陆逊火烧连营七百里，刘备惨败退守白帝城。' },
  { year: 223, title: '白帝城托孤', description: '刘备驾崩，诸葛亮受命辅佐幼主刘禅。' },
  { year: 225, title: '诸葛亮南征', description: '七擒孟获，平定南中，稳固大后方。' },
  { year: 227, title: '出师北伐', description: '诸葛亮开启六出祁山，志在北定中原。' },
  { year: 228, title: '街亭之战', description: '马谡违节度失街亭，诸葛亮挥泪斩马谡。' },
  { year: 229, title: '孙权称帝', description: '吴国正式建立，建都建业。' },
  { year: 234, title: '星落五丈原', description: '诸葛亮积劳成疾逝于军中，北伐进程受挫。' },
  { year: 238, title: '司马懿平辽东', description: '司马懿率军千里奔袭，彻底消灭公孙渊。' },
  { year: 244, title: '兴势之战', description: '蜀将王平以少胜多，击退曹爽大军。' },
  { year: 249, title: '高平陵之变', description: '司马懿发动政变清洗曹爽，掌握曹魏实权。' },
  { year: 255, title: '淮南二叛', description: '毌丘俭、文钦起兵反抗司马氏，终告失败。' },
  { year: 257, title: '诸葛诞之乱', description: '淮南三叛中规模最大的一次反司马斗争。' },
  { year: 260, title: '甘露之变', description: '魏帝曹髦被弑，“司马昭之心路人皆知”。' },
  { year: 263, title: '魏灭蜀之战', description: '邓艾奇袭阴平，刘禅投降，蜀汉亡。' },
  { year: 265, title: '西晋建立', description: '司马炎代魏称帝，国号晋，都洛阳。' },
  { year: 272, title: '西陵之战', description: '陆抗击败晋将羊祜，暂缓吴国危局。' },
  { year: 279, title: '晋灭吴之役', description: '杜预、王濬等六路大军南下伐吴。' },
  { year: 280, title: '天下归一', description: '孙皓投降，中国结束近百年分裂再次大一统。' },
];

export const CHARACTERS: Character[] = [
  // --- 群雄/早期 ---
  { id: 'dongzhuo', name: '董卓', kingdom: Kingdom.QUN, birthYear: 139, deathYear: 192, appearance: '肥胖魁梧，横肉满脸。', description: '字仲颖。残忍嗜杀，废立皇帝，开启乱世。', sanguozhiQuote: '董卓忍戾嗜杀，乱法罔伦。' },
  { id: 'lvbu', name: '吕布', kingdom: Kingdom.QUN, birthYear: 156, deathYear: 198, appearance: '“号为飞将，弓马过人。”', description: '字奉先。三国第一勇将，因反复无常被曹操处死。', sanguozhiQuote: '吕布有虓虎之勇，而无英奇之略。' },
  { id: 'yuanshao', name: '袁绍', kingdom: Kingdom.QUN, birthYear: 154, deathYear: 202, appearance: '“有姿貌威容。”', description: '字本初。四世三公，曾统领关东联军，北方霸主。', sanguozhiQuote: '袁绍色厉胆薄，好谋无断。' },
  { id: 'xuyou_q', name: '许攸', kingdom: Kingdom.WEI, birthYear: 150, deathYear: 204, appearance: '傲慢轻佻。', description: '字子远。袁绍谋士，后投曹操，献计火烧乌巢。', sanguozhiQuote: '攸贪而无厌，人不足称。' },

  // --- 曹魏 (重臣/谋士/君主) ---
  { id: 'caocao', name: '曹操', kingdom: Kingdom.WEI, birthYear: 155, deathYear: 220, appearance: '“姿貌短小，神明英发。”', description: '字孟德。魏武帝。杰出政治家、军事家、文学家。', sanguozhiQuote: '太祖运筹演谋，鞭挞宇内。' },
  { id: 'xunyu', name: '荀彧', kingdom: Kingdom.WEI, birthYear: 163, deathYear: 212, appearance: '“瑰姿奇表，风度翩翩。”', description: '字文若。曹操“吾之子房”。王佐之才，定中原之首功。', sanguozhiQuote: '彧清秀通雅，有王佐之风。' },
  { id: 'xunyou', name: '荀攸', kingdom: Kingdom.WEI, birthYear: 157, deathYear: 214, appearance: '“外愚内智，其言如愚。”', description: '字公达。曹操谋主，精于算略，多出奇谋。', sanguozhiQuote: '公达外愚内智，其密谋不传。' },
  { id: 'jiaxu', name: '贾诩', kingdom: Kingdom.WEI, birthYear: 147, deathYear: 223, appearance: '沉稳而阴鸷。', description: '字文和。顶级毒士，一生算无遗策，善于自保。', sanguozhiQuote: '诩庶乎算无遗策，经达权变。' },
  { id: 'guojia', name: '郭嘉', kingdom: Kingdom.WEI, birthYear: 170, deathYear: 207, appearance: '“清爽干练，体弱。”', description: '字奉孝。鬼才谋士，深通算略，三十八岁早逝。', sanguozhiQuote: '郭嘉深通算略，达于事情。' },
  { id: 'chenqun', name: '陈群', kingdom: Kingdom.WEI, birthYear: 165, deathYear: 237, appearance: '端严方正。', description: '字长文。曹魏重臣，制定“九品中正制”，建立新秩序。', sanguozhiQuote: '陈群弘雅，有规谟之量。' },
  { id: 'caopi', name: '曹丕', kingdom: Kingdom.WEI, birthYear: 187, deathYear: 226, appearance: '“文质彬彬，帝王之相。”', description: '字子桓。魏文帝。代汉称帝，开创曹魏，兼具文采。', sanguozhiQuote: '文帝天资文藻，兼以武略。' },
  { id: 'caorui', name: '曹叡', kingdom: Kingdom.WEI, birthYear: 204, deathYear: 239, appearance: '“美姿容，神采焕发。”', description: '字元仲。魏明帝。沉毅断识，极具政治才能。', sanguozhiQuote: '明帝沉毅断识，任法度以驭群臣。' },
  { id: 'caoshuang', name: '曹爽', kingdom: Kingdom.WEI, birthYear: 197, deathYear: 249, appearance: '富贵骄矜。', description: '字昭伯。大司马曹真之子，辅政初期专权，最终败亡。', sanguozhiQuote: '爽以肺腑之亲，居鼎足之位。' },
  { id: 'chentai', name: '陈泰', kingdom: Kingdom.WEI, birthYear: 200, deathYear: 260, appearance: '刚毅节烈。', description: '字玄伯。陈群之子，多次统兵抵御姜维，名望极高。', sanguozhiQuote: '泰有雅量，忠心于魏。' },
  { id: 'caomao', name: '曹髦', kingdom: Kingdom.WEI, birthYear: 241, deathYear: 260, appearance: '神气英发。', description: '字彦士。高贵乡公。因不满司马昭而起兵，不幸被弑。', sanguozhiQuote: '少而好学，气宇不凡。' },
  { id: 'zhangliao', name: '张辽', kingdom: Kingdom.WEI, birthYear: 169, deathYear: 222, appearance: '“武力过人，英勇。”', description: '字文远。魏国五子良将之首，逍遥津威震江东。', sanguozhiQuote: '辽为名将，威震敌国。' },
  { id: 'dengai', name: '邓艾', kingdom: Kingdom.WEI, birthYear: 197, deathYear: 264, appearance: '结巴但深谋。', description: '字士载。奇袭阴平灭蜀第一功，后期悲惨被冤。', sanguozhiQuote: '邓艾矫然卓立，才略兼人。' },
  { id: 'zhonghui', name: '钟会', kingdom: Kingdom.WEI, birthYear: 225, deathYear: 264, appearance: '聪慧但浮躁。', description: '字士季。钟繇之子，博学多才，灭蜀后试图谋反被杀。', sanguozhiQuote: '钟会精练名理，以略见称。' },

  // --- 蜀汉 ---
  { id: 'liubei', name: '刘备', kingdom: Kingdom.SHU, birthYear: 161, deathYear: 223, appearance: '“手垂下膝。”', description: '字玄德。蜀汉昭烈帝，以仁义凝聚天下人心。', sanguozhiQuote: '先主知人待士，盖有高祖之风。' },
  { id: 'zhugeliang', name: '诸葛亮', kingdom: Kingdom.SHU, birthYear: 181, deathYear: 234, appearance: '“身长八尺。”', description: '字孔明。蜀汉丞相，鞠躬尽瘁，千古名相。', sanguozhiQuote: '识治之良才，管、萧之亚匹。' },
  { id: 'guanyu', name: '关羽', kingdom: Kingdom.SHU, birthYear: 160, deathYear: 220, appearance: '“美须髯。”', description: '字云长。武圣，重义轻生，威震华夏。', sanguozhiQuote: '羽报效曹公，有国士之风。' },
  { id: 'zhangfei', name: '张飞', kingdom: Kingdom.SHU, birthYear: 168, deathYear: 221, appearance: '雄壮威猛。', description: '字翼德。万人之敌，咆哮长坂。', sanguozhiQuote: '飞雄壮威猛，亚于关羽。' },
  { id: 'zhaoyun', name: '赵云', kingdom: Kingdom.SHU, birthYear: 168, deathYear: 229, appearance: '“姿颜雄伟。”', description: '字子龙。常胜将军，长坂坡救主。', sanguozhiQuote: '赵云强挚壮猛，并作爪牙。' },
  { id: 'masu', name: '马谡', kingdom: Kingdom.SHU, birthYear: 190, deathYear: 228, appearance: '才气过人。', description: '字幼常。马良之弟，谈兵有术，然在街亭违令致败。', sanguozhiQuote: '谡好论军计，而才不副其实。' },
  { id: 'jiangwei', name: '姜维', kingdom: Kingdom.SHU, birthYear: 202, deathYear: 264, appearance: '英气勃发。', description: '字伯约。诸葛亮传人，坚持北伐直到最后一刻。', sanguozhiQuote: '姜维粗有文武，志立功名。' },
  { id: 'weiyan', name: '魏延', kingdom: Kingdom.SHU, birthYear: 175, deathYear: 234, appearance: '“性矜高。”', description: '字文长。蜀汉名将，镇守汉中十年，后卷入内斗被杀。', sanguozhiQuote: '延勇猛过人，然性矜高自傲。' },

  // --- 孙吴 ---
  { id: 'sunquan', name: '孙权', kingdom: Kingdom.WU, birthYear: 182, deathYear: 252, appearance: '“方颐大口。”', description: '字仲谋。东吴大帝。生子当如孙仲谋。', sanguozhiQuote: '孙权屈身忍辱，英人之杰。' },
  { id: 'zhouyu', name: '周瑜', kingdom: Kingdom.WU, birthYear: 175, deathYear: 210, appearance: '“长壮有姿。”', description: '字公瑾。赤壁之战统帅，曲有误周郎顾。', sanguozhiQuote: '周瑜建独断之明，实奇才也。' },
  { id: 'lumeng', name: '吕蒙', kingdom: Kingdom.WU, birthYear: 178, deathYear: 220, appearance: '勇猛精进。', description: '字子明。吴下阿蒙，士别三日，偷袭荆州。', sanguozhiQuote: '蒙勇而有谋，克荆州之功。' },
  { id: 'luxun', name: '陆逊', kingdom: Kingdom.WU, birthYear: 183, deathYear: 245, appearance: '儒雅稳重。', description: '字伯言。夷陵之战火烧连营，定吴国百年基。', sanguozhiQuote: '陆逊忠诚恳至，忧国亡身。' },
  { id: 'luxiang', name: '陆抗', kingdom: Kingdom.WU, birthYear: 226, deathYear: 274, appearance: '儒将风范。', description: '字幼节。陆逊之子，吴国最后的名将屏障。', sanguozhiQuote: '良将之才，不辱家风。' },

  // --- 司马晋 ---
  { id: 'simayi', name: '司马懿', kingdom: Kingdom.WEI, birthYear: 179, deathYear: 251, appearance: '“狼顾相。”', description: '字仲达。晋朝奠基人。极其隐忍，熬死曹魏三代。', sanguozhiQuote: '宣王内忌而外宽，猜忌多权变。' },
  { id: 'simashi', name: '司马师', kingdom: Kingdom.WEI, birthYear: 208, deathYear: 255, appearance: '沉毅冷酷。', description: '字子元。司马懿长子。彻底扫除魏室内敌。', sanguozhiQuote: '世宗沉毅有大略。' },
  { id: 'simazhao', name: '司马昭', kingdom: Kingdom.WEI, birthYear: 211, deathYear: 265, appearance: '目光阴冷。', description: '字子上。司马懿次子。灭蜀主谋，“昭之心路人知”。', sanguozhiQuote: '其谋划深远，终于代魏。' },
  { id: 'jiachong', name: '贾充', kingdom: Kingdom.JIN, birthYear: 217, deathYear: 282, appearance: '深沉多诈。', description: '字公闾。司马氏心腹，曾参与弑君及制定晋律。', sanguozhiQuote: '充有干局，然阿谀谄媚。' },
  { id: 'simayan', name: '司马炎', kingdom: Kingdom.JIN, birthYear: 236, deathYear: 290, appearance: '“发委地。”', description: '字安世。晋武帝。司马昭长子、师之侄、懿之孙。代魏称帝，统一全国。', sanguozhiQuote: '武帝矫矫，其志宏远。' },
  { id: 'yanghu', name: '羊祜', kingdom: Kingdom.JIN, birthYear: 221, deathYear: 278, appearance: '温润如玉。', description: '字叔子。晋朝名帅，襄阳百姓称其为“羊公”。', sanguozhiQuote: '其德行卓绝，天下称贤。' },
  { id: 'duyu', name: '杜预', kingdom: Kingdom.JIN, birthYear: 222, deathYear: 285, appearance: '“左传癖”。', description: '字元凯。灭吴统帅之一，博学多才，文武全才。', sanguozhiQuote: '预有大略，终成统一功。' }
];
