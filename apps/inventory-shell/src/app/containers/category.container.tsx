import React from 'react';
import { DevDebugger, Show, LoadingCard, Alerts, Cards } from '@thoraxia/ui-components/*';
import { useRouter } from '@thoraxia/ui-hooks';

interface Props {
  isLoading: boolean;
  data: Array<any>;
}

function CategoryContainer(props: Props) {

  const { push } = useRouter();

  return (
    <>
      <Show show={!props.isLoading}>
        <Show show={props.data.length === 0}>
          <Alerts type="error" text="No entities found" />
        </Show>
        <Show show={props.data.length > 0}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {props.data.map(item => (
              <Cards hasPicture={item.picture !== null} picturePath={item.picture !== null ? item.picture : undefined} header={item.title} onClick={() => push(`/categories/${item.id}`)} />
            ))}
          </div>
        </Show>
      </Show>
      <Show show={props.isLoading}>
        <LoadingCard />
      </Show>
    </>
  );

}

export default React.memo(CategoryContainer);
