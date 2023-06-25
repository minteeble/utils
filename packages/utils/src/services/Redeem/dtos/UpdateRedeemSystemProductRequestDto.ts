import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateRedeemSystemProductRequestDto extends IBaseModel {
  systemId: string;

  id: string;

  parentId?: string;

  name: string;

  description: string;

  attributes: { [key: string]: any };

  supply?: number;
}

@JsonObject()
export class UpdateRedeemSystemProductRequestDto
  extends RequestDto
  implements IUpdateRedeemSystemProductRequestDto
{
  @JsonProperty({ required: true })
  systemId: string;

  @JsonProperty({ required: true })
  id: string;

  @JsonProperty()
  parentId?: string;

  @JsonProperty({ required: true })
  name: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  attributes: { [key: string]: any };

  @JsonProperty()
  supply?: number;
}
