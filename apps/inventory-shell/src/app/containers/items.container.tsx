import React from 'react';
import { DevDebugger } from '@thoraxia/ui-components/*';
import { Nullable } from '@thoraxia/shared';

interface Props {
  isLoading: boolean;
  data: Array<any>;
}

function ItemsContainer(props: Props) {

  return (
    <>
      <DevDebugger data={props} />
    </>
  );
}

export default React.memo(ItemsContainer);

