import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel, RequestDto } from "../../../models";

export interface IDeleteUserNftCollectionRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;
}

@JsonObject()
export class DeleteUserNftCollectionRequestDto
  extends RequestDto
  implements IDeleteUserNftCollectionRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;
}
