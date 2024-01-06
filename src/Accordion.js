import React, { useState } from "react";

const Accordion = ({ title, content, id }) => {
  const [selected, isSelected] = useState(null);

  function handleOnclick(id) {
    isSelected(id === selected ? null : id);
  }
  return (
    <section
      className="w-[48rem] bg-[#fafafa] my-2 rounded-md py-4 px-5 cursor-pointer"
      key={id}
      onClick={() => handleOnclick(id)}
    >
      <div className="flex place-content-between">
        <div className="w-[40rem] flex flex-col">
          <div className="font-bold">{title}</div>
          <div>{selected === id ? <span>{content}</span> : null}</div>
        </div>
        <div className="flex items-center justify-center cursor-pointer font-bold">{
          selected === id ? '-': "+"
        }</div>
      </div>
    </section>
  );
};

export default Accordion;
