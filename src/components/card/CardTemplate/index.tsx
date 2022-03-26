import clsx from 'clsx';

import { convertToWon } from 'src/utils/price';
import { CardDirection } from 'src/types/card';
import { Post } from 'src/types/post';

import StarRateComment from 'src/components/card/StarRateComment';
import StarRate from 'src/components/card/StarRate';

import styles from './CardTemplate.module.css';

export type Props = Omit<Post, 'id'> & {
    direction?: CardDirection;
};

function CardTemplate({ image, name, title, priceInfo, rate, direction = 'vertical', comment }: Props) {
    const isVertical = direction === 'vertical';
    const isHorizontal = direction === 'horizontal';
    return (
        <div className={clsx(styles.container, styles[direction])}>
            <div
                className={clsx(
                    styles.thumbnail,
                    { [styles.thumbnailVertical]: isVertical },
                    { [styles.thumbnailHorizontal]: isHorizontal }
                )}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div
                className={clsx(
                    styles.body,
                    { [styles.bodyVertical]: isVertical },
                    { [styles.bodyHorizontal]: isHorizontal }
                )}
            >
                <div
                    className={clsx(
                        styles.info,
                        { [styles.infoVertical]: isVertical },
                        { [styles.infoHorizontal]: isHorizontal }
                    )}
                >
                    <div className={styles.name}>{name}</div>
                    <div className={styles.title}>{title}</div>
                    {priceInfo && (
                        <div className={styles.priceWrap}>
                            {priceInfo.saleRate && <span className={styles.saleRate}>{priceInfo.saleRate}%</span>}
                            <span className={styles.priceSale}>
                                {convertToWon(priceInfo.priceSale || priceInfo.origin)}
                            </span>
                            {priceInfo.priceSale && (
                                <span className={styles.priceOrigin}>{convertToWon(priceInfo.origin)}</span>
                            )}
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

export default CardTemplate;
