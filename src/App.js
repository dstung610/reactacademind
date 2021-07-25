import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layouts/Layout'
export default function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage />
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetup />
                </Route>
                <Route path='/favorites'>
                    <Favorites />
                </Route>
            </Switch>
        </Layout>    
    );
}
