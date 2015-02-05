---
date: "2015-02-05 16:36"
layout: post
title: UM MOODLE CUSTOMIZADO A PARTIR DO MOODLE PARA ATENDIMENTO DE UM GRANDE PÚBLICO
description: "Esse artigo apresenta um AVA diferenciado denominado SENI (Sistema de Educação para Nova Indústria)"
category: AVA
github: fabiobcalmeida
author-name: Fábio Britto
tags:
- AVA
- EAD
- MOODLE

image: "https://www.vagrantup.com/images/vagrant_header_background-482a12a7.png"
---
###1- Introdução

É perceptível atualmente a crescente influência do uso de recursos tecnológicos no contexto da educação. Nessa perspectiva, a modalidade de
ensino à distância (EaD) tem se mostrado como forma alternativa no processo de aprendizagem. O EaD contribui para a construção do conhecimento de cada
usuário de forma autônoma, por meio da disponibilidade de ambientes de aprendizagem que utilizam meios hipermidiáticos, desvinculando-se assim da
limitação físico-temporal presente no modelo de ensino presencial. A educação à distância é o processo de ensino-aprendizagem, mediado por tecnologias,
onde professores e alunos estão separados espacial e/ou temporalmente [7].
A flexibilidade em organizar o espaço e o tempo no processo de aprendizagem estimula e amplia as possibilidades no contexto educativo,
sendo esta característica apontada como um dos principais benefícios do EaD.Entretanto, apesar dos ganhos obtidos pela introdução de novos recursos
tecnológicos na construção do conhecimento, o papel principal do EaD não é a substituição do modelo tradicional de educação, e sim complementá-lo na
individualização do conhecimento de acordo com o perfil, habilidade e preferência de cada usuário, além de permitir a inserção de pessoas excluídas
do modelo tradicional de ensino [3].
Basicamente, o papel dos AVAs é estimular a autonomia do aluno na gestão de sua aprendizagem, entretanto, um aspecto motivacional para
permanência de alunos em cursos EaD é a necessidade de manuseio dos recursos inseridos nesses AVAs, os quais podem requerer algum
conhecimento ou habilidade prévia do aluno usuário, tornando evidente a existência de uma interdependência entre as variáveis alfabetização e inclusão
digital [1]. A inabilidade para acessar e interagir com todos os recursos integrantes do AVA pode ser visto como um elemento de desmotivação e
incentivo a evasão em cursos de EaD.
Os ambientes hipermidiáticos de aprendizagem são mediadores que facilitam a gestão dos processos de ensino-aprendizagem em cursos online,
compostos por um conjunto de ferramentas tecnológicas que, aliadas ao design instrucional de um projeto, proporcionam a possibilidade de distribuição de
conteúdo, gerenciamento da informação e outros fatores relacionados às interações gerais de um curso e à produção de conhecimento. Este conjunto de
ferramentas deve ser elaborado segundo três princípios básicos [4]:
a) primeiro: O aluno tem um roteiro planejado exteriormente;
b) segundo: O aluno deve desempenhar atividades que cumpram as finalidades do programa;
c) terceiro: O ambiente criado registra, orienta, demanda resultados de percurso e fornece informações sobre o desempenho do aluno aos
administradores.
Há uma gama de ferramentas que dão suporte ao desenvolvimento de ambientes virtuais de aprendizagem, como o BlackBoard, o Fronter e o Moodle
(Modular Object-Oriented Dynamic Learning Environment). Todas estas ferramentas dispõem de recursos multimídia para propiciar a interação do
aluno com as atividades acadêmicas, entretanto, o Moodle ainda é o mais largamente utilizado no contexto educacional tomando como base dois
aspectos:
(a) o moodle é gratuito e de fácil instalação;
(b) É uma ferramenta de código aberto, ou seja, permite fazer customizações nas interfaces e funcionalidades.
A diferença existente entre os diversos AVAs reside essencialmente na gerência dos componentes e na interface para o usuário, os quais devem ser
flexíveis e adaptáveis aos objetivos do projeto e público alvo. Apesar dessas características serem comuns a maioria dos AVAs, este artigo apresenta um
AVA diferenciado, denominado SENI (Sistema de Educação para Nova Indústria) que foi desenvolvido a partir de uma customização do Moodle e que
teve de cumprir a requisitos bastante desafiadores do Programa de Competências Transversais do SENAI, em destaque para o atendimento a um
grande público distribuído por todo o Brasil (geração de milhares de matrículas), facilidade de operação e baixa necessidade de treinamento para
os gestores e monitores do programa, gerenciamento das regras de realização dos cursos (prazos e bloqueios), solução para pouca possibilidade de interação
entre alunos e monitores, divisão dos resultados alcançados entre os Departamentos Regionais do SENAI e unidades, dentre outros. Para
atendimento a esses requisitos, foram adotadas técnicas e soluções que serão detalhadas no decorrer desse trabalho.

