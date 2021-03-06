import React, { FormEvent, useState } from 'react';
import { useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styled';

interface Repository {
    full_name: string;
    description: string,
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {

        const storegedStorage = localStorage.getItem('@githubExplorer:repositories');

        if (storegedStorage) {
            return JSON.parse(storegedStorage);
        }

        return [];

    });

    useEffect(() => {
        localStorage.setItem(
            '@githubExplorer:repositories',
            JSON.stringify(repositories)
        )
    }, [repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite autor/nome do repositório');
        }

        try {
            const response = await api.get(`repos/${newRepo}`);

            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por esse repositório');
        }

    }

    return (
        <>
            <img src={logoImg} alt="logo" />
            <Title>Explore repositórios no github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {
                    repositories.map(repository => (
                        <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                            <img
                                src={repository.owner.avatar_url}
                                alt={repository.owner.login} 
                            />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>
                    ))
                }
            </Repositories>
        </>
    );
}

export default Dashboard;