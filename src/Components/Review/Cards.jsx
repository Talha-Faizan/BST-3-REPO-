import React, { useState } from "react";

const Cards = () => {
  const [data] = useState([
    {
      image: "",
      title: "Podcast",
      desc: "Lorem Ipsum",
    },
    {
      image: "",
      title: "Learning",
      desc: "lorem Ipsum",
    },
    {
      image: "",
      title: "Notes pdf",
      desc: "lorem Ipsum",
    },
  ]);
  return (
    <section>
      <div></div>
    </section>
  );
};

export default Cards;
