input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000; index++) {
        if (input.acceleration(Dimension.X) >= 300) {
            count += 1
        }
        if (input.acceleration(Dimension.X) <= -300) {
            count += 1
        }
        Kcal = count / 30
        basic.pause(200)
        basic.showNumber(count)
    }
})
let Kcal = 0
let count = 0
OLED.init(128, 64)
OLED.clear()
let num = 1
let item = 63
radio.setGroup(1)
basic.forever(function () {
	
})
