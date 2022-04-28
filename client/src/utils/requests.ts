import { TDndSection } from "@/types/routes";

export const DND_ROUTES: TDndSection = {
  CHARACTER_DATA: {
    // Get an ability score by index.
    ABILITY_SCORES: "ability-scores/{index}",
    // Get an alignment by index.
    ALIGNMENT: "alignments/{index}",
    // Get a background by index.
    BACKGROUND: "backgrounds/{index}",
    // Get a language by index.
    LANGUAGE: "languages/{index}",
    // Get a proficiency by index.
    PROFICIENCY: "proficiencies/{index}",
    // Get a skill by index.
    SKILL: "skills/{index}",
  },
  CLASS: {
    // Get a class by index.
    CLASS: "classes/{index}",
    // Get spellcasting info for a class.
    SPELLCASTING: "classes/{index}/spellcasting",
    // Get multiclassing resource for a class.
    MULTI_CLASSING: "classes/{index}/multi-classing",
  },
  CLASS_RESOURCE_LISTS: {
    // Get subclasses available for a class.
    SUBCLASSES: "classes/{index}/subclasses",
    // Get spells available for a class.
    SPELLS: "classes/{index}/spells",
    // Get features available for a class.
    FEATURES: "classes/{index}/features",
    // Get proficiencies available for a class.
    PROFICIENCIES: "classes/{index}/proficiencies",
  },
  CLASS_LEVELS: {
    // Get all level resources for a class.
    ALL_LEVEL_RESOURCES: "classes/{index}/levels",
    // Get level resource for a class and level.
    LEVEL_RESOURCE: "classes/{index}/levels/{class_level}",
    // Get features available to a class at the requested level.
    FEATURES: "classes/{index}/levels/{class_level}/features",
    // Get spells of the requested level available to the class.
    SPELLS: "classes/{index}/levels/{spell_level}/spells",
  },
  GAME_MECHANICS: {
    // Get a condition by index.
    CONDITION: "conditions/{index}",
    // Get a damage type by index.
    DAMAGE_TYPE: "damage-types/{index}",
    // Get a magic school by index.
    MAGIC_SCHOOL: "magic-schools/{index}",
  },
  EQUIPMENT: {
    // Get an equipment item by index.
    EQUIPMENT: "equipment/{index}",
    // Get an equipment category by index.
    EQUIPMENT_CATEGORY: "equipment-categories/{index}",
    // Get a magic item by index.
    MAGIC_ITEM: "magic-items/{index}",
    // Get a weapon property by index.
    WEAPON_PROPERTY: "weapon-properties/{index}",
  },
  FEATS: {
    // Get a feat by index.
    FEAT: "feats/{index}",
  },
  FEATURES: {
    // Get a feature by index.
    FEATURE: "features/{index}",
  },
  MONSTERS: {
    // Get list of monsters with optional filtering
    MONSTERS: "monsters",
    // Get monster by index.
    MONSTER: "monsters/{index}",
  },
  RACES: {
    // Get a race by index.
    RACE: "races/{index}",
    // Get subraces available for a race.
    SUBRACE: "races/{index}/subraces",
    // Get proficiencies available for a race.
    PROFICIENCIES: "races/{index}/proficiencies",
    // Get traits available for a race.
    TRAITS: "races/{index}/traits",
  },
  RULES: {
    // Get a rule section by index.
    SECTION: "rule-sections/{index}",
    // Get a rule by index.
    RULE: "rules/{index}",
  },
  SPELLS: {
    // Get list of spells with optional filtering.
    ALL_SPELLS: "spells",
    // Get a spell by index.
    SPELL: "spells/{index}",
  },
  SUBCLASSES: {
    // Get a subclass by index.
    SUBCLASS: "subclasses/{index}",
    // Get features available for a subclass.
    FEATURES: "subclasses/{index}/features",
    // Get all level resources for a subclass.
    ALL_LEVEL_RESOURCES: "subclasses/{index}/levels",
    // Get level resources for a subclass and level.
    LEVEL_RESOURCES: "subclasses/{index}/levels/{subclass_level}",
    // Get features of the requested spell level available to the class.
    FEATURES_LEVEL: "subclasses/{index}/levels/{subclass_level}/features",
  },
  SUBRACES: {
    // Get a subrace by index.
    SUBRACE: "subraces/{index}",
    // Get proficiences available for a subrace.
    PROFICIENCES: "subraces/{index}/proficiencies",
    // Get traits available for a subrace.
    TRAITS: "subraces/{index}/traits",
  },
  TRAITS: {
    // Get a trait by index.
    TRAIT: "traits/{index}",
  },
};
