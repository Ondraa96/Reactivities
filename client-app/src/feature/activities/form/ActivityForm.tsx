import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    };

    const [activity, setActivity] = useState(initialState);

    function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    function handleSubmit() {
        createOrEdit(activity);
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Title' name='title' value={activity.title} onChange={handleOnChange} />
                <Form.TextArea placeholder='Description' name='description' value={activity.description} onChange={handleOnChange} />
                <Form.Input placeholder='Category' name='category' value={activity.category} onChange={handleOnChange} />
                <Form.Input type='date' placeholder='Date' name='date' value={activity.date} onChange={handleOnChange} />
                <Form.Input placeholder='City' name='city' value={activity.city} onChange={handleOnChange} />
                <Form.Input placeholder='Venue' name='venue' value={activity.venue} onChange={handleOnChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    );
}