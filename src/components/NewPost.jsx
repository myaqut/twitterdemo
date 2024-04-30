import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {



    return (
        <>
            <form className={classes.form}>
                <p>            <label htmlFor='body'>TEXT</label>
                    <textarea id='body' required rows={3}  onChange={props.onBodyChange}/>

                </p>
                <p></p>
                <p>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' required onChange={props.onAuthorChange}/>

                </p>

            </form>
        </>
    );
}

export default NewPost;