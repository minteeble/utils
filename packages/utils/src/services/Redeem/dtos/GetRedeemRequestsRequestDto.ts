import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface GetRedeemRequestsRequestDto extends IBaseModel {
  /**
   * Redeem system id
   */
  redeemSystemId: string;
}

@JsonObject()
export class GetRedeemRequestsRequestDto
  extends RequestDto
  implements GetRedeemRequestsRequestDto
{
  @JsonProperty()
  redeemSystemId: string;
}
