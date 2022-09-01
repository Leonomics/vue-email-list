const app = new Vue({
    el:'#app',
    data:{
        
        emailList:[],
    },
    mounted(){
        this.getAPI()
    },
    methods:{
        getAPI(){
            for(let i=0; i<10; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                console.log(res.data.response)
                this.emailList.push(res.data.response);
            })
            }
            
        }
        
    }
    
});
