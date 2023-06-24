# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para a realização dos testes de software são:
 > - Aplicação hospedada em um servidor que permita realizar testagens.
 > - Navegadores – Google Chrome, Firefox, Microsoft Edge.
 > - Responsividade em diferentes dispositivos.

Os casos de testes funcionais a serem realizados na aplicação estão descritos abaixo:

## CT - 01 - Apresentação Página Home.
Requisitos Associados:
> - RF – 04 - A aplicação deverá permitir ao usuário visualizar locais de entretenimento e eventos com todos os detalhes de serviços oferecidos e avaliações associadas.
> - RF – 05 - A aplicação deverá exibir, para cada estabelecimento ou evento, imagens do ambiente correspondente.
> - RF – 11 - A aplicação deverá ranquear os estabelecimentos de acordo com o critério de melhor avaliação.

Objetivo do Teste:
> - Verificar se ao acessar o site, a página home está apresentando os estabelecimentos e suas características, além de ranquear os estabelecimentos com melhores avaliações.

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Clicar em “Descobrir agora”

Critérios de Êxito:
> - A página deve direcionar o usuário aos estabelecimentos mais bem avaliados após o mesmo clicar em “Descubra Agora”
> - Os estabelecimentos devem apresentar pelo menos uma imagem do local.
> - O usuário não deve fazer login para que a aplicação mostre os estabelecimentos.

## CT - 02 - Filtro de Estabelecimento.
Requisitos Associados:
> - RF – 02 – A aplicação web deverá apresentar funcionalidades de filtragem para definir categorias de locais e eventos que o usuário deseja frequentar.
> - RF – 03 – As funcionalidades de filtro devem possibilitar ao usuário localizar os estabelecimentos por Cidade e Estado.

Objetivo do Teste:
> - Verificar se o filtro está apresentando as informações corretamente.

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Clicar em “Descobrir agora”
> - Ir em "Menu"
> - Clicar em "Categoria"
> - Selecionar uma Categoria

Critérios de Êxito:
> - Deve ser possível filtrar por categoria, Cidade e Estado, simultaneamente ou separadamente.
> - Após a aplicação dos filtros, a página deve apresentar somente os estabelecimentos com os critérios selecionados.

## CT - 03 - Cadastro e Login.
Requisitos Associados:
> - RF – 06 - A aplicação deverá permitir que o estabelecimento realize um login e cadastro. 

Objetivo do Teste:
> - Verificar se após efetuar o cadastro, é possível efetuar o login utilizando as mesmas credencias.

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Ir em "Menu"
> - Clicar em “Criar Conta”
> - Digitar as informações e clicar no botão “Cadastre-se”
> - Acessar a página de login utilizando as mesmas credenciais

Critérios de Êxito:
> - Deve ser possível criar uma conta.
> - Após a criação da conta, a aplicação tem que permitir o usuário(prestador) acessar o perfil utilizando as mesmas credenciais usadas na criação da conta.

## CT - 04 - Perfil consumidor e botão favorito.
Requisitos Associados:
> - RF – 07 - A aplicação deverá permitir adicionar os locais como favoritos.
> - RF – 08 - A aplicação deverá permitir verificar os locais adicionados como favoritos.

Objetivo do Teste:
> - Verificar se o botão para adicionar o local aos favoritos está funcionando e se no perfil do consumidor/usuário, está apresentando os estabelecimentos marcados como tal. 

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Efetuar o Login
> - Clicar em “Criar Conta”
> - Acessar a página dos estabelecimentos
> - Clicar no “Favoritar”

Critérios de Êxito:
> - O botão adicionar aos favoritos deve gravar o estabelecimento e adicioná-lo em uma lista designada somente para locais selecionados como favoritos dos usuários.
> - O usuário deve ter a possibilidade de filtrar os estabelecimentos que adicionou como favorito.

## CT - 05 - Avaliação dos Estabelecimentos.
Requisitos Associados:
> - RF – 09 - A aplicação deverá apresentar uma funcionalidade que permita ao usuário avaliar o local frequentado. 

Objetivo do Teste:
> - Ao acessar a página do estabelecimento, deve existir um campo onde o usuário avalie o local com as categorias de: preço, ambiente, localização e atendimento.  

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Efetuar o Login
> - Acessar a página dos estabelecimentos
> - Escolher um estabelecimento
> - Efetuar a avaliação.

Critérios de Êxito:
> - Ao efetuar as avaliações, a mesma deve ser apresentada no perfil do estabelecimento e ficar disponível para outros usuários acessarem. 

## CT - 06 - Perfil do Prestador.
Requisitos Associados:
> - RF – 10 - A aplicação deverá estabelecer dimensões padronizadas para as imagens.

Objetivo do Teste:
> - Ao acessar o perfil de prestador, o responsável deve conseguir trocar: dados cadastrais, imagens, descrição, redes sociais.   

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Efetuar o Login
> - Acessar o Perfil
> - Efetuar as alterações

Critérios de Êxito:
> - O prestador ao efetuar o login na aplicação, deve ser encaminhado diretamente para o perfil do seu estabelecimento.
> - O perfil deve apresentar na página de estabelecimentos as alterações feitas no perfil do Prestador.
> - Deve ser possível alterar as informações e a imagem do estabelecimento acessado.  

