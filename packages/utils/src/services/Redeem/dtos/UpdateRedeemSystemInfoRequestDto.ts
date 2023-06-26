import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { RedeemSystemConfigClientModel } from "../models";

export interface IUpdateRedeemSystemInfoRequestDto extends IBaseModel {
  redeemSystemId: string;

  chainName: string;

  collectionId: string;

  name: string;

  config: RedeemSystemConfigClientModel;
}

@JsonObject()
export class UpdateRedeemSystemInfoRequestDto
  extends RequestDto
  implements IUpdateRedeemSystemInfoRequestDto
{
  @JsonProperty({ required: true })
  redeemSystemId: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  config: RedeemSystemConfigClientModel;
}
