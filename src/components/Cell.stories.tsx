import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cell from './Cell';

export default {
    title: 'Example/Cell',
    component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 50
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: 100
};