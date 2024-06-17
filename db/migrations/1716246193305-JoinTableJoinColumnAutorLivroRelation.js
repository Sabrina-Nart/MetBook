"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinTableJoinColumnAutorLivroRelation1716246193305 = void 0;
class JoinTableJoinColumnAutorLivroRelation1716246193305 {
    constructor() {
        this.name = 'JoinTableJoinColumnAutorLivroRelation1716246193305';
    }
    async up(queryRunner) {
        const columns = await queryRunner.query(`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'livros' AND column_name = 'autorId'
        `);
        if (columns.length > 0) {
            await queryRunner.query(`
                ALTER TABLE "livros"
                ADD CONSTRAINT "FK_autor_livro"
                FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE CASCADE
            `);
        }
        else {
            console.log('Column "autorId" not found in table "livros". Skipping migration...');
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_autor_livro"`);
    }
}
exports.JoinTableJoinColumnAutorLivroRelation1716246193305 = JoinTableJoinColumnAutorLivroRelation1716246193305;
//# sourceMappingURL=1716246193305-JoinTableJoinColumnAutorLivroRelation.js.map