import React, { useState } from 'react';
const PostList = ({posts}) => {
    
    
    return (
        <ul>
            {posts.map((post,i)=> {
                return (
                    <li class = 'bg-light border-bottom shadow' key = {i}>
                        <p class>{post.name}</p>
                        <p>{post.post}</p>
                        {/* Button image */}
                        {/* Button image */}
                    </li>
                )
            })}
        </ul>

      );
}
 
export default PostList;