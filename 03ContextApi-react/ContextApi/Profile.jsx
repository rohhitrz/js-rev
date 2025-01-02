import React, {useContext} from 'react'
import UserContext from './UserContext'

export const Profile = () => {
    const user=useContext(UserContext);
  return (
    <div>hello, {user.name} !!</div>
  )
}
