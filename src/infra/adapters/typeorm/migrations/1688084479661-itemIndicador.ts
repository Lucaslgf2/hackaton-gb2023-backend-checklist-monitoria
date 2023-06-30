/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ItemIndicador_1688084479661 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ItemIndicador',
      columns: [
        {
          name: 'CodigoItemIndicador',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoIndicador',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'Descricao',
          type: 'varchar'
        }
      ],
      foreignKeys: [
        {
          name: 'FK_ItemIndicador_Indicador_CodigoIndicador',
          columnNames: ['CodigoIndicador'],
          referencedColumnNames: ['CodigoIndicador'],
          referencedTableName: 'Indicador'
        }
      ]
    }), true)

    //* ********************************* */
    const [satisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${satisfacao.CodigoIndicador}, 'Prontidão')`)
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${satisfacao.CodigoIndicador}, 'Manutenção do Diálogo')`)
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${satisfacao.CodigoIndicador}, 'Linguagem')`)
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${satisfacao.CodigoIndicador}, 'Procedimentos e Sistemas')`)

    //* ********************************* */
    const [fcrTma] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR, TMA, Contact Rate, Transferência e Improcedência\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${fcrTma.CodigoIndicador}, 'Domínio Técnico')`)
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${fcrTma.CodigoIndicador}, 'Procedimentos e Sistemas')`)

    //* ********************************* */
    const [improcedencia] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Improcedência\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${improcedencia.CodigoIndicador}, 'Registro e Categorização')`)

    //* ********************************* */
    const [qualidade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Qualidade\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${qualidade.CodigoIndicador}, 'Registro e Categorização')`)

    //* ********************************* */
    const [satisfacao2] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Satisfação\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${satisfacao2.CodigoIndicador}, 'Gero Conexão e Humanizo a Relação')`)
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${satisfacao2.CodigoIndicador}, 'Tenho Paixão por Resolver o Problema e Encantar o Cliente')`)

    //* ********************************* */
    const [resolutividadeSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Satisfação\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${resolutividadeSatisfacao.CodigoIndicador}, 'Meu Interesse Verdadeiro Transmite Confiança')`)

    //* ********************************* */
    const [resolutividadeContact] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade / Contact Rate / Satisfação\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${resolutividadeContact.CodigoIndicador}, 'Meu Interesse Verdadeiro Transmite Confiança')`)

    //* ********************************* */
    const [fcr] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'FCR\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${fcr.CodigoIndicador}, 'Tenho Paixão por Resolver o Problema e Encantar o Cliente')`)

    //* ********************************* */
    const [resolutividade] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'Resolutividade\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${resolutividade.CodigoIndicador}, 'Tenho Paixão por Resolver o Problema e Encantar o Cliente')`)

    //* ********************************* */
    const [tmaSatisfacao] = await queryRunner.query('SELECT CodigoIndicador FROM Indicador WHERE Descricao=\'TMA / Satisfação\'')
    await queryRunner.query(`INSERT INTO ItemIndicador (CodigoIndicador, Descricao) VALUES (${tmaSatisfacao.CodigoIndicador}, 'Respeito o Tempo do Cliente')`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ItemIndicador')
  }
}
