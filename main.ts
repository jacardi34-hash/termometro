input.onButtonPressed(Button.A, function () {
    basic.showNumber(minimo)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maximo)
})
let maximo = 0
let minimo = 0
let current = input.temperature()
minimo = current
maximo = current
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (true) {
        basic.showIcon(IconNames.Sad)
        music.ringTone(932)
    } else {
        basic.showIcon(IconNames.Sad)
        music.ringTone(932)
        if (!(false)) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (current > maximo) {
        maximo = current
    }
    if (current < minimo) {
        minimo = current
        basic.pause(2000)
    }
})
