import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface ICreateRedeemableRequestDto extends IBaseModel {
  redeemConfigId: string;
}

@JsonObject()
export class CreateRedeemableRequestDto
  extends RequestDto
  implements ICreateRedeemableRequestDto
{
  @JsonProperty()
  redeemConfigId: string;
}
