import React from "react";

import { Container, Logo, ActionButton } from "./style";

import Icon from "react-native-vector-icons/FontAwesome5";

import logo from "../../../assets/83b5f2a86fa0ec9f938664da94a9bc55-logotipo-da-silhueta-do-instagram.png";

const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
      <ActionButton>
        <Icon name="paper-plane" size={26} />
      </ActionButton>
    </Container>
  );
};

export default Header;
