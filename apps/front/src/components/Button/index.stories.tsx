import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '@/components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        primary: { control: 'boolean' },
        size: {
            control: 'select',
            options: ['large', 'medium', 'small'],
        },
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
    decorators: [
        Story => (
            <div style={{ border: '1px solid red', padding: '5px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Medium Button',
};
