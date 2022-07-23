import './App.css';
import Allroutes from './Allroutes';
import Header from './components/Header';
import HeadlinesSlider from './components/HeadlinesSlider';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeadlinesSlider />
      <div className='mainbdy'>
        <div><Leftbar /></div>
        <div> <Allroutes /></div>
        <div><Rightbar /></div>



      </div>
      <Footer />

    </div>
  );
}

export default App;
