
import axios from "axios";
import { baseUrl } from "../contsance";

export const GASDOWNLOAD = baseUrl + '/api/gas/download';
export const RHDOWNLOAD = baseUrl + '/api/humid/download';
export const TEMPDOWNLOAD = baseUrl + '/api/temperature/download';
export const GASDATA = baseUrl + "/api/gas/tuxing";
export const RHDATA = baseUrl + '/api/humid/tuxing';
export const TEMPDATA = baseUrl + '/api/temperature/tuxing';
export const DOWNLOADEXCEL = baseUrl + "/api/download/downloadexcel"

const LOGIN = baseUrl + '/api/user/login';
const REGISTER = baseUrl + '/api/user/register';
const LOGCOLLECTION = baseUrl + '/api/blog/list';
const LOGINSERT = baseUrl + '/api/blog/insert';
const TEMPCOLLECTION = baseUrl + '/api/temperature/list';
const GASCOLLECTION = baseUrl + '/api/gas/list';
const RHCOLLECTION = baseUrl + '/api/humid/list';
const GASINSERT = baseUrl + '/api/gas/insert';
const TEMPINSERT = baseUrl + '/api/temperature/insert';
const RHINSERT = baseUrl + '/api/humid/insert';
const LOGFINISH = baseUrl + "/api/blog/finish";
const LOGUPDATA = baseUrl + "/api/blog/update";
const LOGDELETE = baseUrl + "/api/blog/delete";
const TEMPUPDATA = baseUrl + "/api/temperature/update";
const TEMPDELETE = baseUrl + "/api/temperature/delete"
const TEMPMOVE = baseUrl + "/api/temperature/remove"
const RHUPDATA = baseUrl + "/api/humid/update";
const RHDELETE = baseUrl + "/api/humid/delete"
const RHMOVE = baseUrl + "/api/humid/remove"
const GASUPDATA = baseUrl + "/api/gas/update"
const GASDELETE = baseUrl + "/api/gas/delete"
const GASMOVE = baseUrl + "/api/gas/remove";
const DOWNLOADLIST = baseUrl + "/api/download/list";
const DOWNLOADDELETE = baseUrl + "/api/download/delete";

/**
 * 验证登录
 * @param option 用户名和密码
 * @returns 登录成功或失败
 */
 interface loginOption {
  username: string,
  password: string,
}
export async function login(option: loginOption) {
  let data;
  await axios.post(LOGIN, option).then(res => {
    data = res.data;
  });
  return data;
}
/**
 * 注册账号
 */
interface registerOption {
  username: string,
  password: string,
  fullname: string,
}
export async function register(option: registerOption) {
  let data;
  await axios.post(REGISTER, option).then(res => {
    data = res.data;
  });
  return data;
}

/**
 * 获取全部日志
 */
export async function getLogCollection() {
  let data;
  await axios.get(LOGCOLLECTION).then(res => {
    data = res.data;
  })
  return data;
}

/**
 * 写日志
 */
interface logOption {
  title: string,
  content: string,
  status: string,
  userFullname: string,
}
export async function logInsert(option: logOption) {
  let data;
  await axios.post(LOGINSERT, option).then(res => {
    data = res.data;
  })
  return data;
}

/**
 * 获取温度集合
 * 
 */
 export async function getTempCollection() {
  let data;
  await axios.get(TEMPCOLLECTION).then(res => {
    data = res.data;
  })
  return data;
}
/**
 * 获取瓦斯浓度集合
 * @returns 
 */
export async function getGasCollection() {
  let data;
  await axios.get(GASCOLLECTION).then(res => {
    data = res.data;
  })
  return data;
}
/**
 * 上传瓦斯浓度报告
 */
 interface writeOption {
  dataName: string;
  information: string;
  unit: string;
  userFullname: string;
}
export async function gasInsert(option: writeOption) {
  let data;
  await axios.post(GASINSERT, option).then(res => {
    data = res.data;
  })
  return data;
}
/**
 * 获取湿度集合
 * @returns 
 */
export async function getRhCollection() {
  let data;
  await axios.get(RHCOLLECTION).then(res => {
    data = res.data;
  })
  return data;
}

/**
 * 温度数据上传
 */


export async function tempInsert(option: writeOption) {
  let data;

  await axios.post(TEMPINSERT, option).then(res => {
    data = res.data;
  })
  return data;
}
/**
 * 湿度上传
 * @param option 
 * @returns 
 */
export async function rhInsert(option: writeOption) {
  let data;

  await axios.post(RHINSERT, option).then(res => {
    data = res.data;
  })
  return data;
}


export async function opData(api, option) {
  let data;
  const querArr = ["LOGDELETE", "LOGFINISH", "TEMPDELETE", "TEMPMOVE", "RHDELETE", "RHMOVE", "GASMOVE","GASDELETE"]
  const params =querArr.indexOf(api) >= 0 ? {
    id: option.id
  }: {}
  console.log(params)
  await axios({
    method: 'post',
    url: eval(api),
    params,
    data: {
      id: option.id,
      title: option.title || undefined,
      content: option.content || undefined,
      dataName: option.dataName || undefined,
      information: option.information || undefined,
      unit: option.unit || undefined,
      userFullname: option.userFullname,
    }
  }).then(res => {
    data = res.data;
  })
  return data;
}

export async function chartData(api) {
  let data;
  await axios.get(api).then(res => {
    data = res.data;
  })
  return data;
}

/**
 * 要下载的数据列表
 */
export async function downloadList() {
  let data;
  await axios.get(DOWNLOADLIST).then(res => {
    data = res.data;
  })
  return data;
}
/**
 * 要下载的数据列表删除
 */
 export async function downloadListRemove(option) {
  let data;
  await axios({
    method: 'post',
    url: DOWNLOADDELETE,
    params: {id: option.id}
  }).then(res => {
    data = res.data;
  })
  return data;
}