controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    play.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b c c c c b b b . . . . 
        . . b b c b b b b c b b . . . . 
        . . c c c c c c c c c c . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b f . . . 
        . . b b b b b b b b b b f f f . 
        . e b b b b b b b b b b . . . . 
        . e b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    play.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b c c c c . . . . 
        . . . . c b c c b b b b . . . . 
        . . . . 7 c b b b c c c . . . . 
        . . . . 7 c c c c b b b . . . . 
        . . . . c b b b b b b b . . . . 
        . . . . . 8 b b b b b b . . . . 
        . . . . f b b b b b b b . . . . 
        . . . . f b b b b b b b . . . . 
        . . . . e b b b b b b b . . . . 
        . . . . . b b b b b b b . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b c c c c b b b . . . . 
        . . b b c b b b b c b b . . . . 
        . . c c c c c c c c c c . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b f . . . 
        . . b b b b b b b b b b f f f . 
        . e b b b b b b b b b b . . . . 
        . e b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b c c b b b b . . . . 
        . . b c c c 7 7 c c c b . . . . 
        . . c 7 7 c 7 7 c 7 7 c . . . . 
        . . c 7 7 c c c c 7 7 c . . . . 
        . . b c c b b b b c c b . . . . 
        . . b b 8 b b b b 8 b b . . . . 
        . . b f f f f f f f f f f f f . 
        . e e e f f f e f e f e . . . . 
        . e e e b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `,img`
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . f 1 1 2 1 1 f 
        . . . . . . . . . f 1 1 2 1 1 f 
        . . . . . . . . . f 1 1 1 1 1 f 
        . . . . . . . . . f f 1 2 1 f f 
        . . . . . . . . . . . f 1 f . . 
        . . b b b b c c b b b b f . . . 
        . . b c c c 7 7 c c c b . . . . 
        . . c 7 7 c 7 7 c 7 7 c . . . . 
        . . c 7 7 c c c c 7 7 c . . . . 
        . . b c c b b b b c c b . . . . 
        . . b b 8 b b b b 8 b b . . . . 
        . . b f f f f f f f f f f f f . 
        . e e e f f f e f e f e . . . . 
        . e e e b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b c c b b b b . . . . 
        . . b c c c 7 7 c c c b . . . . 
        . . c 7 7 c 7 7 c 7 7 c . . . . 
        . . c 7 7 c c c c 7 7 c . . . . 
        . . b c c b b b b c c b . . . . 
        . . b b 8 b b b b 8 b b . . . . 
        . . b f f f f f f f f f f f f . 
        . e e e f f f e f e f e . . . . 
        . e e e b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b c c c c b b b . . . . 
        . . b b c b b b b c b b . . . . 
        . . c c c c c c c c c c . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        . . b b b b b b b b b b f . . . 
        . . b b b b b b b b b b f f f . 
        . e b b b b b b b b b b . . . . 
        . e b b b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    play.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c b b b . . . . . 
        . . . . b b b b c c b c . . . . 
        . . . . c c c b b b c 7 . . . . 
        . . . . b b b c c c c 7 . . . . 
        . . . . b b b b b b b c . . . . 
        . . . . b b b b b b 8 . . . . . 
        . . . . b b b b b b b f . . . . 
        . . . . b b b b b b b f . . . . 
        . . . . b b b b b b b e . . . . 
        . . . . b b b b b b b . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    play.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b c c b b b b . . . . 
        . . b c c c 7 7 c c c b . . . . 
        . . c 7 7 c 7 7 c 7 7 c . . . . 
        . . c 7 7 c c c c 7 7 c . . . . 
        . . b c c b b b b c c b . . . . 
        . . b b 8 b b b b 8 b b . . . . 
        . . b f f f f f f f f f f f f . 
        . e e e f f f e f e f e . . . . 
        . e e e b b b b b b b b . . . . 
        . . b b b b b b b b b b . . . . 
        `)
})
function hallChase () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(play, tiles.getTileLocation(3, 23))
    if (play.y <= 64) {
        game.splash("Stop!")
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 50)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    hallChase()
})
let projectile: Sprite = null
let play: Sprite = null
play = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........bbbccccbbb......
    ........bbcbbbbcbb......
    ........cccccccccc......
    ........bbbbbbbbbb......
    ........bbbbbbbbbb......
    ........bbbbbbbbbb......
    ........bbbbbbbbbbf.....
    ........bbbbbbbbbb......
    ........bbbbbbbbbb......
    ........bbbbbbbbbb......
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(play, tiles.getTileLocation(9, 19))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . b b . . . b b . . . . 
    . . . b b 1 7 b b b 1 7 b . . . 
    . . . 2 b 7 7 b 2 b 7 7 b . . . 
    . . . 2 2 b b 2 2 2 b b 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 1 f 2 2 2 1 f 2 . . . 
    . . . 2 2 f f 2 2 2 f f 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 f f f f 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 17))
scene.cameraFollowSprite(play)
mySprite.vx = 32
pause(5700)
mySprite.setVelocity(0, -32)
pause(1000)
mySprite.destroy()
game.showLongText("I've been trailing him for weeks... It's time", DialogLayout.Bottom)
controller.moveSprite(play, 70, 70)
