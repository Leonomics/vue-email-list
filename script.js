const app = new Vue({
    el:'#app',
    data:{
        
    },
    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res);
                
            })
    }
});

