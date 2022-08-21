import { FormControl, FormLabel, RadioGroup } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React, { FC } from 'react';

import BaseRadio from '@/components/BaseRadio';

interface IOptions {
    value: string;
    label: string;
}
interface IProps {
    onChange: (event: SelectChangeEvent<string>, child?: React.ReactNode) => void;
    value: string;
    options: IOptions[];
}
const BaseRadioGroup: FC<IProps> = ({ onChange, value, options }) => (
    <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value}
            name="radio-buttons-group"
            onChange={onChange}
        >
            {options?.map(item => (
                <BaseRadio value={item.value} label={item.label} key={item.value} />
            ))}
        </RadioGroup>
    </FormControl>
);

export default BaseRadioGroup;
