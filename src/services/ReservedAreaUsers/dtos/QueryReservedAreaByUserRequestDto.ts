import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";
import { ReservedAreaPreviewClientModel } from "../../ReservedArea/models";

export interface IQueryReservedAreaByUserRequestDto extends IBaseModel {}

export class QueryReservedAreaByUserRequestDto
  extends RequestDto
  implements IQueryReservedAreaByUserRequestDto {}
