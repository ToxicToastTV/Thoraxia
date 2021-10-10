import React from 'react';
import { DevDebugger } from '@thoraxia/ui-components/*';

interface Props {
  isLoading: boolean;
  data: Array<any>;
}

function ItemContainer(props: Props) {

  return (
    <>
      <DevDebugger data={props} />
    </>
  );
}

export default React.memo(ItemContainer);

