interface Target {
    id: string;
    value: number;
    description: string;
    icon: string;
}

const randomElement = <T>(list: T[]) => {
    return list[Math.floor(Math.random() * list.length)]
}

const adj = ['stovetop', 'watercooler', 'flightless', 'rainyday']
const noun = ['bagel', 'teakettle', 'spoon', 'bicycle', 'postcard']

const randomTarget = () => {
    return {
        id: `${Math.random()}::${Math.random()}`,
        value: Math.ceil(Math.random() * 10),
        description: `${randomElement(adj)} ${randomElement(noun)}`,
        icon: 'Placeholder'
    }
}

export { randomTarget }
export type { Target }