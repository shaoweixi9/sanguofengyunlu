
import { Character, HistoricalEvent, Kingdom } from './types';

export const START_YEAR = 139; 
export const END_YEAR = 285;

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  { year: 184, title: '黄巾起义', description: '张角自称“天公将军”，率领信众在大江南北同时爆发起义，东汉王朝统治根基动摇，开启了军阀割据的序幕。' },
  { year: 188, title: '刘焉入蜀', description: '刘焉向朝廷建议设立牧伯以稳定地方，实则开启了地方官署独立化，为后来的割据政权埋下伏笔。' },
  { year: 189, title: '董卓进京', description: '汉灵帝崩，外戚何进引董卓入京。董卓随后废少帝立献帝，火烧洛阳迁都长安，倒行逆施。' },
  { year: 190, title: '关东军讨董', description: '曹操、袁绍等十八路豪强结成讨董同盟。联军挺进中原，董卓被迫挟持天子西迁。' },
  { year: 191, title: '界桥之战', description: '袁绍与公孙瓒为争夺冀州爆发的大战，是汉末大规模步骑合战的典范，奠定了袁绍北方霸主地位。' },
  { year: 192, title: '初平之乱', description: '王允、吕布设计刺杀董卓，随后董卓余部李傕、郭汜作乱京师，长安陷入数年混战。' },
  { year: 193, title: '曹操征徐州', description: '曹操以为父报仇为名，大规模攻打陶谦，在徐州境内造成了严重的人道灾难，引发众怒。' },
  { year: 196, title: '挟天子以令诸侯', description: '曹操接纳流亡的汉献帝迁都许县，正式开启了利用皇帝名义号令天下。' },
  { year: 197, title: '宛城之战', description: '张绣降而复叛，曹操仓促应战，痛失长子曹昂、侄子曹安民及爱将典韦。' },
  { year: 200, title: '官渡之战', description: '曹操以少胜多，在乌巢奇袭袁绍粮草，彻底摧毁袁绍主力，奠定了统一北方的绝对基础。' },
  { year: 208, title: '赤壁之战', description: '孙刘联军火烧赤壁，在长江一线阻断曹操南征进程，形成了三国鼎立的初步雏形。' },
  { year: 211, title: '渭南之战', description: '曹操利用离间计击败马超、韩遂的关中联军，基本肃清了北方最后的割据势力。' },
  { year: 214, title: '刘备入川', description: '刘备在诸葛亮、张飞、赵云等人支援下夺取益州，正式拥有了稳固的战略后方。' },
  { year: 215, title: '合肥之战', description: '张辽率八百步骑威震逍遥津，孙权十万大军铩羽而归，“张辽止啼”传为佳话。' },
  { year: 219, title: '汉中之战', description: '刘备于汉中正面击败曹操，自立为汉中王，蜀汉国力达到巅峰。' },
  { year: 219, title: '樊城之战', description: '关羽水淹七军威震华夏，生擒于禁斩杀庞德。随后吕蒙偷袭荆州，关羽败亡。' },
  { year: 220, title: '曹丕代汉', description: '魏王曹丕逼迫汉献帝禅让，建立魏国，东汉王朝在名义上正式告终。' },
  { year: 221, title: '刘备称帝', description: '刘备在成都即位续汉大统。为复荆州之仇，不顾臣下劝谏毅然发动东征。' },
  { year: 222, title: '夷陵之战', description: '东吴书生统帅陆逊火烧连营七百里，刘备大败退守白帝城。' },
  { year: 223, title: '白帝城托孤', description: '刘备病逝，将后事与幼子托付给诸葛亮，嘱咐“若嗣子可辅，辅之；如其不才，君可自取”。' },
  { year: 225, title: '诸葛亮南征', description: '诸葛亮率军平定南中叛乱，七擒七纵孟获，实现了“攻心为上”的民族政策。' },
  { year: 227, title: '出师北伐', description: '诸葛亮上《出师表》，率领蜀汉大军进驻汉中，正式开启了北伐曹魏征程。' },
  { year: 228, title: '街亭之战', description: '马谡违背诸葛亮节度，舍水上山，遭张郃断绝水源大败。诸葛亮泪斩马谡。' },
  { year: 229, title: '孙权称帝', description: '孙权在武昌即皇帝位，国号吴，三分天下的格局最终完全确立。' },
  { year: 234, title: '星落五丈原', description: '诸葛亮第五次北伐与司马懿对峙于五丈原，因积劳成疾逝于军中。' },
  { year: 238, title: '司马懿平辽东', description: '司马懿率军急袭辽东，彻底消灭割据多年的公孙渊势力，巩固魏国东北疆域。' },
  { year: 244, title: '兴势之战', description: '魏国权臣曹爽为建功立业贸然伐蜀，在兴势山被王平、费祎击败。' },
  { year: 249, title: '高平陵之变', description: '司马懿趁曹爽陪同魏帝祭陵之际发动政变，清洗曹氏宗室，司马氏掌握魏国实权。' },
  { year: 252, title: '孙权驾崩', description: '东吴开国皇帝孙权逝世，幼子孙亮继位。此后东吴进入了权臣内斗。' },
  { year: 253, title: '合肥新城之战', description: '东吴太傅诸葛恪率二十万大军围攻新城，久攻不克且军中疫病流行，最终大败。' },
  { year: 255, title: '毌丘俭文钦之乱', description: '魏镇东将军毌丘俭起兵反抗司马氏。司马师亲征，平定叛乱后不久病死。' },
  { year: 257, title: '诸葛诞寿春起兵', description: '诸葛诞联络东吴起兵反抗司马昭。最终城破诞死，司马氏权势愈发稳固。' },
  { year: 260, title: '甘露之变', description: '魏帝曹髦不甘司马昭权倾朝野，率内侍讨伐，反被司马昭部将成济杀害。' },
  { year: 263, title: '魏灭蜀之战', description: '魏将邓艾奇袭阴平，翻越摩天岭直抵成都，刘禅投降，蜀汉亡。' },
  { year: 265, title: '西晋代魏', description: '魏帝曹奂禅位，司马炎即位为帝，建立晋朝，定都洛阳。' },
  { year: 279, title: '晋灭吴之役', description: '晋武帝发动六路大军，由杜预、王濬等率领，分道齐进，顺江而下直取金陵。' },
  { year: 280, title: '晋灭吴', description: '王濬楼船入石头，吴主孙皓投降，西晋彻底消灭东吴，中国恢复大一统。' },
];

