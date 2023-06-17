import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemableRequestDto extends IBaseModel {
  id: string;
  redeemConfigId: string;
}

@JsonObject()
export class GetRedeemableRequestDto
  extends RequestDto
  implements IGetRedeemableRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  redeemConfigId: string;
}
