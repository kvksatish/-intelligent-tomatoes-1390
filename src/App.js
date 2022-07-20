import logo from './logo.svg';
import './App.css';
import Allroutes from './Allroutes';
import Header from './components/Header';
import HeadlinesSlider from './components/HeadlinesSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <HeadlinesSlider />
      <Allroutes />

    </div>
  );
}

export default App;
