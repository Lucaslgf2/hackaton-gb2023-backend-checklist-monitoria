import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Auditoria_1688083529046 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Auditoria',
      columns: [
        {
          name: 'CodigoAuditoria',
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
    await queryRunner.query('INSERT INTO Auditoria (Descricao) VALUES (\'Assertividade\')')
    await queryRunner.query('INSERT INTO Auditoria (Descricao) VALUES (\'Aproximação\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Auditoria')
  }
}
