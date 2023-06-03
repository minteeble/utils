import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject } from "typescript-json-serializer";

export interface IGetUserProfileRequestDto extends IBaseModel {}

@JsonObject()
export class GetUserProfileRequestDto
  extends RequestDto
  implements IGetUserProfileRequestDto {}
