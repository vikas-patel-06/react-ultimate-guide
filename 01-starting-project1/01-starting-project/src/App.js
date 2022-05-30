import React, { useState } from 'react'
import AddUser from './components/users/AddUser'
import UsersList from './components/users/UsersList'
function App() {
  const [usersList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prev) => {
      return [...prev, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
