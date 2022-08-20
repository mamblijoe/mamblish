import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

const NumberBlock = () => (
    <Grid item lg={4}>
        <Paper>
            <Box p={2}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <AvTimerIcon />
                        <div>Total hours</div>
                    </div>
                    <div>28h</div>
                </div>
            </Box>
        </Paper>
    </Grid>
);

export default NumberBlock;
