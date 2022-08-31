import {
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../shared/models/NftCollection";

export interface IGetNftCollectionInfoResponseDto
  extends INftCollectionInfoClientModel {}

export class GetNftCollectionInfoResponseDto
  extends NftCollectionInfoClientModel
  implements IGetNftCollectionInfoResponseDto {}
