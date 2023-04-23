import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGenerationDataClientModel extends IBaseModel {}

@JsonObject()
export class GenerationDataClientModel
  extends RequestDto
  implements IGenerationDataClientModel {}
