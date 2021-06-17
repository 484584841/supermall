import axios from "axios"

export function request(config) {
  const axiosDefault = axios.create({
    baseURL: "http://152.136.185.210:7878",
    timeout: 5000
  })

  // axios拦截器
  // 请求拦截
  axiosDefault.interceptors.request.use(
    config => {
      // console.log(config);
      // 拦截之后还必须对config放行
      return config
    },
    err => {
      console.log(err);
    }
  )
  // 响应拦截
  axiosDefault.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 这里发送网络请求
  return axiosDefault(config)
}
