import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Indicador_1688083529046 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Indicador',
      columns: [
        {
          name: 'CodigoIndicador',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'Descricao',
          type: 'varchar'
        }
      ]
    }), true)

    //* ********************************* */
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'Satisfação\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'FCR, TMA, Contact Rate, Transferência e Improcedência\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'Improcedência\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'Qualidade\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'Resolutividade / Satisfação\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'Resolutividade / Contact Rate / Satisfação\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'FCR\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'Resolutividade\')')
    await queryRunner.query('INSERT INTO Indicador (Descricao) VALUES (\'TMA / Satisfação\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Indicador')
  }
}
