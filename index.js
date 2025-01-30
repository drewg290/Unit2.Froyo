let flavors = prompt(
  "What froyo flavors would you like? Separate the flavors with a comma."
);

const froyoTracker = {};

function froyosToArray(string) {
  const newstring = string.split(",");

  let froyoarray = [];

  for (const f of newstring) {
    let flavor = JSON.stringify(f);
    console.log(f);
    froyoarray.push(f);

    if (flavor in froyoTracker) {
      froyoTracker[flavor] += 1;
    } else {
      froyoTracker[flavor] = 1;
    }
  }

  let total = "You ordered";

  for (const key in froyoTracker) {
    const value = froyoTracker[key];

    total += ` ${value} ${key},`;
  }
  console.log(total);
  alert(total);
}

froyosToArray(flavors);
