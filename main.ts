namespace SpriteKind {
    export const moneda = SpriteKind.create()
    export const flor = SpriteKind.create()
}
/**
 * Animación del personaje
 * 
 * Este bloque se ejecuta constantemente mientras el juego está corriendo.
 * 
 * - Primero coloca una imagen base al personaje Rosado.
 * 
 * - Si vy < 0, significa que el personaje está subiendo, por lo que cambia a la imagen de salto.
 * 
 * - Si vy > 0, significa que está cayendo, por lo que muestra otra imagen.
 * 
 * - Si no está subiendo ni bajando, usa la posición x para alternar imágenes y simular que camina.
 * 
 * - Finalmente, si vx < 0, significa que el personaje se mueve hacia la izquierda, entonces su imagen se voltea horizontalmente.
 */
/**
 * Victoria del juego
 * 
 * Cuando el jugador Player toca el tile del portal, el juego termina con victoria.
 * 
 * Además, se muestra un efecto visual de nubes (clouds).
 */
/**
 * Tocar la lava / perder
 * 
 * Derrota por lava
 * 
 * Cuando el jugador toca el tile de lava, el juego termina con derrota.
 * 
 * También se muestra el efecto visual blizzard.
 */
/**
 * Inicio del juego
 * 
 * - Define el color de fondo.
 * 
 * - Crea el sprite Rosado como jugador.
 * 
 * - Permite moverlo horizontalmente.
 * 
 * - Carga el tilemap.
 * 
 * - Aplica gravedad con ay = 200.
 * 
 * - La cámara sigue al jugador.
 * 
 * - Establece 5 vidas.
 * 
 * - Recorre las posiciones marcadas para monedas.
 * 
 * - Crea y anima una moneda en cada posición.
 * 
 * - Recorre las posiciones marcadas para flores.
 * 
 * - Crea una flor en cada posición.
 * 
 * - Después reemplaza esas casillas especiales por tiles transparentes.
 */
/**
 * Salto del personaje
 * 
 * Cuando se presiona el botón A, se revisa si la velocidad vertical vy de Rosado es 0.
 * 
 * Si es así, se cambia vy a -150, haciendo que el personaje suba y salte.
 */
/**
 * Flor que activa un enemigo
 * 
 * Cuando el jugador toca una flor, la flor desaparece.
 * 
 * Luego se crea una abeja de tipo Enemy, se le agrega una animación, aparece cerca de Rosado y comienza a seguirlo.
 */
/**
 * Recolectar moneda
 * 
 * Cuando el jugador toca una moneda, el puntaje aumenta en 1.
 * 
 * Después, la moneda desaparece para que no pueda recogerse otra vez.
 */