###2- Moodle: Uma Ferramenta de Apoio à Aprendizagem

Atualmente, uma das ferramentas mais utilizadas para construção de ambientes virtuais de cursos é o Moodle. Pela definição do próprio site, o
Moodle é um “Sistema de Gerenciamento de Cursos de Fonte Aberta”, ou seja, é um software livre de suporte a aprendizagem em um ambiente virtual,
podendo ser modificado e customizado por qualquer indivíduo [6]. Esse foi um dos principais motivos pela escolha do Moodle para desenvolvimento do SENI.
O Moodle é amplamente aceito nacional e internacionalmente, integrando mais de vinte milhões de usuários em mais de quarenta mil sites,
sendo estes distribuídos entre instituições de ensino, empresas e hospedagem em servidores particulares [5]. O ambiente virtual é mais que um simples
espaço de publicação de materiais permeado de interações premeditadas, é um local espelha as necessidades de interação e comunicação de cada
contexto educacional em diferentes situações e momentos [2].
O fato de ser gratuito estimula a introdução desta ferramenta em
instituições de ensino, sem contar a possibilidade de customização do ambiente virtual de aprendizagem, considerando que é uma ferramenta de
código aberto, que permite disponibilizar recursos adaptados aos objetivos pedagógicos.

###3- Programa de Competências Transversais

O Departamento Nacional do SENAI iniciou em 2008, uma ação a nível nacional, intitulada “Competências Transversais”, com o objetivo de
desenvolver conteúdos para cursos à distância e disponibilizá-los gratuitamente através da Rede SENAI de EaD. Esse programa de educação oferece
cursos na modalidade de iniciação profissional para a formação de pessoas nas áreas de empreendedorismo, tecnologia da informação e comunicação,
legislação trabalhista, segurança no trabalho, meio ambiente e propriedade intelectual. O programa pode ser acessado através do endereço da internet
[www.senai.br/ead/transversais](http://www.senai.br/ead/transversais/).
Os cursos são oferecidos a distância de duas formas: online (Internet) ou com material impresso (MDI). Eles possuem uma carga horária equivalente a 14 horas de curso presencial e um prazo de conclusão de 20 dias. Dentre os
resultados alcançados pelo programa destacam-se:
a) realização a partir de outubro de 2008 até o final do ano de 2010 de mais de 560.000 (quinhentos e sessenta mil) matrículas nos seis
cursos disponíveis e nas duas formas (on-line e material impresso);
b) contribuição para a inovação dos cursos de qualificação profissional em 9 Departamentos Regionais do SENAI que incluíram as
Competências Transversais a distância como unidade curricular de cursos presenciais, atuando com oferta blended learning;
c) reconhecimento externo de excelência mediante obtenção do troféu de vencedor do prêmio E-learning Brasil 2010-2011;
d) mídia espontânea voltada para médias e grandes empresas brasileiras através da inclusão do relato do programa no Anuário Elearning
Brasil 2010, com tiragem de milhares de exemplares.
Vale ressaltar que o SENI foi criado para atender apenas aos cursos à
distância na forma online do programa, conforme descrito na próxima seção.

###4- Sistema de Educação para Nova Indústria - SENI

