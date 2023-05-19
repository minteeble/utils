import { IBaseModel, BaseModel } from "../../../shared";
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
