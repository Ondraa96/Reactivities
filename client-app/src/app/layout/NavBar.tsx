import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Menu, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NarBar() {
    const { userStore: { user, logout } } = useStore();
    
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item exact as={NavLink} to='/' header>
                    <img src='./assets/logo.png' alt='logo.png' style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' content='Activities' />
                <Menu.Item as={NavLink} to='/errors' content='Errors' />
                <Menu.Item as={NavLink} to='/createActivity'>
                    <Button positive content='Create activity' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' />
                            <Dropdown.Item onClick={logout} icon='power' text='Logout' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    );
};