Inserido no contexto do Programa de Competências Transversais, o SENI consiste em um projeto de customização do moodle que teve como
objetivo a disposição dos cursos na forma online, voltado para um grande público, através das unidades do SENAI de todo país.
O SENI entrou em operação em novembro de 2008 e em 2010, alcançou a participação de 18 federações, registrou mais de 190.000 (cento e
noventa mil) alunos inscritos e a realização de mais de 300.000 (trezentas mil) matrículas. Verificou-se também no final desse ano, uma quantidade de
matrículas semanal média de 4.325 alunos e uma média diária de 354 alunos inscritos no programa em todo país. Números expressivos em se tratando de
uma única instalação do moodle.
A Figura 1 representa as principais funcionalidades propostas para o SENI e a interação com os tipos de usuários do ambiente.

(/assets/img/moodle-customizado/imagem1.png)

Para realizar os cursos, o aluno clica no estado que pertence, preenche um formulário de inscrição no programa, recebe a confirmação via e-mail e
imediatamente pode escolher qualquer curso para realizar a matrícula. Caso tenha necessidade, pode cancelar a matrícula com até 5 dias após a
confirmação. O sistema calcula e informa a data limite de conclusão do curso e bloqueia a matrícula nos demais cursos. No ambiente é disponibilizado os
dados de contato do monitor responsável pela unidade/pólo do aluno.

Todo curso tem uma avaliação final, caso o aluno não alcance uma pontuação de 70% de acerto, é aberta a possibilidade de realização de uma
avaliação de recuperação. Caso seja aprovado o ambiente gera e disponibiliza o certificado em formato PDF.
Ao se aproximar do final do prazo de realização do curso, o sistema envia para os alunos um e-mail com essa sinalização. Além disso, é possível o
monitor acompanhar o andamento de realização dos alunos no curso por meio de consultas disponibilizadas no ambiente.
O monitor tem uma visão dos resultados alcançados (aprovações,reprovações e evasões) em seu estado e unidades, apenas o administrador
tem acesso aos resultados de todos os estados. Sendo assim, existem relatórios de cursos, alunos e consolidados com diversos filtros (curso, situação
do aluno, período, unidade e outros dados cadastrais).
Somente o administrador pode alterar a data de conclusão de um curso para um aluno e realizar o cadastro de novas unidades/pólos e monitores.

###4.1- Principais Funcionalidades e Inovações

A partir dos requisitos levantados para realização dos cursos do Programa de Competências Transversais, as principais funcionalidades
implementadas no SENI foram:
a) capacidade de realização de matrícula e início dos cursos pelos alunos a qualquer instante. Após inscrição no programa, o aluno
pode iniciar a realização do curso imediatamente, não existe o conceito de período de matrícula ou formação de turmas. Essa
funcionalidade reduz drasticamente a necessidade de operação do ambiente e aumenta a flexibilidade na realização dos cursos por
parte dos discentes;
b) controle de regras de realização dos cursos. O aluno apenas pode realizar um curso por vez. Somente após terminar o curso no qual
está inscrito ou cancelar a sua inscrição no prazo máximo de cinco dias de início do mesmo, o aluno poderá realizar outro curso. O
prazo de realização de cada curso é de 20 dias. Após esse prazo, caso o aluno não tenha concluído o mesmo, ele fica com a situação
de evadido e somente pode realizar o mesmo curso novamente após 90 dias. Como não existem turmas, o sistema controla individualmente o andamento de cada aluno no curso;
c) apesar dos cursos terem sido desenvolvidos com base na metodologia auto-instrucional, onde o aluno é o grande responsável
pelo seu aprendizado, o SENI utiliza o recurso de “monitoria automática” através do envio de mensagens e e-mails para os
alunos a partir da ocorrência de padrões de comportamento dos mesmos, como a quantidade de dias sem acessar o ambiente ou
proximidade de encerramento do prazo de conclusão do curso. Essa funcionalidade reduz a necessidade de interação dos monitores com
os alunos;
d) cálculo e emissão de relatórios customizados com resultados das matrículas realizadas (alunos aprovados, reprovados e evadidos) por
estado Departamento Regional do SENAI e unidade a qual os alunos estão vinculados;
e) alteração do formulário de cadastro dos alunos, com inclusão de novos campos obrigatórios e validações;
f) exportação de dados dos alunos e resultados dos cursos em formato excel (.xls);
g) consulta de andamento dos alunos nos cursos e geração de histórico;
h) emissão de certificados online. Ao terminar o curso, caso seja aprovado na avaliação final, o aluno pode emitir dentro do próprio
ambiente o certificado de conclusão. O certificado é gerado por estado. Essa funcionalidade reduz horas de trabalho, gastos com
impressão e postagem.
Vale ressaltar que todas as outras funcionalidades nativas no moodle permaneceram disponíveis, o que representa um grande potencial para atender
novos projetos.
A Figura 2 apresenta uma tela do SENI com um histórico de um aluno. Nesse exemplo é possível observar sua aprovação nos cursos de educação
ambiental, legislação trabalhista e segurança do trabalho. O curso de tecnologia da informação e comunicação encontra-se em andamento e o de
propriedade intelectual ainda não foi cursado.

