import React from 'react'
import achieve1 from '../asset/achievement1.svg';
import achieve2 from '../asset/achievement2.png';
const Achievements = () => {
    return (
        <div>
            <div>
                <p className='text-green text-5xl font-bold text-center p-10'>Our Achievements</p>
            </div>

            <div className='flex flex-row items-center justify-center'>
                <div className='flex flex-col gap-2 max-w-[1300px] items-center justify-center '>
                    <img src={achieve1} alt="achievement1" className='h-[350px] w-[550px]'>
                    </img>
                    <figcaption className='text-center'>
                        Bridge Healthcare is recognized as one of the  promising  startup in Healthcare  by Governmentof Tamil Nadu under the TANSEED 4.0
                    </figcaption>

                </div>
                <div className='flex flex-col gap-2'>
                    <img src={achieve2} alt="achievement2" className='h-[350px] w-[560.25px]'></img>
                    <figcaption className='text-center'>
                        Bridge Healthcare is recognized as one of the promising  startup in Healthcare  by Government of Tamil Nadu under the TANSEED 4.0
                    </figcaption>
                </div>
            </div>

        </div >
    )
}

export default Achievements