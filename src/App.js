import SideBar from 'components/sections/SideBar';
import './App.css';
import Layout from 'components/layout/Layout';
import Content from 'components/layout/Content';

function App() {
  return (
    <Layout>
      <SideBar />
      <Content />
    </Layout>
  );
}

export default App;
