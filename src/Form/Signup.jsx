import React from 'react'

export default function Signup() {
  return (
    <div className='mt-8 flex justify-center w-full '>
        <div className=' w-[450px]  bg-slate-100'>

            <div  className='ml-11 flex flex-col gap-y-0.5'>
            <h1 className='font-semibold text-2xl '>CREATE AN ACCOUNT</h1>
            <p className='text-gray-600 '>Register for new Customer</p>
            </div>

            <div className='mt-3'>
              <form>
                <div className='flex flex-col gap-y-2 '>

                  <label htmlFor='Full Name' className='ml-11'>Full Name</label>
                  <input className="border border-gray-500 rounded w-4/5  h-10 mx-auto" type='text' placeholder='John Cris Doe'/>
                
                  <label htmlFor='email '  className='ml-11'>Email address</label>
                  <input className='border border-gray-500 rounded w-4/5  h-10 mx-auto' type='email' placeholder='abc@domain.com'/>
                
                  <label htmlFor='Password'  className='ml-11'>Password</label>
                  <input className='border border-gray-500 rounded w-4/5  h-10 mx-auto'type='password' placeholder='********'/>
                 
                  <label htmlFor='Confirm Password '  className='ml-11'>Confirm Password</label>
                  <input className='border border-gray-500 rounded w-4/5  h-10 mx-auto' type='password' placeholder='********'/>
                 
                  <div>
                  <input type='checkbox' className='ml-11'/>
                  <label htmlFor='checkbox'>I have read and agree to the terms and conditions</label>
                  </div>
                 
                  <button className='p-2 mt-2 bg-red-500 rounded w-4/5 mx-auto hover:bg-white border border-red-500' type='submit'>CREATE ACCOUNT</button>
                
                </div>
              
              </form>
            
            </div>

            <div className='mt-4 flex flex-col gap-y-3'>

            <div className='flex items-center w-4/5 mx-auto gap-x-2'>
            <hr className="w-[30%] bg-gray-800"></hr>
            <h3><span>OR SIGNUP WITH</span></h3>
            <hr className="w-[30%] bg-gray-800"></hr>
            </div>

            <div className='flex items-center justify-evenly gap-x-8 '>
            <button className=' bg-blue-500 w-1/2 h-8 ml-11 rounded text-lg hover:bg-white border border-blue-500'>FACEBOOK</button>
            <button className=' bg-red-500 w-1/2 h-8 mr-11 rounded text-lg hover:bg-white border border-red-500'>GOOGLE</button>
            </div>

            <div className=' flex justify-center'>
              <h3>Already have account? Login now</h3>
            </div>
          
            <div className=' mb-3 w-4/5 mx-auto'>
            <hr className="w-full bg-gray-700"></hr>
            </div>

            </div>

        </div>
    </div>
  )
}
