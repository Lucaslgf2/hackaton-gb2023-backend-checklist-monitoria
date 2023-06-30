import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Motivo_Submotivo_Assunto_1688096123706 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'MotivoContato',
      columns: [
        {
          name: 'CodigoMotivoContato',
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

    await queryRunner.createTable(new Table({
      name: 'SubMotivoContato',
      columns: [
        {
          name: 'CodigoSubMotivoContato',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoMotivoContato',
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
          name: 'FK_SubMotivoContato_MotivoContato_CodigoMotivoContato',
          columnNames: ['CodigoMotivoContato'],
          referencedColumnNames: ['CodigoMotivoContato'],
          referencedTableName: 'MotivoContato'
        }
      ]
    }), true)

    await queryRunner.createTable(new Table({
      name: 'AssuntoContato',
      columns: [
        {
          name: 'CodigoAssuntoContato',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoSubMotivoContato',
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
          name: 'FK_AssuntoContato_SubMotivoContato_CodigoSubMotivoContato',
          columnNames: ['CodigoSubMotivoContato'],
          referencedColumnNames: ['CodigoSubMotivoContato'],
          referencedTableName: 'SubMotivoContato'
        }
      ]
    }), true)

    //* ********************************* */
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Venda\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Logística Omnichannel\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Promoção\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Acesso ao Planograma\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Sprinklr\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Planograma\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Institucional\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Atendimento\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Vitrinismo/Ambientação\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Software\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Software Omnichannel\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Arquitetura e SGPC\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Jurídico\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Material de Ciclo\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Financeiro\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Aspectos Comerciais\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Hardware\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Field Service\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'LGPD\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Seguro Empresarial\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Orientações de Montagem Loja\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Embalagem\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Uniforme\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Auditoriade Lojas\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Fachada Secundária e Tapume\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Regras de Negócios QDB\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Regras de Negócios\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Documentação\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Incentivos\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Logística Transportadora\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Abastecimento\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Serviços\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Agendamento de Make\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Produtos\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Recebimento e Problemas no Enxoval VM\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Clube Viva\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Precificador\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Campanhas & Promoções\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Infraestrutura de Tecnologia\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Compra\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Estoque\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Cadastros\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Gestão de Resultados\')')
    await queryRunner.query('INSERT INTO MotivoContato (Descricao) VALUES (\'Ambientação\')')

    //* ********************************* */
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Iniciar ou Atualizar Sistemas e Dispositivos\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Abrir e Fechar o Caixa\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Aplicar Desconto ou Promoção\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Cadastrar, Consultar e Pontuar Fidelidade\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Cancelar uma Venda\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Carregar ou Consultar Cartão Presente\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Consultar Relatórios\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Criar, Editar e Resgatar Pré-Venda\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Emitir ou Reemitir Cupom\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Emitir Vale-Troca\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Identificar Cliente e Vendedor\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Incluir Produtos\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Realizar Pagamento\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (1, \'Resgatar Pedido Omni\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Retire em Loja\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Prazo de entrega\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Intelipost\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Abrangência\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (3, \'Agendamento de serviços\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (3, \'Ação Regional\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (3, \'Ação de Fluxo QDB\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (3, \'Ação de Fluxo\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (4, \'Acesso\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (5, \'Plataforma\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (5, \'Funcionalidade\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (5, \'Conteúdos e Publicações\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (5, \'Acesso\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (6, \'Montagem\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (6, \'Acesso\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (7, \'Reciclagem\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (7, \'Pesquisa\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (7, \'IAF\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (7, \'Eventos Comerciais\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (7, \'Convenção Franqueado\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Validação Atendimento\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Queda - Ligação\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Queda - Conexão\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Parcerias\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Multimarcas: VD do futuro\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Ligação - Transferência\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Chat - Transferência\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (8, \'Duvidas sobre OUI\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (9, \'Ambientação\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'APP\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'E-Sitef\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'E-Sitef/Gera\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Gera\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Gera Eudora\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Google governança\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Internet\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Linx\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Mobshop\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Nova extranet\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'PDV Clisitef\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Nova extranet\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Portais\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Portal\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Precificador Zebra\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'TEF\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Totvs\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (10, \'Windows\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (11, \'Retire em Loja\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (11, \'Entrega pela VD\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Abrangência\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Intelipost\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Prazo de entrega\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (2, \'Retire em Loja\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (12, \'SGPC\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (12, \'Arquitetura\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (13, \'Judicial\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (13, \'Assessoria\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (13, \'Procon\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (14, \'Bíblia de Preços\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (14, \'Guia do Ciclo Digital\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (14, \'Guia do Ciclo Digital QDB\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (14, \'Materiais Revendedor\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (14, \'Tabela BSO\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (15, \'Boleto\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (15, \'Gerenciar Contas a Pagar\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (15, \'Gerenciar Fluxo de Caixa\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (15, \'Nota de Débito\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (15, \'Nota Fiscal\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (15, \'Plano de Midia Regional\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (16, \'Características\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (16, \'Código/Composição\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (16, \'Queixa Técnica\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (17, \'Computador\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (17, \'Equipamentos / Conectividade\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (17, \'Equipamentos / Rede\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (17, \'Infraestrutura Tecnológica\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (17, \'Rádio\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Computador\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Equipamentos / Conectividade\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Equipamentos / Fiscais\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Equipamentos / Impressora\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Equipamentos / PDV\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Equipamentos / Som\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Equipamentos / Telefonia\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (18, \'Falha Linha Móvel\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (19, \'Contato sobre LGPD\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (20, \'Contrato\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (21, \'Guia de Ambientação\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (21, \'Empilhamento embalagens e kits\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (21, \'Display\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (22, \'Dúvidas/Problemas\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (23, \'Fornecedor\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (23, \'Dúvidas/Problemas\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (24, \'Dúvidas/Problemas\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (25, \'Dúvidas sobre impressão e aplicação\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (26, \'Regras de Negócios\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (27, \'Entrega pela VD\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (27, \'Insumos\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (27, \'Retire em Loja\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (28, \'Órgãos Fiscalizadores\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (29, \'Inscrição\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (29, \'Portal\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (29, \'Premiação\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (29, \'Regulamento\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (29, \'Resultado\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (29, \'TÔ QUE TÔ\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (30, \'Intelipost\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (31, \'Irregularidade\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (31, \'Portal de Devolução\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (31, \'Transportadora\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (32, \'Maquiagem completa\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (33, \'Minha rotina Botik\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (34, \'Marcas do Coração\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (35, \'Peças do Ciclo ou Permanentes\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (35, \'Recebimento do enxoval (antilhas)\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (36, \'Pontuação/Bloqueio\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (37, \'Preço\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (38, \'Promoções Exclusivas (CRM)\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Coletores de Inventário\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Computador\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Conectividade de Rede\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Impressora Precificador\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Impressoras Convencionais\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Rádio\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Sistema Operacional\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (39, \'Softwares homologados\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (40, \'Avaliar Sugestão de Compra\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (40, \'Consultar ou acompanhar pedido\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (40, \'Consultar ou Cancelar Pendências\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (40, \'Criar, alterar ou cancelar Pedido\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (40, \'Enviar Pedido para Indústria\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (40, \'Rastrear Pedido\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (41, \'Configurar Estoque Negativo e Estoque Mínimo\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (41, \'Consultar Histórico de Movimentação\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (41, \'Consultar Posição de Estoque\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (41, \'Efetuar Devolução\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (41, \'Realizar e Consultar Inventário\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (42, \'Gerenciar Cadastro de Funcionário\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (42, \'Realizar e Consultar Inventário\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar Boti Expert\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar BSO\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar Clube Viva\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar Dash Comercial\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar IAF\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar Plataforma de Gestão Integrada\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (43, \'Gerenciar Plataforma do Franqueado\')')
    await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (44, \'Gerenciar Ruptura\')')
    // await queryRunner.query('INSERT INTO SubMotivoContato (CodigoMotivoContato, Descricao) VALUES (45, \'Precificador\')')

    //* ********************************* */
    // await queryRunner.query('INSERT INTO AssuntoContato (CodigoSubMotivoContato, Descricao) VALUES (0, \'XXXX\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('AssuntoContato')
    await queryRunner.dropTable('SubMotivoContato')
    await queryRunner.dropTable('MotivoContato')
  }
}
