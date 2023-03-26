function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(doSomething = "go to the office"){
    return `This Monday, I will ${doSomething}.`;
}
mondayWork();
mondayWork("go to the office")

function wrapAdjective(rando = "*"){
    return function (character = "special"){
        return `You are ${rando}${character}${rando}!`
    }
}
wrapAdjective("*a hard worker*");
wrapAdjective("||a dedicated programmer||")