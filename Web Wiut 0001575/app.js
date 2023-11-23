document.addEventListener('DOMContentLoaded', function () {
    function senterrform(event) {
        event.preventDefault();

        const name = document.getElementById('input1').value;
        const email = document.getElementById('input2').value;
        const address = document.getElementById('input3').value;

        if (!name || !email || !address) {
            alert('Please type in information in all spaces');
            return;
        }

        console.log('Your form is ready:', { name, email, address });

        document.getElementById('allvariables').reset();
    }

    document.getElementById('allvariables').addEventListener('submit', senterrform);
});
