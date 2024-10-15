const ContactSection = () => {
    return (
        <div className="flex justify-around py-10 bg-gray-100">
            <div>
                <p className="font-bold">Contact Us</p>
                <p>123-456-7890</p>
            </div>
            <div>
                <p className="font-bold">Contact Sales</p>
                <p>876-256-876</p>
            </div>
            <div>
                <p className="font-bold">Location</p>
                <p>Chennai, TN</p>
            </div>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full">Contact Us</button>
        </div>
    );
}

export default ContactSection;
