
const defaultState={
    title:'高危职业：中国中高层领导干部',
    content:`
    '<img src='//image.thepaper.cn/www/image/11/493/410.jpg' />
    <p>12月28日，人社部网站公布了国务院近期任免的一批国家工作人员，其中，商务部国际贸易谈判代表、副部长傅自应被任命为中央人民政府驻澳门特别行政区联络办公室（以下简称“澳门中联办”）主任。
    官方资料显示，傅自应，男，汉族，1957年9月出生于湖南岳阳，1974年10月参加工作，1992年7月加入中国共产党，研究生学历，经济学博士，中国注册会计师、高级会计师。
    他于2003年6月任商务部规划财务司司长，2003年7月任商务部部长助理、党组成员，2008年3月任商务部副部长、党组成员，2011年11月任江苏省副省长、省政府党组成员，2015年3月任中央纪委驻中央宣传部纪检组组长。
    其后，傅自应在2017年2月回到商务部任党组副书记，后于2017年3月起任商务部国际贸易谈判代表（正部长级）兼副部长、党组副书记。
    澳门中联办主任一职空缺已有一段时间。</p>
    <p>官方此前通报称，时任澳门中联办主任郑晓松同志因患抑郁症于2018年10月20日晚在其澳门住所坠楼身亡。郑晓松同志治丧工作小组10月28日发布的讣告指出，2017年9月担任澳门中联办主任后，郑晓松认真执行“一国两制”方针和澳门基本法，积极谋划澳门长远发展，身患疾病依然忘我工作，为“一国两制”事业做出积极贡献。他的不幸离世，使我们深感惋惜和悲痛。</p>'
    `
}

export default (state=defaultState,action) =>{
    switch(action.type){
        case 'detail/getDetail' :
            return state.merge({
                title:action.title,
                content:action.content
            })
        default: 
            return state;
    }
}