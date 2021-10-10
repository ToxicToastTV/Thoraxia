import React from 'react';
import { Show, LoadingCard, Alerts, Cards } from '@thoraxia/ui-components/*';
import { Link } from 'react-router-dom';

interface Props {
  isLoading: boolean;
  data: Array<any>;
}

function CategoriesContainer(props: Props) {

  return (
    <>
      <Show show={!props.isLoading}>
        <Show show={props.data.length === 0}>
          <Alerts type="error" text="No entities found" />
        </Show>
        <Show show={props.data.length > 0}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {props.data.map(item => (
              <Link to={`/categories/${item.id}`}>
                <Cards hasPicture={item.picture !== null} picturePath={item.picture !== null ? item.picture : undefined} header={item.title} />
              </Link>
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

export default React.memo(CategoriesContainer);
