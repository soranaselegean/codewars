//A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known. He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66). His mother looks out of a window 1.5 meters from the ground. How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
//P: Float parameter "h" in meters must be greater than 0. Float parameter "bounce" must be greater than 0 and less than 1. Float parameter "window" must be less than h.
//R: number, includes initial fall, otherwise -1

function bouncingBall(h,  bounce,  window) {
    //check if window < h, h > 0, and 0 < bounce < 1, otherwise return -1
    if (h <= 0 || window >= h || bounce < 0 || bounce >= 1){
        return -1
    }

    //declare count
    let count = 0

    //while loop that decreases h by the bounce factor and compares it to window to increment count
    while (h > window){
        h *= bounce
        h > window ? count += 2 : count++
    }

    //return count
    return count
}