import Vue from 'vue'
import Vuex from 'vuex'
import { Auth, API } from 'aws-amplify';
import { createEmail } from '../graphql/mutations';
import { listEmails } from '../graphql/queries';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: null,
    message: { text: '', status: false,},
		isLoading: false,
    isOverlay: false,
    emails: [],
  },
  getters: {
    profile: state => state.profile,
    message: state => state.message,
		isLoading: state => state.isLoading,
		isOverlay: state => state.isOverlay,
    emails: state => state.emails,
  },
  actions: {
    async addEmail(context, payload) {
      try {
        // api call
        const { data } = await API.graphql({
          query: createEmail,
          authMode: 'AWS_IAM',
          variables: {input: payload},
        });
        // console.log(data)
        await context.dispatch('setMessage', {text: 'Successful!', status: true});
        return data; 
      } catch (error) {
        await context.dispatch('setMessage', {message: error.message || `Email add failed!`, status: false});
        return;
      }
    },
    async getEmails(context) {
      try {
        // api call
        const emails = await API.graphql({
          query: listEmails
        });
        console.log(emails);
        context.commit('GET_EMAILS', emails.data.listEmails.items);
        return emails;
      } catch (error) {
        await context.dispatch('setMessage', {text: error.message || `Email fetch failed!`, status: false});
        return;
      }
    },
    async reset(context, payload) {
      try {
        const { oldPassword, newPassword } = payload;
        console.log(oldPassword, newPassword);
        console.log(Auth)
        Auth.currentAuthenticatedUser()
          .then(user => {
          console.log(user);
          return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
          .catch(err => console.log(err));
        await context.dispatch('setMessage', {text: 'Change successful!', status: true});
      } catch (error) {
        console.log('error signing in', error);
      }
    },
    async login(context, payload) {
      try {
        const { username, password } = payload;
        const user = await Auth.signIn(username, password);
        console.log(user);
        const userInfo = await Auth.currentAuthenticatedUser();
        console.log('userInfo');
        context.commit('SET_PROFILE', userInfo);
        return user;
      } catch (error) {
        console.log('error signing in', error);
      }
      // try {
      //   console.log(payload);
      //   const { username, password } = payload;
      //   await Auth.signIn(username, password);
      //   // const user = await Auth.signIn(email, password);
      //   // if (!user) return;
      //   const userInfo = await Auth.currentAuthenticatedUser()
      //   context.commit('SET_PROFILE', userInfo);
      //   await context.dispatch('setMessage', {text: 'Login successful!', status: true});
      //   console.log('userInfo');
      //   return userInfo;
      // } catch (error) {
      //   console.log(error);
      //   context.dispatch('setMessage', { text: error.message, status: false });
      //   return;
      // }
    },
    async logout(context) {
      try {
        context.commit('SET_PROFILE', null);
        await Auth.signOut();
        await context.dispatch('setMessage', {text: `Logout successful!`, status: true});
        return;
      } catch (error) {
        context.dispatch('setMessage', { text: error.message, status: false });
        return;
      }
    },
    async setProfile(context) {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      const userInfo = await Auth.currentUserInfo();
      console.log(userInfo)
      context.commit('SET_PROFILE', userInfo);
    },
		async setMessage({ commit }, payload) {
			commit('SET_MESSAGE', payload);
		},
    async isLoading({ commit }, payload) {
			commit('IS_LOADING', payload);
		},
    async isOverlay({ commit }, payload) {
			commit('IS_OVERLAY', payload);
		},
  },
  mutations: {
    GET_EMAILS(state, emails) {
      state.emails = emails;
    },
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
		SET_MESSAGE(state, payload) {
			state.message.text = payload.text || '';
			state.message.status = payload.status || '';
		},
    IS_LOADING(state, isLoading) {
			state.isLoading = isLoading;
		},
    IS_OVERLAY(state, isOverlay) {
			state.isOverlay = isOverlay;
		},
  },
  modules: {
  }
})
