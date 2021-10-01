import { useAppState } from './useAppState';
import { Loader, Optional } from '@thoraxia/shared';
import { UiTypes } from '../states/actions/ui.action';

export function useUiState() {
  const { appState, dispatch } = useAppState();

  function setStatus(status: Loader): void {
    if (appState.ui.status !== status) {
      dispatch({ type: UiTypes.SetStatus, payload: status });
    }
  }

  function setError(error: Optional<string>): void {
    if (appState.ui.error !== error) {
      dispatch({ type: UiTypes.SetError, payload: error });
    }
  }

  function setNavigation(navigation: Array<{ title: string; route: string; }>): void {
    if (appState.ui.navigation !== navigation) {
      dispatch({ type: UiTypes.SetNavigation, payload: navigation });
    }
  }

  return {
    setStatus,
    setError,
    setNavigation,
  }

}
