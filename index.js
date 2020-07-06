// Build out a Diner menu in JAVASCRIPT. Here are your instructions to build that Diner.
// Bottega Diner
// Have the Main Menu and a Sides Menu --DONE
// You get one entree and two side choices at regular cost.
// - show them the entire menu (print out)
// - A user selects an entree.
// - “Waitress” makes a comment based on their selection
// - comment can either be a comparison of the two items, or random comment pulled from a comment vault.
// - Tell them the price
// - repeat the above options for side choices (comment and a price)
// - total up the cost

// BONUS
// Have a breakfast, lunch and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

// BONUS: Allow for item customization (how items are prepared, decide additional cost implications)

let menu = {
    Hamburger: "6.00",
    Cheeseburger: "7.00",
    ChiliDog: "5.00"
}

let sides = {
    Fries: "2.00",
    OnionRings: "3.00",
    ChilliFries: "3.50"
}

function displayMenu() {
    alert("Please select a menu item and 2 sides.\nHamburger: $6.00\nCheeseburger: $7.00\nChili Dog: $5.00\n\nSides:\nFries: $2.00\nOnion Rings: $3.00\nChili Fries: $3.50\n")

    // for (let key in menu) {
    // alert(console.log(key + " => " + menu[key]))
    // }

    // for (let key in sides) {
    // alert(console.log(key + " => " + sides[key]))
    // }
    

}


