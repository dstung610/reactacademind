import {useState} from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";


function Todo(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    function deleteHandler(){
        setModalOpen(true);
    }

    function cancelModal(){
        setModalOpen(false);
    }
    return (
    <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        { isModalOpen ? <Modal onCancel={cancelModal} onConfirm={cancelModal}/> : null}
        { isModalOpen ? <Backdrop onClick={cancelModal}/> : null}
    </div>
    );
}

export default Todo;