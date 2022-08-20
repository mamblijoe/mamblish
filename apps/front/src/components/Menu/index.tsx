import AddIcon from '@mui/icons-material/Add';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Box, Paper } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import cn from './style.module.sass';

const MENU_LINKS = [
    {
        id: 1,
        href: '#',
        label: 'Ссылка 1',
        Icon: AvTimerIcon,
    },
    {
        id: 2,
        href: '#',
        label: 'Ссылка 2',
        Icon: AddIcon,
    },
];

const Menu = () => (
    <Paper>
        <Box p={2} className={cn.menu}>
            {MENU_LINKS?.map(({ id, href, label, Icon }) => (
                <Link href={href} key={id}>
                    <a className={cn.link}>
                        <span className={cn.icon}>
                            <Icon />
                        </span>
                        <span className={cn.label}> {label}</span>
                    </a>
                </Link>
            ))}
        </Box>
    </Paper>
);

export default Menu;
