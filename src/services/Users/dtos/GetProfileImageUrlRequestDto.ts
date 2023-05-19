import { IBaseModel, RequestDto } from "../../../shared";
import { JsonObject } from "typescript-json-serializer";

export interface IGetProfileImageUrlRequestDto extends IBaseModel {}

@JsonObject()
export class GetProfileImageUrlRequestDto
  extends RequestDto
  implements IGetProfileImageUrlRequestDto {}
