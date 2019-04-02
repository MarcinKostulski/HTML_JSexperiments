ns = [1,2,3,4,5,6,7,8,9,10]
strings = ['poof', 'puuf', 'pof', 'puf', 'pef', 'peef', 'pif', 'piif', 'paf', 'paaf']
var persons = {'samara' : 10, 'mako':20, 'alphonse':35, 'rob':48, 'eduardo':51, 'xavier':6, 'stijn':17, 'tom':8, 'personthiny':19, 'tim':10}


console.log(ns.map(x => ns[x]*2))
console.log(strings.map(x => x.toUpperCase()))
console.log(Object.keys(persons).map(x => persons[x]/2))

console.log(ns.filter(x => x>5))
console.log(strings.filter(x => x.length > 3))
console.log(Object.keys(persons).filter(x => persons[x]<18))

console.log(ns.reduce(getSum))
console.log(strings.reduce((acc,x)=> acc += x))
console.log(Object.values(persons).reduce(sumAger))


function getSum(tot, num){
    return tot + num
}

function sumAger(acc,x){
    return acc += x
}