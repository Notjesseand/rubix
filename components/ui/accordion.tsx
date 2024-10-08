"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface AccordionProps {
  title: string;
  content: Array<any>;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion px-4 bg-black rounded py-2 mt-3 text-white transition-all duration-1000">
      <button
        className="accordion-title font-semibold text-base flex justify-between w-full items-center"
        onClick={handleToggle}
      >
        {title} <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <div className="accordion-content transition-all duration-1000  ">
          {content.map((item: any, index: any) => (
            <p className="mt-2 transition-all duration-500" key={index}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
