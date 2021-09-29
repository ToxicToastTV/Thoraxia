import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './profile';
import Show from '../show';

interface Props {
  isDark: boolean;
  navigation: Array<{ title: string; route: string; }>;
  dropdown: boolean;
  avatar: string;
  isLoggedIn: boolean;
  loginWithRedirect: () => void;
}

function TopNavigation(props: Props) {

  return (
    <nav className={props.isDark ? 'bg-gray-800 text-white' : 'bg-white'}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hidden"
            key="Mobile"
          >
            MOBILE
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="#"
                  alt="LOGO Mobile"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="#"
                  alt="LOGO Desktop"
                />
              </NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {props.navigation.map((item, index) => (
                  <NavLink to={item.route} activeClassName="bg-gray-900 text-white" key={index} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="ml-3 relative">
              <Show show={props.isLoggedIn}>
                <Profile drowndown={props.dropdown} avatar={props.avatar} />
              </Show>
              <Show show={!props.isLoggedIn}>
                <button type="button" className="" onClick={props.loginWithRedirect}>Login</button>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(TopNavigation);
