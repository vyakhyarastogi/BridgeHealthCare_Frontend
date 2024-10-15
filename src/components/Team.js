import React from 'react'
import rahul from '../asset/rahul_soni.png';

const Team = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-green text-5xl font-bold mt-10'>Our Team</p>
                <p className='p-5 text-blue'>Ask a doctor online and get quick medical advice for your health queries.<br /> Our medical panel consists of over 3500, doctors from 80, specialties. </p>

            </div>
            <div className='max-w-[1200px]  p-20 flex flex-row mt-20 '>
                <div className='w-[400px]  flex flex-col items-center justify-center shadow-2xl  p-9 m-10 text-center relative  '>
                    <img src={rahul} alt="Rahul Soni" className=' absolute -top-24 left-16 w-[150px] h-[150px]'></img>
                    <p className='text-[black] p-5'>Co-Founder & CTO</p>
                    <p>With expertise in managing complex heart conditions and performing advanced cardiac procedures</p>



                </div>
                <div className='w-[400px] h-[300px] flex flex-col items-center justify-center shadow-2xl  p-9 m-10 text-center relative  '>
                    <img src={rahul} alt="Rahul Soni" className=' absolute -top-24 left-16 w-[150px] h-[150px]'></img>
                    <p className='text-[black] p-5'>Co-Founder & CTO</p>
                    <p>With expertise in managing complex heart conditions and performing advanced cardiac procedures</p>



                </div>

                <div className='w-[400px] h-[300px] flex flex-col items-center justify-center shadow-2xl  p-9 m-10 text-center relative  '>
                    <img src={rahul} alt="Rahul Soni" className=' absolute -top-24 left-16 w-[150px] h-[150px]'></img>
                    <p className='text-[black] p-5'>Co-Founder & CTO</p>
                    <p>With expertise in managing complex heart conditions and performing advanced cardiac procedures</p>



                </div>



            </div>
        </div>
    )
}

export default Team