# Projeto Materias

Projeto Criado usando React, Vite, React-popper, styled-components, framer-motion, axios, @react-hookz/web, miragejs, react-query, react-icons.

> Link para o projeto online no final do README

## Justificativas

**Vite**: Ao invés de ser utilizado o cra (create-react-app) foi utilizado `yarn create vite` para desafiar a utilizar algo diferente do padrão.

**react-popper**: Foi utilizado para criar o "dropdown" do componente select, por conta de ao criar com ele o posicionamento do elemento ficar exatamente embaixo (no caso do projeto) do campo, e também foi utilizado o react.createPortal para que o elemento não fosse obstruido com nenhum outro elemento na frente.

**styled-components**: Foi utilizado como a lib para criar a estilização do projeto.

**framer-motion**: Foi utilizado para criar algumas animações dentro do projeto além do transition e animatin dentro do styled-components.

**axios**: Foi utilizado como biblioteca de requisições HTTP por conta de algumas configurações que o mesmo permite fazer bem como a facilidade de se utiliza-lo.

**react-query**: Foi utilizado em conjunto do *axios* para controle de requisições HTTP dentro dos componentes React.

**react-icons**: Como fonte de icones foi utilizado esta lib por conta de sua gama de opções.

**@react-hookz/web**: Esta lib foi usado por conta de sua funcionalidade com o 'useDebouncedEffect' que funciona de maneira similar ao useEffect, contudo não vai disparar toda vez que que um dos hooks que está dentro do `[]` atualizar caso ocorre várias atualizações dentro de um certo período de tempo, ele só funcionará para o último disparo, tendo sido utilizado por exemplo para os campos de busca e a conexão com a fake API, para evitar de buscar a cada letra digitada, e sendo assim buscando apenas quando o usuário tiver parado de filtrar dentro da fração de tempo determinado.

**MirageJS**: Ao ínves de fake APIs externas, foi usado esta lib que cria uma fake API interna, que permite ***dentro*** do projeto utilizar de requisições http, tendo todo um fake db cheio de funcionalidades, podendo ser utilizado para criar muitas fake requests/responses não precisando assim de nada externo, mas se torna obrigação do dev que esta utilizando fazer as configurações e em alguns casos construir as request e responses do fake server, mas o fake db desta lib possui coisas como belongsTo, seed, entre outras questões. Ou seja caso queira testar como se estivesse no ar, apenas subir via gh-pages já conseguiria testar sem precisar iniciar um fake server juntamente ao serviço front.
> Contudo além de ser um fake server apenas dentro do projeto, para ele persistir os dados do fake db seria na máquina do usuário que está acessando via localStorage, indexedd, etc, outra questão é quanto a teste de queda de internet ou conexão lenta, é possível simular contudo precisa ser feito via código. Caso fosse utilizar alguma maneira de persistir online acabaria por ser mais viável o uso de algo como firebase ao invés do miragejs.

### Libs para padronizar commit-msg

Foi utilizado libs como _commitlint_, _husky_, _cz-conventional-changelog_, _husky_, _commitizen_ para seguir um padrão nas emissões de mensagens de commits visando o padrão **conventional commits**, porém não foi seguido de forma 100% fidedigna.

[Link para o Projeto web rodando](https://spontaneous-dasik-3ff8d2.netlify.app)
