import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    homePageHeading: 'nmm',
    name: "jack"
  },
  getters: {
    getHeading(state){
      return state.homePageHeading + " ight, now we used a getter"
    }
  },
  mutations: {
    girlName(state){
      state.name = "Jane"
    },
    setHeading(state, heading){
      state.name = heading
    },
    actualHeading(state, heading){
      state.homePageHeading = heading
    }
  },
  actions: {
     getInfo({commit}){
      axios('https://naeemaomar.github.io/VueEOMPData/').then(data => {
        const newHeading = data.data.Home[0].heading;
        // console.log(data.data.Home[0].heading);
        commit('setHeading', newHeading);
    })
    },
    setHomePageheading({commit}){
      axios('https://naeemaomar.github.io/VueEOMPData/').then(
        heading =>{
          const actualHeader = heading.data.Home[0].heading;
          commit('actualHeading', actualHeader);
        }
      )
    }
    // Alternatively:
    // async getInfo(commit){
    //   try{
      // NOTE: .get is not required when using
    //   await axios.get('https://naeemaomar.github.io/VueEOMPData/').then(data => {console.log(data.data.Home[0])})
    //    } catch(error){console.log("Error has been caught")};
      
    // }
  },
  modules: {
  }
})
