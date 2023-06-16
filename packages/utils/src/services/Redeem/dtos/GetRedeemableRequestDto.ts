import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetRedeemableRequestDto extends IBaseModel {
  id: string;
  redeemConfigId: string;
}

@JsonObject()
export class GetRedeemableRequestDto
  extends BaseModel
  implements IGetRedeemableRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  redeemConfigId: string;
}
