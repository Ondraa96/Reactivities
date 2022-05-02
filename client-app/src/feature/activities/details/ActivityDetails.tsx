import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Image, ButtonGroup, Button } from 'semantic-ui-react';
import Loader from '../../../app/layout/Loader';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <Loader />

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
                    <Button as={Link} to={`/manage/${activity.id}`} basic content='Edit' color='blue' />
                    <Button as={Link} to='/activities' basic content='Cancel' color='grey' />
                </ButtonGroup>
            </Card.Content>
        </Card>
    );
})