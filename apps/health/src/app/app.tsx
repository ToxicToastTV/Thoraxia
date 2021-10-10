import useSWR from 'swr';
import { fetcherUtils } from '@thoraxia/shared';
import { DevDebugger } from '@thoraxia/ui-components/*';
import Card from './card';

export function App() {

  const healthApi = useSWR('health', url => fetcherUtils(url, null), { dedupingInterval: 0 });

  return (
    <>
      <div className="p-4">
        <Card title="ToxicToast.de" status={healthApi.data?.details?.['ToxicToast.de']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card title="Inventory - Category Microservice" status={healthApi.data?.details?.['Inventory - Category Microservice']?.status === 'up'} />
      </div>
    </>
  );
}

export default App;
