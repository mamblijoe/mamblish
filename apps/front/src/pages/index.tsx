import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Grid, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

import BaseTable from '@/components/BaseTable';
import Layout from '@/components/Layout';
import NumberBlock from '@/components/NumberBlock';
import Title from '@/components/Title';

function IndexPage() {
    return (
        <Layout>
            <>
                <Grid item lg={12}>
                    <Paper>
                        <Box p={2}>
                            <TextField
                                id="standard-basic"
                                placeholder="Standard"
                                variant="standard"
                            />
                            <Button variant="contained">
                                <AddIcon />
                                Track New Task
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={12}>
                    <Title title="Заголовок" />
                </Grid>
                <NumberBlock />
                <NumberBlock />
                <NumberBlock />
                <Grid item lg={12}>
                    <Divider textAlign="left">
                        <Box p={2}>Some title</Box>
                    </Divider>
                    <BaseTable />
                </Grid>
            </>
        </Layout>
    );
}

export default IndexPage;
