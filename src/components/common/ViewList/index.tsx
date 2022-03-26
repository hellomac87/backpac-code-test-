import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './ViewList.module.css';

type Props = {
    type?: 'full' | 'half' | 'quarter';
};

function ViewList({ children, type = 'full' }: PropsWithChildren<Props>) {
    return <ul className={clsx(styles.container, styles[type])}>{children}</ul>;
}

export default ViewList;
