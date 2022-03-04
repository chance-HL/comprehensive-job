import request from '@/utils/request'

export function getForms(params) {
  return request({
    url: '/vue-element-admin/forms/list',
    method: 'get',
    params
  })
}
