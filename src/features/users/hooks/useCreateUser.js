import { useMutation, useQueryClient } from 'react-query'

import { addUser } from '../services/api'

const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation(addUser, {
    onSuccess: addedUser => {
      const queryData = queryClient.getQueryData('users')
      const updatedData = { ...queryData, users: queryData.users.concat(addedUser.data) }
      queryClient.setQueryData('users', updatedData)
    }
  })
}

export default useCreateUser
