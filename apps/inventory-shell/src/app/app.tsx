import { useAppState, useAuthState, useUiState } from '@thoraxia/data-access-inventory';
import {
  DevDebugger,
  Loading,
  TopNavigation,
} from '@thoraxia/ui-components/index';
import React from 'react';
import { useRouter } from '@thoraxia/ui-hooks';
import { workerUtils } from '@thoraxia/shared';
import { useAuth0 } from '@auth0/auth0-react';

export function App() {
  const { appState } = useAppState();
  const router = useRouter();
  const uiState = useUiState();
  const authState = useAuthState();
  const auth0 = useAuth0();

  const apiWorker = React.useCallback(() => {
    workerUtils<any>(
      '/assets/workers/api-worker.js',
      'https://jsonplaceholder.typicode.com/posts',
      (data => console.error('worker data', data))
    );
  }, []);

  const socketWorker = React.useCallback(() => {
    const token = 'eyJraWQiOiJpZmJSWm5WSW1lZWZcL2lEVGl4Z3QwbHpEck5Vb1NBUEZpbXlXdE9tRkRwND0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiMGxBMFZYMjlXUllpamJoYzYzcUNodyIsInN1YiI6ImE4NGViMjU5LWQ3ODctNDcyNy1hZmI4LTllYmRiNTIxNTZhMCIsImNvZ25pdG86Z3JvdXBzIjpbImV1LXdlc3QtMV9Jd01hQk1FUlpfY2VudHJhbERQUEF1dGgiXSwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV9Jd01hQk1FUloiLCJjb2duaXRvOnVzZXJuYW1lIjoiY2VudHJhbGRwcGF1dGhfMTlhNDhjY2EtMzg2Ny00NmVjLTkwNzItZjQ4YWE5MThjODE4IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZXdpZzNsYSIsImdpdmVuX25hbWUiOiJUaG9tYXMiLCJub25jZSI6ImF3aFNuXzBwWFg4N0Z5eE9yWS1RVkhMUzlGanZyM281Y0RTNUUteXNlT3I3M21mdmpHOFpEcWxpMFgtanhmNVZhWll1aXlzcU9PdGRIclY1VFVpMDdkUnJZUldCYWoyOXFBdXozdW9mY0pHMnVYanZlajg1MnVqNGl4eVJqVDBsczBHaTRHY19MRURhS3JtOTJjRUo5VmhpYUl3X25NSUl2QzBxNXdGMHNPQSIsImF1ZCI6Ijd1OXAwNmx1cmh0bmwzNmhtMWkwOHRwbXRiIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTlhNDhjY2EtMzg2Ny00NmVjLTkwNzItZjQ4YWE5MThjODE4IiwicHJvdmlkZXJOYW1lIjoiY2VudHJhbERQUEF1dGgiLCJwcm92aWRlclR5cGUiOiJPSURDIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYyNTgzNjAwNDA2MSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6IlAxIFAyIFAzIFA0IFA1IFA2IFAxMCBQMTIgUDExIFAxNCBQMTMgUDE2IFAxNSBQMTggUDE3IiwiYXV0aF90aW1lIjoxNjMyOTQ5ODExLCJleHAiOjE2MzI5NTM0MTEsImlhdCI6MTYzMjk0OTgxMSwiZmFtaWx5X25hbWUiOiJLb3J0eWthIiwiZW1haWwiOiJ0aG9tYXMua29ydHlrYUBjZ2kuY29tIn0.YRQv6uzyP65vEsNisZO1aThifSXyUmf9FUY7ix6wMXhLgFb61nVB4dMfyeq0e67emPjRC8sTR5EaAdxV-b9YXTRSCxhOJni0Bntdn7KNia1hw_uXSkuQr3P20trQkNCP9EqMv9N7-SmbbyVXsu8LNyhPijnF_fEKAnGZHDyfMbjZnP0Ammjju1Uk756Lah9uLEs3yyaIz7bWGztPiFKX1ADWBllsLXC93AB7QKqvTnf_eBZwWhWa1oZvRIO8wt7LqYGR7pzrqPtF4Jd-yVXkOsqmQ9v5pgk76fbW2YYpbMlBIqd2IBfSJaXkAqst8ioIaa8bAohGKVZDQi7f9sceIA';
    workerUtils<any>(
      '/assets/workers/websocket-worker.js',
      'wss://websocket.icos-dev.dpp.porsche.com/icos?token=' + token,
      (data => {
        if (typeof data !== 'undefined') {
          uiState.setSocketData(data)
        }

      })
    );
  }, []);

  React.useEffect(() => {
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
    apiWorker();
    socketWorker();
    //
  }, []);

  React.useEffect(() => {
    authState.setStatus(auth0.isAuthenticated);
    if (auth0.isAuthenticated) {
      authState.setUserName(auth0?.user?.nickname || '');
      authState.setAvatar(auth0?.user?.picture || '');
    }
  }, [auth0.isAuthenticated]);

  React.useEffect(() => {
    authState.setLoader(auth0.isLoading ? 'loading' : 'loaded');
  }, [auth0.isLoading]);

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <TopNavigation
        isDark={true}
        navigation={appState.ui.navigation}
        avatar={appState.auth.avatar}
        dropdown={false}
        isLoggedIn={appState.auth.loggedIn}
        loginWithRedirect={() => auth0.loginWithRedirect()}
      />
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
