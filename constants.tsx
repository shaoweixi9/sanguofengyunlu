
import { Character, HistoricalEvent, Kingdom } from './types';

export const START_YEAR = 139; 
export const END_YEAR = 285;

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  { year: 184, title: '黄巾起义', description: '张角自称“天公将军”，爆发大规模起义，动摇东汉根基。' },
  { year: 188, title: '刘焉入蜀', description: '开启了地方割据的序幕。' },
  { year: 189, title: '董卓进京', description: '废少帝立献帝，火烧洛阳。' },
  { year: 190, title: '关东军讨董', description: '十八路诸侯结盟讨伐董卓。' },
  { year: 191, title: '界桥之战', description: '袁绍与公孙瓒争夺北方霸权。' },
  { year: 192, title: '初平之乱', description: '吕布刺杀董卓，李傕郭汜乱京。' },
  { year: 193, title: '曹操征徐州', description: '曹操以为父报仇为名大规模攻伐陶谦。' },
  { year: 196, title: '挟天子以令诸侯', description: '曹操迁都许县，控制汉献帝。' },
  { year: 197, title: '宛城之战', description: '曹操大败，痛失典韦、曹昂。' },
  { year: 200, title: '官渡之战', description: '曹操以少胜多，奠定统一北方基础。' },
  { year: 202, title: '袁绍病逝', description: '北方最强势力袁氏集团开始走向分裂。' },
  { year: 207, title: '隆中对', description: '刘备三顾茅庐，诸葛亮定下三分天下之计。' },
  { year: 208, title: '赤壁之战', description: '孙刘联军火烧赤壁，三国鼎立雏形初现。' },
  { year: 211, title: '渭南之战', description: '曹操击败马超、韩遂联军。' },
  { year: 214, title: '刘备入川', description: '刘备夺取益州。' },
  { year: 215, title: '合肥之战', description: '张辽威震逍遥津。' },
  { year: 219, title: '汉中之战', description: '刘备正面击败曹操，自立为汉中王。' },
  { year: 219, title: '襄樊之战', description: '关羽水淹七军威震华夏，后败走麦城。' },
  { year: 220, title: '曹丕代汉', description: '曹魏建立，东汉灭亡。' },
  { year: 221, title: '夷陵之战', description: '陆逊火烧连营，刘备大败。' },
  { year: 223, title: '白帝城托孤', description: '刘备逝世，将蜀汉托付给诸葛亮。' },
  { year: 225, title: '诸葛亮南征', description: '七擒孟获，平定南中。' },
  { year: 227, title: '出师北伐', description: '诸葛亮开启六出祁山。' },
  { year: 229, title: '孙权称帝', description: '东吴正式建立。' },
  { year: 234, title: '五丈原之陨', description: '诸葛亮病逝于军中。' },
  { year: 238, title: '司马懿平辽东', description: '彻底消灭公孙渊势力。' },
  { year: 244, title: '兴势之战', description: '王平守击退魏将曹爽。' },
  { year: 249, title: '高平陵之变', description: '司马懿夺取曹魏实权。' },
  { year: 252, title: '孙权驾崩', description: '东吴开国君主逝世。' },
  { year: 255, title: '淮南二叛', description: '毌丘俭、文钦起兵反司马氏。' },
  { year: 257, title: '诸葛诞之乱', description: '淮南三叛最后一次大规模反抗。' },
  { year: 260, title: '甘露之变', description: '魏帝曹髦被弑。' },
  { year: 263, title: '魏灭蜀', description: '邓艾奇袭阴平，蜀汉亡。' },
  { year: 265, title: '西晋建立', description: '司马炎代魏称帝。' },
  { year: 279, title: '晋灭吴之役', description: '王濬顺江而下。' },
  { year: 280, title: '三分归一', description: '孙皓投降，西晋统一中国。' },
];

