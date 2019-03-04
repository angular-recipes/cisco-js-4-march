// for (var i = 1; i <= 4; i++) {
//     document.getElementById('b' + i).onclick = function () {
//         console.log('btn ' + i + ' clicked');
//     };
// }

for (var i = 1; i <= 4; i++) {
    document.getElementById('b' + i).onclick = function (j) {
        return function () {
            console.log('btn ' + j + ' clicked');
        };
    }(i);
}