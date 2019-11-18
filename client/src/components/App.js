import React from "react"
import { useUsers } from "../hooks"

function App() {
  const { users } = useUsers()

  console.log(users)

  return (
    <div>
      {users.map(user => (
        <div>
        <div key={user.id}>{user.ItemName1}</div>
        <div key={user.id}>{user.ItemName2}</div>
        </div>
      ))}
    </div>
  )
}

export default App
