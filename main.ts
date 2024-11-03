let eleccionJugador = 0
let eleccionMaquina = 0
function determinarGanador () {
    if (eleccionJugador == eleccionMaquina) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (eleccionJugador == 1 && eleccionMaquina == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (eleccionJugador == 3 && eleccionMaquina == 2) {
        basic.showIcon(IconNames.Yes)
    } else if (eleccionJugador == 2 && eleccionMaquina == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
}
input.onButtonPressed(Button.A, function () {
    eleccionJugador = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    determinarGanador()
})
input.onGesture(Gesture.Shake, function () {
    eleccionMaquina = randint(1, 3)
    if (eleccionMaquina == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (eleccionMaquina == 2) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    eleccionJugador = 3
    basic.showIcon(IconNames.Scissors)
    determinarGanador()
})
input.onButtonPressed(Button.B, function () {
    eleccionJugador = 2
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    determinarGanador()
})
