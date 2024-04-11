import Button from '@mui/material/Button'

import useUsers from '../hooks/useUsers'
import useDeleteUser from '../hooks/useDeleteUser'

export const UsersList = () => {
  const { users, isLoading } = useUsers()
  const { mutate: deleteUser } = useDeleteUser()

  const onDelete = user => confirm(`Delete ${user.firstName}?`) && deleteUser(user.id)

  if (isLoading) return <p>Loading...</p>

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>
              <Button variant="contained" onClick={() => onDelete(user)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
