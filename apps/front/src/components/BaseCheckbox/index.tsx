import { Checkbox, FormControlLabel } from '@mui/material';
import React, { ChangeEvent, FC } from 'react';

interface IProps {
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
}
const BaseCheckbox: FC<IProps> = ({ checked, onChange, label }) => (
    <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} label={label} />
);

export default BaseCheckbox;
