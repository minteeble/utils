import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetNftGenerationItemsInfoRequestDto extends IBaseModel {
  generationId: string;
  nftGenerationItems: string;
}

@JsonObject()
export class GetNftGenerationItemsInfoRequestDto
  extends RequestDto
  implements IGetNftGenerationItemsInfoRequestDto
{
  @JsonProperty()
  generationId: string;

  @JsonProperty()
  nftGenerationItems: string;
}
