function myFunction () {
    // Randomly pick an LED and set a random bright color
    strip.setPixelColor(Math.randomRange(0, 7), neopixel.rgb(208, 255, 255))
    strip.show()
    basic.pause(input.soundLevel())
    // Randomly clear LEDs to create a twinkling effect
    strip.setPixelColor(Math.randomRange(0, 7), neopixel.rgb(255, 20, 147))
    strip.show()
    basic.pause(input.soundLevel())
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    myFunction()
})
