<script setup>
import { useGlobalStore } from '@/store'

const store = useGlobalStore()

function deleteData() {
  confirm("Toutes les données stockées localement seront supprimées.");
  store.deleteData()
}

</script>

<template>
  <section class="width--xnarrow my-2">
    <h1>À propos d'Administrans</h1>
    <p>Administrans est un outil gratuit conçu pour vous aider dans votre transition administrative.</p>
    <p>
      Il est directement inspiré du projet Trans-CEC lancé par Maria Climent-Pommeret,
      et des différentes versions qui ont ensuites été améliorées et maintenues par des volontaires.
    </p>
  </section>
  <section class="width--xnarrow my-2">
    <h2>Comment utiliser le service</h2>
    <p>Choisissez simplement le ou les demandes que vous souhaitez effectuer et remplissez les formulaires qui vous sont proposés.</p>
    <p>
      Une fois cette étape terminée, vous pouvez optionnellement éditer directement le courrier qui vous est proposé, puis l'enregistrer en format PDF. 
    </p>
    <p>
      L'enregistrement en PDF se fait via la fonction impression de votre navigateur. Il est possible que cela ne fonctionne pas sur certains navigateurs mobile. Voici la liste des navigateurs testés avec lesquels Administrans fonctionne :
    </p>
    <ul>
      <li>Sur ordinateur : Firefox, Chrome, Chromium</li>
      <li>Sur smartphone : Chrome, Vivaldi</li>
    </ul>
  </section>
  <section class="width--xnarrow my-2">
    <h2>Concernant vos données</h2>
    <p>Les données que vous saisissez et les courriers générés ne quittent jamais votre appareil. Aucune information personnelle n'est transmise à un tiers, ni même à l'hébergeur du site.</p>
    <p>
      Une copie de vos informations est conservée localement sur votre navigateur pour
      faciliter l'édition successive de plusieurs courriers. Si vous souhaitez supprimer
      cette copie locale, cliquez simplement sur le bouton ci-dessous :
    </p>
    <button @click.prevent="deleteData">Supprimer mes données…</button>
  </section>
  <section class="width--xnarrow my-2">
    <h2>Contribuer à Administrans</h2>
    <p>Administrans est développé par Agate et Emy, sur notre temps libre. Nous faisons de notre mieux, mais il n'est pas impossible qu'il existe des bugs ou qu'il manque des fonctionnalités qui vous paraissent importantes.</p>
    <p>
      Si vous souhaitez nous poser une question, signaler une anomalie, suggérer une amélioration, participer ou suivre le développement, vous pouvez :
    </p>
    <ul>
      <li>Consulter la <a href="https://github.com/agateblue/administrans">page GitHub du projet</a></li>
      <li>Écrire un mail à <a href="mailto:administrans@agate.blue">administrans@agate.blue</a></li>
    </ul>
    <p>
      Merci beaucoup et prenez soin de vous &lt;3
    </p>
  </section>
</template>