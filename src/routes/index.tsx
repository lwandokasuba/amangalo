import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Footer, NavBar } from '../components';
import ErrorPage from './ErrorPage';
import Home from './Home';
import { League, LeagueDetails } from './League';
import Login from './Login';
import Register from './Register';
import { Tournament, TournamentDetails } from './Tournament';

export default function Root() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="league" element={<League />} />
        <Route path="league/:leagueId" element={<LeagueDetails />} />
        <Route path="tournament" element={<Tournament />} />
        <Route path="tournament/:tournamentId" element={<TournamentDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
