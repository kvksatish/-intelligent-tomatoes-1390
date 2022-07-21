import logo from './logo.svg';
import './App.css';
import Allroutes from './Allroutes';
import Header from './components/Header';
import HeadlinesSlider from './components/HeadlinesSlider';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';

function App() {
  return (
    <div className="App">
      <Header />
      <HeadlinesSlider />
      <div className='mainbdy'>
        <Leftbar />
        <Allroutes />
        <Rightbar />
      </div>


    </div>
  );
}

export default App;
