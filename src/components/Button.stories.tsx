import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
    title: 'UI Elements/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button text='Button' {...args} />;

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
    state: 'active'
};