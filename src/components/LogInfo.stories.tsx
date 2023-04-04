import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogInfo from './LogInfo';

export default {
    title: 'UI Elements/LogInfo',
    component: LogInfo,
} as ComponentMeta<typeof LogInfo>;

const Template: ComponentStory<typeof LogInfo> = () => <LogInfo />;

export const Default = Template.bind({});