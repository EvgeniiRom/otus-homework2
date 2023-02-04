import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopMenu from './TopMenu';

export default {
    title: 'UI Elements/TopMenu',
    component: TopMenu,
} as ComponentMeta<typeof TopMenu>;

const Template: ComponentStory<typeof TopMenu> = (args) => <TopMenu text='Generation 0' {...args} />;

export const Default = Template.bind({});

export const Run = Template.bind({});
Run.args = {
    active: 'run'
};

export const Pause = Template.bind({});
Pause.args = {
    active: 'pause'
};