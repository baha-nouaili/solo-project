

var arrayOfquestions = [ ] ; 

function factoryFunc(question,choices,answer){
    var objectOfQI = { }
    objectOfQI.question = question ; objectOfQI.choices = choices ; objectOfQI.answer = answer
    return objectOfQI;
} 


var question1 = factoryFunc("10/Dans un triangle rectangle , le carré de l'hypoténuse est égal ",["Produit des cotés de l'angle","A la somme des carrés de l'angle droit","Au produit des cotés par la hauteur"],"Au produit des cotés par la hauteur"); 
var question2 = factoryFunc("9/12000 seconds",["3h30","3h10","200heures"],"200heures"); 
var question3 = factoryFunc("8/Une carte routiere a l'echelle 1/2500000 Quelle distance réelle represent 4cm sur cette carte",["25km","10km","1km"],"10km"); 
var question4 = factoryFunc("7/Quel est le carré du quart du tiers de 12",["Neuf","un","deux"],"neuf"); 
var question5 = factoryFunc("6/Une personne place 1500e sur un plan depargne remunerer sur 6ans quel serait l'interet au bout de quadrimestre de placement",["40","50","60"],"50"); 
var question6 = factoryFunc("5/Si je veux tracer un cercle, je dois parcourir ",["90","180","360"],"360"); 
var question7 = factoryFunc("4/La somme des angles d’un carré est égale à ",["400","360","400"],"360"); 
var question8 = factoryFunc("3/Dans un triangle rectangle, le carré de l’hypoténuse est égal ",["Au produit des cotés de l'angle droit","A la somme des carrés","Au produit des cotés par l'hauteur"],"A produit des cotés par l'hauteur"); 
var question9 = factoryFunc("2/Tom possède un nouvel ensemble de clubs de golf. Il envoie la balle à une distance moyenne de 100 mètres à l'aide du club 8. Il envoie la balle à une distance moyenne de 108 mètres à l'aide du club 7. Il envoie la balle à une distance moyenne de 114 mètres à l'aide du club 6. Quelle distance la balle va-t-elle parcourir avec le club 5 ?",["122metres","120metres","118metres"],"118metres"); 
var question10 = factoryFunc("1/Quel nombre est la suite logique de cette série : 4  6  9  6  14  6 ..",["17","19","21"],"21"); 
var question11 = factoryFunc("questin",['choices,choices,choices'],"answer") ; 


arrayOfquestions.push(question1, question2,question3,question4,question5,question6,question7,question8,question9,question10,question11) 

var count = 0 ;

function checkQuestions(choice){
 for(var i = 0 ; i<arrayOfquestions.length;i++){
     if(choice===arrayOfquestions[i].answer){
         count++
         return true 
     }
 }
 return false 
}  


var count = 0 ; 
var index = arrayOfquestions.length-1 ; 
  $(document).ready(function(){
      $('.btn').on('click',function(){
          var chosenAnswer = $('#' + this.id).text()
            if (chosenAnswer === arrayOfquestions[index].answer) {
                count ++
            }
        $('#question').text(arrayOfquestions[index-1].question);
        $('#b1').text(arrayOfquestions[index-1].choices[0]); 
        $('#b2').text(arrayOfquestions[index-1].choices[1]); 
        $('#b3').text(arrayOfquestions[index-1].choices[2]);

        $('#check').on('click',function(){
            $('count').appendTo('#counter');  
            conssole.log(i) ; 
        })
        
        index-- 
      });
   

})
