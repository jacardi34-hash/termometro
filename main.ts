input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maximo)
})
let maximo = 0
let current = input.temperature()
let minimo = current
maximo = current
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (current < 38) {
        basic.showIcon(IconNames.Sad)
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    if (current > maximo) {
        maximo = current
    }
    if (current < minimo) {
        minimo = current
        basic.pause(2000)
    }
})
