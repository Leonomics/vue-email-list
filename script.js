const app = new Vue({
    el:'#app',
    data:{
        res:'',
    },
    mounted(){
        this.res = this.getAPI()
    },
    methods:{
        getAPI(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                return res;
            })
        }
    }
    
});
