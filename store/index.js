export const actions = {
   nuxtServerInit({ dispatch }) {
       if(this.$cookies.get('theme') === 'dark') {
           dispatch('theme/changeTheme','dark')
       }
   }
}

console.log('oooooooooo.                         ooooo   ooooo              .o8      \n' +
    '`888\'   `Y8b                        `888\'   `888\'             "888      \n' +
    ' 888      888  .ooooo.  oooo    ooo  888     888  oooo  oooo   888oooo.     Using DevHub at work? Work for Devhub.\n' +
    ' 888      888 d88\' `88b  `88.  .8\'   888ooooo888  `888  `888   d88\' `88b     https://github.com/hose1021/DevHub\n' +
    ' 888      888 888ooo888   `88..8\'    888     888   888   888   888   888\n' +
    ' 888     d88\' 888    .o    `888\'     888     888   888   888   888   888            Made with ❤ by Hose\n' +
    'o888bood8P\'   `Y8bod8P\'     `8\'     o888o   o888o  `V88V"V8P\'  `Y8bod8P\'')
