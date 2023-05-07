import { useState } from 'react';
import './App.css';
import { Footer } from './Component/Footer/Footer';
import { HomeLeftComponent } from './Component/HomeLeftComponent';
import { HomeRightComponent } from './Component/HomeRightComponent';
import { Navbar } from './Component/Navbar/Navbar';

function App() {
  const [isDark,setIsDark] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <div className='flex min-h-screen'>
        <HomeLeftComponent isDark={isDark}/>
        <HomeRightComponent setIsDark={setIsDark} isDark={isDark}/>
      </div>
      <Footer isDark={isDark}/>
    </>
  );
}

export default App;
