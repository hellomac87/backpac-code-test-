import Comment from './Comment';
import StarRate from './StarRate';

import styles from './index.module.css';
import clsx from 'clsx';

export type CardProps = {
    image: string;
    label: string;
    title: string;
    rate?: 1 | 2 | 3 | 4 | 5;
    direction?: CardDirectionType;
    comment?: string;
};

export type CardDirectionType = 'vertical' | 'horizontal';

function Card({ image, label, title, rate, direction = 'vertical', comment }: CardProps) {
    return (
        <div className={clsx(styles.container, styles[direction])}>
            <div
                className={clsx(
                    styles.thumbnail,
                    { [styles.thumbnailVertical]: direction === 'vertical' },
                    { [styles.thumbnailHorizontal]: direction === 'horizontal' }
                )}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.body}>
                <div className={styles.info}>
                    <label className={styles.label}>{label}</label>
                    <div className={styles.title}>{title}</div>
                </div>

                <div className={clsx(styles.rating, { [styles.visible]: Boolean(rate) })}>
                    <StarRate rate={rate} />
                    <Comment comment={comment} />
                </div>
            </div>
        </div>
    );
}

export default Card;
