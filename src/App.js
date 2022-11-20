import './App.css';
import './components/Navbar/Navbar.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/header/Header'
import Content from './components/content/Content'
import axios from 'axios'
axios.defaults.baseURL='https://api.themoviedb.org/3';
axios.defaults.params={
  api_key : 'b51b78b97af3007144fda068cb439a6d',
}
function App() {
  return (
  <div>
    <Navbar/>
    <Header/>
    <Content/>
  </div>
  );
}

export default App;
