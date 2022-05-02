import React, { useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../feature/home/HomePage';

function App() {
    return (
        <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <Route exact path='/' component={HomePage} />
                <Route path='/activities' component={ActivityDashboard} />
                <Route path='/createActivity' component={HomePage} />
            </Container>
        </>
    );
}

export default observer(App);
