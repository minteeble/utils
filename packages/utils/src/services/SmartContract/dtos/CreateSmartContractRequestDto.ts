import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

export interface ICreateSmartContractRequestDto extends IBaseModel {
  /**
   * Network chain name
   */
  chainName: string;

  /**
   * Smart contract address
   */
  address: string;

  /**
   * Custom abi
   */
  abi: string;
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

  @JsonProperty()
  abi: string;
}
