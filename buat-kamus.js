
const momentRandom=require("moment-random");var moment=require("moment");moment().format();const write=require("write"),jsonfile=require("jsonfile"),start=moment("01-11-2021","DD-MM-YYYY"),end=moment("30-12-2022","DD-MM-YYYY");momentRandom();const fs=require("fs");var spintax=require("mel-spintax"),diff=require("arr-diff");const select=require("@gizt/selector"),defaultTableStyle="border-spacing: 0 0; border-color: #808080; border-collapse: collapse;",defaultTdStyle="border: 1px solid #2d2d2d; padding: 3px;",defaultTdKeyStyle="background: #F6F4F0; "+defaultTdStyle,defaultThStyle="background: #F6F4F0;"+defaultTdStyle,defaultTrStyle="";function jsonToTableHtmlString(e,t){let l=isObject(e)?objectToArray(e):e;return Array.isArray(l)||(l=[]),arrayToTable(l,t)}function isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function objectToArray(e){if(isObject(e)){let t=[];for(let l in e)t.push({$_key:l,$_value:objectToArray(e[l])});return t}if(Array.isArray(e)){let t=[];for(let l of e)isObject(e)?t.push(objectToArray(e)):t.push(l);return t}return e}function arrayToTable(e,t){return function e(l,r=1){let a=new Set;for(let t=0;t<l.length;t++){const n=l[t];if(isObject(n))Object.keys(n).forEach(e=>a.add(e));else if(Array.isArray(n))return e(n,r+1)}let n=Array.from(a),o=l.map(()=>[]);for(let t=0;t<l.length;t++){const a=l[t];if(isObject(a))for(let l=0;l<n.length;l++){let s=a[n[l]];Array.isArray(s)?o[t][l]=e(s,r+1):isObject(s)?o[t][l]=e(objectToArray(s),r+1):o[t][l]={isKey:"$_key"===n[l],value:s}}else o[t][n.length]={isKey:!1,value:a}}return tableToHtml(n,o,r,t)}(e)}function ensureSemicolon(e){return"string"==typeof e&&e.length>0&&";"!==e[e.length-1]?e+";":e}function getTableStyle(e,t){return`${t>1?"width: 100%;":""}${e}`.replace(/\n\s*/g,"")}function getTdStyle(e,t,l){return`${l&&t?`${ensureSemicolon(t)}`:""}${e}`.replace(/\n\s*/g,"")}function getThStyle(e){return`${e}`.replace(/\n\s*/g,"")}function tableToHtml(e,t,l,{tableStyle:r=defaultTableStyle,trStyle:a=defaultTrStyle,thStyle:n=defaultThStyle,tdKeyStyle:o=defaultTdKeyStyle,tdStyle:s=defaultTdStyle,formatCell:i}={}){return`<table id="elastic_table" class="elastic_table" cellspacing="0" style="${getTableStyle(r,l)}">\n<thead class="elastic_table_head">${e.filter(e=>!e.startsWith("$_")).map(e=>`<th class="elastic_table_th" style="${getThStyle(n)}">${e}</th>`).join("")}</thead>\n<tbody class="elastic_table_body">${t.map(e=>{let t="";for(let l=0;l<e.length;l++){const r=e[l]||"";isObject(r)?t+=`<td class="elastic_table_td" style="${getTdStyle(s,o,r.isKey)}">${"function"==typeof i?i(r.value,r.isKey):r.value}</td>`:t+=`<td class="elastic_table_td" style="${getTdStyle(s)}">${r}</td>`}return`<tr class="elastic_table_tr" style="${a}">${t}</tr>`}).join("")}</tbody>\n</table>`}
const yaml ="---"
var a = JSON.parse(fs.readFileSync("as.txt"));
 function buat(data1) {
    var data = JSON.parse(fs.readFileSync("buat.txt"));
    var Judul = data.text; var Title = Judul; var judul = Judul;
    var dfn = `<dfn>${Judul}</dfn>`;
    var Tags = select('tags', data);
    var Kelas_kata = Object.keys(select('tags', data));
    var panj_kelas = Kelas_kata.length;
    var Date = JSON.stringify(momentRandom(end, start));
    var Submakna = diff(select('*[].text', Tags)); //unik(select('*[].text', Tags)); //unik makna
        var Submakna_html = ``;
        for (var x of Submakna) {
        Submakna_html += `<li>${x}</li>`;
        } Submakna_html += `</ol>`;
    var Submakna_HTML = `<ol> ${Submakna_html}`
    var Dasar = ``;
        if  (data.desc === 'root'){Dasar += "Dasar"}
        if  (data.desc === 'affix'){Dasar += "Imbuhan"}
        if  (data.desc === 'derivative'){Dasar += "Turunan"}
    var Length = Submakna.length
    var menurut = spintax.unspin(`{Dalam|Menurut}`);
    var kbbi = spintax.unspin("{KBBI|Kamus Besar Bahasa Indonesia|Kamus|Istilah Bahasa Indonesia}"); 
    var verb = `masuk {kedalam|dalam} kelas kata kerja, {maka|sehingga} {kamu bisa menggunkannya|bisa digunakan|dapat digunakan} untuk menyatakan {sebuah|suatu} tindakan, proses, keberadaan, pengalaman, atau pengertian dinamis lainnya. {Dengan kata lain|Atau}, untuk menggambarkan {suatu||} {tindakan atau aktivitas|aktivitas atau tindakan} yang dilakukan {oleh|} subjek {sebuah|suatu|} kalimat. Selain itu {|juga} {kata ini|${judul} dapat disertai kata imbuhan, kata benda maupun kata sifat dan di ikuti dengan kata "dengan"`
    var noun = `masuk {kedalam|dalam} kelas kata benda yaitu sebuah kata {untuk|yang digunakan} menunjukan {suatu|sebuah} benda atau {bentuk benda baik benda abstrak maupun konkret|sesuatu yang dibendakan}. {Oleh karena itu| sehingga} kata ${dfn} dapat {digunakan|dijadikan} sebagai subjek, objek, dan pelengkap dalam {sebuah|suatu||} kalimat. Selain itu juga kata {${dfn}|ini} dapat {mengalami perluasan kata|diperluas} {maknanya} dengan cara menambahkan kata hubung seperti "yang" {dan|lalu} dikuti kalimat kata sifat`
    var adverb = `masuk {kedalam|dalam} kelas kata keterangan atau kata tambahan (Adverb) {yakni|yaitu} {sebuah|} kata yang {dipergunkan|digunakan} untuk  menerangkan {suatu|sebuah} makna/arti kata kerja, kata sifat , atau kata keterangan {|lainnya]. {kata ${dfn}|selain itu} juga {dapat|bisa} digunakan untuk menerangkan kata depan dan kata penghubung`
    var konten = ``
    var judulhugo = ``
    kelas = []
    var kelas_length = panj_kelas;
    var kelas_kontent = ``; for(let kontn of kelas){ kelas_kontent += kontn}
    tabel = {}
    var penjelasan = ``
    var kesimpulan = ``
    tabel.jenis_kata = Dasar
            if(Tags.n !== undefined){
                    tabel.Noun = select("n[].text", Tags);
                    kelas.push("Noun ");
                    penjelasan += spintax.unspin(noun);     
                }
                if(Tags.adv !== undefined){
                    tabel.Adverb = select("adv[].text", Tags)
                        kelas.push("Adverb ")
                        penjelasan += `{${adverb}}`
                }
                if(Tags.v !== undefined ){ 
                    tabel.Verb = select("v[].text", Tags)
                        kelas.push("Verb ")
                            kelas.pus= "Verb"
                            penjelasan += `{${verb}}`  
                }
                if(Tags.adj !== undefined ){ 
                    tabel.Adjective = select("adj[].text", Tags)
                        kelas.push("Adjective ")   
                }  
                if(Tags.pronoun !== undefined ){ 
                    tabel.pron = select("pron[].text", Tags)   
                        kelas.push ("Pronoun ")
                }  
                if(Tags.pre !== undefined ){ 
                    tabel.Preposition = select("pre[].text", Tags)
                        kelas.push("Preposition " )  
                }  
                if(Tags.k !== undefined ){ 
                    tabel.Conjunction = select("k[].text", Tags)
                        kelas.push("Conjunction ")   
                }  
                if(Tags.i !== undefined ){ 
                    tabel.Injection = select("i[].text", Tags)
                        kelas.push("Injection ")   
                }  
                if(Tags.num !== undefined ){ 
                    tabel.Numeral = select("num[].text", Tags)
                        kelas.push("Numeral ")   
                }
                if(Tags.l !== undefined ){ 
                    tabel.Lain_lain = select("l[].text", Tags)
                        kelas.push("Lain-lain ")   
            }


var kontenmulti =``
    
            if (kelas_length === 1){
                kontenmulti += spintax.unspin(`<p>${menurut} ${kbbi}, kata ${judul} merupakan kata ${Dasar}, yang ${penjelasan}</p>`)
            }else
                {
                kontenmulti += spintax.unspin(`<p>${menurut} ${kbbi}, kata ${judul} merupakan kata ${Dasar}, yang di bagi kedalam ${kelas_length} kelas kata(${kelas})</p>`)
            }

       
    
    var tabel_html = jsonToTableHtmlString((tabel), {tableStyle:"",trStyle:"",thStyle:"",tdStyle:"",tdKeyStyle:""});       
        if(Length !== 1){             
            var kontenfix = spintax.unspin(`<h2>{Makna|Arti|} Kata ${dfn}</h2>
            <p>Berikut {ini|adalah|ini adalah|merupakan} {beberapa|${Length}} {arti|makna} {yang dimilik|dari} kata ${dfn}</p>
            ${Submakna_HTML}
            <h2>Tabel</h2>
             <p>Beriku ini adalah tabel untuk {pembagian jenis dan kelas kata|menjelaskan } ${dfn}`) + tabel_html;
             
               
        konten += kontenmulti + kontenfix 
        judulhugo += spintax.unspin(`title : {Arti Kata|${Length} Arti Kata|} ${Title} Dalam {KBBI|Kamus Besar Bahasa Indonesia}`)
        } 

    else {
        let konten_1 = spintax.unspin(`${menurut} ${kbbi} {kata|istilah|} ${dfn} mempunyai {arti|makna} ${Submakna}`)
        var konten_2 = spintax.unspin(`${menurut} ${kbbi} {arti|makna} {kata|istilah|} ${dfn} adalah  ${Submakna}`)        
        var qesimpulan = `<p>{${konten_1}|${konten_2}}</p>`
        var qesimpulan = spintax.unspin(qesimpulan)
        konten += `${qesimpulan}`
        judulhugo += spintax.unspin(`title : {${Title} Adalah | Arti Kata ${Title}|Arti Kata ${Title} ${menurut}  ${kbbi}}`)            
        }         
        var Front_matter = `${yaml}\n${judulhugo}\nPublish_Date : ${Date}\ndate : ${Date}\nkata : ${Judul}\ntags : ${JSON.stringify(kelas)}\nmakna : ${JSON.stringify(Submakna)}\ntype : KBBI\ncategories : ["KBBI", ${JSON.stringify(Dasar)}]\n${yaml}\n`
        write.sync(Title+".html", Front_matter+konten, {newline : true})
        console.log(Title)
}
 var ancuk = JSON.parse(fs.readFileSync("array.json"));
ancuk.forEach(buat)
    


