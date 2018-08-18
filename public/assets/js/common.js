function addClass() {
    let activeAdd = document.getElementsByClassName('select');
    let list = activeAdd.classList;
    console.log(list);

    activeAdd.classList.add('active');
    console.log(activeAdd.classList);

    
}
addClass();

