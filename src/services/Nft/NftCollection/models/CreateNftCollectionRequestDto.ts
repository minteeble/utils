import { JsonObject } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import {
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../shared";

export interface ICreateNftCollectionRequestDto
  extends INftCollectionInfoClientModel {}

@JsonObject()
export class CreateNftCollectionRequestDto
  extends NftCollectionInfoClientModel
  implements ICreateNftCollectionRequestDto {}
