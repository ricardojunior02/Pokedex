import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {Info, Image, Pokemon, ContainerDetail, Text} from './styles';

import api from '../../services/api';

const PokemonCard = ({data, onPress}) => {
  const [urlDetails, setUrlDetails] = useState('');

  const dispath = useDispatch();

  useEffect(() => {
    async function loadDetails() {
      await api
        .get(`${data.url}`)
        .then(response => setUrlDetails(response.data));
    }
    loadDetails();
  }, [data.url]);

  return (
    <Pokemon
      onPress={() =>
        onPress(dispath({type: 'GET_POKEMON', infos: urlDetails}))
      }>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            urlDetails.id
          }.png`,
        }}
      />
      <ContainerDetail>
        <Info>
          <Text>Nome:</Text> {data.name}
        </Info>
        <Info>
          <Text>Altura:</Text> {urlDetails.height}
        </Info>
        <Info>
          <Text>Peso:</Text> {urlDetails.weight}
        </Info>
      </ContainerDetail>
    </Pokemon>
  );
};

export default PokemonCard;
