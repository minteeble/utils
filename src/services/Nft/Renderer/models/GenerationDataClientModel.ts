import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export enum NftGenerationType {
  DEFAULT,
  DYNAMIC_RENDER,
  ONE_TIME_RENDER,
  STATIC_MUTANT,
}

export interface IGenerationDataClientModel extends IBaseModel {}

@JsonObject()
export class GenerationDataClientModel
  extends RequestDto
  implements IGenerationDataClientModel {}
