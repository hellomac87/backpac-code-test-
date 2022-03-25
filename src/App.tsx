import Card from './components/card';
import Title from './components/common/Title';
import ViewItem from './components/common/ViewItem';

function App() {
    return (
        <>
            <Title>Card UI</Title>
            <ViewItem width={300}>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                />
            </ViewItem>
            <ViewItem width={400}>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    rate={1}
                    comment={
                        '전복이 오동통통해서 맛있네요 회랑 같이 구워서 먹으려고 샀어요 덕분에 맛있는 식사했습니다^^ 감사합니다 손질이 다 잘돼있어서 편하게 요리할 수 있네요자주 시켜 먹을께요'
                    }
                />
            </ViewItem>
            <ViewItem width={500}>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    rate={3}
                />
            </ViewItem>
            <ViewItem width={500}>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    direction={'horizontal'}
                    rate={4}
                />
            </ViewItem>
            <ViewItem width={300}>
                <Card
                    image='https://image.idus.com/image/files/80a2555dae5d4afebadc9f38aed072f4_512.jpg'
                    label='유얼어데이 디퓨저'
                    title='[웰컴딜]후기대박/재구매1위 유얼어데이 시나몬 디퓨저'
                    direction={'horizontal'}
                    rate={4}
                    comment={
                        '전복이 오동통통해서 맛있네요 회랑 같이 구워서 먹으려고 샀어요 덕분에 맛있는 식사했습니다^^ 감사합니다 손질이 다 잘돼있어서 편하게 요리할 수 있네요자주 시켜 먹을께요'
                    }
                />
            </ViewItem>
        </>
    );
}

export default App;
