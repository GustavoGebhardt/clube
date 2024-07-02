"use server"

export default async function getEnv(val:number){
    switch(val) {
        case 1:
            return process.env.KEY_LEVEL1
        case 2:
            return process.env.KEY_LEVEL2
        case 3:
            return process.env.KEY_LEVEL3
        case 4:
            return process.env.KEY_LEVEL4
        case 5:
            return process.env.KEY_LEVEL5
    }
}