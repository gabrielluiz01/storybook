import React from 'react';
import styled from 'styled-components';

import LogoWhite from '../../assets/logo-petronect-white.png'
import LogoBlue from '../../assets/logo.svg'

export const ImageLogo = styled.img`
  width: ${props => props.width};
  margin: ${props => props.margin};

  @media(max-width: 768px){
      width: ${props => props.widthMobile};
      margin:${props => props.marginMobile}
  }
`;


export default function Logo(props) {
  return (
    <ImageLogo src={props.type === 'white' ? LogoWhite : LogoBlue} width={props.width} width={props.widthMobile} margin={props.margin} marginMobile={props.marginMobile}/>
  );
}
