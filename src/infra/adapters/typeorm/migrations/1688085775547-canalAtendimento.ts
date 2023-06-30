import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CanalAtendimento_1688085775547 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'CanalAtendimento',
      columns: [
        {
          name: 'SiglaCanal',
          type: 'char',
          length: '1',
          isPrimary: true
        },
        {
          name: 'Descricao',
          type: 'varchar'
        }
      ]
    }), true)

    //* ********************************* */
    await queryRunner.query('INSERT INTO CanalAtendimento (SiglaCanal, Descricao) VALUES (\'C\', \'Chat\')')
    await queryRunner.query('INSERT INTO CanalAtendimento (SiglaCanal, Descricao) VALUES (\'V\', \'Voz\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('CanalAtendimento')
  }
}
