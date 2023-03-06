import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../../shared";

export interface IGetSmartContractRequestDto extends IBaseModel {
  id: string;

  chainName: string;
}

@JsonObject()
export class GetSmartContractRequestDto
  extends RequestDto
  implements IGetSmartContractRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;
}
