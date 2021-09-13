import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Skype</LinkTitle>
          <LinkItem href="">leeroy_w</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:liqbitossi@gmail.com">liqbitossi@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
          <SocialContainer>
            <CompanyContainer>
              <Slogan>leighbitossi.com</Slogan>
            </CompanyContainer>

            <SocialIcons href="https://github.com/LIQBit">
              <AiFillGithub size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://www.linkedin.com/in/leighbitossi/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>

    </FooterWrapper>
  );
};

export default Footer;
