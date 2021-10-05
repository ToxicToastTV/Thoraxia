import { Optional } from '@thoraxia/shared';
import React from 'react';

interface Props {
  type: 'info' | 'danger' | 'success' | 'warning';
  header?: Optional<string>;
  text?: Optional<string>;
}

function Alerts(props: Props) {

  const getType = React.useCallback((type) => {
    if (type === 'info') {
      return 'text-blue-700';
    } else if (type === 'danger') {
      return 'text-red-700';
    } else if (type === 'success') {
      return 'text-green-700';
    } else if (type === 'warning') {
      return 'text-yellow-700';
    }
    return '';
  }, []);

  return (
    <div className="max-w-lg mx-auto pt-4">
      <div className={`flex bg-gray-100 rounded-lg p-4 mb-4 text-sm ${getType(props.type)}`} role="alert">
        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
        <div>
          <span className="font-medium">{props.header}</span> {props.text}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Alerts);
