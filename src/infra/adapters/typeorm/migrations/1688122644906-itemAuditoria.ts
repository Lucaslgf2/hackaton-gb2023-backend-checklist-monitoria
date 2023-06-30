/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ItemAuditoria_1688122644906 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ItemAuditoria',
      columns: [
        {
          name: 'CodigoItemAuditoria',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoAuditoria',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'CodigoItemIndicador',
          type: 'integer',
          isPrimary: true
        }
      ],
      foreignKeys: [
        {
          name: 'FK_ItemAuditoria_Auditoria_CodigoAuditoria',
          columnNames: ['CodigoAuditoria'],
          referencedColumnNames: ['CodigoAuditoria'],
          referencedTableName: 'Auditoria'
        },
        {
          name: 'FK_ItemAuditoria_ItemIndicador_CodigoItemIndicador',
          columnNames: ['CodigoItemIndicador'],
          referencedColumnNames: ['CodigoItemIndicador'],
          referencedTableName: 'ItemIndicador'
        }
      ]
    }), true)

    //* ********************************* */
    const [assertividade] = await queryRunner.query('SELECT CodigoAuditoria FROM Auditoria WHERE Descricao=\'Assertividade\'')
    const [aproximacao] = await queryRunner.query('SELECT CodigoAuditoria FROM Auditoria WHERE Descricao=\'Aproximação\'')

    //* ********************************* */
    const [satisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')

    const [prontidao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Prontidão'`)
    const [manutencaoDialogo] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Manutenção do Diálogo'`)
    const [linguagem] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Linguagem'`)
    const [procedimentosSistemas] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao.CodigoIndicador} AND Descricao='Procedimentos e Sistemas'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${prontidao.CodigoItemIndicador})`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${manutencaoDialogo.CodigoItemIndicador})`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${linguagem.CodigoItemIndicador})`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${procedimentosSistemas.CodigoItemIndicador})`)

    //* ********************************* */
    const [fcrTma] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR, TMA, Contact Rate, Transferência e Improcedência\'')

    const [dominioTecnico] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcrTma.CodigoIndicador} AND Descricao='Domínio Técnico'`)
    const [procedimentosSistemasId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcrTma.CodigoIndicador} AND Descricao='Procedimentos e Sistemas'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${dominioTecnico.CodigoItemIndicador})`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${procedimentosSistemasId2.CodigoItemIndicador})`)

    //* ********************************* */
    const [improcedencia] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Improcedência\'')

    const [registroCategorizacao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${improcedencia.CodigoIndicador} AND Descricao='Registro e Categorização'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${assertividade.CodigoAuditoria}, ${registroCategorizacao.CodigoItemIndicador})`)

    //* ********************************* */
    const [qualidade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Qualidade\'')

    const [registroCategorizacaoId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${qualidade.CodigoIndicador} AND Descricao='Registro e Categorização'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${registroCategorizacaoId2.CodigoItemIndicador})`)

    //* ********************************* */
    const [satisfacao2] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')

    const [conexao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao2.CodigoIndicador} AND Descricao='Gero Conexão e Humanizo a Relação'`)
    const [paixao] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${satisfacao2.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${conexao.CodigoItemIndicador})`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${paixao.CodigoItemIndicador})`)

    //* ********************************* */
    const [resolutividadeSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Satisfação\'')

    const [interesse] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividadeSatisfacao.CodigoIndicador} AND Descricao='Meu Interesse Verdadeiro Transmite Confiança'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${interesse.CodigoItemIndicador})`)

    //* ********************************* */
    const [resolutividadeContact] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Contact Rate / Satisfação\'')

    const [interesseId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividadeContact.CodigoIndicador} AND Descricao='Meu Interesse Verdadeiro Transmite Confiança'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${interesseId2.CodigoItemIndicador})`)

    //* ********************************* */
    const [fcr] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR\'')

    const [paixaoId2] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${fcr.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${paixaoId2.CodigoItemIndicador})`)

    //* ********************************* */
    const [resolutividade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade\'')

    const [paixaoId3] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${resolutividade.CodigoIndicador} AND Descricao='Tenho Paixão por Resolver o Problema e Encantar o Cliente'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${paixaoId3.CodigoItemIndicador})`)

    //* ********************************* */
    const [tmaSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'TMA / Satisfação\'')

    const [respeito] = await queryRunner.query(`SELECT CodigoItemIndicador FROM ItemIndicador WHERE CodigoIndicador=${tmaSatisfacao.CodigoIndicador} AND Descricao='Respeito o Tempo do Cliente'`)
    await queryRunner.query(`INSERT INTO ItemAuditoria (CodigoAuditoria, CodigoItemIndicador) VALUES (${aproximacao.CodigoAuditoria}, ${respeito.CodigoItemIndicador})`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ItemAuditoria')
  }
}
