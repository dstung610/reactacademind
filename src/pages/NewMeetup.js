import { useHistory } from "react-router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetup(){
    const history = useHistory();

    const urlAPI = 'https://reactacademind-default-rtdb.firebaseio.com/';
    function addMeetupHandler(data){
        fetch(urlAPI + "meetups.json", 
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(function(){
            history.replace('/')
        });
    }
    return (        
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>

    );
    
}