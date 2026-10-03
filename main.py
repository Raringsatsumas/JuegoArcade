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

# =========================================================
# 3. EVENTO: EL JUGADOR TOCA EL PORTAL
# =========================================================
# Esta función se ejecuta cuando el jugador toca
# el tile llamado "portal".
# Detecta cuando un sprite de tipo Player toca el portal.

def on_overlap_tile2(sprite2, location2):
    # Termina el juego indicando victoria.
    game.game_over(True)
    # Muestra un efecto visual de nubes.
    game.set_game_over_effect(True, effects.clouds)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        portal
        """),
    on_overlap_tile2)

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