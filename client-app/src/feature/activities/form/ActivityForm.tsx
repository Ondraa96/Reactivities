import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import Loader from '../../../app/layout/Loader';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid'

export default observer(function ActivityForm() {
    const history = useHistory();

    const { activityStore } = useStore();
    const { createActivity, updateActivity, loadingInitial, loading, loadActivity } = activityStore;

    const { id } = useParams<{ id: string }>();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])

    function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    function handleSubmit() {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
            
        } else {
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        }
    }

    if (loadingInitial) return <Loader content='Loading activity...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Title' name='title' value={activity.title} onChange={handleOnChange} />
                <Form.TextArea placeholder='Description' name='description' value={activity.description} onChange={handleOnChange} />
                <Form.Input placeholder='Category' name='category' value={activity.category} onChange={handleOnChange} />
                <Form.Input type='date' placeholder='Date' name='date' value={activity.date} onChange={handleOnChange} />
                <Form.Input placeholder='City' name='city' value={activity.city} onChange={handleOnChange} />
                <Form.Input placeholder='Venue' name='venue' value={activity.venue} onChange={handleOnChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    );
})