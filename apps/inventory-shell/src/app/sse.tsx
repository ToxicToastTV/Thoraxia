import React from 'react';
import { useAppState, useCategoryState, useCompanyState, useItemState } from '@thoraxia/data-access-inventory';
import { environment } from '../environments/environment';

interface Props {}

function SSE(props: Props) {
  const appState = useAppState();
  const categoryState = useCategoryState();
  const itemState = useItemState();
  const companyState = useCompanyState();
  //
  React.useEffect(() => {
    const url = `http://${environment.GATEWAY_URI}/api/sse`
    const eventSource = new EventSource(url);
    eventSource.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      switch (parsedData.type) {
        default:
          console.error(parsedData);
          return;
      }
    }
    return () => {
      eventSource.close();
    }
  }, []);
  //
  return null;
}

export default React.memo(SSE);
