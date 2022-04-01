// const squre =function(x){
//   return x * x ;
// }

// const squre =(x) =>
// {
//  return x*x
// }
//     const squre =(x) => x*x
// console.log(squre(4))

const event ={
    name:"Birthday Party",
    guestList :['yamini','swathi','kalyani'],
    printGuestList() {
        console.log("Guest for List" +this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' +this.name)
        })
    }
}
event.printGuestList()



console.log('starting up')
console.log('starting...')
setTimeout(()=>{
    console.log('')
})