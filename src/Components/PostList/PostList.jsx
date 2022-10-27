import React, { useState } from 'react';
const PostList = ({posts}) => {
    
    
    return (
        <ul>
            {posts.map((post,i)=> {
                return (
                    <li key = {i}>
                        <p>{post.name}</p>
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