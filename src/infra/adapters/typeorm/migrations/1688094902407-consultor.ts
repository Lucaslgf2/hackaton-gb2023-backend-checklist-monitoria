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
        },
        {
          name: 'NumeroAvaya',
          type: 'varchar'
        }
      ]
    }), true)

    //* ********************************* */
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Ana Paula Padrão\', \'anapaulapadrao@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Adriana Calcanhotto\', 60003)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Carolina de Jesus\', \'carolinadejesus@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Beth Carvalho\', 60010)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Clarice Lispector\', \'claricelispector@botihackathon.com\', \'Veterano\', \'CSF\', \'VD\', \'Chiquinha Gonzaga\', 60015)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Dandara dos Palmares\', \'dandaradospalmares@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Conceição Evaristo\', 60026)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Elza Soares\', \'elzasoares@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Sueli Carneiro\', 60033)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Fernanda Montenegro\', \'fernandamontenegro@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Adriana Calcanhotto\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Gisele Bündchen\', \'giselebndchen@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Beth Carvalho\', 60090)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Hebe Camargo\', \'hebecamargo@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Chiquinha Gonzaga\', 60101)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Ivete Sangalo\', \'ivetesangalo@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Conceição Evaristo\', 60110)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Nazare Tedesco\', \'nazaretedesco@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Sueli Carneiro\', 60112)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Joana D Arc\', \'joanadarc@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Adriana Calcanhotto\', 60115)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Leila Diniz\', \'leiladiniz@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Beth Carvalho\', 60116)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Lilia Cabral\', \'liliacabral@botihackathon.com\', \'Junior\', \'NEWCO\', \'VD\', \'Chiquinha Gonzaga\', 60117)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Luiza Brunet\', \'luizabrunet@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Conceição Evaristo\', 60118)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Maria da Penha\', \'mariadapenha@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Sueli Carneiro\', 60119)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Maria Gadú\', \'mariagadú@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Adriana Calcanhotto\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Marília Mendonça\', \'maríliamendonça@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Beth Carvalho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Marta Suplicy\', \'martasuplicy@botihackathon.com\', \'Veterano\', \'CSF\', \'VD\', \'Chiquinha Gonzaga\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Nísia Floresta\', \'nísiafloresta@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Conceição Evaristo\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Alessandra Negrini\', \'alessandranegrini@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Sueli Carneiro\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Patrícia Galvão\', \'patríciagalvão@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Adriana Calcanhotto\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rachel de Queiroz\', \'racheldequeiroz@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Beth Carvalho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Regina Casé\', \'reginacasé@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Chiquinha Gonzaga\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rita Lee\', \'ritalee@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Conceição Evaristo\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Ruth de Souza\', \'ruthdesouza@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Sueli Carneiro\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Tarsila do Amaral\', \'tarsiladoamaral@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Adriana Calcanhotto\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Tati Quebra-Barraco\', \'tatiquebra_barraco@botihackathon.com\', \'Veterano\', \'CSF\', \'OMNI E PORTAIS\', \'Beth Carvalho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Tereza de Benguela\', \'terezadebenguela@botihackathon.com\', \'Junior\', \'NEWCO\', \'VD\', \'Chiquinha Gonzaga\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Zélia Duncan\', \'zeliaduncan@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Conceição Evaristo\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Zuzu Angel\', \'zuzuangel@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Sueli Carneiro\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Edmundo\', \'edmundo@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Abel Ferreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Antônio Carlos Zago\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Paulo Nunes\', \'paulonunes@botihackathon.com\', \'Veterano\', \'CSF\', \'VD\', \'Cuca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Evair\', \'evair@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Dorival Júnior\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Marcos\', \'marcos@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Eduardo Barroca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Valdivia\', \'valdivia@botihackathon.com\', \'Veterano\', \'CSF\', \'TECNOLOGIA\', \'Enderson Moreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Deyverson\', \'deyverson@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Fábio Carille\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rivaldo\', \'rivaldo@botihackathon.com\', \'Calouro\', \'CAR\', \'VD\', \'Fernando Diniz\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Luizão\', \'luizão@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Guto Ferreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Vágner Love\', \'vágnerlove@botihackathon.com\', \'Calouro\', \'NEWCO\', \'TECNOLOGIA\', \'Jair Ventura\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Edmundo\', \'edmundo@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Jorge Sampaoli\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Jorginho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Paulo Nunes\', \'paulonunes@botihackathon.com\', \'Veterano\', \'NEWCO\', \'VD\', \'Lisca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Evair\', \'evair@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Mano Menezes\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Marcos\', \'marcos@botihackathon.com\', \'Calouro\', \'CSF\', \'TECNOLOGIA\', \'Marcelo Cabo\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Valdivia\', \'valdivia@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Ney Franco\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Deyverson\', \'deyverson@botihackathon.com\', \'Calouro\', \'CAR\', \'OMNI E PORTAIS\', \'Renato Gaúcho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rivaldo\', \'rivaldo@botihackathon.com\', \'Junior\', \'CSF\', \'VD\', \'Rogério Ceni\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Luizão\', \'luizão@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Tite\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Vágner Love\', \'vágnerlove@botihackathon.com\', \'Veterano\', \'CAR\', \'TECNOLOGIA\', \'Vagner Mancini\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Edmundo\', \'edmundo@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Abel Ferreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Calouro\', \'CAR\', \'OMNI E PORTAIS\', \'Antônio Carlos Zago\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Paulo Nunes\', \'paulonunes@botihackathon.com\', \'Junior\', \'CSF\', \'VD\', \'Cuca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Evair\', \'evair@botihackathon.com\', \'Calouro\', \'NEWCO\', \'OMNI E PORTAIS\', \'Dorival Júnior\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Marcos\', \'marcos@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Eduardo Barroca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Luís Fabiano\', \'luísfabiano@botihackathon.com\', \'Junior\', \'CSF\', \'TECNOLOGIA\', \'Enderson Moreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rogério Ceni\', \'rogérioceni@botihackathon.com\', \'Veterano\', \'NEWCO\', \'OMNI E PORTAIS\', \'Fábio Carille\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Kaká\', \'kaká@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Fernando Diniz\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Raí\', \'raí@botihackathon.com\', \'Calouro\', \'CSF\', \'OMNI E PORTAIS\', \'Guto Ferreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Amoroso\', \'amoroso@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Jair Ventura\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Zé Roberto\', \'zéroberto@botihackathon.com\', \'Calouro\', \'CAR\', \'TECNOLOGIA\', \'Jorge Sampaoli\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Cafu\', \'cafu@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Jorginho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Cicinho\', \'cicinho@botihackathon.com\', \'Junior\', \'NEWCO\', \'VD\', \'Lisca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Grafite\', \'grafite@botihackathon.com\', \'Veterano\', \'CAR\', \'OMNI E PORTAIS\', \'Mano Menezes\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Mineiro\', \'mineiro@botihackathon.com\', \'Junior\', \'CSF\', \'TECNOLOGIA\', \'Marcelo Cabo\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Luís Fabiano\', \'luísfabiano@botihackathon.com\', \'Calouro\', \'NEWCO\', \'TECNOLOGIA\', \'Ney Franco\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rogério Ceni\', \'rogérioceni@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Renato Gaúcho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Kaká\', \'kaká@botihackathon.com\', \'Calouro\', \'CSF\', \'VD\', \'Rogério Ceni\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Raí\', \'raí@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Tite\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Amoroso\', \'amoroso@botihackathon.com\', \'Junior\', \'CAR\', \'TECNOLOGIA\', \'Vagner Mancini\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Zé Roberto\', \'zéroberto@botihackathon.com\', \'Veterano\', \'NEWCO\', \'TECNOLOGIA\', \'Abel Ferreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Cafu\', \'cafu@botihackathon.com\', \'Junior\', \'CAR\', \'OMNI E PORTAIS\', \'Antônio Carlos Zago\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Cicinho\', \'cicinho@botihackathon.com\', \'Calouro\', \'CSF\', \'VD\', \'Cuca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Grafite\', \'grafite@botihackathon.com\', \'Junior\', \'NEWCO\', \'OMNI E PORTAIS\', \'Dorival Júnior\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Mineiro\', \'mineiro@botihackathon.com\', \'Calouro\', \'CAR\', \'TECNOLOGIA\', \'Eduardo Barroca\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Luís Fabiano\', \'luísfabiano@botihackathon.com\', \'Junior\', \'CSF\', \'TECNOLOGIA\', \'Enderson Moreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Rogério Ceni\', \'rogérioceni@botihackathon.com\', \'Calouro\', \'NEWCO\', \'OMNI E PORTAIS\', \'Fábio Carille\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Kaká\', \'kaká@botihackathon.com\', \'Junior\', \'CAR\', \'VD\', \'Fernando Diniz\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Raí\', \'raí@botihackathon.com\', \'Calouro\', \'CSF\', \'OMNI E PORTAIS\', \'Guto Ferreira\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Alex Mineiro\', \'alexmineiro@botihackathon.com\', \'Junior\', \'NEWCO\', \'TECNOLOGIA\', \'Jair Ventura\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Diego Tardelli\', \'diegotardelli@botihackathon.com\', \'Calouro\', \'CAR\', \'TECNOLOGIA\', \'Jorge Sampaoli\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Guilherme\', \'guilherme@botihackathon.com\', \'Junior\', \'CSF\', \'OMNI E PORTAIS\', \'Jorginho\', 60052)')
    await queryRunner.query('INSERT INTO Consultor (Nome, Email, TempoCasa, VS, CelulaAtendimento, Supervisor, NumeroAvaya) VALUES (\'Diego Souza\', \'diegosouza@botihackathon.com\', \'Calouro\', \'NEWCO\', \'VD\', \'Lisca\', 60052)')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Consultor')
  }
}
