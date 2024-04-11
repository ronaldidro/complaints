import { Field, Form } from 'react-final-form'
import Button from '@mui/material/Button'

import useCreateUser from '../hooks/useCreateUser'

export const UserForm = () => {
  const { mutate: addUser } = useCreateUser()

  return (
    <Form
      onSubmit={values => addUser(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Users form</h2>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" placeholder="First Name" />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" placeholder="Last Name" />
          </div>
          <div>
            <label>Gender</label>
            <Field name="gender" component="select">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
          </div>
          <div>
            <label>Age</label>
            <Field name="age" component="input" placeholder="Age" />
          </div>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
      )}
    />
  )
}
