/* 小小工作台 · 应用逻辑 */
/* ===================== 每日鼓励语 ===================== */
const QUOTES = [
["今天也要做温柔又有力量的人。","Be soft, be strong, be yourself."],
["慢慢来，比较快。","Slow is smooth, smooth is fast."],
["你不必很厉害才开始，但要开始才会很厉害。","You don't have to be great to start, but you have to start to be great."],
["每一个不曾起舞的日子，都是对生命的辜负。","A day without dancing is a day wasted."],
["种一棵树最好的时间是十年前，其次是现在。","The best time to plant a tree was ten years ago; the second best is now."],
["把日子过成诗，需要一点点耐心。","Turning days into poetry takes a little patience."],
["别急，花总有自己的花期。","Don't rush. Every flower blooms in its own time."],
["你今天的努力，是明天的幸运。","Today's effort is tomorrow's luck."],
["允许自己休息，也允许自己发光。","Allow yourself to rest, and to shine."],
["微小的坚持，会带来巨大的改变。","Small consistent steps create big changes."],
["生活不是等待暴风雨过去，而是学会在雨中跳舞。","Life isn't about waiting for the storm to pass, but learning to dance in the rain."],
["你已经比昨天的自己更好一点了。","You are a little better than yesterday."],
["温柔且坚定地，走自己的路。","Walk your own path, gently but firmly."],
["所有的努力，都会在某个转角与你重逢。","Every effort will meet you again around some corner."],
["今天的一小步，是明天的一大步。","A small step today is a giant leap tomorrow."],
["认真生活的人，运气都不会太差。","Those who live earnestly are seldom unlucky."],
["保持热爱，奔赴山海。","Keep your passion, and head for the mountains and seas."],
["先完成，再完美。","Done is better than perfect."],
["你的节奏，就是最好的节奏。","Your pace is the right pace."],
["把今天过好，明天自然会好。","Live today well, and tomorrow takes care of itself."],
["自律不是苦行，是自由的入场券。","Discipline is not punishment; it's the ticket to freedom."],
["情绪会过去，成长会留下。","Emotions pass; growth remains."],
["别和别人比较，你在自己的时区里。","Don't compare. You're in your own time zone."],
["每天进步 1%，一年后是 37 倍。","1% better every day makes you 37 times better in a year."],
["能量是有限的，把它给值得的事。","Energy is limited. Spend it on what matters."],
["今天也请好好吃饭、好好睡觉。","Eat well and sleep well today."],
["坚持的意义，在于把不可能变成日常。","Persistence turns the impossible into routine."],
["星星不会因为夜晚漫长就停止发光。","Stars don't stop shining because the night is long."],
["把焦虑换成行动，把担心换成计划。","Trade anxiety for action, worry for a plan."],
["你想要的一切，都在努力的路上。","Everything you want is on the other side of effort."],
["生活很苦，但你要甜。","Life may be bitter, but you should be sweet."],
["不完美的坚持，胜过完美的放弃。","Imperfect persistence beats perfect giving up."],
["今天的记录，是未来的礼物。","Today's record is a gift to your future self."],
["越简单的事，越需要长期主义。","The simpler the habit, the more it needs the long game."],
["和自己和解，是最大的勇敢。","Making peace with yourself is the bravest act."],
["日拱一卒，功不唐捐。","Advance one step a day; no effort is wasted."],
["先照顾好自己，再照顾世界。","Take care of yourself first, then the world."],
["路虽远行则将至，事虽难做则必成。","Far as the road may be, walking will get you there."],
["把注意力放在能改变的事情上。","Focus on what you can change."],
["今天的坏心情，明天会被风吹走。","Today's bad mood will be blown away tomorrow."],
["努力的样子，本身就很好看。","Trying hard already looks beautiful."],
["再小的目标，也值得被记录。","Even the smallest goal deserves to be recorded."],
["身体是革命的本钱，好好爱护它。","Your body is your greatest asset. Cherish it."],
["有计划的人生，不慌张。","A planned life is never panicked."],
["专注当下，是最好的解药。","Focusing on the present is the best remedy."],
["你比想象中更能扛事。","You're tougher than you think."],
["记账不是抠门，是清醒。","Budgeting isn't stinginess; it's clarity."],
["每一次早起，都是给未来加分。","Every early morning adds points to your future."],
["春天不会辜负每一颗努力的种子。","Spring never fails a hard-working seed."],
["认真对待生活的人，会被生活温柔以待。","Life is gentle with those who take it seriously."],
["休息不是停止，是为了更好地前进。","Rest is not stopping; it's preparing to move better."],
["把大目标拆成小步骤，就不难了。","Break big goals into small steps; it gets easy."],
["今天的你，正在成为想成为的人。","Today you are becoming who you want to be."],
["世界很大，先从整理房间开始。","The world is big. Start by tidying your room."],
["温和地对待自己，也是一种能力。","Being kind to yourself is a skill too."],
["记录让平凡的日子闪闪发光。","Recording makes ordinary days shine."],
["少即是多，慢即是快。","Less is more, slow is fast."],
["保持好奇，世界就永远新鲜。","Stay curious, and the world stays fresh."],
["最好的投资，是投资自己。","The best investment is in yourself."],
["坚持三十天，习惯会替你努力。","Persist for 30 days, and habits will work for you."]
];

/* ===================== 每日高频语句库 ===================== */
const SENTS = [
["Could you do me a favor?","能帮我个忙吗？"],
["I'm looking forward to it.","我很期待。"],
["It's up to you.","由你决定。"],
["That makes sense.","这说得通。"],
["I couldn't agree more.","我完全同意。"],
["Let me think it over.","让我再考虑一下。"],
["I'll keep that in mind.","我会记住的。"],
["Take your time, no rush.","慢慢来，不着急。"],
["It slipped my mind.","我一时忘了。"],
["I'm on my way.","我在路上了。"],
["Long time no see!","好久不见！"],
["What do you do for a living?","你是做什么工作的？"],
["Sorry to bother you.","不好意思打扰你。"],
["It's not a big deal.","这没什么大不了的。"],
["Let's call it a day.","今天就到这儿吧。"],
["I'm running late.","我要迟到了。"],
["Keep me posted.","有消息告诉我。"],
["That's exactly what I meant.","这正是我的意思。"],
["I have no idea.","我完全不知道。"],
["Better late than never.","迟到总比不到好。"],
["It's worth a try.","值得一试。"],
["I'm all ears.","我洗耳恭听。"],
["Just so you know.","顺便让你知道一下。"],
["Don't take it personally.","别往心里去。"],
["I owe you one.","我欠你一个人情。"],
["Let's get straight to the point.","我们直入主题吧。"],
["It's a piece of cake.","这小菜一碟。"],
["I'm swamped with work.","我工作忙得不可开交。"],
["Could you speak more slowly?","你能说慢一点吗？"],
["That's a good point.","这个观点很好。"],
["I'll get back to you soon.","我很快答复你。"],
["Make yourself at home.","请随意，别拘束。"],
["It's on me.","我请客。"],
["I can't thank you enough.","我感激不尽。"],
["Something came up.","临时有事。"],
["Let's keep in touch.","保持联系。"],
["It's about time.","是时候了。"],
["I'm not feeling well today.","我今天不太舒服。"],
["Do you have a minute?","你有空吗？"],
["That's fine by me.","我没问题。"],
["I'd rather stay home.","我宁愿待在家。"],
["It depends on the weather.","这要看天气。"],
["Please help yourself.","请自便。"],
["I got carried away.","我有点忘乎所以了。"],
["Let's split the bill.","我们AA吧。"],
["You made my day.","你让我今天很开心。"],
["I'm in the middle of something.","我正在忙。"],
["It rings a bell.","听起来有点耳熟。"],
["Give it a shot.","试一下吧。"],
["I'll take care of it.","我来处理。"],
["No pain, no gain.","不劳无获。"],
["Time flies!","时间过得真快！"],
["It's easier said than done.","说起来容易做起来难。"],
["Let me put it this way.","我这么说吧。"],
["I'm having second thoughts.","我有点动摇了。"],
["It's now or never.","机不可失。"],
["You can count on me.","你可以指望我。"],
["I'm fed up with it.","我受够了。"],
["That's very kind of you.","你真好。"],
["Let's play it by ear.","我们看情况再说。"],
["I need to charge my phone.","我需要给手机充电。"],
["Could you give me a hand?","能搭把手吗？"],
["It's out of my hands.","这我做不了主。"],
["I'm just browsing, thanks.","我只是随便看看，谢谢。"],
["What's the catch?","有什么附加条件吗？"],
["Sorry, my bad.","抱歉，我的错。"],
["Let's meet halfway.","我们各让一步。"],
["It's raining cats and dogs.","雨下得很大。"],
["I'm broke this month.","我这个月没钱了。"],
["Take it easy.","放轻松。"],
["That's the last straw.","这是最后一根稻草。"],
["Keep up the good work.","继续保持。"],
["I'm dying to know.","我特别想知道。"],
["Let's wrap it up.","我们收尾吧。"],
["It works like a charm.","效果非常好。"],
["I'm off today.","我今天休息。"],
["Speak of the devil.","说曹操曹操到。"],
["It's beyond my expectation.","这超出我的预期。"],
["Do you mind if I sit here?","我坐这儿你介意吗？"],
["I'll pass this time.","这次我就不参加了。"],
["That's up in the air.","那还没定。"],
["Let's touch base tomorrow.","我们明天再沟通。"],
["I'm short on time.","我时间紧张。"],
["It doesn't matter to me.","对我来说无所谓。"],
["You've got a point there.","你说得有道理。"],
["I'm getting the hang of it.","我开始掌握窍门了。"],
["Let bygones be bygones.","过去的就让它过去吧。"],
["It's within walking distance.","走路就能到。"],
["I couldn't help laughing.","我忍不住笑了。"],
["Please bear with me.","请多包涵。"],
["That's a steal!","太划算了！"],
["I'm on a diet.","我在减肥。"]
];

/* ===================== 新闻离线精选池 ===================== */
const NEWS_POOL = {
domestic:[
["国家发改委发布新一轮扩内需政策举措","围绕消费提质、投资提效推出多项配套措施，重点支持文旅、家电以旧换新等领域。","政策"],
["多地推进城市更新行动，老旧小区改造提速","加装电梯、管网改造、适老化设施成为改造重点，惠及数百万居民。","民生"],
["新能源汽车下乡活动持续开展","多家车企推出县域市场专属车型与补贴方案，充电桩配套同步下沉。","产业"],
["全国铁路暑运客流保持高位运行","多条热门线路加开夜间高铁，暑期学生流、旅游流叠加明显。","交通"],
["教育部部署做好中小学暑期托管服务","强调公益属性，鼓励学校与社区、青少年宫协同开展。","教育"],
["国家医保药品目录调整工作启动","罕见病用药、儿童用药继续获得倾斜支持。","医疗"],
["多省份发布高温津贴标准与防暑指引","要求户外作业单位合理调整作息，落实劳动保护。","民生"],
["数字人民币试点场景进一步扩容","覆盖交通出行、批发零售、政务缴费等更多日常场景。","金融"],
["全国夏粮收购进度过半，市场运行平稳","主产区收购价格总体稳定，仓储物流保障有力。","农业"],
["县域旅游持续升温，避暑目的地订单增长明显","小众古镇、山地民宿成为暑期出行新选择。","文旅"],
["多地推出育儿补贴与托育支持政策","普惠托育机构建设加快，缓解双职工家庭带娃压力。","民生"],
["国内首批智能网联汽车示范应用范围扩大","自动驾驶出租车在多个城市开放常态化运营测试。","科技"]
],
world:[
["主要经济体公布最新通胀数据","市场关注核心通胀走势对后续货币政策路径的影响。","经济"],
["联合国机构发布全球气候观测年度报告","报告指出极端高温事件频率上升，呼吁加快适应性投入。","环境"],
["国际能源署下调全年石油需求增速预期","主因新兴市场消费恢复不及预期与新能源替代加速。","能源"],
["多国推进人工智能治理立法进程","围绕数据安全、算法透明与责任划分展开讨论。","科技"],
["全球航运运价指数出现回落","部分主干航线运力恢复，集装箱周转效率提升。","贸易"],
["世界卫生组织发布夏季传染病防控提示","提醒关注食源性疾病与蚊媒传染病风险。","健康"],
["国际空间站完成新一轮科学实验任务","涉及微重力材料制备与生命科学研究。","航天"],
["多家跨国车企调整全球产能布局","电动化转型压力下，供应链本地化趋势明显。","产业"],
["全球粮食价格指数环比小幅下降","谷物与植物油价格回落，糖类价格仍处高位。","农业"],
["主要股指走势分化，资金流向科技板块","投资者对企业盈利前景保持谨慎乐观。","市场"],
["多国启动夏季旅游促进计划","放宽签证便利化措施以吸引国际游客。","文旅"],
["国际组织呼吁加强跨境数据流动规则协调","以降低企业合规成本、促进数字贸易。","治理"]
],
econ:[
["央行开展公开市场操作维护流动性合理充裕","短期资金利率保持平稳，市场预期总体稳定。","金融"],
["上半年进出口总值同比增长，机电产品占比提升","高技术、高附加值产品出口表现亮眼。","外贸"],
["制造业采购经理指数继续位于扩张区间","新订单指数回升，企业生产经营活动预期改善。","宏观"],
["多家银行下调存款挂牌利率","储户理财需求向中低风险产品迁移。","金融"],
["跨境电商综试区扩容，海外仓建设加快","中小外贸企业出海成本进一步降低。","外贸"],
["新能源产业链价格趋于理性","上游材料价格回稳，行业竞争进入品质与技术阶段。","产业"],
["消费市场稳步复苏，服务消费增速快于商品","餐饮、旅游、文娱等接触型消费拉动明显。","消费"],
["专项债发行提速，重点投向基础设施补短板","水利、能源、交通项目获得资金支持。","财政"],
["A股市场成交活跃度回升","机构关注中报业绩确定性较强的板块。","市场"],
["房地产市场政策持续优化","多地调整公积金与购房支持措施，促进合理住房需求释放。","地产"],
["黄金价格维持高位震荡","避险需求与利率预期共同影响贵金属走势。","大宗"],
["物流业景气指数回升，供应链效率改善","冷链、即时配送等细分领域增长较快。","物流"]
]
};

/* ===================== 常量 ===================== */
const CATS_OUT=[["餐饮","🍜"],["买菜","🥬"],["交通","🚇"],["购物","🛍️"],["日用","🧴"],["居住","🏠"],["医疗","💊"],["育儿","🧸"],["学习","📚"],["娱乐","🎬"],["人情","🎁"],["美容","💄"],["运动","🏃"],["宠物","🐾"],["其他支出","📦"]];
const CATS_IN=[["工资","💼"],["奖金","🏆"],["兼职","✍️"],["理财","📈"],["报销","🧾"],["红包","🧧"],["退款","↩️"],["其他收入","💰"]];
const CAT_ICON={};[...CATS_OUT,...CATS_IN].forEach(c=>CAT_ICON[c[0]]=c[1]);

const SPORT_DEFAULT=[["跑步","🏃"],["瑜伽","🧘"],["健身","🏋️"],["快走","🚶"],["游泳","🏊"],["骑行","🚴"],["跳绳","🪢"],["拉伸","🤸"],["帕梅拉","💃"],["爬楼","🪜"]];
const MEALS=[["早餐","🌅"],["午餐","🍚"],["晚餐","🌙"],["加餐","🍎"],["饮品","🥤"]];
const BABY_DEFAULT=["早上喝奶","早上吃AD/D3","中午吃粥","下午喝奶","傍晚吃粥","晚上喝奶"];

/* 夏至 / 立秋 日期表（用于三伏天推算） */
const TERMS={
2023:[[6,21],[8,8]],2024:[[6,21],[8,7]],2025:[[6,21],[8,7]],2026:[[6,21],[8,7]],
2027:[[6,21],[8,8]],2028:[[6,21],[8,7]],2029:[[6,21],[8,7]],2030:[[6,21],[8,7]],
2031:[[6,22],[8,8]],2032:[[6,21],[8,7]],2033:[[6,21],[8,7]],2034:[[6,21],[8,7]],
2035:[[6,21],[8,8]],2036:[[6,21],[8,7]],2037:[[6,21],[8,7]],2038:[[6,21],[8,7]],
2039:[[6,21],[8,8]],2040:[[6,21],[8,7]]
};

