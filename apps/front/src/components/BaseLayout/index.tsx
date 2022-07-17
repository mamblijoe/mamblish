import React, { FC, ReactElement } from 'react';

import cn from './style.module.sass';

interface IProps {
    children: ReactElement;
}
export const BaseLayout: FC<IProps> = ({ children }) => (
    <div className={cn.container}>{children}</div>
);

export default BaseLayout;
