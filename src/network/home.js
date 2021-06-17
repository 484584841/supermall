import {
  request
} from './request'

export function getHomeMultiDate() {
  return request({
    url: '/api/m5/home/multidata'
  })
}

export function getHomeData(type, page) {
  return request({
    url: '/api/m5/home/data',
    params: {
      type,
      page
    }
  })
}