/* ===================== 高频词汇库 ===================== */
/* [单词, 音标, 词性+释义, 例句, 例句翻译] */
const WORDS = [
["ability","/əˈbɪləti/","n. 能力，才能","She has the ability to solve tough problems.","她有解决难题的能力。"],
["accept","/əkˈsept/","v. 接受，认可","I accept your apology.","我接受你的道歉。"],
["achieve","/əˈtʃiːv/","v. 实现，达成","He achieved his goal in three years.","他用三年实现了目标。"],
["admit","/ədˈmɪt/","v. 承认，允许进入","She admitted that she was wrong.","她承认自己错了。"],
["advantage","/ədˈvɑːntɪdʒ/","n. 优势，好处","Speaking English is a big advantage.","会说英语是个很大的优势。"],
["afford","/əˈfɔːd/","v. 负担得起","I can't afford a new car right now.","我现在买不起新车。"],
["against","/əˈɡenst/","prep. 反对，靠着","Most people voted against the plan.","多数人投票反对这个计划。"],
["agree","/əˈɡriː/","v. 同意，赞成","We agree on most things.","我们在大多数事情上意见一致。"],
["allow","/əˈlaʊ/","v. 允许，准许","My parents allow me to stay up late.","我父母允许我晚睡。"],
["amount","/əˈmaʊnt/","n. 数量，总额","A large amount of money was spent.","花了一大笔钱。"],
["ancient","/ˈeɪnʃənt/","adj. 古代的，古老的","We visited an ancient temple.","我们参观了一座古老的寺庙。"],
["announce","/əˈnaʊns/","v. 宣布，公布","They announced the results yesterday.","他们昨天公布了结果。"],
["anxious","/ˈæŋkʃəs/","adj. 焦虑的，渴望的","She feels anxious before exams.","她考试前会感到焦虑。"],
["apply","/əˈplaɪ/","v. 申请，应用","I applied for a new job.","我申请了一份新工作。"],
["appreciate","/əˈpriːʃieɪt/","v. 感激，欣赏","I really appreciate your help.","我非常感谢你的帮助。"],
["approach","/əˈprəʊtʃ/","n./v. 方法；接近","We need a different approach.","我们需要换一种方法。"],
["argue","/ˈɑːɡjuː/","v. 争论，主张","They often argue about money.","他们常为钱争吵。"],
["arrange","/əˈreɪndʒ/","v. 安排，整理","Let me arrange a meeting for you.","我给你安排一次会议。"],
["attend","/əˈtend/","v. 出席，参加","I will attend the wedding.","我会参加婚礼。"],
["attitude","/ˈætɪtjuːd/","n. 态度，看法","A positive attitude matters a lot.","积极的态度非常重要。"],
["available","/əˈveɪləbl/","adj. 可用的，有空的","Are you available tomorrow?","你明天有空吗？"],
["avoid","/əˈvɔɪd/","v. 避免，躲开","Try to avoid junk food.","尽量避免吃垃圾食品。"],
["balance","/ˈbæləns/","n./v. 平衡；结余","She keeps a good work-life balance.","她保持着良好的工作生活平衡。"],
["believe","/bɪˈliːv/","v. 相信，认为","I believe you can make it.","我相信你能做到。"],
["benefit","/ˈbenɪfɪt/","n./v. 好处；受益","Exercise benefits your health.","运动有益于健康。"],
["borrow","/ˈbɒrəʊ/","v. 借入","Can I borrow your pen?","我能借你的笔吗？"],
["breathe","/briːð/","v. 呼吸","Take a moment and breathe deeply.","停一会儿，深呼吸。"],
["budget","/ˈbʌdʒɪt/","n. 预算","We're on a tight budget this month.","我们这个月预算很紧。"],
["calm","/kɑːm/","adj./v. 平静的；使镇静","Stay calm and carry on.","保持冷静，继续前行。"],
["career","/kəˈrɪə/","n. 职业，事业","She changed her career at thirty.","她三十岁时转行了。"],
["celebrate","/ˈselɪbreɪt/","v. 庆祝","Let's celebrate your birthday!","我们来庆祝你的生日吧！"],
["challenge","/ˈtʃælɪndʒ/","n./v. 挑战","This job is a real challenge.","这份工作是个真正的挑战。"],
["choice","/tʃɔɪs/","n. 选择","You made the right choice.","你做了正确的选择。"],
["comfortable","/ˈkʌmftəbl/","adj. 舒适的，自在的","This chair is very comfortable.","这把椅子很舒服。"],
["community","/kəˈmjuːnəti/","n. 社区，群体","Our community is very friendly.","我们社区非常友好。"],
["compare","/kəmˈpeə/","v. 比较","Don't compare yourself with others.","不要拿自己和别人比较。"],
["complete","/kəmˈpliːt/","v./adj. 完成；完整的","I completed the task on time.","我按时完成了任务。"],
["concentrate","/ˈkɒnsntreɪt/","v. 集中注意力","I can't concentrate with music on.","开着音乐我没法专心。"],
["confident","/ˈkɒnfɪdənt/","adj. 自信的","She looks confident on stage.","她在台上看起来很自信。"],
["consider","/kənˈsɪdə/","v. 考虑，认为","Please consider my suggestion.","请考虑一下我的建议。"],
["convenient","/kənˈviːniənt/","adj. 方便的","Is Friday convenient for you?","周五对你方便吗？"],
["cost","/kɒst/","n./v. 花费","The trip cost me a lot.","这次旅行花了我不少钱。"],
["courage","/ˈkʌrɪdʒ/","n. 勇气","It takes courage to start over.","重新开始需要勇气。"],
["create","/kriˈeɪt/","v. 创造，创作","She created a lovely painting.","她创作了一幅可爱的画。"],
["curious","/ˈkjʊəriəs/","adj. 好奇的","Children are naturally curious.","孩子天生好奇。"],
["decide","/dɪˈsaɪd/","v. 决定","I decided to go for a run.","我决定去跑步。"],
["decrease","/dɪˈkriːs/","v. 减少","My weight decreased by two kilos.","我的体重减了两公斤。"],
["deliver","/dɪˈlɪvə/","v. 递送，发表","The package was delivered today.","包裹今天送到了。"],
["depend","/dɪˈpend/","v. 依靠，取决于","It depends on the weather.","这取决于天气。"],
["describe","/dɪˈskraɪb/","v. 描述","Can you describe what happened?","你能描述一下发生了什么吗？"],
["develop","/dɪˈveləp/","v. 发展，开发","He developed a new habit.","他养成了一个新习惯。"],
["difficult","/ˈdɪfɪkəlt/","adj. 困难的","This question is quite difficult.","这个问题相当难。"],
["discover","/dɪˈskʌvə/","v. 发现","I discovered a great coffee shop.","我发现了一家很棒的咖啡店。"],
["discuss","/dɪˈskʌs/","v. 讨论","Let's discuss it after lunch.","我们午饭后讨论吧。"],
["effort","/ˈefət/","n. 努力","Your effort will pay off.","你的努力会有回报。"],
["encourage","/ɪnˈkʌrɪdʒ/","v. 鼓励","My teacher encouraged me a lot.","老师给了我很多鼓励。"],
["energy","/ˈenədʒi/","n. 精力，能量","I have no energy today.","我今天没什么精力。"],
["enough","/ɪˈnʌf/","adj./adv. 足够的","We have enough time.","我们时间够。"],
["environment","/ɪnˈvaɪrənmənt/","n. 环境","We should protect the environment.","我们应该保护环境。"],
["especially","/ɪˈspeʃəli/","adv. 尤其，特别","I love fruit, especially mangoes.","我喜欢水果，尤其是芒果。"],
["establish","/ɪˈstæblɪʃ/","v. 建立，确立","They established the company in 2010.","他们于2010年创立了这家公司。"],
["exactly","/ɪɡˈzæktli/","adv. 恰好，确切地","That's exactly what I need.","这正是我需要的。"],
["example","/ɪɡˈzɑːmpl/","n. 例子，榜样","Can you give me an example?","你能给我举个例子吗？"],
["excellent","/ˈeksələnt/","adj. 优秀的","Your report is excellent.","你的报告非常出色。"],
["expect","/ɪkˈspekt/","v. 期待，预料","I didn't expect to see you here.","没想到在这儿见到你。"],
["experience","/ɪkˈspɪəriəns/","n. 经验，经历","She has ten years of experience.","她有十年经验。"],
["explain","/ɪkˈspleɪn/","v. 解释","Let me explain it again.","我再解释一遍。"],
["express","/ɪkˈspres/","v. 表达","He expressed his thanks warmly.","他热情地表达了谢意。"],
["familiar","/fəˈmɪliə/","adj. 熟悉的","This song sounds familiar.","这首歌听着耳熟。"],
["favorite","/ˈfeɪvərɪt/","adj./n. 最喜欢的","Green tea is my favorite.","绿茶是我的最爱。"],
["figure","/ˈfɪɡə/","n./v. 数字，身材；认为","I can't figure out this problem.","我搞不懂这个问题。"],
["finally","/ˈfaɪnəli/","adv. 最后，终于","We finally arrived home.","我们终于到家了。"],
["focus","/ˈfəʊkəs/","v./n. 集中；焦点","Focus on one thing at a time.","一次专注做一件事。"],
["forget","/fəˈɡet/","v. 忘记","Don't forget to take your keys.","别忘了带钥匙。"],
["fortunately","/ˈfɔːtʃənətli/","adv. 幸运地","Fortunately, nobody got hurt.","幸运的是没人受伤。"],
["freedom","/ˈfriːdəm/","n. 自由","Discipline brings freedom.","自律带来自由。"],
["frequently","/ˈfriːkwəntli/","adv. 频繁地","She frequently works overtime.","她经常加班。"],
["generous","/ˈdʒenərəs/","adj. 慷慨的","He is generous with his time.","他很乐意花时间帮人。"],
["gradually","/ˈɡrædʒuəli/","adv. 逐渐地","The pain gradually went away.","疼痛逐渐消失了。"],
["grateful","/ˈɡreɪtfl/","adj. 感激的","I'm grateful for your support.","我很感激你的支持。"],
["habit","/ˈhæbɪt/","n. 习惯","Reading is a good habit.","阅读是个好习惯。"],
["healthy","/ˈhelθi/","adj. 健康的","She keeps a healthy diet.","她保持健康饮食。"],
["hesitate","/ˈhezɪteɪt/","v. 犹豫","Don't hesitate to ask me.","有事尽管问我。"],
["honest","/ˈɒnɪst/","adj. 诚实的","To be honest, I'm tired.","说实话，我累了。"],
["however","/haʊˈevə/","adv. 然而","It's expensive; however, it's worth it.","它很贵，不过值得。"],
["ignore","/ɪɡˈnɔː/","v. 忽视","Don't ignore your feelings.","不要忽视自己的感受。"],
["imagine","/ɪˈmædʒɪn/","v. 想象","Imagine living by the sea.","想象一下住在海边。"],
["immediately","/ɪˈmiːdiətli/","adv. 立即","Call me immediately if anything happens.","有事立刻给我打电话。"],
["important","/ɪmˈpɔːtnt/","adj. 重要的","Sleep is important for health.","睡眠对健康很重要。"],
["improve","/ɪmˈpruːv/","v. 改善，提高","My English is improving.","我的英语在进步。"],
["include","/ɪnˈkluːd/","v. 包括","The price includes breakfast.","价格包含早餐。"],
["increase","/ɪnˈkriːs/","v./n. 增加","Prices increased last month.","上个月物价上涨了。"],
["influence","/ˈɪnfluəns/","n./v. 影响","Parents influence their children deeply.","父母对孩子影响很深。"],
["inspire","/ɪnˈspaɪə/","v. 激励，启发","Her story inspired me.","她的故事激励了我。"],
["instead","/ɪnˈsted/","adv. 代替，反而","Let's walk instead of driving.","我们走路吧，别开车。"],
["interesting","/ˈɪntrəstɪŋ/","adj. 有趣的","That's an interesting idea.","那是个有趣的想法。"],
["introduce","/ˌɪntrəˈdjuːs/","v. 介绍","Let me introduce my friend.","我来介绍一下我的朋友。"],
["involve","/ɪnˈvɒlv/","v. 涉及，包含","The job involves a lot of travel.","这份工作需要经常出差。"],
["journey","/ˈdʒɜːni/","n. 旅程","Enjoy the journey, not just the goal.","享受过程，而不只是目标。"],
["judge","/dʒʌdʒ/","v./n. 判断；法官","Don't judge a book by its cover.","不要以貌取人。"],
["knowledge","/ˈnɒlɪdʒ/","n. 知识","Knowledge is power.","知识就是力量。"],
["language","/ˈlæŋɡwɪdʒ/","n. 语言","She speaks three languages.","她会说三种语言。"],
["laugh","/lɑːf/","v./n. 笑","We laughed all evening.","我们笑了一整晚。"],
["leader","/ˈliːdə/","n. 领导者","A good leader listens carefully.","好的领导者善于倾听。"],
["learn","/lɜːn/","v. 学习","I learn new words every day.","我每天学新单词。"],
["level","/ˈlevl/","n. 水平，层级","My English level is improving.","我的英语水平在提高。"],
["likely","/ˈlaɪkli/","adj./adv. 很可能","It's likely to rain tonight.","今晚很可能下雨。"],
["limit","/ˈlɪmɪt/","n./v. 限制","There's no limit to what you can learn.","你能学的东西没有上限。"],
["manage","/ˈmænɪdʒ/","v. 管理，设法做到","She manages her time well.","她很会管理时间。"],
["measure","/ˈmeʒə/","v./n. 测量；措施","Measure your progress weekly.","每周衡量一下你的进步。"],
["mention","/ˈmenʃn/","v. 提到","He mentioned your name.","他提到了你的名字。"],
["mistake","/mɪˈsteɪk/","n. 错误","Everyone makes mistakes.","每个人都会犯错。"],
["moment","/ˈməʊmənt/","n. 时刻，片刻","Wait a moment, please.","请稍等片刻。"],
["natural","/ˈnætʃrəl/","adj. 自然的","It's natural to feel nervous.","感到紧张是很自然的。"],
["necessary","/ˈnesəsəri/","adj. 必要的","Rest is necessary for growth.","休息对成长是必要的。"],
["notice","/ˈnəʊtɪs/","v./n. 注意到；通知","I noticed you changed your hair.","我注意到你换发型了。"],
["obvious","/ˈɒbviəs/","adj. 明显的","The answer is quite obvious.","答案很明显。"],
["occasion","/əˈkeɪʒn/","n. 场合，时机","She wore a dress for the occasion.","她为这个场合穿了裙子。"],
["offer","/ˈɒfə/","v./n. 提供；提议","They offered me a better job.","他们给我提供了更好的工作。"],
["opinion","/əˈpɪnjən/","n. 意见，观点","In my opinion, it's fine.","在我看来，这没问题。"],
["opportunity","/ˌɒpəˈtjuːnəti/","n. 机会","Don't miss this opportunity.","别错过这个机会。"],
["organize","/ˈɔːɡənaɪz/","v. 组织，整理","I organized my desk this morning.","我今早整理了书桌。"],
["particular","/pəˈtɪkjələ/","adj. 特定的，讲究的","Is there a particular reason?","有什么特别的原因吗？"],
["patient","/ˈpeɪʃnt/","adj./n. 耐心的；病人","Please be patient with yourself.","请对自己有耐心。"],
["perhaps","/pəˈhæps/","adv. 也许","Perhaps we should try again.","也许我们该再试一次。"],
["personal","/ˈpɜːsənl/","adj. 个人的","That's a personal question.","那是个私人问题。"],
["persuade","/pəˈsweɪd/","v. 说服","She persuaded me to join.","她说服我加入了。"],
["plenty","/ˈplenti/","n. 大量","There's plenty of time left.","还有很多时间。"],
["popular","/ˈpɒpjələ/","adj. 受欢迎的","This song is very popular.","这首歌很受欢迎。"],
["positive","/ˈpɒzətɪv/","adj. 积极的，肯定的","Keep a positive mindset.","保持积极心态。"],
["possible","/ˈpɒsəbl/","adj. 可能的","Anything is possible with effort.","努力之下一切皆有可能。"],
["practice","/ˈpræktɪs/","n./v. 练习","Practice makes perfect.","熟能生巧。"],
["prefer","/prɪˈfɜː/","v. 更喜欢","I prefer tea to coffee.","比起咖啡我更喜欢茶。"],
["prepare","/prɪˈpeə/","v. 准备","I'm preparing dinner now.","我正在准备晚饭。"],
["pressure","/ˈpreʃə/","n. 压力","He's under a lot of pressure.","他压力很大。"],
["prevent","/prɪˈvent/","v. 阻止，预防","Exercise helps prevent illness.","运动有助于预防疾病。"],
["progress","/ˈprəʊɡres/","n. 进步","You're making great progress.","你进步很大。"],
["promise","/ˈprɒmɪs/","v./n. 承诺","I promise to be on time.","我保证准时。"],
["protect","/prəˈtekt/","v. 保护","Wear a hat to protect your skin.","戴帽子保护皮肤。"],
["provide","/prəˈvaɪd/","v. 提供","The hotel provides free breakfast.","酒店提供免费早餐。"],
["purpose","/ˈpɜːpəs/","n. 目的","What's the purpose of this meeting?","这次会议的目的是什么？"],
["quality","/ˈkwɒləti/","n. 质量，品质","Quality matters more than quantity.","质量比数量重要。"],
["realize","/ˈriːəlaɪz/","v. 意识到，实现","I realized I was wrong.","我意识到自己错了。"],
["reason","/ˈriːzn/","n. 原因，理由","There's a reason for everything.","凡事皆有原因。"],
["receive","/rɪˈsiːv/","v. 收到","I received your message.","我收到你的消息了。"],
["recommend","/ˌrekəˈmend/","v. 推荐","Can you recommend a good book?","你能推荐一本好书吗？"],
["reduce","/rɪˈdjuːs/","v. 减少","I'm trying to reduce sugar.","我在尽量减少糖分摄入。"],
["regret","/rɪˈɡret/","v./n. 后悔","I don't regret my decision.","我不后悔我的决定。"],
["relax","/rɪˈlæks/","v. 放松","You need to relax a bit.","你需要放松一下。"],
["remember","/rɪˈmembə/","v. 记得","Remember to drink water.","记得喝水。"],
["remind","/rɪˈmaɪnd/","v. 提醒","Remind me to call her.","提醒我给她打电话。"],
["replace","/rɪˈpleɪs/","v. 取代，更换","I replaced coffee with tea.","我用茶代替了咖啡。"],
["require","/rɪˈkwaɪə/","v. 需要，要求","This job requires patience.","这份工作需要耐心。"],
["responsible","/rɪˈspɒnsəbl/","adj. 负责的","She is responsible for the project.","她负责这个项目。"],
["result","/rɪˈzʌlt/","n. 结果","The result was better than expected.","结果比预期好。"],
["schedule","/ˈʃedjuːl/","n./v. 日程；安排","My schedule is full today.","我今天日程排满了。"],
["search","/sɜːtʃ/","v./n. 搜索","I searched for it online.","我在网上搜了一下。"],
["serious","/ˈsɪəriəs/","adj. 严肃的，严重的","Are you serious about this?","你对这事是认真的吗？"],
["similar","/ˈsɪmələ/","adj. 相似的","Our tastes are quite similar.","我们的口味很相似。"],
["simple","/ˈsɪmpl/","adj. 简单的","Keep it simple.","保持简单。"],
["situation","/ˌsɪtʃuˈeɪʃn/","n. 情况","The situation is under control.","情况在控制之中。"],
["society","/səˈsaɪəti/","n. 社会","Society is changing fast.","社会变化很快。"],
["solve","/sɒlv/","v. 解决","Let's solve this together.","我们一起解决吧。"],
["special","/ˈspeʃl/","adj. 特别的","Today is a special day.","今天是特别的一天。"],
["standard","/ˈstændəd/","n./adj. 标准","She sets a high standard.","她设定了很高的标准。"],
["strength","/streŋθ/","n. 力量，优点","Patience is her greatest strength.","耐心是她最大的优点。"],
["stress","/stres/","n. 压力","Exercise helps relieve stress.","运动有助于缓解压力。"],
["succeed","/səkˈsiːd/","v. 成功","You will succeed if you keep going.","坚持下去你会成功。"],
["suggest","/səˈdʒest/","v. 建议","I suggest taking a break.","我建议休息一下。"],
["support","/səˈpɔːt/","v./n. 支持","Thanks for your support.","谢谢你的支持。"],
["suppose","/səˈpəʊz/","v. 假设，认为","I suppose you're right.","我想你是对的。"],
["surprise","/səˈpraɪz/","n./v. 惊喜","What a nice surprise!","真是个惊喜！"],
["survive","/səˈvaɪv/","v. 幸存，活下来","The plant survived the winter.","这株植物挺过了冬天。"],
["through","/θruː/","prep. 穿过，通过","We got through it together.","我们一起挺过来了。"],
["together","/təˈɡeðə/","adv. 一起","Let's do it together.","我们一起做吧。"],
["tradition","/trəˈdɪʃn/","n. 传统","It's a family tradition.","这是家族传统。"],
["treat","/triːt/","v./n. 对待；款待","Treat yourself kindly.","善待自己。"],
["trust","/trʌst/","v./n. 信任","I trust your judgment.","我信任你的判断。"],
["understand","/ˌʌndəˈstænd/","v. 理解","I completely understand you.","我完全理解你。"],
["unique","/juˈniːk/","adj. 独特的","Everyone is unique.","每个人都是独一无二的。"],
["usually","/ˈjuːʒuəli/","adv. 通常","I usually get up at seven.","我通常七点起床。"],
["valuable","/ˈvæljuəbl/","adj. 有价值的","Time is our most valuable asset.","时间是我们最宝贵的财富。"],
["various","/ˈveəriəs/","adj. 各种各样的","We tried various methods.","我们尝试了各种方法。"],
["victory","/ˈvɪktəri/","n. 胜利","Every small win is a victory.","每个小胜利都是胜利。"],
["weight","/weɪt/","n. 重量，体重","I lost two kilos of weight.","我减了两公斤。"],
["welcome","/ˈwelkəm/","v./adj. 欢迎","You're always welcome here.","这里永远欢迎你。"],
["whether","/ˈweðə/","conj. 是否","I'm not sure whether to go.","我不确定要不要去。"],
["willing","/ˈwɪlɪŋ/","adj. 愿意的","I'm willing to help.","我愿意帮忙。"],
["wonder","/ˈwʌndə/","v./n. 想知道；奇迹","I wonder what she's doing.","我想知道她在做什么。"],
["worry","/ˈwʌri/","v./n. 担心","Don't worry about it.","别担心。"],
["worth","/wɜːθ/","adj. 值得的","It's worth trying.","这值得一试。"]
];

