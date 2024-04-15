import { createContext, useContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

const initializer = () => localStorage.getItem('isReaded') || false

const readedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET':
      return true
    default:
      return state
  }
}

const ReadedContext = createContext()

export const ReadedContextProvider = ({ children }) => {
  const [readed, readedDispatch] = useReducer(readedReducer, null, initializer)

  useEffect(() => {
    localStorage.setItem('isReaded', readed)
  }, [readed])

  return <ReadedContext.Provider value={[readed, readedDispatch]}>{children}</ReadedContext.Provider>
}

export const useReadedContext = () => useContext(ReadedContext)

ReadedContextProvider.propTypes = {
  children: PropTypes.array
}
