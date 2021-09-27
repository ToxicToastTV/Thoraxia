import React from 'react';

interface Props {
  data: any;
}

function DevDebugger(props: Props) {
  return (
    <pre style={{ fontWeight: 400, wordWrap: 'break-word' }}>
      {JSON.stringify(props.data, null, 4)}
    </pre>
  );
}

export default React.memo(DevDebugger);
