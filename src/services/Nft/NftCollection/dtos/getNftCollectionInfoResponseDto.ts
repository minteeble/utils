import { JsonObject } from "typescript-json-serializer";
import {
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../shared/models/NftCollection";

export interface IGetNftCollectionInfoResponseDto
  extends INftCollectionInfoClientModel {}

@JsonObject()
export class GetNftCollectionInfoResponseDto
  extends NftCollectionInfoClientModel
  implements IGetNftCollectionInfoResponseDto {}
