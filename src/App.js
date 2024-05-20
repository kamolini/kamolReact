import './App.css';
import Student from './Student';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Profile/>
      </header>
      
      <Student></Student>
      <Footer/>
    </div>
  );
}

export default App;
