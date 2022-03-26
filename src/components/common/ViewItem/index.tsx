import React from 'react';

import styles from './index.module.css';

type Props = {
    width?: string;
};

function ViewItem({ children, width }: React.PropsWithChildren<Props>) {
    return (
        <li className={styles.container} style={{ width }}>
            {children}
        </li>
    );
}

export default ViewItem;
