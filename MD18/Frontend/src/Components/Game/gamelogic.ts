//draw robots weapon
const weapons = ['scissors', 'rock', 'paper']

export const drawRobotsValue = (() =>{
    const randomNumber = Math.ceil(Math.random() * 3)
    return weapons[randomNumber-1];
})


const scenario:{ [key: string]: string } = {
    'scissors':'rock',
    'rock':'paper',
    'paper':'scissors'
}

//1 is player 0 is robot
export const getWinner = ((val: string[]) =>{
    if(val[1] == val[0]){
        return "Draw"
    }

    for(var key in scenario){
        if(key == val[0]){
            if(scenario[key] == val[1]){
                return 'Win'
            }else{
                return 'Lost'
            }
        }
    }

    return '';
})
