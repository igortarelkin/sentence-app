import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartingPage from './questions/StartingPage/StartingPage';
import SecondQuestion from './questions/SecondQuestion/SecondQuestion';
import ThirdQuestion from './questions/ThirdQuestion/ThirdQuestion';
import FourthQuestion from './questions/FourthQuestion/FourthQuestion';
import FinishPage from './questions/FinishPage/FinishPage';
import { Provider } from "react-redux";
import { store } from "./store/Store";
import FirstQuestion from './questions/FirstQuestion/FirstQuestion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <Provider store={store}>
  <Router>    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="startingpage" element={<StartingPage />} />
        <Route path="question01" element={<FirstQuestion/>} />
        <Route path="question02" element={<SecondQuestion/>} />
        <Route path="question03" element={<ThirdQuestion />} />
        <Route path="question04" element={<FourthQuestion />} />
        <Route path="finishpage" element={<FinishPage />} />
      </Routes>
    </Router>
   </Provider>
);
