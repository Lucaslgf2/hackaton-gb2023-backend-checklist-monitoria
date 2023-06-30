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
        },
        {
          name: 'Peso',
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

    //* ********************************* */
    const [satisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')

    const [prontidao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Prontidão'`)
    const [manutencaoDialogo] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Manutenção do Diálogo'`)
    const [linguagem] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Linguagem'`)
    const [procedimentosSistemas] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Procedimentos e Sistemas'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${prontidao.CodigoItemIndicador}, 'Saudação', 'Atender prontamente dentro dos parametros acordados\n\n- CSF Telefone\n\n- 5 segundos Chat\n\n- 30 segundos\n\n- CRC Multi Telefone\n\n- 5 segundos Chat\n\n- 1 minuto', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${manutencaoDialogo.CodigoItemIndicador}, 'Manutenção do Diálogo', '-CSF\n\nFone: 3 minutos ou combinado previamente ;\n\nChat: 5 minutos ou combinado previamente\n\n- CRC MultiFone: 1 minuto e 30 segundos\n\n- CRC Multi, Mono\n\nChat/Whats - 4 minutos e/ou combinado previamente\n\nCombinados para cenários específicos:\n\n- Suporte experts\n\n- Contato áreas/N2\n\n- Comandos sistêmicos/PDV', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${linguagem.CodigoItemIndicador}, 'Uso Incorreto da Linguagem / Erro de ortografia / Digitação / Pronúncia / Gerundismo / Pontuação / Acentuação / Escrita / Caixa Alta', 'Se o assistente cometeu 3 erros de linguagem ele será pontuado. Sem tolerância para casos que o erro mude o sentido da palavra ou da frase.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${procedimentosSistemas.CodigoItemIndicador}, 'Pesquisa de Satisfação', 'Ofertar a pesquisa de satisfação - Entende-se como "ofertar a pesquisa" o assistente convidar corretamente o cliente a responder a pesquisa', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${procedimentosSistemas.CodigoItemIndicador}, 'Apresentar Outras Possibilidades', 'Incentivar o uso dos recursos das plataformas (Tracking de Chamados/Menssageria/Autoatendimento)', 77)`)

    //* ********************************* */
    const [fcrTma] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR, TMA, Contact Rate, Transferência e Improcedência\'')

    const [dominioTecnico] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcrTma.CodigoIndicador} AND Descricao='Domínio Técnico'`)
    const [procedimentosSistemasId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcrTma.CodigoIndicador} AND Descricao='Procedimentos e Sistemas'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${dominioTecnico.CodigoItemIndicador}, 'Entendimento do Problema', 'Entendeu rapidamente e/ou fez perguntas assertivas para melhor compreensão do problema, sem que a franquia tenha que repetir informações já passadas', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${dominioTecnico.CodigoItemIndicador}, 'Explicou / Realizou o procedimento de maneira correta', 'Realização do procedimento conforme os artigos da base de conhecimento.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${procedimentosSistemasId2.CodigoItemIndicador}, 'Protocolo de Atendimento', 'Ofertar o protocolo do atendimento (caso) para acompanhamento e consulta na extranet.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${procedimentosSistemasId2.CodigoItemIndicador}, 'Sinalizar Reincidência', 'Flegar o caso com reincidente segundo procedimento', 77)`)

    //* ********************************* */
    const [improcedencia] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Improcedência\'')

    const [registroCategorizacao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${improcedencia.CodigoIndicador} AND Descricao='Registro e Categorização'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Registro Atendimento', 'Realizar o registro do caso de forma completa, clara e objetiva, contendo o que foi relatado pelo cliente (motivo do contato), as verificações realizadas durante o atendimento, informações importantes, dados relevantes e premissas e finalizar com a solução dada ao cliente.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Solução do Caso', 'Registrar de forma clara e sucinta qual foi a solução aplicada para que essa informação possa refletir no tracking de chamado e seja facilmente interpretada pela franquia.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Envio N.2', 'Para envio de caso ao N2, as premissas devem ser usadas, conforme o artigo descrito na base de conhecimento.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Categorização', 'Categorizar o atendimento de acordo com os procedimentos da base de conhecimento.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${registroCategorizacao.CodigoItemIndicador}, 'Anexou Artigo', 'Devemos anexar sempre o artigo ao caso, porém é necessário anexar o artigo correspondente ao atendimento.', 77)`)

    //* ********************************* */
    const [qualidade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Qualidade\'')

    const [registroCategorizacaoId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${qualidade.CodigoIndicador} AND Descricao='Registro e Categorização'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${registroCategorizacaoId2.CodigoItemIndicador}, 'Vincular Transcrição', 'Vincular a transcrição dos atendimentos digitais ao caso (não se aplica para CRC Multi).', 77)`)

    //* ********************************* */
    const [satisfacao2] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')

    const [conexao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao2.CodigoIndicador} AND Descricao='Gero Conexão e Humanizo a Relação'`)
    const [paixao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao2.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${conexao.CodigoItemIndicador}, 'Acolhimento e Saudação ', 'Acolher o cliente de forma encantadora e personalizada desde o 1º contato, sem se limitar a frases prontas.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${conexao.CodigoItemIndicador}, 'Sensibilidade e Reações Humanas', 'Demonstre sensibilidade e reações humanas durante todo seu atendimento. Para isso, utilize tom de voz amigável e entusiasmo, na voz e na escrita.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${paixao.CodigoItemIndicador}, 'Surpresa Positiva', 'Mencionar algum detalhe da conversa/atendimento, demonstrando que prestou atenção ao que o cliente falou, e/ou agir com proatividade, gerando surpresa positiva no cliente.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${paixao.CodigoItemIndicador}, 'Finalização de Contato', 'Agradecer o tempo/contato e declarar disponibilidade da CSF junto a franquia', 77)`)

    //* ********************************* */
    const [resolutividadeSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Satisfação\'')

    const [interesse] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividadeSatisfacao.CodigoIndicador} AND Descricao='Meu Interesse Verdadeiro Transmite Confiança'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${interesse.CodigoItemIndicador}, 'Perguntas e Entendimento', 'Fazer perguntas abertas e pertinentes, que te ajudam a entender o problema.', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${interesse.CodigoItemIndicador}, 'Atenção e Escuta Ativa', 'Volte sua atenção ao diálogo, mantendo uma conversa eficiente. Não faça o cliente repetir informações desnecessariamente, e não deixe de responder alguma pergunta ou solicitação feita durante o atendimento.', 77)`)

    //* ********************************* */
    const [resolutividadeContact] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Contact Rate / Satisfação\'')

    const [interesseId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividadeContact.CodigoIndicador} AND Descricao='Meu Interesse Verdadeiro Transmite Confiança'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${interesseId2.CodigoItemIndicador}, 'Orientação e Explicação', 'Após identificar e analisar o problema, explique com detalhes e exemplos, priorizando o porquê (motivos) das coisas', 77)`)

    //* ********************************* */
    const [fcr] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR\'')

    const [paixaoId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcr.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${paixaoId2.CodigoItemIndicador}, 'Desejo de Solucionar', 'Demonstre seu desejo de solucionar e ajudar o cliente, mesmo diante de obstáculos.', 77)`)

    //* ********************************* */
    const [resolutividade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade\'')

    const [paixaoId3] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividade.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${paixaoId3.CodigoItemIndicador}, 'Outras Solicitações (ao finalizar um tema)', 'Questione se possui algum outro assunto que você possa ajudar neste contato.', 77)`)

    //* ********************************* */
    const [tmaSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'TMA / Satisfação\'')

    const [respeito] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${tmaSatisfacao.CodigoIndicador} AND Descricao='Respeito o Tempo do Cliente'`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${respeito.CodigoItemIndicador}, 'Ausência / Visibilidade da Ação', 'Justifique a ausência para trazer clareza das ações que estamos realizando durante o atendimento e/ou indique quais passos seguirá para ajudá-lo. Para não se tornar repetitivo, faça combinados quanto ao tempo de retorno. (no caso de procedimentos mais detalhados/morosos)', 77)`)
    await queryRunner.query(`INSERT INTO SubItemIndicador (CodigoItemIndicador, Descricao, Resumo, Peso) VALUES (${respeito.CodigoItemIndicador}, 'Agilidade', 'Demonstrar agilidade ao buscar soluções para o cliente, utilizando os recursos da melhor maneira', 77)`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('SubItemIndicador')
  }
}
