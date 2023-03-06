import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../../shared";

export interface ICreateSmartContractRequestDto extends IBaseModel {
  /**
   * Network chain name
   */
  chainName: string;

  /**
   * Smart contract address
   */
  address: string;
}

@JsonObject()
export class CreateSmartContractRequestDto
  extends RequestDto
  implements ICreateSmartContractRequestDto
{
  @JsonProperty()
  address: string;

  @JsonProperty()
  chainName: string;
}
