import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export enum ResourceType {
  RENDERER = "RENDERER",
  GENERATION = "GENERATION",
}

@JsonObject()
export class CustomActionRequest {
  @JsonProperty()
  body: object;

  @JsonProperty()
  targetResourceType: ResourceType;

  @JsonProperty()
  targetResourceId: string;
}

export interface IExecuteCustomActionRequestDto extends IBaseModel {
  customAction: CustomActionRequest;
}

@JsonObject()
export class ExecuteCustomActionRequestDto
  extends RequestDto
  implements IExecuteCustomActionRequestDto
{
  @JsonProperty()
  customAction: CustomActionRequest;
}
