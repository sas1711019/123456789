input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Square)
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # #
            . # . . #
            . # # # #
            `)
    }
})
