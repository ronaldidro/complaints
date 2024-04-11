import { useMutation, useQueryClient } from 'react-query'

import { removeUser } from '../services/api'

const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation(removeUser, {
    onSuccess: deletedUser => {
      const queryData = queryClient.getQueryData('users')
      const updatedData = { ...queryData, users: queryData.users.filter(user => user.id !== deletedUser.data.id) }
      queryClient.setQueryData('users', updatedData)
    },
    onError: error => {
      console.log('🚀 ~ useDeleteUser ~ error:', error.response.data.message)
    }
  })
}

export default useDeleteUser
