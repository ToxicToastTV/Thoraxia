import React from 'react';

interface Props {
  show: boolean;
  children: React.ReactNode;
}

function Show(props: Props) {
  return <>{props.show ? props.children : undefined}</>;
}

export default React.memo(Show);
