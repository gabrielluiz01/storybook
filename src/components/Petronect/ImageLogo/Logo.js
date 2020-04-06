import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../../logo.png'

const ImageLogo = styled.img`
    width: ${props => props.width};

    @media(max-width: 768px){
        width: ${props => props.widthMobile};
    }
`;

const Logo = props => {
    return (
        <ImageLogo src={LogoImage} width={props.width} widthMobile={props.widthMobile}/>
    );
}

export default Logo;