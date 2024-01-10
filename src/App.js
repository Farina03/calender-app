import { useState } from 'react';
import './App.css';
// import './components/MainPage'
import MainPage from './components/MainPage/MainPage';
import { addDays, format, startOfWeek } from 'date-fns';


function App() {
  
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
