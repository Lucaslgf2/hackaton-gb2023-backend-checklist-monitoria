import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Monitoria_1688096123707 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Monitoria',
      columns: [
        {
          name: 'CodigoMonitoria',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoAuditoria',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'CodigoConsultor',
          type: 'integer'
        },
        {
          name: 'NumeroCaso',
          type: 'varchar'
        },
        {
          name: 'DataAtendimento',
          type: 'datetime'
        },
        {
          name: 'SiglaCanal',
          type: 'char'
        },
        {
          name: 'NumeroTranscricao',
          type: 'varchar'
        },
        {
          name: 'DuracaoLigacao',
          type: 'integer'
        },
        {
          name: 'IdAvaya',
          type: 'integer'
        },
        {
          name: 'CodigoMotivoContato',
          type: 'integer'
        },
        {
          name: 'CodigoSubMotivoContato',
          type: 'integer'
        },
        {
          name: 'CodigoAssuntoContato',
          type: 'integer'
        },
        {
          name: 'CodigoMonitor',
          type: 'integer'
        },
        {
          name: 'CodigoAmostragem',
          type: 'integer'
        },
        {
          name: 'DataCriacaoMonitoria',
          type: 'datetime'
        },
        {
          name: 'ComentarioGeral',
          type: 'varchar'
        }
      ],
      foreignKeys: [
        {
          name: 'FK_Monitoria_Auditoria_CodigoAuditoria',
          columnNames: ['CodigoAuditoria'],
          referencedColumnNames: ['CodigoAuditoria'],
          referencedTableName: 'Auditoria'
        },
        {
          name: 'FK_Monitoria_Consultor_CodigoConsultor',
          columnNames: ['CodigoConsultor'],
          referencedColumnNames: ['CodigoConsultor'],
          referencedTableName: 'Consultor'
        },
        {
          name: 'FK_Monitoria_CanalAtendimento_SiglaCanal',
          columnNames: ['SiglaCanal'],
          referencedColumnNames: ['SiglaCanal'],
          referencedTableName: 'CanalAtendimento'
        },
        // {
        //  name: 'FK_Monitoria_MotivoContato_CodigoMotivoContato',
        //  columnNames: ['CodigoMotivoContato'],
        //  referencedColumnNames: ['CodigoMotivoContato'],
        //  referencedTableName: 'MotivoContato'
        // },
        // {
        //  name: 'FK_Monitoria_SubMotivoContato_CodigoSubMotivoContato',
        //  columnNames: ['CodigoSubMotivoContato'],
        //  referencedColumnNames: ['CodigoSubMotivoContato'],
        //  referencedTableName: 'SubMotivoContato'
        // },
        // {
        //  name: 'FK_Monitoria_AssuntoContato_CodigoAssuntoContato',
        //  columnNames: ['CodigoAssuntoContato'],
        //  referencedColumnNames: ['CodigoAssuntoContato'],
        //  referencedTableName: 'AssuntoContato'
        // },
        {
          name: 'FK_Monitoria_Monitor_CodigoMonitor',
          columnNames: ['CodigoMonitor'],
          referencedColumnNames: ['CodigoMonitor'],
          referencedTableName: 'Monitor'
        },
        {
          name: 'FK_Monitoria_Amostragem_CodigoAmostragem',
          columnNames: ['CodigoAmostragem'],
          referencedColumnNames: ['CodigoAmostragem'],
          referencedTableName: 'Amostragem'
        }
      ]
    }), true)

    await queryRunner.createTable(new Table({
      name: 'ChecklistMonitoria',
      columns: [
        {
          name: 'CodigoChecklistMonitoria',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoAuditoria',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'CodigoMonitoria',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'CodigoSubItemIndicador',
          type: 'integer',
          isPrimary: true
        },
        {
          name: 'Nota',
          type: 'integer'
        },
        {
          name: 'Status',
          type: 'char'
        },
        {
          name: 'Comentario',
          type: 'integer',
          isNullable: true
        }
      ],
      foreignKeys: [
        {
          name: 'FK_ChecklistMonitoria_Auditoria_CodigoAuditoria',
          columnNames: ['CodigoAuditoria'],
          referencedColumnNames: ['CodigoAuditoria'],
          referencedTableName: 'Auditoria'
        },
        {
          name: 'FK_ChecklistMonitoria_Monitoria_CodigoMonitoria',
          columnNames: ['CodigoMonitoria'],
          referencedColumnNames: ['CodigoMonitoria'],
          referencedTableName: 'Monitoria'
        },
        {
          name: 'FK_ChecklistMonitoria_SubItemIndicador_CodigoSubItemIndicador',
          columnNames: ['CodigoSubItemIndicador'],
          referencedColumnNames: ['CodigoSubItemIndicador'],
          referencedTableName: 'SubItemIndicador'
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ChecklistMonitoria')
    await queryRunner.dropTable('Monitoria')
  }
}
