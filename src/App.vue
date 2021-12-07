<template>
    <div id="app" class="flex bg-wall font-sans flex-col min-h-screen overflow-x-hidden dark:bg-dwall">
        <Header/>
        <main class="container mx-auto">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
console.log('oooooooooo.                         ooooo   ooooo              .o8      \n' +
    '`888\'   `Y8b                        `888\'   `888\'             "888      \n' +
    ' 888      888  .ooooo.  oooo    ooo  888     888  oooo  oooo   888oooo.     Using DevHub at work? Work for Devhub.\n' +
    ' 888      888 d88\' `88b  `88.  .8\'   888ooooo888  `888  `888   d88\' `88b     https://github.com/hose1021/DevHub\n' +
    ' 888      888 888ooo888   `88..8\'    888     888   888   888   888   888\n' +
    ' 888     d88\' 888    .o    `888\'     888     888   888   888   888   888            Made with ❤ by Hose\n' +
    'o888bood8P\'   `Y8bod8P\'     `8\'     o888o   o888o  `V88V"V8P\'  `Y8bod8P\'')

import Header from './components/include/Header'
import Footer from './components/include/Footer'

export default {
    name: 'app',
    components: {
        Header,
        Footer
    },
    metaInfo: {
        // all titles will be injected into this template
        titleTemplate: '%s | DevHub'
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
</style>
