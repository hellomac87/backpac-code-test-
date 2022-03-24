import React from 'react';

import styles from './index.module.css';

type Props = {
    width?: number;
};

function ViewItem({ children, width }: React.PropsWithChildren<Props>) {
    return (
        <div className={styles.container} style={{ width }}>
            {children}
        </div>
    );
}

export default ViewItem;
