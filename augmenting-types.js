 console.log(Math.ceil(2.3));

 Number.prototype.integer = function() {
     return this > 0 ? Math.floor(this) : Math.ceil(this);
 }

 console.log((12.3).integer());
 console.log((-12.3).integer());

console.log("Hello world".toUpperCase());

String.prototype.toTitleCase = function() {
    var words = this.split(' ');
    var titleCaseWords = [];
    for(var i = 0; i < words.length; i++) {
        titleCaseWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
    }
    return titleCaseWords.join(' ');
}
console.log("HelLo world".toTitleCase());



 