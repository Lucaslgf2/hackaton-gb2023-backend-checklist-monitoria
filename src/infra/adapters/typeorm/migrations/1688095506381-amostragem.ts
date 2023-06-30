import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Amostragem_1688095506381 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Amostragem',
      columns: [
        {
          name: 'CodigoAmostragem',
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
    await queryRunner.query('INSERT INTO Amostragem (Descricao) VALUES (\'Aleatória\')')
    await queryRunner.query('INSERT INTO Amostragem (Descricao) VALUES (\'Domínio Técnico\')')
    await queryRunner.query('INSERT INTO Amostragem (Descricao) VALUES (\'FCR\')')
    await queryRunner.query('INSERT INTO Amostragem (Descricao) VALUES (\'Registro de Caso\')')
    await queryRunner.query('INSERT INTO Amostragem (Descricao) VALUES (\'Reincidência\')')
    await queryRunner.query('INSERT INTO Amostragem (Descricao) VALUES (\'Satisfação\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Amostragem')
  }
}
