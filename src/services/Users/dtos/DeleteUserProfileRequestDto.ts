import { IBaseModel, RequestDto } from "../../../shared";
import { JsonObject } from "typescript-json-serializer";

export interface IDeleteUserProfileRequestDto extends IBaseModel {}

@JsonObject()
export class DeleteUserProfileRequestDto
  extends RequestDto
  implements IDeleteUserProfileRequestDto {}
