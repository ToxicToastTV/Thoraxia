import { useAppState } from './useAppState';
import React from 'react';
import { Loader, Nullable } from '@thoraxia/shared';
import { ItemTypes } from '../states/actions/item.action';

export function useItemState() {

  const { appState, dispatch } = useAppState();

  const setStatus = React.useCallback((status: Loader) => {
    if (appState.item.status !== status) {
      dispatch({ type: ItemTypes.SetStatus, payload: status });
    }
  }, []);

  const setData = React.useCallback((data: any) => {
    if (appState.item.data !== data) {
      dispatch({ type: ItemTypes.SetData, payload: data });
    }
  }, []);

  const selectCategory = React.useCallback((categoryId: Nullable<string>) => {
    if (appState.item.selectedCategory !== categoryId) {
      dispatch({ type: ItemTypes.SetCategoryId, payload: categoryId });
    }
  }, []);

  const selectItem = React.useCallback((item: Nullable<string>) => {
    if (appState.item.selectedItem !== item) {
      // dispatch({ type: CategoryTypes.SetData, payload: data });
    }
  }, []);

  const selectCompany = React.useCallback((company: Nullable<string>) => {
    if (appState.item.selectedCompany !== company) {
      // dispatch({ type: CategoryTypes.SetData, payload: data });
    }
  }, []);

  const selectLocation = React.useCallback((location: Nullable<string>) => {
    if (appState.item.selectedLocation !== location) {
      // dispatch({ type: CategoryTypes.SetData, payload: data });
    }
  }, []);

  const selectType = React.useCallback((type: Nullable<string>) => {
    if (appState.item.selectedType !== type) {
      // dispatch({ type: CategoryTypes.SetData, payload: data });
    }
  }, []);

  const selectSize = React.useCallback((size: Nullable<string>) => {
    if (appState.item.selectedSize !== size) {
      // dispatch({ type: CategoryTypes.SetData, payload: data });
    }
  }, []);

  return {
    setStatus,
    setData,
    selectCategory,
    selectItem,
    selectCompany,
    selectLocation,
    selectType,
    selectSize
  }
}
