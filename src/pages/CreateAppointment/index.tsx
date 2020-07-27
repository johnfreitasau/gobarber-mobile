import React from 'react';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

interface RouteParams {
  provider_id: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();

  const { provider_id } = route.params as RouteParams;

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Barbers</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
    </Container>
  );

  console.log(routeParams.provider_id);
  return (
    <>
      <Container />
    </>
  );
};

export default CreateAppointment;
