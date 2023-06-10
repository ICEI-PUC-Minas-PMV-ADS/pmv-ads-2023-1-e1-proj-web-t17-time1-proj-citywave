# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Os registros dos testes realizados na aplicação estão descritos abaixo.

## Casos de Sucesso
CT – 01 - Apresentação página home
> - Acessar o link [CityWave](josuewl.github.io)

![Página Home](img/CT_01_01.png)
<center>Figura 27 - Página Home</center>

A aplicação foi responsiva ao abrir a tela de Home. Houve apresentação da imagem dinâmica. Todos os elementos da página carregaram sem apresentar demora ou algum tipo de travamento. 

> - Clicar em "Descobrir Agora"
![Página Home](img/CT_01_02_v2.png)
<center>Figura 28 - Página Home</center>

Ao passar o mouse sobre o botão “Descobrir Agora” o mesmo sobressaiu da tonalidade branca para a azul, permitindo ao usuário que percebesse a opção de clique.

![Página Estabelecimentos](img/CT_01_03.png)
<center>Figura 29 - Página Estabelecimentos</center>

Após clicar em “Descobrir Agora” a aplicação direcionou a uma segunda página onde foi apresentada a lista de estabelecimentos que estão cadastrados. Em nenhum momento solicitou o “Login” para acessar. Todos apresentaram pelo menos uma imagem, os botões “Favoritar” e “Ver Detalhes”. 

<b>Resultado: </b>Êxito. Foi possível através do passo a passo, chegar a finalidade de visualização dos estabelecimentos da aplicação.

CT – 03 - Cadastro e Login
> - Acessar o link [CityWave](josuewl.github.io)

![Página Home](img/CT_03_01.png)
<center>Figura 30 - Página Home</center>

> - Acessar o "Menu"

![Página Menu](img/CT_03_04.png)
<center>Figura 31 - Página Menu</center>

Ao clicar nos 3 (três) traços apresentados no canto superior direito da tela, é possível acessar o “Menu”.

> - Clicar em "Criar Conta"

![Página Cadastro Estabelecimento](img/CT_03_03_v2.png)
<center>Figura 32 - Página Cadastro Estabelecimento</center>

> - Digitar as Informações e Clicar no botão "Cadastre-se"

![Página Cadastro](img/CT_03_05.png)
<center>Figura 33 - Página Cadastro </center>

![Página de Cadastro com Sucesso](img/CT_03_06.png)
<center>Figura 34 - Página de Cadastro com Sucesso</center>

Após digitar todas as informações do caso em teste, a aplicação apresentou a mensagem de sucesso ao salvar os dados. 

> - Acessar a página de "Login" utilizando as mesmas credenciais

![Página de Login](img/CT_03_07.png)
<center>Figura 35 - Página de Login</center>

![Página de Login com Sucesso](img/CT_03_10.png)
<center>Figura 36 - Página de Login com Sucesso</center>

![Página Perfil do Estabelecimento](img/CT_03_11.png)
<center>Figura 37 - Página Perfil do Estabelecimento</center>

<b>Resultado: </b>Êxito. A aplicação permitiu que o prestador fizesse o login utilizando as mesmas informações usadas no cadastro.

CT – 06- Perfil do Prestador
> - Acessar o link [CityWave](josuewl.github.io)

![Página Home](img/CT_06_01.png)
<center>Figura 38 - Página Home</center>

> - Efetuar Login

![Página Login](img/CT_06_02.png)
<center>Figura 39 - Página Login</center>

> - Acessar Perfil

![Página Perfil do Prestador](img/CT_06_03.png)
<center>Figura 40 - Página Perfil do Prestador</center>

> - Efetuar Alterações

![Página Perfil Prestador - Dados Cadastrais. ](img/CT_06_04.png)
<center>Figura 41 - Página Perfil Prestador - Dados Cadastrais. </center>

![Página Estabelecimentos - Alterações Cadastrais.](img/CT_06_05.png)
<center>Figura 42 - Página Estabelecimentos - Alterações Cadastrais.</center>

![Página Perfil Prestador - Imagens](img/CT_06_06.png)
<center>Figura 43 - Página Perfil Prestador - Imagens</center>

![Página Estabelecimentos - Alteração da Imagem](img/CT_06_07.png)
<center>Figura 44 - Página Estabelecimentos - Alteração da Imagem</center>

![Página Perfil Prestador - Imagens](img/CT_06_08.png)
<center>Figura 45 - Página Perfil Prestador - Imagens</center>

![Página Estabelecimento](img/CT_06_09.png)
<center>Figura 46 - Página Estabelecimento</center>

<b>Resultado:</b> Êxito. Após efetuar o “Login” foi possível alterar todas as informações e imagens propostas.


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
