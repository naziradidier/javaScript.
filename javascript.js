<script type="text/javascript">
var tab1=new Array("Pommes", "Poires", "Ananas", "Cerise");
var tab2=new Array("Banane", "Fraise", "Prune");
var result=tab1.concat(tab2)
document.write(result.join(", "));
//************************************************************************
function isString(val) {
   return typeof val=="string" ? true : false;
 }
 var tab1=["cheval", "chien", "chat", "poisson"];
 var tab2=[true, "cheval", 10, Math.PI];
 console.log(tab1.every(isString));   /* Retourne true */
 console.log(tab2.every(isString));   /* Retourne false */
//**************************************************************************
var monTab=[10, 8, 9, 15, 655, 25, 3, 18, 22];
console.log(monTab);
console.log(monTab.filter(function(valeur) {
 if (valeur%5===0) {
   return true;
 }
 return false;
}));

//**************************************************************************
var tab=[
 1,
 2,
 [11, 12, 13],
 3,
 4,
 [ [111, 112, 113],
   [211, 212, 213],
   [311, 312, 313]
 ],
 5
];
console.log(tab);
tab.flat(1);
console.log(tab.flat());
console.log(tab.flat(3));

//**************************************************************************
var months=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

console.log(months);

months.forEach(function(month, index, array) {
 console.log("Mois à l'indice "+index+"/"+array.length+" : "+month.toUpperCase());
});

//**************************************************************************
 var arbre = new Set(["chêne", "tilleul", "platane", "érable"]);
 var tab = Array.from(arbre, n => n.toUpperCase());
 console.log(arbre);
 console.log(tab);

//***************************************************************************
var tab=["ceci est", "du texte", "dans","des éléments", "d'un tableau"];
console.log(tab);
console.log(tab.map(escape));
console.log(tab.map(function(x) { return x.toUpperCase(); } ));

</script>