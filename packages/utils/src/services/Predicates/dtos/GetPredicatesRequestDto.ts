import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetPredicatesRequestDto extends IBaseModel {}

@JsonObject()
export class GetPredicatesRequestDto
  extends RequestDto
  implements IGetPredicatesRequestDto {}
