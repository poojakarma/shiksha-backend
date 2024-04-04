import { CacheModule, Module } from "@nestjs/common";
import { FieldsController } from "./fields.controller";
import { HttpModule } from "@nestjs/axios";
import { FieldsAdapter } from "./fieldsadapter";
import { HasuraModule } from "src/adapters/hasura/hasura.module";
import { Fields } from "./entities/fields.entity";
import { FieldValues } from "./entities/fields-values.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FieldsService } from "./fields.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Fields]),
    TypeOrmModule.forFeature([FieldValues]),
    HttpModule,
    HasuraModule,
  ],
  controllers: [FieldsController],
  providers: [FieldsAdapter, FieldsService],
})
export class FieldsModule {}
