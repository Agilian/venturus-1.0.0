# Instalação inicial

Para iniciar o projeto comecei com:
```
### `yarn create react-app smt2 --template typescript`
### `cd smt2`
### `yarn add react-icons`
### `yarn add react-router-dom`
### `yarn add @types/react-router-dom`
```
## Paginação:
Imaginei Duas páginas que compartilhavam a mesma barra no topo

## Componetização:
Na página 1, os componentes: TopBar, MyTeams , Top5, Statistics
Na página 2, os componentes: um componente principal (CreateYourTeam) 



...montei as páginas e aproveitei pra dar uma ajeitada no css para web


fiz um componente para o input Search
investi um tempo lendo a documentação (https://www.api-football.com/documentation#players-search-parameters) da API sugerida para p teste e consegui fazer uma consulta
```
  fetch(" https://v2.api-football.com/players/search/Messi", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v1.baseball.api-sports.io",
        "x-rapidapi-key": "893db409475bc9b11d97e501ac97f863"   // obtida aqui https://dashboard.api-football.com/profile?access
    },
    
 })
 .then(response => {
    console.log(response);
 })
 .catch(err => {
    console.log(err);
 });
```
achei os três parâmetros do JSON que eu precisava que eram: age, player_name e nationality
tenho que jogar o arquivo JSON que a API me devolveu em um array --> daí percorrer o array procurando o primeiro nome do jogador exibir os resultados mais prováveis de ser o que o usuário procurava

organizei o resultado em uma div logo abaixo. Atenção: ainda está fazendo requisições a cada letra digitada (e o máximo da versão gratuita é 100 requisições por dia)


depois de conseguir os dados da API, voltei minha atenção para fazer o submit de uma página para outra.
Pensei em passar os parâmetros pela URL mesmo. 

Então ao criar um time, carregaremos a página inicial com a URL para montar lá na página inicial os nossos dados na memória.
Tentei trabalhar na página inicial com o seguinte esquema de URL:
NomeDoTime1/SiteDoTime1/DescricaoDoTime1/TipoDoTime1/FormaçãoDoTime1&NomeDoTime2/SiteDoTime2/DescricaoDoTime2/TipoDoTime2/FormaçãoDoTime2&NomeDotime3/...

ou seja, separando os times por E COMERCIAL '&'  e separando as propriedade por barras '/'

trabalhei com a montagem dessa URL no Local Storage para não perder ao recarregar a página.

Reorganizei os arquivos de estilos para cada tamanho de tela.

implementações futuras:
Drad and drop
ligar um banco de dados
sistema de login completo
escrever testes

/////



voltando a programar aqui:
refiz a base do componente CreateYourTeam para usar formik

instalando reactDND para drag and drop

