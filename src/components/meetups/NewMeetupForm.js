import {useRef} from 'react';

import Card from "../ui/Card";
import style from "./NewMeetupForm.module.css";


export default function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();    

    function submitHandler(e){
        e.preventDefault();
        console.log('Submit Clicked');

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        console.log(meetupData);
        props.onAddMeetup(meetupData);
    }
    
    return (
        <Card>
            <form className={style.form}>
                <div className={style.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required ref={titleInputRef}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' required ref={imageInputRef}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='adress'>Address</label>
                    <input type='text' id='address' required ref={addressInputRef}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={style.actions}>
                    <button onClick={submitHandler}>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}