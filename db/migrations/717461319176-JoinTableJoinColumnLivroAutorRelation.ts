/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class JoinTableJoinColumnAutorLivroRelation1717461319176 implements MigrationInterface {
    name = 'JoinTableJoinColumnAutorLivroRelation1717461319176';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_534153feb8d0c28f8f1ed7d12e2"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_708835ef29229009430795bc62e"`);
        await queryRunner.query(`DROP INDEX "IDX_534153feb8d0c28f8f1ed7d12e"`);
        await queryRunner.query(`DROP INDEX "IDX_708835ef29229009430795bc62"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "PK_c89422e01b8e068bbff51882593"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "PK_708835ef29229009430795bc62e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "autoresId"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "PK_708835ef29229009430795bc62e"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "livrosId"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "livro_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "PK_36909f498c32dd46379a60087b5" PRIMARY KEY ("livro_id")`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "autor_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "PK_36909f498c32dd46379a60087b5"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "PK_e2b9cac9018697fd28093e3b547" PRIMARY KEY ("livro_id", "autor_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_36909f498c32dd46379a60087b" ON "livros" ("livro_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8e7723714b350fe426375e8c22" ON "livros" ("autor_id") `);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_36909f498c32dd46379a60087b5" FOREIGN KEY ("livro_id") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_8e7723714b350fe426375e8c221" FOREIGN KEY ("autor_id") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_8e7723714b350fe426375e8c221"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_36909f498c32dd46379a60087b5"`);
        await queryRunner.query(`DROP INDEX "IDX_8e7723714b350fe426375e8c22"`);
        await queryRunner.query(`DROP INDEX "IDX_36909f498c32dd46379a60087b"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "PK_e2b9cac9018697fd28093e3b547"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "PK_36909f498c32dd46379a60087b5" PRIMARY KEY ("livro_id")`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "autor_id"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "PK_36909f498c32dd46379a60087b5"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "livro_id"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "livrosId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "PK_708835ef29229009430795bc62e" PRIMARY KEY ("livrosId")`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "autoresId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "PK_708835ef29229009430795bc62e"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "PK_c89422e01b8e068bbff51882593" PRIMARY KEY ("autoresId", "livrosId")`);
        await queryRunner.query(`CREATE INDEX "IDX_708835ef29229009430795bc62" ON "livros" ("livrosId")`);
        await queryRunner.query(`CREATE INDEX "IDX_534153feb8d0c28f8f1ed7d12e" ON "livros" ("autoresId")`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_708835ef29229009430795bc62e" FOREIGN KEY ("livrosId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_534153feb8d0c28f8f1ed7d12e2" FOREIGN KEY ("autoresId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}