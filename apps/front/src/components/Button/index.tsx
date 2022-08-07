import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.sass';

interface IProps {
    primary?: boolean;
    backgroundColor?: string;

    size?: 'small' | 'medium' | 'large';

    label: string;

    onClick?: () => void;
}
const Button: FC<IProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,

    ...props
}) => (
    <button
        type="button"
        className={clsx(cn.btn, cn[size], primary ? cn.primary : cn.secondary)}
        style={{ backgroundColor }}
        {...props}
    >
        {label}
    </button>
);

export default Button;
