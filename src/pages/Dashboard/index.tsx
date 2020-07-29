import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Shedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Shedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/51035716?s=460&u=20abfbb221aa1f5be1fbdbe77c23a9dc112982a7&v=4"
                alt="Felipe Bello Dultra"
              />

              <strong>Felipe Bello Dultra</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/51035716?s=460&u=20abfbb221aa1f5be1fbdbe77c23a9dc112982a7&v=4"
                  alt="Felipe Bello Dultra"
                />

                <strong>Felipe Bello Dultra</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/51035716?s=460&u=20abfbb221aa1f5be1fbdbe77c23a9dc112982a7&v=4"
                  alt="Felipe Bello Dultra"
                />

                <strong>Felipe Bello Dultra</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/51035716?s=460&u=20abfbb221aa1f5be1fbdbe77c23a9dc112982a7&v=4"
                  alt="Felipe Bello Dultra"
                />

                <strong>Felipe Bello Dultra</strong>
              </div>
            </Appointment>
          </Section>
        </Shedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
