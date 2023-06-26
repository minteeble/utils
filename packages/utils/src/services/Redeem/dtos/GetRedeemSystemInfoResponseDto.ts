import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IRedeemProductClientModel, RedeemType } from "../models";

export interface IGetRedeemSystemInfoResponseDto extends IBaseModel {
  id: string;
  chainName: string;
  name: string;
  redeemType: RedeemType;
  resourceOwner: string;
  collectionId: string;
  products: Array<IRedeemProductClientModel>;
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
  name: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  redeemType: RedeemType;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  products: IRedeemProductClientModel[];
}
