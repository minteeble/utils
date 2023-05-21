import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export interface IReservedAreaPreviewClientModel extends IBaseModel {
  urlName: string;
  displayName: string;
}

@JsonObject()
export class ReservedAreaPreviewClientModel
  extends BaseModel
  implements IReservedAreaPreviewClientModel
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  displayName: string;
}
