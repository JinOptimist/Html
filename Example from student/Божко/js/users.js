window.addEventListener('load', function() {

    var editbuttons = document.getElementsByClassName('input');
    var usersItemsHeaders = document.getElementsByClassName('users-item-header');

    var usernames = document.getElementsByClassName('js-users-item-name');
    handleEditClick(editbuttons, usernames);

    function handleEditClick(editbuttons, usernames) {
        for (var i = 0; i < editbuttons.length; i++) {
            (function(index) {
                editbuttons[index].addEventListener('click', function() {
                    var username = usernames[index].innerText;
                    usernames[index].style.display = 'none';
                    var inputBox = document.createElement('input');
                    inputBox.setAttribute('type', 'text');
                    inputBox.style.width = '100px';
                    inputBox.value = username;

                    var okButton = document.createElement('button');
                    okButton.innerText = 'OK';
                    okButton.addEventListener('click', function() {
                        usersItemsHeaders[index].removeChild(inputBox);
                        usersItemsHeaders[index].removeChild(okButton);
                        usernames[index].innerText = inputBox.value;
                        usernames[index].style.display = 'block';
                    })
                    usersItemsHeaders[index].appendChild(inputBox);
                    usersItemsHeaders[index].appendChild(okButton);

                    console.log(username)
                })
            })(i)
        }
    }
})