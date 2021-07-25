import styleList from './MeetupList.module.css';
import MeetupItem from './MeetupItem';


export default function MeetupList(props){
    return (
        <ul className={styleList.list}>
            {props.meetups.map(function(d){
                return (
                    <MeetupItem 
                        key={d.id} 
                        id={d.id}
                        image={d.image}
                        title={d.title}
                        address={d.address}
                        description={d.description}                        
                    />)
                ;
            })}
        </ul>
    );
}