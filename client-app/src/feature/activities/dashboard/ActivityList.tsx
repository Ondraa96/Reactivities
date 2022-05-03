import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';

import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    useEffect(() => {
        console.log(groupedActivities);
    },[])

    return (
        <>
            {groupedActivities.map(([group, activities]) =>
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    <Segment>
                        <Item.Group divided>
                            {activities.map(activity =>
                                <ActivityListItem key={activity.id} activity={activity} />
                            )}
                        </Item.Group>
                    </Segment>
                </Fragment>
            )}
        </>
    );
})