import React from 'react';
import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  FooterTextSpan,
  FooterTextSpanDesigner,
} from './style';
import footer from '../../assets/footer';

const Footer = () => {
  const { text, designerName } = footer;

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>{text}</FooterText>
        <FooterTextSpan> </FooterTextSpan>
        <FooterTextSpanDesigner>{designerName}</FooterTextSpanDesigner>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
