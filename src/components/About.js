import React from 'react'
import bharat from '../asset/bharat_tdm.png';

const About = () => {
    return (
        <div className='flex items-center justify-between  m-32'>
            <div>
                <p className='text-5xl'>Bharat <span className='text-5xl color-green font-bold'>TDM</span></p>
                <img src={bharat} className='w-[400px] h-[400px]' alt="TDM"></img>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-5xl color-green font-bold pb-3 '>About Us</p>
                <p className='text-green1 '>We are working on the development of <br /> Tele-diagnostic devices that allow<br /> patients to receive remote consultations</p>
                <br />
                <p>To get diagnoses from nearby pharmacies and clinics. This significantly<br />reduces the need for long-distance travel and improves access to<br /> quality care for rural and semi-urban populations. This will ensure that <br /> patients receive the treatments they need in a timely manner.</p>
                <div className='m-10'>
                    <button className="px-4 py-2 border-2 border-green-700  font-medium rounded-md bg-green text-white">Read More</button>
                </div>


            </div>
        </div>
    )
}

export default About