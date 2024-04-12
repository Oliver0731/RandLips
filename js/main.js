let outputEl = document.getElementById("output");

let nouns = await loadTextFile("wordData/nouns.txt");
let verbs = await loadTextFile("worddata/verbs.txt");
let adjectives = await loadTextFile("wordData/adjective.txt");

function generate() {
  let noun = nouns[randomInt(0, 1001)];
  let verb = verbs[randomInt(0, 1001)];
  let adjective = adjectives[randomInt(0, adjectives.length)];
  outputEl.innerHTML = `dear ${
    nouns[randomInt(0, 1001)]
  }, i would very much like to ${verb} you for reaserch. I will ${verb} your ${adjective} ${noun} but only in the case that your ${adjective} ${noun} will ${verb} yourself.`;
}

generate();
