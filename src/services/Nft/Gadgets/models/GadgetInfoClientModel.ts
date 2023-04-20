import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../../shared";

export interface IGadgetInfoClientModel extends IBaseModel {
  groupId: string;

  traitName: string;

  value: string;

  tokenId: number;
}

@JsonObject()
export class GadgetInfoClientModel
  extends BaseModel
  implements IGadgetInfoClientModel
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  traitName: string;

  @JsonProperty()
  value: string;

  @JsonProperty()
  tokenId: number;
}
