import { useToggle } from '@thoraxia/ui-hooks';
import React from 'react';
import Show from '../show';

interface Props {
  avatar: string;
  drowndown: boolean;
}

function Profile(props: Props) {
  const dropdown = useToggle(props.drowndown);

  return (
    <>
      <div>
        <button
          type="button"
          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => dropdown.toggle()}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={props.avatar}
            alt=""
          />
        </button>
      </div>
      <Show show={dropdown.state}>
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="user-menu-item-2"
          >
            Sign out
          </a>
        </div>
      </Show>
    </>
  );
}

export default React.memo(Profile);
