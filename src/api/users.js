import {
  get,
  del,
  post,
  put
} from '@/utils/request'
/**
 * 获取用户列表
 * @param {*} page
 * @param {*} per
 */
export function getList(page, per = 10) {
  return get('/api/v1/admin/users', {
    page,
    per
  })
}
/**
 * 根据id删除用户
 * @param {*} id
 */
export function removeOne(id) {
  return del('/api/v1/admin/users/' + id)
}
/**
 * 新建用户
 * @param {*} data
 */
export const create = data => post('/api/v1/admin/users', data)

// export function create(data) {
//   return post('/api/v1/admin/users', data)
// }

/**
 * 根据id获取用户详情
 * @param {*} id
 */
export const one = id => get('/api/v1/admin/users/' + id)

/**
 * 根据id修改用户信息
 * @param {*} id
 * @param {*} data
 */
export const update = (id, data) => put('/api/v1/admin/users/' + id, data)
