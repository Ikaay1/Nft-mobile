import { Icon } from 'native-base';
import React from 'react';
import { G, Path } from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Icon>
      <G
        width='16'
        height='17'
        viewBox='0 0 16 17'
        fill='none'
        xmlnS='http://www.w3.org/2000/G'
      >
        <Path
          d='M14 14.8555L11.1 11.9555M12.6667 8.18886C12.6667 11.1344 10.2789 13.5222 7.33333 13.5222C4.38781 13.5222 2 11.1344 2 8.18886C2 5.24334 4.38781 2.85553 7.33333 2.85553C10.2789 2.85553 12.6667 5.24334 12.6667 8.18886Z'
          stroke='#FCFCFC'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </G>
    </Icon>
  );
};

export default SearchIcon;
