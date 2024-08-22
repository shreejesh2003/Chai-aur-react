import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
import User from '../../../07reactRouter/src/components/User/User'

function Profile() {
    const {user}=useContext(UserContext)
  if(!user)return <div>Please Login</div>
  return <div>Welcome <User/></div>
}

export default Profile