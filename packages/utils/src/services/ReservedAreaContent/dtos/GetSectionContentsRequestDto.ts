import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetSectionContentsRequestDto extends IBaseModel {
  sectionId: string;
  reservedAreaUrlName: string;
}

@JsonObject()
export class GetSectionContentsRequestDto
  extends RequestDto
  implements IGetSectionContentsRequestDto
{
  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  reservedAreaUrlName: string;
}
