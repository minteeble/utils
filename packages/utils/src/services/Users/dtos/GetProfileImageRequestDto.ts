import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject } from "typescript-json-serializer";

export interface IGetUserProfileImageRequestDto extends IBaseModel {}

@JsonObject()
export class GetUserProfileImageRequestDto
  extends RequestDto
  implements IGetUserProfileImageRequestDto {}
