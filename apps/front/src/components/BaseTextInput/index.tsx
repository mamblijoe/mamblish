import { TextField } from '@mui/material';
import React, { ChangeEvent, FC } from 'react';

interface IProps {
    id?: string;
    variant: 'standard' | 'filled' | 'outlined';
    placeholder?: string;
    label: string;
    fullWidth?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
const BaseTextInput: FC<IProps> = ({
    id,
    placeholder,
    onChange,
    variant,
    fullWidth = false,
    label,
    value,
}) => (
    <TextField
        value={value}
        id={id}
        variant={variant}
        placeholder={placeholder}
        label={label}
        onChange={onChange}
        fullWidth={fullWidth}
    />
);

export default BaseTextInput;
