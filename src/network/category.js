import {
  request
} from "@/network/request";

export function getCategory() {
  return request({
    url: '/api/m5/category'
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: '/api/m5/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/api/m5/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
