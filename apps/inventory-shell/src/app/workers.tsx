import React from 'react';
import { workerUtils } from '@thoraxia/shared';
import { useAppState, useCategoryState, useUiState } from '@thoraxia/data-access-inventory';

interface Props {}

function Workers(props: Props) {

  const { appState } = useAppState();
  const uiState = useUiState();
  const categoryState = useCategoryState();

  const categoryWorker = React.useCallback((token: string) => {
    workerUtils<any>(
      '/assets/workers/api-worker.js',
      { url: 'http://localhost:3333/api/inventory/category', token },
      (categoryData => {
        if (categoryData) {
          const { status, result } = categoryData;
          if (!status) {
            categoryState.setStatus('error');
          } else {
            categoryState.setStatus('loaded');
            categoryState.setData(result);
          }
        } else {
          categoryState.setStatus('loading');
        }
      })
    );
  }, []);
  //
  React.useEffect(() => {
    if (appState.auth.loggedIn) {
      if (appState.auth.token !== null) {
        categoryWorker(appState.auth.token);
      }

    }
  }, [appState.auth.loggedIn, appState.auth.token])
  //
  return null;
}

export default React.memo(Workers);
