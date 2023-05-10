import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IDeleteUserInfoRequestDto extends IBaseModel {}

@JsonObject()
export class DeleteUserInfoRequestDto extends RequestDto {}
