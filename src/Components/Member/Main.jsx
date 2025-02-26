import React from "react";

const Main = () => {
  return (
    <>
      <section className="mobile">
        <div className="">
          <div className="flex items-center gap-2">
            <div className="bg-[#EEC6C9] h-16 md:h-20 w-2 mt-2"></div>
            <h1 className="text-3xl md:text-5xl font-semibold">
              Become a <br /> member
            </h1>
          </div>
          <div className="mt-5">
            <p className="text-base md:text-lg">
              Et soluta animi ad quas quasi nam odit nihil ut consequatur
              explicabo. Ea nihil nobis eum explicabo corporis est nihil neque
              qui voluptas{" "}
            </p>
            <button className="uppercase bg-[#EEC6C9] px-4 md:px-6 py-2 md:py-3 rounded-full rounded-tr-none text-lg md:text-2xl font-bold mt-4">
              Enquire Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-4 mt-5">
          <div className="col-span-1 md:col-span-2 row-span-5">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="col-span-1 md:col-span-3 row-span-5 col-start-1 md:col-start-3 border-4 rounded-2xl border-[#EEC6C9] p-2">
            <p className="text-base md:text-lg">
              Ut voluptas quam At obcaecati consequatur ut aliquam architecto
              qui esse ducimus et omnis quia quo nisi quasi et accusamus
              doloribus. Ea magnam quasi qui quia accusantium sed aliquam ipsa!
              Sit doloremque unde in quibusdam corrupti est velit enim et
              delectus atque quo ullam incidunt. Et dolore mollitia aut
              excepturi facilis sed voluptate.
            </p>
          </div>
        </div>
      </section>

      <section className="pc">
        <div className="grid grid-cols-1 md:grid-cols-9 grid-rows-5 gap-4">
          <div className="col-span-1 md:col-span-3 row-span-5">
            <div className="h-full flex flex-col gap-10">
              <div className="flex items-center gap-2">
                <div className="bg-[#EEC6C9] h-16 md:h-20 w-2 mt-2"></div>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Become a <br /> member
                </h1>
              </div>
              <div className="mt-5">
                <p className="text-base md:text-lg">
                  Et soluta animi ad quas quasi nam odit nihil ut consequatur
                  explicabo. Ea nihil nobis eum explicabo corporis est nihil
                  neque qui voluptas{" "}
                </p>
                <button className="uppercase bg-[#EEC6C9] px-4 md:px-6 py-2 md:py-3 rounded-full rounded-tr-none text-lg md:text-2xl font-bold mt-4">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 row-span-5 col-start-1 md:col-start-4">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="col-span-1 md:col-span-3 row-span-5 col-start-1 md:col-start-7 border-4 rounded-2xl border-[#EEC6C9] p-2">
            <p className="text-base md:text-lg">
              Ut voluptas quam At obcaecati consequatur ut aliquam architecto
              qui esse ducimus et omnis quia quo nisi quasi et accusamus
              doloribus. Ea magnam quasi qui quia accusantium sed aliquam ipsa!
              Sit doloremque unde in quibusdam corrupti est velit enim et
              delectus atque quo ullam incidunt. Et dolore mollitia aut
              excepturi facilis sed voluptate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
