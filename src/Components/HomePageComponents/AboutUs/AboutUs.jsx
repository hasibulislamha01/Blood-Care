
const AboutUs = () => {

    const description = ` BloodCare is a life-saving platform designed to connect blood donors with those in urgent need. Our mission is to make the process of finding blood donors and donation centers seamless and efficient. By bringing together a community of donors, recipients, and healthcare organizations, we aim to ensure that no one faces a shortage of blood during emergencies. Whether you're looking to donate blood, find a donor, or support a blood drive, BloodCare empowers you to make a difference and save lives with just a few clicks. Join us in our mission to give the gift of life!`


    return (
        <div className="h-screen flex flex-col justify-center items-center text-center space-y-6">
            <h1 className="text-xl md:text-3xl ">
                About
                <span>BloodCare</span>
            </h1>
            <p className="w-[97%] md:w-[85%]">
               {description}
            </p>
        </div>
    );
};

export default AboutUs;