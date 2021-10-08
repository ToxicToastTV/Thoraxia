import React from 'react';
import Show from '../show';
import { Optional } from '@thoraxia/shared';

interface Props {
  hasPicture: boolean;
  picturePath: Optional<string>;
  header: string;
  onClick?: () => void;
}

function Cards(props: Props) {
  return (
      <div className="card bordered bg-white shadow-md text-black hover:text-primary cursor-pointer" onClick={props.onClick}>
        <Show show={props.hasPicture}>
        <figure>
          <img src={props.picturePath} className="h-40 rounded-2xl w-full object-cover" />
        </figure>
        </Show>
        <div className="card-body">
          <h2 className="card-title">{props.header}</h2>
        </div>
      </div>
  );
}

export default React.memo(Cards);
