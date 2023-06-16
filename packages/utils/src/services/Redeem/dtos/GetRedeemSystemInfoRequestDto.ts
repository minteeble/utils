import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { RedeemType } from "../models";

export interface IGetRedeemSystemInfoRequestDto extends IBaseModel {
  id: string;
  chainName: string;
  redeemType: RedeemType;
  resourceOwner: string;
}

@JsonObject()
export class GetRedeemSystemInfoRequestDto
  extends BaseModel
  implements IGetRedeemSystemInfoRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  redeemType: RedeemType;

  @JsonProperty()
  resourceOwner: string;
}
