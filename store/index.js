import Vuex from 'vuex';

const createStore = () => {
     return new Vuex.Store({
          state: {
               page: 'index',
               oldPage: null,
               headerAnime: null
          },
          mutations: {
               updatePage(state, pageName) {
                    
                    state.oldPage = state.page; 
                    state.page = pageName;

               },
               setAnime(state, anime) {
                    state.headerAnime = anime;

                    if (state.page !== 'index') {
                         anime.direction = 'normal';
                         anime.play();
                    } 
               }
          }
     })
}

export default createStore;