import { Icon } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { G, Path } from 'react-native-svg';

const MicrophoneIcon = () => {
  return (
    <Icon>
      <G
        width='16'
        height='17'
        viewBox='0 0 16 17'
        fill='none'
        xmlns='http://www.w3.org/2000/G'
      >
        <G clip-path='url(#clip0_3444_2387)'>
          <Path
            d='M12.6667 7.52217V8.85551C12.6667 10.0932 12.175 11.2802 11.2998 12.1553C10.4247 13.0305 9.23769 13.5222 8.00001 13.5222M8.00001 13.5222C6.76233 13.5222 5.57535 13.0305 4.70018 12.1553C3.82501 11.2802 3.33334 10.0932 3.33334 8.85551V7.52217M8.00001 13.5222V16.1888M5.33334 16.1888H10.6667M8.00001 1.52217C7.46958 1.52217 6.96087 1.73289 6.5858 2.10796C6.21072 2.48303 6.00001 2.99174 6.00001 3.52217V8.85551C6.00001 9.38594 6.21072 9.89465 6.5858 10.2697C6.96087 10.6448 7.46958 10.8555 8.00001 10.8555C8.53044 10.8555 9.03915 10.6448 9.41422 10.2697C9.7893 9.89465 10 9.38594 10 8.85551V3.52217C10 2.99174 9.7893 2.48303 9.41422 2.10796C9.03915 1.73289 8.53044 1.52217 8.00001 1.52217Z'
            stroke='#FCFCFC'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </G>
        <G>
          <G>
            <G
              width='16'
              height='16'
              fill='white'
              transform='translate(0 0.85553)'
            />
          </G>
        </G>
      </G>
    </Icon>
  );
};

export default MicrophoneIcon;
