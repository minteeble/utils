import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject } from "typescript-json-serializer";

export interface IGetFormsRequestDto extends IBaseModel {}

@JsonObject()
export class GetFormsRequestDto
  extends RequestDto
  implements IGetFormsRequestDto {}
