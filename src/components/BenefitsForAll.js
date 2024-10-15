import React from 'react'
import community from '../asset/community.png';
import building from '../asset/building.png';
import pharmacy from '../asset/pharmacy.png';
import hospital from '../asset/Hospital.png';
import { VscCircleSmallFilled } from "react-icons/vsc";

const BenefitsForAll = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 text-center'>
                <p className='text-5xl text-green font-bold pt-10'>Benefits for All</p>
                <p className='m-5 text-green3'>Our state-of-the-art devices enable remote consultations and real-time <br /> diagnoses, offering unique opportunities for business collaboration.</p>

            </div>
            <div className='max-w-[1200px] flex flex-row m-10 pt-10'>
                <div className='flex flex-col gap-5  p-5 m-5 w-[300px] shadow-xl text-green3'>
                    <div className='flex flex-row items-center justify-center  gap-3 '>
                        <img src={community} alt="Gated Community"></img>
                        <p className='font-bold'>Gated Community</p>

                    </div>
                    <div >

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p>Health Screening (Vitals, Blood Tests, ECG)</p>
                            {/* Tele-Consultation (access Real-time Health data)
                            Home-Care Services Booking
                            Online & Printed Prescription & Health Report
                            Upload Lab Reports */}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <VscCircleSmallFilled />
                            <p>Tele-Consultation (access Real-time Health data)</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Home-Care Services Booking</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Online & Printed Prescription & Health Report</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Upload Lab Reports </p>

                        </div>


                    </div>
                </div>
                <div className='flex flex-col gap-5  p-5 m-5 w-[300px] shadow-xl'>
                    <div className='flex flex-row items-center justify-center  gap-3 '>
                        <img src={building} alt="Coorporate Building"></img>
                        <p className='text-green font-bold'>Coorporate Building</p>

                    </div>
                    <div >

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p className='text-green3'>Health Screening (Vitals, Blood Tests, ECG)</p>
                            {/* Tele-Consultation (access Real-time Health data)
                            Home-Care Services Booking
                            Online & Printed Prescription & Health Report
                            Upload Lab Reports */}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <VscCircleSmallFilled />
                            <p className='text-green3'>Tele-Consultation (access Real-time Health data)</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p className='text-green3'> Home-Care Services Booking</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p className='text-green3'> Online & Printed Prescription & Health Report</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p className='text-green3'> Upload Lab Reports </p>

                        </div>


                    </div>
                </div>
                <div className='flex flex-col gap-5  p-5 m-5 w-[300px] shadow-xl'>
                    <div className='flex flex-row items-center justify-center  gap-3 '>
                        <img src={pharmacy} alt="Pharmacy"></img>
                        <p className='font-bold'>Pharmacy</p>

                    </div>
                    <div className='text-green3' >

                        <div className='flex flex-row gap-2 '>
                            <VscCircleSmallFilled />
                            <p>Health Screening (Vitals, Blood Tests, ECG)</p>
                            {/* Tele-Consultation (access Real-time Health data)
                            Home-Care Services Booking
                            Online & Printed Prescription & Health Report
                            Upload Lab Reports */}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2 '>
                            <VscCircleSmallFilled />
                            <p>Tele-Consultation (access Real-time Health data)</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Home-Care Services Booking</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Online & Printed Prescription & Health Report</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Upload Lab Reports </p>

                        </div>


                    </div>
                </div>
                <div className='flex flex-col gap-5  p-5 m-5 w-[300px] shadow-xl text-green3'>
                    <div className='flex flex-row items-center justify-center  gap-3 '>
                        <img src={hospital} alt="Hospital/Clinic"></img>
                        <p className='font-bold'>Hospital/Clinic</p>

                    </div>
                    <div >

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p>Health Screening (Vitals, Blood Tests, ECG)</p>
                            {/* Tele-Consultation (access Real-time Health data)
                            Home-Care Services Booking
                            Online & Printed Prescription & Health Report
                            Upload Lab Reports */}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <VscCircleSmallFilled />
                            <p>Tele-Consultation (access Real-time Health data)</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Home-Care Services Booking</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Online & Printed Prescription & Health Report</p>

                        </div>

                        <div className='flex flex-row gap-2'>
                            <VscCircleSmallFilled />
                            <p> Upload Lab Reports </p>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default BenefitsForAll