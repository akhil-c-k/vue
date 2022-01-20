Vue.createApp({
    data()
     {
       return {
           goals: [],
           enterdValue: ''
       };
     },

     methods:{
         addGoal()
          {
              this.goals.push(this.enterdValue)
          }
     }
}).mount('#app')









// const btnEl = document.querySelector('button');
// const inputEl = document.querySelector('input')
// const liestEl = document.querySelector('ul')

// function addGoal() 
//  {
//      const enterdValue  = inputEl.value
//      const listItemEl = document.createElement('li')
//      listItemEl.textContent = enterdValue
//      liestEl.appendChild(listItemEl)
//      inputEl.value = ''
//     }

// btnEl.addEventListener('click',addGoal)