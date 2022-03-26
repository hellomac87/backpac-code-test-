import StarRateComment from './StarRateComment';
import StarRate from './StarRate';

import styles from './index.module.css';
import clsx from 'clsx';

export type CardProps = {
    image: string;
    label: string;
    title: string;
    priceInfo?: {
        origin: number;
        priceSale?: number;
        saleRate?: string;
    };
    rate?: 1 | 2 | 3 | 4 | 5;
    direction?: CardDirectionType;
    comment?: string;
};

export type CardDirectionType = 'vertical' | 'horizontal';

function Card({ image, label, title, priceInfo, rate, direction = 'vertical', comment }: CardProps) {
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
                    {priceInfo && (
                        <div className={styles.priceWrap}>
                            {priceInfo.saleRate && <span className={styles.saleRate}>{priceInfo.saleRate}</span>}
                            <span className={styles.priceSale}>{priceInfo.priceSale || priceInfo.origin}원</span>
                            {priceInfo.priceSale && <span className={styles.priceOrigin}>{priceInfo.origin}원</span>}
                        </div>
                    )}
                </div>

                <div className={clsx(styles.rating, { [styles.visible]: Boolean(rate) })}>
                    <StarRate rate={rate} />
                    <StarRateComment comment={comment} />
                </div>
            </div>
        </div>
    );
}

export default Card;
