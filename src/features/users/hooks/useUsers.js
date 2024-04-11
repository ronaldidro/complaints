import { useQuery } from 'react-query'

import { getUsers } from '../services/api'

const useUsers = () => {
  const { data, ...rest } = useQuery('users', getUsers)
  return { users: data?.users, ...rest }
}

export default useUsers