export const CHARACTERS: Character[] = [
  { 
    id: 'dongzhuo', name: '董卓', kingdom: Kingdom.QUN, birthYear: 139, deathYear: 192, 
    appearance: '“卓有膂力，双带两鞬，左右驰射。”',
    description: '字仲颖。残忍嗜杀，废立皇帝，祸乱京都。', 
    sanguozhiQuote: '董卓忍戾嗜杀，乱法罔伦，为祸惨烈。' 
  },
  { 
    id: 'caocao', name: '曹操', kingdom: Kingdom.WEI, birthYear: 155, deathYear: 220, 
    appearance: '“姿貌短小，而神明英发。”',
    description: '字孟德，魏武帝。杰出的政治家、军事家、文学家，统一北方。', 
    sanguozhiQuote: '太祖运筹演谋，鞭挞宇内，揽申、商之法术。' 
  },
  { 
    id: 'liubei', name: '刘备', kingdom: Kingdom.SHU, birthYear: 161, deathYear: 223, 
    appearance: '“身长七尺五寸，垂手下膝，顾自见其耳。”',
    description: '字玄德，蜀汉昭烈帝。以仁义宽厚著称，虽颠沛流离而终成帝业。', 
    sanguozhiQuote: '先主之弘毅宽厚，知人待士，盖有高祖之风。' 
  },
  { 
    id: 'sunquan', name: '孙权', kingdom: Kingdom.WU, birthYear: 182, deathYear: 252, 
    appearance: '“方颐大口，目有精光。”',
    description: '字仲谋，东吴大帝。承袭父兄基业，十九岁命世之才。', 
    sanguozhiQuote: '孙权屈身忍辱，任才尚计，有句践之奇。' 
  },
  { 
    id: 'zhugeliang', name: '诸葛亮', kingdom: Kingdom.SHU, birthYear: 181, deathYear: 234, 
    appearance: '“身长八尺，容貌甚伟。”',
    description: '字孔明，蜀汉丞相。忠臣智者化身，鞠躬尽瘁，死而后已。', 
    sanguozhiQuote: '识治之良才，管、萧之亚匹矣。' 
  },
  { 
    id: 'simayi', name: '司马懿', kingdom: Kingdom.WEI, birthYear: 179, deathYear: 251, 
    appearance: '“狼顾相。”',
    description: '字仲达。西晋奠基人。隐忍深沉，掌握曹魏大权。', 
    sanguozhiQuote: '宣王内忌而外宽，猜忌多权变。' 
  },
  { 
    id: 'simashi', name: '司马师', kingdom: Kingdom.WEI, birthYear: 208, deathYear: 255, 
    appearance: '“雅有风采”，沉毅寡言。',
    description: '字子元。司马懿长子，司马昭之长兄。稳固司马氏统治。', 
    sanguozhiQuote: '世宗沉毅有大略。' 
  },
  { 
    id: 'simazhao', name: '司马昭', kingdom: Kingdom.WEI, birthYear: 211, deathYear: 265, 
    appearance: '目光阴鸷。',
    description: '字子上。司马懿次子，司马师之弟。“路人皆知”其志。', 
    sanguozhiQuote: '其谋划深远，终于代魏。' 
  },
  { 
    id: 'simayan', name: '司马炎', kingdom: Kingdom.JIN, birthYear: 236, deathYear: 290, 
    appearance: '“发委地，手过膝。”',
    description: '字安世，晋武帝。系大将军司马昭的长子、司马师之侄、司马懿之孙。代魏称帝并完成灭吴大计，实现天下一统。', 
    sanguozhiQuote: '武帝矫矫，其志宏远。终于平吴，海内归心。' 
  },
  { 
    id: 'guanyu', name: '关羽', kingdom: Kingdom.SHU, birthYear: 160, deathYear: 220, 
    appearance: '“美须髯。”',
    description: '字云长。忠义化身，水淹七军威震华夏。', 
    sanguozhiQuote: '羽报效曹公，并有国士之风。' 
  },
  { 
    id: 'zhangfei', name: '张飞', kingdom: Kingdom.SHU, birthYear: 168, deathYear: 221, 
    appearance: '雄壮威猛。',
    description: '字翼德。万人之敌，据水断桥。', 
    sanguozhiQuote: '飞雄壮威猛，亚于关羽。' 
  },
  { 
    id: 'zhaoyun', name: '赵云', kingdom: Kingdom.SHU, birthYear: 168, deathYear: 229, 
    appearance: '“姿颜雄伟。”',
    description: '字子龙。长坂坡单骑救主，常胜将军。', 
    sanguozhiQuote: '赵云强挚壮猛，并作爪牙。' 
  },
  { 
    id: 'zhouyu', name: '周瑜', kingdom: Kingdom.WU, birthYear: 175, deathYear: 210, 
    appearance: '“长壮有姿貌。”',
    description: '字公瑾。赤壁之战统帅，精通音律，风雅倜傥。', 
    sanguozhiQuote: '周瑜建独断之明，实奇才也。' 
  },
  { 
    id: 'luxun', name: '陆逊', kingdom: Kingdom.WU, birthYear: 183, deathYear: 245, 
    appearance: '儒雅深沉。',
    description: '字伯言。夷陵之战火烧连营。', 
    sanguozhiQuote: '陆逊忠诚恳至，忧国亡身。' 
  },
  { 
    id: 'guojia', name: '郭嘉', kingdom: Kingdom.WEI, birthYear: 170, deathYear: 207, 
    appearance: '体弱但神机。',
    description: '字奉孝。曹操最倚重的鬼才谋士。', 
    sanguozhiQuote: '郭嘉深通算略，达于事情。' 
  },
  { 
    id: 'jiangwei', name: '姜维', kingdom: Kingdom.SHU, birthYear: 202, deathYear: 264, 
    appearance: '英气勃发。',
    description: '字伯约。诸葛亮传人，坚持北伐，壮志未酬。', 
    sanguozhiQuote: '姜维粗有文武，志立功名。' 
  },
  { 
    id: 'lvbu', name: '吕布', kingdom: Kingdom.QUN, birthYear: 156, deathYear: 198, 
    appearance: '飞将威仪。',
    description: '字奉先。三国第一勇将。', 
    sanguozhiQuote: '吕布有虓虎之勇，而无英奇之略。' 
  },
  { 
    id: 'yuanshao', name: '袁绍', kingdom: Kingdom.QUN, birthYear: 154, deathYear: 202, 
    appearance: '“有姿貌威容。”',
    description: '字本初。四世三公，北方霸主。', 
    sanguozhiQuote: '袁绍色厉胆薄，好谋无断。' 
  },
  { 
    id: 'dengai', name: '邓艾', kingdom: Kingdom.WEI, birthYear: 197, deathYear: 264, 
    appearance: '老练精干。',
    description: '字士载。奇袭阴平灭蜀第一功。', 
    sanguozhiQuote: '邓艾矫然卓立，才略兼人。' 
  },
  { 
    id: 'luxiang', name: '陆抗', kingdom: Kingdom.WU, birthYear: 226, deathYear: 274, 
    appearance: '儒将风范。',
    description: '字幼节。陆逊之子，东吴最后的中流砥柱。', 
    sanguozhiQuote: '良将之才，不辱家风。' 
  },
  { 
    id: 'yanghu', name: '羊祜', kingdom: Kingdom.JIN, birthYear: 221, deathYear: 278, 
    appearance: '仪态温润。',
    description: '字叔子。西晋重臣，襄阳施仁。', 
    sanguozhiQuote: '其德行卓绝，天下称贤。' 
  }
];
