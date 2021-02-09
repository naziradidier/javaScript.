<script type="text/javascript">
var demain=new Date();
console.log("Maintenant en millisecondes : "+demain.getTime());
demain.setTime(demain.getTime() + 24 * 3600 * 1000);
document.write("Demain nous serons le ");
document.write(demain.getDate()+"/"+(demain.getMonth()+1)+"/"+demain.getFullYear());
console.log("Demain en millisecondes : "+demain.getTime());

//************************************************
var ladate=new Date()
document.write("Nous sommes le : ");
document.write(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear())
//******************************************************

</script>