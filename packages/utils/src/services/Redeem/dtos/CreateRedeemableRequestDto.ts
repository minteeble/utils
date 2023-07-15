import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface ICreateRedeemableRequestDto extends IBaseModel {
  redeemSystemId: string;
}

@JsonObject()
export class CreateRedeemableRequestDto
  extends RequestDto
  implements ICreateRedeemableRequestDto
{
  @JsonProperty()
  redeemSystemId: string;
}
