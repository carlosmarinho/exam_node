# exam_node
Prova de NodeJs para a TO Brasil

IDE usada para desenvolvimento

* Visual Studio Code

Framework Utilizado

* Express

Pacotes utilizados para testes

* Mocha
* Sinon
* Chai
* Nyc - Utilizado para gerar os relatórios que estão armazenados no diretório /test/reports

Para rodar os testes basta digitar npm run test


INSTALAÇÃO

* Versão node utilizada: v9.10.0 (utilizando o nvm como gerenciador de versões node)

* Clonar o projeto

* npm install (ou yarn install)

* Carregar o banco de dados no arquivo carga.sql

* fazer as alterações necessárias do banco de dados que está localizada no arquivo dbconnections.js

APIs

* Api de relatórios
  
   - http://localhost:3001/sales/vendaproduto (GET) (Relatório de venda por produto)
   - http://localhost:3001/sales/vendaestado (GET) (Relatório de venda por estado)
   - http://localhost:3001/sales/vendacidade (GET) (Relatório de venda por cidade)

* Api de Produtos

   - http://localhost:3001/products/ (GET) - Listagem de todos os produtos 
   - http://localhost:3001/products/ (POST) - Cadastro dos produtos
   - http://localhost:3001/products/:id (GET) - Exibição do produto específico
   - http://localhost:3001/products/:id (DELETE) - Exclusão do produto específico
   - http://localhost:3001/products/:id (PUT) - Atualização de usuário

* Api de Usuários

   - http://localhost:3001/users/login (POST) - Login de usuário
   - http://localhost:3001/users/ (GET) - Listagem de todos os usuários 
   - http://localhost:3001/users/ (POST) - Cadastro dos usuários
   - http://localhost:3001/users/:id (GET) - Exibição do usuário específico
   - http://localhost:3001/users/:id (DELETE) - Exclusão do usuário específico
   - http://localhost:3001/users/:id (PUT) - Atualização de usuário



OBSERVAÇÕES

** Acabei criando a api de usuário e verifiquei somente depois que não era necessário fazer login pelo banco


MELHORIAS E CORREÇÕES DE POSSIVEIS BUGS ( @todo )

** @todo colocar a query parametrizada com ? no método 'getAllProducts' do model Product

** @todo incluir migrations para criação e atualização do banco de dados

** @todo Finalizar todos os testes unitário (devido a falta de tempo só desenvolvi o metodo view e viewAll do controller Produto com Tdd)

** @todo Fazer login atravez da tabela user e não hardcoded que está no model user

** @todo Trocar o campo foto de string para exibir imagem

** @todo Retirar a validação do controller do produto e colocar no model

** @todo Melhorar as validações com o Joi (módulo npm)

** @todo ao criar o produto redirecionar para a lista de produtos ou redirecionar para a tela de criar novo (como já está hoje), porém sem o nome do produto como undefined