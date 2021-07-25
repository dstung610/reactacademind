import style from './Layout.module.css';
import MainNavigation from './MainNavigation'

export default function Layout(props){
    return (
        <div>
            <MainNavigation />
            <main className={style.main}>{props.children}</main>
        </div>
        
    );
}