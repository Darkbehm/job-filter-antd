import styled, { StyledComponent } from '@emotion/styled';
import { Layout } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';
import { Provider } from 'react-redux';
import './App.less';
import { FilterCard } from './components/FilterCard';
import { Jobs } from './components/Jobs';
import store from './store/store';

const { Header, Content, Footer } = Layout;

const Head: StyledComponent<BasicProps> = styled(Header)`
  background: url(/images/bg-header-desktop.svg);
  width: 100%;
  height: 150px;
  z-index: 0;
  background-color: hsl(180, 29%, 50%);
`;

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <Head />
        <Content style={{
          background: "hsl(180, 52%, 96%)"
        }}>
          <FilterCard />
          <Jobs />
        </Content>
        <Footer style={{
          textAlign: 'center',
          background: "hsl(180, 52%, 96%)"
        }}>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://www.linkedin.com/in/billy-enrique-herculano-madrid-4b3655168/" target="_blank" rel="noreferrer">Billy Herculano</a>.
          </div>
        </Footer>
      </Layout>
    </Provider>
  )
};


export default App;