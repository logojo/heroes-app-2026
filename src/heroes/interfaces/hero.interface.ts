export interface Hero {
    imageUrl: string;
    status: string;
    brand: string;
    hero: string;
    alterego: string;
    ocupation:string;
    afiliation: string;
    description: string;
    habilities: Hability[];
    powers: string[]
    firstAppeared: number;

}

interface Hability {
    name: string;
    level: number;
}