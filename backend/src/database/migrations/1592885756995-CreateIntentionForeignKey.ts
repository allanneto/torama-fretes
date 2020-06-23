import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateIntentionForeignKey1592885756995
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('intentions', 'client');

    await queryRunner.addColumn(
      'intentions',
      new TableColumn({
        name: 'client_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'intentions',
      new TableForeignKey({
        name: 'IntentionForeignKey',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('intentions', 'IntentionForeignKey');

    await queryRunner.dropColumn('intentions', 'client_id');

    await queryRunner.addColumn(
      'intentions',
      new TableColumn({
        name: 'client',
        type: 'varchar',
      })
    );
  }
}
