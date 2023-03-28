/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/staff": {
    /** @description Get staff members */
    get: operations["getStaff"];
  };
  "/search/{query}": {
    /** @description Search for player, town or nation by name */
    get: operations["search"];
  };
  "/player": {
    /** @description Get all players */
    get: operations["getPlayers"];
  };
  "/player/{identifier}": {
    /** @description Get player with name or UUID */
    get: operations["getPlayer"];
  };
  "/town": {
    /** @description Get all towns */
    get: operations["getTowns"];
  };
  "/town/{identifier}": {
    /** @description Get town with name or UUID */
    get: operations["getTown"];
  };
  "/donors": {
    /** @description Get donors */
    get: operations["getDonors"];
  };
  "/server": {
    /** @description Get server informations */
    get: operations["getServer"];
  };
  "/nation": {
    /** @description Get all nations */
    get: operations["getNations"];
  };
  "/nation/{identifier}": {
    /** @description Get nation with name or UUID */
    get: operations["getNation"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    TypedNameUuidModel: {
      name?: string;
      uuid?: string;
      type?: string;
    };
    NameUuidModel: {
      name?: string;
      uuid?: string;
    };
    NotFoundResponse: Record<string, never>;
    PlayerModel: {
      name?: string;
      uuid?: string;
      /** Format: int64 */
      firstPlayed: number;
      /** Format: int64 */
      lastSeen: number;
      isOnline?: boolean;
      resident?: components["schemas"]["ResidentModel"];
      mmo?: components["schemas"]["MmoModel"];
    };
    TownModel: {
      name?: string;
      uuid?: string;
      nation?: components["schemas"]["NameUuidModel"];
      /** Format: int64 */
      joinedNationAt: number;
      mayor?: components["schemas"]["NameUuidModel"];
      board?: string;
      tag?: string;
      formattedName?: string;
      /** Format: int64 */
      registered: number;
      /** Format: int32 */
      balance: number;
      mapColor?: string;
      residents?: (components["schemas"]["NameUuidModel"])[];
      spawn?: components["schemas"]["CoordinatesModel"];
      townBlocks?: (components["schemas"]["CoordinatesModel"])[];
      isNeutral?: boolean;
      isOpen?: boolean;
      isPublic?: boolean;
    };
    ServerModel: {
      name?: string;
      motd?: string;
      version?: string;
      bukkitVersion?: string;
      tps?: string;
      /** Format: int32 */
      maxPlayers: number;
      onlinePlayers?: (components["schemas"]["NameUuidModel"])[];
    };
    NationModel: {
      name?: string;
      uuid?: string;
      king?: components["schemas"]["NameUuidModel"];
      capital?: components["schemas"]["NameUuidModel"];
      board?: string;
      tag?: string;
      formattedName?: string;
      /** Format: int64 */
      registered: number;
      /** Format: int32 */
      balance: number;
      mapColor?: string;
      towns?: (components["schemas"]["NameUuidModel"])[];
      residents?: (components["schemas"]["NameUuidModel"])[];
      enemies?: (components["schemas"]["NameUuidModel"])[];
      allies?: (components["schemas"]["NameUuidModel"])[];
      spawn?: components["schemas"]["CoordinatesModel"];
      isNeutral?: boolean;
      isOpen?: boolean;
      isPublic?: boolean;
    };
    ResidentModel: {
      town?: components["schemas"]["NameUuidModel"];
      nation?: components["schemas"]["NameUuidModel"];
      friends?: (components["schemas"]["NameUuidModel"])[];
      isMayor?: boolean;
      isKing?: boolean;
      townRanks?: (string)[];
      nationRanks?: (string)[];
      surname?: string;
      title?: string;
      prefix?: string;
      postfix?: string;
      formattedName?: string;
    };
    MmoModel: {
      /** Format: int32 */
      palier: number;
      talents?: (components["schemas"]["TalentModel"])[];
    };
    CoordinatesModel: {
      /** Format: double */
      x: number;
      /** Format: double */
      y: number;
      /** Format: double */
      z: number;
      type?: string;
      world?: string;
    };
    TalentModel: {
      name?: string;
      /** Format: int32 */
      level: number;
      /** Format: double */
      xp: number;
      /** Format: double */
      xpToNextLevel: number;
      /** Format: double */
      minLevelXp: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  getStaff: {
    /** @description Get staff members */
    responses: {
      /** @description Staff members */
      200: {
        content: {
          "application/json": (components["schemas"]["TypedNameUuidModel"])[];
        };
      };
    };
  };
  search: {
    /** @description Search for player, town or nation by name */
    parameters: {
        /** @description Search query */
      path: {
        query: string;
      };
    };
    responses: {
      /** @description Query results */
      200: {
        content: {
          "application/json": (components["schemas"]["NameUuidModel"])[];
        };
      };
    };
  };
  getPlayers: {
    /** @description Get all players */
    responses: {
      /** @description All players */
      200: {
        content: {
          "application/json": (components["schemas"]["NameUuidModel"])[];
        };
      };
    };
  };
  getPlayer: {
    /** @description Get player with name or UUID */
    parameters: {
        /** @description Name or UUID of the player */
      path: {
        identifier: string;
      };
    };
    responses: {
      /** @description Player */
      200: {
        content: {
          "application/json": components["schemas"]["PlayerModel"];
        };
      };
      /** @description Player not found */
      404: {
        content: {
          "application/json": components["schemas"]["NotFoundResponse"];
        };
      };
    };
  };
  getTowns: {
    /** @description Get all towns */
    responses: {
      /** @description All towns */
      200: {
        content: {
          "application/json": (components["schemas"]["NameUuidModel"])[];
        };
      };
    };
  };
  getTown: {
    /** @description Get town with name or UUID */
    parameters: {
        /** @description Name or UUID of the town */
      path: {
        identifier: string;
      };
    };
    responses: {
      /** @description Town */
      200: {
        content: {
          "application/json": components["schemas"]["TownModel"];
        };
      };
      /** @description Town not found */
      404: {
        content: {
          "application/json": components["schemas"]["NotFoundResponse"];
        };
      };
    };
  };
  getDonors: {
    /** @description Get donors */
    responses: {
      /** @description Donors */
      200: {
        content: {
          "application/json": (components["schemas"]["TypedNameUuidModel"])[];
        };
      };
    };
  };
  getServer: {
    /** @description Get server informations */
    responses: {
      /** @description Server informations */
      200: {
        content: {
          "application/json": components["schemas"]["ServerModel"];
        };
      };
    };
  };
  getNations: {
    /** @description Get all nations */
    responses: {
      /** @description All nations */
      200: {
        content: {
          "application/json": (components["schemas"]["NameUuidModel"])[];
        };
      };
    };
  };
  getNation: {
    /** @description Get nation with name or UUID */
    parameters: {
        /** @description Name or UUID of the nation */
      path: {
        identifier: string;
      };
    };
    responses: {
      /** @description Nation */
      200: {
        content: {
          "application/json": components["schemas"]["NationModel"];
        };
      };
      /** @description Nation not found */
      404: {
        content: {
          "application/json": components["schemas"]["NotFoundResponse"];
        };
      };
    };
  };
}
