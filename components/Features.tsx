import Image from 'next/image';

const Features = () => {
  return (
    <div className='flex flex-col items-center min-h-screen px-4 py-8 sm:px-6 lg:px-16'>
      <h1 className='font-extrabold text-2xl sm:text-5xl lg:text-7xl text-center mb-8 lg:mb-16'>
        Our Special Services
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 w-full justify-items-center'>
        <div className='flex flex-col bg-[#5159bb] w-full max-w-xs sm:max-w-sm lg:max-w-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 text-center text-white'>AI Advisory</h2>
          <p className='text-md sm:text-lg lg:text-xl mt-2 mb-4 font-medium text-center text-gray-200'>AI Powered Technology</p>
          <Image className='rounded-lg mx-auto my-2' src="/ai1.png" width={240} height={180} alt="AI Advisory" />
          <button className='bg-white text-[#5159bb] rounded-lg w-full h-12 font-bold mt-4 mb-2 transition-colors duration-300 hover:bg-[#3f48a1] hover:text-white'>
            <a href="/advisory">Get Started</a>
          </button>
        </div>
        <div className='flex flex-col bg-[#5159bb] w-full max-w-xs sm:max-w-sm lg:max-w-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 text-center text-white'>Best Design</h2>
          <p className='text-md sm:text-lg lg:text-xl mt-2 mb-4 font-medium text-center text-gray-200'>High Quality Apartments</p>
          <Image className='rounded-lg mx-auto my-2' src="/id.png" width={240} height={180} alt="Best Design" />
          <button className='bg-white text-[#5159bb] rounded-lg w-full h-12 font-bold mt-4 mb-2 transition-colors duration-300 hover:bg-[#3f48a1] hover:text-white'>
            <a href="/apartments">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
