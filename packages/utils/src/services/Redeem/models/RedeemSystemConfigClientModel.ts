import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, VisibilityPolicy } from "../../../models";

/**
 * Redeem System Config object client model
 */
export interface IRedeemSystemConfigClientModel extends IBaseModel {
  /**
   * Specifies the redeemer's visibility policy for contact info
   */
  contactInfoRedeemerVisbilityPolicy: VisibilityPolicy;

  /**
   * Specifies the redemeer's visibiltiy policy for shipping info
   */
  shippingInfoRedeemerVisbilityPolicy: VisibilityPolicy;
}

/**
 * Redeem System Config object client model
 */
@JsonObject()
export class RedeemSystemConfigClientModel
  extends BaseModel
  implements IRedeemSystemConfigClientModel
{
  @JsonProperty({ required: true })
  contactInfoRedeemerVisbilityPolicy: VisibilityPolicy;

  @JsonProperty({ required: true })
  shippingInfoRedeemerVisbilityPolicy: VisibilityPolicy;
}
