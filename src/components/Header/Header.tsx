import React, {useEffect} from 'react';
import {Menu} from 'semantic-ui-react';

export default function () {

    useEffect(() => {

    }, []);

    return (
        <Menu>
            <Menu.Item
                to='/admin'
                name='Admin'
            >
                Admin
            </Menu.Item>

            <Menu.Item
                name='reviews'
            >
                Reviews
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
            >
                Upcoming Events
            </Menu.Item>
        </Menu>

    );
}
