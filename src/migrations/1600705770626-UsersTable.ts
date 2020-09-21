import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersTable1600705770626 implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
          new Table({
              name: 'users',
              columns: [
                  {
                      name: 'id',
                      type: 'int4',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment',
                  },
                  {
                      name: 'username',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'password',
                      type: 'varchar',
                      isNullable: false,
                  },
              ],
          }),
          false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }
}
