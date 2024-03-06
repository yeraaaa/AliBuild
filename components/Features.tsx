import Image from 'next/image';

const Features = () => {
  return (
    <div className='flex flex-col items-center min-h-screen sm:px-4 md:px-8 lg:px-16 py-8'>
    <h1 className='font-extrabold text-xl sm:text-5xl lg:text-7xl text-center sm:mb-8 lg:mb-16'>Our Special Services</h1>
    <div className='flex flex-wrap justify-center mt-8'>
        <div className='flex flex-col bg-[#5159bb] w-full sm:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 mt-4 rounded-lg bg-cover border-solid font-medium text-black items-center'>
            <h2 className='text-xl sm:text-2xl lg:text-4xl font-bold mt-3 text-center'>AI Advisory</h2>
            <p className='text-md sm:text-lg lg:text-2xl mt-1 font-medium text-center'>AI Powered Technology</p>
            <Image className='rounded-lg mx-auto my-2' src="/ai1.png" width={240} height={180} alt="photo" />
            <button className='bg-[#fff] rounded-lg w-full sm:w-24 lg:w-48 h-12 font-bold mb-2'><a href="/advisory">Get Started</a></button>
        </div>
        <div className='flex flex-col bg-[#5159bb] w-full sm:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 mt-4 rounded-lg bg-cover border-solid font-medium text-black items-center'>
            <h2 className='text-xl sm:text-2xl lg:text-4xl font-bold mt-3 text-center'>Best Design</h2>
            <p className='text-md sm:text-lg lg:text-2xl mt-1 font-medium text-center'>High Quality Apartments</p>
            <Image className='rounded-lg mx-auto my-2' src="/id.png" width={240} height={180} alt="photo" />
            <button className='bg-[#fff] rounded-lg w-full sm:w-24 lg:w-48 h-12 font-bold mb-2'><a href="/apartments">Get Started</a></button>
        </div>
    </div>
</div>

  )
}

export default Features