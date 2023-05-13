import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";
import { IContentClientModel, ContentClientModel } from "../models";

export interface IGetSectionContentsResponseDto extends IBaseModel {
  items: Array<IContentClientModel>;
}

@JsonObject()
export class GetSectionContentsResponseDto
  extends BaseModel
  implements IGetSectionContentsResponseDto
{
  @JsonProperty()
  items: ContentClientModel[];
}
