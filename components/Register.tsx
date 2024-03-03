import Link from 'next/link'
import { CustomButton } from '.'
import { NextPage } from 'next';
import pool from '../app/db';

export const Register = () => {

  

  const fetchData = async () => {
    const [rows, fields] = await pool.query("INSERT INTO customers VALUES ('', '$CustomerName','$CustomerSName','$CustomerPNumber', '$CustomerLogin','$CustomerPassword')");
    console.log(rows);
  };

  return (
    <div>
        <div className='m-auto w-1/2 p-2 border-4 text-center rounded-lg my-16'>
            <h1 className='font-bold text-3xl my-4'>Create Account</h1>
            <div className='my-2'>
              <form action="./index.php" className='flex flex-col space-y-3 items-center' method='POST'>
                  <input className='border-2 rounded w-1/2 h-8' type="text" name="CustomerName" placeholder='Enter your first name'></input>
                  <input className='border-2 rounded w-1/2 h-8' type="text" name="CustomerSName" placeholder='Enter your last name'></input>
                  <input className='border-2 rounded w-1/2 h-8' type="number" name="CustomerPNumber" placeholder='Enter your phone number'></input>
                  <input className='border-2 rounded w-1/2 h-8' type="text" name="CustomerLogin" placeholder='Enter your login'></input>
                  <input className='border-2 rounded w-1/2 h-8' type="password" name="CustomerPassword" placeholder='Enter your password'></input>
                  <input className="bg-[#5159bb] hover:bg-[#3a41c6] transition-[5s] text-white rounded-3xl w-[120px] h-[40x]" type="submit" value="Submit" name="sumbit"></input>
              </form>
            </div>
            <p>Already have an account? <a href="/login" className='hover:underline decoration-[#5159bb] underline-offset-2 mt-8'>Sign In Now.</a></p>
        </div>
    </div>
  )
}
