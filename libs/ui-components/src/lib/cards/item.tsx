import { DevDebugger } from '@thoraxia/ui-components/*';
import React from 'react';
import { useAppState } from '@thoraxia/data-access-inventory';
import { useRouter } from '@thoraxia/ui-hooks';
import Show from '../show';
import { Nullable } from '@thoraxia/shared';
import Buttons from '../buttons';

interface Props {
  id: Nullable<string>;
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
    return appState.category.data.find(item => item.id === id)?.title ?? '';
  }, []);

  const getCompanyName = React.useCallback((id: Nullable<string>) => {
    if (id === null) {
      return 'COMPANY_ID';
    }
    return appState.company.data.find(item => item.id === id)?.title ?? '';
  }, []);

  const consumeItem = React.useCallback((id: Nullable<string>) => {
    if (id !== null) {
      console.error('CONSUME', id);
    }
  }, []);

  return (
    <div className={`card border border-primary bg-neutral shadow-md text-white cursor-pointer ${OutOfStock(props.minSku || 0, props.quantity || 0)}`}>
      <div className="card-body">
        <h2 className="card-title hover:text-primary ">{getCompanyName(props.company_id)} {props.title}</h2>
        <div className="card-actions">
          <button className="btn btn-sm btn-ghost">{props.quantity}x</button>
          <Show show={props.size_id !== null}>
            <Buttons key="Size" size="sm" type="ghost" onClick={() => router.push('/sizes/' + props.size_id)}>{props.size_id}</Buttons>
          </Show>
          <Show show={props.type_id !== null}>
            <Buttons key="Size" size="sm" type="ghost" onClick={() => router.push('/types/' + props.type_id)}>{props.type_id}</Buttons>
          </Show>
          <Show show={props.location_id !== null}>
            <Buttons key="Size" size="sm" type="ghost" onClick={() => router.push('/rooms/' + props.location_id)}>{props.location_id}</Buttons>
          </Show>
          <Show show={props.category_id !== null}>
            <Buttons key="Size" size="sm" type="ghost" onClick={() => router.push('/categories/' + props.category_id)}>{getCategoryName(props.category_id)}</Buttons>
          </Show>
        </div>
        <div className="card-actions">
          <Buttons key="Size" size="block" type="primary" onClick={() => consumeItem(props.id)}>Consume</Buttons>
        </div>
      </div>
    </div>
  );

}

export default React.memo(ItemCard);
