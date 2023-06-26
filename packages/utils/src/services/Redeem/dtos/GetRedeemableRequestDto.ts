import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemableRequestDto extends IBaseModel {
  id: string;
  redeemSystemId: string;
}

@JsonObject()
export class GetRedeemableRequestDto
  extends RequestDto
  implements IGetRedeemableRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  redeemSystemId: string;
}
