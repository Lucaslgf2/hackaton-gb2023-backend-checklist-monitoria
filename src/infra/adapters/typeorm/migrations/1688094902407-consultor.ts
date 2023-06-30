import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Consultor_1688094902407 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Consultor',
      columns: [
        {
          name: 'CodigoConsultor',
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
          name: 'Email',
          type: 'varchar'
        },
        {
          name: 'VS',
          type: 'varchar'
        },
        {
          name: 'TempoCasa',
          type: 'varchar'
        },
        {
          name: 'CelulaAtendimento',
          type: 'varchar'
        },
        {
          name: 'Supervisor',
          type: 'varchar'
        }
      ]
    }), true)

    //* ********************************* */
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Ana Paula Padrão\', \'anapaulapadrao@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Adriana Calcanhotto\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Carolina de Jesus\', \'carolinadejesus@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Beth Carvalho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Clarice Lispector\', \'claricelispector@botihackathon.com\', \'Veterano\', \'CSF\', \'VD\', \'Chiquinha Gonzaga\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Dandara dos Palmares\', \'dandaradospalmares@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Conceição Evaristo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Elza Soares\', \'elzasoares@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Sueli Carneiro\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Fernanda Montenegro\', \'fernandamontenegro@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Adriana Calcanhotto\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Gisele Bündchen\', \'giselebndchen@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Beth Carvalho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Hebe Camargo\', \'hebecamargo@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Chiquinha Gonzaga\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Ivete Sangalo\', \'ivetesangalo@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Conceição Evaristo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Nazare Tedesco\', \'nazaretedesco@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Sueli Carneiro\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Joana D Arc\', \'joanadarc@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Adriana Calcanhotto\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Leila Diniz\', \'leiladiniz@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Beth Carvalho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Lilia Cabral\', \'liliacabral@botihackathon.com\', \'Junior\', \'NEWCO\', \'VD\', \'Chiquinha Gonzaga\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Luiza Brunet\', \'luizabrunet@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Conceição Evaristo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Maria da Penha\', \'mariadapenha@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Sueli Carneiro\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Maria Gadú\', \'mariagadú@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Adriana Calcanhotto\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Marília Mendonça\', \'maríliamendonça@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Beth Carvalho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Marta Suplicy\', \'martasuplicy@botihackathon.com\', \'Veterano\', \'CSF\', \'VD\', \'Chiquinha Gonzaga\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Nísia Floresta\', \'nísiafloresta@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Conceição Evaristo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Alessandra Negrini\', \'alessandranegrini@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Sueli Carneiro\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Patrícia Galvão\', \'patríciagalvão@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Adriana Calcanhotto\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rachel de Queiroz\', \'racheldequeiroz@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Beth Carvalho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Regina Casé\', \'reginacasé@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Chiquinha Gonzaga\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rita Lee\', \'ritalee@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Conceição Evaristo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Ruth de Souza\', \'ruthdesouza@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Sueli Carneiro\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Tarsila do Amaral\', \'tarsiladoamaral@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Adriana Calcanhotto\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Tati Quebra-Barraco\', \'tatiquebra_barraco@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Beth Carvalho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Tereza de Benguela\', \'terezadebenguela@botihackathon.com\', \'Junior\', \'NEWCO\', \'VD\', \'Chiquinha Gonzaga\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Zélia Duncan\', \'zeliaduncan@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Conceição Evaristo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Zuzu Angel\', \'zuzuangel@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Sueli Carneiro\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Edmundo\', \'edmundo@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Abel Ferreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Antônio Carlos Zago\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Paulo Nunes\', \'paulonunes@botihackathon.com\', \'Veterano\', \'CSF\', \'VD\', \'Cuca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Evair\', \'evair@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Dorival Júnior\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Marcos\', \'marcos@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Eduardo Barroca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Valdivia\', \'valdivia@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Enderson Moreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Deyverson\', \'deyverson@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Fábio Carille\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rivaldo\', \'rivaldo@botihackathon.com\', \'Calouro\', \'CAR\', \'VD\', \'Fernando Diniz\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Luizão\', \'luizão@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Guto Ferreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Vágner Love\', \'vágnerlove@botihackathon.com\', \'Calouro\', \'NEWCO\', \'TECNOLOGIA\', \'Jair Ventura\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Edmundo\', \'edmundo@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Jorge Sampaoli\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Jorginho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Paulo Nunes\', \'paulonunes@botihackathon.com\', \'Veterano\', \'NEWCO\', \'VD\', \'Lisca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Evair\', \'evair@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Mano Menezes\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Marcos\', \'marcos@botihackathon.com\', \'Calouro\', \'CSF\', \'TECNOLOGIA\', \'Marcelo Cabo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Valdivia\', \'valdivia@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Ney Franco\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Deyverson\', \'deyverson@botihackathon.com\', \'Calouro\', \'CAR\', \'OMNI E PORTAIS\', \'Renato Gaúcho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rivaldo\', \'rivaldo@botihackathon.com\', \'Junior\', \'CSF\', \'VD\', \'Rogério Ceni\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Luizão\', \'luizão@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Tite\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Vágner Love\', \'vágnerlove@botihackathon.com\', \'Veterano\', \'CAR\', \'TECNOLOGIA\', \'Vagner Mancini\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Edmundo\', \'edmundo@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Abel Ferreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Calouro\', \'CAR\', \'OMNI E PORTAIS\', \'Antônio Carlos Zago\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Paulo Nunes\', \'paulonunes@botihackathon.com\', \'Junior\', \'CSF\', \'VD\', \'Cuca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Evair\', \'evair@botihackathon.com\', \'Calouro\', \'NEWCO\', \'OMNI E PORTAIS\', \'Dorival Júnior\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Marcos\', \'marcos@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Eduardo Barroca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Luís Fabiano\', \'luísfabiano@botihackathon.com\', \'Junior\', \'CSF\', \'TECNOLOGIA\', \'Enderson Moreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rogério Ceni\', \'rogérioceni@botihackathon.com\', \'Veterano\', \'NEWCO\', \'OMNI E PORTAIS\', \'Fábio Carille\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Kaká\', \'kaká@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Fernando Diniz\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Raí\', \'raí@botihackathon.com\', \'Calouro\', \'CSF\', \'OMNI E PORTAIS\', \'Guto Ferreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Amoroso\', \'amoroso@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Jair Ventura\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Zé Roberto\', \'zéroberto@botihackathon.com\', \'Calouro\', \'CAR\', \'TECNOLOGIA\', \'Jorge Sampaoli\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Cafu\', \'cafu@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Jorginho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Cicinho\', \'cicinho@botihackathon.com\', \'Junior\', \'NEWCO\', \'VD\', \'Lisca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Grafite\', \'grafite@botihackathon.com\', \'Veterano\', \'CAR\', \'OMNI E PORTAIS\', \'Mano Menezes\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Mineiro\', \'mineiro@botihackathon.com\', \'Junior\', \'CSF\', \'TECNOLOGIA\', \'Marcelo Cabo\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Luís Fabiano\', \'luísfabiano@botihackathon.com\', \'Calouro\', \'NEWCO\', \'TECNOLOGIA\', \'Ney Franco\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rogério Ceni\', \'rogérioceni@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Renato Gaúcho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Kaká\', \'kaká@botihackathon.com\', \'Calouro\', \'CSF\', \'VD\', \'Rogério Ceni\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Raí\', \'raí@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Tite\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Amoroso\', \'amoroso@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Vagner Mancini\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Zé Roberto\', \'zéroberto@botihackathon.com\', \'Veterano\', \'NEWCO\', \'TECNOLOGIA\', \'Abel Ferreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Cafu\', \'cafu@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Antônio Carlos Zago\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Cicinho\', \'cicinho@botihackathon.com\', \'Calouro\', \'CSF\', \'VD\', \'Cuca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Grafite\', \'grafite@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Dorival Júnior\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Mineiro\', \'mineiro@botihackathon.com\', \'Calouro\', \'CAR\', \'TECNOLOGIA\', \'Eduardo Barroca\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Luís Fabiano\', \'luísfabiano@botihackathon.com\', \'Junior\', \'CSF\', \'TECNOLOGIA\', \'Enderson Moreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Rogério Ceni\', \'rogérioceni@botihackathon.com\', \'Calouro\', \'NEWCO\', \'OMNI E PORTAIS\', \'Fábio Carille\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Kaká\', \'kaká@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Fernando Diniz\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Raí\', \'raí@botihackathon.com\', \'Calouro\', \'CSF\', \'OMNI E PORTAIS\', \'Guto Ferreira\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Jair Ventura\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Diego Tardelli\', \'diegotardelli@botihackathon.com\', \'Calouro\', \'CAR\', \'TECNOLOGIA\', \'Jorge Sampaoli\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Guilherme\', \'guilherme@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Jorginho\')')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, VS, TempoCasa, CelulaAtendimento, Supervisor) VALUES (\'Diego Souza\', \'diegosouza@botihackathon.com\', \'Calouro\', \'NEWCO\', \'VD\', \'Lisca\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Consultor')
  }
}
