import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name , description , message , photoURL}, ref) => {
  return (
    <div ref={ref} className='posts'>
        <div className="posts__header">
            <div className="posts__headerLeft">
                <Avatar src={photoURL}/>
                <div className="posts_profile_details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <div className="posts__headerRight">
                <MoreVertIcon />
            </div>
        </div>

        <div className="posts__body">
            <p>{message}</p>
        </div>

        <div className="posts__footer">
            <div className="posts_footer_option">
                <ThumbUpIcon />
                <span>Like</span>
            </div>
            <div className="posts_footer_option">
                <CommentIcon />
                <span>Comment</span>
            </div>
            <div className="posts_footer_option">
                <AutorenewIcon />
                <span>Repost</span>
            </div>
            <div className="posts_footer_option">
                <SendIcon />
                <span>Send</span>
            </div>

                
        </div>

    </div>
  )
})

export default Post