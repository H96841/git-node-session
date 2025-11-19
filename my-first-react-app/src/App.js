import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
    <Header title="האתר המגניב שלי"/>
     <h1>ברוך הבא לריאקט!</h1>
      <p>זו האפליקציה הראשונה שלי בריאקט.</p>
     <Counter/>
    </div>
  );
}

export default App;
