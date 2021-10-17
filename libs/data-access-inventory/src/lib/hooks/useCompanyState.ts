import { useAppState } from './useAppState';
import { Loader } from '@thoraxia/shared';
import { CompanyTypes } from '../states/actions/company.action';
import React from 'react';

export function useCompanyState() {
  const { appState, dispatch } = useAppState();

  const setStatus = React.useCallback((status: Loader) => {
    if (appState.category.status !== status) {
      dispatch({ type: CompanyTypes.SetStatus, payload: status });
    }
  }, []);

  const setData = React.useCallback((data: any) => {
    if (appState.category.data !== data) {
      dispatch({ type: CompanyTypes.SetData, payload: data });
    }
  }, []);

  return {
    setStatus,
    setData
  }

}
