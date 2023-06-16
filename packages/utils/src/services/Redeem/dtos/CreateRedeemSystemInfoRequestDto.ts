import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { RedeemType } from "../models";

export interface ICreateRedeemSystemInfoRequestDto extends IBaseModel {
  chainName: string;
  redeemType: RedeemType;
}

@JsonObject()
export class CreateRedeemSystemInfoRequestDto
  extends RequestDto
  implements ICreateRedeemSystemInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  redeemType: RedeemType;
}
