importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:"AIzaSyAts9fsoZ_GrF3MRHDRlAw61Xti2uBkdnM",
  authDomain:"staffcheck-d6f20.firebaseapp.com",
  projectId:"staffcheck-d6f20",
  messagingSenderId:"1055570421019",
  appId:"1:1055570421019:web:7b5dcc564bfe1c30189fbe"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title || 'Novo pedido!',
    {body: payload.notification.body || 'Um passageiro está chamando.', tag:'corrida-nova', vibrate:[200,100,200]}
  );
});
