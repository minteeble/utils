import { JsonObject } from "typescript-json-serializer";
import {
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../../models";

export interface IGetNftCollectionInfoResponseDto
  extends INftCollectionInfoClientModel {}

@JsonObject()
export class GetNftCollectionInfoResponseDto
  extends NftCollectionInfoClientModel
  implements IGetNftCollectionInfoResponseDto {}
