import Image from 'next/image';

const Features = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
        <h1 className='font-extrabold text-7xl'>Special services for you</h1>
        <div className='flex justify-center flex-wrap mt-16'>
            <div className='flex flex-col bg-[#5159bb] w-[480px] h-[440px] items-center mx-4 rounded-lg bg-cover border-solid font-medium text-black'>
                <h2 className='text-4xl font-bold mt-3'>AI Advisory</h2>
                <p className='text-2xl mt-1  font-medium'>AI Powered Technology</p>
                <Image className='rounded-lg m-2' src="/ai1.png" width={293} height={220} alt="photo" />
                <button className='bg-[#fff] hover:w-[140px] hover:h-[70px] transition-[5s] rounded-lg mt-4 w-32 h-16 font-bold items-center'><a href="/advisory">Get Started</a></button>
            </div>
            <div className='flex flex-col bg-[#5159bb] w-[480px] h-[440px] items-center mx-4 rounded-lg bg-cover border-solid font-medium text-black'>
                <h2 className='text-4xl font-bold mt-3'>Visual Design</h2>
                <p className='text-2xl mt-1 font-medium'>3D Modeled Apartments</p>
                <Image className='rounded-lg m-2' src="/id.png" width={293} height={220} alt="photo" />
                <button className='bg-[#fff] hover:w-[140px] hover:h-[70px] transition-[5s] rounded-lg mt-4 w-32 h-16 font-bold items-center'><a href="/apartments">Get Started</a></button>
            </div>
        </div>
    </div>
  )
}

export default Features