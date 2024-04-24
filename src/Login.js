import React, { useState } from 'react'
import "./css/login.css"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { loginuser } from './features/userSlice';

const Login = () => {

    const [signup , setSignUp] = useState(false);
    const [name , setName] = useState("");
    const [photoURL , setPhotoURL] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        if(!name) 
        {
            return alert("Name is required");
        }
        if(!photoURL) 
        {
            return alert("PhotoURL is required");
        }
        if(!email) 
        {
            return alert("Email is required");
        }
        if(!password) 
        {
            return alert("Password is required");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoURL,
            }).then(() => {
                dispatch(loginuser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: photoURL,
                    displayName: name
                }))
            })
        }).catch(error=>alert(error));

        setName(" ");
        setPhotoURL(" ");
        setEmail(" ");
        setPassword(" ");
    }

    const signIn = (e) => {
        e.preventDefault();
        if(!email) 
        {
            return alert("Email is required");
        }
        if(!password) 
        {
            return alert("Password is required");
        }


        auth.signInWithEmailAndPassword(email, password).then(({user}) => {
            dispatch(loginuser({
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName
            }))
        }).catch(error => alert(error));
    }
  return (
    <>
    <div className='loginScreen'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/568px-LinkedIn_Logo_2013.svg.png?20131205172212' alt=''/>

        {
            signup===true ? (
            <form onSubmit={register}>
                <input type='text' placeholder='Full Name (Required if Registering)' value={name} onChange={e => setName(e.target.value)}/>
                <input type='text' placeholder='Profile Picture URL' value={photoURL} onChange={e => setPhotoURL(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
    
                <input type='submit' value='Sign Up'/>
    
                <h4>Already a member ? <span onClick={e => setSignUp(false)}>Login Here</span></h4>
            </form>
            )
            : 
            (
            <form onSubmit={signIn}>
               <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
               <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />

               <input type='submit' value='Sign In'/>

               <h4>Not a member ? <span onClick={e => setSignUp(true)}>Register Here</span></h4>
            </form>
            ) 
        }
        
    </div>
    </>
  )
}

export default Login