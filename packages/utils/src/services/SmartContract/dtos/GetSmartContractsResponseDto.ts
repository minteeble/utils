import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { ISmartContractClientModel, SmartContractClientModel } from "../models";

export interface IGetSmartContractsResponseDto extends IBaseModel {
  items: Array<ISmartContractClientModel>;
}

@JsonObject()
export class GetSmartContractsResponseDto
  extends BaseModel
  implements IGetSmartContractsResponseDto
{
  @JsonProperty({ type: SmartContractClientModel })
  items: Array<SmartContractClientModel>;
}
