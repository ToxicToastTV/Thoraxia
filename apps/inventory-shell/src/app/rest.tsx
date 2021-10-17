import { useAppState, useCategoryState, useCompanyState, useItemState } from '@thoraxia/data-access-inventory';
import useSWR from 'swr';
import { fetcherUtils, Nullable } from '@thoraxia/shared';
import React from 'react';

interface Props {
  token: Nullable<string>;
  categoryId: Nullable<string>;
}

function Rest(props: Props) {
  const appState = useAppState();
  const categoryState = useCategoryState();
  const itemState = useItemState();
  const companyState = useCompanyState();
  //
  const categoryApi = useSWR('inventory/category', url => fetcherUtils(url, props.token), { dedupingInterval: 0 });
  const itemApi = useSWR('inventory/item', url => fetcherUtils(url, props.token), { dedupingInterval: 0 });
  const companyApi = useSWR('inventory/company', url => fetcherUtils(url, props.token), { dedupingInterval: 0 });
  //

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

  const addItemData = React.useCallback((data: Array<any>, error: Error & { info: string; status: number }) => {
    if (data) {
      itemState.setData(data.filter(item => item.active));
      itemState.setStatus('loaded');
    }
    if (error) {
      itemState.setData([]);
      itemState.setStatus('error');
    }
  }, []);

  const addCompanyData = React.useCallback((data: Array<any>, error: Error & { info: string; status: number }) => {
    if (data) {
      companyState.setData(data.filter(item => item.active));
      companyState.setStatus('loaded');
    }
    if (error) {
      companyState.setData([]);
      companyState.setStatus('error');
    }
  }, []);

  //

  React.useEffect(() => {
    // categoryState.setStatus('loading');
    addCategoryData(categoryApi.data, categoryApi.error);
  }, [categoryApi.isValidating]);

  React.useEffect(() => {
    // itemState.setStatus('loading');
    addItemData(itemApi.data, itemApi.error);
  }, [itemApi.isValidating]);

  React.useEffect(() => {
    // companyState.setStatus('loading');
    addCompanyData(companyApi.data, companyApi.error);
  }, [companyApi.isValidating]);


  return null;
}

export default React.memo(Rest);
