import { useAppState } from './useAppState';
import { AuthTypes } from '../states/actions/auth.action';
import { Loader, Nullable } from '@thoraxia/shared';

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

  function setUserName(username: Nullable<string>): void {
    if (appState.auth.username !== username) {
      dispatch({ type: AuthTypes.SetNickname, payload: username});
    }
  }

  function setAvatar(avatar: Nullable<string>): void {
    if (appState.auth.avatar !== avatar) {
      dispatch({ type: AuthTypes.SetAvatar, payload: avatar});
    }
  }

  function setAdminStatus(status: boolean): void {
    if (appState.auth.isAdmin !== status) {
      dispatch({ type: AuthTypes.SetAdminStatus, payload: status });
    }
  }

  function setToken(token: Nullable<string>): void {
    if (appState.auth.token !== token) {
      dispatch({ type: AuthTypes.SetToken, payload: token });
    }
  }

  function setRoles(roles: Array<string>): void {
    if (appState.auth.roles !== roles) {
      dispatch({ type: AuthTypes.SetRoles, payload: roles });
    }
  }

  return {
    setLoader,
    setStatus,
    setUserName,
    setAvatar,
    setAdminStatus,
    setToken,
    setRoles
  }

}
