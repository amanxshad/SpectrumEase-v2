import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/startPage';
import Interface from './pages/interface';
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import ProtectedPage from './pages/ProtectedPage';
import CrudData from './pages/crudData';
import Tracker from './pages/tracker';
import GuidePage from './pages/GuidePage';
import './App.scss';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/guide" element={<GuidePage/>} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path='/cruddata' element={<CrudData />} />
        <Route 
          path="/Sign-in"
          element={<SignIn redirectUrl={'/protected'} routing="path" path="/Sign-in" />}
        />

        <Route 
          path="/Sign-up"
          element={<SignUp redirectUrl={'/protected'} routing="path" path="/Sign-up" />}
        />

        <Route 
          path="/protected"
          element={
            <>
            <SignedIn>
              <ProtectedPage/>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
            </>
          }
        />

      </Routes>
  );
};

export default App;