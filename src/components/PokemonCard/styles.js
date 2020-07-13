import styled from 'styled-components/native';

export const Pokemon = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 15px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const ContainerDetail = styled.View`
  display: flex;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 50px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const Info = styled.Text`
  text-transform: uppercase;
`;
