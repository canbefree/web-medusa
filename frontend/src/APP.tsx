import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from './Pages/Main';
import LayOutPage from './Pages/Layout';

import moment from 'moment';
import { Routes, Route, Link } from "react-router-dom";
import Test from './component/test';
import {
  BrowserRouter
} from "react-router-dom";

moment.locale('en');

function App() {
  const [date, setDate] = useState(null);

  const debug = (value: any) => {
    console.log(date)
  }

  const getDate = (date: any): string => {
    date = date as unknown as moment.Moment
    if (date) {
      return date.format('YYYY年MM月DD日')
    }
    return "未选择"
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<LayOutPage />} />
      </Routes>
    </div>
  );

  function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

}




export default App;
