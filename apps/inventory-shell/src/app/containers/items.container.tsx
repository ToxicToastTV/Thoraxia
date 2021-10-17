import React from 'react';
import { Alerts, DevDebugger, ItemCard, Show } from '@thoraxia/ui-components/*';
import { useAppState } from '@thoraxia/data-access-inventory';
import { useRouter } from '@thoraxia/ui-hooks';
import { Link } from 'react-router-dom';

interface Props {
  isLoading: boolean;
  data: Array<any>;
}

function ItemsContainer(props: Props) {

  const { appState } = useAppState();


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
                category_id={item.category_id}
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

export default React.memo(ItemsContainer);

