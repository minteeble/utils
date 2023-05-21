import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export interface IUserPreviewClientModel extends IBaseModel {
  walletAddress: string;
}

@JsonObject()
export class UserPreviewClientModel
  extends BaseModel
  implements IUserPreviewClientModel
{
  @JsonProperty()
  walletAddress: string;
}
