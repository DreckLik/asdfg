namespace SpriteKind {
    export const badProjectile = SpriteKind.create()
}
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
    tiles.placeOnTile(badGuy, tiles.getTileLocation(30, 4))
    list.push(badGuy)
    badGuy2 = sprites.create(img`
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
    tiles.placeOnTile(badGuy2, tiles.getTileLocation(4, 29))
    list.push(badGuy2)
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
sprites.onOverlap(SpriteKind.badProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    playStatus.value += -10
    sprite.destroy()
})
function lv2 () {
    onlv2 = true
    on1 = false
    tiles.setTilemap(tilemap`level9`)
    tiles.placeOnTile(play, tiles.getTileLocation(7, 7))
    controller.moveSprite(play, 70, 70)
}
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
    sprite.destroy()
    otherSprite.destroy()
    list.removeAt(list.indexOf(otherSprite))
    if (otherSprite == badGuy) {
        game.showLongText("You may have killed me, but you'll never get both keys!", DialogLayout.Bottom)
    } else if (otherSprite == badGuy2) {
        game.showLongText("Nooo!!!! my key!!!", DialogLayout.Bottom)
        music.baDing.play()
        hasKey = true
        game.showLongText("No I can unlock the door and go upstairs again.", DialogLayout.Bottom)
    }
})
let lv2Baddie: Sprite = null
let projectile2: Sprite = null
let chaseBoy: Sprite = null
let hasKey = false
let onHall = false
let onlv2 = false
let projectile: Sprite = null
let facing = 0
let badGuy2: Sprite = null
let list: Sprite[] = []
let badGuy: Sprite = null
let on1 = false
let playStatus: StatusBarSprite = null
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
playStatus = statusbars.create(20, 4, StatusBarKind.Health)
playStatus.value = 100
playStatus.attachToSprite(play)
playStatus.setColor(7, 2)
controller.moveSprite(play, 70, 70)
game.onUpdate(function () {
    if (hasKey == true) {
        lv2()
    }
})
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
                `, SpriteKind.Food)
            chaseBoy.setPosition(90, 103)
            game.splash("You're Dead!")
            scene.setBackgroundColor(15)
            chaseBoy.destroy()
            lv1()
        }
    }
})
game.onUpdateInterval(randint(500, 2000), function () {
    for (let value of list) {
        if (on1 == true) {
            if (sight.isInSight(
            value,
            play,
            160,
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
                    `, value, 0, 0)
                projectile2.setKind(SpriteKind.badProjectile)
                projectile2.follow(play)
            }
        }
    }
})
forever(function () {
    if (onlv2 == true) {
        pause(randint(3000, 7000))
        lv2Baddie = sprites.create(img`
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
        lv2Baddie.setPosition(play.x, play.y + 120)
    }
})
