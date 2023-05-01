import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export enum NftGenerationType {
  DEFAULT = "DEFAULT",
  DYNAMIC_RENDER = "DYNAMIC_RENDER",
  ONE_TIME_RENDER = "ONE_TIME_RENDER",
  STATIC_MUTANT = "STATIC_MUTANT",
}

export interface IGenerationDataClientModel extends IBaseModel {
  /**
   * NftGeneration ID
   */
  id: string;

  /**
   * NftGeneration Type
   */
  type: NftGenerationType;

  /**
   * Generation owner
   */
  resourceOwner: string;

  /**
   * Other attributes
   */
  attributes: { [key: string]: string };
}

@JsonObject()
export class GenerationDataClientModel
  extends BaseModel
  implements IGenerationDataClientModel
{
  @JsonProperty({ required: true })
  id: string;

  @JsonProperty({ required: true })
  type: NftGenerationType;

  @JsonProperty({ required: true })
  resourceOwner: string;

  @JsonProperty()
  attributes: { [key: string]: any };

  /**
   *
   * @returns The raw version of generation data, that can
   * be used later inside NftGenerationFactory for determining the correct NftGeneration instance
   */
  public getRawGenerationData(): { [key: string]: any } {
    let object = {
      id: this.id,
      type: this.type,
      resourceOwner: this.resourceOwner,
    };

    return Object.assign(object, this.attributes);
  }
}
