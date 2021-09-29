import { useAppState } from './useAppState';
import { AuthTypes } from '../states/actions/auth.action';
import { Loader } from '@thoraxia/shared';

export function useAuthState() {
  const { appState, dispatch } = useAppState();

  function setLoader(status: Loader): void {
    if (appState.auth.status !== status) {
      dispatch({ type: AuthTypes.SetStatus, payload: status });
    }
  }

  function setStatus(status: boolean): void {
    if (appState.auth.loggedIn !== status) {
      dispatch({ type: AuthTypes.SetLoggedIn, payload: status });
    }
  }

  function setUserName(username: string): void {
    if (appState.auth.username !== username) {
      dispatch({ type: AuthTypes.SetNickname, payload: username});
    }
  }

  function setAvatar(avatar: string): void {
    if (appState.auth.avatar !== avatar) {
      dispatch({ type: AuthTypes.SetAvatar, payload: avatar});
    }
  }

  return {
    setLoader,
    setStatus,
    setUserName,
    setAvatar
  }

}
