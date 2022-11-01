import React, {useState } from 'react';
import arrowBU from "../../Images/ArrowBU.png";
import arrowBD from "../../Images/ArrowBD.png";
import arrowPD from "../../Images/ArrowPD.png";
import arrowPU from "../../Images/ArrowPU.png";
import './Post.css'


const Post = ({post}) => {
    
    const [likeClicked,setLikeClicked] = useState(false);
    const [dislikeClicked,setDislikeClicked] = useState(false);

    function handleLikeClick() {
        if (!likeClicked){
            setLikeClicked(true);
            if( dislikeClicked){
            (setDislikeClicked(false));
            }
        }
        else{
            setLikeClicked(false);  
        }
    }

    function handleDislikeClick() {
        if(!dislikeClicked) {
            setDislikeClicked(true);
            if(likeClicked){
                setLikeClicked(false);
            }
        }
        else{
           setDislikeClicked(false);
           
        }
    }

    function dateString(){
        return 'Posted  on ' + (post.time.getMonth()+1) + '-' + 
        post.time.getDate() +"-"+ post.time.getFullYear() +"  at  "
        + post.time.getHours()+":"+ post.time.getMinutes()+":"+post.time.getSeconds();
    }

    function likeArrow(){
        if (!likeClicked){
            return arrowBU
        }
        else{
            return arrowPU
        }
    }
    function dislikeArrow(){
        if (!dislikeClicked){
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