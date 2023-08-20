import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRedeemSystemInfoPreviewClientModel,
  RedeemSystemInfoPreviewClientModel,
} from "../models";

export interface IGetRedeemSystemsInfoResponseDto extends IBaseModel {
  items: Array<IRedeemSystemInfoPreviewClientModel>;
}

@JsonObject()
export class GetRedeemSystemsInfoResponseDto
  extends BaseModel
  implements IGetRedeemSystemsInfoResponseDto
{
  @JsonProperty()
  items: RedeemSystemInfoPreviewClientModel[];
}
