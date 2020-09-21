import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PostsTable1600706557881 implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
          new Table({
              name: 'posts',
              columns: [
                  {
                      name: 'id',
                      type: 'int4',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment',
                  },
                  {
                      name: 'text',
                      type: 'varchar',
                      isNullable: false,
                  },
              ]

          }),
          false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE posts`);
    }

}
