import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, Issues, RepositoryInfo } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/14189941?v=4" alt="" />
                    <div>
                        <strong>Rocketseat unform</strong>
                        <p>Descrição</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to={`/repositories/`}>
                    <div>
                        <strong>Repo</strong>
                        <p>description</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
}

export default Repository;