import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { RedeemSystemConfigClientModel } from "../models";

export interface IUpdateRedeemSystemInfoRequestDto extends IBaseModel {
  id: string;

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
  id: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  config: RedeemSystemConfigClientModel;
}
