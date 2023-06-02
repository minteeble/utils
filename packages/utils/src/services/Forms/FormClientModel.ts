import { IBaseModel, BaseModel } from "../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IFormClientModel extends IBaseModel {
  id: string;
  formName: string;
  createdAt: string;
  resourceOwner: string;
}

@JsonObject()
export class FormClientModel extends BaseModel implements IFormClientModel {
  @JsonProperty()
  id: string;

  @JsonProperty()
  formName: string;

  @JsonProperty()
  createdAt: string;

  @JsonProperty()
  resourceOwner: string;
}
