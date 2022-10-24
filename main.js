
//* Change the font color of the paragraph to light blue.

let paragraph = document.querySelector("p");

paragraph.style.color = "lightblue";

//* Change the font size of the heading to 48px.


let head1 = document.querySelector("h1");

head1.style.fontSize = "48px";

//* Change the text of the paragraph to be the following Hipster Ipsum:


paragraph.innerText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."

// * Change the 13th item to be half transparent. (Look this up!)


let item13 = document.querySelector("#item-13")

item13.style.opacity = "0.5";

// * Change the 3rd item's text to say:


let item3 = document.querySelector("#item-3")

item3.innerText = 'I say, "Hi!"';

// * Change the image below the list to be whatever image you want.


let image = document.querySelector('img');

image.src = 'https://cdn.discordapp.com/attachments/1014321307556524142/1034162996571803749/Zana_planet_earth_with_the_shape_of_an_apple_background_of_spac_983bd1c0-0673-4bf6-a12f-2b1aafac4059.png'

// * Change that image's size to be 300 pixels high.


image.style.height = "300px";
image.style.width = "160px";

// * Using HTML, add a new image of your choice below or to the right of the other image and give it a unique id.


let image2 = document.querySelector('#visual1');

image2.src = 'https://cdn.discordapp.com/attachments/1014321307556524142/1031772246575951932/Zana_a_key-visual_of_a_big_donut_monster_rolling_down_the_stree_67f0e28d-92f1-495b-aa2f-e7aff60c7e48.png'

// * Now make that image 300 pixels high (with JS)

image2.style.height = "300px";
image2.style.width = "500px";

// * Using HTML, add a 16th `<li>` to the list. Once again with HTML, give it an ID that follows the others' numbering scheme.


let item16 = document.querySelector('#item-16');

// * Now, (with JS) give it the same class as the others.

item16.className = "item";

// * Give that `<li>` the following text:
// > Won't get fooled again.

item16.innerText = "Won't get fooled again";