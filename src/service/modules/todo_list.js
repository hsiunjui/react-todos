import request from '../request'

export function _fetchList() {
    return request({
        url: '/list.json',
        method: 'GET'
    })
}