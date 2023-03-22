import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeData = {
    state: {
        todos: [
            {id: 1, title: 'Viec1', completed: false }, 
            {id: 2, title: 'Viec2', completed: false }, 
            {id: 3, title: 'Viec3', completed: false }, 
            ],
        auth: {
            isAuthenticated: false
        },
        change: {
            onAbout: false
        }
    },
    getters: {
        doneTodos:state => state.todos.filter(todo => todo.completed),
        progress:(state,getters) => {
            return Math.round(getters.doneTodos.length / state.todos.length *100)
        }
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        MARK_COMPLETED(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId){
                    todo.completed = !todo.completed
                    return todo
                }
            })
        },
        CHANGE_TO_ABOUT(state){
            if (state.auth.isAuthenticated){
                state.change.onAbout = !state.change.onAbout
            }
        }
    }
}

const store = new Vuex.Store(storeData);
export default store;