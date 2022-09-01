const app = new Vue({
    el:'#app',
    data:{
        res:'',
    },
    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.res = res
                
            })
    },
    
});
