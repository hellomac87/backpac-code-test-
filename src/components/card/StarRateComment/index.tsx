import styles from './StarRateComment.module.css';

type Props = {
    comment?: string;
};

function StarRateComment({ comment }: Props) {
    if (!comment) {
        return null;
    }
    return <p className={styles.container}>{comment}</p>;
}

export default StarRateComment;
