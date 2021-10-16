import { DevDebugger } from '@thoraxia/ui-components/*';
import React from 'react';
import { useAppState } from '@thoraxia/data-access-inventory';
import { useRouter } from '@thoraxia/ui-hooks';
import Show from '../show';
import { Nullable } from '@thoraxia/shared';

interface Props {
  category_id: Nullable<string>;
  company_id: Nullable<string>;
  size_id: Nullable<string>;
  type_id: Nullable<string>;
  location_id: Nullable<string>;
  title: string;
  minSku: Nullable<number>;
  quantity: Nullable<number>;
}

function ItemCard(props: Props) {

  const { appState } = useAppState();
  const router = useRouter();

  const OutOfStock = React.useCallback((minSku: number, qty: number) => {
    if (qty <= minSku) {
      return 'bg-error';
    }
    return '';
  }, []);

  const getCategoryName = React.useCallback((id: Nullable<string>) => {
    if (id === null) {
      return null;
    }
    return appState.category.data.find(item => item.id === id)?.title || '';
  }, []);

  const getCompanyName = React.useCallback((id: Nullable<string>) => {
    if (id === null) {
      return 'COMPANY_ID';
    }
    return appState.company.data.find(item => item.id === id)?.title || '';
  }, []);

  return (
    <div className={`card border border-primary bg-neutral shadow-md text-white cursor-pointer ${OutOfStock(props.minSku || 0, props.quantity || 0)}`}>
      <div className="card-body">
        <h2 className="card-title hover:text-primary ">{getCompanyName(props.company_id)} {props.title}</h2>
        <div className="card-actions">
          <button className="btn btn-sm btn-ghost">{props.quantity}x</button>
          <Show show={props.size_id !== null}>
            <button className="btn btn-sm btn-ghost" onClick={() => router.push('/sizes/' + props.size_id)}>{props.size_id}</button>
          </Show>
          <Show show={props.type_id !== null}>
            <button className="btn btn-sm btn-ghost" onClick={() => router.push('/types/' + props.type_id)}>{props.type_id}</button>
          </Show>
          <Show show={props.location_id !== null}>
            <button className="btn btn-sm btn-ghost" onClick={() => router.push('/rooms/' + props.location_id)}>{props.location_id}</button>
          </Show>
          <Show show={props.category_id !== null}>
            <button className="btn btn-sm btn-ghost" onClick={() => router.push('/categories/' + props.category_id)}>{getCategoryName(props.category_id)}</button>
          </Show>
        </div>
      </div>
    </div>
  );

}

export default React.memo(ItemCard);
