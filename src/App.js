import SideBar from 'components/sections/SideBar';
import './App.css';
import Layout from 'components/layout/Layout';
import Content from 'components/layout/Content';
import Player from 'components/sections/Player';

function App() {
  return (
    <Layout>
      <SideBar />
      <Content />
      <Player />
    </Layout>
  );
}

export default App;
