var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

let $paleta = $('#paleta');
let $grillaPixeles = $('#grilla-pixeles');

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    let colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);
  })
);

let paletaColores = () => {
  nombreColores.forEach((color) => {
    let $divs = $('<div>', { "class": 'color-paleta' }).css('background-color', color);
    $paleta.append($divs);
  })
};

paletaColores();

let crearGrilla = () => {
  for (let i = 0; i <= 1750; i++) {
    $($grillaPixeles).append('<div>');
  }
};

crearGrilla();

let cambiaIndicadorDeColor = function () {
  let $colorSeleccionado = $(this).css('background-color');
  $('#indicador-de-color').css('background-color', $colorSeleccionado);
};

$('div.color-paleta').click(cambiaIndicadorDeColor);

// let $pixel = $('#grilla-pixeles div');
// let mouseAbajo = false;

// let pintaPixel = function (e) {
//   let colorAPintar = $('#indicador-de-color').css('background-color');
//   $(e.target).css('background-color', colorAPintar);
// };

// $($pixel).mousedown( (e) => {
//   pintaPixel(e);
//   mouseAbajo = true;
// }).mouseup(function () {
//   mouseAbajo = false;
// });

// let pintarPixeles = (e) => {
//   if (mouseAbajo) {
//     pintaPixel(e);
//   };
// };

// $($pixel).mouseover(pintarPixeles);

// let borrarTodo = () => {
//   $($pixel).animate({ 'background-color': 'white' }, 500);
// };

// $('button#borrar').click(borrarTodo);

// $(".imgs img").click( (e) => {
//   let superHeroe = $(e.target).attr('id');
//   switch (superHeroe) {
//     case 'batman':
//       superHeroe = batman;
//       break;

//     case 'wonder':
//       superHeroe = wonder;
//       break;

//     case 'flash':
//       superHeroe = flash;
//       break;

//     case 'invisible':
//       superHeroe = invisible;
//       break;
//   }
//   cargarSuperheroe(superHeroe);
// });

// $('#guardar').click( () => {
//   guardarPixelArt();
// });
