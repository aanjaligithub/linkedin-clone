import React, { useEffect } from 'react';
import Hheader from './Hheader';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const user  = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //already login
        dispatch(loginuser({
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName
        }))
      }
      else {
        //logout
        dispatch(logoutuser({
          
        }))
      }
    })
  }, [])

  return (
    <>
    {
      !user ? (<Login />) : (
        <div className='app_wrapper'>
         <Hheader />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )
    }
      
    </>
  )
}

export default App;
