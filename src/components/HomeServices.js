import React from 'react'
import consultation from '../asset/consultation.png';
import caretaker from '../asset/caretaker.png';
import services from '../asset/services.png';

const HomeServices = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-5xl text-green font-bold m-4'>Home Care Services</p>
                <p className='text-green1 m-8'>Ask a doctor online and get quick medical advice for your health queries.<br /> Our medical panel consists of over 3500, doctors from 80, specialties. </p>

            </div>
            <div className='flex items-center justify-center gap-8'>
                <div className='flex flex-col shadow-xl p-3 '>
                    <img src={consultation} alt="Doctor Visit Consultation"></img>
                    <p className='text-center'>Doctor Visit<br /> Consultation</p>

                </div>
                <div className='flex flex-col shadow-xl p-3 text-center'>
                    <img src={caretaker} alt="Nurse/Caretaker"></img>
                    <p className='text-center'>Nurse/<br />Caretaker</p>

                </div>
                <div className='flex flex-col shadow-xl p-7 '>
                    <img src={services} alt="On demand Services"></img>
                    <p className='text-center'>On demand<br /> Services</p>

                </div>

            </div>
        </div>
    )
}

export default HomeServices