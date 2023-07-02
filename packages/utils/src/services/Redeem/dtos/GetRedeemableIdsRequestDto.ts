import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemableIdsRequestDto extends IBaseModel {
  redeemSystemId: string;
}

@JsonObject()
export class GetRedeemableIdsRequestDto
  extends RequestDto
  implements IGetRedeemableIdsRequestDto
{
  @JsonProperty()
  redeemSystemId: string;
}
