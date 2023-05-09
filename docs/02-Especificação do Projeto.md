# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A identificação do problema e as soluções a serem tratadas neste projeto foram levantadas a partir das observações feitas pelos membros da equipe, onde foi analisado e avaliado os hábitos e estilos de vida dos usuários. Os dados coletados nesse processo  foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem.

### Helena Franco, 22 anos. 

**Dados Principais:**
Solteira, mora com a família na Pampulha - Belo Horizonte. Estudante de Gestão em Recursos Humanos faz estágio em um escritório que presta serviços de administração e rotinas de departamento pessoal, localizado no bairro Barro preto.

**Hábitos:**
Apesar de ter uma rotina agitada, Helena faz questão de separar momentos com a família e amigos. Helena sempre tenta se manter motivada com os estudos prezando pelo conhecimento e acredita que o desenvolvimento pessoal pode ajudar a alavancar sua carreira.

**Hobbies:**
- Sair com a família e amigos da faculdade.
- Ouvir músicas.
- Estar em contato com a natureza.
- Frequentar pubs e festivais de música.

**Objetivos:**
- Desenvolver estratégias institucionais e colocar em prática programas envolvendo pessoas em todas as esferas, que incluem assuntos como liderança e motivação

**Frustrações:**
- Preço alto e locais de difícil acesso.

### Roberto Gardone, 39 anos.

**Dados Principais:**
Casado, mora com sua esposa Natália no Belvedere-Belo Horizonte. Atua no mercado na área de arquitetura e urbanismo.

**Hábitos:**
Roberto costuma convidar sua esposa para eventos sociais de que participa, além disso gosta de dividir e compartilhar momentos com sua família aos finais de semana.

**Hobbies:**
- Viajar
- Participar de eventos que trazem networking
- Geralmente frequenta parques, restaurantes, museus e teatros.

**Objetivos:**
- Resgatar a identidade cultural na área da arquitetura e urbanismo, com vista à compreensão das relações entre as pessoas e as criações arquitetônicas e a função destas face às necessidades sociais

**Frustrações:**
- Falta de locais que prendem e chamam a atenção.
- Lugares com muito barulho

### Elizabeth Santos, 45 anos.

**Dados Principais:**
Casada, tem 2 filhos, Pedro com 10 anos de idade e Alice com 5 anos. Mora com a família no Sion - Belo Horizonte, leciona história na UFMG localizada na região da Pampulha.

**Hábitos:**
Elizabeth faz questão de se manter o mais presente possível na vida de seus filhos, participa da educação, costuma levá-los para museus, parques e eventos culturais.

**Hobbies:**
- Ouvir músicas. 
- Ler livros.
- Estar em contato com a natureza.
- Praticar Yoga
- Sair com os filhos.

**Objetivos:**
- Compartilhar conhecimentos e informações com outras pessoas.

**Frustrações:**
- Pouca divulgação dos eventos culturais.
- Poucos lugares familiares.

### Flávia Reis, 27 anos.

**Dados Principais:**
Solteira, formada em psicologia, Flávia acabou de se mudar da casa dos pais para ir morar com as amigas no centro de Betim.

**Hábitos:**
Realiza atendimentos online pela psicologia viva durante a semana, no tempo livre gosta de cozinhar e conhecer novas pessoas.

**Hobbies:**
- Testar novas receitas
- Conversar
- Costuma frequentar bares, restaurantes e cafeterias
- Gosta de música ao vivo. 

**Objetivos:**
- Conhecer pessoas novas para trocar conhecimento
- Acrescentar músicas diferentes na playlist 

**Frustrações:**
- Lugares com atendimento ruim e preço alto

## Histórias de Usuários

