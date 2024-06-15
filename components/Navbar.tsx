import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    // Navbar Logo
    <header className="w-full relative z-10 bg-white border-b border-gray-300">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-8 px-4 py-2 sm:py-4">
        <Link href="/" className="flex justify-center items-center">
            <Image 
                src="/logo.png"
                alt="Logo"
                width={118}
                height={18}
                className="object-contain"
            />
        </Link>

        {/* Navbar Links */}
        <div className="flex ml-2 sm:ml-6 px-2 sm:px-6 py-2 sm:py-4 items-center justify-between w-full">
            <div className="flex items-center text-center gap-2 md:gap-4">
                <div className="flex md:gap-2 gap-1 md:text-md text-base font-semibold">
                    <Link className="hover:underline-offset-1 hover:underline decoration-[#5159bb]" href='./advisory'>AI Advisory</Link>
                </div>
                <div className="flex md:gap-2 gap-1 md:text-md text-base font-semibold">
                    <Link className="hover:underline-offset-1 hover:underline decoration-[#5159bb]" href='./apartments'>Apartments</Link>
                </div>
            </div>
        </div>

        {/* Sign In Button */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4"> 
            <Link href='/login'>
                <CustomButton 
                    title="Sign In"
                    btnType="button"
                    containerStyles="bg-[#5159bb] hover:bg-[#3a41c6] transition-[5s] text-white rounded-3xl w-[102px] h-[40px]"
                />
            </Link>
        </div>
    </nav>
</header>

  )
}

export default Navbar