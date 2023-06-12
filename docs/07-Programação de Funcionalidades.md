# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

# Funcionalidades do Sistema (Telas)

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.
Home Page e Menu (RF-02)
A tela principal do sistema faz chamada para o usuário realizar seu cadastro e conta com menu off canvas que permite a navegação pelas demais páginas e categorias. O exemplo da tela é apresentado na Figura 24.

![Captura de tela 2023-05-14 224259](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t17-time1-proj-citywave/assets/127361540/8bda1092-141e-4599-b9d8-fe7e63eeec85)

Figura 24 - Home Page e Menu

Requisitos atendidos
- RF-02 
Artefatos da funcionalidade
- index.html
- bootstrap
- template.css

# Tela Login (RF-06)

A tela de login permite ao usuário realizar login, ou ser direcionado para um novo cadastro.
![Tela de login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t17-time1-proj-citywave/assets/127361540/b2c2d886-ade6-47dd-9720-0d971d1f2e5e)
Figura 25 - Tela Login


Requisitos atendidos
- RF-06
Artefatos da funcionalidade
- signin.html
- bootstrap
- signin.css
- signin.js
- template.css

# Tela de cadastro do estabelecimento (RF-06)

Tela que permite ao prestador de serviços realizar um cadastro na plataforma de seu estabelecimento para gerenciá-lo futuramente. O cadastro  é armazenado no LocalStorage com estruturas de dados baseada em JSON.

![Captura de tela 2023-05-14 214639](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t17-time1-proj-citywave/assets/127361540/0b48f60c-6ad6-4bda-86ca-5dcb2c753165)

Figura 26 - Tela de cadastro do estabelecimento


Requisitos atendidos
- RF-06
Artefatos da funcionalidade
- cadastro_estabelecimento_signup.html
- bootstrap
- signup.css
- cadastro_estabelecimento_signup.js
- template.css

# Estrutura de dados
signup {
email: "teste02@gmail.com"
nome: "Udon culinária Japonesa"
senha: "udon12345"
}

# Tela lista de estabelecimentos (RF-04 | RF-05 | RF-07)
Tela que permite ao usuário visualizar o estabelecimento selecionado juntamente com as informações referente, avaliações, descrição.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t17-time1-proj-citywave/assets/127361540/b50555aa-2a0f-456d-92c7-a3504eeb5f0c)


Figura 27 - Tela individual do estabelecimento

# Tela individual do estabelecimento (RF-05)
A aplicação deverá permitir ao usuário visualizar locais de entretenimento e eventos com todos os detalhes de serviços oferecidos e avaliações associadas.

![ImagemTelaindividual](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t17-time1-proj-citywave/assets/127361540/6539a3a5-1d12-4443-b838-f85679bc4d7a)

Figura 28 - Tela individual do estabelecimento








