export interface HeroData {
  id: number;
  key: string;
  nameKey: string;
  role: string;
  universe: string;
  firstAppearance: string;
  image: string;
  secondImage: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  damageType: 'Physical' | 'Magical' | 'Mixed';
  rangeType: 'Melee' | 'Ranged';
  healthType: 'Low' | 'Medium' | 'High' | 'Very High';
  mobility: 'Low' | 'Medium' | 'High' | 'Very High';
}

// Función para generar automáticamente los héroes a partir de los assets
function generateHeroesFromAssets(): HeroData[] {
  // Lista de archivos de retrato extraída de assets/heroportraits
  const portraitFiles = [
    'storm_ui_glues_draft_portrait_abathur.png',
    'storm_ui_glues_draft_portrait_alarak.png',
    'storm_ui_glues_draft_portrait_alexstrasza.png',
    'storm_ui_glues_draft_portrait_amazon.png',
    'storm_ui_glues_draft_portrait_ana.png',
    'storm_ui_glues_draft_portrait_anduin.png',
    'storm_ui_glues_draft_portrait_anubarak.png',
    'storm_ui_glues_draft_portrait_artanis.png',
    'storm_ui_glues_draft_portrait_arthas.png',
    'storm_ui_glues_draft_portrait_auriel.png',
    'storm_ui_glues_draft_portrait_azmodan.png',
    'storm_ui_glues_draft_portrait_barbarian.png',
    'storm_ui_glues_draft_portrait_butcher.png',
    'storm_ui_glues_draft_portrait_chen.png',
    'storm_ui_glues_draft_portrait_cho.png',
    'storm_ui_glues_draft_portrait_chromie.png',
    'storm_ui_glues_draft_portrait_deathwing.png',
    'storm_ui_glues_draft_portrait_deckard.png',
    'storm_ui_glues_draft_portrait_dehaka.png',
    'storm_ui_glues_draft_portrait_demonhunter.png',
    'storm_ui_glues_draft_portrait_diablo.png',
    'storm_ui_glues_draft_portrait_dva.png',
    'storm_ui_glues_draft_portrait_faeriedragon.png',
    'storm_ui_glues_draft_portrait_falstad.png',
    'storm_ui_glues_draft_portrait_fenix.png',
    'storm_ui_glues_draft_portrait_firebat.png',
    'storm_ui_glues_draft_portrait_gall.png',
    'storm_ui_glues_draft_portrait_garrosh.png',
    'storm_ui_glues_draft_portrait_gazlowe.png',
    'storm_ui_glues_draft_portrait_genji.png',
    'storm_ui_glues_draft_portrait_genngreymane.png',
    'storm_ui_glues_draft_portrait_guldan.png',
    'storm_ui_glues_draft_portrait_hanzo.png',
    'storm_ui_glues_draft_portrait_hogger.png',
    'storm_ui_glues_draft_portrait_illidan.png',
    'storm_ui_glues_draft_portrait_imperius.png',
    'storm_ui_glues_draft_portrait_jaina.png',
    'storm_ui_glues_draft_portrait_johanna.png',
    'storm_ui_glues_draft_portrait_junkrat.png',
    'storm_ui_glues_draft_portrait_kaelthas.png',
    'storm_ui_glues_draft_portrait_kelthuzad.png',
    'storm_ui_glues_draft_portrait_kerrigan.png',
    'storm_ui_glues_draft_portrait_l90etc.png',
    'storm_ui_glues_draft_portrait_leoric.png',
    'storm_ui_glues_draft_portrait_lili.png',
    'storm_ui_glues_draft_portrait_lostvikings.png',
    'storm_ui_glues_draft_portrait_lucio.png',
    'storm_ui_glues_draft_portrait_lunara.png',
    'storm_ui_glues_draft_portrait_maiev.png',
    'storm_ui_glues_draft_portrait_malfurion.png',
    'storm_ui_glues_draft_portrait_malganis.png',
    'storm_ui_glues_draft_portrait_malthael.png',
    'storm_ui_glues_draft_portrait_medic.png',
    'storm_ui_glues_draft_portrait_medivh.png',
    'storm_ui_glues_draft_portrait_meiow.png',
    'storm_ui_glues_draft_portrait_mephisto.png',
    'storm_ui_glues_draft_portrait_monk.png',
    'storm_ui_glues_draft_portrait_muradin.png',
    'storm_ui_glues_draft_portrait_murky.png',
    'storm_ui_glues_draft_portrait_necromancer.png',
    'storm_ui_glues_draft_portrait_nexushunter.png',
    'storm_ui_glues_draft_portrait_nova.png',
    'storm_ui_glues_draft_portrait_orphea.png',
    'storm_ui_glues_draft_portrait_probius.png',
    'storm_ui_glues_draft_portrait_ragnaros.png',
    'storm_ui_glues_draft_portrait_raynor.png',
    'storm_ui_glues_draft_portrait_rehgar.png',
    'storm_ui_glues_draft_portrait_rexxar.png',
    'storm_ui_glues_draft_portrait_samuro.png',
    'storm_ui_glues_draft_portrait_sgthammer.png',
    'storm_ui_glues_draft_portrait_stitches.png',
    'storm_ui_glues_draft_portrait_stukov.png',
    'storm_ui_glues_draft_portrait_sylvanas.png',
    'storm_ui_glues_draft_portrait_tassadar.png',
    'storm_ui_glues_draft_portrait_thrall.png',
    'storm_ui_glues_draft_portrait_tracer.png',
    'storm_ui_glues_draft_portrait_tychus.png',
    'storm_ui_glues_draft_portrait_tyrael.png',
    'storm_ui_glues_draft_portrait_tyrande.png',
    'storm_ui_glues_draft_portrait_uther.png',
    'storm_ui_glues_draft_portrait_valeera.png',
    'storm_ui_glues_draft_portrait_varian.png',
    'storm_ui_glues_draft_portrait_whitemane.png',
    'storm_ui_glues_draft_portrait_witchdoctor.png',
    'storm_ui_glues_draft_portrait_wizard.png',
    'storm_ui_glues_draft_portrait_yrel.png',
    'storm_ui_glues_draft_portrait_zagara.png',
    'storm_ui_glues_draft_portrait_zarya.png',
    'storm_ui_glues_draft_portrait_zeratul.png',
    'storm_ui_glues_draft_portrait_zuljin.png'
  ];

  // Mapeo de nombres de archivo a información de héroes
  const heroMapping: { [key: string]: { 
    nameKey: string; 
    role: string; 
    universe: string; 
    firstAppearance: string; 
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
    damageType: 'Physical' | 'Magical' | 'Mixed';
    rangeType: 'Melee' | 'Ranged';
    healthType: 'Low' | 'Medium' | 'High' | 'Very High';
    mobility: 'Low' | 'Medium' | 'High' | 'Very High';
  } } = {
    'abathur': { 
      nameKey: 'Abathur', 
      role: 'Specialist', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft II: Heart of the Swarm (2013)', 
      difficulty: 'Very Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'alarak': { 
      nameKey: 'Alarak', 
      role: 'Assassin', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft II: Legacy of the Void (2015)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'alexstrasza': { 
      nameKey: 'Alexstrasza', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft II: Beyond the Dark Portal (1996)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'amazon': { 
      nameKey: 'Cassia', 
      role: 'Assassin', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo II (2000)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'ana': { 
      nameKey: 'Ana', 
      role: 'Support', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'anduin': { 
      nameKey: 'Anduin', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: The Burning Crusade (2007)', 
      difficulty: 'Easy',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'anubarak': { 
      nameKey: 'Anub\'arak', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'High'
    },
    'artanis': { 
      nameKey: 'Artanis', 
      role: 'Warrior', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft: Brood War (1998)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'arthas': { 
      nameKey: 'Arthas', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Easy',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Very High',
      mobility: 'Low'
    },
    'auriel': { 
      nameKey: 'Auriel', 
      role: 'Support', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'azmodan': { 
      nameKey: 'Azmodan', 
      role: 'Specialist', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Easy',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'High',
      mobility: 'Low'
    },
    'barbarian': { 
      nameKey: 'Sonya', 
      role: 'Warrior', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Easy',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'butcher': { 
      nameKey: 'The Butcher', 
      role: 'Assassin', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo (1997)', 
      difficulty: 'Easy',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Low'
    },
    'chen': { 
      nameKey: 'Chen', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'High'
    },
    'cho': { 
      nameKey: 'Cho', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: Mists of Pandaria (2012)', 
      difficulty: 'Very Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Very High',
      mobility: 'Low'
    },
    'chromie': { 
      nameKey: 'Chromie', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: The Burning Crusade (2007)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'deathwing': { 
      nameKey: 'Deathwing', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft II: Tides of Darkness (1995)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Very High',
      mobility: 'Low'
    },
    'deckard': { 
      nameKey: 'Deckard Cain', 
      role: 'Support', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo (1997)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'dehaka': { 
      nameKey: 'Dehaka', 
      role: 'Warrior', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft II: Heart of the Swarm (2013)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Very High'
    },
    'demonhunter': { 
      nameKey: 'Valla', 
      role: 'Assassin', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Easy',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'diablo': { 
      nameKey: 'Diablo', 
      role: 'Warrior', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo (1997)', 
      difficulty: 'Easy',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Low'
    },
    'dva': { 
      nameKey: 'D.Va', 
      role: 'Warrior', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'High'
    },
    'faeriedragon': { 
      nameKey: 'Brightwing', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'falstad': { 
      nameKey: 'Falstad', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft II: Tides of Darkness (1995)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'High'
    },
    'fenix': { 
      nameKey: 'Fenix', 
      role: 'Warrior', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'firebat': { 
      nameKey: 'Blaze', 
      role: 'Warrior', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'gall': { 
      nameKey: 'Gall', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: Mists of Pandaria (2012)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'garrosh': { 
      nameKey: 'Garrosh', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: The Burning Crusade (2007)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'gazlowe': { 
      nameKey: 'Gazlowe', 
      role: 'Specialist', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'genji': { 
      nameKey: 'Genji', 
      role: 'Assassin', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Low',
      mobility: 'High'
    },
    'genngreymane': { 
      nameKey: 'Greymane', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: Cataclysm (2010)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'guldan': { 
      nameKey: 'Gul\'dan', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft: Orcs & Humans (1994)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'hanzo': { 
      nameKey: 'Hanzo', 
      role: 'Assassin', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'hogger': { 
      nameKey: 'Hogger', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Low'
    },
    'illidan': { 
      nameKey: 'Illidan', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'High'
    },
    'imperius': { 
      nameKey: 'Imperius', 
      role: 'Warrior', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'jaina': { 
      nameKey: 'Jaina', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'johanna': { 
      nameKey: 'Johanna', 
      role: 'Warrior', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III: Reaper of Souls (2014)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Low'
    },
    'junkrat': { 
      nameKey: 'Junkrat', 
      role: 'Assassin', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'kaelthas': { 
      nameKey: 'Kael\'thas', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'kelthuzad': { 
      nameKey: 'Kel\'Thuzad', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'kerrigan': { 
      nameKey: 'Kerrigan', 
      role: 'Assassin', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'High'
    },
    'l90etc': { 
      nameKey: 'E.T.C.', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'leoric': { 
      nameKey: 'Leoric', 
      role: 'Warrior', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo (1997)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Low'
    },
    'lili': { 
      nameKey: 'Li Li', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: Mists of Pandaria (2012)', 
      difficulty: 'Easy',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'lostvikings': { 
      nameKey: 'The Lost Vikings', 
      role: 'Specialist', 
      universe: 'Classic Blizzard', 
      firstAppearance: 'The Lost Vikings (1993)', 
      difficulty: 'Medium',
      damageType: 'Mixed',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'lucio': { 
      nameKey: 'Lúcio', 
      role: 'Support', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'High'
    },
    'lunara': { 
      nameKey: 'Lunara', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: Warlords of Draenor (2014)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'maiev': { 
      nameKey: 'Maiev', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'High'
    },
    'malfurion': { 
      nameKey: 'Malfurion', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'malganis': { 
      nameKey: 'Mal\'Ganis', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'malthael': { 
      nameKey: 'Malthael', 
      role: 'Assassin', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III: Reaper of Souls (2014)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'medic': { 
      nameKey: 'Lt. Morales', 
      role: 'Support', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'medivh': { 
      nameKey: 'Medivh', 
      role: 'Specialist', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft: Orcs & Humans (1994)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'meiow': { 
      nameKey: 'Mei', 
      role: 'Assassin', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'mephisto': { 
      nameKey: 'Mephisto', 
      role: 'Assassin', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo II (2000)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'monk': { 
      nameKey: 'Kharazim', 
      role: 'Support', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III: Reaper of Souls (2014)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'muradin': { 
      nameKey: 'Muradin', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'murky': { 
      nameKey: 'Murky', 
      role: 'Specialist', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Easy',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'High'
    },
    'necromancer': { 
      nameKey: 'Xul', 
      role: 'Specialist', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo II (2000)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'nexushunter': { 
      nameKey: 'Qhira', 
      role: 'Assassin', 
      universe: 'Heroes of the Storm', 
      firstAppearance: 'Heroes of the Storm (2019)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'High'
    },
    'nova': { 
      nameKey: 'Nova', 
      role: 'Assassin', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft: Ghost (cancelled)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'orphea': { 
      nameKey: 'Orphea', 
      role: 'Assassin', 
      universe: 'Heroes of the Storm', 
      firstAppearance: 'Heroes of the Storm (2018)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'probius': { 
      nameKey: 'Probius', 
      role: 'Specialist', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft II: Legacy of the Void (2015)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'ragnaros': { 
      nameKey: 'Ragnaros', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'raynor': { 
      nameKey: 'Raynor', 
      role: 'Assassin', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Medium'
    },
    'rehgar': { 
      nameKey: 'Rehgar', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: The Burning Crusade (2007)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'rexxar': { 
      nameKey: 'Rexxar', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'samuro': { 
      nameKey: 'Samuro', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: The Frozen Throne (2003)', 
      difficulty: 'Hard',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'High'
    },
    'sgthammer': { 
      nameKey: 'Sgt. Hammer', 
      role: 'Specialist', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'High',
      mobility: 'Low'
    },
    'stitches': { 
      nameKey: 'Stitches', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Low'
    },
    'stukov': { 
      nameKey: 'Stukov', 
      role: 'Support', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft: Brood War (1998)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'sylvanas': { 
      nameKey: 'Sylvanas', 
      role: 'Specialist', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Medium'
    },
    'tassadar': { 
      nameKey: 'Tassadar', 
      role: 'Support', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'thrall': { 
      nameKey: 'Thrall', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'tracer': { 
      nameKey: 'Tracer', 
      role: 'Assassin', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'High'
    },
    'tychus': { 
      nameKey: 'Tychus', 
      role: 'Assassin', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft II: Wings of Liberty (2010)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'tyrael': { 
      nameKey: 'Tyrael', 
      role: 'Warrior', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo II (2000)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'tyrande': { 
      nameKey: 'Tyrande', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'uther': { 
      nameKey: 'Uther', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft III: Reign of Chaos (2002)', 
      difficulty: 'Easy',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'valeera': { 
      nameKey: 'Valeera', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: The Burning Crusade (2007)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Low',
      mobility: 'High'
    },
    'varian': { 
      nameKey: 'Varian', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'whitemane': { 
      nameKey: 'Whitemane', 
      role: 'Support', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft (2004)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'witchdoctor': { 
      nameKey: 'Nazeebo', 
      role: 'Specialist', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'wizard': { 
      nameKey: 'Li-Ming', 
      role: 'Assassin', 
      universe: 'Diablo', 
      firstAppearance: 'Diablo III (2012)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'yrel': { 
      nameKey: 'Yrel', 
      role: 'Warrior', 
      universe: 'Warcraft', 
      firstAppearance: 'World of Warcraft: Warlords of Draenor (2014)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'zagara': { 
      nameKey: 'Zagara', 
      role: 'Specialist', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft II: Heart of the Swarm (2013)', 
      difficulty: 'Medium',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Medium',
      mobility: 'Low'
    },
    'zarya': { 
      nameKey: 'Zarya', 
      role: 'Warrior', 
      universe: 'Overwatch', 
      firstAppearance: 'Overwatch (2016)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'High',
      mobility: 'Medium'
    },
    'zeratul': { 
      nameKey: 'Zeratul', 
      role: 'Assassin', 
      universe: 'Starcraft', 
      firstAppearance: 'StarCraft (1998)', 
      difficulty: 'Hard',
      damageType: 'Magical',
      rangeType: 'Ranged',
      healthType: 'Low',
      mobility: 'Low'
    },
    'zuljin': { 
      nameKey: 'Zul\'jin', 
      role: 'Assassin', 
      universe: 'Warcraft', 
      firstAppearance: 'Warcraft II: Tides of Darkness (1995)', 
      difficulty: 'Medium',
      damageType: 'Physical',
      rangeType: 'Melee',
      healthType: 'Medium',
      mobility: 'Medium'
    }
  };

  // Generar la lista de héroes
  const generatedHeroes = portraitFiles.map((fileName, index) => {
    // Extraer el nombre del héroe del nombre del archivo
    const heroKey = fileName.replace('storm_ui_glues_draft_portrait_', '').replace('.png', '');
    const heroInfo = heroMapping[heroKey];
    
    if (!heroInfo) {
      console.warn(`No mapping found for hero: ${heroKey}`);
      return null;
    }

    return {
      id: index + 1,
      key: heroKey,
      nameKey: heroInfo.nameKey,
      role: heroInfo.role,
      universe: heroInfo.universe,
      firstAppearance: heroInfo.firstAppearance,
      image: `/assets/heroportraits/${fileName}`,
      secondImage: [], // Puede expandirse later si tenemos skins alternativos
      difficulty: heroInfo.difficulty,
      damageType: heroInfo.damageType,
      rangeType: heroInfo.rangeType,
      healthType: heroInfo.healthType,
      mobility: heroInfo.mobility
    };
  }).filter(hero => hero !== null) as HeroData[]; // Filtrar entradas nulas

  return generatedHeroes;
}

// Exportar la lista de héroes generada automáticamente
export const heroesData = generateHeroesFromAssets();
