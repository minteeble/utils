import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetUserProfileResponseDto extends IBaseModel {
  walletAddress: string;
  userName: string;
}

@JsonObject()
export class GetUserProfileResponseDto extends BaseModel {
  @JsonProperty()
  walletAddress: string;

  @JsonProperty()
  userName: string;
}
