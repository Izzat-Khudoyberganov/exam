import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="rounded border-[1px] border-gray p-5 w-full h-[129px] flex justify-between items-center">
      <div className="flex flex-col justify-between h-full">
        <h2 className="text-dark text-2xl font-bold leading-7">{title}</h2>
        <a
          className="text-gray text-sm font-normal leading-4"
          href="#!">
          Подробее{' '}
        </a>
      </div>
      <div className="w-[207px] h-[90px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Card;
