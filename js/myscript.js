let main = new Vue({

    el: "#root",
    data: {
        titolo: "Ciao sono un titolo scritto su js",
        miaImmagine: "https://www.wallpapertip.com/wmimgs/83-838195_javascript-javascript-hd.png",
        myClassJs: "text-success fw-bold pt-5 text-center",
        testoP: "Sono un paragrafo scritto con js e anche la classe e inserita tramite js",
        myBoxClass: "bg-red",
        testoScritto: "",
    },
    methods:{
        changeColorBox(){
            if(this.myBoxClass == "bg-red"){
                this.myBoxClass = "bg-blu";
            } else if(this.myBoxClass == "bg-blu"){
                this.myBoxClass = "bg-yellow";
            } else if(this.myBoxClass == "bg-yellow"){
                this.myBoxClass = "bg-white";
            } else if(this.myBoxClass == "bg-white"){
                this.myBoxClass = "bg-red";
            }
            console.log(this.myBoxClass);
        }
    }
});