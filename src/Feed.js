import { Avatar } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css";
import Post from './Post';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


const Feed = () => {
    const [input , setInput] = useState(" ");
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),

                }))
            )
        );

    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: "this is a test",
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput(" ");
    };
    
  return (
    <div className='feed'>
        <div className="feed__input">
            <div className="feed__form">
                <Avatar src={user.photoURL}/>
                <form >
                    <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Start a post' />
                    <input onClick={sendPost} type='Submit'/>
                </form>
            </div>
        

            <div className="feed__options">
                <div className="option">
                    <PhotoIcon style={{color: "#70b5f9"}}/>
                    <span>Photo</span>
                </div>

                <div className="option">
                    <YouTubeIcon style={{color: "#7fc15e"}}/>
                    <span>Video</span>
                </div>

                <div className="option">
                    <TodayIcon style={{color: "#e7a33e"}}/>
                    <span>Event</span>
                </div>

                <div className="option">
                    <AssignmentIcon style={{color: "#fc9295"}}/>
                    <span>Write Article</span>
                </div>
            </div>

        </div>

        {/* Posts */}

        <FlipMove>

            
        {posts.map(({ id, data: { name, description, message, photoURL }}) => (
            <Post 
               key={id}
               name={name}
               description={description}
               message={message}
               photoURL={photoURL}
            />
        ))}

        

        </FlipMove>

    </div>
  )
}

export default Feed;