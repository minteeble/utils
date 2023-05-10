import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface ICreateUserInfoRequestDto extends IBaseModel {}

@JsonObject()
export class CreateUserInfoRequestDto extends RequestDto {}
