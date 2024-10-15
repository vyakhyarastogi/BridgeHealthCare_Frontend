import React from 'react'
import screening from '../asset/screening.png';
import records from '../asset/record.png';
import real_time from '../asset/real_time.png';
import test from '../asset/test.png';
import specialist from '../asset/specialist.png';
import stethoscope from '../asset/stethoscope.png';
import report from '../asset/report.png';
import language from '../asset/language.png';
import wifi from '../asset/wifi.png';

const FeatureSection = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl text-green font-bold m-6'>Tele-Diagonistic Solution</h1>
                <p className='m-4'>Ask a doctor online and get quick medical advice for your health queries.<br /> Our medical panel consists of over 3500, doctors from 80, specialties. </p>
            </div>
            <div className="grid grid-cols-3 gap-10 place-items-center m-10 px-52 py-10">



                <div className='flex flex-col items-center justify-center gap-2' >
                    <img src={screening} alt=""></img>
                    <p>Fast Health<br /> Screening</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={records} alt="digital health records"></img>
                    <p className='text-center'>Digital Health <br />  <span className='text-center'>Records</span></p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={real_time} alt="Real time health data streaming"></img>
                    <p className='text-center'>Real-time health<br />  <span className='text-center'>streaming</span></p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={test} alt="blood test"></img>
                    <p>Blood test</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={specialist} alt="Multi-specialist connectivity"></img>
                    <p>Multi-Specilist<br />connectivity</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={stethoscope} alt="digital stethoscope"></img>
                    <p className='text-center'> Digital<br /> <span className='text-center'> stethoscope</span></p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={report} alt="printing report and prescription"></img>
                    <p>printing report<br />  <span className='text-center'> and prescription</span></p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={language} alt="regional language support"></img>
                    <p className='text-center'>regional language<br /> <span className='text-center'>Support</span></p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>

                    <img src={wifi} alt="5G & Wifi Connectivity"></img>
                    <p className='text-center'>5G & Wifi <br />  <span className='text-center'>Connectivity</span></p>
                </div>

            </div>
        </div>
    )
}

export default FeatureSection