export const CHARACTERS: Character[] = [
  { 
    id: 'dongzhuo', 
    name: '董卓', 
    kingdom: Kingdom.QUN, 
    birthYear: 139, 
    deathYear: 192, 
    appearance: '“卓有膂力，双带两鞬，左右驰射。” 晚年身躯极其肥胖，满脸横肉。',
    description: '字仲颖。残忍嗜杀，废立皇帝，祸乱京都。其暴政引发了关东诸侯联合讨伐。他在凉州军阀中极具统率力，但因缺乏政治修养最终众叛亲离。', 
    sanguozhiQuote: '董卓忍戾嗜杀，乱法罔伦，为祸惨烈。自古及今，未有若此不夷灭者也。' 
  },
  { 
    id: 'caocao', 
    name: '曹操', 
    kingdom: Kingdom.WEI, 
    birthYear: 155, 
    deathYear: 220, 
    appearance: '“姿貌短小，而神明英发。”（《魏氏春秋》）曹操虽身材不高，但双目炯炯有神，气场极其强大，具有震慑人心的威严。',
    description: '字孟德，魏武帝。汉末杰出的政治家、军事家、文学家。他在乱世中招揽贤才，平定北方，实行屯田制解决军粮问题，“唯才是举”打破门第。其文学开建安风骨之先河。', 
    sanguozhiQuote: '太祖运筹演谋，鞭挞宇内，揽申、商之法术，该韩、白之奇策，官方授材，各因其器。' 
  },
  { 
    id: 'liubei', 
    name: '刘备', 
    kingdom: Kingdom.SHU, 
    birthYear: 161, 
    deathYear: 223, 
    appearance: '“身长七尺五寸，垂手下膝，顾自见其耳。”（《三国志·先主传》）描述他双臂极长，能回头看到自己的耳朵，且生性喜怒不形于色。',
    description: '字玄德，蜀汉昭烈帝。以仁义宽厚著称，虽半生颠沛流离，但终不改其志，三顾茅庐得诸葛亮辅佐，最终三分天下有其一。其临终托孤之举，被后世视为君臣互信的极点。', 
    sanguozhiQuote: '先主之弘毅宽厚，知人待士，盖有高祖之风，英雄之器焉。及其举国讬孤于诸葛亮，而心神无贰。' 
  },
  { 
    id: 'sunquan', 
    name: '孙权', 
    kingdom: Kingdom.WU, 
    birthYear: 182, 
    deathYear: 252, 
    appearance: '“方颐大口，目有精光。”（《吴书》）传闻他相貌奇伟。裴注引《魏氏春秋》称其“紫髯蓝睛”，形容其容貌异于寻常。',
    description: '字仲谋，东吴大帝。承袭父兄基业，十九岁临危受命。他在位期间极力开发江南，任用周瑜、陆逊等良将，不仅稳固了东吴，更为后来南方的繁荣打下了政治基础。', 
    sanguozhiQuote: '孙权屈身忍辱，任才尚计，有句践之奇，英人之杰矣。故能自擅江表，成鼎峙之业。' 
  },
  { 
    id: 'zhugeliang', 
    name: '诸葛亮', 
    kingdom: Kingdom.SHU, 
    birthYear: 181, 
    deathYear: 234, 
    appearance: '“身长八尺，容貌甚伟，时人异焉。”（《三国志·诸葛亮传》）形容他身材挺拔高大，仪表庄重优美，极具名士风采。',
    description: '字孔明，蜀汉丞相。忠臣与智者的化身，鞠躬尽瘁，死而后已。在蜀汉极端恶劣的环境下，他致力于法治建设与屯田养民，并坚持六出祁山。', 
    sanguozhiQuote: '亮之为相也，抚百姓，示仪轨，约官职，从权制，开诚心，布公道。可谓识治之良才，管、萧之亚匹矣。' 
  },
  { 
    id: 'simayi', 
    name: '司马懿', 
    kingdom: Kingdom.WEI, 
    birthYear: 179, 
    deathYear: 251, 
    appearance: '“狼顾相。”（《晋书》）传闻他能头部转动180度而身体不动，目光阴鸷深邃。',
    description: '字仲达。西晋奠基人。性格深沉多谋，极其隐忍，是诸葛亮最强劲的对手。在高平陵之变中一举摧毁曹魏宗室势力，掌握实权。', 
    sanguozhiQuote: '宣王内忌而外宽，猜忌多权变。及平公孙渊，大开杀戮，其节终不免于权谋。' 
  },
  { 
    id: 'simashi', 
    name: '司马师', 
    kingdom: Kingdom.WEI, 
    birthYear: 208, 
    deathYear: 255, 
    appearance: '“雅有风采”，沉毅寡言。晚年眼睛生瘤，亲征淮南时劳累过度导致眼珠迸出而卒。',
    description: '字子元。大将军司马懿的长子，司马昭之长兄。高平陵之变的关键参与者。在其父死后继任魏大将军，平定淮南三叛，废曹芳立曹髦，稳固了司马氏在魏国的统治根基。', 
    sanguozhiQuote: '世宗沉毅有大略。及居冢宰，训兵讲武，法度修明。' 
  },
  { 
    id: 'simazhao', 
    name: '司马昭', 
    kingdom: Kingdom.WEI, 
    birthYear: 211, 
    deathYear: 265, 
    appearance: '相貌与其父司马懿相似，目光阴鸷。',
    description: '字子上。司马懿之次子，司马师之同母弟。彻底铲除魏室余威，其野心广为人知，即“司马昭之心路人皆知”。他实际完成了晋室夺权的所有前期准备工作，灭蜀后封晋王。', 
    sanguozhiQuote: '昭之心，路人所知也。其谋划深远，终于代魏。' 
  },
  { 
    id: 'simayan', 
    name: '司马炎', 
    kingdom: Kingdom.JIN, 
    birthYear: 236, 
    deathYear: 290, 
    appearance: '“发委地，手过膝。”（《晋书》）威仪非凡，相貌奇特。',
    description: '字安世。晋武帝，西晋开国皇帝。他是司马懿之孙，大将军司马师之侄，司马昭的长子。他于公元265年代魏称帝，承继父兄多年经营之基业。公元280年发动灭吴之役，终结三国乱世，实现自东汉末年以来久违的大一统。', 
    sanguozhiQuote: '武帝矫矫，其志宏远。终于平吴，海内归心。' 
  },
  { 
    id: 'guanyu', 
    name: '关羽', 
    kingdom: Kingdom.SHU, 
    birthYear: 160, 
    deathYear: 220, 
    appearance: '“美须髯。”（《三国志·关羽传》）诸葛亮曾在信中称其为“髯”，其胡须茂盛美观，被后世尊称为“美髯公”。',
    description: '字云长。其一生重义轻生，水淹七军威震华夏。虽性格刚愎自用导致荆州丢失，但其忠义之名已成为中国民间文化中的武圣象征。', 
    sanguozhiQuote: '羽报效曹公，飞义释严颜，并有国士之风。然羽刚而自矜，飞暴而无恩，以短取败，理数之常也。' 
  },
  { 
    id: 'zhangfei', 
    name: '张飞', 
    kingdom: Kingdom.SHU, 
    birthYear: 168, 
    deathYear: 221, 
    appearance: '史书未详载容貌，但称其“雄壮威猛”。（民间演义形象为豹头环眼，燕颔虎须）。',
    description: '字翼德。刘备结拜手下，万人之敌。长坂坡单骑据水断桥，喝退曹军。其性情刚烈，虽然敬重君子却常体罚士兵，最终死于部下之手。', 
    sanguozhiQuote: '飞雄壮威猛，亚于关羽，魏谋臣程昱等咸称羽、飞万人之敌也。' 
  },
  { 
    id: 'zhaoyun', 
    name: '赵云', 
    kingdom: Kingdom.SHU, 
    birthYear: 168, 
    deathYear: 229, 
    appearance: '“身长八尺，姿颜雄伟。”（《云别传》）形容他身材挺拔，面容端庄英俊。',
    description: '字子龙。常胜将军的代表，长坂坡在乱军中怀抱幼主刘禅杀出重围。他处事谨慎公正，不仅是出色的将领，更是正直的谏臣。', 
    sanguozhiQuote: '赵云强挚壮猛，并作爪牙，其灌、滕之徒欤？' 
  },
  { 
    id: 'zhouyu', 
    name: '周瑜', 
    kingdom: Kingdom.WU, 
    birthYear: 175, 
    deathYear: 210, 
    appearance: '“瑜长壮有姿貌。”（《三国志·周瑜传》）形容他身材高大强壮，且长相极其俊美。',
    description: '字公瑾。赤壁之战总指挥，精通音律，风雅倜傥。他是东吴早期的核心支柱。其心胸开阔（并非演义中那样），与孙策并称“江东双璧”。', 
    sanguozhiQuote: '瑜少精意于音乐，虽三爵之后，其有阙误，瑜必知之。周瑜、鲁肃建独断之明，实奇才也。' 
  },
  { 
    id: 'luxun', 
    name: '陆逊', 
    kingdom: Kingdom.WU, 
    birthYear: 183, 
    deathYear: 245, 
    appearance: '史书称其为“名家子弟”，举止儒雅，气质深沉。',
    description: '字伯言。在夷陵之战中以逸待劳，火烧连营大败刘备，挽救了东吴国运。后任丞相，出将入相，为人沉稳忠恳，是东吴中后期的定海神针。', 
    sanguozhiQuote: '陆逊忠诚恳至，忧国亡身，庶几社稷之臣。其规谋昭果，虽孙、吴不能过也。' 
  },
  { 
    id: 'guojia', 
    name: '郭嘉', 
    kingdom: Kingdom.WEI, 
    birthYear: 170, 
    deathYear: 207, 
    appearance: '史书未详载，但称其体弱多病，具名士风流，不修边幅。',
    description: '字奉孝。曹操最倚重的谋士，算无遗策，洞察人心。在官渡之战及平定北方中提出多次神策。曹操曾感叹“使孤成大业者，必此人也”。', 
    sanguozhiQuote: '郭嘉深通算略，达于事情。太祖曰：“唯奉孝能知孤意。”' 
  },
  { 
    id: 'jiangwei', 
    name: '姜维', 
    kingdom: Kingdom.SHU, 
    birthYear: 202, 
    deathYear: 264, 
    appearance: '“维好立功名。” 描述其英气勃勃，目光坚毅。',
    description: '字伯约。诸葛亮衣钵传人，蜀汉后期军事统帅。他继承武侯遗志，连年北伐。在蜀亡后仍试图离间魏将复国，最终功败垂成。', 
    sanguozhiQuote: '姜维粗有文武，志立功名，而内轻隔阂。姜维之死，壮烈异常，千载之下犹有余香。' 
  },
  { 
    id: 'lvbu', 
    name: '吕布', 
    kingdom: Kingdom.QUN, 
    birthYear: 156, 
    deathYear: 198, 
    appearance: '“布便弓马，膂力过人，号为飞将。” 形容其威猛魁梧，极富阳刚战神之姿。',
    description: '字奉先。三国武力巅峰。曾先后效命于丁原、董卓并刺杀之。虽然有勇无谋且反复无常，但其武勇足以令群雄胆寒，被称为“人中吕布”。', 
    sanguozhiQuote: '吕布有虓虎之勇，而无英奇之略，轻狡反复，唯利是视。' 
  },
  { 
    id: 'yuanshao', 
    name: '袁绍', 
    kingdom: Kingdom.QUN, 
    birthYear: 154, 
    deathYear: 202, 
    appearance: '“绍有姿貌威容。”（《英雄记》）形容他相貌堂堂，仪态端正，极具名门官威。',
    description: '字本初。四世三公出身。曾为讨董盟主，在北方经营多年，势力一度冠绝天下。最终因性格优柔寡断，在官渡之战中败于曹操，忧愤而卒。', 
    sanguozhiQuote: '袁绍色厉胆薄，好谋无断；干大事而惜身，见小利而忘命。' 
  },
  { 
    id: 'dengai', 
    name: '邓艾', 
    kingdom: Kingdom.WEI, 
    birthYear: 197, 
    deathYear: 264, 
    appearance: '“艾为人口吃。” 形象老练勤勉。',
    description: '字士载。曹魏名将。灭蜀之战中偷渡阴平，其行军路线之险峻震古烁今。不仅是名将，更是屯田专家，解决了淮南地区的粮食问题。', 
    sanguozhiQuote: '邓艾矫然卓立，才略兼人，其策谋果敢，勋烈克举。' 
  },
  { 
    id: 'luxiang', 
    name: '陆抗', 
    kingdom: Kingdom.WU, 
    birthYear: 226, 
    deathYear: 274, 
    appearance: '形象儒雅，治军严整，英气勃发。',
    description: '字幼节。陆逊之子。东吴后期中流砥柱，与晋将羊祜在边境对峙。两人互相敬重，留下了“陆羊交情”的佳话。', 
    sanguozhiQuote: '抗忠节深远，保卫边疆。良将之才，不辱家风。' 
  },
  { 
    id: 'yanghu', 
    name: '羊祜', 
    kingdom: Kingdom.JIN, 
    birthYear: 221, 
    deathYear: 278, 
    appearance: '“为人清俭”，仪态温润。',
    description: '字叔子。西晋重臣。驻守襄阳时实行仁政，深得民心。他极富战略远见，临终前推荐杜预接替自己完成灭吴大业。', 
    sanguozhiQuote: '祜为人清俭，不营产业。其德行卓绝，天下称贤。' 
  }
];
