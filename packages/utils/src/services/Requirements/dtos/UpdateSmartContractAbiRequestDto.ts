import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IUpdateSmartContractAbiRequestDto extends IBaseModel {
  id: string;

  chainName: string;

  abi: any;
}

@JsonObject()
export class UpdateSmartContractAbiRequestDto
  extends RequestDto
  implements IUpdateSmartContractAbiRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  abi: any;
}
