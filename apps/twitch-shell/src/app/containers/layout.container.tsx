import React from 'react';
import { Navigation } from '@thoraxia/ui-components/*';

interface Props {
  avatar: string;
  loggedIn: boolean;
  loginWithRedirect: () => void;
  logoutWithRedirect: () => void;
  children: React.ReactNode;
  title: string;
}

function LayoutContainer(props: Props) {
  return (
    <>
      <Navigation
        key="Navigation"
        avatar={props.avatar}
        isLoggedIn={props.loggedIn}
        loginWithRedirect={props.loginWithRedirect}
        logoutWithRedirect={props.logoutWithRedirect}
        settingsWithRedirect={undefined}
        navigation={[]}
        title={props.title}
      />
      <div className="p-4">
        {props.children}
      </div>
    </>
  );
}

export default React.memo(LayoutContainer)