/* ===================== 存储 ===================== */
const KEY='xiaoxiao_workbench_v1';
const BK_KEY='xiaoxiao_workbench_last_backup';   // 上次导出备份日期
const DEF={
  profile:{name:'',baby:'星仔',h:'',w:'',wt:''},
  pref:{wc:30,sc:5,tea:800,rate:0.9,online:false,start:'home'},
  todos:[],            // {id,text,date,time,done,note,pri}
  study:{},            // 'YYYY-MM-DD':{w:[idx...],s:[idx...],wd:[已勾选idx],sd:[]}
  sports:[],           // {id,date,item,mins,note}
  sportItems:null,     // [[name,icon]]
  diets:[],            // {id,date,meal,food,note}
  tea:{},              // 'date': ml
  baby:{},             // 'date': [{name,done,note,extra}]
  babyItems:null,
  txs:[],              // {id,date,type,cat,amt,note}
  annis:[],            // {id,name,type,cal,y,m,d,leap,note,icon}
  periods:[],          // {id,start,end,note,flow}
  periodCfg:{cyc:28,len:5},
  news:{date:'',data:null},
  studyLog:{}          // 'date':{wt,wd,st,sd}
};
let DB={};
function load(){
  try{const r=localStorage.getItem(KEY);DB=r?Object.assign(JSON.parse(JSON.stringify(DEF)),JSON.parse(r)):JSON.parse(JSON.stringify(DEF));}
  catch(e){DB=JSON.parse(JSON.stringify(DEF));}
  DB.pref=Object.assign({},DEF.pref,DB.pref||{});
  DB.profile=Object.assign({},DEF.profile,DB.profile||{});
  DB.periodCfg=Object.assign({},DEF.periodCfg,DB.periodCfg||{});
  if(!DB.sportItems)DB.sportItems=SPORT_DEFAULT.map(x=>[x[0],x[1]]);
  if(!DB.babyItems)DB.babyItems=BABY_DEFAULT.slice();
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB));}catch(e){UI.toast('存储空间不足');}}
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);

/* ===================== 日期工具 ===================== */
const pad=n=>String(n).padStart(2,'0');
const ymd=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const today=()=>ymd(new Date());
const parseD=s=>{const p=s.split('-').map(Number);return new Date(p[0],p[1]-1,p[2]);};
const WK=['日','一','二','三','四','五','六'];
function fmtCn(s){const d=parseD(s);return (d.getMonth()+1)+'月'+d.getDate()+'日 周'+WK[d.getDay()];}
function fmtFull(s){const d=parseD(s);return d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日 星期'+WK[d.getDay()];}
function diffDays(a,b){return Math.round((parseD(b)-parseD(a))/864e5);}
function addDays(s,n){const d=parseD(s);d.setDate(d.getDate()+n);return ymd(d);}
function monthGrid(y,m){ // m:0-11 返回从周一开始的 42 格
  const first=new Date(y,m,1);let off=(first.getDay()+6)%7;
  const start=new Date(y,m,1-off);const arr=[];
  for(let i=0;i<42;i++){const d=new Date(start.getFullYear(),start.getMonth(),start.getDate()+i);arr.push({d,s:ymd(d),out:d.getMonth()!==m});}
  return arr;
}
function seedRand(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
function dateSeed(ds){const p=ds.split('-').map(Number);return p[0]*10000+p[1]*100+p[2];}
function pickN(len,n,seed){ // 从 0..len-1 无重复抽 n 个
  const idx=Array.from({length:len},(_,i)=>i);const r=seedRand(seed);
  for(let i=len-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
  return idx.slice(0,Math.min(n,len));
}

/* ===================== 农历 ===================== */
function sl2l(y,m,d){try{return solarlunar.solar2lunar(y,m,d);}catch(e){return null;}}
function l2s(y,m,d,leap){try{return solarlunar.lunar2solar(y,m,d,!!leap);}catch(e){return null;}}
function lunarLabel(o){if(!o)return'';return o.dayCn==='初一'?o.monthCn+'月'.replace('月月','月'):o.dayCn;}
function lunarShort(dateStr){
  const d=parseD(dateStr);const o=sl2l(d.getFullYear(),d.getMonth()+1,d.getDate());
  if(!o)return'';
  if(o.isTerm&&o.term)return o.term;
  return o.dayCn==='初一'?(o.isLeap?'闰':'')+o.monthCn:o.dayCn;
}

/* ===================== 三伏天 ===================== */
function jdn(y,m,d){const a=Math.floor((14-m)/12),yy=y+4800-a,mm=m+12*a-3;
  return d+Math.floor((153*mm+2)/5)+365*yy+Math.floor(yy/4)-Math.floor(yy/100)+Math.floor(yy/400)-32045;}
function isGeng(dateStr){const d=parseD(dateStr);return (jdn(d.getFullYear(),d.getMonth()+1,d.getDate())+9)%10===6;}
const _fuCache={};
function fuOf(year){
  if(_fuCache[year])return _fuCache[year];
  const t=TERMS[year];if(!t){return _fuCache[year]=null;}
  const xz=year+'-'+pad(t[0][0])+'-'+pad(t[0][1]);
  const lq=year+'-'+pad(t[1][0])+'-'+pad(t[1][1]);
  let cnt=0,first=null;
  for(let i=0;i<60;i++){const s=addDays(xz,i);if(isGeng(s)){cnt++;if(cnt===3){first=s;break;}}}
  let last=null;
  for(let i=0;i<30;i++){const s=addDays(lq,i);if(isGeng(s)){last=s;break;}}
  const mid=addDays(first,10);
  const r={first,mid,last,end:addDays(last,9),midEnd:addDays(last,-1)};
  return _fuCache[year]=r;
}
function fuLabel(dateStr){
  const y=+dateStr.slice(0,4);const f=fuOf(y);if(!f)return null;
  if(dateStr<f.first||dateStr>f.end)return null;
  if(dateStr<f.mid)return{t:'初伏',n:diffDays(f.first,dateStr)+1,cls:'a'};
  if(dateStr<f.last)return{t:'中伏',n:diffDays(f.mid,dateStr)+1,cls:'b'};
  return{t:'末伏',n:diffDays(f.last,dateStr)+1,cls:'c'};
}

/* ===================== 语音 ===================== */
const Speak={
  ok:'speechSynthesis'in window,
  voices:[],
  init(){
    if(!this.ok)return;
    const load=()=>{try{this.voices=speechSynthesis.getVoices()||[];}catch(e){}};
    load();
    if('onvoiceschanged'in speechSynthesis)speechSynthesis.onvoiceschanged=load;
  },
  say(txt,cb){
    txt=(txt||'').trim(); if(!txt){cb&&cb();return;}
    if(this.ok)this._native(txt,cb); else this._youdao(txt,cb);
  },
  _native(txt,cb){
    try{
      speechSynthesis.cancel();
      const u=new SpeechSynthesisUtterance(txt);
      u.lang='en-US'; u.rate=(+DB.pref.rate)||0.9;
      if(!this.voices.length)this.voices=speechSynthesis.getVoices()||[];
      const v=this.voices.find(x=>/en-US/i.test(x.lang)&&/female|Samantha|Zira|Google US/i.test(x.name))
           ||this.voices.find(x=>/^en/i.test(x.lang));
      if(v)u.voice=v;
      let started=false;
      u.onstart=()=>{started=true;};
      const fb=setTimeout(()=>{ if(!started){ try{speechSynthesis.cancel();}catch(e){} this._youdao(txt,cb);} },1200);
      u.onend=()=>{ clearTimeout(fb); cb&&cb(); };
      u.onerror=()=>{ clearTimeout(fb); this._youdao(txt,cb); };
      const speakIt=()=>speechSynthesis.speak(u);
      if(this.voices.length){ speakIt(); }
      else if('onvoiceschanged'in speechSynthesis){
        speechSynthesis.onvoiceschanged=()=>{
          const vs=speechSynthesis.getVoices()||[];
          if(vs.length){const vv=vs.find(x=>/en-US/i.test(x.lang))||vs.find(x=>/^en/i.test(x.lang)); if(vv)u.voice=vv;} speakIt();
        };
      } else { speakIt(); }
    }catch(e){ this._youdao(txt,cb); }
  },
  _youdao(txt,cb){
    try{
      UI.toast&&UI.toast('正在用在线语音朗读…');
      const a=new Audio('https://dict.youdao.com/dictvoice?audio='+encodeURIComponent(txt)+'&type=2');
      a.play().then(()=>{}).catch(()=>{ UI.toast&&UI.toast('在线语音暂不可用，请用 Safari / Chrome 打开'); });
      if(cb)a.onended=cb;
    }catch(e){ UI.toast&&UI.toast('当前环境无法朗读，请用 Safari / Chrome 打开'); cb&&cb(); }
  },
  stop(){ if(this.ok){try{speechSynthesis.cancel();}catch(e){}} }
};
if('speechSynthesis'in window){ Speak.init(); speechSynthesis.getVoices(); }

/* ===================== UI ===================== */
const PAGES=[
  ['home','🏠','首页'],['todo','📝','待办'],['study','📓','学习'],['fat','🏋️','减脂'],['baby','⭐️','星仔'],
  ['money','💰','记账'],['news','📰','新闻'],['anni','📅','纪念'],['period','🌸','经期'],['set','⚙️','设置']
];
const UI={
  cur:'home',
  toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');clearTimeout(this._t);this._t=setTimeout(()=>t.classList.remove('on'),1900);},
  modal(html){document.getElementById('modal').innerHTML=html;document.getElementById('mask').classList.add('on');
    setTimeout(()=>{const f=document.querySelector('#modal input,#modal textarea,#modal select');if(f&&f.type!=='date')f.focus();},60);},
  close(){document.getElementById('mask').classList.remove('on');},
  go(p){
    this.cur=p;Speak.stop();
    document.querySelectorAll('.page').forEach(e=>e.classList.remove('on'));
    const el=document.getElementById('p-'+p);if(el)el.classList.add('on');
    document.querySelectorAll('.nav-item').forEach(e=>e.classList.toggle('on',e.dataset.p===p));
    document.getElementById('main').scrollTop=0;
    const R={home:()=>Home.render(),todo:()=>Todo.render(),study:()=>Study.render(),fat:()=>Fat.render(),
      baby:()=>Baby.render(),money:()=>Money.render(),news:()=>News.render(),anni:()=>Anni.render(),
      period:()=>Period.render(),set:()=>Settings.render()};
    R[p]&&R[p]();
  },
  esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));},
  empty(t,e){return `<div class="empty"><span class="e">${e||'🍃'}</span>${t}</div>`;},
  stat(lb,vl,ex,ic,color){return `<div class="stat"><div class="bg">${ic||''}</div><div class="lb">${lb}</div>
    <div class="vl" ${color?'style="color:'+color+'"':''}>${vl}</div>${ex?`<div class="ex">${ex}</div>`:''}</div>`;},
  confirm(msg,fn){
    this.modal(`<h3>⚠️ 确认操作</h3><div style="font-size:13.5px;line-height:1.7;color:var(--ink2)">${msg}</div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" id="ok-btn">确定</button></div>`);
    document.getElementById('ok-btn').onclick=()=>{UI.close();fn();};
  }
};
function buildNav(){
  const n=document.getElementById('nav');
  PAGES.forEach(p=>{
    const b=document.createElement('button');
    b.className='nav-item';b.dataset.p=p[0];
    b.innerHTML=`<span class="ico">${p[1]}</span><span class="nm">${p[2]}</span>`;
    b.onclick=()=>UI.go(p[0]);n.appendChild(b);
  });
}
/* 跨日自动刷新（凌晨0点重置学习计划等） */
let _lastDay=today();
setInterval(()=>{
  const t=today();
  if(t!==_lastDay){_lastDay=t;News.refresh();UI.go(UI.cur);UI.toast('新的一天开始啦 🌅 学习计划已更新');}
  News.autoCheck();
},30000);

