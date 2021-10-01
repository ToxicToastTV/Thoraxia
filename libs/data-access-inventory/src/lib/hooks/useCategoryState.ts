import { useAppState } from './useAppState';
import { Loader } from '@thoraxia/shared';
import { CategoryTypes } from '../states/actions/category.action';
import React from 'react';

export function useCategoryState() {
  const { appState, dispatch } = useAppState();

  const setStatus = React.useCallback((status: Loader) => {
    if (appState.category.status !== status) {
      dispatch({ type: CategoryTypes.SetStatus, payload: status });
    }
  }, []);

  const setData = React.useCallback((data: any) => {
    if (appState.category.data !== data) {
      dispatch({ type: CategoryTypes.SetData, payload: data });
    }
  }, []);

  return {
    setStatus,
    setData
  }

}
