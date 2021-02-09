let select = document.getElementsByName('cars')[0];

// (event) represents the "mouse click" in this function
select.onclick = function(event){
    console.log( event );
};


// ==============================
// Multiple callbacks -- These are anonymous functions.
// Anonymous functions cannot be removed as they have no name to reference.
// ==============================
// select.addEventListener ('click', function(event){
//    console.log('clicked by add event listener 1')
// }) ;

// select.addEventListener ('click', function(event){
//     console.log('clicked by add event listener 2')
//  }) ;


// Proper way to REMOVE callback
 function ClickCallback(event) {
     console.log('test1')
 }
  // ======
 // Add and remove a event listener with click
 // =====
select.addEventListener('click', ClickCallback);
select.removeEventListener('click', ClickCallback);


