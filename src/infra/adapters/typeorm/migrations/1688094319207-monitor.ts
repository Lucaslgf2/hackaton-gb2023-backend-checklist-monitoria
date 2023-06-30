import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Monitor_1688094319207 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Monitor',
      columns: [
        {
          name: 'CodigoMonitor',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'Nome',
          type: 'varchar'
        },
        {
          name: 'VS',
          type: 'varchar'
        }
      ]
    }), true)

    //* ********************************* */
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Marta Vieira da Silva\', \'CAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Formiga\', \'CRC - MONO\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Cristiane Rozeira\', \'CRC - MULTI\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Andressa Alves\', \'CSF\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Bárbara Micheline do Monte Barbosa\', \'QUALIDADE\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Tamires Cássia Dias Gomes\', \'QUALITY\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Érika Cristiano dos Santos\', \'ALGAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Thaisa Moreno de Souza\', \'ALKES\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Poliana Barbosa Medeiros\', \'REPUT\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Rafaelle Leone Carvalho Souza\', \'CAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Ludmila da Silva\', \'CRC - MONO\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Debinha\', \'CRC - MULTI\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Adriana Leal da Silva\', \'CSF\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Geyse Ferreira da Silva\', \'QUALIDADE\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Aline Milene Pellegrino\', \'QUALITY\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Fernanda Garay\', \'ALGAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Thaisa Menezes\', \'ALKES\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Sheilla Castro\', \'REPUT\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Fabiana Claudino\', \'CAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Jaqueline Carvalho\', \'CRC - MONO\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Carol Gattaz\', \'CRC - MULTI\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Gabi Guimarães\', \'CSF\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Natália Pereira\', \'QUALIDADE\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Dani Lins\', \'QUALITY\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Tandara Caixeta\', \'ALGAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Adenízia Ferreira\', \'ALKES\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Mari Paraíba\', \'REPUT\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Rosamaria Montibeller\', \'CAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Ana Cristina Souza\', \'CRC - MONO\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Mayany Souza\', \'CRC - MULTI\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Anderson Daroco\', \'CSF\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Galvão Bueno\', \'QUALIDADE\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Cleber Machado\', \'QUALITY\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Luís Roberto\', \'ALGAR\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Milton Leite\', \'ALKES\')')
    await queryRunner.query('INSERT INTO Monitor (Nome, VS) VALUES (\'Gustavo Villani\', \'REPUT\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Monitor')
  }
}
