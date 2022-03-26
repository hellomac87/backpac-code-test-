import React from 'react';

import styles from './Title.module.css';

type Props = {};

function Title({ children }: React.PropsWithChildren<Props>) {
    return <h1 className={styles.container}>{children}</h1>;
}

export default Title;
