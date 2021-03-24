import React from 'react';
import { PageB } from './PageB'
import faker from 'faker';

const meta = {
    title: 'PageB',
    component: PageB,
}


export const Default = () => <PageB value="Default">{faker.lorem.paragraphs()}</PageB>;
export const Other = () => <PageB value="Other">{faker.lorem.paragraphs()}</PageB>;
export default meta

