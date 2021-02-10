<script type="text/javascript">
  var c = new String("Bonjour");
  document.write("c.constructor = "+c.constructor.name+"<br>");
  var d = new Date();
  document.write("d.constructor = "+d.constructor.name+"<br>");

  function Processeur(nom, vitesse)
  {
     this.nom = nom;
     this.vitesse = vitesse;
  }
  var p= new Processeur("i7", "4 GHz");
  document.write("p.constructor = "+p.constructor.name+"<br>");

  //***************************************************************
    var article={id: 1258, nom: "Clé à molette", rayon: "Outillage"}
    console.log(Object.entries(article));

    console.log(Object.entries(console));

    console.log(Object.entries(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]));
//**********************************************************************************
    console.log(Object.getOwnPropertyNames(console));

    function Processeur(nom, vitesse)
    {
        this.nom = nom;
        this.vitesse = vitesse;
    }
    var p = new Processeur("i7", "4 GHz");

    console.log(Object.getOwnPropertyNames(p));

    console.log(Object.getOwnPropertyNames(Math));
</script>