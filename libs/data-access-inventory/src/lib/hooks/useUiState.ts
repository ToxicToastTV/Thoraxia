import { useAppState } from './useAppState';

export function useUiState() {

  const { appState, dispatch } = useAppState();

}
