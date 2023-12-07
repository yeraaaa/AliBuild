import Image from 'next/image';

const Features = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
        <h1 className='font-extrabold text-6xl'>Special services for you</h1>
        <div className='flex justify-center flex-wrap mt-6'>
            <div className='flex flex-col bg-gradient-to-b from-[#968fe4] to-[#6146c0] w-[480px] h-[660px] items-center m-4 rounded-lg bg-cover border-solid font-medium text-black'>
                <h2 className='text-4xl font-bold mt-3'>AI Advisory</h2>
                <p className='text-2xl font-semibold'>AI Powered Technology</p>
                <Image className='rounded-lg m-2 hover:w-[315px] transition-[5s]' src="/pic5.jpg" width={300} height={300} alt="photo" />
                <button className='bg-[#adb2fc] hover:bg-[#0BB8C8] transition-[5s] rounded-lg mt-2 w-32 h-16 font-bold'><a href="/">Get Started</a></button>
            </div>
            <div className='flex flex-col bg-gradient-to-b from-[#968fe4] to-[#6146c0] w-[480px] h-[660px] items-center m-4 rounded-lg bg-cover border-solid font-medium text-black'>
                <h2 className='text-4xl font-bold mt-3'>Visual Design</h2>
                <p className='text-2xl font-semibold'>3D Modeled Apartments</p>
                <Image className='rounded-lg m-2 hover:w-[315px] transition-[5s]' src="/pic6.jpg" width={300} height={300} alt="photo" />
                <button className=' bg-[#adb2fc] hover:bg-[#0BB8C8] transition-[5s] rounded-lg mt-2 w-32 h-16 font-bold'><a href="/apartments">Get Started</a></button>
            </div>
        </div>
    </div>
  )
}

export default Features