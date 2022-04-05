// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', (e) => {

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    const $ = (id) => {
        return document.getElementById(id);
    };

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    $('cancel').addEventListener('click', () => {
        window.close();
    });

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    $('empForm').addEventListener('submit', (e) => {
        e.preventDefault();
    
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        let id = `ID: ${$('id').value}`;
        let name = `Name: ${$('name').value}`;
        let ext = `Extension: ${$('extantion').value}`;
        let email = `Email: ${$('email').value}`;
        let dept = `Department: ${$('department').value}`;
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        let parent = window.opener.document.getElementById('loginDetails');

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES        
        parent.innerHTML = `${id}<br>${name}<br>${ext}<br>${email}<br>${dept}`;

// CLOSE THE POPUP
        window.close();

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
    });
});