import React, { memo } from 'react';

interface Props {
  title: string;
  status: boolean;
}

function Card(props: Props) {

  return (
    <div className="card shadow-lg compact side bg-base-200 hover:bg-primary">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="flex-1">
          <h2 className="card-title">{props.title}</h2>
        </div>
        <div className="flex-0">
          <button className="btn btn-sm btn-active">{props.status ? 'Healthy' : 'Unhealthy'}</button>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
