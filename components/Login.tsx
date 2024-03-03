import Link from 'next/link'
import { CustomButton } from '.'

export const Login = () => {
  return (
    <div>
        <div className='m-auto w-1/2 p-2 border-4 text-center rounded-lg mt-16'>
            <h1 className='font-bold text-3xl mt-4'>Sign In</h1>
            <div className='flex flex-col space-y-2 items-center mt-8'>
                <input className='border-2 rounded w-1/2 h-8' required placeholder='Enter your login'></input>
                <input className='border-2 rounded w-1/2 h-8' required placeholder='Enter your password'></input>
                <Link href='/login'>
                  <CustomButton 
                    title="Sign In"
                    btnType="button"
                    containerStyles="bg-[#5159bb] hover:bg-[#3a41c6] transition-[5s] text-white rounded-3xl w-[110px] h-[30x]"
                  />
                </Link>
                <p id="p">Don't have an account? <a href="/register" className='hover:underline decoration-[#5159bb] underline-offset-2'>Register Now.</a></p>
            </div>
        </div>
    </div>
  )
}
