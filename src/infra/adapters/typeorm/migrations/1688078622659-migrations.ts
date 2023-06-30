import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Migrations1688078622659 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'TableTeste2',
      columns: [
        {
          name: 'CodigoTableTeste',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('TableTeste2')
  }
}
