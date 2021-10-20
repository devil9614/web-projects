import React from 'react'
import {Route} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../Firebase'
const PrivateRoute = () => {
    const [user,loading,error] = useAuthState(auth)
    return (
        <Route >
            
        </Route>
    )
}

export default PrivateRoute
