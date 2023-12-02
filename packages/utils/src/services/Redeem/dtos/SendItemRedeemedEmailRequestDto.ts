import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ISendItemRedeemedEmailRequestDto extends IBaseModel {
  redeemSystemId: string;

  nftId: string;
}

@JsonObject()
export class SendItemRedeemedEmailRequestDto
  extends RequestDto
  implements ISendItemRedeemedEmailRequestDto
{
  @JsonProperty()
  redeemSystemId: string;

  @JsonProperty()
  nftId: string;
}
