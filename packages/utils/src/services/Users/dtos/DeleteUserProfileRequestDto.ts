import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject } from "typescript-json-serializer";

export interface IDeleteUserProfileRequestDto extends IBaseModel {}

@JsonObject()
export class DeleteUserProfileRequestDto
  extends RequestDto
  implements IDeleteUserProfileRequestDto {}
