

function mark(a)
{
   if(a>=90)
   {
      var mark='grade a';
   }
   else if(a>=80)
   {
      var mark='grade b';
   }
   else if(a>=60)
   {
      var mark='grade c';
   }
   else if(a>=50)
   {
      var mark='grade d';
   }
   else{
      var mark='fail'
   }
   return mark;

}
var a=68;


var grade=mark(a);
console.log (grade);

