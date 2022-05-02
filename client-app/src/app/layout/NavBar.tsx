import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NarBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item exact as={NavLink} to='/' header>
                    <img src='./assets/logo.png' alt='logo.png' style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' content='Activities' />
                <Menu.Item as={NavLink} to='/createActivity'>
                    <Button positive content='Create activity' />
                </Menu.Item>
            </Container>
        </Menu>
    );
};