function power() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi yash")
            resolve();
        }, 1500)
    })
}

function power1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi vivek")
            resolve();
        }, 1400)
    })
}

function power2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi gaurav")
            resolve();
        }, 1300)
    })
}

const result = async () => {
    await power()
    await power1()
    await power2()
}
result()