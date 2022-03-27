import { useMedia } from 'react-use';

import { products01, products02 } from 'src/constant/mock';

import Layout from 'src/components/common/Layout';
import CardTemplate from 'src/components/card/CardTemplate';
import Title from 'src/components/common/Title';
import ViewItem from 'src/components/common/ViewItem';
import ViewList from 'src/components/common/ViewList';
import InputForm from 'src/components/InputForm';
import GlobalNavigation from './components/common/GlobalNavigation';

function App() {
    const isMobile = useMedia('(max-width: 768px)');
    return (
        <>
            <GlobalNavigation />
            <Layout>
                <Title>Card UI</Title>
                <ViewList type={isMobile ? 'half' : 'quarter'}>
                    {products01.map((post) => (
                        <ViewItem key={post.id}>
                            <CardTemplate
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

                <ViewList type={isMobile ? 'full' : 'half'}>
                    {products02.map((post) => (
                        <ViewItem key={post.id}>
                            <CardTemplate
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
                </ViewList>
            </Layout>
        </>
    );
}

export default App;
