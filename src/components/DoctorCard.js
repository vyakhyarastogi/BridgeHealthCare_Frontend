import Doctor from '../asset/doctor.png';

const DoctorCard = () => {
    return (
        <div className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
            <div className="absolute -top-12 md:static md:w-1/3 flex-shrink-0">
                <img
                    src={Doctor} // Replace with the actual image path or URL
                    alt="Doctor"
                    className="w-24 h-24 rounded-full mx-auto md:mx-0"
                />
            </div>
            <div className="md:ml-6 mt-12 md:mt-0 flex flex-col justify-center">
                <h3 className="text-lg font-bold">Dr. Jessica Tailor</h3>
                <p className="text-gray-500">Restorative Dentist</p>
                <p className="text-yellow-500">★ 4.8</p>
                <p className="text-gray-400">+6500 Patients</p>
                <p className="text-gray-400">UNC Rex Hospital, NYC</p>
            </div>
        </div>
    );
}

export default DoctorCard;
