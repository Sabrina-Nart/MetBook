import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAutorLivroRelation1717460922198 implements MigrationInterface {
    name = 'CreateAutorLivroRelation1717460922198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "livros_autores_autores" ("livrosId" uuid NOT NULL, "autoresId" uuid NOT NULL, CONSTRAINT "PK_2c09c3ef88e970d0d0e86c6350a" PRIMARY KEY ("livrosId", "autoresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_66d23ffdf15ccf612da9f05983" ON "livros_autores_autores" ("livrosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ada9f67ba653b1094ae765ac0b" ON "livros_autores_autores" ("autoresId") `);
        await queryRunner.query(`ALTER TABLE "livros_autores_autores" ADD CONSTRAINT "FK_66d23ffdf15ccf612da9f059833" FOREIGN KEY ("livrosId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livros_autores_autores" ADD CONSTRAINT "FK_ada9f67ba653b1094ae765ac0b5" FOREIGN KEY ("autoresId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros_autores_autores" DROP CONSTRAINT "FK_ada9f67ba653b1094ae765ac0b5"`);
        await queryRunner.query(`ALTER TABLE "livros_autores_autores" DROP CONSTRAINT "FK_66d23ffdf15ccf612da9f059833"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ada9f67ba653b1094ae765ac0b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_66d23ffdf15ccf612da9f05983"`);
        await queryRunner.query(`DROP TABLE "livros_autores_autores"`);
    }

}
