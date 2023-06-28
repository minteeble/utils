import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemedItemRequestDto extends IBaseModel {
  nftId: number;
  redeemSystemId: string;
}

@JsonObject()
export class GetRedeemedItemRequestDto
  extends RequestDto
  implements IGetRedeemedItemRequestDto
{
  @JsonProperty()
  nftId: number;

  @JsonProperty()
  redeemSystemId: string;
}
