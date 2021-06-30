/* Ich habe eine Variable btn Value deklariert, diese bekommt Punkte wenn ein Feld ausgeefüllt wurde.
 * somit wird sicher gestellt dass der Button erst dann funktioniert wenn alle Pflichtfelder ausgefüllt sind */

function senden()
{

    var btnValue = 0;
    var name = document.getElementById('NAME').value;
    var email = document.getElementById('email').value;
    var checkEmail = email.indexOf("@");
    var checkDots = email.indexOf(".");

    var checkTDL = checktdl1 + checktdl2 + checktdl;
    var checktdl = email.indexOf(".com");
    var checktdl1 = email.indexOf(".ch");
    var checktdl2 = email.indexOf(".de");


    var evaluation = document.forms[0];
    var evaluationArray = [];
    var mark= "";
    var i;
    for(i = 0; i < evaluation.length; i++)
    {
        if(evaluation[i].checked)
        {
            mark = evaluation[i].value;
            evaluationArray [i] = mark;
            alert(mark);
        }
    }

    /* Falls der name leer bleibt, wird "All mandatory fields have to be filled" angezeigt*/
    if(name == '')
    {
        document.getElementById('missedName').style.display = "block" ;
        document.getElementById('hidden').style.display = "block" ;
        document.getElementById('missedName').innerHTML = "All mandatory fields have to be filled";
    }
    else
        {
            btnValue += 1;
        }


    if(email == '')
    {
       document.getElementById('missedEmail').innerHTML = "You have to insert your E-mail";
    }
    else
    {
        btnValue += 1;
    }
    if(checkEmail == -1 || checkDots == -1)
    {
        document.getElementById('missedEmail').innerHTML = email + " !" + "The e-mail is not correct ";
        document.getElementById('missedEmail').style.display = "block" ;
        document.getElementById('hidden3').style.display = "block";
    }
    else
    {
        btnValue += 1;
    }

    if(btnValue < 3)
    {
        alert("The Button will be enabled when all mandatory fields are filled");
    }

    var numberOf = document.getElementById('TextField2').value;
    var Length = numberOf.length;
    alert(Length);
    if(Length < 50)
    {
        document.getElementById('shortFeedback').innerHTML = "Your feedback have to be longer than 50 characters";
        document.getElementById('shortFeedback').style.display = "block";

    }
    else
        {
            btnValue +=1;
        }

        if (btnValue >= 4)
        {
            alert("Ihre Bestellung wurde abgeschickt");
            document.getElementById('btn1').style.color = "black";
        }
}
