import React, {useState} from 'react';

const CreatePost = ({AddPost}) => {
    const [name,setName] = useState('');
    const [post,setPost] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {name:name,post:post};
        AddPost(newPost)
    }

    return (  
        <form onSubmit={handleSubmit} className = 'form-grid'>
            <div className="mb-3">
                <label class = 'col-sm-1'> Name </label>
                <input type = 'string' value = {name} onChange = {(event) => setName(event.target.value)}/>
            </div>
            <div className="mb-3">
                <label class = 'col-sm-1'>Post</label>
                <textarea type = 'string' class = 'form-control' value = {post} onChange = {(event) => setPost(event.target.value)}/>
            </div>
            <button type = 'submit'>Create Post</button>
        </form>
    );
}
 
export default CreatePost;