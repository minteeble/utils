import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";
import { ReservedAreaPreviewClientModel } from "../../ReservedArea/models";

export interface IQueryReservedAreaByUserResponseDto extends IBaseModel {
  areas: Array<ReservedAreaPreviewClientModel>;
}

@JsonObject()
export class QueryReservedAreaByUserResponseDto
  extends BaseModel
  implements IQueryReservedAreaByUserResponseDto
{
  @JsonProperty()
  areas: ReservedAreaPreviewClientModel[];
}
