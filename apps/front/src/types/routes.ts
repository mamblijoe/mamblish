export type TDndSection = {
  CHARACTER_DATA: TCharacterData;
  CLASS: TClass;
  CLASS_RESOURCE_LISTS: TClassResourceLists;
  CLASS_LEVELS: TClassLevels;
  GAME_MECHANICS: TGameMechanics;
  EQUIPMENT: TEquipment;
  FEATS: TFeats;
  FEATURES: TFeatures;
  MONSTERS: TMonsters;
  RACES: TRaces;
  RULES: TRules;
  SPELLS: TSpells;
  SUBCLASSES: TSubclasses;
  SUBRACES: TSubraces;
  TRAITS: TTraits;
};

export type TCharacterData = {
  [p in TCharacterDataProps]: string;
};
export type TCharacterDataProps =
  | "ABILITY_SCORES"
  | "ALIGNMENT"
  | "BACKGROUND"
  | "LANGUAGE"
  | "PROFICIENCY"
  | "SKILL";

export type TClass = {
  [p in TClassProps]: string;
};
export type TClassProps = "CLASS" | "SPELLCASTING" | "MULTI_CLASSING";

export type TClassResourceLists = {
  [p in TClassResourceListsProps]: string;
};
export type TClassResourceListsProps =
  | "SUBCLASSES"
  | "SPELLS"
  | "FEATURES"
  | "PROFICIENCIES";

export type TClassLevels = {
  [p in TClassLevelsProps]: string;
};
export type TClassLevelsProps =
  | "ALL_LEVEL_RESOURCES"
  | "LEVEL_RESOURCE"
  | "FEATURES"
  | "SPELLS";

export type TGameMechanics = {
  [p in TGameMechanicsProps]: string;
};
export type TGameMechanicsProps = "CONDITION" | "DAMAGE_TYPE" | "MAGIC_SCHOOL";

export type TEquipment = {
  [p in TEquipmentProps]: string;
};
export type TEquipmentProps =
  | "EQUIPMENT"
  | "EQUIPMENT_CATEGORY"
  | "MAGIC_ITEM"
  | "WEAPON_PROPERTY";

export type TFeats = {
  [p in TFeatsProps]: string;
};
export type TFeatsProps = "FEAT";

export type TFeatures = {
  [p in TFeaturesProps]: string;
};
export type TFeaturesProps = "FEATURE";

export type TMonsters = {
  [p in TMonstersProps]: string;
};
export type TMonstersProps = "MONSTERS" | "MONSTER";

export type TRaces = {
  [p in TRacesProps]: string;
};
export type TRacesProps = "RACE" | "SUBRACE" | "PROFICIENCIES" | "TRAITS";

export type TRules = {
  [p in TRulesProps]: string;
};
export type TRulesProps = "SECTION" | "RULE";

export type TSpells = {
  [p in TSpellsProps]: string;
};
export type TSpellsProps = "ALL_SPELLS" | "SPELL";

export type TSubclasses = {
  [p in TSubclassesProps]: string;
};
export type TSubclassesProps =
  | "SUBCLASS"
  | "FEATURES"
  | "ALL_LEVEL_RESOURCES"
  | "LEVEL_RESOURCES"
  | "FEATURES_LEVEL";

export type TSubraces = {
  [p in TSubracesProps]: string;
};
export type TSubracesProps = "SUBRACE" | "PROFICIENCES" | "TRAITS";

export type TTraits = {
  [p in TTraitsProps]: string;
};
export type TTraitsProps = "TRAIT";
