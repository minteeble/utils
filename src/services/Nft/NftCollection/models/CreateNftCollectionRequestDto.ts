import { BaseModel, IBaseModel } from "../../../../shared";
import {
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../shared";

export interface ICreateNftCollectionRequestDto
  extends INftCollectionInfoClientModel {}

export class CreateNftCollectionRequestDto
  extends NftCollectionInfoClientModel
  implements ICreateNftCollectionRequestDto {}
