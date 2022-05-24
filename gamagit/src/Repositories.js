import React, {useEffect, useState } from "react";
import {Link} from 'react-router-dom'


export default function Repositories(){
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
       
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        //localStorage.clear();
        //console.log(repositoriesName);

    }, []);

    return (
        <div>
            <h1>Repositórios</h1>
            <ul>
                { repositories.map(repository => {
                        return (
                            <li>Repositório: { repository }</li>
                        )
                    }) }    
            </ul>
            <Link to="/">Voltar</Link>
        </div>
     
    )
}

