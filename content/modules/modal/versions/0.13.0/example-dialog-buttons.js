// buttons to use in modal
var buttons = [
  { text: "Green",  classes: "hx-btn hx-positive", value: 0 },
  { text: "Red",    classes: "hx-btn hx-negative", value: 1 },
  { text: "Yellow", classes: "hx-btn hx-warning",  value: 2 }
]

// callback function
var dialogCallbackButtons = function(val){
  switch (val) {
    case 0:
      hx.notify().temporary("You clicked the green one", "fa fa-birthday-cake", 'hx-positive');
      break;
    case 1:
      hx.notify().temporary("You clicked the red one", "fa fa-birthday-cake", 'hx-negative');
      break;
    case 2:
      hx.notify().temporary("You clicked the yellow one", "fa fa-birthday-cake", 'hx-warning');
      break;
    case undefined:
      hx.notify().negative("You cancelled the action");
      break;
  }
}

// show the modal when the button is clicked
hx.select('#show-modal-dialog-buttons').on('click', function(){
  hx.modal.dialog('Modal Dialog Example', 'Pick a colored button:', dialogCallbackButtons, {
    buttons: buttons
  });
});