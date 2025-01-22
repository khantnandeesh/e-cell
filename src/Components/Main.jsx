import React from 'react'

const Home = () => {
    return (
        <div className=' lg:w-[85%] md:w-[93%]   mt-16 md:mt-11   mx-auto flex gap-9 md:justify-between md:gap-[20px] justify-center flex-wrap '>

            <div className='h-[46vh] w-[46vh] md:w-[100%] md:h-[45vw] bg-gradient-to-br rounded-lg from-[#3300FF] to-[#FA00FF] shadow-[0_0_4px_4px_rgba(0,0,0,0.25)]' ></div>
            <div className='h-[46vh]  md:h-[45vw] md:w-[50%] md:flex-1 rounded-md overflow-hidden border-black border-[1px] '>
                <img src="https://s3-alpha-sig.figma.com/img/f451/3151/c543be76d658fa7cf401125e9cef6f94?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umhrmf3ve5VwHjU9x-4lqn9VoteG~xmqFFAJ1NFlSAPT2F1K~eCqdTncMldvRuSwe7MGXpMkWCK9BVDlwoLxeKQ8MOk22FzwjwYl~dXpuh2U35tx1RvrkuHzRks0J7qpvRw~3LguA3Xi4mQjmUtCMqf9V7DbbaYO38HIqgj4iJ1JJ6u05G6GZZI5IqORNTSqkpUoRjfh1YuRICXgk79qz0718w~phQ2SE3Bmh1NCvyTjFecnU6ajWd6Bjj-mQ0gqKBCsaTsYA-X9YzyKyRkyCY6r8bDTCU43ejpA3U6bhERIx1CEgfUCQwTsnlKkwvdY0R56TLm38CkTc38cvbgyqQ__" className='h-full  object-cover' alt="image" />
            </div>

            <div className='h-[46vh] md:h-[45vw] md:w-[50%] md:flex-1   w-[46vh] bg-[#D9D9D9] rounded-lg p-4 flex justify-center items-center flex-wrap gap-2 shadow-[0_0_2px_4px_rgba(0,0,0,0.25)]'>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]' ></div>
                <div className='h-[30%] rounded-lg w-[30%] bg-[#00477A]' ></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]'></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]'></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]'></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]'></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]'></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#00477A]'></div>
                <div  className='h-[30%] rounded-lg w-[30%] bg-[#7A0000]'></div>
            </div>
        </div>
      )
}

export default Home
