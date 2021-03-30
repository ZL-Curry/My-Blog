export default {
    data(){
      return{

      }
    },
    methods:{
      navTo(url){
        if(this.$route.path == url) return; 
        this.$router.push(url)
      },
      back(){
        this.$router.go(-1)
      }
    }
}