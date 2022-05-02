import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NarBar() {
    const { activityStore } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src='./assets/logo.png' alt='logo.png' style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item content='Activities' />
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Create activity' />
                </Menu.Item>
            </Container>
        </Menu>
    );
};