import clsx from 'clsx';
import { FaStar } from 'react-icons/fa';

import styles from './StarRate.module.css';

type Props = {
    rate?: 1 | 2 | 3 | 4 | 5;
};

const starCount = 5;

function StarRate({ rate }: Props) {
    if (!rate) {
        return null;
    }

    return (
        <div className={styles.container}>
            {[...Array(starCount)]
                .map((_, i) => i + 1)
                .map((idx) => {
                    const active = idx <= rate;
                    return <FaStar className={clsx(styles.star, { [styles.active]: active })} key={idx} />;
                })}
        </div>
    );
}

export default StarRate;
