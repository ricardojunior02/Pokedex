import React from 'react';
import {useSelector} from 'react-redux';

import {
  Container,
  Text,
  TextName,
  Image,
  ImageContainer,
  TextContainer,
  TextValue,
  View,
} from './styles';

const Details = () => {
  const details = useSelector(state => state.pokemon);
  return (
    <Container>
      <ImageContainer>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              details.id
            }.png`,
          }}
        />
        <TextName>{details.name}</TextName>
      </ImageContainer>
      <View>
        <TextContainer>
          <Text>
            Formas:{' '}
            <TextValue>{details.forms.map(form => form.name)}</TextValue>
          </Text>
          <Text>
            Tamanho: <TextValue>{details.height}</TextValue>
          </Text>
          <Text>
            Peso: <TextValue>{details.weight}</TextValue>
          </Text>
          <Text>
            Tipo:{' '}
            <TextValue>
              {details.types.map(n => n.type.name.replace('', '/'))}
            </TextValue>
          </Text>
          <Text>
            Habilidades:{' '}
            <TextValue>
              {details.abilities.map(n => n.ability.name.replace('', '/'))}
            </TextValue>
          </Text>
          <Text>
            Movimentos:
            <TextValue>
              {' '}
              {details.moves.map(n => n.move.name.replace('', '/'))}
            </TextValue>
          </Text>
        </TextContainer>
      </View>
    </Container>
  );
};

export default Details;
