import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import api from '../../services/api';

import PokemonCard from '../../components/PokemonCard/index';

import {Container, List} from './styles';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemons);

  useEffect(() => {
    async function loadPokemon() {
      await api
        .get('pokemon?limit=964')
        .then(response =>
          dispatch({type: 'GET_POKEMONS', pokemons: response.data.results}),
        );
    }
    loadPokemon();
  }, [dispatch]);

  return (
    <Container>
      <List
        data={pokemon}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.url}
        renderItem={({item}) => (
          <PokemonCard
            key={item.url}
            data={item}
            onPress={() => navigation.navigate('Detalhes')}
          />
        )}
      />
    </Container>
  );
};

export default Dashboard;
