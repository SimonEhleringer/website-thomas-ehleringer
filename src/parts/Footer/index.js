import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterTextWrapper,
  FooterText,
  FooterTextSpan,
  FooterTextSpanDesigner,
} from "./style";
import footer from "../../assets/footer";

// text: '© 2023 Thomas Ehleringer',
// designerText: 'Designed by',
// designerName: 'Simon Ehleringer',
// photosByText: 'Photos by',
// photosName: 'Christina Ehleringer',

const Footer = () => {
  const { text, designerText, designerName, photosByText, photosName } = footer;

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTextWrapper>
          <FooterText>{text}</FooterText>
          <FooterTextSpan disableWhenSmall={true}> | </FooterTextSpan>
        </FooterTextWrapper>

        <FooterTextWrapper>
          <FooterText>{designerText}</FooterText>
          <FooterTextSpan> </FooterTextSpan>
          <FooterTextSpanDesigner>{designerName}</FooterTextSpanDesigner>
          <FooterTextSpan disableWhenSmall={true}> | </FooterTextSpan>
        </FooterTextWrapper>

        <FooterTextWrapper>
          <FooterText>{photosByText}</FooterText>
          <FooterTextSpan> </FooterTextSpan>
          <FooterTextSpanDesigner>{photosName}</FooterTextSpanDesigner>
        </FooterTextWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
