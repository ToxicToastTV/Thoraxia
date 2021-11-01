import React from 'react';
import { environment } from '../environments/environment';

interface Props {}

function SSE(props: Props) {
  React.useEffect(() => {
    const url = `http://${environment.GATEWAY_URI}/api/sse`
    const eventSource = new EventSource(url);
    eventSource.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      switch (parsedData.type) {
        default:
          console.error(parsedData);
          return;
        case 'twitch.bot.pong':
          console.log('Pong', parsedData.latency, 'ms')
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
