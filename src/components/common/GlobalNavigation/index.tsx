import { ReactComponent as Logo } from 'src/assets/svg/idusLogo.svg';

import styles from './GlobalNavigation.module.css';

function GlobalNavigation() {
    return (
        <header className={styles.container}>
            <div className={styles.positionLayer}>
                <Logo />
            </div>
        </header>
    );
}

export default GlobalNavigation;
