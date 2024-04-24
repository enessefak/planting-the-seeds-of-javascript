// let ucSnSonra = () => {
//     alert("Hello")
// }
// const id = setTimeout(ucSnSonra, 3000);

// let sn = 1
// let birSnAralikla = () => {
//     sn+=1
//     if (sn === 30) {
//         clearInterval(intervalId)
//     }

//     console.log(sn)
// }

// let intervalId = setInterval(birSnAralikla, 1000);

async function veriGetir () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                message: 'Error',
                code: 404,
            })
        }, 2000)
    })
}

const fetchData = async () => {
    try {
        const userInfo = await login(usernName, password)
        const basket = await basket(userInfo.userId)
     
        console.log(data)
    } catch (error) {
        console.log(error.code === 404 ? 'Not Found' : 'Error')
    } finally {
        console.log('Finally')
    }
}

login().then(userInfo => {
    return basket(userInfo.userId)
}).then((basket) => {
    console.log(basket)
}).catch(error => {
    console.log(error)
}).finally(() => { console.log('Finally') })