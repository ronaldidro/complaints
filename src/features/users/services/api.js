import { request } from '@features/core'

const getUsers = () => request({ url: '/users?limit=10' }).then(res => res.data)

const addUser = data => request({ url: '/users/add', method: 'POST', data })

const removeUser = id => request({ url: `/users/${id}`, method: 'DELETE' })

export { getUsers, addUser, removeUser }
