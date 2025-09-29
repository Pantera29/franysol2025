import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
        <EventInfo />
        <Information />
        <GiftList />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}