let Grados = 0
basic.forever(function () {
    basic.showNumber(input.compassHeading())
    Grados = input.compassHeading()
    if (Grados < 45 || Grados > 315) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
})
