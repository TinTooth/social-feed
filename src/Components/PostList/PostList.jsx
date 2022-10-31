import React, { useEffect, useState } from 'react';
import Post from '../Post/Post.jsx'



const PostList = ({posts}) => {
 
    return (
        <ul className = 'mt-3'>
            {posts.map((post,i)=> {
                return (
                    <li className = 'bg-light border-bottom shadow m-2' key = {i}>
                    <Post post={post}/>
                    </li>
                )
            })}
        </ul>

      );
}
 
export default PostList;