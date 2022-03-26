import Card from 'src/components/card';
import Title from 'src/components/common/Title';
import ViewItem from 'src/components/common/ViewItem';
import ViewList from 'src/components/common/ViewList';
import InputForm from 'src/components/InputForm';
import { dummyList01, dummyList02 } from 'src/constant/dummy';

function App() {
    return (
        <>
            <Title>Card UI</Title>
            <ViewList>
                {dummyList01.map((post) => (
                    <ViewItem width={'24%'} key={post.id}>
                        <Card
                            image={post.image}
                            name={post.name}
                            title={post.title}
                            comment={post.comment}
                            rate={post.rate}
                            priceInfo={post.priceInfo}
                        />
                    </ViewItem>
                ))}
            </ViewList>

            <ViewList>
                {dummyList02.map((post) => (
                    <ViewItem width={'49%'} key={post.id}>
                        <Card
                            image={post.image}
                            name={post.name}
                            title={post.title}
                            comment={post.comment}
                            rate={post.rate}
                            priceInfo={post.priceInfo}
                            direction={'horizontal'}
                        />
                    </ViewItem>
                ))}
            </ViewList>

            <Title>Input Form UI</Title>
            <ViewList>
                <ViewItem>
                    <InputForm value={'asdf'} />
                </ViewItem>

                <ViewItem>
                    <InputForm value={'defaultValue'} maxLength={50} />
                </ViewItem>

                <ViewItem>
                    <InputForm value={''} placeholder={'placeholder'} />
                </ViewItem>

                <ViewItem>
                    <InputForm value={''} placeholder={'placeholder maxLength'} maxLength={50} />
                </ViewItem>

                <ViewItem>
                    <InputForm value={'disabled'} placeholder={'placeholder'} maxLength={50} disabled />
                </ViewItem>

                <ViewItem>
                    <InputForm value={'readonly'} placeholder={'placeholder'} maxLength={50} readOnly />
                </ViewItem>

                <ViewItem>
                    <InputForm value={''} placeholder={'placeholder readonly'} maxLength={50} readOnly />
                </ViewItem>
            </ViewList>
        </>
    );
}

export default App;
