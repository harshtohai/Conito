export function checker(){
    const username = (document.getElementById('username') as HTMLInputElement).value
    const password = (document.getElementById('password') as HTMLInputElement).value

    // username.
    if (username.length < 2){
        (document.getElementById('usernamediv') as HTMLDivElement).classList.add('outline-red');
        (document.getElementById('warntext') as HTMLElement).innerText = 'Username Too Small.';
        return
    } 
    if (username.length > 30) {
        (document.getElementById('usernamediv') as HTMLDivElement).classList.add('outline-red');
        (document.getElementById('warntext') as HTMLElement).innerText = 'Username Too Big';
        return 
    }

    if (password.length < 8){
        (document.getElementById('passworddiv') as HTMLDivElement).classList.add('outline-red');
        (document.getElementById('warntext') as HTMLElement).innerText = 'Password is Too Small.';
        return
    } 


}