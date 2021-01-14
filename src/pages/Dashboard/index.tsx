import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/50348629?s=400&v=4"
            alt="Eric Yoshida"
          />
          <div>
            <strong>ericyoshida/github-explorer</strong>
            <p>
              Simple React application that allow the user to search for
              Github&apos;s repositories.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/50348629?s=400&v=4"
            alt="Eric Yoshida"
          />
          <div>
            <strong>ericyoshida/github-explorer</strong>
            <p>
              Simple React application that allow the user to search for
              Github&apos;s repositories.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/50348629?s=400&v=4"
            alt="Eric Yoshida"
          />
          <div>
            <strong>ericyoshida/github-explorer</strong>
            <p>
              Simple React application that allow the user to search for
              Github&apos;s repositories.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
