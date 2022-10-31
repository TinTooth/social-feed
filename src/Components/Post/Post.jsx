import React, {useState } from 'react';
import arrowBU from "../../Images/ArrowBU.png";
import arrowBD from "../../Images/ArrowBD.png";
import arrowPD from "../../Images/ArrowPD.png";
import arrowPU from "../../Images/ArrowPU.png";
import './Post.css'


const Post = ({post}) => {
    const [refresh, setRefresh] = useState(0);

    function handleLikeClick() {
        if (!post.likeClicked){
            post.likeClicked = true;
            post.dislikeClicked = false;
            setRefresh(refresh+1);
        }
        else{
            post.likeClicked = false;
            setRefresh(refresh+1);
        }
    }

    function handleDislikeClick() {
        if(!post.dislikeClicked) {

            post.dislikeClicked = true;
            post.likeClicked = false;
            setRefresh(refresh+1);
        }
        else{
            post.dislikeClicked = false;
            setRefresh(refresh+1);
        }
    }

    function dateString(){
        return 'Posted  on ' + (post.time.getMonth()+1) + '-' + 
        post.time.getDate() +"-"+ post.time.getFullYear() +"  at  "
        + post.time.getHours()+":"+ post.time.getMinutes()+":"+post.time.getSeconds();
    }

    function likeArrow(){
        if (!post.likeClicked){
            return arrowBU
        }
        else{
            return arrowPU
        }
    }
    function dislikeArrow(){
        if (!post.dislikeClicked){
            return arrowBD
        }
        else{
            return arrowPD
        }
    }

    return ( 
        <div>
            <div className = 'm-2 h5'>{post.name}</div>
            <div className = 'm-4'>{post.post}</div>
            <div className = 'd-flex justify-content-end'>
                <div className = 'time'> {dateString(post)}</div>
                <img onClick = {() => handleLikeClick()} className = 'arrow' src = {likeArrow()}></img>
                <img onClick = {() => handleDislikeClick()} className = 'arrow' src = {dislikeArrow()}></img>
            </div>
        </div>
     );
}
 
export default Post;