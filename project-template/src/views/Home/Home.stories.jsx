import React from 'react';
import { Home } from './Home'
import faker from 'faker';

const meta = {
    title: 'Home',
    component: Home,
}


export const Default = () => <Home value="Default">{faker.lorem.paragraphs()}</Home>;
export const Other = () => <Home value="Other">{faker.lorem.paragraphs()}</Home>;
export default meta

