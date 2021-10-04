import { useAppState, useAuthState, useUiState } from '@thoraxia/data-access-inventory';
import {
  DevDebugger,
  Loading, Show,
  TopNavigation
} from '@thoraxia/ui-components/index';
import React from 'react';
import { useRouter } from '@thoraxia/ui-hooks';
import { useAuth0 } from '@auth0/auth0-react';
import Workers from './workers';
import { BaseRoles } from '@thoraxia/shared';

export function App() {
  const { appState } = useAppState();
  const router = useRouter();
  const uiState = useUiState();
  const authState = useAuthState();
  const auth0 = useAuth0();

  const socketWorker = React.useCallback(() => {
    /*workerUtils<any>(
      '/assets/workers/websocket-worker.js',
      'wss://websocket.icos-dev.dpp.porsche.com/icos?token=' + token,
      (data => {
        if (typeof data !== 'undefined') {
          console.debug(data)
        }

      })
    );*/
  }, []);

  React.useEffect(() => {
    socketWorker();
    //
  }, []);

  React.useEffect(() => {
    authState.setStatus(auth0.isAuthenticated);
    if (auth0.isAuthenticated) {
      authState.setUserName(auth0?.user?.nickname || '');
      authState.setAvatar(auth0?.user?.picture || '');
      auth0.getIdTokenClaims().then(data => {
        const roles = data?.['http://localhost:4200/roles'] || [];
        const isAdmin = data?.['http://localhost:4200/isAdmin'] || false;
        //
        authState.setToken(data?.__raw);
        authState.setRoles(roles);
        authState.setAdminStatus(isAdmin);
      }).catch(error => console.error(error))
      //
      const navigation: Array<{ title: string; route: string; }> = [];
      navigation.push({
        title: 'Categories',
        route: '/categories',
      });
      navigation.push({
        title: 'Items',
        route: '/items',
      });
      navigation.push({
        title: 'Companies',
        route: '/companies',
      });
      navigation.push({
        title: 'Rooms',
        route: '/rooms',
      });
      navigation.push({
        title: 'Types',
        route: '/types',
      });
      navigation.push({
        title: 'Sizes',
        route: '/sizes',
      });
      uiState.setNavigation(navigation);
      //
      if (router.query && 'code' in router.query) {
        router.push('/');
      }
    }
  }, [auth0.isAuthenticated]);

  React.useEffect(() => {
    authState.setLoader(auth0.isLoading ? 'loading' : 'loaded');
  }, [auth0.isLoading]);

  React.useEffect(() => {
    if ('error' in router.query && 'error_description' in router.query) {
      const { error, error_description } = router.query as { error: string; error_description: string; };
    }
  }, [router.query])

  /*React.useEffect(() => {
    if (router !== null && router.query !== null) {
      if ('error' in router?.query) {

        toast(error_description, {
          type: 'error',
        })
      }
    }

  }, [router.query])*/

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <Workers key="WebWorkers" />
      <TopNavigation
        key="TopNavigation"
        isDark={true}
        navigation={appState.ui.navigation}
        avatar={appState.auth.avatar || ''}
        dropdown={false}
        isLoggedIn={appState.auth.loggedIn}
        isAdmin={appState.auth.isAdmin}
        loginWithRedirect={() => auth0.loginWithRedirect()}
        logoutWithRedirect={() => auth0.logout()}
      />
      <Show key="appState" show={appState.auth.loggedIn && appState.auth.roles.includes(BaseRoles.ACCESS)}>
        <DevDebugger data={appState} />
      </Show>
    </React.Suspense>
  );
}

export default App;
