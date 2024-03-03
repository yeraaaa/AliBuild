import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className="w-full relative z-10 bg-white border-b border-gray-300">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src="/logo.png"
                    alt="Logo"
                    width={118}
                    height={18}
                    className="object-contain"
                />
            </Link>

            <div className="flex ml-6 px-6 py-4 items-center justify-between w-full">
                <div className="flex items-center text-center gap-6 md:gap-12">
                    <div className="flex md:gap-3 gap-2 md:text-md text-xl font-semibold">
                        <Link className="hover:underline-offset-1 hover:underline decoration-[#5159bb]" href='./advisory'>AI Advisory</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-xl font-semibold">
                        <Link className="hover:underline-offset-1 hover:underline decoration-[#5159bb]" href='./apartments'>Apartments</Link>
                    </div>
                </div>
            </div>

            <Link href='/login'>
                <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles="bg-[#5159bb] hover:bg-[#3a41c6] transition-[5s] text-white rounded-3xl w-[110px] h-[30x]"
                />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar