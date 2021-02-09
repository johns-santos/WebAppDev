//
let elements = document.getElementsByName('cssProperty')
let div = document.getElementById('modify')

function set () {
  // Iterate through elements and return CSSPROPERTIES and VALUES;
  for (let index = 0; index < elements.length; index++) {
    //   console.log(elements);
    let cssProperty = elements[index].getAttribute('id')
    let cssValue = elements[index].value;

    console.log(`${cssProperty}: ${cssValue}`)

    // Append CSSPROPERIES of MODIFY element
    div.style[cssProperty] = cssValue
  }
}

document.getElementById('set').addEventListener('click', set)
