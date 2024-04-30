import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal';

function PostList() {

    const [BodyNewContent, setBodyNewContent] = useState('');
    function changeBodyContenthandler(event) {
        setBodyNewContent(event.target.value);
    };
    const [AuthorNewContent, setNewAuthorContent] = useState('');

    function ChangeAuthorContenthandler(event) {
        setNewAuthorContent(event.target.value);
    };

    const [ModalVisibility, setModalVisibility] = useState(true);
    function ModalVisibilityHandler() {
        setModalVisibility(false);
    }
    let Modalcontent = (<Modal onClose={ModalVisibilityHandler}>
        <NewPost onBodyChange={changeBodyContenthandler}
            onAuthorChange={ChangeAuthorContenthandler} />
    </Modal>);

    return (
        <>
            {ModalVisibility ? Modalcontent : null  }
            <ul className={classes.posts}>
                <Post author={AuthorNewContent} body={BodyNewContent} />
                <Post author='author2' body='this is a demo body' />
            </ul>
        </>
    )
}
export default PostList;