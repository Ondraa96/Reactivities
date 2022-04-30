import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NarBar() {
   return (
      <Menu inverted fixed='top'>
         <Container>
            <Menu.Item>
               <img src='./assets/logo.png' alt='logo.png' style={{ marginRight: 10 }} />
               Reactivities
            </Menu.Item>
            <Menu.Item content='Activities' />
            <Menu.Item>
               <Button positive content='Create activity' />
            </Menu.Item>
         </Container>
      </Menu>
   );
};