import React from 'react'
import blog1 from '../asset/blog1.svg';
import blog2 from '../asset/blog2.svg';
import blog3 from '../asset/blog3.svg';
import linkedln from '../asset/Linkedln.svg';
import facebook from '../asset/facebook.svg';
import twitter from '../asset/twitter.svg';

const OurBlogs = () => {
    return (
        <div className='w-[1290px] h-[800px] flex flex-col  items-center justify-center'>
            <div className='text-center'>
                <p className='text-5xl text-green font-bold mt-[50px] '>Our Blogs</p>
                <p className='text-blue p-5'>Ask a doctor online and get quick medical advice for your health queries.<br /> Our medical panel consists of over 3500, doctors from 80, specialties. </p>
            </div>
            <div className='max-w-[1300px] flex flex-row items-center justify-evenly gap-10 '>
                <div className='flex flex-col gap-3 items-center justify-center shadow-xl rounded-xl w-[300px] '>
                    <img src={blog1} className='h-[299.95px] w-[416px]  rounded-[20px]' alt="img1"></img>
                    <div className='flex flex-row justify-center relative '>
                        <p className='absolute -left-28 -top-10 -right-72 '>March 12</p>
                        <div className='flex flex-row items-center gap-1 absolute -top-10 -right-28  '>
                            <img src={linkedln} alt="linkedln"></img>
                            <img src={facebook} alt="faceboook"></img>
                            <img src={twitter} alt="twitter"></img>
                        </div>
                    </div>
                    <p className='p-5'>The Importance of Mental
                        Health: Understanding and
                        Managing Anxiety Disorders</p>

                </div>

                <div className='flex flex-col gap-3  items-center justify-center shadow-2xl rounded-xl w-[300px]'>
                    <img src={blog2} className='h-[299.95px] w-[416px]  rounded-[20px]' alt="img2"></img>
                    <div className='flex flex-row justify-center relative '>
                        <p className='absolute -left-28 -top-10 -right-72 '>March 12</p>
                        <div className='flex flex-row items-center gap-1 absolute -top-10 -right-28  '>
                            <img src={linkedln} alt="linkedln"></img>
                            <img src={facebook} alt="faceboook"></img>
                            <img src={twitter} alt="twitter"></img>
                        </div>
                    </div>
                    <p className='p-5'>The Importance of Mental
                        Health: Understanding and
                        Managing Anxiety Disorders</p>

                </div>

                <div className='flex flex-col gap-3 tems-center justify-center shadow-2xl rounded-xl w-[300px]'>
                    <img src={blog3} className='h-[299.95px] w-[416px]  rounded-[20px]' alt="img3"></img>
                    <div className='flex flex-row justify-center relative '>
                        <p className='absolute left-8 -top-10  '>March 12</p>
                        <div className='flex flex-row items-center gap-1 absolute -top-10 left-40  '>
                            <img src={linkedln} alt="linkedln"></img>
                            <img src={facebook} alt="faceboook"></img>
                            <img src={twitter} alt="twitter"></img>
                        </div>
                    </div>
                    <p className='p-5'>The Importance of Mental
                        Health: Understanding and
                        Managing Anxiety Disorders</p>

                </div>

            </div>
        </div>
    )
}

export default OurBlogs