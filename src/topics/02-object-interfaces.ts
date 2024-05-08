let skills: Array<string> = ["Bash", "Counter", "Healing"];

interface Character {
    name: string;
    hp: number;
    skills: Array<string>;
    hometown?: string
}

const strider: Character= {
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter", "Healing"],
}

strider.hometown = "Gondor";

console.log(skills);
console.table(strider);

export {};