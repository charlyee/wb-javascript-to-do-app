// Retrieve "Active" list.
var activeList = document.querySelector( 'ul' );

// Retrieve "Completed" list.
var completedList = document.querySelector( 'ul:last-of-type' );

// Retrieve the to-do input.
var newTask = document.querySelector( '[name="new-task"]' );

// Select our form.
var form = document.querySelector( 'form' );
// We listen to our form for a submission.
form.addEventListener( 'submit', function ( event ) {
    // Prevent a page-refresh from a REAL form submission.
    event.preventDefault();
    // Let's add the list item into our UL.
    activeList.innerHTML += `
        <li>
            <input type="checkbox">
            ` + newTask.value + `
        </li>
    `;

    // Grab our brand new checkbox! (The last LI will always be the newest one!)
    var newCheckboxes = document.querySelectorAll( 'ul [type="checkbox"]' );
    // Loop through all the checkboxes - make sure they ALL have the event each time we submit!
    for ( var i = 0; i < newCheckboxes.length; i++ ) {
        var newCheckbox = newCheckboxes[i];
        // Listen for a click on this checkbox!
        newCheckbox.addEventListener( 'click', function ( event ) {
            // Grab the associated LI.
            var li = this.parentNode;

            // Delete THIS clicked checkbox.
            li.removeChild( this );

            // Move the LI to our completed UL.
            completedList.appendChild( li );
        } );
    }
} );