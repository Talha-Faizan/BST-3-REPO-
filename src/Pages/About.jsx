import React from "react";
import Mission from "../Components/Mission/Mission";
import OurStory from "../Components/OurStory/OurStory";

const About = () => {
  return (
    <div className="">
      <section>
        <div className="md:flex md:justify-between ">
          <div className="p-6 border-4 border-[#eec6c9] rounded-3xl md:w-1/2 ">
            <p className="text-lg text-center paratext md:text-xl mb-6 xl:text-3xl">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              molestias tenetur, sapiente explicabo possimus beatae, quia
              officiis quae iusto hic cupiditate! Placeat in doloribus obcaecati
              impedit perspiciatis animi eveniet quisquam."
            </p>
            <img
              className="rounded-3xl w-full h-auto"
              src="https://images.pexels.com/photos/5306515/pexels-photo-5306515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us"
            />
          </div>

          <div className="p-5 lg:p-8 bg-[#ebf2ff] rounded-2xl md:w-1/2 md:ml-5">
            <h1 className="mb-6 uppercase font-bold text-3xl lg:text-5xl underline underline-offset-8 headtext decoration-[#a8c5fc]">
              About Us
            </h1>
            <p className="paratext lg:text-xl xl:text-2xl mb-4">
              Ad quia voluptas et consectetur iusto in repellat necessitatibus
              qui quia dignissimos. Sit nobisssi quam non ratione dolorum et
              reprehenderit vero qui labore aperiam? Ad galisum laborum non
              soluta
            </p>
            <p className="paratext lg:text-xl xl:text-2xl">
              Aut dicta architecto aut distinctio voluptas utleq itaque
              voluptates! Ut quas quaerat eum quin sils voluptatem consequatur
              et dolorem unde exrern cupiditate rerum. Cum delectus quia est
              enima il voluptatem expedita ab dolores enim ut rerum ni
              recusandae laborum et unde obcaecati sed iste nostrum corporis. Ea
              officiis optio vel galisum qui rerum sed iste quibusdam et
              voluptates sint enim rerum nam galisum reiciendis qui nulla.
            </p>
          </div>
        </div>
      </section>

      <Mission />

      <OurStory />

      <section>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="h-96 w-full mb-10 md:w-3/4 md:h-[50vh] "> 
            <img
              className="h-full w-full object-cover rounded-2xl mt-10 md:mt-0 md:rounded-tl-none md:rounded-bl-none"
              src="https://images.pexels.com/photos/6929171/pexels-photo-6929171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Community"
            />
          </div>
          <div className="flex flex-col items-start gap-5 md:w-1/3"> 
            <h1 className="font-black text-3xl lg:text-4xl">
              Become Part of Our Storytelling Community!
            </h1>
            <p className="font-semibold lg:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              repellendus voluptas velit nesciunt architecto cumque adipisci
              eligendi quos perspiciatis itaque officiis, modi ut labore cum
              quae dolor. Blanditiis dignissimos doloribus voluptatem quibusdam,
              iste veritatis nulla, ducimus nam quod dolore reprehenderit!
            </p>

            <button className="bg-[#eec6c9] text-black px-6 py-3 rounded-full shadow-md flex items-center space-x-2">
              <span className="font-bold">BECOME A MEMBER</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
