import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetUserAppsRequestDto extends IBaseModel {}

@JsonObject()
export class GetUserAppsRequestDto
  extends RequestDto
  implements IGetUserAppsRequestDto {}
