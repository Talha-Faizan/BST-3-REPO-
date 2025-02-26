import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

const FAQ = () => {
  const [Questions] = useState([
    {
      question: "Who can join Bharat Storytellers?",
    },
    {
      question: "Who can join Bharat Storytellers?",
    },
    {
      question: "Who can join Bharat Storytellers?",
    },
    {
      question: "Who can join Bharat Storytellers?",
    },
    {
      question: "Who can join Bharat Storytellers?",
    },
    {
      question: "Who can join Bharat Storytellers?",
    },
  ]);
  return (
    <section className="px-4">
      <div>
        <h1 className="text-2xl md:text-3xl text-center mt-10 mb-10 font-bold headtext">Frequently Asked Questions</h1>
        {Questions.map((ques, index) => {
          return (
            <div key={index} className="p-4 md:p-5 bg-[#f8edee] mb-3 rounded-2xl flex items-center justify-between font-semibold paratext">
              <h4 className="text-base md:text-lg">{ques.question}</h4>
              <IoIosArrowDropright className="text-3xl md:text-4xl" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
