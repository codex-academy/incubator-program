import React from 'react';
import { Global } from './Global'
import faker from 'faker'

const meta = {
    title: 'components/Global',
    component: Global,
}


export const Default = () => <Global>{faker.lorem.paragraphs()}</Global>;
export default meta

