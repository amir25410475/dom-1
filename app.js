
window.onload = () => {
    main()
}

// main function
const main = () => {
    let bgColor = document.getElementById('bgColor')
    let btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        bgColor.style.backgroundColor = bgColorGenerator()
        bgColor.style.color = FontColorGenerator()
    })
}

// background color change function
const bgColorGenerator = () => {
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)

    return `rgba(${red}, ${blue}, ${green})`
}

// font color change function
const FontColorGenerator = () => {
    let red = Math.floor(Math.random() * 200)
    let blue = Math.floor(Math.random() * 100)
    let green = Math.floor(Math.random() * 300)

    return `rgba(${red}, ${blue}, ${green})`
}


