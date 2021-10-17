import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'wide' | 'block' | 'circle' | 'square';
  type?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'link' | 'outline';
  disabled?: boolean;
  glass?: boolean;
  loading?: boolean;
}

function Buttons(props: Props) {

  const buttonSize = React.useCallback(() => {
    return props.size ? 'btn-' + props.size : 'btn-md';
  }, []);

  const buttonType = React.useCallback(() => {
    return props.type ? 'btn-' + props.type : 'btn-primary';
  }, []);

  const buttonDisabled = React.useCallback(() => {
    return props.disabled ? 'btn-disabled' : '';
  }, []);

  const buttonGlass = React.useCallback(() => {
    return props.glass ? 'glass' : '';
  }, []);

  const buttonLoading = React.useCallback(() => {
    return props.loading ? 'loading' : '';
  }, []);



  return (
    <button onClick={(event) => {
      event.preventDefault();
      if (props.onClick) {
        props.onClick();
      }
    }} className={`btn ${buttonSize()} ${buttonType()} ${buttonDisabled()} ${buttonGlass()} ${buttonLoading()}`}>{props.children}</button>
  );
}

export default React.memo(Buttons);
