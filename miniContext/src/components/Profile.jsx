import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)

    if (!user) return <div className='text-xl font-medium text-red-600'>please Login</div>
    return <div className='text-xl font-medium text-green-500'>Welcome: {user.username} with Pass: {user.password}</div>
}

 export default Profile;