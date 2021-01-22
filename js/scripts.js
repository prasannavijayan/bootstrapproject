$('#loginButton').click(function()
                {
                    $('#loginModal').modal('show');
                });

        //script for Signup Modal
                $('#SignupButton').click(function()
                {
                    $('#signupModal').modal('show');

                }); 

       $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });