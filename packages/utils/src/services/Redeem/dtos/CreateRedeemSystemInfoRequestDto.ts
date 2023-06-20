import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { RedeemType } from "../models";

export interface ICreateRedeemSystemInfoRequestDto extends IBaseModel {
  chainName: string;
  redeemType: RedeemType;
  collectionId: string;
  name: string;
}

@JsonObject()
export class CreateRedeemSystemInfoRequestDto
  extends RequestDto
  implements ICreateRedeemSystemInfoRequestDto
{
  @JsonProperty({ required: true })
  chainName: string;

  @JsonProperty({ required: true })
  name: string;

  @JsonProperty({ required: true })
  collectionId: string;

  @JsonProperty({ required: true })
  redeemType: RedeemType;
}
