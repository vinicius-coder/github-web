import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styled';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="logo" />
            <Title>Explore repositórios no github</Title>
            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/14189941?v=4" alt="user"/>
                    <div>
                        <strong>Rocketseat unform</strong>
                        <p>Descrição do projeto</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/14189941?v=4" alt="user"/>
                    <div>
                        <strong>Rocketseat unform</strong>
                        <p>Descrição do projeto</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/14189941?v=4" alt="user"/>
                    <div>
                        <strong>Rocketseat unform</strong>
                        <p>Descrição do projeto</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;