import { Box, Grid, Paper } from '@mui/material';
import React, { FC, ReactElement } from 'react';

interface IProps {
    label: string;
    value: string | number;
    unit: string;
    Icon: ReactElement;
}
const NumberBlock: FC<IProps> = ({ label, value, unit, Icon }) => (
    <Grid item lg={4}>
        <Paper>
            <Box p={2}>
                <div>
                    <div>
                        {Icon}
                        <div>{label}</div>
                    </div>
                    <div>
                        {value}
                        {unit}
                    </div>
                </div>
            </Box>
        </Paper>
    </Grid>
);

export default NumberBlock;
