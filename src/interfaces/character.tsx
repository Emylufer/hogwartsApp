interface wand {
    wood: string, core: string, length: number
}

export interface character{
    actor: string
    alive: boolean
    alternate_actors: Array<string>
    alternate_names: Array<string>
    ancestry: string
    dateOfBirth: string
    eyeColour: string
    gender: string
    hairColour: string
    hogwartsStaff:boolean
    hogwartsStudent: boolean
    house:string
    image:string
    name:string
    patronus:string
    species:string
    wand: wand
    wizard: boolean
    yearOfBirth: number
} 