/**
 * Colisión con enemigo
 * 
 * Cuando Rosado toca un enemigo, primero el enemigo desaparece.
 * 
 * Después se compara la posición vertical y de Rosado con la del enemigo.
 * 
 * - Si Rosado.y < enemigo.y, significa que Rosado está más arriba que el enemigo, así que se interpreta como que cayó encima de él y gana 3 puntos.
 * 
 * - En caso contrario, Rosado pierde 1 vida.
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.flor, function (sprite2, otherSprite) {
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
    animation.runImageAnimation(
    abeja,
    [img`
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
        `,img`
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
        `],
    200,
    true
    )
    abeja.setPosition(Rosado.x + 80, Rosado.y - 80)
    abeja.follow(Rosado)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moneda, function (sprite3, otherSprite2) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite2)
})
// =========================================================
// 1. EVENTO: EL JUGADOR TOCA LA LAVA
// =========================================================
// Esta función se ejecuta cuando el jugador toca
// el tile de lava llamado "myTile".
// Detecta cuando un sprite de tipo Player toca la lava.
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    // Termina el juego indicando derrota.
    game.gameOver(false)
    // Muestra un efecto visual de tormenta de nieve.
    game.setGameOverEffect(false, effects.blizzard)
})
// =========================================================
// 2. EVENTO: PRESIONAR A PARA SALTAR
// =========================================================
// Esta función se ejecuta cuando se presiona el botón A.
// Conecta el botón A con la función de salto.
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // vy representa la velocidad vertical del jugador.
    // Si vy es 0, el personaje no está subiendo ni bajando.
    if (Rosado.vy == 0) {
        // Un valor negativo en vy hace que el personaje suba.
        // Por eso -150 produce el salto.
        Rosado.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite4, otherSprite3) {
    sprites.destroy(otherSprite3)
    if (Rosado.y < otherSprite3.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
// =========================================================
// 3. EVENTO: EL JUGADOR TOCA EL PORTAL
// =========================================================
// Esta función se ejecuta cuando el jugador toca
// el tile llamado "portal".
// Detecta cuando un sprite de tipo Player toca el portal.
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite22, location2) {
    // Termina el juego indicando victoria.
    game.gameOver(true)
    // Muestra un efecto visual de nubes.
    game.setGameOverEffect(true, effects.clouds)
})
let abeja: Sprite = null
let flor2: Sprite = null
let moneda2: Sprite = null
let Rosado: Sprite = null
// Cambia el color de fondo de la escena.
scene.setBackgroundColor(11)
// Crea el sprite del jugador utilizando una imagen
// formada por una cuadrícula de píxeles.
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
// =========================================================
// 5. MOVIMIENTO DEL JUGADOR
// =========================================================
// Permite mover al jugador con los botones:
// 100 = velocidad horizontal.
// 0   = no hay movimiento vertical con los botones.
// 
// El movimiento vertical se controla mediante
// el salto y la gravedad.
controller.moveSprite(Rosado, 100, 0)
// =========================================================
// 6. CARGAR EL MAPA
// =========================================================
// Carga el tilemap llamado "level1".
// Este mapa contiene elementos como:
// suelo, paredes, lava y portal.
tiles.setCurrentTilemap(tilemap`level1`)
// =========================================================
// 7. GRAVEDAD
// =========================================================
// ay representa la aceleración vertical.
// Como el valor es positivo, el jugador es empujado
// constantemente hacia abajo.
// 
// Esto simula la gravedad.
Rosado.ay = 200
// =========================================================
// 8. CÁMARA
// =========================================================
// Hace que la cámara siga al jugador
// mientras se desplaza por el mapa.
scene.cameraFollowSprite(Rosado)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
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
    animation.runImageAnimation(
    moneda2,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    200,
    true
    )
    tiles.placeOnTile(moneda2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile1`)) {
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
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Rosado.setImage(img`
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
        `)
    if (Rosado.vy < 0) {
        Rosado.setImage(img`
            . . . . 3 3 3 3 . . . . . . . . 
            . . . 3 3 . . 3 3 3 3 . . . . . 
            . . . 3 . . . . . . 3 3 3 3 . . 
            . . . 3 . . . . . . . . . 3 3 . 
            . . . . 3 . . 3 3 . . . . 3 . . 
            . . . 3 3 . 3 3 3 3 . . . 3 3 . 
            . . 3 3 . . 3 . . 3 . . . . 3 . 
            . 3 3 . 3 3 . . . 3 . . . . 3 . 
            . 3 3 . 3 . . . . 3 3 . . 3 3 . 
            . . 3 . 3 . . . . . 3 3 . 3 3 . 
            . . 3 3 . . . . . . . 3 3 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Rosado.vy > 0) {
        Rosado.setImage(img`
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . . . 3 . . . . 3 3 . . . 
            . . . . . 3 3 . . . 3 3 . . . . 
            3 3 3 3 3 3 . . . . . 3 3 . . . 
            3 3 3 3 . . . . . . . 3 3 . . . 
            . 3 3 3 3 . . . . . . 3 . . . . 
            . . . . 3 . . . . . . 3 . . . . 
            . . . . 3 . . . . . . 3 . . . . 
            . . . . 3 3 3 . . . . 3 . . . . 
            . . . . . . 3 3 3 3 3 3 . . . . 
            . . . . . . . . . 3 3 . . . . . 
            . . . . . . . . . 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Rosado.x % 2 == 0) {
        Rosado.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . 3 3 . . 3 3 . . . . . 
            . . . . 3 3 . . . . 3 . . . . . 
            . . . . 3 . . . . . . 3 . . . . 
            . . . 3 3 . . . . . . 3 3 . . . 
            . . 3 3 . 3 3 . . . . . 3 . . . 
            . 3 3 3 3 . 3 3 . . . . 3 . . . 
            . . 3 . 3 . . . 3 3 3 . 3 . . . 
            . . . . . . . . 3 . . 3 3 3 . . 
            . . . . . . . . 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (Rosado.vx < 0) {
        Rosado.image.flipX()
    }
})
