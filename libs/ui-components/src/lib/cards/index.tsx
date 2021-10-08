import React from 'react';
import Show from '../show';

interface Props {
  hasPicture: boolean;
  header: string;
  onClick?: () => void;
}

function Cards(props: Props) {
  return (
      <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer" onClick={props.onClick}>
        <div className="overflow-x-hidden rounded-2xl relative">
          <Show show={props.hasPicture}>
            <img className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
          </Show>
        </div>
        <div className="mt-4 pl-2 mb-2 flex justify-between ">
          <div>
            <p className="text-lg font-semibold text-gray-900 mb-0">{props.header}</p>
          </div>
        </div>
      </div>
  );
}

export default React.memo(Cards);