/* ===================== 待办 ===================== */
const Todo={
  cm:new Date().getMonth(),cy:new Date().getFullYear(),sel:today(),
  list(){return DB.todos.slice().sort((a,b)=>(a.date+(a.time||'99:99')).localeCompare(b.date+(b.time||'99:99')));},
  byDate(d){return this.list().filter(t=>t.date===d);},
  open(t){
    t=t||{};
    const pris=[['low','低'],['mid','中'],['high','高']];
    UI.modal(`<h3>${t.id?'✏️ 编辑待办':'📝 新增待办'}</h3>
    <div class="frm">
      <div><label class="fl">待办内容 *</label><input id="td-t" value="${UI.esc(t.text||'')}" placeholder="例如：整理书桌 / 读书 30 分钟"></div>
      <div class="frm-row">
        <div><label class="fl">日期</label><input type="date" id="td-d" value="${t.date||today()}"></div>
        <div><label class="fl">时间</label><input type="time" id="td-tm" value="${t.time||''}"></div>
        <div><label class="fl">优先级</label><select id="td-p">${pris.map(p=>`<option value="${p[0]}" ${(t.pri||'mid')===p[0]?'selected':''}>${p[1]}</option>`).join('')}</select></div>
      </div>
      <div><label class="fl">备注</label><textarea id="td-n" placeholder="可选">${UI.esc(t.note||'')}</textarea></div>
    </div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" onclick="Todo.save('${t.id||''}')">保存</button></div>`);
  },
  save(id){
    const text=document.getElementById('td-t').value.trim();
    if(!text)return UI.toast('请填写待办内容');
    const o={text,date:document.getElementById('td-d').value||today(),time:document.getElementById('td-tm').value,
      pri:document.getElementById('td-p').value,note:document.getElementById('td-n').value.trim()};
    if(id){Object.assign(DB.todos.find(x=>x.id===id),o);}
    else{DB.todos.push(Object.assign({id:uid(),done:false},o));}
    save();UI.close();UI.toast('已保存 ✓');this.render();
  },
  toggle(id){const t=DB.todos.find(x=>x.id===id);t.done=!t.done;save();this.render();if(t.done)UI.toast('完成一件，真棒 🎉');},
  del(id){UI.confirm('确定删除这条待办吗？',()=>{DB.todos=DB.todos.filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  edit(id){this.open(DB.todos.find(x=>x.id===id));},
  row(t){
    const over=!t.done&&t.date<today();
    const P={high:'<span class="pill warn">高</span>',mid:'',low:'<span class="pill gray">低</span>'};
    return `<div class="row ${t.done?'done':''}">
      <input type="checkbox" class="chk" ${t.done?'checked':''} onchange="Todo.toggle('${t.id}')">
      <div class="tx">${UI.esc(t.text)}
        <div class="mt">${t.time?'🕐 '+t.time:''} <span>${fmtCn(t.date)}</span>${over?'<span class="pill warn">已逾期</span>':''}${P[t.pri||'mid']}${t.note?'<span>📎 '+UI.esc(t.note)+'</span>':''}</div>
      </div>
      <div class="ops"><button class="icobtn" onclick="Todo.edit('${t.id}')">✏️</button>
      <button class="icobtn" onclick="Todo.del('${t.id}')">🗑️</button></div></div>`;
  },
  mv(n){const d=new Date(this.cy,this.cm+n,1);this.cy=d.getFullYear();this.cm=d.getMonth();this.renderCal();},
  pick(s){this.sel=s;this.renderCal();this.renderDay();},
  render(){
    const td=this.byDate(today()),dn=td.filter(t=>t.done).length;
    document.getElementById('td-sub').textContent=fmtFull(today())+' · 今日 '+td.length+' 项，完成 '+dn+' 项';
    document.getElementById('td-today-r').innerHTML=td.length?`<span class="pill">${dn}/${td.length}</span>`:'';
    document.getElementById('td-today').innerHTML=td.length?td.map(t=>this.row(t)).join(''):UI.empty('今天还没有待办，享受轻松的一天吧','☀️');
    const t0=today();
    const soon=this.list().filter(t=>t.date>t0&&t.date<=addDays(t0,30));
    const over=this.list().filter(t=>!t.done&&t.date<t0);
    document.getElementById('td-soon-r').innerHTML=`<span class="pill">未来30天 ${soon.length}</span>${over.length?`<span class="pill warn">逾期 ${over.length}</span>`:''}`;
    document.getElementById('td-soon').innerHTML=(over.length?'<div style="font-size:11.5px;font-weight:800;color:#c0685f;margin:2px 0 7px">⚠️ 逾期未完成</div>'+over.map(t=>this.row(t)).join(''):'')
      +(soon.length?(over.length?'<div style="font-size:11.5px;font-weight:800;color:var(--muted);margin:12px 0 7px">📌 即将到来</div>':'')+soon.map(t=>this.row(t)).join(''):(over.length?'':UI.empty('近期没有安排','🗓️')));
    this.renderCal();this.renderDay();
  },
  renderCal(){
    document.getElementById('td-cal-t').textContent=this.cy+'年'+(this.cm+1)+'月';
    const t0=today();
    document.getElementById('td-cal').innerHTML=monthGrid(this.cy,this.cm).map(g=>{
      const l=this.byDate(g.s);
      let dots='';
      if(l.length){
        const d=l.filter(x=>x.done).length,u=l.length-d,ov=l.some(x=>!x.done&&g.s<t0);
        dots='<div class="dots">'+(d?'<i style="background:#4fb08d"></i>':'')+(u?`<i style="background:${ov?'#e08a7b':'#f2c48b'}"></i>`:'')+'</div>';
      }
      return `<button class="d ${g.out?'out':''} ${g.s===t0?'today':''} ${g.s===this.sel?'sel':''}" ${g.out?'':`onclick="Todo.pick('${g.s}')"`}>
        <span class="n">${g.d.getDate()}</span><span class="l">${lunarShort(g.s)}</span>${dots}</button>`;
    }).join('');
  },
  renderDay(){
    const l=this.byDate(this.sel),d=l.filter(x=>x.done).length;
    document.getElementById('td-day-t').textContent=fmtCn(this.sel);
    document.getElementById('td-day-r').innerHTML=l.length?`<span class="pill">完成 ${d}/${l.length}</span>`:'';
    document.getElementById('td-day').innerHTML=l.length?l.map(t=>this.row(t)).join('')
      :UI.empty(`${fmtCn(this.sel)} 没有待办<br><button class="btn sm pri" style="margin-top:10px" onclick="Todo.openAt('${this.sel}')">＋ 添加到这天</button>`,'📭');
  },
  openAt(d){this.open({date:d});}
};

/* ===================== 学习 ===================== */
const Study={
  plan(ds){
    ds=ds||today();
    if(!DB.study[ds]){
      const wc=+DB.pref.wc||30,sc=+DB.pref.sc||5,sd=dateSeed(ds);
      DB.study[ds]={w:pickN(WORDS.length,wc,sd),s:pickN(SENTS.length,sc,sd+777),wd:[],sd:[]};
      // 清理 180 天前的明细，仅保留统计
      const keep=addDays(ds,-180);
      Object.keys(DB.study).forEach(k=>{if(k<keep)delete DB.study[k];});
      save();
    }
    return DB.study[ds];
  },
  log(ds){
    const p=this.plan(ds);
    DB.studyLog[ds]={wt:p.w.length,wd:p.wd.length,st:p.s.length,sd:p.sd.length};
    const keep=addDays(ds,-730);Object.keys(DB.studyLog).forEach(k=>{if(k<keep)delete DB.studyLog[k];});
  },
  rate(ds){
    const l=DB.studyLog[ds];
    if(l)return (l.wt+l.st)?Math.round((l.wd+l.sd)/(l.wt+l.st)*100):0;
    const p=DB.study[ds];if(!p)return 0;
    const t=p.w.length+p.s.length;return t?Math.round((p.wd.length+p.sd.length)/t*100):0;
  },
  tw(i){const p=this.plan();const k=p.wd.indexOf(i);k<0?p.wd.push(i):p.wd.splice(k,1);this.log(today());save();this.render();},
  ts(i){const p=this.plan();const k=p.sd.indexOf(i);k<0?p.sd.push(i):p.sd.splice(k,1);this.log(today());save();this.render();},
  flip(el){el.classList.toggle('open');},
  say(t,e){if(e)e.stopPropagation();Speak.say(typeof t==='string'?t:(t&&t.getAttribute?t.getAttribute('data-t'):''));},
  autoPlay(){
    if(this._p){this._p=false;Speak.stop();document.getElementById('st-auto').textContent='🔊 连读单词';return;}
    this._p=true;document.getElementById('st-auto').textContent='⏹ 停止连读';
    const w=this.plan().w.slice();let i=0;
    const next=()=>{
      if(!this._p||i>=w.length){this._p=false;const b=document.getElementById('st-auto');if(b)b.textContent='🔊 连读单词';return;}
      const it=WORDS[w[i++]];Speak.say(it[0]+'. '+it[3],()=>setTimeout(next,400));
    };next();
  },
  render(){
    const ds=today(),p=this.plan(ds);this.log(ds);save();
    document.getElementById('st-sub').textContent=fmtFull(ds)+' · 农历'+lunarShort(ds)+' · 每日 0 点自动更新新计划';
    const wr=p.w.length?Math.round(p.wd.length/p.w.length*100):0;
    const sr=p.s.length?Math.round(p.sd.length/p.s.length*100):0;
    const all=this.rate(ds);
    // 连续打卡
    let streak=0;for(let i=0;;i++){const d=addDays(ds,-i);const r=this.rate(d);if(r>0)streak++;else if(i>0)break;else break;}
    const days=Object.keys(DB.studyLog).length;
    const tot=Object.values(DB.studyLog).reduce((a,b)=>a+b.wd,0);
    document.getElementById('st-stats').innerHTML=
      UI.stat('今日完成率',all+'<small>%</small>','词汇 '+p.wd.length+'/'+p.w.length+' · 语句 '+p.sd.length+'/'+p.s.length,'🎯')+
      UI.stat('连续打卡',streak+'<small>天</small>',streak>=3?'保持住，很棒！':'今天也要坚持哦','🔥')+
      UI.stat('累计学习',days+'<small>天</small>','打卡记录可回溯','📅')+
      UI.stat('累计掌握词汇',tot+'<small>个</small>','含重复复习','🏆');
    document.getElementById('st-w-r').innerHTML=`<span class="pill">${p.wd.length}/${p.w.length}</span>`;
    document.getElementById('st-s-r').innerHTML=`<span class="pill">${p.sd.length}/${p.s.length}</span>`;
    document.getElementById('st-w-bar').style.width=wr+'%';
    document.getElementById('st-s-bar').style.width=sr+'%';
    document.getElementById('st-words').innerHTML=p.w.map(i=>{
      const w=WORDS[i],ok=p.wd.includes(i);
      return `<div class="word ${ok?'ok':''}" onclick="Study.flip(this)">
        <div class="top">
          <span class="en">${w[0]}</span>
          <button class="icobtn" data-t="${UI.esc(w[0])}" onclick="Study.say(this,event)">🔊</button>
          <input type="checkbox" class="chk" ${ok?'checked':''} onclick="event.stopPropagation()" onchange="Study.tw(${i})">
        </div>
        <div class="ipa">${w[1]}</div><div class="cn">${w[2]}</div>
        <div class="ex">💬 ${UI.esc(w[3])}<br><span style="color:var(--muted)">${UI.esc(w[4])}</span>
        <button class="btn sm gh" style="margin-top:7px" data-t="${UI.esc(w[3])}" onclick="Study.say(this,event)">🔊 读例句</button></div>
      </div>`;
    }).join('');
    document.getElementById('st-sents').innerHTML=p.s.map(i=>{
      const s=SENTS[i],ok=p.sd.includes(i);
      return `<div class="sent ${ok?'ok':''}">
        <input type="checkbox" class="chk" ${ok?'checked':''} onchange="Study.ts(${i})">
        <div class="b"><div class="en">${UI.esc(s[0])}</div><div class="cn">${UI.esc(s[1])}</div></div>
        <button class="icobtn" data-t="${UI.esc(s[0])}" onclick="Study.say(this,event)">🔊</button></div>`;
    }).join('');
    // 热力图
    const cells=[];let done=0;
    for(let i=29;i>=0;i--){
      const d=addDays(ds,-i),r=this.rate(d);
      if(r>=100)done++;
      const bg=r===0?'rgba(255,255,255,.5)':r<40?'rgba(143,212,180,.35)':r<80?'rgba(122,205,170,.65)':'linear-gradient(145deg,#7fd2b0,#4fb08d)';
      cells.push(`<div title="${d} 完成率 ${r}%" style="aspect-ratio:1;border-radius:8px;background:${bg};border:1px solid rgba(255,255,255,.6);display:grid;place-items:center;font-size:9px;font-weight:700;color:${r>=80?'#fff':'var(--muted)'}">${+d.slice(8)}</div>`);
    }
    document.getElementById('st-hist-r').innerHTML=`<span class="pill">全勤 ${done} 天</span>`;
    document.getElementById('st-heat').innerHTML=`<div style="display:grid;grid-template-columns:repeat(15,1fr);gap:5px">${cells.join('')}</div>`;
  },
  showHistory(){
    const ks=Object.keys(DB.studyLog).sort().reverse().slice(0,60);
    UI.modal(`<h3>📊 历史学习记录</h3>
    ${ks.length?`<div style="max-height:52vh;overflow-y:auto">${ks.map(k=>{
      const l=DB.studyLog[k],r=this.rate(k);
      return `<div class="row"><div class="tx">${fmtCn(k)}<div class="mt">词汇 ${l.wd}/${l.wt} · 语句 ${l.sd}/${l.st}</div></div>
      <div style="width:90px"><div class="bar"><i style="width:${r}%"></i></div></div>
      <b style="font-size:13px;color:var(--deep);width:38px;text-align:right">${r}%</b></div>`;}).join('')}</div>`
    :UI.empty('还没有学习记录','📭')}
    <div class="foot"><button class="btn pri" onclick="UI.close()">知道了</button></div>`);
  }
};

/* ===================== 减脂 ===================== */
const Fat={
  t:'sport',cm:new Date().getMonth(),cy:new Date().getFullYear(),sel:today(),dsel:today(),
  tab(t){this.t=t;document.querySelectorAll('[data-ft]').forEach(e=>e.classList.toggle('on',e.dataset.ft===t));
    document.getElementById('fa-sport').style.display=t==='sport'?'':'none';
    document.getElementById('fa-diet').style.display=t==='diet'?'':'none';this.render();},
  icon(n){const f=DB.sportItems.find(x=>x[0]===n);return f?f[1]:'🏃';},
  /* --- 运动项目管理 --- */
  addItem(){
    const el=document.getElementById('fa-new-item'),v=el.value.trim();
    if(!v)return UI.toast('请输入项目名');
    if(DB.sportItems.some(x=>x[0]===v))return UI.toast('该项目已存在');
    DB.sportItems.push([v,'🤾']);save();el.value='';this.renderItems();UI.toast('已添加');
  },
  editItem(i){
    const it=DB.sportItems[i];
    UI.modal(`<h3>✏️ 编辑运动项目</h3><div class="frm">
      <div class="frm-row"><div><label class="fl">名称</label><input id="fi-n" value="${UI.esc(it[0])}"></div>
      <div><label class="fl">图标</label><input id="fi-i" value="${it[1]}" maxlength="4"></div></div>
      <div class="hint">图标可填任意 emoji，如 🏃 🧘 🏋️ 🚴 🏊</div></div>
      <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
      <button class="btn pri" onclick="Fat.saveItem(${i})">保存</button></div>`);
  },
  saveItem(i){
    const n=document.getElementById('fi-n').value.trim();if(!n)return UI.toast('名称不能为空');
    const old=DB.sportItems[i][0];
    DB.sportItems[i]=[n,document.getElementById('fi-i').value.trim()||'🤾'];
    DB.sports.forEach(s=>{if(s.item===old)s.item=n;});
    save();UI.close();this.render();UI.toast('已保存');
  },
  delItem(i){
    UI.confirm(`删除运动项目「${UI.esc(DB.sportItems[i][0])}」？已有的运动记录会保留。`,()=>{
      DB.sportItems.splice(i,1);save();this.renderItems();UI.toast('已删除');});
  },
  renderItems(){
    document.getElementById('fa-items').innerHTML=DB.sportItems.map((it,i)=>
      `<div class="row" style="padding:7px 11px"><span style="font-size:16px">${it[1]}</span>
      <div class="tx" style="font-size:13px">${UI.esc(it[0])}</div>
      <div class="ops"><button class="icobtn" onclick="Fat.editItem(${i})">✏️</button>
      <button class="icobtn" onclick="Fat.delItem(${i})">🗑️</button></div></div>`).join('')||UI.empty('还没有运动项目','🏃');
  },
  /* --- 运动记录 --- */
  openSport(r){
    r=r||{};
    UI.modal(`<h3>${r.id?'✏️ 编辑运动记录':'🏃 新增运动记录'}</h3><div class="frm">
      <div class="frm-row">
        <div><label class="fl">运动日期</label><input type="date" id="fs-d" value="${r.date||this.sel||today()}"></div>
        <div><label class="fl">运动时长（分钟）</label><input type="number" id="fs-m" min="1" value="${r.mins||30}"></div>
      </div>
      <div><label class="fl">运动项目</label>
        <div style="margin-top:4px" id="fs-tags">${DB.sportItems.map(it=>
          `<span class="tag ${r.item===it[0]?'on':''}" onclick="Fat.pickItem(this,'${UI.esc(it[0])}')">${it[1]} ${UI.esc(it[0])}</span>`).join('')}</div>
        <input id="fs-i" value="${UI.esc(r.item||'')}" placeholder="或直接输入自定义项目" style="margin-top:6px"></div>
      <div><label class="fl">备注</label><textarea id="fs-n" placeholder="强度、感受、消耗等">${UI.esc(r.note||'')}</textarea></div>
    </div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" onclick="Fat.saveSport('${r.id||''}')">保存</button></div>`);
  },
  pickItem(el,n){document.querySelectorAll('#fs-tags .tag').forEach(t=>t.classList.remove('on'));el.classList.add('on');document.getElementById('fs-i').value=n;},
  saveSport(id){
    const item=document.getElementById('fs-i').value.trim();
    if(!item)return UI.toast('请选择或输入运动项目');
    const o={date:document.getElementById('fs-d').value||today(),item,mins:+document.getElementById('fs-m').value||0,
      note:document.getElementById('fs-n').value.trim()};
    if(id)Object.assign(DB.sports.find(x=>x.id===id),o);else DB.sports.push(Object.assign({id:uid()},o));
    save();UI.close();UI.toast('记录成功，继续加油 💪');this.render();
  },
  editSport(id){this.openSport(DB.sports.find(x=>x.id===id));},
  delSport(id){UI.confirm('删除这条运动记录？',()=>{DB.sports=DB.sports.filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  /* --- 饮食 --- */
  openDiet(r){
    r=r||{};
    UI.modal(`<h3>${r.id?'✏️ 编辑饮食记录':'🍱 新增饮食记录'}</h3><div class="frm">
      <div class="frm-row">
        <div><label class="fl">日期</label><input type="date" id="fd-d" value="${r.date||Fat.dsel||today()}"></div>
        <div><label class="fl">餐次</label><select id="fd-m">${MEALS.map(m=>`<option value="${m[0]}" ${r.meal===m[0]?'selected':''}>${m[1]} ${m[0]}</option>`).join('')}</select></div>
      </div>
      <div><label class="fl">食物内容 *</label><textarea id="fd-f" placeholder="例如：燕麦粥一碗、水煮蛋1个、西兰花">${UI.esc(r.food||'')}</textarea></div>
      <div><label class="fl">备注（感受 / 忌口 / 饮水）</label><textarea id="fd-n" placeholder="例如：吃得有点撑；今天忌辛辣；饮水 1500ml">${UI.esc(r.note||'')}</textarea></div>
    </div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" onclick="Fat.saveDiet('${r.id||''}')">保存</button></div>`);
  },
  saveDiet(id){
    const food=document.getElementById('fd-f').value.trim();
    if(!food)return UI.toast('请填写食物内容');
    const o={date:document.getElementById('fd-d').value||today(),meal:document.getElementById('fd-m').value,food,
      note:document.getElementById('fd-n').value.trim()};
    if(id)Object.assign(DB.diets.find(x=>x.id===id),o);else DB.diets.push(Object.assign({id:uid()},o));
    save();UI.close();UI.toast('已记录 ✓');this.render();
  },
  editDiet(id){this.openDiet(DB.diets.find(x=>x.id===id));},
  delDiet(id){UI.confirm('删除这条饮食记录？',()=>{DB.diets=DB.diets.filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  tea(ds,v){DB.tea[ds]=Math.max(0,(DB.tea[ds]||0)+v);save();this.render();
    if(DB.tea[ds]>=(+DB.pref.tea||800))UI.toast('今日饮茶目标达成 🍵');},
  /* --- 渲染 --- */
  mv(n){const d=new Date(this.cy,this.cm+n,1);this.cy=d.getFullYear();this.cm=d.getMonth();this.renderCal();this.renderDietCal&&this.renderDietCal();},
  pick(s){this.sel=s;this.renderCal();this.renderDay();},
  render(){
    const ds=today();
    const sp=DB.sports.filter(s=>s.date===ds),mins=sp.reduce((a,b)=>a+b.mins,0);
    const tea=DB.tea[ds]||0,goal=+DB.pref.tea||800;
    document.getElementById('fa-sub').textContent=fmtFull(ds)+(fuLabel(ds)?' · '+fuLabel(ds).t+'第'+fuLabel(ds).n+'天 🔥':'');
    if(this.t==='sport'){
      const ym=ds.slice(0,7);
      const mo=DB.sports.filter(s=>s.date.slice(0,7)===ym);
      const days=new Set(mo.map(s=>s.date)).size;
      let streak=0;for(let i=0;;i++){const d=addDays(ds,-i);if(DB.sports.some(s=>s.date===d))streak++;else if(i>0)break;else break;}
      document.getElementById('fa-sp-stats').innerHTML=
        UI.stat('今日运动',mins+'<small>分钟</small>',sp.length+' 项运动','⏱️')+
        UI.stat('本月运动天数',days+'<small>天</small>','共 '+mo.length+' 次','📅')+
        UI.stat('本月总时长',mo.reduce((a,b)=>a+b.mins,0)+'<small>分钟</small>','平均 '+(mo.length?Math.round(mo.reduce((a,b)=>a+b.mins,0)/mo.length):0)+' 分/次','🔥')+
        UI.stat('连续运动',streak+'<small>天</small>',streak>=3?'状态很好！':'今天动起来吧','💪');
      this.renderCal();this.renderDay();this.renderItems();
    }else{
      const dt=DB.diets.filter(d=>d.date===ds);
      const md=DB.diets.filter(d=>d.date.slice(0,7)===ds.slice(0,7));
      const teaDays=Object.keys(DB.tea).filter(k=>k.slice(0,7)===ds.slice(0,7)&&DB.tea[k]>=goal).length;
      document.getElementById('fa-dt-stats').innerHTML=
        UI.stat('今日餐次',dt.length+'<small>条</small>',MEALS.filter(m=>dt.some(d=>d.meal===m[0])).map(m=>m[1]).join(' ')||'还没有记录','🍽️')+
        UI.stat('今日饮茶',tea+'<small>ml</small>','目标 '+goal+'ml','🍵')+
        UI.stat('本月饮食记录',md.length+'<small>条</small>',new Set(md.map(d=>d.date)).size+' 天有记录','📖')+
        UI.stat('本月达标饮茶',teaDays+'<small>天</small>','800ml 芡实赤豆薏米茶','✅');
      const pct=Math.min(100,Math.round(tea/goal*100));
      document.getElementById('fa-tea-r').innerHTML=`<span class="pill ${tea>=goal?'':'warn'}">${tea} / ${goal} ml</span>`;
      document.getElementById('fa-tea').innerHTML=`<div class="bar amber" style="margin-bottom:11px"><i style="width:${pct}%"></i></div>
        <div class="flexline">
          <button class="btn sm pri" onclick="Fat.tea('${ds}',200)">+200ml</button>
          <button class="btn sm pri" onclick="Fat.tea('${ds}',400)">+400ml</button>
          <button class="btn sm gh" onclick="Fat.tea('${ds}',-200)">-200ml</button>
          <span style="font-size:12px;color:var(--muted)">${tea>=goal?'✅ 今日已达标，赞！':'还差 '+(goal-tea)+'ml'}</span>
        </div>`;
      this.renderDietCal();this.renderDietDay();
    }
  },
  renderCal(){
    document.getElementById('fa-cal-t').textContent=this.cy+'年'+(this.cm+1)+'月';
    document.getElementById('fa-cal').innerHTML=monthGrid(this.cy,this.cm).map(g=>{
      const l=DB.sports.filter(s=>s.date===g.s);
      const fu=fuLabel(g.s);
      return `<button class="d ${g.out?'out':''} ${g.s===today()?'today':''} ${g.s===this.sel?'sel':''}" ${g.out?'':`onclick="Fat.pick('${g.s}')"`}>
        ${fu?`<span class="fu">${fu.t[0]}伏</span>`:''}
        <span class="n">${g.d.getDate()}</span><span class="l">${lunarShort(g.s)}</span>
        ${l.length?'<div class="dots"><i style="background:#4fb08d"></i></div>':''}</button>`;
    }).join('');
  },
  renderDay(){
    const l=DB.sports.filter(s=>s.date===this.sel);
    const fu=fuLabel(this.sel);
    document.getElementById('fa-day-t').textContent=fmtCn(this.sel);
    document.getElementById('fa-day-r').innerHTML=(fu?`<span class="pill warn">🔥 ${fu.t}第${fu.n}天</span>`:'')+
      (l.length?`<span class="pill">${l.reduce((a,b)=>a+b.mins,0)} 分钟</span>`:'');
    document.getElementById('fa-day').innerHTML=l.length?l.map(s=>
      `<div class="row"><span style="font-size:17px">${this.icon(s.item)}</span>
      <div class="tx">${UI.esc(s.item)} · ${s.mins} 分钟${s.note?`<div class="mt">📎 ${UI.esc(s.note)}</div>`:''}</div>
      <div class="ops"><button class="icobtn" onclick="Fat.editSport('${s.id}')">✏️</button>
      <button class="icobtn" onclick="Fat.delSport('${s.id}')">🗑️</button></div></div>`).join('')
      :UI.empty(`这天还没有运动记录<br><button class="btn sm pri" style="margin-top:10px" onclick="Fat.openSport({date:'${this.sel}'})">＋ 添加</button>`,'🏃');
  },
  dpick(s){this.dsel=s;this.renderDietCal();this.renderDietDay();},
  renderDietCal(){
    document.getElementById('fa-dtcal-t').textContent=this.cy+'年'+(this.cm+1)+'月';
    document.getElementById('fa-dtcal').innerHTML=monthGrid(this.cy,this.cm).map(g=>{
      const has=DB.diets.some(d=>d.date===g.s);
      return `<button class="d ${g.out?'out':''} ${g.s===today()?'today':''} ${g.s===this.dsel?'sel':''}" ${g.out?'':`onclick="Fat.dpick('${g.s}')"`}>
        <span class="n">${g.d.getDate()}</span><span class="l">${lunarShort(g.s)}</span>
        ${has?'<div class="dots"><i style="background:#e6915a"></i></div>':''}</button>`;
    }).join('');
  },
  renderDietDay(){
    const d=this.dsel||today();
    const l=DB.diets.filter(x=>x.date===d);
    const order=MEALS.map(m=>m[0]);
    l.sort((a,b)=>order.indexOf(a.meal)-order.indexOf(b.meal));
    const tea=DB.tea[d]||0;
    document.getElementById('fa-dtday-t').textContent=fmtCn(d)+(fuLabel(d)?' · '+fuLabel(d).t+'第'+fuLabel(d).n+'天 🔥':'');
    document.getElementById('fa-dtday-r').innerHTML=(tea?`<span class="pill">🍵 ${tea}ml</span>`:'')+(l.length?`<span class="pill">${l.length} 条</span>`:'');
    document.getElementById('fa-dtday').innerHTML=l.length?l.map(x=>{
      const ic=(MEALS.find(m=>m[0]===x.meal)||['','🍽️'])[1];
      return `<div class="row" style="align-items:flex-start"><span style="font-size:17px;margin-top:2px">${ic}</span>
      <div class="tx"><b>${x.meal}</b> · ${UI.esc(x.food)}${x.note?`<div class="mt">📎 ${UI.esc(x.note)}</div>`:''}</div>
      <div class="ops"><button class="icobtn" onclick="Fat.editDiet('${x.id}')">✏️</button>
      <button class="icobtn" onclick="Fat.delDiet('${x.id}')">🗑️</button></div></div>`;}).join('')
      :UI.empty(`${fmtCn(d)} 没有饮食记录<br><button class="btn sm pri" style="margin-top:10px" onclick="Fat.openDiet({date:'${d}'})">＋ 添加</button>`,'🍱');
  },
};

/* ===================== 星仔 ===================== */
const BABY_ICON={'奶':'🍼','粥':'🥣','AD':'💊','D3':'💊','辅食':'🥕','水果':'🍎','水':'💧','药':'💊','睡':'😴'};
const Baby={
  cm:new Date().getMonth(),cy:new Date().getFullYear(),sel:today(),
  day(ds){
    if(!DB.baby[ds]){DB.baby[ds]=DB.babyItems.map(n=>({id:uid(),name:n,done:false,note:''}));save();}
    return DB.baby[ds];
  },
  icon(n){for(const k in BABY_ICON)if(n.includes(k))return BABY_ICON[k];return '⭐️';},
  toggle(ds,id){const r=this.day(ds).find(x=>x.id===id);r.done=!r.done;if(r.done)r.at=new Date().toTimeString().slice(0,5);save();this.render();},
  note(ds,id){
    const r=this.day(ds).find(x=>x.id===id);
    UI.modal(`<h3>📝 ${UI.esc(r.name)} · 备注</h3><div class="frm">
      <div class="frm-row"><div><label class="fl">时间</label><input type="time" id="bb-at" value="${r.at||''}"></div>
      <div><label class="fl">用量 / 份量</label><input id="bb-amt" value="${UI.esc(r.amt||'')}" placeholder="如 180ml / 一小碗"></div></div>
      <div><label class="fl">备注</label><textarea id="bb-n" placeholder="进食情况、状态、反应等">${UI.esc(r.note||'')}</textarea></div></div>
      <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
      <button class="btn pri" onclick="Baby.saveNote('${ds}','${id}')">保存</button></div>`);
  },
  saveNote(ds,id){
    const r=this.day(ds).find(x=>x.id===id);
    r.at=document.getElementById('bb-at').value;r.amt=document.getElementById('bb-amt').value.trim();
    r.note=document.getElementById('bb-n').value.trim();save();UI.close();this.render();UI.toast('已保存');
  },
  openAdd(){
    UI.modal(`<h3>➕ 新增喂养记录</h3><div class="frm">
      <div class="frm-row"><div><label class="fl">日期</label><input type="date" id="ba-d" value="${this.sel||today()}"></div>
      <div><label class="fl">时间</label><input type="time" id="ba-t" value="${new Date().toTimeString().slice(0,5)}"></div></div>
      <div><label class="fl">记录名称 *</label><input id="ba-n" placeholder="如：夜奶 / 加餐水果 / 补钙"></div>
      <div><label class="fl">用量 / 份量</label><input id="ba-a" placeholder="如 150ml"></div>
      <div><label class="fl">备注</label><textarea id="ba-note" placeholder="可选"></textarea></div></div>
      <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
      <button class="btn pri" onclick="Baby.add()">添加</button></div>`);
  },
  add(){
    const n=document.getElementById('ba-n').value.trim();
    if(!n)return UI.toast('请填写记录名称');
    const ds=document.getElementById('ba-d').value||today();
    this.day(ds).push({id:uid(),name:n,done:true,at:document.getElementById('ba-t').value,
      amt:document.getElementById('ba-a').value.trim(),note:document.getElementById('ba-note').value.trim(),extra:true});
    save();UI.close();this.sel=ds;this.render();UI.toast('已添加 ✓');
  },
  del(ds,id){UI.confirm('删除这条记录？',()=>{DB.baby[ds]=this.day(ds).filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  mv(n){const d=new Date(this.cy,this.cm+n,1);this.cy=d.getFullYear();this.cm=d.getMonth();this.renderCal();},
  pick(s){this.sel=s;this.renderCal();this.renderDetail();},
  rate(ds){const l=DB.baby[ds];if(!l||!l.length)return -1;return Math.round(l.filter(x=>x.done).length/l.length*100);},
  render(){
    const ds=today(),l=this.day(ds),dn=l.filter(x=>x.done).length;
    const nm=DB.profile.baby||'星仔';
    document.getElementById('bb-sub').textContent=fmtFull(ds)+' · '+nm+'今日完成 '+dn+'/'+l.length;
    let streak=0;for(let i=0;;i++){const d=addDays(ds,-i);if(this.rate(d)===100)streak++;else if(i>0)break;else break;}
    const ym=ds.slice(0,7);
    const mk=Object.keys(DB.baby).filter(k=>k.slice(0,7)===ym);
    const full=mk.filter(k=>this.rate(k)===100).length;
    document.getElementById('bb-stats').innerHTML=
      UI.stat('今日完成',dn+'<small>/'+l.length+'</small>',l.length-dn?'还剩 '+(l.length-dn)+' 项':'全部完成啦 🎉','🍼')+
      UI.stat('今日完成率',(l.length?Math.round(dn/l.length*100):0)+'<small>%</small>','按默认清单统计','📊')+
      UI.stat('本月全勤',full+'<small>天</small>','共记录 '+mk.length+' 天','🌟')+
      UI.stat('连续全勤',streak+'<small>天</small>',streak>=3?'照顾得真好！':'继续加油','🔥');
    document.getElementById('bb-day-t').textContent=nm+' · 今日喂养清单';
    document.getElementById('bb-day-r').innerHTML=`<span class="pill">${dn}/${l.length}</span>`;
    document.getElementById('bb-bar').style.width=(l.length?dn/l.length*100:0)+'%';
    document.getElementById('bb-list').innerHTML=l.map(r=>
      `<div class="row ${r.done?'done':''}">
        <input type="checkbox" class="chk" ${r.done?'checked':''} onchange="Baby.toggle('${ds}','${r.id}')">
        <span style="font-size:16px">${this.icon(r.name)}</span>
        <div class="tx">${UI.esc(r.name)}${r.extra?' <span class="pill gray">手动</span>':''}
          ${(r.at||r.amt||r.note)?`<div class="mt">${r.at?'🕐 '+r.at:''}${r.amt?' · '+UI.esc(r.amt):''}${r.note?' · 📎 '+UI.esc(r.note):''}</div>`:''}</div>
        <div class="ops"><button class="icobtn" onclick="Baby.note('${ds}','${r.id}')">📝</button>
        <button class="icobtn" onclick="Baby.del('${ds}','${r.id}')">🗑️</button></div></div>`).join('');
    this.renderCal();this.renderDetail();
  },
  renderCal(){
    document.getElementById('bb-cal-t').textContent=this.cy+'年'+(this.cm+1)+'月';
    document.getElementById('bb-cal').innerHTML=monthGrid(this.cy,this.cm).map(g=>{
      const r=this.rate(g.s);
      let dots='';
      if(r>=0&&DB.baby[g.s]&&DB.baby[g.s].some(x=>x.done))dots=`<div class="dots"><i style="background:${r===100?'#4fb08d':'#f2c48b'}"></i></div>`;
      return `<button class="d ${g.out?'out':''} ${g.s===today()?'today':''} ${g.s===this.sel?'sel':''}" ${g.out?'':`onclick="Baby.pick('${g.s}')"`}>
        <span class="n">${g.d.getDate()}</span><span class="l">${lunarShort(g.s)}</span>${dots}</button>`;
    }).join('');
  },
  renderDetail(){
    const l=DB.baby[this.sel];
    document.getElementById('bb-detail-r').innerHTML=`<span class="pill">${fmtCn(this.sel)}</span>`;
    if(!l||!l.length){
      document.getElementById('bb-detail').innerHTML=UI.empty(`这天还没有记录<br><button class="btn sm pri" style="margin-top:10px" onclick="Baby.pickAdd('${this.sel}')">＋ 新增记录</button>`,'🍼');return;
    }
    const dn=l.filter(x=>x.done).length;
    document.getElementById('bb-detail').innerHTML=
      `<div class="bar" style="margin-bottom:11px"><i style="width:${Math.round(dn/l.length*100)}%"></i></div>`+
      l.map(r=>`<div class="row ${r.done?'done':''}" style="padding:8px 11px">
        <input type="checkbox" class="chk" ${r.done?'checked':''} onchange="Baby.toggle('${this.sel}','${r.id}')">
        <span style="font-size:15px">${this.icon(r.name)}</span>
        <div class="tx" style="font-size:13px">${UI.esc(r.name)}
        ${(r.at||r.amt||r.note)?`<div class="mt">${r.at?'🕐 '+r.at:''}${r.amt?' · '+UI.esc(r.amt):''}${r.note?' · '+UI.esc(r.note):''}</div>`:''}</div>
        <div class="ops"><button class="icobtn" onclick="Baby.note('${this.sel}','${r.id}')">📝</button></div></div>`).join('');
  },
  pickAdd(d){this.sel=d;this.openAdd();}
};

/* ===================== 记账 ===================== */
const Money={
  fmt(n){return (n<0?'-':'')+'¥'+Math.abs(n).toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2});},
  sum(f){let i=0,o=0;DB.txs.filter(f).forEach(t=>{t.type==='in'?i+=+t.amt:o+=+t.amt;});return{i,o,b:i-o};},
  open(t){
    t=t||{};const ty=t.type||'out';
    UI.modal(`<h3>${t.id?'✏️ 编辑账目':'💰 记一笔'}</h3><div class="frm">
      <div class="tabs" style="margin:0">
        <button class="tab ${ty==='out'?'on':''}" id="mt-out" onclick="Money.setType('out')">💸 支出</button>
        <button class="tab ${ty==='in'?'on':''}" id="mt-in" onclick="Money.setType('in')">💵 收入</button>
      </div>
      <div class="frm-row">
        <div><label class="fl">金额 *</label><input type="number" step="0.01" id="mn-a" value="${t.amt||''}" placeholder="0.00"></div>
        <div><label class="fl">日期</label><input type="date" id="mn-d" value="${t.date||document.getElementById('mn-date').value||today()}"></div>
      </div>
      <div><label class="fl">分类</label><div id="mn-cats" style="margin-top:4px"></div>
        <input type="hidden" id="mn-c" value="${UI.esc(t.cat||'')}"></div>
      <div><label class="fl">备注</label><input id="mn-n" value="${UI.esc(t.note||'')}" placeholder="可选，如：超市采购"></div>
    </div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" onclick="Money.save('${t.id||''}')">保存</button></div>`);
    this._ty=ty;this.cats();
  },
  setType(t){this._ty=t;document.getElementById('mt-out').classList.toggle('on',t==='out');
    document.getElementById('mt-in').classList.toggle('on',t==='in');document.getElementById('mn-c').value='';this.cats();},
  cats(){
    const list=this._ty==='in'?CATS_IN:CATS_OUT,cur=document.getElementById('mn-c').value;
    document.getElementById('mn-cats').innerHTML=list.map(c=>
      `<span class="tag ${cur===c[0]?'on':''}" onclick="Money.pickCat(this,'${c[0]}')">${c[1]} ${c[0]}</span>`).join('');
  },
  pickCat(el,c){document.querySelectorAll('#mn-cats .tag').forEach(t=>t.classList.remove('on'));el.classList.add('on');document.getElementById('mn-c').value=c;},
  save(id){
    const amt=+document.getElementById('mn-a').value;
    if(!amt||amt<=0)return UI.toast('请输入有效金额');
    const o={type:this._ty,amt:+amt.toFixed(2),date:document.getElementById('mn-d').value||today(),
      cat:document.getElementById('mn-c').value||(this._ty==='in'?'其他收入':'其他支出'),
      note:document.getElementById('mn-n').value.trim()};
    if(id)Object.assign(DB.txs.find(x=>x.id===id),o);else DB.txs.push(Object.assign({id:uid()},o));
    save();UI.close();UI.toast('记账成功 ✓');this.render();
  },
  edit(id){this.open(DB.txs.find(x=>x.id===id));},
  del(id){UI.confirm('删除这笔账目？',()=>{DB.txs=DB.txs.filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  row(t){
    return `<div class="tx-row"><span class="cat">${CAT_ICON[t.cat]||'📦'}</span>
      <div style="flex:1;min-width:0"><div style="font-size:13.5px;font-weight:700">${UI.esc(t.cat)}${t.note?' · <span style="font-weight:600;color:var(--muted)">'+UI.esc(t.note)+'</span>':''}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px">${fmtCn(t.date)}</div></div>
      <span class="amt ${t.type==='in'?'money-in':'money-out'}">${t.type==='in'?'+':'-'}${this.fmt(t.amt).replace('¥','¥')}</span>
      <div class="ops" style="display:flex;gap:4px"><button class="icobtn" onclick="Money.edit('${t.id}')">✏️</button>
      <button class="icobtn" onclick="Money.del('${t.id}')">🗑️</button></div></div>`;
  },
  render(){
    const el=document.getElementById('mn-date');if(!el.value)el.value=today();
    const d=el.value,ym=d.slice(0,7),y=d.slice(0,4);
    const D=this.sum(t=>t.date===d),M=this.sum(t=>t.date.slice(0,7)===ym),Y=this.sum(t=>t.date.slice(0,4)===y);
    document.getElementById('mn-sub').textContent=`共 ${DB.txs.length} 笔记录 · 本月结余 ${this.fmt(M.b)}`;
    const box=(ti,s,ic)=>`<div class="card tight" style="margin:0;background:rgba(255,255,255,.5)">
      <div style="font-size:12.5px;font-weight:800;color:var(--deep);margin-bottom:10px">${ic} ${ti}</div>
      <div class="mini"><span class="ic">💵</span>收入<span class="v money-in">${this.fmt(s.i)}</span></div>
      <div class="mini"><span class="ic">💸</span>支出<span class="v money-out">${this.fmt(s.o)}</span></div>
      <div class="mini" style="background:rgba(143,212,180,.24)"><span class="ic">🧮</span>结余<span class="v" style="color:${s.b>=0?'#3f9b76':'#d1776a'}">${this.fmt(s.b)}</span></div></div>`;
    document.getElementById('mn-sum').innerHTML=box('日累计 · '+fmtCn(d),D,'📆')+box('月累计 · '+ym.replace('-','年')+'月',M,'🗓️')+box('年累计 · '+y+'年',Y,'📊');
    const dl=DB.txs.filter(t=>t.date===d).sort((a,b)=>b.id.localeCompare(a.id));
    document.getElementById('mn-day-t').textContent=fmtCn(d)+' 明细';
    document.getElementById('mn-day-r').innerHTML=`<span class="pill">${dl.length} 笔</span>`;
    document.getElementById('mn-day').innerHTML=dl.length?dl.map(t=>this.row(t)).join('')
      :UI.empty(`这天还没有记账<br><button class="btn sm pri" style="margin-top:10px" onclick="Money.open({date:'${d}'})">＋ 记一笔</button>`,'🧾');
    // 本月柱状
    const days=new Date(+y,+ym.slice(5,7),0).getDate();
    let mx=1;const arr=[];
    for(let i=1;i<=days;i++){const ds=ym+'-'+pad(i);const s=this.sum(t=>t.date===ds);mx=Math.max(mx,s.i,s.o);arr.push([i,s]);}
    document.getElementById('mn-chart-r').innerHTML=`<span class="pill">收 ${this.fmt(M.i)}</span><span class="pill warn">支 ${this.fmt(M.o)}</span>`;
    document.getElementById('mn-chart').innerHTML=arr.map(([i,s])=>
      `<div class="b" title="${i}日 收${this.fmt(s.i)} 支${this.fmt(s.o)}">
        <div class="st" style="height:${s.i/mx*46}%"></div><div class="st o" style="height:${s.o/mx*46}%"></div>
        <div class="lb">${i%5===0||i===1?i:''}</div></div>`).join('');
    // 分类
    const cm={};DB.txs.filter(t=>t.date.slice(0,7)===ym&&t.type==='out').forEach(t=>cm[t.cat]=(cm[t.cat]||0)+t.amt);
    const cs=Object.entries(cm).sort((a,b)=>b[1]-a[1]).slice(0,6);
    const tot=cs.reduce((a,b)=>a+b[1],0)||1;
    document.getElementById('mn-cat').innerHTML=cs.length?cs.map(([c,v])=>
      `<div style="margin-bottom:9px"><div style="display:flex;justify-content:space-between;font-size:12.5px;font-weight:700;margin-bottom:4px">
        <span>${CAT_ICON[c]||'📦'} ${UI.esc(c)}</span><span class="money-out">${this.fmt(v)} · ${Math.round(v/tot*100)}%</span></div>
        <div class="bar amber"><i style="width:${v/cs[0][1]*100}%"></i></div></div>`).join('')
      :UI.empty('本月还没有支出记录','💸');
    this.renderAll();
  },
  renderAll(){
    const kw=(document.getElementById('mn-kw').value||'').toLowerCase();
    let l=DB.txs.slice().sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id));
    if(kw)l=l.filter(t=>(t.cat+t.note+t.date+t.amt).toLowerCase().includes(kw));
    const g={};l.slice(0,200).forEach(t=>{(g[t.date]=g[t.date]||[]).push(t);});
    const ks=Object.keys(g).sort().reverse();
    document.getElementById('mn-all').innerHTML=ks.length?ks.map(k=>{
      const s=this.sum(t=>t.date===k);
      return `<div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:800;color:var(--ink2);margin:10px 0 6px">
        <span>${fmtCn(k)}</span><span>收 ${this.fmt(s.i)} · 支 ${this.fmt(s.o)} · 结余 ${this.fmt(s.b)}</span></div>`+
        g[k].map(t=>this.row(t)).join('');}).join('')
      :UI.empty('暂无流水记录','📚');
  }
};

/* ===================== 新闻 ===================== */
const NW_TABS=[['all','全部','🌐'],['domestic','国内','🇨🇳'],['world','国外','🌍'],['econ','经贸','📈']];
const News={
  t:'all',
  slot(){ // 每日 10:00 更新；10 点前算前一天的
    const n=new Date();const d=new Date(n);if(n.getHours()<10)d.setDate(d.getDate()-1);return ymd(d);
  },
  build(ds){
    const r=seedRand(dateSeed(ds));
    const out={};
    ['domestic','world','econ'].forEach((k,ki)=>{
      const pool=NEWS_POOL[k].slice();
      const idx=pickN(pool.length,Math.min(10,pool.length),dateSeed(ds)+ki*131);
      out[k]=idx.map((i,n)=>({t:pool[i][0],d:pool[i][1],tag:pool[i][2],hot:Math.floor(r()*90+10)+'万',src:'离线精选'}));
    });
    const mix=[];for(let i=0;i<10;i++){const ks=['domestic','world','econ'];const k=ks[i%3];const it=out[k][Math.floor(i/3)];if(it)mix.push(Object.assign({cate:k},it));}
    out.all=mix.slice(0,10);
    return out;
  },
  refresh(manual){
    const s=this.slot();
    DB.news={date:s,data:this.build(s)};save();
    if(manual){UI.toast('已刷新今日精选 📰');if(DB.pref.online)this.online();}
    if(UI.cur==='news')this.render();
  },
  autoCheck(){if(DB.news.date!==this.slot())this.refresh();},
  async online(){
    const feeds={domestic:'https://rss.app/feeds/tGvBHZKrEHPvpUnP.xml'};
    try{
      const url='https://api.allorigins.win/raw?url='+encodeURIComponent('https://news.google.com/rss?hl=zh-CN&gl=CN&ceid=CN:zh-Hans');
      const r=await fetch(url,{cache:'no-store'});
      const x=new DOMParser().parseFromString(await r.text(),'text/xml');
      const items=[...x.querySelectorAll('item')].slice(0,10).map(n=>({
        t:(n.querySelector('title')||{}).textContent||'',
        d:'来自实时订阅源',tag:'实时',src:'在线',link:(n.querySelector('link')||{}).textContent||''
      })).filter(i=>i.t);
      if(items.length){DB.news.data.all=items;save();UI.toast('已获取在线热点 ✓');if(UI.cur==='news')this.render();}
    }catch(e){UI.toast('在线抓取失败，已显示离线精选');}
  },
  tab(t){this.t=t;this.render();},
  render(){
    this.autoCheck();
    if(!DB.news.data)this.refresh();
    const d=DB.news.data,s=DB.news.date;
    document.getElementById('nw-sub').textContent=`更新日期 ${fmtFull(s)} · 每日 10:00 自动更新 · 各分类 10 条精选`;
    document.getElementById('nw-tabs').innerHTML=NW_TABS.map(t=>
      `<button class="tab ${this.t===t[0]?'on':''}" onclick="News.tab('${t[0]}')">${t[2]} ${t[1]}</button>`).join('');
    const list=d[this.t]||[];
    const CN={domestic:'国内',world:'国外',econ:'经贸'};
    document.getElementById('nw-list').innerHTML=list.length?list.map((n,i)=>{
      const tag=n.cate?CN[n.cate]:(this.t==='all'?'':CN[this.t]);
      const inner=`<span class="no ${i<3?'hot':''}">${i+1}</span>
        <div class="b"><div class="ti">${UI.esc(n.t)}</div>${n.d?`<div class="ds">${UI.esc(n.d)}</div>`:''}
        <div class="mt">${tag?`<span class="pill blue">${tag}</span>`:''}${n.tag?`<span class="pill">${UI.esc(n.tag)}</span>`:''}
        ${n.hot?`<span>🔥 ${n.hot}热度</span>`:''}<span>· ${n.src||'精选'}</span></div></div>`;
      return n.link?`<a class="news" href="${n.link}" target="_blank" rel="noopener">${inner}</a>`:`<div class="news">${inner}</div>`;
    }).join(''):UI.empty('暂无内容','📰');
  }
};

/* ===================== 纪念日 ===================== */
const ANNI_ICONS=['🎂','💝','💍','🎉','👶','🌹','🏡','✈️','🎓','🐾','⭐️','🍰'];
const Anni={
  t:'all',cm:new Date().getMonth(),cy:new Date().getFullYear(),
  next(a){ // 返回 {date, age, days}
    const t0=today(),ty=new Date().getFullYear();
    if(a.cal==='lunar'){
      for(let y=ty;y<=ty+2;y++){
        const s=l2s(y,a.m,a.d,a.leap)||l2s(y,a.m,a.d,false);
        if(!s||!s.cYear)continue;
        const ds=s.cYear+'-'+pad(s.cMonth)+'-'+pad(s.cDay);
        if(ds>=t0)return{date:ds,days:diffDays(t0,ds),age:a.y?y-a.y:null,lunar:`农历${s.monthCn}${s.dayCn}`};
      }
      return null;
    }
    for(let y=ty;y<=ty+2;y++){
      const ds=y+'-'+pad(a.m)+'-'+pad(a.d);
      if(!isNaN(parseD(ds))&&ds>=t0){
        const o=sl2l(y,a.m,a.d);
        return{date:ds,days:diffDays(t0,ds),age:a.y?y-a.y:null,lunar:o?`农历${o.monthCn}${o.dayCn}`:''};
      }
    }
    return null;
  },
  open(a){
    a=a||{};const cal=a.cal||'solar';
    UI.modal(`<h3>${a.id?'✏️ 编辑':'📅 新增纪念日 / 生日'}</h3><div class="frm">
      <div class="frm-row">
        <div><label class="fl">名称 *</label><input id="an-n" value="${UI.esc(a.name||'')}" placeholder="如：妈妈生日 / 结婚纪念日"></div>
        <div><label class="fl">类型</label><select id="an-ty">
          <option value="birthday" ${a.type==='birthday'?'selected':''}>🎂 生日</option>
          <option value="anni" ${a.type==='anni'?'selected':''}>💝 纪念日</option></select></div>
      </div>
      <div><label class="fl">历法</label>
        <div class="tabs" style="margin:4px 0 0">
          <button class="tab ${cal==='solar'?'on':''}" id="an-cs" onclick="Anni.setCal('solar')">☀️ 公历</button>
          <button class="tab ${cal==='lunar'?'on':''}" id="an-cl" onclick="Anni.setCal('lunar')">🌙 农历</button>
        </div></div>
      <div id="an-solar" style="display:${cal==='solar'?'':'none'}">
        <label class="fl">公历日期（日历选择）</label>
        <input type="date" id="an-sd" value="${cal==='solar'&&a.y?a.y+'-'+pad(a.m)+'-'+pad(a.d):(cal==='solar'&&a.m?new Date().getFullYear()+'-'+pad(a.m)+'-'+pad(a.d):'')}" onchange="Anni.conv()">
      </div>
      <div id="an-lunar" style="display:${cal==='lunar'?'':'none'}">
        <label class="fl">农历日期</label>
        <div class="frm-row">
          <select id="an-ly" onchange="Anni.conv()">${(()=>{let o='<option value="">不记年份</option>';for(let y=new Date().getFullYear();y>=1930;y--)o+=`<option value="${y}" ${a.cal==='lunar'&&a.y==y?'selected':''}>${y}年</option>`;return o;})()}</select>
          <select id="an-lm" onchange="Anni.conv()">${['正','二','三','四','五','六','七','八','九','十','冬','腊'].map((m,i)=>`<option value="${i+1}" ${a.cal==='lunar'&&a.m==i+1?'selected':''}>${m}月</option>`).join('')}</select>
          <select id="an-ld" onchange="Anni.conv()">${(()=>{const n=['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];return n.map((x,i)=>`<option value="${i+1}" ${a.cal==='lunar'&&a.d==i+1?'selected':''}>${x}</option>`).join('');})()}</select>
        </div>
        <label style="display:flex;align-items:center;gap:7px;margin-top:8px;font-size:12px;color:var(--ink2);font-weight:700">
          <input type="checkbox" class="chk" id="an-leap" ${a.leap?'checked':''} onchange="Anni.conv()">闰月</label>
      </div>
      <div id="an-conv" class="hint"></div>
      <div><label class="fl">图标</label><div id="an-icons" style="margin-top:4px">${ANNI_ICONS.map(i=>
        `<span class="tag ${(a.icon||'🎂')===i?'on':''}" style="font-size:16px" onclick="Anni.pickIcon(this,'${i}')">${i}</span>`).join('')}</div>
        <input type="hidden" id="an-ic" value="${a.icon||'🎂'}"></div>
      <div><label class="fl">备注</label><input id="an-note" value="${UI.esc(a.note||'')}" placeholder="可选"></div>
    </div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" onclick="Anni.save('${a.id||''}')">保存</button></div>`);
    this._cal=cal;
    if(cal==='solar'&&!document.getElementById('an-sd').value)document.getElementById('an-sd').value=today();
    this.conv();
  },
  setCal(c){this._cal=c;document.getElementById('an-cs').classList.toggle('on',c==='solar');
    document.getElementById('an-cl').classList.toggle('on',c==='lunar');
    document.getElementById('an-solar').style.display=c==='solar'?'':'none';
    document.getElementById('an-lunar').style.display=c==='lunar'?'':'none';this.conv();},
  pickIcon(el,i){document.querySelectorAll('#an-icons .tag').forEach(t=>t.classList.remove('on'));el.classList.add('on');document.getElementById('an-ic').value=i;},
  conv(){
    const box=document.getElementById('an-conv');if(!box)return;
    if(this._cal==='solar'){
      const v=document.getElementById('an-sd').value;
      if(!v){box.innerHTML='请选择公历日期';return;}
      const d=parseD(v),o=sl2l(d.getFullYear(),d.getMonth()+1,d.getDate());
      box.innerHTML=o?`☀️ 公历 <b>${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日</b><br>🌙 对应农历 <b>${o.yearCn}${o.isLeap?'闰':''}${o.monthCn}${o.dayCn}</b>（${o.gzYear}${o.animal}年）`:'日期无效';
    }else{
      const y=+document.getElementById('an-ly').value,m=+document.getElementById('an-lm').value,
            dd=+document.getElementById('an-ld').value,lp=document.getElementById('an-leap').checked;
      const yy=y||new Date().getFullYear();
      const s=l2s(yy,m,dd,lp);
      const LM=['正','二','三','四','五','六','七','八','九','十','冬','腊'];
      box.innerHTML=(s&&s.cYear)?`🌙 农历 <b>${y?yy+'年':''}${lp?'闰':''}${LM[m-1]}月${['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'][dd-1]}</b><br>☀️ 对应公历 <b>${s.cYear}年${s.cMonth}月${s.cDay}日</b>${y?'':'（按今年换算）'}`:'该农历日期不存在（可能当月无三十或无闰月）';
    }
  },
  save(id){
    const name=document.getElementById('an-n').value.trim();
    if(!name)return UI.toast('请填写名称');
    let o={name,type:document.getElementById('an-ty').value,cal:this._cal,
      icon:document.getElementById('an-ic').value,note:document.getElementById('an-note').value.trim()};
    if(this._cal==='solar'){
      const v=document.getElementById('an-sd').value;if(!v)return UI.toast('请选择公历日期');
      const d=parseD(v);o.y=d.getFullYear();o.m=d.getMonth()+1;o.d=d.getDate();o.leap=false;
    }else{
      o.y=+document.getElementById('an-ly').value||0;o.m=+document.getElementById('an-lm').value;
      o.d=+document.getElementById('an-ld').value;o.leap=document.getElementById('an-leap').checked;
      if(!l2s(o.y||new Date().getFullYear(),o.m,o.d,o.leap).cYear)return UI.toast('该农历日期不存在');
    }
    if(id)Object.assign(DB.annis.find(x=>x.id===id),o);else DB.annis.push(Object.assign({id:uid()},o));
    save();UI.close();UI.toast('已保存 ✓');this.render();
  },
  edit(id){this.open(DB.annis.find(x=>x.id===id));},
  del(id){UI.confirm('删除这条纪念日？',()=>{DB.annis=DB.annis.filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  tab(t){this.t=t;document.querySelectorAll('[data-at]').forEach(e=>e.classList.toggle('on',e.dataset.at===t));this.render();},
  mv(n){const d=new Date(this.cy,this.cm+n,1);this.cy=d.getFullYear();this.cm=d.getMonth();this.renderCal();},
  upcoming(n){
    return DB.annis.map(a=>({a,n:this.next(a)})).filter(x=>x.n).sort((x,y)=>x.n.days-y.n.days).slice(0,n||99);
  },
  render(){
    let l=this.upcoming();
    if(this.t!=='all')l=l.filter(x=>x.a.type===this.t);
    document.getElementById('an-sub').textContent=`共 ${DB.annis.length} 条记录`+(l.length?` · 最近：${l[0].a.name} ${l[0].n.days===0?'就是今天':l[0].n.days+'天后'}`:'');
    document.getElementById('an-r').innerHTML=`<span class="pill">${l.length} 条</span>`;
    document.getElementById('an-list').innerHTML=l.length?l.map(({a,n})=>
      `<div class="anni ${n.days<=7?'soon':''}"><span class="av">${a.icon||'🎂'}</span>
        <div class="b"><div class="nm">${UI.esc(a.name)}${a.age?` <span class="pill">${a.type==='birthday'?a.age+'岁':'第'+a.age+'年'}</span>`:''}</div>
        <div class="ds">${a.cal==='lunar'?'🌙 农历':'☀️ 公历'} · ${n.date.replace(/-/g,'/')} ${WK[parseD(n.date).getDay()]==='日'?'周日':'周'+WK[parseD(n.date).getDay()]}<br>${n.lunar||''}${a.note?' · '+UI.esc(a.note):''}</div></div>
        <div class="cd"><b>${n.days===0?'今天':n.days}</b><small>${n.days===0?'🎉':'天后'}</small></div>
        <div class="ops" style="display:flex;flex-direction:column;gap:4px"><button class="icobtn" onclick="Anni.edit('${a.id}')">✏️</button>
        <button class="icobtn" onclick="Anni.del('${a.id}')">🗑️</button></div></div>`).join('')
      :UI.empty('还没有记录，点右上角新增吧','📅');
    this.renderCal();
  },
  renderCal(){
    document.getElementById('an-cal-t').textContent=this.cy+'年'+(this.cm+1)+'月';
    const map={};this.upcoming().forEach(({a,n})=>{(map[n.date]=map[n.date]||[]).push(a);});
    document.getElementById('an-cal').innerHTML=monthGrid(this.cy,this.cm).map(g=>{
      const hit=map[g.s];
      return `<button class="d ${g.out?'out':''} ${g.s===today()?'today':''}" onclick="Anni.info('${g.s}')">
        ${hit?`<span class="cnr">${hit[0].icon||'🎂'}</span>`:''}
        <span class="n">${g.d.getDate()}</span><span class="l">${lunarShort(g.s)}</span></button>`;
    }).join('');
    this.info(today());
  },
  info(s){
    const d=parseD(s),o=sl2l(d.getFullYear(),d.getMonth()+1,d.getDate());
    const hit=this.upcoming().filter(x=>x.n.date===s);
    document.getElementById('an-cal-info').innerHTML=`<div class="hint">
      ☀️ 公历 <b>${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 星期${WK[d.getDay()]}</b><br>
      🌙 农历 <b>${o?o.yearCn+(o.isLeap?'闰':'')+o.monthCn+o.dayCn:''}</b> · ${o?o.gzYear+'（'+o.animal+'年）':''}${o&&o.term?' · '+o.term:''}
      ${hit.length?'<br>🎉 '+hit.map(x=>UI.esc(x.a.name)).join('、'):''}</div>`;
  }
};

/* ===================== 经期 ===================== */
const Period={
  cm:new Date().getMonth(),cy:new Date().getFullYear(),
  sorted(){return DB.periods.slice().sort((a,b)=>b.start.localeCompare(a.start));},
  open(p){
    p=p||{};
    UI.modal(`<h3>${p.id?'✏️ 编辑经期记录':'🌸 记录经期'}</h3><div class="frm">
      <div class="frm-row">
        <div><label class="fl">开始日期 *</label><input type="date" id="pd-s" value="${p.start||today()}"></div>
        <div><label class="fl">结束日期</label><input type="date" id="pd-e" value="${p.end||''}"></div>
      </div>
      <div><label class="fl">经量</label><select id="pd-f">
        ${['少','正常','多'].map(f=>`<option ${p.flow===f?'selected':''}>${f}</option>`).join('')}</select></div>
      <div><label class="fl">备注（症状 / 情绪 / 用药）</label><textarea id="pd-n" placeholder="如：轻微腹痛，情绪低落">${UI.esc(p.note||'')}</textarea></div>
      <div class="hint">未填结束日期表示仍在经期中，系统按平均经期天数预估。</div>
    </div>
    <div class="foot"><button class="btn gh" onclick="UI.close()">取消</button>
    <button class="btn pri" onclick="Period.save('${p.id||''}')">保存</button></div>`);
  },
  save(id){
    const s=document.getElementById('pd-s').value;
    if(!s)return UI.toast('请选择开始日期');
    const e=document.getElementById('pd-e').value;
    if(e&&e<s)return UI.toast('结束日期不能早于开始日期');
    const o={start:s,end:e,flow:document.getElementById('pd-f').value,note:document.getElementById('pd-n').value.trim()};
    if(id)Object.assign(DB.periods.find(x=>x.id===id),o);else DB.periods.push(Object.assign({id:uid()},o));
    save();UI.close();UI.toast('已记录 ✓');this.render();
  },
  edit(id){this.open(DB.periods.find(x=>x.id===id));},
  del(id){UI.confirm('删除这条经期记录？',()=>{DB.periods=DB.periods.filter(x=>x.id!==id);save();this.render();UI.toast('已删除');});},
  saveCfg(){DB.periodCfg={cyc:+document.getElementById('pd-cyc').value||28,len:+document.getElementById('pd-len').value||5};save();this.render();UI.toast('设置已保存');},
  stats(){
    const l=this.sorted(),cfg=DB.periodCfg;
    let cyc=cfg.cyc,len=cfg.len;
    if(l.length>=2){
      const gaps=[];for(let i=0;i<Math.min(l.length-1,6);i++)gaps.push(diffDays(l[i+1].start,l[i].start));
      const v=gaps.filter(g=>g>=15&&g<=60);if(v.length)cyc=Math.round(v.reduce((a,b)=>a+b,0)/v.length);
    }
    const lens=l.filter(x=>x.end).slice(0,6).map(x=>diffDays(x.start,x.end)+1);
    if(lens.length)len=Math.round(lens.reduce((a,b)=>a+b,0)/lens.length);
    const last=l[0];
    let nextStart=null,daysTo=null,cur=null;
    if(last){
      nextStart=addDays(last.start,cyc);
      const t0=today();
      while(nextStart<t0)nextStart=addDays(nextStart,cyc);
      daysTo=diffDays(t0,nextStart);
      const end=last.end||addDays(last.start,len-1);
      if(t0>=last.start&&t0<=end)cur=diffDays(last.start,t0)+1;
    }
    return{cyc,len,last,nextStart,daysTo,cur,count:l.length};
  },
  mark(){ // 返回日期 -> 类型
    const m={},st=this.stats();
    DB.periods.forEach(p=>{
      const end=p.end||addDays(p.start,st.len-1);
      for(let d=p.start;d<=end;d=addDays(d,1))m[d]='mens';
    });
    if(st.last){
      let s=addDays(st.last.start,st.cyc);
      for(let k=0;k<6;k++){
        for(let i=0;i<st.len;i++){const d=addDays(s,i);if(!m[d])m[d]='pred';}
        const ov=addDays(s,-14);
        for(let i=-4;i<=1;i++){const d=addDays(ov,i);if(!m[d])m[d]=i===0?'ovu':'fert';}
        s=addDays(s,st.cyc);
      }
      // 当前周期排卵
      const ov0=addDays(st.last.start,st.cyc-14);
      for(let i=-4;i<=1;i++){const d=addDays(ov0,i);if(!m[d])m[d]=i===0?'ovu':'fert';}
    }
    return m;
  },
  mv(n){const d=new Date(this.cy,this.cm+n,1);this.cy=d.getFullYear();this.cm=d.getMonth();this.renderCal();},
  render(){
    const st=this.stats();
    document.getElementById('pd-cyc').value=DB.periodCfg.cyc;
    document.getElementById('pd-len').value=DB.periodCfg.len;
    document.getElementById('pd-sub').textContent=st.last?`上次开始 ${fmtCn(st.last.start)} · 已记录 ${st.count} 次`:'还没有记录，点右上角开始记录吧';
    document.getElementById('pd-stats').innerHTML=
      UI.stat('当前状态',st.cur?'经期第 '+st.cur+' 天':(st.daysTo!=null?(st.daysTo===0?'预计今天':st.daysTo+' 天后'):'—'),st.cur?'注意保暖休息 🌸':'距下次预计经期','🌸','#d3688a')+
      UI.stat('平均周期',st.cyc+'<small>天</small>','根据历史自动计算','🔄')+
      UI.stat('平均经期',st.len+'<small>天</small>','根据历史自动计算','📆')+
      UI.stat('下次预计',st.nextStart?st.nextStart.slice(5).replace('-','/'):'—',st.nextStart?'排卵日约 '+addDays(st.nextStart,-14).slice(5).replace('-','/'):'需至少一次记录','🔮');
    document.getElementById('pd-r').innerHTML=`<span class="pill pink">${st.count} 条</span>`;
    const l=this.sorted();
    document.getElementById('pd-list').innerHTML=l.length?l.map((p,i)=>{
      const end=p.end||'进行中',days=p.end?diffDays(p.start,p.end)+1:null;
      const gap=i<l.length-1?diffDays(l[i+1].start,p.start):null;
      return `<div class="row"><span style="font-size:16px">🌸</span>
        <div class="tx">${fmtCn(p.start)} → ${p.end?fmtCn(p.end):'<span class="pill pink">进行中</span>'}
        <div class="mt">${days?'持续 '+days+' 天':''}${gap?' · 距上次 '+gap+' 天':''}${p.flow?' · 经量'+p.flow:''}${p.note?' · 📎 '+UI.esc(p.note):''}</div></div>
        <div class="ops"><button class="icobtn" onclick="Period.edit('${p.id}')">✏️</button>
        <button class="icobtn" onclick="Period.del('${p.id}')">🗑️</button></div></div>`;}).join('')
      :UI.empty('暂无记录','🌸');
    this.renderCal();
  },
  renderCal(){
    document.getElementById('pd-cal-t').textContent=this.cy+'年'+(this.cm+1)+'月';
    const m=this.mark();
    document.getElementById('pd-cal').innerHTML=monthGrid(this.cy,this.cm).map(g=>
      `<button class="d ${g.out?'out':''} ${g.s===today()?'today':''} ${m[g.s]||''}" onclick="Period.quick('${g.s}')">
        <span class="n">${g.d.getDate()}</span><span class="l">${lunarShort(g.s)}</span></button>`).join('');
  },
  quick(s){
    const inP=DB.periods.find(p=>{const e=p.end||addDays(p.start,DB.periodCfg.len-1);return s>=p.start&&s<=e;});
    if(inP)return this.edit(inP.id);
    this.open({start:s});
  }
};

/* ===================== 首页 ===================== */
const Home={
  render(){
    const ds=today(),d=parseD(ds);
    const q=QUOTES[dateSeed(ds)%QUOTES.length];
    const h=new Date().getHours();
    const greet=h<6?'凌晨好，早点休息呀':h<11?'早上好呀':h<14?'中午好':h<18?'下午好':h<22?'晚上好':'夜深了，注意休息';
    const nm=DB.profile.name?DB.profile.name+'，':'';
    document.getElementById('ho-hi').textContent='🌿 '+nm+greet;
    document.getElementById('ho-quote').textContent=q[0];
    document.getElementById('ho-quote-en').textContent=q[1];
    const lo=sl2l(d.getFullYear(),d.getMonth()+1,d.getDate());
    const fu=fuLabel(ds);
    document.getElementById('ho-date').innerHTML=
      `<span class="pill">${fmtFull(ds)}</span>`+
      (lo?`<span class="pill">🌙 ${lo.monthCn}${lo.dayCn}${lo.term?' · '+lo.term:''}</span>`:'')+
      (fu?`<span class="pill warn">🔥 ${fu.t}第${fu.n}天</span>`:'')+
      `<span class="pill blue">${lo?lo.gzYear+'·'+lo.animal+'年':''}</span>`;

    /* 概览统计 */
    const td=DB.todos.filter(t=>t.date===ds),tdd=td.filter(t=>t.done).length;
    const sp=Study.plan(ds),srate=(sp.w.length+sp.s.length)?Math.round((sp.wd.length+sp.sd.length)/(sp.w.length+sp.s.length)*100):0;
    const sports=DB.sports.filter(s=>s.date===ds),mins=sports.reduce((a,b)=>a+b.mins,0);
    const M=Money.sum(t=>t.date===ds);
    document.getElementById('ho-stats').innerHTML=
      UI.stat('今日待办',tdd+'<small>/'+td.length+'</small>',td.length?(td.length-tdd?'还剩 '+(td.length-tdd)+' 项':'全部完成 🎉'):'今天很清闲','📝')+
      UI.stat('今日学习',srate+'<small>%</small>','词汇 '+sp.wd.length+'/'+sp.w.length+' · 语句 '+sp.sd.length+'/'+sp.s.length,'📓')+
      UI.stat('今日运动',mins+'<small>分钟</small>',sports.length?sports.map(s=>s.item).join('、'):'还没有运动记录','🏋️')+
      UI.stat('今日结余',Money.fmt(M.b),'收 '+Money.fmt(M.i)+' · 支 '+Money.fmt(M.o),'💰',M.b>=0?'#3f9b76':'#d1776a');

    /* 待办 */
    document.getElementById('ho-todo-r').innerHTML=`<span class="pill">${tdd}/${td.length}</span><button class="btn sm pri" onclick="Todo.openAt('${ds}')">＋</button>`;
    document.getElementById('ho-todo').innerHTML=td.length?
      `<div class="bar" style="margin-bottom:11px"><i style="width:${td.length?tdd/td.length*100:0}%"></i></div>`+
      td.slice(0,6).map(t=>`<div class="row ${t.done?'done':''}" style="padding:8px 11px">
        <input type="checkbox" class="chk" ${t.done?'checked':''} onchange="Todo.toggle('${t.id}');Home.render()">
        <div class="tx" style="font-size:13px">${UI.esc(t.text)}${t.time?`<div class="mt">🕐 ${t.time}</div>`:''}</div></div>`).join('')
      +(td.length>6?`<div style="text-align:center;margin-top:8px"><button class="btn sm gh" onclick="UI.go('todo')">查看全部 ${td.length} 项 →</button></div>`:'')
      :UI.empty('今天没有待办<br><button class="btn sm pri" style="margin-top:10px" onclick="Todo.openAt(\''+ds+'\')">＋ 添加待办</button>','☀️');

    /* 学习 */
    document.getElementById('ho-study-r').innerHTML=`<span class="pill">${srate}%</span>`;
    document.getElementById('ho-study').innerHTML=
      `<div class="flexline" style="gap:16px">
        <div class="ring" style="--p:${srate}"><i>${srate}%</i></div>
        <div style="flex:1;min-width:120px">
          <div class="mini"><span class="ic">🔤</span>高频词汇<span class="v">${sp.wd.length}/${sp.w.length}</span></div>
          <div class="mini"><span class="ic">💬</span>高频语句<span class="v">${sp.sd.length}/${sp.s.length}</span></div>
          <button class="btn sm pri" style="margin-top:6px;width:100%" onclick="UI.go('study')">去学习 →</button>
        </div></div>`;

    /* 减脂 */
    const tea=DB.tea[ds]||0,goal=+DB.pref.tea||800;
    const diets=DB.diets.filter(x=>x.date===ds);
    document.getElementById('ho-fit-r').innerHTML=`<span class="pill">${mins} 分钟</span>`;
    document.getElementById('ho-fit').innerHTML=
      (sports.length?sports.map(s=>`<div class="mini"><span class="ic">${Fat.icon(s.item)}</span>${UI.esc(s.item)}<span class="v">${s.mins} 分钟</span></div>`).join('')
        :`<div class="mini"><span class="ic">🏃</span><span style="color:var(--muted)">今天还没运动，动起来吧</span></div>`)+
      `<div class="mini"><span class="ic">🍱</span>饮食记录<span class="v">${diets.length} 条</span></div>
      <div class="mini"><span class="ic">🍵</span>芡实赤豆薏米茶<span class="v" style="color:${tea>=goal?'#3f9b76':'#c58a3c'}">${tea}/${goal}ml</span></div>
      <div class="bar amber" style="margin-top:8px"><i style="width:${Math.min(100,tea/goal*100)}%"></i></div>
      <div class="flexline" style="margin-top:9px">
        <button class="btn sm pri" onclick="Fat.tea('${ds}',200);Home.render()">🍵 +200ml</button>
        <button class="btn sm gh" onclick="UI.go('fat')">查看详情 →</button></div>`;

    /* 记账 */
    const mm=Money.sum(t=>t.date.slice(0,7)===ds.slice(0,7));
    const dl=DB.txs.filter(t=>t.date===ds).slice(-4).reverse();
    document.getElementById('ho-money-r').innerHTML=`<button class="btn sm pri" onclick="Money.open({date:'${ds}'})">＋ 记一笔</button>`;
    document.getElementById('ho-money').innerHTML=
      `<div class="mini"><span class="ic">💵</span>日收入<span class="v money-in">${Money.fmt(M.i)}</span></div>
      <div class="mini"><span class="ic">💸</span>日支出<span class="v money-out">${Money.fmt(M.o)}</span></div>
      <div class="mini" style="background:rgba(143,212,180,.26)"><span class="ic">🧮</span>日结余<span class="v" style="color:${M.b>=0?'#3f9b76':'#d1776a'}">${Money.fmt(M.b)}</span></div>
      <div style="font-size:11.5px;color:var(--muted);margin-top:9px;font-weight:700">本月：收 ${Money.fmt(mm.i)} · 支 ${Money.fmt(mm.o)} · 余 ${Money.fmt(mm.b)}</div>
      ${dl.length?'<hr class="sp">'+dl.map(t=>`<div class="mini"><span class="ic">${CAT_ICON[t.cat]||'📦'}</span>${UI.esc(t.cat)}${t.note?' · '+UI.esc(t.note):''}<span class="v ${t.type==='in'?'money-in':'money-out'}">${t.type==='in'?'+':'-'}${Money.fmt(t.amt)}</span></div>`).join(''):''}`;

    /* 星仔 */
    const bl=Baby.day(ds),bd=bl.filter(x=>x.done).length;
    document.getElementById('ho-baby-r').innerHTML=`<span class="pill">${bd}/${bl.length}</span>`;
    document.getElementById('ho-baby').innerHTML=
      `<div class="bar" style="margin-bottom:11px"><i style="width:${bl.length?bd/bl.length*100:0}%"></i></div>`+
      bl.slice(0,7).map(r=>`<div class="row ${r.done?'done':''}" style="padding:7px 11px">
        <input type="checkbox" class="chk" ${r.done?'checked':''} onchange="Baby.toggle('${ds}','${r.id}');Home.render()">
        <span style="font-size:14px">${Baby.icon(r.name)}</span>
        <div class="tx" style="font-size:12.5px">${UI.esc(r.name)}${r.at?` <span style="color:var(--muted);font-weight:600">${r.at}</span>`:''}</div></div>`).join('');

    /* 提醒 */
    const up=Anni.upcoming(4);
    const st=Period.stats();
    const over=DB.todos.filter(t=>!t.done&&t.date<ds);
    let rm='';
    if(st.cur)rm+=`<div class="mini"><span class="ic">🌸</span>经期第 ${st.cur} 天，注意休息<span class="v"></span></div>`;
    else if(st.daysTo!=null&&st.daysTo<=7)rm+=`<div class="mini"><span class="ic">🌸</span>预计 ${st.daysTo===0?'今天':st.daysTo+' 天后'}来经期<span class="v">${st.nextStart.slice(5).replace('-','/')}</span></div>`;
    if(over.length)rm+=`<div class="mini"><span class="ic">⚠️</span>有 ${over.length} 项待办已逾期<span class="v"><button class="btn sm gh" onclick="UI.go('todo')">去处理</button></span></div>`;
    rm+=up.map(({a,n})=>`<div class="mini"><span class="ic">${a.icon||'🎂'}</span>${UI.esc(a.name)}
      <span style="color:var(--muted);font-weight:600;font-size:11px">· ${a.cal==='lunar'?'农历':'公历'} ${n.date.slice(5).replace('-','/')}</span>
      <span class="v" style="color:${n.days<=7?'#d1776a':'var(--deep)'}">${n.days===0?'就是今天 🎉':n.days+' 天后'}</span></div>`).join('');
    if(!rm)rm=UI.empty('近期没有特别提醒<br><button class="btn sm pri" style="margin-top:10px" onclick="UI.go(\'anni\')">添加纪念日</button>','📅');
    document.getElementById('ho-remind').innerHTML=rm;
  }
};

/* ===================== 设置 ===================== */
const Settings={
  render(){
    const p=DB.profile,f=DB.pref;
    document.getElementById('se-name').value=p.name||'';
    document.getElementById('se-baby').value=p.baby||'星仔';
    document.getElementById('se-h').value=p.h||'';
    document.getElementById('se-w').value=p.w||'';
    document.getElementById('se-wt').value=p.wt||'';
    document.getElementById('se-wc').value=f.wc;
    document.getElementById('se-sc').value=f.sc;
    document.getElementById('se-tea').value=f.tea;
    document.getElementById('se-rate').value=f.rate;
    document.getElementById('se-online').checked=!!f.online;
    document.getElementById('se-start').innerHTML=PAGES.map(x=>`<option value="${x[0]}" ${f.start===x[0]?'selected':''}>${x[1]} ${x[2]}</option>`).join('');
    this.renderBabyItems();
    const sz=(new Blob([localStorage.getItem(KEY)||'']).size/1024).toFixed(1);
    const bmi=(p.h&&p.w)?(p.w/Math.pow(p.h/100,2)).toFixed(1):null;
    const lb=localStorage.getItem(BK_KEY)||'';
    const gap=lb?Math.floor((parseD(today())-parseD(lb))/864e5):null;
    const bkText=lb?(gap<=0?'今天':gap+' 天前'):'从未备份';
    const bkColor=(!lb||gap>=14)?'#e08a7b':'#2f9e78';
    document.getElementById('se-usage').innerHTML=
      `<div class="mini"><span class="ic">📦</span>数据占用<span class="v">${sz} KB</span></div>
      <div class="mini"><span class="ic">💾</span>上次备份<span class="v" style="color:${bkColor}">${bkText}</span></div>
      <div class="mini"><span class="ic">📝</span>待办 / 账目<span class="v">${DB.todos.length} / ${DB.txs.length}</span></div>
      <div class="mini"><span class="ic">🏃</span>运动 / 饮食<span class="v">${DB.sports.length} / ${DB.diets.length}</span></div>
      <div class="mini"><span class="ic">📅</span>纪念日 / 经期<span class="v">${DB.annis.length} / ${DB.periods.length}</span></div>
      ${bmi?`<div class="mini"><span class="ic">⚖️</span>当前 BMI<span class="v">${bmi} ${bmi<18.5?'偏瘦':bmi<24?'正常 ✓':bmi<28?'偏重':'超重'}</span></div>`:''}
      ${(p.w&&p.wt)?`<div class="mini"><span class="ic">🎯</span>距目标体重<span class="v">${(p.w-p.wt).toFixed(1)} kg</span></div>`:''}`;
  },
  saveProfile(){
    DB.profile={name:document.getElementById('se-name').value.trim(),baby:document.getElementById('se-baby').value.trim()||'星仔',
      h:document.getElementById('se-h').value,w:document.getElementById('se-w').value,wt:document.getElementById('se-wt').value};
    save();UI.toast('资料已保存 ✓');this.render();
  },
  savePref(){
    const old=DB.pref.wc+'-'+DB.pref.sc;
    DB.pref={wc:Math.max(5,Math.min(60,+document.getElementById('se-wc').value||30)),
      sc:Math.max(1,Math.min(20,+document.getElementById('se-sc').value||5)),
      tea:+document.getElementById('se-tea').value||800,rate:+document.getElementById('se-rate').value||0.9,
      online:document.getElementById('se-online').checked,start:document.getElementById('se-start').value};
    if(old!==DB.pref.wc+'-'+DB.pref.sc){delete DB.study[today()];UI.toast('学习数量已更新，今日计划已重新生成');}
    else UI.toast('偏好已保存 ✓');
    save();
  },
  renderBabyItems(){
    document.getElementById('se-baby-items').innerHTML=DB.babyItems.map((n,i)=>
      `<div class="row" style="padding:7px 11px"><span style="font-size:15px">${Baby.icon(n)}</span>
      <div class="tx" style="font-size:13px">${UI.esc(n)}</div>
      <div class="ops"><button class="icobtn" onclick="Settings.upBabyItem(${i})">↑</button>
      <button class="icobtn" onclick="Settings.delBabyItem(${i})">🗑️</button></div></div>`).join('')||UI.empty('清单为空','🍼');
  },
  addBabyItem(){
    const el=document.getElementById('se-baby-new'),v=el.value.trim();
    if(!v)return UI.toast('请输入名称');
    if(DB.babyItems.includes(v))return UI.toast('已存在');
    DB.babyItems.push(v);save();el.value='';this.renderBabyItems();UI.toast('已添加');
  },
  upBabyItem(i){if(i===0)return;const a=DB.babyItems;[a[i-1],a[i]]=[a[i],a[i-1]];save();this.renderBabyItems();},
  delBabyItem(i){DB.babyItems.splice(i,1);save();this.renderBabyItems();UI.toast('已删除');},
  exportData(){
    const blob=new Blob([JSON.stringify(DB,null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download='小小工作台备份_'+today()+'.json';a.click();
    try{localStorage.setItem(BK_KEY,today());}catch(e){}
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);UI.toast('已导出备份 ✓');
  },
  importData(input){
    const f=input.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        const o=JSON.parse(r.result);
        if(!o||typeof o!=='object')throw 0;
        UI.confirm('导入将覆盖当前所有数据，确定继续吗？',()=>{
          DB=Object.assign(JSON.parse(JSON.stringify(DEF)),o);save();load();UI.toast('导入成功 ✓');UI.go('home');
        });
      }catch(e){UI.toast('文件格式不正确');}
      input.value='';
    };
    r.readAsText(f);
  },
  clearAll(){
    UI.confirm('将清空所有本地数据且无法恢复，建议先导出备份。确定清空吗？',()=>{
      localStorage.removeItem(KEY);load();save();UI.toast('已清空所有数据');UI.go('home');
    });
  }
};

/* ===================== 启动 ===================== */
function backupTip(){
  const has=DB.todos.length+DB.txs.length+DB.sports.length+DB.diets.length+
            DB.annis.length+DB.periods.length>0;
  if(!has)return;
  const lb=localStorage.getItem(BK_KEY);
  if(!lb){UI.toast('小提示：设置 → 数据管理 可以导出备份');return;}
  const gap=Math.floor((parseD(today())-parseD(lb))/864e5);
  if(gap>=14)UI.toast('已 '+gap+' 天没备份了，建议去设置导出一份');
}
function boot(){
  load();buildNav();
  News.autoCheck();
  const qp=new URLSearchParams(location.search).get('p');   // 支持桌面快捷方式 ?p=todo
  const s=qp||DB.pref.start||'home';
  UI.go(PAGES.some(p=>p[0]===s)?s:'home');
  if(DB.pref.online)setTimeout(()=>News.online(),1200);
  if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
  setTimeout(backupTip,1600);
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')UI.close();
    if(e.key==='Enter'&&document.getElementById('mask').classList.contains('on')){
      const b=document.querySelector('#modal .foot .btn.pri');
      if(b&&e.target.tagName!=='TEXTAREA')b.click();
    }
  });
}
document.addEventListener('DOMContentLoaded',boot);
