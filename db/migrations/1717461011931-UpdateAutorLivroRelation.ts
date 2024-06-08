import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAutorLivroRelation1717461011931 implements MigrationInterface {
    name = 'UpdateAutorLivroRelation1717461011931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "livros_autores" ("livrosId" uuid NOT NULL, "autoresId" uuid NOT NULL, CONSTRAINT "PK_c89422e01b8e068bbff51882593" PRIMARY KEY ("livrosId", "autoresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_708835ef29229009430795bc62" ON "livros_autores" ("livrosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_534153feb8d0c28f8f1ed7d12e" ON "livros_autores" ("autoresId") `);
        await queryRunner.query(`ALTER TABLE "livros_autores" ADD CONSTRAINT "FK_708835ef29229009430795bc62e" FOREIGN KEY ("livrosId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livros_autores" ADD CONSTRAINT "FK_534153feb8d0c28f8f1ed7d12e2" FOREIGN KEY ("autoresId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros_autores" DROP CONSTRAINT "FK_534153feb8d0c28f8f1ed7d12e2"`);
        await queryRunner.query(`ALTER TABLE "livros_autores" DROP CONSTRAINT "FK_708835ef29229009430795bc62e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_534153feb8d0c28f8f1ed7d12e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_708835ef29229009430795bc62"`);
        await queryRunner.query(`DROP TABLE "livros_autores"`);
    }

}
