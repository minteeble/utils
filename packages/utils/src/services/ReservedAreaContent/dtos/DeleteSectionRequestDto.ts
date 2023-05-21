import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteSectionRequestDto extends IBaseModel {
  sectionId: string;
  reservedAreaUrlName: string;
}

@JsonObject()
export class DeleteSectionRequestDto
  extends RequestDto
  implements IDeleteSectionRequestDto
{
  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  reservedAreaUrlName: string;
}
