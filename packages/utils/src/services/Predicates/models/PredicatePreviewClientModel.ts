import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export interface IPredicatePreviewClientModel extends IBaseModel {
  id: string;
  name: string;
  resourceOwner: string;
}

@JsonObject()
export class PredicatePreviewClientModel
  extends BaseModel
  implements IPredicatePreviewClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  resourceOwner: string;
}
