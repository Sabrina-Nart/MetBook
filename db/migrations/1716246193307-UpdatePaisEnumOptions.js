"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaisEnumOptions1716246193307 = void 0;
class UpdatePaisEnumOptions1716246193307 {
    constructor() {
        this.name = 'UpdatePaisEnumOptions1716246193307';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "usuarios"
            DROP COLUMN "pais";
        `);
        await queryRunner.query(`
            ALTER TABLE "usuarios"
            ADD COLUMN "pais" "public"."pais_enum";
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "usuarios"
            DROP COLUMN "pais";
        `);
        await queryRunner.query(`
            ALTER TABLE "usuarios"
            ADD COLUMN "pais" "public"."pais_enum";
        `);
    }
}
exports.UpdatePaisEnumOptions1716246193307 = UpdatePaisEnumOptions1716246193307;
//# sourceMappingURL=1716246193307-UpdatePaisEnumOptions.js.map