namespace SpriteKind {
    export const moneda = SpriteKind.create()
    export const flor = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.flor, function on_on_overlap(sprite2: Sprite, otherSprite: Sprite) {
    
    sprites.destroy(otherSprite)
    abeja = sprites.create(img`
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
            `, SpriteKind.Enemy)
    animation.runImageAnimation(abeja, [img`
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
                `, img`
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
                `], 200, true)
    abeja.setPosition(Rosado.x + 80, Rosado.y - 80)
    abeja.follow(Rosado)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moneda, function on_on_overlap2(sprite3: Sprite, otherSprite2: Sprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite2)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap3(sprite4: Sprite, otherSprite3: Sprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite3)
})
//  =========================================================
//  3. EVENTO: EL JUGADOR TOCA EL PORTAL
//  =========================================================
//  Esta función se ejecuta cuando el jugador toca
//  el tile llamado "portal".
//  Detecta cuando un sprite de tipo Player toca el portal.
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        portal
        `, function on_overlap_tile2(sprite22: Sprite, location2: tiles.Location) {
    //  Termina el juego indicando victoria.
    game.gameOver(true)
    //  Muestra un efecto visual de nubes.
    game.setGameOverEffect(true, effects.clouds)
})
let abeja : Sprite = null
let flor2 : Sprite = null
let moneda2 : Sprite = null
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
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`
    myTile0
    `)) {
    moneda2 = sprites.create(img`
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
            `, SpriteKind.moneda)
    animation.runImageAnimation(moneda2, [img`
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
                `, img`
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
                `, img`
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
                `, img`
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
                `, img`
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
                `, img`
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
                `, img`
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
                `, img`
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
                `], 200, true)
    tiles.placeOnTile(moneda2, value)
    tiles.setTileAt(value, assets.tile`
        transparency16
        `)
}
for (let value2 of tiles.getTilesByType(assets.tile`
    myTile1
    `)) {
    flor2 = sprites.create(img`
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
            `, SpriteKind.flor)
    tiles.placeOnTile(flor2, value2)
    tiles.setTileAt(value2, assets.tile`
        transparency16
        `)
}