(/assets/img/moodle-customizado/imagem1.png)

###5- Considerações Finais
Considerando o uso de recursos tecnológicos, como os ambientes virtuais de aprendizagem (AVA), vale ressaltar que a aprendizagem nesse meio
se processa essencialmente de forma individual e dependente da auto motivação e organização de cada indivíduo. Entretanto, isso pode ser
minimizado através do uso correto de metodologias educacionais e de uma adequada customização do AVA com o uso de recursos interativos.
A necessidade de mediação pedagógica pode também ser um fator de influência para atendimento dos resultados esperados. Vale ressaltar, que no
projeto do SENI não houve uma mediação pedagógica direta do tutor enquanto norteador das ações e realizações de tarefas acadêmicas. A mediação
pedagógica foi indireta, utilizando o envio de e-mails e mensagens automáticas, programados pela administração do ambiente e através de
informações de contato com os monitores. Sendo assim, o SENI foi desenvolvido dentro desse cenário desafiador e conseguiu atender a todos os
requisitos levantados pelo programa de Competências Transversais.
Dentre os benefícios alcançados, destacam-se o fortalecimento das competências no SENAI em desenvolvimento de software para EaD, banco de
dados, customização do moodle e infraestrutura de hospedagem de cursos EaD (data center).
Com as observações desse estudo, será possível estudar novas estratégias e metodologias de customização de AVAs, visando a melhoria do
desenvolvimento, implantação e execução de cursos EaD.
Dentre as atividades futuras previstas, destaca-se a migração do SENI para uso da versão 2.0 do moodle (SENI 2.0), que além de trazer todas as novas funcionalidades já implementadas nessa versão mais atual do moodle, o
SENI 2.0 terá como objetivo e principal benefício a união das bases de dados de diversas instalações moodle para geração de uma visão centralizada.
Devido aos expressivos resultados alcançados com ajuda do SENI, o Programa de Competências Transversais foi prorrogado por mais um ano (até
o final de 2011).

###Referências

[1] ALMEIDA, M. E. B. Educação à distância na internet: abordagens e
constribuições. Educação e Pesquisa. São Paulo, v. 29, n. 2, p. 327-340,
jul/dez. 2003.
[2] ALVES, L.; BRITO, M.. O Ambiente Moodle como Apoio ao Ensino
Presencial. 2005. Disponível em:
<http://www.abed.org.br/congresso2005/por/pdf/085tcc3.pdf>
[3] ARIEIRA, J. O. et al.. Avaliação do aprendizado via educação a
distância: a visão dos discentes. Ensaio: aval. pol. públ. Educ., Rio de
Janeiro, v. 17, n. 63, p. 313-340, abr./jun. 2009.
[4] FRANÇA, G. Os ambientes de aprendizagem na época da hipermídia e
da Educação a Distância. Perspect. ciênc. inf. vol.14 no.1 Belo
Horizonte Jan./Apr. 2009.
[5] MEDEIROS, A. AVA MOODLE. 2007. Acesso em :03 jan. 2011. Disponível
em: <http://alessandramedeiros.blogspot.com/2007/12/um-recurso-muitointeressante-vem.html>.
[6] MOODLE. Acesso em: 29 Dez. 2010. Disponível em:
<http://moodle.org.br/>.
[7] MORAN, J. M. O que é educação a distância. Atualizado em: 2002.
Acesso em: 30 dez. 2010. Disponível em:
<http://www.eca.usp.br/prof/moran/dist.htm>.
