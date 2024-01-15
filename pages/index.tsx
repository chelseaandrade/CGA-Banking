import React from 'react';

function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("path/to/coins.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}></div>
  );
}

// Home Page/Landing Page
export default Home;