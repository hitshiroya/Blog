import { Header } from '../../components/header/Header';
import { Posts } from '../../components/posts/Posts';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './home.css';

export const Home = () => {
  return <div>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
        
      </div>
  </div>;
};
