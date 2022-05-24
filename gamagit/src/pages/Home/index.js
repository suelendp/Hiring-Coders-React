import * as S from './styled';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function App(props) {
  const navigate = useNavigate();
  const[ usuario, setUsuario ] = useState ('');
  const [ erro, setErro] = useState(false);
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
        repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        navigate('/repositories');
      })
      .catch(err =>{
        setErro(true);
      }); 
            //console.log(repositoriesName);

    }
  
  
  return (
    <S.HomeContainer>
        <S.Content>
          <S.Input className='usuarioInput' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
          <S.Button type='button'onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
        { erro? <S.ErrorMsg>Usuário não encontrado. Tente novamente!</S.ErrorMsg> : ''}

    </S.HomeContainer>
  );
}

export default App;
