import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #999;
`;

export const ImageContainer = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-color: #fff;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const TextName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
`;

export const TextContainer = styled.View`
  padding: 20px;
  justify-content: center;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  line-height: 25px;
`;

export const TextValue = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const View = styled.ScrollView`
  flex: 1;
  background: #666;
  border-radius: 10px;
  margin: 20px 15px;
`;
