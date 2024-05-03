import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onClose, addNewPost }) {
    const [BodyNewContent, setBodyNewContent] = useState('');
    const [AuthorNewContent, setNewAuthorContent] = useState('');

    function changeBodyContenthandler(event) {
        setBodyNewContent(event.target.value);
    };

    function ChangeAuthorContenthandler(event) {
        setNewAuthorContent(event.target.value);
    };
    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author: AuthorNewContent,
            body: BodyNewContent
        };
        addNewPost(postData);
        onClose();

    }

    return (
        <>
            <form className={classes.form}>
                <p>            <label htmlFor='body'>TEXT</label>
                    <textarea id='body' required rows={3} onChange={changeBodyContenthandler} />

                </p>
                <p>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' required onChange={ChangeAuthorContenthandler} />
                </p>
                <p className={classes.actions}>
                    <button type='button' onClick={onClose}>Cancel</button>
                    <button type='submit' onClick={submitHandler}>Submit</button>
                </p>

            </form>
        </>
    );
}

export default NewPost;