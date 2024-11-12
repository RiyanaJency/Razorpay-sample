import React from 'react';
 import background from './image/CSK.jpg'; // Adjust path if necessary

function Home() {
  return (
    <>
       <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Adjust height as needed
          color: '#fff'
        }}
      >  
      </div>
    <h1>HOME PAGE</h1>
    </>
  );
}

export default Home;