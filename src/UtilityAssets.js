let MobileScreenBreakpoint = 376
let TabletScreenBreakpoint = 769

export const UtilityAssets = {

    // responsiveness
    ScreenSize: {
        MobileScreen: function() {
            return window.matchMedia( "(max-width: " + MobileScreenBreakpoint + "px)" ).matches
        }
        ,
        TabletScreen: function() {
            return window.matchMedia( "(max-width: " + TabletScreenBreakpoint + "px)" ).matches
        }
    },
    ScreenBreakpoints: {
        MobileScreen: MobileScreenBreakpoint,
        TabletScreen: TabletScreenBreakpoint,
    },

    // HUD messages
    Messages: {
        Collision: "You can't go there.",
        LockedDoor: "You try to open the door... it's locked.",
        PlayerMissed: "You missed your target!",
        PlayerDead: "Ouch! You are dead.",
        Potion: {
            NoEffect: "The potion had no effect.",
            // Health
            Health1: "You feel a little better.",
            Health2: "Your body regenerates quickly.",
            Health3: "This potion was much needed.",
            // Stamina
            Stamina1: "The potion gave you a small boost of energy.",
            Stamina2: "You're in better shape now.",
            Stamina3: "You feel invigorated.",
            // Mana
            Mana1: "As you drink the potion, a tiny sparkle lights up in your chest.",
            Mana2: "You feel the power of magic.",
            Mana3: "Nice!",
        }

    },
    PartialMessages: {
        Period: ".",
        UnlockDoor: "You unlocked the door with the ",
        MonsterNoticed: " noticed your presence.",
        MonsterAttacking: " is attacking you.",
        MonsterMissed: " tried to attack you and missed their target.",
        MonsterKilled: "You killed ",
        PlayerHit: "You hit ",
    },

    // how much experience does the player need to reach a level
    LevelXP: {
        Level2: 300,
        Level3: 900,
        Level4: 2700,
        Level5: 6500,
        Level6: 14000,
        Level7: 23000,
        Level8: 34000,
        Level9: 48000,
       Level10: 64000,
       Level11: 85000,
       Level12: 100000,
       Level13: 120000,
       Level14: 140000,
       Level15: 165000,
       Level16: 195000,
       Level17: 225000,
       Level18: 265000,
       Level19: 305000,
       Level20: 355000,
    },

    SpellCasterProfiles: {
        MajorSpellCaster: {
            Level1: {
                Cantrip: 2,
                SpellLevel1: 2,
            },
            Level2: {
                Cantrip: 2,
                SpellLevel1: 3,
            },
            Level3: {
                Cantrip: 2,
                SpellLevel1: 4,
                SpellLevel2: 2,
            },
            Level4: {
                Cantrip: 3,
                SpellLevel1: 4,
                SpellLevel2: 3,
            },
            Level5: {
                Cantrip: 3,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 2,
            },
            Level6: {
                Cantrip: 3,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
            },
            Level7: {
                Cantrip: 3,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 1,
            },
            Level8: {
                Cantrip: 3,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 2,
            },
            Level9: {
                Cantrip: 3,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 1,
            },
            Level10: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
            },
            Level11: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
            },
            Level12: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
            },
            Level13: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
                SpellLevel7: 1,
            },
            Level14: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
                SpellLevel7: 1,
            },
            Level15: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
                SpellLevel7: 1,
                SpellLevel8: 1,
            },
            Level16: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
                SpellLevel7: 1,
                SpellLevel8: 1,
            },
            Level17: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
                SpellLevel6: 1,
                SpellLevel7: 1,
                SpellLevel8: 1,
                SpellLevel9: 1,
            },
            Level18: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 3,
                SpellLevel6: 1,
                SpellLevel7: 1,
                SpellLevel8: 1,
                SpellLevel9: 1,
            },
            Level19: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 3,
                SpellLevel6: 2,
                SpellLevel7: 1,
                SpellLevel8: 1,
                SpellLevel9: 1,
            },
            Level20: {
                Cantrip: 4,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 3,
                SpellLevel6: 2,
                SpellLevel7: 2,
                SpellLevel8: 1,
                SpellLevel9: 1,
            },
        },
        MinorSpellCaster: {
            Level1: {
            },
            Level2: {
                SpellLevel1: 2,
            },
            Level3: {
                SpellLevel1: 3,
            },
            Level4: {
                SpellLevel1: 3,
            },
            Level5: {
                SpellLevel1: 4,
                SpellLevel2: 2,
            },
            Level6: {
                SpellLevel1: 4,
                SpellLevel2: 2,
            },
            Level7: {
                SpellLevel1: 4,
                SpellLevel2: 3,
            },
            Level8: {
                SpellLevel1: 4,
                SpellLevel2: 3,
            },
            Level9: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 2,
            },
            Level10: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 2,
            },
            Level11: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
            },
            Level12: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
            },
            Level13: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 1,
            },
            Level14: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 1,
            },
            Level15: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 2,
            },
            Level16: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 2,
            },
            Level17: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 1,
            },
            Level18: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 1,
            },
            Level19: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
            },
            Level20: {
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 3,
                SpellLevel5: 2,
            },
        },
        WeakSpellCaster: {
            Level1: {
            },
            Level2: {
            },
            Level3: {
                SpellKnown: 3,
                SpellLevel1: 2,
            },
            Level4: {
                SpellKnown: 4,
                SpellLevel1: 3,
            },
            Level5: {
                SpellKnown: 4,
                SpellLevel1: 3,
            },
            Level6: {
                SpellKnown: 4,
                SpellLevel1: 3,
            },
            Level7: {
                SpellKnown: 5,
                SpellLevel1: 4,
                SpellLevel2: 2,
            },
            Level8: {
                SpellKnown: 6,
                SpellLevel1: 4,
                SpellLevel2: 2,
            },
            Level9: {
                SpellKnown: 6,
                SpellLevel1: 4,
                SpellLevel2: 2,
            },
            Level10: {
                SpellKnown: 7,
                SpellLevel1: 4,
                SpellLevel2: 3,
            },
            Level11: {
                SpellKnown: 8,
                SpellLevel1: 4,
                SpellLevel2: 3,
            },
            Level12: {
                SpellKnown: 8,
                SpellLevel1: 4,
                SpellLevel2: 3,
            },
            Level13: {
                SpellKnown: 9,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 2,
            },
            Level14: {
                SpellKnown: 10,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 2,
            },
            Level15: {
                SpellKnown: 10,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 2,
            },
            Level16: {
                SpellKnown: 11,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
            },
            Level17: {
                SpellKnown: 11,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
            },
            Level18: {
                SpellKnown: 11,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
            },
            Level19: {
                SpellKnown: 12,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 1,
            },
            Level20: {
                SpellKnown: 13,
                SpellLevel1: 4,
                SpellLevel2: 3,
                SpellLevel3: 3,
                SpellLevel4: 1,
            },
        }
    },

    // idiosyncarcies of each race and subrace
    Races: {
        Dwarf: {
            Name: "dwarf",
            AbilityBoost: {Constitution: 2},
        },
        Elf: {
            Name: "elf",
            AbilityBoost: {Dexterity: 2},
        },
        Halfling: {
            Name: "halfling",
            AbilityBoost: {Dexterity: 2},
        },
        Human: {
            Name: "human",
            AbilityBoost: {
                Constitution: 1,
                Strength: 1,
                Dexterity: 1,
                Intelligence: 1,
            },
        },
        Dragonborn: {
            Name: "dragonborn",
            AbilityBoost: {Strength: 2 /* Charisma: 1 // choose ability? */},
        },
        Gnome: {
            Name: "gnome",
            AbilityBoost: {Intelligence: 2},
        },
        HalfElf: {
            Name: "half-elf",
            AbilityBoost: {/* Charisma: 2, ChooseAbility1: 1, ChooseAbility2: 1 */},
        },
        HalfOrc: {
            Name: "half-orc",
            AbilityBoost: {Strength: 2, Constitution: 1},
        },
        Tiefling: {
            Name: "tiefling",
            AbilityBoost: {Intelligence: 1 /* Charisma: 2 // choose ability? */},
        },

    },
    SubRaces: {
        Dwarf: {
            // the health bonus is added to the player's max health when the character is created and also every time they level up
            HillDwarf: {
                Name: "hill dwarf",
                AbilityBoost: {/* Wisdom: 1 // intelligence? */},
                HealthBonus: 1,
            },
            MountainDwarf: {
                Name: "mountain dwarf",
                AbilityBoost: {Strength: 2}, 
            },
        },
        Elf: {
            // the player can choose the extra cantrip
            HighElf: {
                Name: "high elf",
                AbilityBoost: {Intelligence: 1},
                ExtraCantripKnown: 1,
            },
            WoodElf: {
                Name: "wood elf",
                AbilityBoost: {/* Wisdom: 1 // intelligence? */},
            },
            // the player starts with the dancing lights cantrip plus faerie fire at level 3, and darkness at level 5
            DarkElf: {
                Name: "dark elf",
                AbilityBoost: {/* Charisma: 1 // choose ability? */},
                ExtraCantrip: [/* DancingLights */],
            },
        },
        Halfling: {
            Lightfoot: {
                Name: "light foot",
                AbilityBoost: {/* Charisma: 1 // choose ability? */},
            },
            Stout: {
                Name: "stout",
                AbilityBoost: {Constitution: 1},
            },
        },
        Gnome: {
            ForestGnome: {
                Name: "forest gnome",
                AbilityBoost: {Dexterity: 1},
                ExtraCantrip: [/* MinorIllusion */],
            },
            RockGnome: {
                Name: "rock gnome",
                AbilityBoost: {Constitution: 1},
            },
        },
    },
    
    // idiosyncracies of each class
    /*
        Notes:
            Initial health (at level 1) is equal to the max health boost minus the constitution modifier of the plyaer.
            The health boost granted at each level is a range between 1 and the max health boost below minus the constitution modifier of the player.
            Hit Dice (i.e., the amount of health that is regenerated when the player takes a rest) is a range between 1 and the max health boost.
    */
    Classes: {
        Barbarian: {
            Name: "barbarian",
            MaxHealthBoost: 12,
        },
        Bard: {
            Name: "bard",
            MaxHealthBoost: 8,
        },
        Cleric: {
            Name: "cleric",
            MaxHealthBoost: 8,
        },
        Druid: {
            Name: "druid",
            MaxHealthBoost: 8,
        },
        Fighter: {
            Name: "fighter",
            MaxHealthBoost: 10,
        },
        Monk: {
            Name: "monk",
            MaxHealthBoost: 8,
        },
        Paladin: {
            Name: "paladin",
            MaxHealthBoost: 10,
        },
        Ranger: {
            Name: "ranger",
            MaxHealthBoost: 10,
        },
        Rogue: {
            Name: "rogue",
            MaxHealthBoost: 8,
        },
        Sorcerer: {
            Name: "sorcerer",
            MaxHealthBoost: 6,
        },
        Warlock: {
            Name: "warlock",
            MaxHealthBoost: 8,
        },
        Wizard: {
            Name: "wizard",
            MaxHealthBoost: 6,
        },
    },

    // map size in terms of elements within the array
    WallMapVisibleRange: {
        x: 10,
        y: 7,
    },

    // internal symbols used for map objects
    MapObjects: {
        Wall: "X",
        Door: "D",
        LootContainer: "L",
        Undiscovered: "U",
        Empty: " ",
    },

    // used to move objects based on user-friendly directions
    Directions: {
        North: {
            x: 1,
            y: 0,
        },
        South: {
            x: 1,
            y: 2,
        },
        West: {
            x: 0,
            y: 1,
        },
        East: {
            x: 2,
            y: 1,
        },
    },

    // placeholders for random items in the loot container assets
    GenerateRandomItems: {
        Level1: {
            Level: 1,
            random: true,
        }
    },

    MonsterTypes: {
        GreenSkin: "green skin",
    },

}

// Major spell casters
UtilityAssets.Classes.Cleric.SpellCaster = UtilityAssets.SpellCasterProfiles.MajorSpellCaster
UtilityAssets.Classes.Druid.SpellCaster = UtilityAssets.SpellCasterProfiles.MajorSpellCaster
UtilityAssets.Classes.Sorcerer.SpellCaster = UtilityAssets.SpellCasterProfiles.MajorSpellCaster
UtilityAssets.Classes.Wizard.SpellCaster = UtilityAssets.SpellCasterProfiles.MajorSpellCaster // note: number of cantrips actually differ from template
// Minor spell casters
UtilityAssets.Classes.Paladin.SpellCaster = UtilityAssets.SpellCasterProfiles.MinorSpellCaster
UtilityAssets.Classes.Ranger.SpellCaster = UtilityAssets.SpellCasterProfiles.MinorSpellCaster
UtilityAssets.Classes.Bard.SpellCaster = UtilityAssets.SpellCasterProfiles.MajorSpellCaster

export default UtilityAssets