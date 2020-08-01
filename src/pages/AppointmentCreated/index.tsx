import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import enAu from 'date-fns/locale/en-AU';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  OKButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(routeParams.date, 'PPPPp', { locale: enAu });
  }, [routeParams.date]);
  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Appointment done!</Title>

      <Description>{formattedDate}</Description>

      <OKButton onPress={handleOkPressed}>
        <OkButtonText>OK</OkButtonText>
      </OKButton>
    </Container>
  );
};

export default AppointmentCreated;
