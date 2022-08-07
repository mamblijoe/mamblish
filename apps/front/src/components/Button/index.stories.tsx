import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '@/components/Button';

export default {
    title: 'Example/Index',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        primary: { control: 'boolean' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
