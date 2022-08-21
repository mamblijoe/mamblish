import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React, { FC } from 'react';

interface IOptions {
    value: string | number;
    label: string;
}
interface IProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (event: SelectChangeEvent<string>, child?: React.ReactNode) => void;
    options: IOptions[];
}
const BaseSelect: FC<IProps> = ({
    label = undefined,
    placeholder = undefined,
    value,
    onChange,
    options,
}) => (
    <FormControl variant="standard" fullWidth>
        {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            MenuProps={{ disableScrollLock: true }}
        >
            {options?.map(item => (
                <MenuItem value={item.value} key={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default BaseSelect;
