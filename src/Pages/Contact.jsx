import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mobile flex flex-col justify-between gap-12">
        <div className="flex items-center gap-2">
          <div className="bg-[#EEC6C9] h-16 md:h-20 w-2 mt-2"></div>
          <h1 className="text-3xl md:text-5xl font-semibold">
            Contact <br /> Us
          </h1>
        </div>
        <form className="flex flex-col justify-center gap-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="text-lg border-b-4 border-[#EEC6C9] w-full h-10"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Email"
              className="text-lg border-b-4 border-[#EEC6C9] w-full h-12"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="text-lg border-b-4 border-[#EEC6C9] w-full h-30"
            />
          </div>
          <button
            type="submit"
            className="bg-[#EEC6C9] text-white font-semibold py-2 rounded-tr-lg rounded-bl-lg"
          >
            Send Message
          </button>
        </form>
        <div className="flex items-center gap-2">
          <div className="bg-[#EEC6C9] h-74 md:h-20 w-5 mt-2"></div>
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="text-2xl font-bold">Phone</h4>
              <p className="mt-2">+91 8871317382</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Email</h4>
              <p className="mt-2">info@bharatstorytellers.com</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Address</h4>
              <p className="mt-2">
                First Floor, Bharat Storytellers, B-66, near Chetak Bridge, Near
                Chetak Bridge, Chetak Bridge, Housing Board Colony, Kasturba
                Nagar, Bhopal, Madhya Pradesh 462022
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-2xl"
            src="https://images.pexels.com/photos/63572/pexels-photo-63572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </section>

      <section className="pc flex flex-col justify-between gap-12 md:flex-row">
        <div className="w-1/3">
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://images.pexels.com/photos/63572/pexels-photo-63572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-2">
            <div className="bg-[#EEC6C9] h-16 md:h-20 w-2 mt-2"></div>
            <h1 className="text-3xl md:text-5xl font-semibold">
              Contact <br /> Us
            </h1>
          </div>
          <div className="flex items-center justify-between gap-10">
            <form className="flex flex-col justify-center gap-5 w-1/2">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="text-lg border-b-4 border-[#EEC6C9] w-full h-10"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Email"
                  className="text-lg border-b-4 border-[#EEC6C9] w-full h-12"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="text-lg border-b-4 border-[#EEC6C9] w-full h-30"
                />
              </div>
              <button
                type="submit"
                className="bg-[#EEC6C9] text-white font-semibold py-2 rounded-tr-lg rounded-bl-lg"
              >
                Send Message
              </button>
            </form>
            <div className="flex items-center gap-2 w-1/2">
              <div className="bg-[#EEC6C9] h-74 md:h-60 w-5 mt-2"></div>
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="text-2xl font-bold">Phone</h4>
                  <p className="mt-2">+91 8871317382</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Email</h4>
                  <p className="mt-2">info@bharatstorytellers.com</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Address</h4>
                  <p className="mt-2">
                    First Floor, Bharat Storytellers, B-66, near Chetak Bridge,
                    Near Chetak Bridge, Chetak Bridge, Housing Board Colony,
                    Kasturba Nagar, Bhopal, Madhya Pradesh 462022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
