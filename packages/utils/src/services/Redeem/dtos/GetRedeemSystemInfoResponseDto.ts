import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { RedeemType } from "../models";

export interface IGetRedeemSystemInfoResponseDto extends IBaseModel {
  id: string;
  chainName: string;
  redeemType: RedeemType;
  resourceOwner: string;
  collectionId: string;
}

@JsonObject()
export class GetRedeemSystemInfoResponseDto
  extends BaseModel
  implements IGetRedeemSystemInfoResponseDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  redeemType: RedeemType;

  @JsonProperty()
  resourceOwner: string;
}
