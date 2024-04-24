function genera_rfc(){
    var nom=document.getElementById('nombre').value;
    var ap=document.getElementById('ap').value; 
    var am=document.getElementById('am').value;
    var anio=document.getElementById('anio').value;
    var dia=document.getElementById('dia').value; 
    var mes=document.getElementById('mes').value; 
    //var res=0; 
    var nom2=nom.toUpperCase();
    var ap2=ap.toUpperCase();
    var am2=am.toUpperCase();
    
    document.getElementById('resultado').value=''+ap2[0]+ap2[1]+am2[0]+nom2[0]+anio[2]+anio[3]+mes[0]+mes[1]+dia[0]+dia[1]; 
    //alert(res);

}