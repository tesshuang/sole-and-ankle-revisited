/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
        </UnstyledButton>
        <MobileNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MobileNav>
        <MobileFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MobileFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  z-Index: 1;
  bottom: 0; 
  left: 0;
  position: fixed;
  overflow: auto;
  right: 0;
  top: 0;
`;

const Content = styled(DialogContent)`
  box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
  position: relative;
  background: #fff;
  outline: none;
  padding: 2rem;
  width: 80vw;
  left: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > ${UnstyledButton} {
    align-self: flex-end;
    margin-right: -10px;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap:  22px;

  > a {
    color:  ${COLORS.gray[900]};
    text-decoration: none;
    font-size: 1.125rem;

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

const MobileFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap:  14px;

  > a {
    color:  ${COLORS.gray[700]};
    text-decoration: none;
    font-size: 0.875rem;

  }
`;

export default MobileMenu;
