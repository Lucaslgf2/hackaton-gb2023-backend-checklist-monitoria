/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class SubItemIndicador_1688085775548 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'SubItemIndicador',
      columns: [
        {
          name: 'CodigoSubItemIndicador',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoItemIndicador',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'Descricao',
          type: 'varchar'
        },
        {
          name: 'Resumo',
          type: 'varchar'
        }
      ],
      foreignKeys: [
        {
          name: 'FK_SubItemIndicador_ItemIndicador_CodigoItemIndicador',
          columnNames: ['CodigoItemIndicador'],
          referencedColumnNames: ['CodigoItemIndicador'],
          referencedTableName: 'ItemIndicador'
        }
      ]
    }), true)

    await queryRunner.createTable(new Table({
      name: 'PesoCanalSubItemIndicador',
      columns: [
        {
          name: 'CodigoPesoCanalSubItemIndicador',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoSubItemIndicador',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'SiglaCanal',
          type: 'char',
          length: '1',
          isPrimary: true
        },
        {
          name: 'Peso',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'FK_PesoCanalSubItemIndicador_CanalAtendimento_SiglaCanal',
          columnNames: ['SiglaCanal'],
          referencedColumnNames: ['SiglaCanal'],
          referencedTableName: 'CanalAtendimento'
        },
        {
          name: 'FK_PesoCanal_SubItemIndicador_CodigoSubItemIndicador',
          columnNames: ['CodigoSubItemIndicador'],
          referencedColumnNames: ['CodigoSubItemIndicador'],
          referencedTableName: 'SubItemIndicador'
        }
      ]
    }), true)

    //* ********************************* */
    const [satisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')

    const [prontidao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Prontidão'`)
    const [manutencaoDialogo] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Manutenção do Diálogo'`)
    const [linguagem] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Linguagem'`)
    const [procedimentosSistemas] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Procedimentos e Sistemas'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${prontidao.CodigoItemIndicador}, 'Saudação', 'Atender prontamente dentro dos parametros acordados\n\n- CSF Telefone\n\n- 5 segundos Chat\n\n- 30 segundos\n\n- CRC Multi Telefone\n\n- 5 segundos Chat\n\n- 1 minuto')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${manutencaoDialogo.CodigoItemIndicador}, 'Manutenção do Diálogo', '-CSF\n\nFone: 3 minutos ou combinado previamente ;\n\nChat: 5 minutos ou combinado previamente\n\n- CRC MultiFone: 1 minuto e 30 segundos\n\n- CRC Multi, Mono\n\nChat/Whats - 4 minutos e/ou combinado previamente\n\nCombinados para cenários específicos:\n\n- Suporte experts\n\n- Contato áreas/N2\n\n- Comandos sistêmicos/PDV')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${linguagem.CodigoItemIndicador}, 'Uso Incorreto da Linguagem / Erro de ortografia / Digitação / Pronúncia / Gerundismo / Pontuação / Acentuação / Escrita / Caixa Alta', 'Se o assistente cometeu 3 erros de linguagem ele será pontuado. Sem tolerância para casos que o erro mude o sentido da palavra ou da frase.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${procedimentosSistemas.CodigoItemIndicador}, 'Pesquisa de Satisfação', 'Ofertar a pesquisa de satisfação - Entende-se como "ofertar a pesquisa" o assistente convidar corretamente o cliente a responder a pesquisa')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${procedimentosSistemas.CodigoItemIndicador}, 'Apresentar Outras Possibilidades', 'Incentivar o uso dos recursos das plataformas (Tracking de Chamados/Menssageria/Autoatendimento)')`)

    //* ********************************* */
    const [fcrTma] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR, TMA, Contact Rate, Transferência e Improcedência\'')

    const [dominioTecnico] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcrTma.CodigoIndicador} AND Descricao='Domínio Técnico'`)
    const [procedimentosSistemasId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcrTma.CodigoIndicador} AND Descricao='Procedimentos e Sistemas'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${dominioTecnico.CodigoItemIndicador}, 'Entendimento do Problema', 'Entendeu rapidamente e/ou fez perguntas assertivas para melhor compreensão do problema, sem que a franquia tenha que repetir informações já passadas')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${dominioTecnico.CodigoItemIndicador}, 'Explicou / Realizou o procedimento de maneira correta', 'Realização do procedimento conforme os artigos da base de conhecimento.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${procedimentosSistemasId2.CodigoItemIndicador}, 'Protocolo de Atendimento', 'Ofertar o protocolo do atendimento (caso) para acompanhamento e consulta na extranet.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${procedimentosSistemasId2.CodigoItemIndicador}, 'Sinalizar Reincidência', 'Flegar o caso com reincidente segundo procedimento')`)

    //* ********************************* */
    const [improcedencia] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Improcedência\'')

    const [registroCategorizacao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${improcedencia.CodigoIndicador} AND Descricao='Registro e Categorização'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Registro Atendimento', 'Realizar o registro do caso de forma completa, clara e objetiva, contendo o que foi relatado pelo cliente (motivo do contato), as verificações realizadas durante o atendimento, informações importantes, dados relevantes e premissas e finalizar com a solução dada ao cliente.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Solução do Caso', 'Registrar de forma clara e sucinta qual foi a solução aplicada para que essa informação possa refletir no tracking de chamado e seja facilmente interpretada pela franquia.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Envio N.2', 'Para envio de caso ao N2, as premissas devem ser usadas, conforme o artigo descrito na base de conhecimento.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Categorização', 'Categorizar o atendimento de acordo com os procedimentos da base de conhecimento.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Anexou Artigo', 'Devemos anexar sempre o artigo ao caso, porém é necessário anexar o artigo correspondente ao atendimento.')`)

    //* ********************************* */
    const [qualidade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Qualidade\'')

    const [registroCategorizacaoId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${qualidade.CodigoIndicador} AND Descricao='Registro e Categorização'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${registroCategorizacaoId2.CodigoItemIndicador}, 'Vincular Transcrição', 'Vincular a transcrição dos atendimentos digitais ao caso (não se aplica para CRC Multi).')`)

    //* ********************************* */
    const [satisfacao2] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')

    const [conexao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao2.CodigoIndicador} AND Descricao='Gero Conexão e Humanizo a Relação'`)
    const [paixao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao2.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${conexao.CodigoItemIndicador}, 'Acolhimento e Saudação ', 'Acolher o cliente de forma encantadora e personalizada desde o 1º contato, sem se limitar a frases prontas.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${conexao.CodigoItemIndicador}, 'Sensibilidade e Reações Humanas', 'Demonstre sensibilidade e reações humanas durante todo seu atendimento. Para isso, utilize tom de voz amigável e entusiasmo, na voz e na escrita.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${paixao.CodigoItemIndicador}, 'Surpresa Positiva', 'Mencionar algum detalhe da conversa/atendimento, demonstrando que prestou atenção ao que o cliente falou, e/ou agir com proatividade, gerando surpresa positiva no cliente.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${paixao.CodigoItemIndicador}, 'Finalização de Contato', 'Agradecer o tempo/contato e declarar disponibilidade da CSF junto a franquia')`)

    //* ********************************* */
    const [resolutividadeSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Satisfação\'')

    const [interesse] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividadeSatisfacao.CodigoIndicador} AND Descricao='Meu Interesse Verdadeiro Transmite Confiança'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${interesse.CodigoItemIndicador}, 'Perguntas e Entendimento', 'Fazer perguntas abertas e pertinentes, que te ajudam a entender o problema.')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${interesse.CodigoItemIndicador}, 'Atenção e Escuta Ativa', 'Volte sua atenção ao diálogo, mantendo uma conversa eficiente. Não faça o cliente repetir informações desnecessariamente, e não deixe de responder alguma pergunta ou solicitação feita durante o atendimento.')`)

    //* ********************************* */
    const [resolutividadeContact] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Contact Rate / Satisfação\'')

    const [interesseId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividadeContact.CodigoIndicador} AND Descricao='Meu Interesse Verdadeiro Transmite Confiança'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${interesseId2.CodigoItemIndicador}, 'Orientação e Explicação', 'Após identificar e analisar o problema, explique com detalhes e exemplos, priorizando o porquê (motivos) das coisas')`)

    //* ********************************* */
    const [fcr] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR\'')

    const [paixaoId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcr.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${paixaoId2.CodigoItemIndicador}, 'Desejo de Solucionar', 'Demonstre seu desejo de solucionar e ajudar o cliente, mesmo diante de obstáculos.')`)

    //* ********************************* */
    const [resolutividade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade\'')

    const [paixaoId3] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividade.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${paixaoId3.CodigoItemIndicador}, 'Outras Solicitações (ao finalizar um tema)', 'Questione se possui algum outro assunto que você possa ajudar neste contato.')`)

    //* ********************************* */
    const [tmaSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'TMA / Satisfação\'')

    const [respeito] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${tmaSatisfacao.CodigoIndicador} AND Descricao='Respeito o Tempo do Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${respeito.CodigoItemIndicador}, 'Ausência / Visibilidade da Ação', 'Justifique a ausência para trazer clareza das ações que estamos realizando durante o atendimento e/ou indique quais passos seguirá para ajudá-lo. Para não se tornar repetitivo, faça combinados quanto ao tempo de retorno. (no caso de procedimentos mais detalhados/morosos)')`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo) VALUES (${respeito.CodigoItemIndicador}, 'Agilidade', 'Demonstrar agilidade ao buscar soluções para o cliente, utilizando os recursos da melhor maneira')`)

    //* ********************************* */
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (1, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (1, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (2, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (2, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (3, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (3, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (4, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (4, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (5, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (5, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (6, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (6, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (7, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (7, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (8, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (8, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (9, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (9, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (10, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (10, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (11, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (11, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (12, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (12, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (13, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (13, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (14, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (14, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (15, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (15, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (16, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (16, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (17, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (17, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (18, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (18, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (19, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (19, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (20, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (20, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (21, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (21, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (22, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (22, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (23, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (23, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (24, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (24, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (25, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (25, \'V\', 7)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (26, \'C\', 5)')
    await queryRunner.query('INSERT INTO PesoCanalSubItemIndicador (CodigoSubItemIndicador, SiglaCanal, Peso) VALUES (26, \'V\', 7)')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('SubItemIndicador')
  }
}
