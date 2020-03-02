import { axios } from '@/utils/request'
import fly from '@/utils/fly/request'
const GetLastSjmxDatas = '/api/services/app/SJMXAppServices/GetLastSJMX';
const UpdateCcbh = '/api/services/app/SJMXAppServices/UpdateCcbh'; //修改出厂编号
const ListWtd   = '/api/services/app/SJMXAppServices/GetSjmxBySjdid'; // sjdid
const ResetJdzt = '/api/services/app/SJMXAppServices/ResetJdzt';// 重新检定
const ListSjmxs = '/api/services/app/SJMXAppServices/GetPagedSjmxs'; //综合查询
const GetPagedVwSjmxs ='/api/services/app/VWSJMXAppServices/GetPagedVwSjmxs';
export default {
    GetLastSjmxDatas,
    UpdateCcbh,
    ListWtd,
    ResetJdzt,
    ListSjmxs,
    GetPagedVwSjmxs
}
// axios
export function TEST (parameter) {  
    return axios({
      url: GetPagedVwSjmxs,
      method: 'get',
      params: parameter
    })
}

// fly
export async function GetAllTasks(state, payload) {
    let url = GetPagedVwSjmxs;
    let rep = await fly.get(url).then(function(res) {
      //console.log(JSON.stringify(res));
      return res.result
    })
    //console.log(rep);
    return rep // return '成功'; 返回到此处
  }