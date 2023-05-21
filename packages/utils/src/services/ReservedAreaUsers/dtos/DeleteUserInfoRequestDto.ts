import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteUserInfoRequestDto extends IBaseModel {}

@JsonObject()
export class DeleteUserInfoRequestDto extends RequestDto {}
