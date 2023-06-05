import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

export interface IDeleteSmartContractRequestDto extends IBaseModel {
  id: string;

  chainName: string;
}

@JsonObject()
export class DeleteSmartContractRequestDto
  extends RequestDto
  implements IDeleteSmartContractRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;
}
