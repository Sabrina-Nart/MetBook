"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaisEnumOptions1716246193308 = void 0;
class UpdatePaisEnumOptions1716246193308 {
    async up(queryRunner) {
        await queryRunner.query(`
            DO $$ 
            BEGIN
                IF EXISTS (
                    SELECT 1
                    FROM   pg_type
                    WHERE  typname = 'pais_enum'
                ) THEN
                    BEGIN
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Argentina''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Estados Unidos''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Canadá''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Paraguai''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Uruguai''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Itália''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Portugal''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Espanha''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Alemanha''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Rússia''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Coreia do Sul''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Japão''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''China''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Austrália''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''México''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''África do Sul''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Outros''';

                    END;
                END IF;
            END$$;
        `);
    }
    async down(queryRunner) {
    }
}
exports.UpdatePaisEnumOptions1716246193308 = UpdatePaisEnumOptions1716246193308;
//# sourceMappingURL=1716246193308-UpdatePaisEnumPopula.js.map