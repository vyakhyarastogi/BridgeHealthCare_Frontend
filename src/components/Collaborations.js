import React from 'react'
import startup from '../asset/startup.svg';
import coimbatore from '../asset/coimabatore.svg';
import crescent from '../asset/crescent.svg';
import chamber from '../asset/chamber.svg';
import meds from '../asset/meds.svg';
import fund from '../asset/fund.svg';
import esf from '../asset/ESF.svg';
import india from '../asset/startup_india.svg';




const Collaborations = () => {
    return (
        <div>
            <div> <p className='text-green text-5xl font-bold text-center p-32'>Our Collaboration</p></div>
            <div className='grid grid-cols-4 gap-20 max-w-[1000px] mx-auto'>
                <img className=" w-[313.53px] h-[80.38]" src={startup} alt="Startup" />
                <img className=" w-[313.53px] h-[80.38]" src={coimbatore} alt="Coimabtore" />
                <img className=" w-[313.53px] h-[80.38]" src={crescent} alt="cresent" />
                <img className=" w-[313.53px] h-[80.38]" src={chamber} alt="chamber" />
                <img className=" w-[313.53px] h-[80.38]" src={meds} alt="meds" />
                <img className=" w-[313.53px] h-[80.38]" src={fund} alt="fund" />
                <img className=" w-[313.53px] h-[80.38]" src={esf} alt="ESF" />
                <img className=" w-[313.53px] h-[80.38]" src={india} alt="startup india" />
            </div>
        </div>
    )
}

export default Collaborations