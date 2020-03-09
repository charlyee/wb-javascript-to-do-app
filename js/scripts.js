// Retrieve "Active" list.
var activeList = document.querySelector( 'ul' );

// Retrieve "Completed" list.
var completedList = document.querySelector( 'ul:last-of-type' );

// Select our form.
var form = document.querySelector( 'form' );
// We listen to our form for a submission.
form.addEventListener( 'submit', function ( event ) {
    // Prevent a page-refresh from a REAL form submission.
    event.preventDefault();
    
    
} );