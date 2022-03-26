import { PropsWithChildren } from 'react';

import styles from './Layout.module.css';

type Props = {};

function Layout({ children }: PropsWithChildren<Props>) {
    return <section className={styles.container}>{children}</section>;
}

export default Layout;
