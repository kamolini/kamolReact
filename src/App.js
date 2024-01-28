import './App.css';
//import Student from './Student';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src='./p/k.jpg' 
          style={{
            width: 200,
            height: 200,
            borderRadius: 100
          }} 
          alt='Kamolesh Bachar'
        />

        <h1>Kamolesh Bachar</h1>
      </header>
      {/* <Student></Student> */}
      <Footer/>
    </div>
  );
}

export default App;
