import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/pages/landing_page';
import RegisterParticipant from './components/pages/register_participant';
import QueueCheck from './components/pages/queue_check';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={< LandingPage />}/>
          <Route path='/register/participant/:id' element={< RegisterParticipant />} /> 
          <Route path='/participant/queue_check' element={< QueueCheck />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
