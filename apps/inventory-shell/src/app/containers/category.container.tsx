import React from 'react';
import { DevDebugger, Show, Alerts, ItemCard } from '@thoraxia/ui-components/*';
import { fetcherUtils, Nullable } from '@thoraxia/shared';
import { useAppState, useItemState } from '@thoraxia/data-access-inventory';
import { Link } from 'react-router-dom';

interface Props {
  isLoading: boolean;
  data: Array<any>;
  id: Nullable<string>;
}

function CategoryContainer(props: Props) {
  const { appState } = useAppState();
  const itemState = useItemState();

  React.useEffect(() => {
    itemState.selectCategory(props.id);
    return () => {
      itemState.selectCategory(null);
    }
  }, [props.id]);

  return (
    <>
      <Show show={!props.isLoading}>
        <Show show={props.data.length === 0}>
          <Alerts type="error" text="No entities found" />
        </Show>
      </Show>
      <Show show={props.data.length > 0}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.data.map(((item, index: number) => (
            <Link to={`/items/${item.id}`}>
              <ItemCard
                key={index}
                id={item.id}
                category_id={null}
                company_id={item.company_id}
                size_id={item.size_id}
                type_id={item.size_id}
                location_id={item.location_id}
                title={item.title}
                minSku={item.minSku}
                quantity={item.quantity}
              />
            </Link>
          )))}
        </div>
      </Show>
    </>
  );

}

export default React.memo(CategoryContainer);
