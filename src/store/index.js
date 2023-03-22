import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const storeData = {
    state: {
        todos: [],
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
    actions: {
        async deleteTodo({commit}, todoId){
            try { 
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                commit('DELETE_TODO', todoId)
            } catch (error) {
                console.log(error)
            }
        },
        async addTodo({commit}, newTodo){
            try {
                await axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
                commit('ADD_TODO',newTodo);
            } catch (error) {
                console.log(error)
            }
 
        },
        async getTodos({commit}){
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                commit('SET_TODOS',response.data)
            }catch(error){
                console.log(error);
            } 
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
        },
        DELETE_TODO(state, todoId){
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, newtodo){
            state.todos.push(newtodo)
        },
        SET_TODOS(state, todos){
            state.todos = todos
        }
    }
}

const store = new Vuex.Store(storeData);
export default store;