import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IRemoveAppAdminRequestDto extends IBaseModel {
  urlName: string;
  adminUserWallet: string;
}

@JsonObject()
export class RemoveAppAdminRequestDto
  extends RequestDto
  implements IRemoveAppAdminRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  adminUserWallet: string;
}
