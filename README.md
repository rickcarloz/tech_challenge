Documentação Técnica

Introdução

Este projeto foi desenvolvido utilizando o NestJS com Express. O NestJS proporciona uma estrutura organizada e intuitiva, seguindo uma abordagem modular bem estruturada que facilita a organização e manutenção do código.

Arquitetura do Sistema

A arquitetura adotada separa as responsabilidades em quatro principais camadas:

Controllers: Gerenciam as rotas e processam as requisições HTTP.

Services: Contêm a lógica de negócio e delegam tarefas aos repositórios quando necessário.

Repositories: Responsáveis pela interação com o banco de dados, utilizando o Mongoose para manipulações no MongoDB.

Schemas: Definem a estrutura e os modelos dos dados armazenados no banco.

Relacionamento Entre as Camadas

Controllers recebem as requisições HTTP e as direcionam para os Services.

Services processam as regras de negócio e solicitam os dados necessários aos Repositories.

Repositories realizam as operações no banco de dados conforme solicitado.

Schemas são usados pelos Repositories para garantir que os dados armazenados respeitem as estruturas definidas.

Este fluxo garante uma separação clara de responsabilidades, facilitando a manutenção e a escalabilidade do sistema.

Tecnologias Utilizadas

Node.js: Ambiente de execução JavaScript.

NestJS: Framework principal do projeto.

TypeScript: Linguagem utilizada para maior segurança e legibilidade do código.

Mongoose: Biblioteca de modelagem de dados para MongoDB.

MongoDB: Banco de dados NoSQL utilizado no projeto.

Docker: Ferramenta para conteinerização e padronização de ambientes.

GitHub Actions: Utilizado para automação do CI/CD.

Integração e Implantação

Docker

A aplicação foi conteinerizada usando o Docker. Um Dockerfile foi configurado para criar a imagem da aplicação, garantindo que ela seja executada de forma consistente em qualquer ambiente.

CI/CD com GitHub Actions

O GitHub Actions foi configurado para automatizar o processo de integração e entrega:

Testes Automatizados: Sempre que um novo commit é enviado, os testes são executados para validar as alterações.

Build da Imagem: Caso os testes sejam aprovados, uma nova imagem Docker é gerada e enviada ao Docker Hub.

Deploy Automático: A aplicação é implantada automaticamente no ambiente de produção ou desenvolvimento.

Testes Automatizados

Testes unitários foram implementados para garantir que cada módulo do sistema funcione conforme esperado. Foi utilizado o Jest, que é o framework de testes integrado ao NestJS, para escrever e executar os testes.

Endpoints

GET /posts - Lista de todos os posts

GET /posts/:id - Leitura de um post específico

POST /posts - Criação de postagens

DELETE /posts/:id - Exclusão de postagens

GET /posts/search - Busca de posts



Repositório no GitHub > https://github.com/rickcarloz/tech_challenge
OBS: É necessário configurar os Repository Secrets



Vídeo Demonstrativo > https://www.youtube.com/watch?v=aCgOHW6LkCg


Desafios

Durante o desenvolvimento, o principal desafio foi realizar a integração com CI/CD e implementar os testes unitários, pois essas atividades não fazem parte da rotina cotidiana. Para superar essas dificuldades, utilizei como referência o módulo "Node JS - Integração com banco" do professor Gustavo Henrique, que possui uma didática excelente.