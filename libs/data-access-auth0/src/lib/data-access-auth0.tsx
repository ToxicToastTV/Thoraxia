import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

interface Props {
  domain: string;
  clientId: string;
  redirectUri: string;
  children: React.ReactNode;
}

export function DataAccessAuth0(props: Props) {
  // const router = useRouter();
  const onRedirectCallback = React.useCallback((appState: any) => {
    console.error('onRedirectCallback', 'appState', appState);
    // router.history.push(appState?.returnTo || router.pathname);
  }, []);

  return (
    <Auth0Provider
      domain={props.domain}
      clientId={props.clientId}
      redirectUri={props.redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
}

export default React.memo(DataAccessAuth0);
