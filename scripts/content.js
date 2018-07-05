/* developer debug code */
  var logEnabled = true;

  var info = function(message) {
    if(this.logEnabled) console.log("Quora-NoLog :: " + message);
  }

  this.info('Keep contributing to Quora.');
/* developer debug code */

/* data and api code */
var quora = {
    sign_up_dialog_class : 'modal_signup_dialog',
    scroll_disable_class : 'signup_wall_prevent_scroll'
}

var hideElement = function(element) { element.style.display = 'none'; }

var removeClass = function(element, className) { element.classList.remove(className); }
/* data and api code */

var signUpDialog = document.getElementsByClassName(this.quora.sign_up_dialog_class);

if( this.signUpDialog.length ) {
  this.info('Found a popup dialog box.');
  this.hideElement(this.signUpDialog[0].parentNode.parentNode.parentNode);
  this.info('You do not want the popup dialog box.');

  if(document.body.classList.contains(this.quora.scroll_disable_class))
  {
    this.info('Found a sroll disabler.');
    this.info('You want to scroll through all answers.');
    this.removeClass(document.body, this.quora.scroll_disable_class);
  }
  this.info('You are all set. Keep reading.');
}
