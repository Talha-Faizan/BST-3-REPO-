import React from "react";

const Forms = () => {
  return (
    <section className="flex flex-col gap-10 items-center md:flex-row md:items-start mt-14">
      <div className="text-center md:text-left md:w-1/2">
        <div className="flex items-center gap-2">
          <div className="bg-[#b3ccfc] rounded h-10 w-2"></div>
          <h1 className="text-3xl md:text-4xl font-semibold">Join Us Today</h1>
        </div>
        <p className="pt-5">
          Et soluta animi ad quas quasi nam odit nihil ut consequatur explicabo.
          Ea nihil nobis eum explicabo corporis est nihil neque qui voluptas.
        </p>
      </div>

      <div className="bg-[#e7edfa] p-5 rounded-3xl flex items-center just">
        <form className="bg-white p-5 rounded-2xl">
          {[
            {
              label: "Full name",
              type: "text",
              placeholder: "First name",
              isFullWidth: false,
            },
            {
              label: "Email Address",
              type: "email",
              placeholder: "Enter email address",
              isFullWidth: true,
            },
            {
              label: "Phone Number",
              type: "tel",
              placeholder: "Enter phone number",
              isFullWidth: true,
            },
          ].map(({ label, type, placeholder, isFullWidth }, index) => (
            <div className="mb-5" key={index}>
              <h4 className="font-semibold">{label}</h4>
              {isFullWidth ? (
                <input
                  className="border-2 border-[#A7A7A7] w-full rounded-lg p-2"
                  type={type}
                  placeholder={placeholder}
                />
              ) : (
                <div className="flex gap-5">
                  <input
                    className="border-2 border-[#A7A7A7] w-1/2 rounded-lg p-2"
                    type={type}
                    placeholder={placeholder}
                  />
                  <input
                    className="border-2 border-[#A7A7A7] w-1/2 rounded-lg p-2"
                    type={type}
                    placeholder="Last name"
                  />
                </div>
              )}
            </div>
          ))}

          <div className="mb-5">
            <h4 className="font-semibold">Preferred Program</h4>
            <select
              id="menu"
              className="border-2 border-[#A7A7A7] w-full rounded-lg p-2"
            >
              {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                <option key={index} value={`option${index + 1}`}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <h4 className="font-semibold">Preferred Contact Method</h4>
            <div className="text-xs flex items-center gap-1">
              {["Phone call", "Whatsapp", "Email"].map((method, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="contact"
                    value={method.toLowerCase()}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h4 className="font-semibold">How do you hear about us?</h4>
            <textarea
              className="border-2 border-[#A7A7A7] w-full rounded-lg p-2"
              placeholder="Google search, Friend, Social media, etc"
            ></textarea>
          </div>

          <button className="uppercase px-5 py-3 bg-[#b6cfff] rounded-full rounded-tr-none">
            Send an enquiry
          </button>
        </form>

        <div>
          <div className="grid grid-cols-1 grid-rows-9 gap-4">
            <div className="row-span-3">1</div>
            <div className="row-span-3 row-start-4">2</div>
            <div className="row-span-3 row-start-7">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
