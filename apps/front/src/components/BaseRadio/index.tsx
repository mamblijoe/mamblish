import { FormControlLabel, Radio } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
    value: string;
    label: string;
}
const BaseRadio: FC<IProps> = ({ value, label }) => (
    <FormControlLabel value={value} control={<Radio />} label={label} />
);

export default BaseRadio;
