// login.js
import io from 'socket.io-client';
// import Home from "./Gerant/home";
export const loginus = () => {
    const socket = io('http://localhost:4000');

    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('usn')?.value;
        const password = document.getElementById('password')?.value;

        if (!username || !password) {
            console.log("Username or password is missing");
            return;
        }

        socket.emit('login', { username, password });

        socket.on('loginResponse', function(response) {
            if (response.success) {
              document.getElementById('loginError').style.display = 'none';

              if(response.user.professon=='gerant')
              window.location.pathname= "/home";
              else if(response.user.professon=='biologist' || response.user.professon=='Biologist' )
              window.location.pathname='/Biologist';
              else if(response.user.professon=='Medecin' || response.user.professon=='medecin')
              window.location.pathname='/medcine';
             else if(response.user.professon=='recepsioniste')
             window.location.pathname='/Agent';


            } else {
                document.getElementById('loginError').style.display = 'block';
            }
        });
    });
};
