import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { IRedeemRequestClientModel, RedeemRequestClientModel } from "../models";

export interface IGetRedeemRequestsResponseDto extends IBaseModel {
  /**
   * Redeem requests
   */
  requests: IRedeemRequestClientModel[];
}

/**
 * Get redeem requests response dto
 */
@JsonObject()
export class GetRedeemRequestsResponseDto
  extends BaseModel
  implements IGetRedeemRequestsResponseDto
{
  /**
   * Redeem requests
   */
  @JsonProperty({ type: RedeemRequestClientModel })
  requests: RedeemRequestClientModel[];
}
