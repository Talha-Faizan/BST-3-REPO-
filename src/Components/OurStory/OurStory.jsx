import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <>
      <section className="mt-10">
        <div className="mobile">
          <h1 className="text-5xl font-black headtext">Our Story</h1>
          <div className="p-5  bg-[#ebf2ff] rounded-2xl mt-5">
            <h1 className="uppercase font-black text-xl  headtext">
              This is how we Started
            </h1>
            <br />
            <p className="font-semibold paratext">
              Ad quia voluptas et consectetur iusto in repellat necessitatibus
              qui quia dignissimos. Sit nobisssi quam non ratione dolorum et
              reprehenderit vero qui labore aperiam? Ad galisum laborum non
              soluta corrupti qui doloremque quam sed commodi culpa aut dolorum
              earum.
            </p>
            <br />
            <p className="font-semibold paratext">
              Aut dicta architecto aut distinctio voluptas utleq itaque
              voluptates! Ut quas quaerat eum quin sils voluptatem consequatur
              et dolorem unde exrern cupiditate rerum. Cum delectus quia est
              enima il voluptatem expedita ab dolores enim ut rerum ni
              recusandae laborum et unde obcaecati sed iste nostrum corporis. Ea
              officiis optio vel galisum qui rerum sed iste quibusdam et
              voluptates sint enim rerum nam galisum reiciendis qui nulla.
            </p>
          </div>

          <div className="grid grid-cols-6 grid-rows-7 gap-2 mt-10">
            <div className="col-span-2 row-span-4">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="h-44 col-span-2 row-span-3 col-start-1 row-start-5">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-7 col-start-3 row-start-1">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-5 row-start-1">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-5 row-start-4">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="pc flex items-stretch justify-between gap-4 mt-10 mb-10">
          <div className="grid grid-cols-6 grid-rows-9 gap-2 w-1/2">
            <div className="col-span-2 row-span-2">
              <h1 className="text-5xl font-black headtext">Our Story</h1>
            </div>
            <div className="col-span-2 row-span-4 col-start-1 row-start-3">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-1 row-start-7">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-9 col-start-3 row-start-1">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-5 row-start-1">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-5 col-start-5 row-start-5">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>

          <div className="p-5 bg-[#ebf2ff] rounded-2xl flex-grow px-10 w-1/2">
            <h1 className="uppercase font-black text-xl lg:text-3xl xl:text-4xl wxl:text-5xl headtext">
              This is how we Started
            </h1>
            <br />
            <p className="font-semibold paratext lg:text-md xl:text-xl">
              Ad quia voluptas et consectetur iusto in repellat necessitatibus
              qui quia dignissimos. Sit nobisssi quam non ratione dolorum et
              reprehenderit vero qui labore aperiam? Ad galisum laborum non
              soluta corrupti qui doloremque quam sed commodi culpa aut dolorum
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio quos neque sequi nobis et! Sit recusandae earum, sequi harum
              suscipit alias illum non dolores tempora tempore! Error quaerat
              fuga earum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Error quae ex qui consectetur unde expedita quisquam culpa,
              suscipit nesciunt sint minus tempore. Atque molestias quo facilis
              sequi delectus dolor veritatis?
            </p>
            <br />
            <p className="font-semibold paratext xl:text-xl lg:text-md">
              Ad quia voluptas et consectetur iusto in repellat necessitatibus
              qui quia dignissimos. Sit nobisssi quam non ratione dolorum et
              reprehenderit vero qui labore aperiam? Ad galisum laborum non
              soluta corrupti qui doloremque quam sed commodi culpa aut dolorum
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio quos neque sequi nobis et! Sit recusandae earum, sequi harum
              suscipit alias illum non dolores tempora tempore! Error quaerat
              fuga earum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Error quae ex qui consectetur unde expedita quisquam culpa,
              suscipit nesciunt sint minus tempore. Atque molestias quo facilis
              sequi delectus dolor veritatis?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
