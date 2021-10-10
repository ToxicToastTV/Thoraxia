import { useCategoryState } from '@thoraxia/data-access-inventory';
import useSWR from 'swr';
import { fetcherUtils, Nullable } from '@thoraxia/shared';
import React from 'react';

interface Props {
  token: Nullable<string>;
}

function Rest(props: Props) {

  const categoryState = useCategoryState();
  const categoryApi = useSWR('inventory/category', url => fetcherUtils(url, props.token), { dedupingInterval: 0 });
  const itemApi = useSWR('inventory/item', url => fetcherUtils(url, props.token), { dedupingInterval: 0 });

  const addCategoryData = React.useCallback((data: Array<any>, error: Error & { info: string; status: number }) => {
   if (data) {
     categoryState.setData(data.filter(item => item.active));
     categoryState.setStatus('loaded');
   }
   if (error) {
     categoryState.setData([]);
     categoryState.setStatus('error');
   }
  }, []);

  React.useEffect(() => {
    addCategoryData(categoryApi.data, categoryApi.error);
  }, [categoryApi.isValidating]);

  React.useEffect(() => {
    console.error(itemApi.data, itemApi.error);
  }, [itemApi.isValidating]);

  return null;
}

export default React.memo(Rest);
