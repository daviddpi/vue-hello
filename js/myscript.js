let main = new Vue({

    el: "#root",
    data: {
        titolo: "Ciao sono un titolo scritto su js",
        miaImmagine: "https://www.wallpapertip.com/wmimgs/83-838195_javascript-javascript-hd.png",
        myClassJs: "text-success fw-bold pt-5 text-center",
        testoP: "Sono un paragrafo scritto con js e anche la classe e inserita tramite js",
        myBoxClass: ""
    },
    methods:{
        changeColorBox: () =>{
            this.myBoxClass = "mb-5 bg-red"
            console.log(myBoxClass);
        }
    }
});