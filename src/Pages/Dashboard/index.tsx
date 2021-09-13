import React, { useEffect, useState} from "react";

import { Container } from './styles';

import api from "../../service/api"

interface Pessoa {
    nome: string;
    telefone: string;
}

const Dashboard: React.FC = () => {
    const [pessoa, setPessoa ] = useState<Pessoa[]>([]);

    useEffect(() => {
        api.get("/pessoas").then((response) =>{
            setPessoa(response.data);
        });
    }, []);


    return (
        <>
            <Container>
                <h1>Dashboard</h1>

                <div>
                    <p>{pessoa.map(pessoa => pessoa.nome)}</p>
                </div>
            </Container>
        </>
    );
}

export default Dashboard;

