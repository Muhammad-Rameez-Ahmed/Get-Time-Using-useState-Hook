import logo from './logo.svg';
import './App.css';
import Navbar from './Components.js/Navbar';
import Clock from './Components.js/Clock';




function App() {
  const today_Date=new Date().toLocaleDateString();

  return (
    <>
    < Navbar today_Date={ today_Date}/>
    
    



    <div className='App'>
    <Clock/>
    </div>
    
  

    
    </>
    
    
  );
}


export default App;
