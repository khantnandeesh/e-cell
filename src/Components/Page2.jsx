import React, { useEffect, useState } from 'react';
import Photo from '../assets/self.png'
import Photo2 from '../assets/self2.png'
import   SQAudio from '../assets/squid_games_3.mp3'
import style from './style.module.css'
import FONT from '../assets/SQFONT.ttf'
import './Page2.css'
function Page2() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio( SQAudio ));
    const [first,setFirst]=useState(true);

  useEffect(() => {
    
   
        audio.loop = true;
    return () => {
      audio.pause();
    };


  
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Music Control */}
      <button 
        onClick={toggleMusic}
        className="fixed top-5 right-4 z-50 bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-all duration-300"
      >
        {isPlaying ? '🔊' : '🔈'}
      </button>
       {/* Nav bAr */}
      <nav className="w-full bg-gradient-to-br from-green-700  to-green-900 px-6 py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 onClick={()=>{window.location.href="/"}} className="text-5xl font-bold squid-font text-white cursor-pointer">	&#9711; &#9651; &#9634;  </h1>
        <div className="flex gap-[5vw] sqfont">
          <NavItem text="Home" href="/" />
          <NavItem text="About Me" href="/about" />
        </div>
      </div>
    </nav>




      {/* Hero Section */}
      <section className="min-h-screen w-screen flex items-center justify-between relative overflow-hidden bg-gradient-to-b from-pink-600 to-black">

        <div className="container h-[48vh] mx-auto px-4 text-center relative z-10 flex flex-col  justify-center items-center gap-[8vh]">
          <h1 className="text-5xl md:text-8xl md:text-[6vw] font-bold animate-pulse tracking-wider sqfont"
              style={{
                textShadow: '0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f',
               
              }}>
                Khant Nandeesh
          </h1>
          <div className="inline-block ">
            <div className="border-[0.9vw] outline outline-[0.8vw] outline-[#ffffff] h-[9vw] scale-y-140 w-[22vw] border-[#114c3a] bg-[#196454] px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/50 flex items-center justify-center">
              <div className="text-[6vw] font-bold md:text-[7vw] sqfont ">3160</div>
            </div>
          </div>
          <div className="squid-shapes absolute inset-0 -z-10">
            <div className="circle"></div>
            <div className="triangle"></div>
            <div className="square"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-[100vh] md:h-screen w-screen  py-20 bg-gradient-to-r from-pink-900 to-black flex flex-col justify-start md:justify-center">
        <div className="container  mx-auto px-4 flex flex-col justify-start   md:justify-center">
            <h2 className="text-[5vw] font-bold mb-12 text-center"
                style={{ fontFamily: "'Nunito Sans'" }}>
                About Me
            </h2>
          <div className="w-full flex-wrap mx-auto md:flex-nowrap  flex justify-between  md:justify-around items-center ">
                <div className="space-y-6   md:h-full w-[80%] md:w-[40%] flex flex-col justify-start md:justify-around  mx-auto  md:items-center">
                <p className={`text-md md:text-2xl  tracking-widest leading-[5vw] md:leading-[2.6vw] text-center sqfont`}>
                    Welcome to my Squid Game-inspired portfolio! I'm Khant Nandeesh (20233160) , passionate about creating unique digital experiences
                    that push the boundaries of web development. With a keen eye for detail and a love for innovative solutions,
                    I strive to create impactful and memorable digital experiences.
                </p>

                <button onClick={()=>{window.location.href=("https://www.instagram.com/khant_nandeesh")}} className='px-2 py-2 md:py-5 mx-auto rounded-xl text-[5vw] md:text-[1vw] font-bold bg-green-800 w-[60%] md:w-[80%] hover:text-gray-800'>Lets Connect!</button>
                
                </div>

                <div className="w-[70%] mx-auto mt-[10vh] md:mt-0  -top-1/2  flex-shrink border-2 border-emerald-500  md:h-full md:w-[40%]  overflow-hidden rounded-lg shadow-2xl shadow-pink-500/50 transform hover:scale-105 transition-all duration-200 flex flex-nowrap">
                {console.log(first)
                }
                <img 
                    src={Photo}
                    alt="Profile"
                    className={`${style.first} h-[60vw] md:w-full md:h-full md:min-h-full object-cover transition-all duration-700 ease-in-out 
                    `}
                />
                <img 
                    src={Photo2}
                    alt="Profile"
                    className={` ${style.second} h-[60vw] md:w-full md:h-full md:min-h-[100%] object-cover transition-all duration-700 ease-in-out 
                    `}
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t tra from-black/70 to-transparent"></div> */}
                </div>

          </div>
        </div>
      </section>
    </div>
  );
}


const NavItem = ({ text, href }) => {
    return (
      <a
        href={href}
        className="hidden md:block text-2xl font-medium text-white hover:text-gray-200 transition"
      >
        {text}
      </a>
    );
  };
export default Page2;