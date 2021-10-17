import { useAppState, useAuthState, useUiState } from '@thoraxia/data-access-inventory';
import {
  Alerts,
  Buttons,
  DevDebugger,
  Loading, Show,
  Navigation
} from '@thoraxia/ui-components/index';
import React from 'react';
import { useRouter } from '@thoraxia/ui-hooks';
import { useAuth0 } from '@auth0/auth0-react';
import Rest from './rest';
import { Route, Switch } from 'react-router-dom';
import LayoutContainer from './containers/layout.container';
import { environment } from '../environments/environment';
import { useParams } from 'react-router';
import { Nullable, Optional } from '@thoraxia/shared';

export function App() {
  const { appState } = useAppState();
  const { id } = useParams<{ id: Optional<string>; }>();
  const router = useRouter();
  const uiState = useUiState();
  const authState = useAuthState();
  const auth0 = useAuth0();

  React.useEffect(() => {
    authState.setStatus(auth0.isAuthenticated);
    if (auth0.isAuthenticated) {
      authState.setUserName(auth0?.user?.nickname || '');
      authState.setAvatar(auth0?.user?.picture || '');
      auth0.getIdTokenClaims().then(data => {
        const avatar = data?.['http://localhost:4200/avatar'] || null;
        const roles = data?.['http://localhost:4200/roles'] || [];
        const isAdmin = data?.['http://localhost:4200/isAdmin'] || false;
        const theme = data?.['http://localhost:4200/theme'] || environment.DEFAULT_THEME;
        //
        authState.setToken(data?.__raw);
        authState.setRoles(roles);
        authState.setAdminStatus(isAdmin);
        authState.setTheme(theme);
        if(avatar !== null) {
          authState.setAvatar(avatar);
        }
      }).catch(error => console.error(error))
      //
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
      if (router.query && 'code' in router.query) {
        router.push('/');
      }
    }
  }, [auth0.isAuthenticated]);

  React.useEffect(() => {
    authState.setLoader(auth0.isLoading ? 'loading' : 'loaded');
  }, [auth0.isLoading]);

  React.useEffect(() => {
    if (appState.auth.theme !== null) {
      const htmlElement = document.querySelector("html");
      if (htmlElement !== null) {
        htmlElement.setAttribute('data-theme', appState.auth.theme)
      }
    }
  }, [appState.auth.theme]);

  React.useEffect(() => {
    if ('error' in router.query && 'error_description' in router.query) {
      const { error, error_description } = router.query as { error: string; error_description: string; };
    }
  }, [router.query]);

  React.useEffect(() => {
    if (
      appState.auth.status === 'error' ||
      appState.category.status === 'error' ||
      appState.item.status === 'error' ||
      appState.type.status === 'error' ||
      appState.company.status === 'error' ||
      appState.location.status === 'error' ||
      appState.size.status === 'error'
    ) {
      uiState.setStatus('error');
    } else if (
      appState.auth.status === 'loaded' &&
      appState.category.status === 'loaded' &&
      appState.item.status === 'loaded' &&
      appState.type.status === 'loaded' &&
      appState.company.status === 'loaded' &&
      appState.location.status === 'loaded' &&
      appState.size.status === 'loaded'
    ) {
      uiState.setStatus('loaded');
    } else {
      uiState.setStatus('loading');
    }
  }, [
    appState.auth.status,
    appState.category.status,
    appState.item.status,
    appState.type.status,
    appState.company.status,
    appState.location.status,
    appState.size.status
  ]);

  const getIdParam = React.useCallback((index: number) => {
    const locationArray = router.location.pathname.split('/');
    return locationArray[index] || null ;
  }, [router.query]);

  const CategoriesContainer = React.lazy(() => import('./containers/categories.container'));
  const CategoryContainer =  React.lazy(() => import('./containers/category.container'));
  const ItemsContainer = React.lazy(() => import('./containers/items.container'));
  const CompaniesContainer = React.lazy(() => import('./containers/companies.container'));



  return (
    <React.Suspense fallback={<Loading color="text-primary" />}>
      <Show show={appState.auth.token !== null}>
        <Rest
          key="RestApi"
          token={appState.auth.token}
          categoryId={appState.item.selectedCategory}
        />
      </Show>
      <LayoutContainer
        avatar={appState.auth.avatar || ''}
        loggedIn={appState.auth.loggedIn}
        loginWithRedirect={() => auth0.loginWithRedirect()}
        logoutWithRedirect={() => auth0.logout()}
        settingsWithRedirect={() => router.push('/settings')}
        navigation={appState.ui.navigation}
        title="Thoraxia - Inventory UI"
      >
        <Switch>

          <Route exact path="/categories">
            <React.Suspense fallback={<Loading color="text-primary" />}>
              <CategoriesContainer key="CategoriesContainer" isLoading={appState.category.status === 'loading'} data={appState.category.data} />
            </React.Suspense>
          </Route>
          <Route exact path="/categories/:id">
            <React.Suspense fallback={<Loading color="text-primary" />}>
              <CategoryContainer key="CategoryContainer" isLoading={appState.item.status === 'loading'} data={appState.item.data.filter(item => item.category_id === appState.item.selectedCategory && item.quantity > 0)} id={getIdParam(2)} />
            </React.Suspense>
          </Route>

          <Route path="/items" exact>
            <React.Suspense fallback={<Loading color="text-primary" />}>
              <ItemsContainer key="ItemsContainer" isLoading={appState.item.status === 'loading'} data={appState.item.data.filter(item => item.quantity > 0)} />
            </React.Suspense>
          </Route>

          <Route path="/items/:id" exact>
            <React.Suspense fallback={<Loading color="text-primary" />}>
              <DevDebugger data={appState.item} />
            </React.Suspense>
          </Route>

          <Route path="/companies" exact>
            <React.Suspense fallback={<Loading color="text-primary" />}>
              <CompaniesContainer key="CompaniesContainer" isLoading={appState.company.status === 'loading'} data={appState.company.data} />
            </React.Suspense>
          </Route>

          <Route path="*">
            <Alerts type="error" text="Page not found" />
            <DevDebugger data={appState} />
          </Route>
        </Switch>
      </LayoutContainer>
    </React.Suspense>
  );
}

export default React.memo(App);
