// Init Github
const github = new Github
// Search input
const searchUser = document.getElementById('searchUser');

// Search input text
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
     .then(data => {
       if(data.profile.message === 'Get Found') {
         //show alert

       } else {
         // Show profie

       }
     })
  } else {
    //clear Profile 
  }

});