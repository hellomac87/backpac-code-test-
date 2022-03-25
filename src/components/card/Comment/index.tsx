import styles from './index.module.css';

type Props = {
    comment?: string;
};

function Comment({ comment }: Props) {
    if (!comment) {
        return null;
    }
    return <div className={styles.container}>{comment}</div>;
}

export default Comment;
