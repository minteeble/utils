import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { TraitTypeStats } from "../models/";

export interface IGetCollectionTraitsResponseDto extends IBaseModel {
  traits: Array<TraitTypeStats>;
}

@JsonObject()
export class GetCollectionTraitsResponseDto
  extends BaseModel
  implements IGetCollectionTraitsResponseDto
{
  @JsonProperty()
  traits: TraitTypeStats[];
}
