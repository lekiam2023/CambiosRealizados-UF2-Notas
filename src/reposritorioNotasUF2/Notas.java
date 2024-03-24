/**
*@version 1.0
*@author 27883maikel
*@since 22/03/2024
*/
package reposritorioNotasUF2;
import java.util.Scanner;
/**
Clase que se encarga de calcular la nota de un alumno
de si esta aprobado o no en funcion de la nota que introduzca por Scanner.
*
*/
public class Notas {
		
/**
uf1 Gurdara la nota de la UF1 que introduzca el usuario
uf2 Gurdara la nota de la UF2 que introduzca el usuario
uf3 Gurdara la nota de la UF3 que introduzca el usuario
acu1 Guardara el calculo de la UF1 que haga en su correspondinte metodo
acu2 Guardara el calculo de la UF2 que haga en su correspondinte metodo
acu3 Guardara el calculo de la UF3 que haga en su correspondinte metodo
def Sera la encargada de guardar la suma de los calculos acu1+acu2+acu3
**/
double uf1, uf2, uf3,acu1, acu2, acu3, def;



/**
Se instancia la clase de Scanner y se crea un nombre
(entrada).
Sera utilizado para recibir lo que el usuario introduzca
*/
Scanner entrada = new Scanner(System.in);


/**
@param IngresaNotas parametro que recibe las notas introducidas por el usuario
Esas notas se gaurdan en unas varibles uf1, uf2,uf3.
*/
public void IngresaNotas() {
System.out.println("ingrese las notas del estudiante");

System.out.print("ingrese nota 1: ");

uf1= entrada.nextDouble();



System.out.print("ingrese nota 2: ");

uf2= entrada.nextDouble();

System.out.print("ingrese nota 3: ");

uf3= entrada.nextDouble();


}

/**
@param comprobarcion
@param Metodo para comprobar bien ntroduccion de notas
Nada no devuelve nada como su propio elemento (Void)lo indica
pero que no devuelva nada no quiere decir que este metodo no realice alguna funcion.
*
Este metodo cunaod se instance en el (main) lo que mostrara por
pantalla sera el resultado que controlan los condicionales if-else.
*
@throws valorEvaluado En funcion de si los valores de(uf1-uf2-uf3) no son mayores que 10, entonces devolvera
un resultado que indique que la nota introducida es correcta, de lo contrario
devolvera un mensaje con un mensaje de que la nota esta mal introducida.
*/

public void comprobarcion(){

if (uf1 > 10) {
System.out.println(" nota1 mal introducida");

}else {
System.out.println(" nota1 correcta");
}

if (uf2 > 10) {
System.out.println(" nota2 mal introducida");

}else {
System.out.println(" nota2 correcta");
}
if (uf3 > 10) {
System.out.println(" nota3 mal introducida");

}else {
System.out.println(" nota3 correcta");
}




}
/**
@param Calculonotas En este parametro es donde se lleva acabo el calculo
de las notas, con unas ecuaciones predeterminadas:
*
*-Cada valor guardado en las varibles (uf1,uf2,uf3) se multiplicaran
*por (0.35).
*
*Se gurada el valor multiplicado en unas varibles llamadas (acu1,acu2,acu3).
*
*Estas variables antes comentadas se sumaran entre ellas y ese resultado final
*de la suma se almacenara en una varible llamada(def).
*
*En este momento solo tenemos el calculo realizado pero no lo mostramos.
*/
public void Calculonotas() {
acu1 = uf1 * 0.35;
acu2 = uf2 * 0.35;
acu3 = uf3 * 0.30;

def = acu1 + acu2 + acu3;
}
/**
@param  Mostrar Parametro encargado de mostrar los resultados calculados por
el metodo @param Calculonotas.
*
Lo que hace es imprimir los resultados introducidos  por el usurio y calculados por el parametro de calculo
*/
public void Mostrar() {
//print ln lo que hace es que al terminar el print baja la linea
System.out.println(" notas introducidas son:");
System.out.println(" nota1 = " + uf1);
System.out.println(" nota2 = " + uf2);
System.out.println(" nota3 = " + uf3);

System.out.println(" acumuado 1 = " + acu1);
System.out.println(" acumuado 2 = " + acu2);
System.out.println(" acumuado 3 = " + acu3);

System.out.println(" nota definitiva es = "+ def);

}

/**
@param aprobado Metodo encargado de comparar las notas
en un condicional if-else.
*
@throws compruebaAprobado En el caso de que
la varible (def) tenga guardado como valor menos de un
5 o mayor e igual que 0, esto informara por pantalla
que el alumno ha suspendido la asignatura.
*
De lo contrario el alumno aprobara la asignatura.
*/
public void aprobado() {

if(def < 5 && def >= 0) {
System.out.println("suspendio");
}else {
if (def >= 5 && def <= 10 ) {
System.out.println("aprobado");
}else {
System.out.println(" error en la notas");
}
}
}

/**
@param args que permite llamar a cualquier metodo que este fuera de la clase
*/
public static void main(String[] args) {
/**
*Instancia de la clase notas con nombre (fc) para
*asi poder llamar a los metodos de fuera de la clase con el
*IngresaNotas
*comprobarcion
*Calculonotas
*Mostrar
*aprobado
Y muchos metodos mas que se creen fuera.
*/
Notas fc = new Notas();

fc.IngresaNotas();

fc.comprobarcion();


fc.Calculonotas();

fc.Mostrar();

fc.aprobado();

}
   }




