import React from 'react';
import { Card, Image, ButtonGroup, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic content='Edit' color='blue' />
                    <Button onClick={cancelSelectActivity} basic content='Cancel' color='grey' />
                </ButtonGroup>
            </Card.Content>
        </Card>
    );
}