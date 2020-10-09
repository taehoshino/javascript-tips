const timer = (time)=>{
    return new Promise((resolve, reject)=>{
        if (time < 0 || time > 60){
            return reject("Invalid input!")
        }
        setTimeout(()=>{
            resolve(time + " seconds up!")
        }, time*1000)
    })
}

// Promise chaining
timer(2).then((result)=>{
    console.log(result)
    return timer(3)
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

// Better way using async & await
const callTimer = async ()=>{
    console.log(await timer(2) + " (async)")
    console.log(await timer(3) + " (async)")
}

callTimer()