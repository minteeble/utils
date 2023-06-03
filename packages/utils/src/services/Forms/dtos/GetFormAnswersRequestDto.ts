import { BaseModel, IBaseModel, RequestDto } from "../../../models";
import { JsonObject } from "typescript-json-serializer";

export interface IGetFormAnswersRequestDto extends IBaseModel {}

@JsonObject()
export class GetFormAnswersRequestDto
  extends RequestDto
  implements IGetFormAnswersRequestDto
{
  formId: string;
}
