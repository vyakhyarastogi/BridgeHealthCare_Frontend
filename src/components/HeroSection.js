import React from 'react';
import doctor from '../asset/doctor.png';
import image1 from '../asset/image1.png';
// import background from '../asset/background.png';
import image2 from '../asset/image2.png';
import phone from '../asset/phone_icon.png';
import sales from '../asset/sales.png';
import location from '../asset/location.png';


const HeroSection = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-20 rounded-md flex justify-between relative">

                <div >

                    <h1 className="text-5xl font-bold text-green mt-5">
                        No Delay in <br /> Healthcare
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Providing immediate access to <br /> healthcare, empowering individuals and <br /> communities to lead healthier lives.
                    </p>
                    <div className="mt-6 flex items-center pt-20">
                        <button className="bg-transparent border-2 border-green-600 p-3 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.939a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                        <p className="text-green-600 font-medium ml-3">See how we work</p>
                    </div>
                </div>
                <div className='relative mx-20' >
                    <img src={image1} alt="image1" className="absolute  -left-32 top-20 "></img>
                    <img src={image2} alt="image2" className='absolute -right-20 top-60'></img>
                    <img src={doctor} alt="doctor" className='w-[400px] h-[400px] ' ></img>
                </div>

            </div >

            <div className='flex place-items-start justify-evenly p-5 '>
                <div className='flex items-center justify-center gap-3'>
                    <img src={phone} alt="phone"></img>
                    <div className='flex flex-col gap-3'>
                        <p>Contact Us</p>
                        <p>123-456-7890</p>
                    </div>


                </div>
                <div className='flex items-center justify-center gap-3'>
                    <img src={sales} alt="sales"></img>
                    <div className='flex flex-col gap-3'>
                        <p>Contact Sales</p>
                        <p>876-256-876</p>
                    </div>

                </div>
                <div className='flex items-center justify-center gap-3'>
                    <img src={location} alt="location"></img>
                    <div className='flex flex-col gap-3'>
                        <p>Chennai,TN</p>
                    </div>

                </div>
                <div>
                    <button className="texxt-white  px-4 py-2 border-2 border-green-700  font-medium rounded-md bg-green  ">Contact Us</button>

                </div>


            </div>

        </div>
    );
}

export default HeroSection;
