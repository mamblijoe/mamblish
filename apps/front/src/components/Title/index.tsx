import { Box, Divider } from '@mui/material';
import React, { FC } from 'react';

import cn from './style.module.sass';

interface IProps {
    title: string;
}
const Title: FC<IProps> = ({ title }) => (
    <Divider textAlign="center">
        <Box p={2}>
            <div className={cn.title}>{title}</div>
        </Box>
    </Divider>
);

export default Title;
