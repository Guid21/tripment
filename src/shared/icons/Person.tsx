import React, { FC } from 'react';
import IconProps from '../interfaces/icons';

const Person: FC<IconProps> = (props) => {
  const { size = 14, fill = '#244D51', className, width, height } = props;

  return (
    <svg
      width={width || size}
      height={height || size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.21968 6C6.35568 6 5.54568 6.334 4.93968 6.941C3.68168 8.201 3.68168 10.252 4.94068 11.514L11.9997 18.585L19.0597 11.514C20.3187 10.252 20.3187 8.201 19.0597 6.941C17.8477 5.726 15.7117 5.728 14.4997 6.941L12.7077 8.736C12.3317 9.113 11.6677 9.113 11.2917 8.736L9.49968 6.94C8.89368 6.334 8.08468 6 7.21968 6ZM11.9997 21C11.7347 21 11.4797 20.895 11.2927 20.706L3.52468 12.926C1.48868 10.886 1.48868 7.567 3.52468 5.527C4.50868 4.543 5.82068 4 7.21968 4C8.61868 4 9.93168 4.543 10.9147 5.527L11.9997 6.614L13.0847 5.528C14.0687 4.543 15.3807 4 16.7807 4C18.1787 4 19.4917 4.543 20.4747 5.527C22.5117 7.567 22.5117 10.886 20.4757 12.926L12.7077 20.707C12.5197 20.895 12.2657 21 11.9997 21Z"
        fill={fill}
      />
    </svg>
  );
};

export default Person;
