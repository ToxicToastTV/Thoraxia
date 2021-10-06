import React from 'react';
import Show from '../show/index';
import Buttons from '../buttons/index';
import { NavLink } from 'react-router-dom';

interface Props {
  avatar: string;
  isLoggedIn: boolean;
  loginWithRedirect: () => void;
  logoutWithRedirect: () => void;
  navigation: Array<{ title: string; route: string; }>;
}

function Navigation(props: Props) {

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">

      <div className="flex-none hidden px-2 mx-2 lg:flex">
    <span className="text-lg font-bold">
            Thoraxia - Inventory UI
          </span>
      </div>

      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          {props.navigation.map((item, index) => (
            <NavLink to={item.route} activeClassName="btn-active" key={index} className="btn btn-ghost btn-sm rounded-btn">
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <Show show={props.isLoggedIn} key="ShowNotifications">
        <div className="flex-none">
          <Buttons type="ghost" size="square" key="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 className="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </Buttons>
        </div>
      </Show>

      <Show show={props.isLoggedIn} key="ShowAvatar">
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              <img src={props.avatar} alt="Avatar" />
            </div>
          </div>
        </div>
      </Show>

      <Show show={!props.isLoggedIn} key="ShowLogin">
        <div className="flex-none">
          <Buttons type="ghost" size="square" key="Login" onClick={props.loginWithRedirect}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </Buttons>
        </div>
      </Show>

      <Show show={props.isLoggedIn} key="ShowSettings">
        <div className="flex-none">
          <Buttons type="ghost" size="square" key="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Buttons>
        </div>
      </Show>

      <Show show={props.isLoggedIn} key="ShowLogout">
        <div className="flex-none">
          <Buttons type="ghost" size="square" key="Logout" onClick={props.logoutWithRedirect}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </Buttons>
        </div>
      </Show>
    </div>
  );

}

export default React.memo(Navigation);
