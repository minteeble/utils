import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export interface IUserClientModel extends IBaseModel {
  walletAddress: string;
  userName: string;
}

@JsonObject()
export class UserClientModel extends BaseModel implements IUserClientModel {
  @JsonProperty()
  walletAddress: string;

  @JsonProperty()
  userName: string;
}
