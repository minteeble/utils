import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { MutationClientModel } from "./MutationClientModel";

export enum NftGenerationType {
  DEFAULT = "DEFAULT",
  DYNAMIC_RENDER = "DYNAMIC_RENDER",
  ONE_TIME_RENDER = "ONE_TIME_RENDER",
  STATIC_MUTANT = "STATIC_MUTANT",
}

/**
 * Stages where variable resolution has to take place
 */
export enum NftGenerationResolutionStage {
  /**
   * Resolves variable during the rendering process (after every renderer action).
   */
  DURING_RENDERING = "DURING_RENDERING",

  /**
   * Resolves variables after finale rendering has been completed.
   */
  POST_FINAL_RENDERING = "POST_RENDERING",
}

/**
 * Nft Generation varibale object
 */
export interface NftGenerationVariable {
  /**
   * variable name to be searched. If the name is "VAR", the system will search
   * for "{{ VAR }}", in order to substitute it with the corresponding content
   */
  name: string;

  /**
   * variable content to be substituted
   */
  content: string;

  /**
   * Specifies when does the resolution has to take place (after rendering, during rendering, etc...)
   */
  resolutionStage: NftGenerationResolutionStage;
}

export interface IGenerationDataClientModel extends IBaseModel {
  /**
   * NftGeneration ID
   */
  id: string;

  /**
   * Renderer name
   */
  name: string;

  /**
   * NftGeneration Type
   */
  type: NftGenerationType;

  /**
   * NFT Renderer ID
   */
  renderersIds?: string[];

  /**
   * Generation owner
   */
  resourceOwner: string;

  /**
   * Specifies if generation supports reveal or not
   */
  supportsReveal: boolean;

  /**
   * Specifies if reveal operation is active for users or not
   */
  usersCanReveal: boolean;

  /**
   * Mutation object
   */
  mutation?: MutationClientModel;

  /**
   * Other attributes
   */
  attributes: { [key: string]: any };

  /**
   * Nft Generation Variables
   */
  variables: Array<NftGenerationVariable>;
}

@JsonObject()
export class GenerationDataClientModel
  extends BaseModel
  implements IGenerationDataClientModel
{
  @JsonProperty({ required: true })
  id: string;

  @JsonProperty()
  name: string;

  @JsonProperty({ required: true })
  type: NftGenerationType;

  @JsonProperty()
  renderersIds?: string[];

  @JsonProperty({ required: true })
  resourceOwner: string;

  @JsonProperty({ required: true })
  supportsReveal: boolean;

  @JsonProperty({ required: true })
  usersCanReveal: boolean;

  @JsonProperty()
  mutation?: MutationClientModel;

  @JsonProperty()
  attributes: { [key: string]: any };

  @JsonProperty()
  variables: Array<NftGenerationVariable>;

  constructor() {
    super();
    this.variables = [];
  }

  /**
   *
   * @returns The raw version of generation data, that can
   * be used later inside NftGenerationFactory for determining the correct NftGeneration instance
   */
  public getRawGenerationData(): { [key: string]: any } {
    let object = {
      id: this.id,
      name: this.name,
      type: this.type,
      renderersIds: this.renderersIds,
      resourceOwner: this.resourceOwner,
      usersCanReveal: this.usersCanReveal,
      supportsReveal: this.supportsReveal,
      mutation: this.mutation,
      variables: this.variables,
    };

    return Object.assign(object, this.attributes);
  }
}
