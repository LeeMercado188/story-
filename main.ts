scene.setBackgroundColor(2)
namespace SpriteKind {
    export const people = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    Inside = true
    Town = false
    tiles.placeOnTile(PLAYER_1, tiles.getTileLocation(7, 14))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    people.sayText("Excuse me", 500, false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(PLAYER_1, tiles.getTileLocation(3, 13))
    citizens = [
    img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 6 6 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 6 6 6 6 6 6 e e f . . 
        . . f e 6 f f f f f f 6 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 6 6 6 6 6 6 f 4 e . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,
    img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 e f . . . . 
        . . . f 1 e e e e e 1 e f . . . 
        . . . f e e f f f f e 1 f . . . 
        . . . f e f 1 d d 1 f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 3 d d 3 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 5 9 9 5 9 d f f . . 
        . . f d d f 9 5 5 9 f d d f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 5 9 9 5 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `,
    img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b 2 2 2 2 b f e e f . 
        . . e 4 c 2 2 2 2 2 2 c 4 e . . 
        . . e f b 2 b 2 b 2 b b f e . . 
        . . . f f 1 2 1 2 1 2 f f . . . 
        . . . . . f f b b f f . . . . . 
        `,
    img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,
    img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,
    img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,
    img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `
    ]
    people = sprites.create(img`
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
        `, SpriteKind.people)
    Inside = false
    Town = true
})
let citizens: Image[] = []
let people: Sprite = null
let Town = false
let Inside = false
let PLAYER_1: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffff22ffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff2fffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff2fffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff22222fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff22222fffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff22f222ffffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff22fff22fffffffffff22ffff2222ffffffffff2222ffffffffffffffffffffffffffffffff2f2fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff222fff22ffffffffff222ffff2222fffffffff2222222ffffffff222fffffffffff2ffffff2ff2fffffffffff22ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff2222fff222ffffffff2222fffff222fffffffff222222222222ffffff22ffffffff22ffffff2ff2fffffffffff22ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff2222ffff222fffffff2222ffffff222ffffffff222f2222222222fffffff2fffffff22fffff2f2ffffffffffff222ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff2222fffff222fffffff222fffffff222ffffffff22fff22222222222fffff2fffff2f2ffffff2f22fffffffffff222ffffffff222222ffffffffffffffffffffffff
    fffffffffffffffffffffffffff22222fffff222ffffff2222fffffff222fffffff222fffffffffffff22ffff2ffff2222ffffffff22ffffffffff22222fffffff22222222ffffffffffffffffffffff
    ffffffffffffffffffffffffff222222ffff2222ffffff222ffffffff222fffffff22ffffffffffffffffff22fffff222fffffffff22fffffffffff2222ffffff22222222222ffffffffffffffffffff
    fffffffffffffffffffffffff222222fffff2222ffffff22fffffffff222ffffff222ffffffffffffffffff2fffff2222fffffffff22fffffffffff222fffffff2222222222222ffffffffffffffffff
    ffffffffffffffffffffffff222222ffffff2222fffff222ffffffff2222ffffff222fffffffffffffffff2ffffff222ffffffffff22ffffffffff2222ffffff2222ffff222222222fffffffffffffff
    fffffffffffffffffffffff222222fffffff2222ffff222ffffffff22222fffff222ffffffffffffffffffffffff2222ffffffffff22ffffffffff2222ffffff2222ffffff22222fffff2fffffffffff
    ffffffffffffffffffffff22222fffffffff2222fff222ffffffff22222fffff2222ffffffffffffffffffffffff2222ffffffffff22fffffffff22222ffffff2222ffffffff2222ffffffffffffffff
    fffffffffffffffffffff22222ffffffffff2222fff222fffffff22222ffffff2222fffffffffffffffffffffff22222fffffffff222ffffffff222222ffffff2222ffffffffffffffffffffffffffff
    ffffffffffffffffffff222222ffffffffff2222ff222ffffff222222ffffff22222fffffffffffffffffffffff22222fffffffff222fffffff2222222ffffff2222fffffffffff2ffffffffffffffff
    fffffffffffffffffff22222fffffffffff2222fff222ffff2222222fffffff2222ffffffffffffffffffffffff22222fffffffff222ffffff22222222ffffff22222fffffffffffffffffffffffffff
    ffffffffffffffffff22222ffffffffffff2222fff22222222222fffffffff22222fffffffffffffffffffffff222222fffffffff22222ffff22222222fffffff2222fffffffffffffffffffffffffff
    fffffffffffffffff222222ffffffffffff2222ff2222222222fffffffffff22222fffffffffffffffffffffff22ff22ffffffff222222ffff22222222fffffff22222ffffffffffffffffffffffffff
    ffffffffffffffff222222ffffffffffff2222ff222222222fffffffffffff2222ffffffffffffffffffffffff22ff22ffffffff2222222ff222222222ffffffff22222fffffffffffffffffffffffff
    fffffffffffffff222222fffffffffffff2222ff22f222ffffffffffffffff2222fffffffffffffffffffffff222ff22ffffffff22ff222ff2222f2222fffffffff22222ffffffffffffffffffffffff
    ffffffffffffff222222fffffffffffff2222ff222ff22fffffffffffffff22222fffffffffffffffffffffff222ff222fffffff22ff222ff2222ff222ffffffffff22222fffffffffffffffffffffff
    fffffffffffff222222ffffffffffff22222fff22fff222fffffffffffff22222ffffffffffffffffffffffff22fff222ff222ff22ff2222f222fff222fffffffffff22222ffffffffffffffffffffff
    fffffffffffff22222fffffffffff2222222ff222fff222fffffffffffff2222222222222fffffffffffffff222fff2222222ff222ff22222222fff222ffffffffffff222222ffffffffffffffffffff
    fffffffffff222222fffffffffff2222222fff22ffff222fffffffffffff2222f22222222fffffffffffffff2222222222fffff222fff2222222fff222fffffffffffff22222ffffffffffffffffffff
    ffffffffff222222ffffffffff222222222ff222ffff2222ffffffffffff2222ffff22222222ffffffffffff222222222ffffff222fff222222ffff222fffffffffffffff2222fffffffffffffffffff
    fffffffff222222fffffffff2222222222fff22ffffff222ffffffffffff2222ffffffff2222fffffffffff222222f222ffffff222fff222222ffff222ffffffffffffffff2222ffffffffffffffffff
    ffffffff2f2222ffffffff22222222222fff22fffffff2222ffffffffff2222ffffffffffffffffffffff22222ffff222ffffff222ffff2222fffff222fffffffffffffffff2222fffffffffffffffff
    ff2fffff22222ffffff2222222222222fff222fffffff2222ffffffffff2222ffffffffffffffffffffffff222ffff222ffffff222fffff222fffff222ffffffffffffffffff222fffffffffffffffff
    f2fffff22222ffff22222222222222fffff222fffffff2222ffffffffff2222fffffffffffffffffffffff222fffff2222ffff222ffffff22ffffff222ffffffffffffffffff2222ffffffffffffffff
    f2fffff2222222222222222222222fffff222fffffffff222ffffffffff2222fffffffffffffffffffffff222fffff2222ffff222fffffff2ffffff222fffffffffffffffffff222ffffffffffffffff
    f2ffff2222222222222ffffffffffffff2222fffffffff222fffffffff2222ffffffffffffffffffffffff222fffff2222ffff22fffffffffffffff222ffffffffffffffffff22222fffffffffffffff
    f2fff2222222222ffffffffffffffffff222fffffffffff222ffffffff2222ffffffffffffffffffffffff222ffffff22fffff22fffffffffffffff22fffffffffffffffffff22222fffffffffffffff
    f2ff22222222fffffffffffffffffffff2fffffffffffff222ffffffff2222fffffffffffffffffffffff222fffffff22fffff22fffffffffffffff22ffffffffffffffffff22222ffffffffffffffff
    f2ff222fffffffffffffffffffffffffffffffffffffffff22ffffffff2222fffffffffffffffffffffff222fffffff22fffff22fffffffffffffff22fffffffffffff2222222222ffffffffffffffff
    f2f22f2fffffffffffffffffffffffffffffffffffffffff222fffffff222ffffffffffffffffffffffff222fffffff2ffffff22fffffffffffffff22fffffffffff22222222222fffffffffffffffff
    f2222fffffffffffffffffffffffffffffffffffffffffff222fffffff222ffffffffffffffffffffffff22ffffffff2ffffff22fffffffffffffff22fffffffff222222222222ffffffffffffffffff
    f222ffffffffffffffffffffffffffffffffffffffffffff222fffffff22222fffffffffffffffffffff222ffffffff2ffffff22fffffffffffffff22fffffffffff22222222ffffffffffffffffffff
    f2fffffffffffffffffffffffffffffffffffffffffffffff222fffffff2f222222fffffffffffffffff22fffffffff2ffffff2fffffffffffffffffffffffffffffffff2fffffffffffffffffffffff
    f2ffffff2ffffffffffffffffffffffffffffffffffffffffff2fffffffffff22222222fffffffffffff22ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f2ffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f2f222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffff2fffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffff
    f22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffff22ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fff2fffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffff2f2ff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffff2fffffff2fff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffff2fffffff2f22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ff2fffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffff22f2fffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff22ff222ffffffffff2ffffff22fffffffffff2f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff2fffffff222ffffffff2fffffffffff222222f22ffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff22fffffffffff22ffff22f2ffffffffffffffff222fffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff2f2222ffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff22f222ffffffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2222f22ffffffffff2ffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2222fff2222fffffffffffffffff2222222fffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff22f22fffffff222fffffffffffff22222ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffff22ffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2fffffffffff22ffffff2ffffffffffffffffffffffffffffffff2f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2fffffffffff22ffffffffffffffffffffffffffffffffffffff22f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2ffffffffff222ffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2fffffffffff22ffffffffffffffffffffffffffffffffffffff2f22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2fffffff2ff222ffffffffffffffffffffffffffffffffffffffffffff2ff2ffffffffffffff222ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2ffffffffff222ffffffffffffffffffffffffffffffffffffffffffff2f22ffffffffff2222fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2ffffff22222ffffffffffffffffffffffffffffffffffffffffffffff22f2ffffff2222fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2ffffff2f2222fffffffffffffffffffffffffffffffffffffffffffff22f2fff222222222fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2ffffff222f222ffffffffffffffffffffffffffffffffffffffffffff2ff2ff222222fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2fffffffff222fffffffffffffffffffffffffffffffffffffffffffff222f2222222ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff2222f2ffffffffffffffffffffffffffffffffffffffffffff2f22222222fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffff22ff2222fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffff22ffffffffffffffffffffffffffffffffffffff222fff2ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffff2222ffffffffffffffffffffffffffff2fffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffff22f22fffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffff2222222fffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffff22ffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffff22ff2ffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffff222ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffff2ff22ffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22f222222ffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22f2fffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffff22ffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff2222ff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Wake Up", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . 2 2 2 . 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 . . . 2 2 . . . . . 
    . . . . 2 2 . . . . 2 2 . . . . 
    . . . . 2 . . . . . 2 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `),
miniMenu.createMenuItem("DONT WAKE UP", img`
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 . . 2 2 . . . . . 
    . . 2 2 2 2 2 . . . 2 . . . . . 
    . . 2 2 2 2 . . . . 2 . . . . . 
    . . 2 2 2 . . . . 2 . . . . . . 
    . . 2 2 . . . . 2 2 . . . . . . 
    . . 2 2 . . 2 2 2 . . . . . . . 
    . . 2 2 . 2 2 2 2 2 . . . . . . 
    . . 2 2 2 2 . . . 2 . . . . . . 
    . . 2 2 . . . . . 2 2 . . . . . 
    . . 2 2 . . . . . 2 . . . . . . 
    . . 2 2 . . . . 2 2 . . . . . . 
    . . 2 2 . . 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
)
myMenu.setPosition(80, 90)
miniMenu.setMenuStyleProperty(myMenu, miniMenu.MenuStyleProperty.BorderColor, 5)
let Main_Menu = true
let not_MainManu = false
miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    if (Main_Menu && !(not_MainManu)) {
        miniMenu.close(myMenu)
        PLAYER_1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(PLAYER_1)
        controller.moveSprite(PLAYER_1)
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
        not_MainManu = true
    }
})
miniMenu.onButtonPressed(myMenu, miniMenu.Button.B, function (selection, selectedIndex) {
    if (Main_Menu && !(not_MainManu)) {
        miniMenu.close(myMenu)
        scene.setBackgroundImage(img`
            ..............................22222.............................................................................................................................
            .............................222222.............................................................................................................................
            .............................222222..........................................22222..............................................................................
            ............................2222222..........................................22222..............................................................................
            ...........................22222222.........................................222222...............22222..........................................................
            ..........................22222222......................22222...............222222..............222222..........................................................
            ..........................22222222.....................222222..............2222222..............222222..........................................................
            .........................222222222.....................222222..............2222222..............222222.........................22222............................
            ........................222222222......................222222.............2222222...............222222.........22222...........222222222222...........2222222222
            ........................222222222.....................2222222.............2222222.............22222222.........22222...........222222222222222222222222222222222
            .......................222222222....................222222222............2222222..............22222222........222222...........222222222222222222222222222222222
            ....................222222222222...................222222222.............2222222..............22222222........222222..........2222222222222222222222222222222222
            ...................222222222222....................222222222............22222222..............22222222........222222..........2222222222222222222222222222222222
            ...................22222222222.....................22222222.............222222222.............22222222.......2222222..........22222222222222222222222222222.....
            ..................222222222222....................222222222.............222222222.............22222222.......2222222..........222222222222222222222222222.......
            ..................22222222222.....................222222222............2222222222.............22222222......2222222...........222222222222222222222222222.......
            .................222222222222.....................222222222............2222222222.............22222222......2222222...........222222222222222222222222222.......
            .................22222222222......................222222222.......222222222222222.............22222222......2222222...........222222222222222222222222222.......
            .........22222..222222222222.....................2222222222......2222222222222222.............22222222.....2222222............22222222222222222222222...........
            .........22222..22222222222......................222222222.......2222222222222222.............22222222.....2222222............22222222222222222222222...........
            .........22222..2222222222.......................222222222......22222222222222222.............22222222.....2222222............22222222222222222222222...........
            .........22222.22222222222.......................222222222......22222222222222222.............22222222.....2222222............22222222222222..2222222...........
            .........22222.2222222222.......................2222222222.....222222222222222222.............22222222....2222222.............2222222222........22222...........
            .........222222222222222........................2222222222.....222222222222222222.............22222222....2222222.............222222............................
            .........222222222222222........................2222222222.....222222222222222222.............22222222...22222222.............222222............................
            ........222222222222222.........................222222222......222222222222222222.............22222222...2222222..............222222............................
            ........22222222222222.........................2222222222.....22222222222.2222222.............22222222..22222222..............222222............................
            ........22222222222222.........................2222222222.....22222222222.2222222.............22222222.22222222...............222222............................
            ........2222222222222..........................222222222......22222222222.2222222.............22222222.22222222...............222222...........222222222........
            ........222222222222...........................222222222......2222222222..2222222.............22222222222222222...............222222........2222222222222.......
            ........222222222222..........................2222222222.....22222222222..2222222..............222222222222222................222222.....2222222222222222.......
            .......2222222222222..........................222222222......2222222222....222222..............222222222222222................222222.22222222222222222222.......
            .......222222222222...........................222222222......2222222222....2222222...22222222..222222222222222................222222222222222222222222222.......
            .......222222222222...........................222222222......22222222222222222222222222222222..22222222222222.................222222222222222222222222222.......
            .......22222222222............................222222222......22222222222222222222222222222222..22222222222222.................22222222222222222222222222........
            .......22222222222............22222..........222222222.......22222222222222222222222222222222..22222222222222.................22222222222222222222222222........
            .......22222222222...........2222222.........222222222.......22222222222222222222222222222222..22222222222222.................222222222222222222222222..........
            .......2222222222...........222222222........222222222.......2222222222222222222222222222.......2222222222222.................2222222222222222222222............
            .......2222222222..........22222222222.......22222222.......2222222222222222222222222...........2222222222222.................2222222222222222222222............
            .......222222222..........222222222222......222222222.......2222222222222222222222..............2222222222222.................2222222222222222222222............
            .......222222222........222222222222222.....222222222.......22222222222222..222222..............2222222222222.................2222222...........................
            .......22222222........22222222222222222....22222222........2222222222......2222222.............2222222222222.................22222222..........................
            .......22222222......22222222222222222222...22222222........22222222........2222222.............222222222222..................22222222..........................
            .......2222222222...2222222222222222222222..2222222........22222222.........2222222.............222222222222..................22222222..........................
            .......2222222222..22222222222.22222222222.22222222........22222222.........2222222..............222222222222.................22222222..........................
            .......2222222222.222222222222..2222222222222222222........22222222.........22222222.............2222222222222................22222222..........................
            .......2222222222222222222222...222222222222222222.........2222222...........2222222.............22222222222222................2222222..........................
            .......222222222222222222222.....22222222222222222.........2222222...........2222222.............222222222222222...............2222222..........................
            .......22222222222222222222......22222222222222222.........2222222...........22222222............222222222222222...............2222222..........................
            ......22222222222222222222.......22222222222222222.........2222222............2222222............2222222222222222..............22222222.........................
            ......2222222222222222222.........2222222222222222.........2222222............2222222............222222222222222222............222222222........................
            .....222222222222222222...........2222222222222222.........2222222............2222222.............222222222222222222...........2222222222.......................
            .....22222222222222222.............222222222222222........22222222............2222222.............2222222.22222222222..........22222222222......................
            ....22222222222222222...............2222222222222.........22222222............22222222............22222222.22222222222.........222222222222.....................
            ....2222222222222222.................222222222222.........2222222..............2222222............22222222...2222222222.........2222222222222...................
            ...2222222222222222.......................2222222.........2222222..............2222222.............2222222....22222222222.........2222222222222.................
            ...22222222222222.........................2222222.........2222222...............222222..............222222.....222222222222.......222222222222222...............
            ...2222222222222..........................2222222.........2222222................22222...............22222.......2222222222.........2222222222222222............
            ...222222222222...........................222222...........222222................22222............................222222222...........22222222222222............
            ...2222222222..............................................22222...................................................22222222............2222222222222............
            ...2222222...........................................................................................................222222.............2222222222222...........
            ....22222.................................................................................................................................222222222222..........
            ............................................................................................................................................22222222222.........
            ..............................................................................................................................................222222222.........
            ............................................................................................22222222............................................2222222.........
            .........................................................................................22222222222222..........................................222222.........
            ........................................................................................22222222222222222.........................................22222.........
            .......................................................................................2222222222222222222......................................................
            ......................................................................................2222222222222222222222....................................................
            ......................................................................................22222222222222222222222...................................................
            .....................................................................................2222222222222222222222222..................................................
            .......................................22222.....................22222..............222222222222222.2222222222..................................................
            .......................................222222....................22222.............22222222222222...2222222222..................................................
            .......................................2222222...................22222.............22222222222222...2222222222..................................................
            .......................................2222222...................22222.............2222222222222....2222222222..................................................
            .......................................22222222..................22222............2222222222222....22222222222..................................................
            .......................................22222222..................22222............2222222222222....22222222222..................................................
            .......................................22222222..................22222............222222222222....222222222222..................................................
            .......................................22222222..................22222............22222222222....2222222222222..................................................
            ........................................2222222..................22222...........222222222222...2222222222222...................................................
            ........................................2222222..................22222...........222222222222.222222222222222...................................................
            .........................................2222222.................22222...........222222222222222222222222222....................................................
            .........................................2222222.................22222...........222222222222222222222222222....................................................
            .........................................2222222................222222...........22222222222222222222222222.....................................................
            .........................................2222222................222222...........222222222222222222222222.......................................................
            .........................................2222222................222222...........22222222222222222222222........................................................
            ..........................................2222222..............2222222...........22222222222222222222...........................................................
            ..........................................2222222..............2222222...........2222222222222222...............................................................
            ..........................................2222222..............2222222...........2222222222222..................................................................
            ..........................................22222222............22222222...........22222222222....................................................................
            ..........................................22222222............22222222...........22222222.......................................................................
            ...........................................2222222............22222222...........22222222.......................................................................
            ...........................................22222222..........222222222...........22222222.......................................................................
            ...........................................22222222..........222222222...........22222222.......................................................................
            ............................................22222222.........22222222............22222222.......................................................................
            ............................................22222222........222222222............22222222.......................................................................
            .............................................22222222......2222222222.............2222222.......................................................................
            .............................................22222222222..2222222222..............2222222.......................................................................
            .............................................22222222222222222222222..............2222222.......................................................................
            ..............................................2222222222222222222222..............2222222.......................................................................
            ..............................................222222222222222222222...............2222222.......................................................................
            ...............................................22222222222222222222................222222.......................................................................
            ...............................................2222222222222222222.................222222.......................................................................
            ...............................................222222222222222222..................222222.......................................................................
            ................................................22222222222222222..................222222.......................................................................
            ..................................................22222222222222...................222222.......................................................................
            ...................................................222222222222....................222222.......................................................................
            .....................................................2222222222....................222222.......................................................................
            ...................................................................................22222........................................................................
            ...................................................................................22222........................................................................
            ...................................................................................22222........................................................................
            ...................................................................................22222........................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        pause(2000)
        game.reset()
    } else {
        not_MainManu = true
    }
})
game.onUpdateInterval(500, function () {
    if (Town && !(Inside)) {
        people = sprites.createProjectileFromSide(citizens[randint(0, citizens.length - 1)], randint(-50, 50), randint(-50, 50))
    } else {
        Inside = true
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
