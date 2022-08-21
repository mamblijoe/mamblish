import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

import BaseCheckbox from '@/components/BaseCheckbox';
import BaseRadioGroup from '@/components/BaseRadioGroup';
import BaseSelect from '@/components/BaseSelect';
import BaseTable from '@/components/BaseTable';
import BaseTextInput from '@/components/BaseTextInput';
import NumberBlock from '@/components/NumberBlock';
import Title from '@/components/Title';

const TaskManagement = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectValue, setSelectValue] = useState<string>('');
    const [radioValue, setRadioValue] = useState<string>('');
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false);

    return (
        <>
            <Grid item lg={12}>
                <Paper>
                    <Box p={2}>
                        <Box mb={3} width={300}>
                            <BaseTextInput
                                value={inputValue}
                                onChange={event => setInputValue(event.target.value)}
                                variant="standard"
                                label="label"
                                fullWidth
                            />
                        </Box>
                        <Box mb={3} width={300}>
                            <BaseSelect
                                label="Тип"
                                onChange={event => setSelectValue(event.target.value)}
                                value={selectValue}
                                options={[
                                    {
                                        label: 'Positive',
                                        value: 'positive',
                                    },
                                    {
                                        label: 'Negative',
                                        value: 'negative',
                                    },
                                ]}
                            />
                        </Box>
                        <Box mb={3} display="block">
                            <BaseRadioGroup
                                onChange={event => setRadioValue(event.target.value)}
                                value={radioValue}
                                options={[
                                    {
                                        label: 'Positive',
                                        value: 'positive',
                                    },
                                    {
                                        label: 'Negative',
                                        value: 'negative',
                                    },
                                ]}
                            />
                        </Box>
                        <Box mb={3} display="block">
                            <BaseCheckbox
                                checked={checkboxValue}
                                onChange={() => setCheckboxValue(prevState => !prevState)}
                                label="Label"
                            />
                        </Box>
                        <Box>
                            <Button variant="contained">
                                <AddIcon />
                                Track New Task
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item lg={12}>
                <Title title="Заголовок" />
            </Grid>
            <NumberBlock value={28} label="Total hours" Icon={<AccessTimeIcon />} unit="h" />
            <NumberBlock value={28} label="Total hours" Icon={<AccessTimeIcon />} unit="h" />
            <NumberBlock value={28} label="Total hours" Icon={<AccessTimeIcon />} unit="h" />
            <Grid item lg={12}>
                <Title title="Title" />
                <BaseTable />
            </Grid>
        </>
    );
};

export default TaskManagement;
