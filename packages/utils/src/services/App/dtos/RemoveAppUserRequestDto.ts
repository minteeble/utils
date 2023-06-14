import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IRemoveAppUserRequestDto extends IBaseModel {
  urlName: string;
  userWallet: string;
}

@JsonObject()
export class RemoveAppUserRequestDto
  extends RequestDto
  implements IRemoveAppUserRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  userWallet: string;
}
