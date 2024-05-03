import Post from './Post'
import classes from './PostList.module.css'
import { useState } from 'react';
import Modal from './Modal.jsx'
import NewPost from './NewPost'

function PostList({ onModalClose, ModalVisibility}) {

    const [posts, setNewPost] =useState([]);
    function addNewPostHander(PostData){
        setNewPost((existingPosts) => [PostData, ...existingPosts]);
    }

    let Modalcontent = (<Modal onClose={onModalClose}>
        <NewPost onClose={onModalClose} addNewPost={addNewPostHander} />
         </Modal>);
    return (
        <>
            {ModalVisibility ? Modalcontent : null}
            <ul className={classes.posts}>
                {posts.map((post)=> <Post author={post.author} body={post.body} key={post.body}/>)}
            </ul>
        </>
    )
}
export default PostList;