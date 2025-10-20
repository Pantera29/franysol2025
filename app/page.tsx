import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventInfo from './components/EventInfo';
import Information from './components/Information';
import GiftList from './components/GiftList';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <EventInfo />
        <Information />
        <GiftList />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}