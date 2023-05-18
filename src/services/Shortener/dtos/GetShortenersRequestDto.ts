import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IGetShortenersRequestDto extends IBaseModel {}

@JsonObject()
export class GetShortenersRequestDto extends RequestDto {}
