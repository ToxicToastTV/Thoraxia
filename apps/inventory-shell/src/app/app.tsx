import { useAppState, useUiState } from '@thoraxia/data-access-inventory';
import {
  DevDebugger,
  Loading,
  TopNavigation,
} from '@thoraxia/ui-components/index';
import React from 'react';
import { useRouter } from '@thoraxia/ui-hooks';
import { workerUtils } from '@thoraxia/shared';

export function App() {
  const { appState } = useAppState();
  const router = useRouter();
  const { setNavigation } = useUiState();

  const apiWorker = React.useCallback(() => {
    workerUtils<any>(
      '/assets/workers/api-worker.js',
      'https://jsonplaceholder.typicode.com/posts',
      (data => console.error('worker data', data))
    );
  }, []);

  const socketWorker = React.useCallback(() => {
    /*workerUtils<any>(
      '/assets/workers/websocket-worker.js',
      'wss://websocket.icos-dev.dpp.porsche.com/icos?token=eyJraWQiOiJpZmJSWm5WSW1lZWZcL2lEVGl4Z3QwbHpEck5Vb1NBUEZpbXlXdE9tRkRwND0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoibG9jbDU0dHVwOUZZSkxGS1E3T3ZSUSIsInN1YiI6ImE4NGViMjU5LWQ3ODctNDcyNy1hZmI4LTllYmRiNTIxNTZhMCIsImNvZ25pdG86Z3JvdXBzIjpbImV1LXdlc3QtMV9Jd01hQk1FUlpfY2VudHJhbERQUEF1dGgiXSwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV9Jd01hQk1FUloiLCJjb2duaXRvOnVzZXJuYW1lIjoiY2VudHJhbGRwcGF1dGhfMTlhNDhjY2EtMzg2Ny00NmVjLTkwNzItZjQ4YWE5MThjODE4IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZXdpZzNsYSIsImdpdmVuX25hbWUiOiJUaG9tYXMiLCJub25jZSI6InBrYUVtd3laX2lqNmtrbGRpOXdfVHRRRVF1eWs5cWwzbEkwNGJrNHJVVTlTM2otMFhnYVczeU5QMGJlenJqWmZCZF9wV2lFMi1yVjBXejJuaHc2MWcwVGt4NHI0bm1rdExVT2tMQnEzSzJ4YUQ4OXNpVUo2UV9BTDdHUi1laS1pVzdMTlVwa3FLZXAwY1NUaTNUd0Y1ckRvalBWUmc4WURkMEpsZUhhemU1SSIsImF1ZCI6Ijd1OXAwNmx1cmh0bmwzNmhtMWkwOHRwbXRiIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTlhNDhjY2EtMzg2Ny00NmVjLTkwNzItZjQ4YWE5MThjODE4IiwicHJvdmlkZXJOYW1lIjoiY2VudHJhbERQUEF1dGgiLCJwcm92aWRlclR5cGUiOiJPSURDIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYyNTgzNjAwNDA2MSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6IlAxIFAyIFAzIFA0IFA1IFA2IFAxMCBQMTIgUDExIFAxNCBQMTMgUDE2IFAxNSBQMTggUDE3IiwiYXV0aF90aW1lIjoxNjMyOTE1OTg5LCJleHAiOjE2MzI5MTk1ODksImlhdCI6MTYzMjkxNTk4OSwiZmFtaWx5X25hbWUiOiJLb3J0eWthIiwiZW1haWwiOiJ0aG9tYXMua29ydHlrYUBjZ2kuY29tIn0.ineQi7Z4UvYBhs1O9LzRkphbSPtLEKqR2rDI8mE2infOlx7jqGnS172dtTqxK1_rsnI1fX6qPuoExhKO2VxwPSlKY7DSrlymmvEBuNlCYEH_wnvSHUWeGrhsHyEK6ZD1u0jM_4cDk4wyBueVOHxXgMieb89kqH_B6tWnlUBqffl8fS9CHiF-nMiiK9bwLoqzC0slmBWyOIAvvWG91i2defM7n9ihGF_yfzJNksoZOHHgGZIGXmWfYWm_Wr5F4GtGkLO4eq7ukQkLZYt5gkhVW-W9j0DpwwrR-OzEHpkwRpi1Wdt6RTcgfg79-KheWMxNfpSAPSCSMuZq4eUX8qbm2g',
      (data => console.error('worker data', data))
    );*/
  }, []);

  React.useEffect(() => {
    const navigation: Array<{ title: string; route: string; }> = [];
    navigation.push({
      title: 'Categories',
      route: '/categories',
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
    setNavigation(navigation);
    //
    apiWorker();
    socketWorker();
  }, []);

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <TopNavigation isDark={true} navigation={appState.ui.navigation} />
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
