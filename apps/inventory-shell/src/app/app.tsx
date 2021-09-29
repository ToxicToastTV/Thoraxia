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
  const uiState = useUiState();

  const apiWorker = React.useCallback(() => {
    workerUtils<any>(
      '/assets/workers/api-worker.js',
      'https://jsonplaceholder.typicode.com/posts',
      (data => console.error('worker data', data))
    );
  }, []);

  const socketWorker = React.useCallback(() => {
    workerUtils<any>(
      '/assets/workers/websocket-worker.js',
      'wss://websocket.icos-dev.dpp.porsche.com/icos?token=eyJraWQiOiJpZmJSWm5WSW1lZWZcL2lEVGl4Z3QwbHpEck5Vb1NBUEZpbXlXdE9tRkRwND0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiX095b3NnaDJTdDljMURtMlVfUDFpZyIsInN1YiI6ImE4NGViMjU5LWQ3ODctNDcyNy1hZmI4LTllYmRiNTIxNTZhMCIsImNvZ25pdG86Z3JvdXBzIjpbImV1LXdlc3QtMV9Jd01hQk1FUlpfY2VudHJhbERQUEF1dGgiXSwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV9Jd01hQk1FUloiLCJjb2duaXRvOnVzZXJuYW1lIjoiY2VudHJhbGRwcGF1dGhfMTlhNDhjY2EtMzg2Ny00NmVjLTkwNzItZjQ4YWE5MThjODE4IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZXdpZzNsYSIsImdpdmVuX25hbWUiOiJUaG9tYXMiLCJhdWQiOiI3dTlwMDZsdXJodG5sMzZobTFpMDh0cG10YiIsImlkZW50aXRpZXMiOlt7InVzZXJJZCI6IjE5YTQ4Y2NhLTM4NjctNDZlYy05MDcyLWY0OGFhOTE4YzgxOCIsInByb3ZpZGVyTmFtZSI6ImNlbnRyYWxEUFBBdXRoIiwicHJvdmlkZXJUeXBlIjoiT0lEQyIsImlzc3VlciI6bnVsbCwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE2MjU4MzYwMDQwNjEifV0sInRva2VuX3VzZSI6ImlkIiwic2NvcGUiOiJQMSBQMiBQMyBQNCBQNSBQNiBQMTAgUDEyIFAxMSBQMTQgUDEzIFAxNiBQMTUgUDE4IFAxNyIsImF1dGhfdGltZSI6MTYzMjk0Mzg3NywiZXhwIjoxNjMyOTQ3NDc3LCJpYXQiOjE2MzI5NDM4NzcsImZhbWlseV9uYW1lIjoiS29ydHlrYSIsImVtYWlsIjoidGhvbWFzLmtvcnR5a2FAY2dpLmNvbSJ9.lF_s8Z_bniy4L4JF-vUZJxgCUaPeEdSymr3T8oBVdHgSPV0Kv8uO98zW_k346AvM9jrdGamvoc34pBQ22GfodZUtT5tsDWUijZ3JQbGcMTIy-3MX6GpBhrJUlckMiRSyHJXigA_PByctDfICON6xlOtkwhua596aR4yHp6FpxDiIJlepK5AFexNWeBiEY8ZeLyhDEvYlh3crVMEprvsG7efP1D8uHHx43uDyetzX5kDHqrFzk5UUmA0vaaQgmYcV07HqO1mPtsbRJ5CUBDOZJzt1aCKvzSO2ul9JfoCGOtEymjE89QK81JtNj_-sajMbVh-CvMPvpL9TckOwrWnAXQ',
      (data => {
        console.error('worker data', data);
        uiState.setSocketData(data)
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
  }, []);

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <TopNavigation
        isDark={true}
        navigation={appState.ui.navigation}
        avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        dropdown={false}
      />
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
