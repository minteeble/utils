import { JsonObject } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../../shared";

export interface ICreateRendererRequestDto extends IBaseModel {}

@JsonObject()
export class CreateRendererRequestDto
  extends RequestDto
  implements ICreateRendererRequestDto {}
