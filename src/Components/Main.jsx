import React, { useState } from 'react'

const Home = () => {

    let [currColor,setColor]=useState([false,false,false,false,false,false,false,false]);
    let [history,setHistory]=useState([]);
    console.log(history);


    async function reset() {

        for (let index of history) {
        
            setColor(arr => arr.map((obj, i) => (i === index ? false : obj)));
    
       
            await new Promise((res) => setTimeout(res, 400));
        }


        setHistory([]);
    }

    return (
        <div className=' lg:h-[26.73vw] lg:w-[83.54vw]  mt-[3.5623vw] lg:mt-[3.47vw] md:mt-[6.45vw] gap-[3.18vw]     mx-auto flex  flex-col-reverse  items-center md:flex-row lg:flex-row lg:flex-nowrap   md:justify-between   md:flex-wrap lg:gap-[0]  md:gap-[2.419vw]  md:h-[99vw] md:w-[92.87vw]'>

            <div className='h-[63.61vw] w-[63.61vw] lg:h-[26.73vw] lg:w-[26.73vw] lg:shrink-0 lg:max-w-[26.73vw] lg:max-h-[26.73vw]  md:w-[100%] md:h-[51.74vw] bg-gradient-to-br rounded-3xl from-[#3300FF] to-[#FA00FF] shadow-[0_0_4px_4px_rgba(0,0,0,0.25)]' ></div>
            <div className='h-[63.61vw] w-[63.61vw] lg:h-[26.73vw] lg:w-[26.73vw] lg:shrink-0 lg:max-w-[26.73vw] lg:max-h-[26.73vw]   md:h-[45.29vw] md:w-[45.29vw]  rounded-3xl overflow-hidden border-black border-[2px] bg-[#F7F7F7]'>
                <img src="https://s3-alpha-sig.figma.com/img/f451/3151/c543be76d658fa7cf401125e9cef6f94?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umhrmf3ve5VwHjU9x-4lqn9VoteG~xmqFFAJ1NFlSAPT2F1K~eCqdTncMldvRuSwe7MGXpMkWCK9BVDlwoLxeKQ8MOk22FzwjwYl~dXpuh2U35tx1RvrkuHzRks0J7qpvRw~3LguA3Xi4mQjmUtCMqf9V7DbbaYO38HIqgj4iJ1JJ6u05G6GZZI5IqORNTSqkpUoRjfh1YuRICXgk79qz0718w~phQ2SE3Bmh1NCvyTjFecnU6ajWd6Bjj-mQ0gqKBCsaTsYA-X9YzyKyRkyCY6r8bDTCU43ejpA3U6bhERIx1CEgfUCQwTsnlKkwvdY0R56TLm38CkTc38cvbgyqQ__" className='h-full w-full  object-contain' alt="image" />
            </div>

            <div     className='h-[63.61vw] w-[63.61vw]  lg:h-[26.73vw] lg:shrink-0 lg:max-w-[26.73vw] lg:max-h-[26.73vw]  lg:w-[26.73vw] md:w-[45.026vw] md:h-[45.29vw] md:w-max-[45.026vw] md:h-max-[45.29vw] gap-[1.15vw]  lg:gap-[0.486vw]  md:gap-[0.82vw]  bg-[#D9D9D9] rounded-3xl  flex justify-center items-center flex-wrap  shadow-[inset_0_0_4px_4px_rgba(0,0,0,0.25)] px-[5.86vw] py-[5.70vw]   md:px-[4.15vw] md:py-[4.06vw] lg:px-[2.465vw] lg:py-[2.395vw]'>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(0) == -1 ? [...history, 0] : history);
                            setColor(arr => arr.map((obj, i) => (i == 0 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[0] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[20ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(1) == -1 ? [...history, 1] : history);
                            setColor(arr => arr.map((obj, i) => (i == 1 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[1] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(2) == -1 ? [...history, 2] : history);
                            setColor(arr => arr.map((obj, i) => (i == 2 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[2] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(3) == -1 ? [...history, 3] : history);
                            setColor(arr => arr.map((obj, i) => (i == 3 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[3] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(4) == -1 ? [...history, 4] : history);
                            setColor(arr => arr.map((obj, i) => (i == 4 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[4] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(5) == -1 ? [...history, 5] : history);
                            setColor(arr => arr.map((obj, i) => (i == 5 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[5] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(6) == -1 ? [...history, 6] : history);
                            setColor(arr => arr.map((obj, i) => (i == 6 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[6] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                        <div 
                        onClick={() => {
                            setHistory(() => history.indexOf(7) == -1 ? [...history, 7] : history);
                            setColor(arr => arr.map((obj, i) => (i == 7 ? true : obj)));
                        }}
                        className={`h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] ${currColor[7] ? 'bg-[#7A0000]' : 'bg-[#00477A]'} transition-all ease-in-out duration-[400ms] delay-[100ms]`}
                        ></div>

                <div onClick={()=>{reset();}}    className='h-[16.52vw] w-[16.52vw] lg:h-[6.94vw] rounded-xl md:w-[11.69vw] md:h-[11.768vw] lg:w-[6.94vw] bg-[#7A0000]'></div>
            </div>
        </div>
      )
}
  
export default Home
