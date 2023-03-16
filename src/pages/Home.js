import React from 'react';
import Footer from '../components/admin/footer/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-danger">Home</h1>
      <Footer />
    </div>
  )
}

export default Home
