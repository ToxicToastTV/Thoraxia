import useSWR from 'swr';
import { fetcherUtils } from '@thoraxia/shared';
import { DevDebugger } from '@thoraxia/ui-components/*';
import Card from './card';

export function App() {

  const healthApi = useSWR('health', url => fetcherUtils(url, null), { dedupingInterval: 0 });

  return (
    <>
      <div className="p-4">
        <Card key="toxictoast.de" title="ToxicToast.de" status={healthApi.data?.details?.['ToxicToast.de']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card key="category" title="Inventory - Category Microservice" status={healthApi.data?.details?.['Inventory - Category Microservice']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card key="item" title="Inventory - Item Microservice" status={healthApi.data?.details?.['Inventory - Item Microservice']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card key="company" title="Inventory - Company Microservice" status={healthApi.data?.details?.['Inventory - Company Microservice']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card key="location" title="Inventory - Location Microservice" status={healthApi.data?.details?.['Inventory - Location Microservice']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card key="type" title="Inventory - Type Microservice" status={healthApi.data?.details?.['Inventory - Type Microservice']?.status === 'up'} />
      </div>

      <div className="p-4">
        <Card key="size" title="Inventory - Size Microservice" status={healthApi.data?.details?.['Inventory - Size Microservice']?.status === 'up'} />
      </div>
    </>
  );
}

export default App;
