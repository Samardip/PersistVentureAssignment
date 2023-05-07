import { useState } from 'react';
import './App.css';
import { Footer } from './Component/Footer/Footer';
import { HomeLeftComponent } from './Component/HomeLeftComponent';
import { HomeRightComponent } from './Component/HomeRightComponent';
import { Navbar } from './Component/Navbar/Navbar';

function App() {
  const [isDark,setIsDark] = useState(false);
  const [showSideComponent,setShowSideComponent] = useState(true);
  return (
    <>
      {/* <Navbar /> */}
      <div className='flex min-h-screen'>
        <HomeLeftComponent isDark={isDark} setShowSideComponent={setShowSideComponent} showSideComponent={showSideComponent}/>
        <HomeRightComponent setIsDark={setIsDark} isDark={isDark} showSideComponent={showSideComponent}/>
      </div>
      <Footer isDark={isDark}/>
    </>
  );
}

export default App;
