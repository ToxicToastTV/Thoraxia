import React from 'react';
import { DevDebugger, Show, LoadingCard, Alerts, Cards } from '@thoraxia/ui-components/*';
import { useRouter } from '@thoraxia/ui-hooks';
import { Nullable } from '@thoraxia/shared';
import { Link } from 'react-router-dom';

interface Props {
  isLoading: boolean;
  data: Array<any>;
  id: Nullable<string>;
}

function CategoryContainer(props: Props) {

  return (
    <>
      <DevDebugger data={props} />
    </>
  );

}

export default React.memo(CategoryContainer);
