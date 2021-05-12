function lv1 () {
    on1 = true
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnTile(play, tiles.getTileLocation(15, 19))
    game.showLongText("Good thing they didn't take my gun! I can blow this door off the hinges.", DialogLayout.Bottom)
    badGuy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f f f 2 2 f . . . 
        . . . . f 2 f 2 2 2 f 2 f . . . 
        . . . . f 2 2 f 2 f 2 2 f . . . 
        . . . . f 2 f 2 2 2 f 2 f . . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . f 2 2 f f 2 2 2 f . . . 
        . . . . f 2 f 2 2 f 2 2 f . . . 
        . . . f f 2 2 c c c c c c c c . 
        . . . f 2 e e e c e f e f e . . 
        . . . f 2 2 e 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 f f f 2 2 2 f . . 
        . . . f 2 2 2 f . f 2 2 2 f . . 
        . . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    music.thump.play()
    tiles.setTilemap(tilemap`level5`)
})
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
    facing = 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    if (facing == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, play, -200, 0)
    } else if (facing == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, play, 0, 200)
    } else if (facing == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, play, 200, 0)
    } else if (facing == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, play, 0, -200)
    } else {
    	
    }
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
    facing = 0
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
    facing = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += 3
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
    facing = 1
})
function hallChase () {
    onHall = true
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(play, tiles.getTileLocation(3, 23))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    hallChase()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let projectile2: Sprite = null
let chaseBoy: Sprite = null
let onHall = false
let projectile: Sprite = null
let facing = 0
let badGuy: Sprite = null
let on1 = false
let statusbar: StatusBarSprite = null
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
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(play)
statusbar.setColor(7, 2)
controller.moveSprite(play, 70, 70)
game.onUpdate(function () {
    if (play.y <= 64) {
        if (onHall == true) {
            game.splash("Stop!")
            onHall = false
            chaseBoy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . . 2 b b b b b b b b b 2 . . 
                . . . b 2 2 2 2 2 2 2 2 2 b . . 
                . . . 2 b b b b b b b b b 2 . . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . . b b 2 2 2 2 2 2 2 b b . . 
                . . . b b b b b b b b b b b . . 
                . . . b b c b b b b b c b b . . 
                . . . b b b c b b b c b b b . . 
                . . . b b b c b b b c b b b . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            chaseBoy.setPosition(90, 103)
            game.splash("You're Dead!")
            scene.setBackgroundColor(15)
            lv1()
        }
    }
})
game.onUpdateInterval(randint(1000, 3000), function () {
    if (on1 == true) {
        if (sight.isInSight(
        badGuy,
        play,
        64,
        true
        )) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, badGuy, 0, 0)
            projectile2.follow(play)
        }
    }
})
