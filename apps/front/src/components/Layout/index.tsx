import { Box, Container, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import Menu from '@/components/Menu';

interface IProps {
    children: ReactElement;
}
const Layout: FC<IProps> = ({ children }) => (
    <Container maxWidth="xl">
        <h1 data-testid="main-header">Next.js starter pack</h1>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item lg={2}>
                    <Menu />
                </Grid>
                <Grid container item lg={10} spacing={2}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    </Container>
);

export default Layout;
