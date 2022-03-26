import { PropsWithChildren } from 'react';

import styles from './index.module.css';

type Props = {};

function ViewList({ children }: PropsWithChildren<Props>) {
    return <ul className={styles.container}>{children}</ul>;
}

export default ViewList;
