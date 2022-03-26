import React from 'react';

import styles from './index.module.css';

type Props = {};

function ViewItem({ children }: React.PropsWithChildren<Props>) {
    return <li className={styles.container}>{children}</li>;
}

export default ViewItem;
