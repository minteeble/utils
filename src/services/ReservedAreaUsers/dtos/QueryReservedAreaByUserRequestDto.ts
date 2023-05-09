import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";
import { ReservedAreaClientModel } from "../../ReservedArea/models";

export interface IQueryReservedAreaByUserRequestDto extends IBaseModel {
  areas: Array<ReservedAreaClientModel>;
}

export class QueryReservedAreaByUserRequestDto
  extends RequestDto
  implements IQueryReservedAreaByUserRequestDto
{
  areas: ReservedAreaClientModel[];
}
