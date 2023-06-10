import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetSmartContractsRequestDto extends IBaseModel {
  chainName: string;
}

@JsonObject()
export class GetSmartContractsRequestDto
  extends RequestDto
  implements IGetSmartContractsRequestDto
{
  @JsonProperty()
  chainName: string;
}
