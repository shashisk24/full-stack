var ROASTER=["ABHI","BHARATH","CHARAN","DHANUSH"]
console.log(ROASTER);



function add() {

  var ADD=prompt("ENTER STUDENT NAME")
  alert("STUDENT NAME ADDED TO ARRAY IS " +ADD)
  console.log(ROASTER+","+ADD)
}
function remove() {
  ROASTER.splice(1,1)
  console.log(ROASTER-"splice")
}

function display(){
  alert("STUDENT NAME ADDED TO ARRAY IS "+ ROASTER)
  console.log(ROASTER)
}

function QUIT() {
  exit(0);

}
