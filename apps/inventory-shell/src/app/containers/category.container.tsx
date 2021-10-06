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
          <div className="min-h-screen bg-gray-100 flex flex-col justify-start">
            <div className="relative m-3 flex flex-wrap mx-auto justify-center">
              {props.data.map(item => (
                <Cards hasPicture={true} header={item.title} onClick={() => push(`/categories/${item.id}`)} />
              ))}
            </div>
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
