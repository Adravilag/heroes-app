export interface Hero {
  id: number;
  name: string;
  role: string;
  universe: string;
  firstAppearance: string;
  image: string;
  secondImage: string[];
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  damageType: 'Physical' | 'Magical' | 'Mixed';
  rangeType: 'Melee' | 'Ranged';
  healthType: 'Low' | 'Medium' | 'High' | 'Very High';
  mobility: 'Low' | 'Medium' | 'High' | 'Very High';
}
