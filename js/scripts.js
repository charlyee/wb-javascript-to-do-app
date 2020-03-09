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
} );