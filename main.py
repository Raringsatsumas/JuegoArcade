@namespace
class SpriteKind:
    moneda = SpriteKind.create()
    flor = SpriteKind.create()

def on_on_overlap(sprite2, otherSprite):
    global abeja
    sprites.destroy(otherSprite)
    abeja = sprites.create(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """),
        SpriteKind.enemy)
    animation.run_image_animation(abeja,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . f f f f f f f f . . . . .
                . . f 1 1 1 f f 1 1 1 f . . . .
                . . f 1 1 1 1 1 1 1 1 f . . . .
                . . . . 1 1 f f 1 1 . . . . . .
                . . . f f f f f f f f . . . . .
                . . f 5 5 5 f f 5 5 5 f . . . .
                . . f f 5 5 f f 5 5 f f . . . .
                . . f 5 5 5 f f 5 5 5 f . . . .
                . . . f f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . f f f f f f f f . . . . .
                . . f 5 5 5 f f 5 5 5 f . . . .
                . . f f 5 5 f f 5 5 f f . . . .
                . . f 5 5 5 f f 5 5 5 f . . . .
                . . . f f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        200,
        True)
    abeja.set_position(Rosado.x + 80, Rosado.y - 80)
    abeja.follow(Rosado)
sprites.on_overlap(SpriteKind.player, SpriteKind.flor, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    info.change_score_by(1)
    sprites.destroy(otherSprite2)
sprites.on_overlap(SpriteKind.player, SpriteKind.moneda, on_on_overlap2)

# =========================================================
# 1. EVENTO: EL JUGADOR TOCA LA LAVA
# =========================================================
# Esta función se ejecuta cuando el jugador toca
# el tile de lava llamado "myTile".
# Detecta cuando un sprite de tipo Player toca la lava.

def on_overlap_tile(sprite, location):
    # Termina el juego indicando derrota.
    game.game_over(False)
    # Muestra un efecto visual de tormenta de nieve.
    game.set_game_over_effect(False, effects.blizzard)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
        """),
    on_overlap_tile)

# =========================================================
# 2. EVENTO: PRESIONAR A PARA SALTAR
# =========================================================
# Esta función se ejecuta cuando se presiona el botón A.
# Conecta el botón A con la función de salto.

def on_a_pressed():
    # vy representa la velocidad vertical del jugador.
    # Si vy es 0, el personaje no está subiendo ni bajando.
    if Rosado.vy == 0:
        # Un valor negativo en vy hace que el personaje suba.
        # Por eso -150 produce el salto.
        Rosado.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap3(sprite4, otherSprite3):
    info.change_life_by(-1)
    sprites.destroy(otherSprite3)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

# =========================================================
# 3. EVENTO: EL JUGADOR TOCA EL PORTAL
# =========================================================
# Esta función se ejecuta cuando el jugador toca
# el tile llamado "portal".
# Detecta cuando un sprite de tipo Player toca el portal.

