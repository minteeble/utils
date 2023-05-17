import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

export interface IReservedAreaClientModel extends IBaseModel {
  urlName: string;
  displayName: string;
  description: string;
  accessPolicyId: string;
  resourceOwner: string;
}

@JsonObject()
export class ReservedAreaClientModel
  extends BaseModel
  implements IReservedAreaClientModel
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  displayName: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  accessPolicyId: string;

  @JsonProperty()
  resourceOwner: string;
}
