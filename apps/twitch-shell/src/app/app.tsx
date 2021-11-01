import React from 'react';
import { Loading } from '@thoraxia/ui-components/*';
import { useAuth0 } from '@auth0/auth0-react';
import LayoutContainer from './containers/layout.container';

export function App() {

  const auth0 = useAuth0();

  return (
    <React.Suspense fallback={<Loading color="text-primary" />}>
      <LayoutContainer
        avatar={''}
        loggedIn={false}
        loginWithRedirect={() => auth0.loginWithRedirect()}
        logoutWithRedirect={() => auth0.logout()}
        title="Thoraxia - Twitch UI"
      >
        YAY
      </LayoutContainer>
    </React.Suspense>
  );
}

export default React.memo(App);
