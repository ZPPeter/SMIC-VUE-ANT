const GetDashboardDatas = '/api/services/app/SJCLAppServices/GetHomeCountData';
const GetAllTasks = '/api/services/app/SJCLAppServices/GetPagedTasks';
const ListDjmxs = '/api/services/app/SJCLAppServices/GetPagedDjmxs'; //待检在检列表      JDZT<122 100 111
const ListDhymxs = '/api/services/app/SJCLAppServices/GetPagedDhymxs'; //待核验仪器列表  JDZT=122
const ListDpzmxs = '/api/services/app/SJCLAppServices/GetPagedDpzmxs'; //待批准仪器列表  JDZT=200
const GetQzyJbcs = '/api/services/app/JBCSAppServices/GetJbcs'; //获取全站仪基本参数
const AddQzyJbcs = '/api/services/app/JBCSAppServices/AddJbcs'; //新增全站仪基本参数
// 天气类型
var WeatherType = {
	InOut:0, // 室内外 全站仪
	In:1,    // 室内   水准仪
	Out:2    // 室外   GPS
}

/*
M01  1030  GPS接收机
M02  1000  全站仪
M05  1040  手持激光测距仪
M03  1010  经纬仪
M06  1100  电子经纬仪
M04  1020  水准仪
*/
// 模板名称
var TemplateType = {
	MB1030:'M01',
	MB1000:'M02',
	MB1010:'M03',
	MB1020:'M04',
	MB1040:'M05',
	MB1100:'M06',
}

export default {
    GetDashboardDatas,
    GetAllTasks,ListDjmxs,
    ListDhymxs,
    ListDpzmxs,
    GetQzyJbcs,
    AddQzyJbcs,
    WeatherType,
    TemplateType
}