import React from 'react'
import tdm from '../asset/TDM.png';
const OurProducts = () => {
    return (
        <div className='flex flex-col m-3 p-2'>
            <div className="text-center m-5">
                <p className="text-5xl text-green">Our Products</p>
                <p className='m-5'>Ask a doctor online and get quick medical advice for your health queries.<br />Our medical panel consists of over 3500, doctors from 80, specialties. </p>

            </div>
            <div className='flex flex-row items-center justify-evenly'>

                <div className='flex flex-col gap-3 text-green m-5 font-bold '>
                    <button className="px-6 py-3 text-lg text-green-700 bg-white rounded-lg  shadow-lg hover:shadow-lg">Tele-Diagnostic Machine</button>
                    <button className="px-6 py-3 text-lg text-green-700 bg-white rounded-lg   shadow-lg hover:shadow-lg">Doctor App</button>
                    <button className="px-6 py-3 text-lg text-green-700 bg-white rounded-lg   shadow-lg hover:shadow-lg">Patient App</button>
                    <button className="px-6 py-3 text-lg text-green-700 bg-white rounded-lg shadow-lg hover:shadow-lg">Operator/Nurse App</button>

                </div>
                <div className='shadow-lg'>
                    <img src={tdm} alt="TDM" className="w-[400px] h-[400px] "></img>
                    <div className='p-5'>
                        <p className="text-green font-bold">Patient App Feature</p>

                        <p>Fast health screening</p>
                        <p>Online doctor consultation</p>
                        <p>Printing Report and prescription</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default OurProducts