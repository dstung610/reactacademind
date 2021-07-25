import style from './Card.module.css';

export default function Card(props){
    return (
        <div className={style.card}>
            {props.children}
        </div>
    );
}