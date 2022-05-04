import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../feature/home/HomePage';
import ActivityForm from '../../feature/activities/form/ActivityForm';
import ActivityDetails from '../../feature/activities/details/ActivityDetails';
import TestErrors from '../../feature/errors/TestErrors';
import { ToastContainer } from 'react-toastify';

function App() {
    const location = useLocation();

    return (
        <>
            <ToastContainer hideProgressBar position='bottom-right' />
            <Route exact path='/' component={HomePage} />
            <Route
                path={'/(.+)'}
                render={() => (
                    <>
                        <NavBar />
                        <Container style={{ marginTop: '7em' }}>
                            <Route exact path='/activities' component={ActivityDashboard} />
                            <Route path='/activities/:id' component={ActivityDetails} />
                            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
                            <Route path='/errors' component={TestErrors} />
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default observer(App);