A partir da pesquisa realizada com as personas identificadas para o projeto, foram levantadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                                          |PARA ... `MOTIVO/VALOR`                                           |
|--------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Roberto Gardone  | Participar de eventos que promovam a identidade cultural na área da arquitetura e urbanismo.| Aumentar a rede de contatos, obter referências de projetos arquitetônicos.|
| Roberto Gardone  | Ter em um único lugar todos os estabelecimentos favoritos e ranqueados.  |Facilitar a busca dos locais de acordo com o gosto e/ou hobbie.|
| Helena Franco    | Ter boas referências de lugares para frequentar na minha cidade.         | Conhecer novos ambientes que ofereçam novas experiências.|
| Elisabeth Santos | Encontrar atrações culturais e ambientes familiares com mais facilidade. | Expandir o repertório cultural e poder sair mais com meus filhos.|
| Flávia Reis      | Conhecer novos lugares com bom custo benefício e com música ao vivo.     | Provar comidas e drinks diferentes e conhecer novos artistas.|
| Helena Franco | Verificar se o local presta um serviço bom pela descrição e avaliações de outras pessoas.| Para ajudar na escolha do ambiente ideal e evitar frustrações. |



## Requisitos

A definição do escopo funcional do projeto é baseada em dois tipos de requisitos: os requisitos funcionais, que especificam as formas de interação dos usuários com o sistema, e os requisitos não funcionais, que descrevem os aspectos gerais que o sistema deve apresentar. A seguir, são apresentados esses requisitos.

### Requisitos Funcionais
A tabela abaixo expõe os requisitos do projeto, destacando a ordem de importância na qual elas devem ser disponibilizadas.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação web deverá apresentar páginas dinâmicas com atualização de locais e eventos para frequentar obtidos por meio da sua geolocalização. | ALTA | 
|RF-002 | A aplicação web deverá apresentar funcionalidades de filtragem para definir categorias de locais e eventos que o usuário deseja frequentar. | ALTA |
|RF-003 | As funcionalidades de filtro devem possibilitar ao usuário localizar os estabelecimentos por cidade e estado. | MÉDIA |
|RF-004 | A aplicação deverá permitir ao usuário visualizar locais de entretenimento e eventos com todos os detalhes de serviços oferecidos e avaliações associadas. |ALTA |
|RF-005 | A aplicação deverá exibir, para cada estabelecimento ou evento, imagens do ambiente correspondente. | ALTA |
|RF-006| A aplicação deverá permitir que o usuário realize um cadastro para acompanhamento de locais frequentados. O cadastro deverá ser categorizado para o consumidor e o prestador de serviços. | MÉDIA |
|RF-007| A aplicação deverá permitir adicionar os locais como favoritos. | MÉDIA |
|RF-008| A aplicação deverá permitir verificar os locais adicionados como favoritos | MÉDIA |
|RF-009| A aplicação deverá apresentar uma funcionalidade que permita ao usuário avaliar o local frequentado. | BAIXA |
|RF-010| A aplicação deverá estabelecer dimensões padronizadas para as imagens. | BAIXA |
|RF-011| A aplicação deverá ranquear os estabelecimentos de acordo com o critério de melhor avaliação. | MÉDIA |

### Requisitos não Funcionais

A tabela abaixo expõe os requisitos não funcionais que o projeto deverá atender. 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deverá ser hospedada em um servidor que permita realizar testagem, configurações, reparos e desenvolvimento do software. | ALTA | 
|RNF-002| A aplicação deverá ter alta disponibilidade. |  ALTA | 
|RNF-003| A aplicação deverá apresentar um menu complementar para facilitar a navegação do usuário.| ALTA |
|RNF-004| A aplicação deverá ser compatível com os principais navegadores (Google Chrome, Firefox, Microsoft Edge) |  ALTA |
|RNF-005| A aplicação deverá ser responsiva permitindo a visualização em diferentes dispositivos de forma adequada. |  ALTA |

## Restrições

A tabela abaixo traz as restrições que restringem a realização deste projeto e que se constituem como deveres evidentes para o andamento do projeto em referência.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023. |
|RE-02| A aplicação deve se restringir às linguagens básicas de programação front-end. |
|RE-03| A equipe deverá desenvolver o projeto com base no aprendizado obtido na universidade, não podendo terceirizar o desenvolvimento do trabalho. |
