import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddFreightIdColumn1593058563195 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'intentions',
      new TableColumn({
        name: 'freight_id',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('intentions', 'freight_id');
  }
}
