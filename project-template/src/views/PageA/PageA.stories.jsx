import React from 'react';
import { PageA } from './PageA'
import faker from 'faker';

const meta = {
    title: 'PageA',
    component: PageA,
}


export const Default = () => <PageA value="Default">{faker.lorem.paragraphs()}</PageA>;
export const Other = () => <PageA value="Other">{faker.lorem.paragraphs()}</PageA>;
export default meta

