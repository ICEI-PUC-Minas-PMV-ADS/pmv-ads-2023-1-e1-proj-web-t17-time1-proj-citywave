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
Verificar se ao acessar o site, a página home está apresentando os estabelecimentos e suas características, além de ranquear os estabelecimentos com melhores avaliações.

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

Verificar se o filtro está apresentando as informações corretamente.

Passos:
> - Acessar o site: [CityWave](josuewl.github.io)
> - Clicar em “Descobrir agora”
> - Ir em "Menu"
> - Clicar em "Categoria"
> - Selecionar uma Categoria

Critérios de Êxito:
> - Deve ser possível filtrar por categoria, Cidade e Estado, simultaneamente ou separadamente.
> - Após a aplicação dos filtros, a página deve apresentar somente os estabelecimentos com os critérios selecionados.

 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
