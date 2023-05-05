import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../../shared";

export interface IGadgetGroupClientModel extends IBaseModel {
  id: string;

  name: string;

  resourceOwner: string;

  chainName: string;

  collectionId: string;
}

@JsonObject()
export class GadgetGroupClientModel
  extends BaseModel
  implements IGadgetGroupClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;
}
