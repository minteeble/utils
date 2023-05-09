import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

export interface IQueryReservedAreaByUserResponseDto extends IBaseModel {}

export class QueryReservedAreaByUserResponseDto
  extends BaseModel
  implements IQueryReservedAreaByUserResponseDto {}
