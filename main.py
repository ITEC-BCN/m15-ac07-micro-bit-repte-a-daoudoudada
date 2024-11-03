eleccionJugador = 0
eleccionMaquina = 0

def on_button_pressed_a():
    global eleccionJugador
    eleccionJugador = 1
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global eleccionMaquina
    eleccionMaquina = randint(1, 3)
    if eleccionMaquina == 1:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
    elif eleccionMaquina == 2:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
    else:
        basic.show_icon(IconNames.SCISSORS)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global eleccionJugador
    eleccionJugador = 3
    basic.show_icon(IconNames.SCISSORS)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global eleccionJugador
    eleccionJugador = 2
    basic.show_leds("""
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)
