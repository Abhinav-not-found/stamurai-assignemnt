import React from "react";

const TextCard = () => {
  return (
    <div className=''>
      <div className='bg-white hover:bg-gray-50 cursor-pointer w-full h-28 p-4 rounded-xl flex justify-between'>
        <div>
          <p className='text-xl font-semibold first-letter:uppercase'>title</p>
          <p className='text-muted-foreground first-letter:uppercase'>
            description
          </p>
          <p className='text-muted-foreground'>date</p>
        </div>
        <div>
          <p>status</p>
          <p>users</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
