import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: flex-end;
  height: 80px;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 160px;
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
