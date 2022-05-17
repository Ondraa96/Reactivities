import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default function HomePage() {
    const { userStore } = useStore();

    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted >
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities' />
                {!userStore.isLoggedIn ? (
                    <>
                        <Button as={Link} to='/login' size='huge'>
                            Login
                        </Button>
                        <Button as={Link} to='/register' size='huge'>
                            Register
                        </Button>
                    </>
                ) : (
                    <Button as={Link} to='/activities' size='huge'>
                        Go to Activities!
                    </Button>
                )}
            </Container>
        </Segment>
    );
}