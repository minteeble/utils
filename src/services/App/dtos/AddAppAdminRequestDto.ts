import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IAddAppAdminRequestDto extends IBaseModel {
  urlName: string;
  newAdminUserWallet: string;
}

@JsonObject()
export class AddAppAdminRequestDto
  extends RequestDto
  implements IAddAppAdminRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  newAdminUserWallet: string;
}