def on_overlap_tile2(sprite22, location2):
    # Termina el juego indicando victoria.
    game.game_over(True)
    # Muestra un efecto visual de nubes.
    game.set_game_over_effect(True, effects.clouds)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        portal
        """),
    on_overlap_tile2)

abeja: Sprite = None
flor2: Sprite = None
moneda2: Sprite = None
Rosado: Sprite = None
# Cambia el color de fondo de la escena.
scene.set_background_color(11)
# Crea el sprite del jugador utilizando una imagen
# formada por una cuadrícula de píxeles.
Rosado = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 3 3 3 3 . . . . . .
        . . . . . 3 3 . . 3 3 . . . . .
        . . . . 3 3 . . . . 3 . . . . .
        . . . . 3 . . . . . . 3 . . . .
        . . . 3 3 . . . . . . 3 3 . . .
        . . 3 3 . . . . . . . . 3 . . .
        . 3 3 . . . . . . . . . 3 . . .
        . . 3 3 . . . . . . . . 3 . . .
        . . . 3 3 . 3 3 3 . . . 3 . . .
        . . . . 3 3 3 . 3 3 3 3 3 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
# =========================================================
# 5. MOVIMIENTO DEL JUGADOR
# =========================================================
# Permite mover al jugador con los botones:
# 100 = velocidad horizontal.
# 0   = no hay movimiento vertical con los botones.
# 
# El movimiento vertical se controla mediante
# el salto y la gravedad.
controller.move_sprite(Rosado, 100, 0)
# =========================================================
# 6. CARGAR EL MAPA
# =========================================================
# Carga el tilemap llamado "level1".
# Este mapa contiene elementos como:
# suelo, paredes, lava y portal.
tiles.set_current_tilemap(tilemap("""
    level1
    """))
# =========================================================
# 7. GRAVEDAD
# =========================================================
# ay representa la aceleración vertical.
# Como el valor es positivo, el jugador es empujado
# constantemente hacia abajo.
# 
# Esto simula la gravedad.
Rosado.ay = 200
# =========================================================
# 8. CÁMARA
# =========================================================
# Hace que la cámara siga al jugador
# mientras se desplaza por el mapa.
scene.camera_follow_sprite(Rosado)
info.set_life(5)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile0
    """)):
    moneda2 = sprites.create(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f f f . . . .
            . . . f 5 5 5 5 5 5 5 5 f . . .
            . . f 5 5 5 4 4 4 4 5 5 5 f . .
            . . f 5 4 5 5 5 5 5 5 5 5 f . .
            . . f 5 4 5 5 5 5 5 5 5 5 f . .
            . . f 5 4 5 5 5 5 5 5 5 5 f . .
            . . f 5 4 5 5 5 5 5 5 5 5 f . .
            . . f 5 4 5 5 5 5 5 5 5 5 f . .
            . . f 5 5 4 5 5 5 5 5 5 5 f . .
            . . . f 5 5 5 5 5 5 5 5 f . . .
            . . . . f f f f f f f f . . . .
            . . . . . . . . . . . . . . . .
            """),
        SpriteKind.moneda)
    animation.run_image_animation(moneda2,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f f . . . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . f 5 5 4 4 4 4 5 5 5 f . . .
                . . f 5 5 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 5 4 4 4 5 5 5 5 f . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . f 5 5 4 4 4 5 5 f . . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 5 4 4 5 5 5 f . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . f 5 5 4 5 5 f . . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 5 4 5 5 f . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . f . . . . . . . .
                . . . . . . f 5 f . . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . . f 5 f . . . . . . .
                . . . . . . . f . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . f 5 5 4 5 5 f . . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 4 5 5 5 f . . . . .
                . . . . f 5 5 4 5 5 f . . . . .
                . . . . . f 5 5 5 f . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . f 5 5 4 4 4 5 5 f . . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 5 4 4 5 5 5 f . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . f 5 5 4 4 4 5 5 f . . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 4 5 5 5 5 5 f . . . .
                . . . f 5 5 4 4 5 5 5 f . . . .
                . . . . f 5 5 5 5 5 f . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f f . . . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . f 5 5 4 4 4 4 5 5 5 f . . .
                . . f 5 5 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 4 5 5 5 5 5 5 5 f . . .
                . . f 5 5 4 4 4 5 5 5 5 f . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        200,
        True)
    tiles.place_on_tile(moneda2, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
        """))
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile1
    """)):
    flor2 = sprites.create(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . 5 . 5 . . . . . . .
            . . . . . 5 5 . 5 . . 5 . . . .
            . . . . 5 5 5 5 7 7 5 5 . . . .
            . . . . 5 5 7 5 5 7 7 . . . . .
            . . . 7 5 e e e e e 7 7 5 . . .
            . . 5 7 e e e e e e 5 7 5 . . .
            . . 5 7 7 e e e e e e 5 5 5 . .
            . . 5 7 7 e e e e e 5 5 5 . . .
            . . . 7 7 e e 5 7 7 7 5 5 . . .
            . . . 5 5 7 7 7 7 5 5 . . . . .
            . . . 5 5 5 5 5 5 . . . . . . .
            . . . . . . 4 4 . . . . . . . .
            . . . . . . . 4 . . . . . . . .
            . . . . . . . 4 . . . . . . . .
            . . . . . . 4 4 . . . . . . . .
            """),
        SpriteKind.flor)
    tiles.place_on_tile(flor2, value2)
    tiles.set_tile_at(value2, assets.tile("""
        transparency16
        """))