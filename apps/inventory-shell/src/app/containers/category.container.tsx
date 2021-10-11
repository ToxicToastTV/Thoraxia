import React from 'react';
import { DevDebugger, Show, Alerts } from '@thoraxia/ui-components/*';
import { fetcherUtils, Nullable } from '@thoraxia/shared';

interface Props {
  isLoading: boolean;
  data: Array<any>;
  id: Nullable<string>;
}

function CategoryContainer(props: Props) {

  React.useEffect(() => {
    console.error('selectedCategory', props.id);
  }, [props.id])

  return (
    <>
      <Show show={!props.isLoading}>
        <Show show={props.data.length === 0}>
          <Alerts type="error" text="No entities found" />
        </Show>
      </Show>
      <Show show={props.data.length > 0}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
         <DevDebugger data={props.data} />
        </div>
      </Show>
    </>
  );

}

export default React.memo(CategoryContainer);
