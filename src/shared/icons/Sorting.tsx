import React, { FC } from 'react';
import IconProps from '../interfaces/icons';

const Sorting: FC<IconProps> = (props) => {
  const { size = 14, fill = '#244D51', className, width, height } = props;

  return (
    <svg
      width={width || size}
      height={height || size}
      className={className}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.66712 12.0005V3.33379L4.46712 4.40046C4.51965 4.47049 4.58546 4.5295 4.66079 4.57411C4.73612 4.61871 4.8195 4.64804 4.90617 4.66042C4.99284 4.6728 5.0811 4.66799 5.16591 4.64626C5.25071 4.62454 5.33041 4.58632 5.40045 4.53379C5.48325 4.47169 5.55045 4.39117 5.59674 4.2986C5.64302 4.20603 5.66712 4.10395 5.66712 4.00046C5.66712 3.85621 5.62033 3.71585 5.53378 3.60046L3.53378 0.933788C3.47157 0.85225 3.39138 0.786167 3.29945 0.740679C3.20753 0.695192 3.10635 0.671528 3.00378 0.671528C2.90122 0.671528 2.80004 0.695192 2.70812 0.740679C2.61619 0.786167 2.536 0.85225 2.47378 0.933788L0.473785 3.50712C0.365046 3.6468 0.316249 3.82396 0.338128 3.99962C0.360007 4.17528 0.450771 4.33505 0.590452 4.44379C0.730132 4.55253 0.907288 4.60132 1.08295 4.57945C1.25861 4.55757 1.41838 4.4668 1.52712 4.32712L2.33379 3.28046V12.0005C2.33379 12.1773 2.40402 12.3468 2.52905 12.4719C2.65407 12.5969 2.82364 12.6671 3.00045 12.6671C3.17726 12.6671 3.34683 12.5969 3.47186 12.4719C3.59688 12.3468 3.66712 12.1773 3.66712 12.0005Z"
        fill={fill}
      />
      <path
        d="M8.33385 1.33378V10.0004L7.53385 8.93378C7.42776 8.79233 7.26983 8.69882 7.0948 8.67382C6.91976 8.64881 6.74196 8.69436 6.60052 8.80045C6.45907 8.90654 6.36555 9.06447 6.34055 9.2395C6.31555 9.41453 6.3611 9.59233 6.46718 9.73378L8.46718 12.4004C8.5294 12.482 8.60959 12.5481 8.70151 12.5936C8.79344 12.639 8.89462 12.6627 8.99718 12.6627C9.09975 12.6627 9.20093 12.639 9.29285 12.5936C9.38478 12.5481 9.46497 12.482 9.52718 12.4004L11.5272 9.82712C11.6175 9.71075 11.6667 9.56775 11.6672 9.42045C11.6669 9.31864 11.6434 9.21823 11.5983 9.12694C11.5532 9.03565 11.4879 8.95589 11.4072 8.89378C11.2682 8.78552 11.092 8.73667 10.9171 8.75791C10.7423 8.77914 10.5829 8.86874 10.4738 9.00712L9.66718 10.0538V1.33378C9.66718 1.15697 9.59694 0.9874 9.47192 0.862376C9.3469 0.737352 9.17733 0.667114 9.00052 0.667114C8.8237 0.667114 8.65413 0.737352 8.52911 0.862376C8.40409 0.9874 8.33385 1.15697 8.33385 1.33378Z"
        fill={fill}
      />
    </svg>
  );
};

export default Sorting;