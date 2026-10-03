//  =========================================================
//  1. EVENTO: EL JUGADOR TOCA LA LAVA
//  =========================================================
//  Esta función se ejecuta cuando el jugador toca
//  el tile de lava llamado "myTile".
//  Detecta cuando un sprite de tipo Player toca la lava.
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile
        `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    //  Termina el juego indicando derrota.
    game.gameOver(false)
    //  Muestra un efecto visual de tormenta de nieve.
    game.setGameOverEffect(false, effects.blizzard)
})
//  =========================================================
//  2. EVENTO: PRESIONAR A PARA SALTAR
//  =========================================================
//  Esta función se ejecuta cuando se presiona el botón A.
//  Conecta el botón A con la función de salto.
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    //  vy representa la velocidad vertical del jugador.
    //  Si vy es 0, el personaje no está subiendo ni bajando.
    if (Rosado.vy == 0) {
        //  Un valor negativo en vy hace que el personaje suba.
        //  Por eso -150 produce el salto.
        Rosado.vy = -150
    }
    
})
//  =========================================================
//  3. EVENTO: EL JUGADOR TOCA EL PORTAL
//  =========================================================
//  Esta función se ejecuta cuando el jugador toca
//  el tile llamado "portal".
//  Detecta cuando un sprite de tipo Player toca el portal.
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        portal
        `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    //  Termina el juego indicando victoria.
    game.gameOver(true)
    //  Muestra un efecto visual de nubes.
    game.setGameOverEffect(true, effects.clouds)
})
let Rosado : Sprite = null
//  Cambia el color de fondo de la escena.
scene.setBackgroundColor(11)
//  Crea el sprite del jugador utilizando una imagen
//  formada por una cuadrícula de píxeles.
Rosado = sprites.create(img`
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
        `, SpriteKind.Player)
//  =========================================================
//  5. MOVIMIENTO DEL JUGADOR
//  =========================================================
//  Permite mover al jugador con los botones:
//  100 = velocidad horizontal.
//  0   = no hay movimiento vertical con los botones.
//  
//  El movimiento vertical se controla mediante
//  el salto y la gravedad.
controller.moveSprite(Rosado, 100, 0)
//  =========================================================
//  6. CARGAR EL MAPA
//  =========================================================
//  Carga el tilemap llamado "level1".
//  Este mapa contiene elementos como:
//  suelo, paredes, lava y portal.
tiles.setCurrentTilemap(tilemap`
    level1
    `)
//  =========================================================
//  7. GRAVEDAD
//  =========================================================
//  ay representa la aceleración vertical.
//  Como el valor es positivo, el jugador es empujado
//  constantemente hacia abajo.
//  
//  Esto simula la gravedad.
Rosado.ay = 200
//  =========================================================
//  8. CÁMARA
//  =========================================================
//  Hace que la cámara siga al jugador
//  mientras se desplaza por el mapa.
scene.cameraFollowSprite(Rosado)
