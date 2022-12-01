# Help Desk (front end)
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/amarojc/helpdesk-front/blob/master/LICENCE) 

# Sobre o projeto

https://helpdesk-front-ecru.vercel.app

Helpdesk é uma aplicação full stack web utilizando Spring Boot 2.3.12, no [Back end](https://github.com/amarojc/helpdesk-backend) e o Angular 12, no front end.

A aplicação consiste em realizar o gerenciamento de chamados/ordens de serviço simulando um simples Help Desk.

De fácil compreensão a aplicação conta com um menu, na lateral esquerda, onde o usuário poderá navegar pelo sistema podendo criar, alterar, 
editar ou excluir um determinado técnico ou cliente, abrir um novo chamado, alterar o status do chamado e realizar filtros para localizar uma determinada informação.

Necessário que o usuário realize login com seu email e senha para ter acesso ao sistema e suas funcionalidade.

Somente pessoas com o perfil de ADM têm acesso para criar, atualizar e deletar um determinado técnico.

Técnicos e/ou clientes que possuem ordem de serviços/chamados não podem ser deletados.

É realizada a validação dos dados ao realizar um novo cadastro, no backend e no frontend.

## Layout web
![Login](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/helpdesk-login.png)

# Tecnologias utilizadas
## Back end
Acesse: https://github.com/amarojc/helpdesk-backend

## Front end
- HTML / CSS / TypeScript
- Angular CLI V 12.0.3
- Arquitetura MVC do Angular
- Componentes visuais do Angular Material
- Angular Reactive Forms
- Autenticação e Autorização
- Rotas no Angular
- Toast na interação com o usuário

## Implantação em produção
- Back end: Heroku
- Front end web: Vercel
- Banco de dados: MySql

>
#### Para testar o app em produção: [https://helpdesk-front-ecru.vercel.app](https://helpdesk-front-ecru.vercel.app)
	** Login:amaro@mail.com
	** senha: 123

# Autor
Jorge Amaro de Carvalho



### Algumas telas do layout web
>
#### Home
![Home](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/home.png)

#### Chamados
![Chamados](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/helpdesk-chamados.png)

#### Atualizar um chamado
![Atualizar-chamado](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/helpdesk-chamado-atualiza.png)

#### Técnicos
![Tecnicos](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/helpdesk-tecnicos.png)

#### Novo Técnico
![NewTecnico](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/helpdesk-cad-tecnico.png)

#### Excluir Técnico
![DelTecnicos](https://github.com/amarojc/helpdesk-front/blob/master/src/assets/img/helpdesk-del-tecnico.png)
