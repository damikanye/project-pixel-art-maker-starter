// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
 let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWeight').value;
    let table = document.getElementById('pixelCanvas');

    table.innerHTML = '';

    let tbody = document.createElement('tbody');

    for (let i = 0; i < height; i++) {

        let tr = document.createElement('tr');

        for (let j = 0; j < width; j++) {

            let td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

}

$('body').on('click', 'td', function() {

    let color = document.getElementById('colorPicker').value;

    $(this).css('background-color', color);
});

