import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import Loader from '../../../app/layout/Loader';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid'
import { Formik, Form, Field } from 'formik';
import TextInput from '../../../app/common/form/TextInput';
import * as Yup from 'yup';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';

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

    const validationSchema = Yup.object({
        title: Yup.string().required("The activity title is required"),
        description: Yup.string().required(),
        category: Yup.string().required(),
        date: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required()
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])

    //function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //    const { name, value } = event.target;
    //    setActivity({ ...activity, [name]: value });
    //}

    //function handleSubmit() {
    //    if (activity.id.length === 0) {
    //        let newActivity = {
    //            ...activity,
    //            id: uuid()
    //        };
    //        createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));

    //    } else {
    //        updateActivity(activity).then(() => history.push(`/activities/${activity.id}`));
    //    }
    //}

    if (loadingInitial) return <Loader content='Loading...' />
    return (
        <Segment clearing>
            <Formik
                enableReinitialize
                initialValues={activity}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <TextInput placeholder='Title' name='title' />
                        <TextArea rows={3} placeholder='Description' name='description' />
                        <SelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <TextInput placeholder='Date' name='date' />
                        <TextInput placeholder='City' name='city' />
                        <TextInput placeholder='Venue' name='venue' />
                        <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})