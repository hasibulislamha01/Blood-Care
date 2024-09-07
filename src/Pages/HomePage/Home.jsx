import AboutUs from "../../Components/HomePageComponents/AboutUs/AboutUs";
import Banner from "../../Components/HomePageComponents/Banner/Banner";

const Home = () => {
    return (
        <div className="space-y-32">
            <Banner />

            <div className="container mx-auto">
                <AboutUs />
            </div>

            <div className="mt-24">
                <h1>heading</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam fugiat minima quas in pariatur culpa, incidunt reprehenderit doloribus eveniet, ut voluptatibus minus est delectus odit, labore illum iusto quos at commodi iure qui sed esse. Nemo eligendi sit autem rerum cum dolore tempora sunt iusto eius, officiis fugiat delectus, repellendus officia ipsum et doloremque dignissimos voluptas nihil ut quod. Enim nobis obcaecati incidunt velit dolorem temporibus explicabo rem minus. Nisi, fuga minus aut quas doloribus magnam architecto facilis accusantium perferendis cumque quam, sint sit! Praesentium cupiditate delectus inventore ipsam enim. Labore, ullam omnis. Beatae, sapiente laboriosam placeat voluptates magnam qui?
                </p>
            </div>
            <div className="mt-24 glass-card w-[300px]">
                <h1 className="text-xl">Glassy heading</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptas!
                </p>
            </div>
        </div>
    );
};

export default Home;