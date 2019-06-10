<template>
    <div id="dropbox">
        <h4> Webpage is created with HTML5 Drag and Drop , Excel file , xlsx.full.js , Vue.js </h4>
        <h5>How to use:</h5> 
        <ol>
            <li>Create Excel file with data...</li> 
            <li>Drag Excel file to drop zone</li> 
            <li>?</li>
            <li>View your Excel file in your client side only website. </li> 
        </ol>
        <div id="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">Drop Here</div>
        <table>
            <thead>
                <tr>
                    <th v-for="(item,key) in state.headers" :key="key"> {{item}}</th>    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in state.tickets" :key="key">
                    <td v-for="(key) in item" :key="key">
                        <label>{{key}}</label> 
                        <p>{{item.key}}</p> 
                    </td>
                </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: "dropbox",
    data(){
        return{
        /** DATA STATE **/
            state:{
                tickets:[{name:"test"}],
                headers:["Test header"]
            }
        }
    },
    methods:{
        /**
        **  Disclaimer: XLSX Code comes from http://oss.sheetjs.com/js-xlsx/
        **  This is just a project to show Vue.js working in conjunction with HTML5 Drag and Drop and XLSX
        **/


        /** HELPERS **/
        get_header_row(sheet) {
            var headers = [] 
            var range = XLSX.utils.decode_range(sheet['!ref']);
            var C, R = range.s.r; /* start in the first row */
            for(C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
                var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */
                var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
                if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);
                headers.push(hdr);
            }
            return headers;
        },
        fixdata(data) {
            console.log(data);
            var o = "", l = 0, w = 10240;
            for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
            o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
            return o;
        },
        workbook_to_json(workbook) {
            var result = {};
            workbook.SheetNames.forEach(function(sheetName) {
                var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                if(roa.length > 0){
                    result[sheetName] = roa;
                }
            });
            return result;
        },
        readerfunction(e){
            var results; 
            var data = e.target.result;
            console.log(e);
            var fixedData = this.fixdata(data), 
            workbook=XLSX.read(btoa(fixedData), {type: 'base64'}), 
            firstSheetName = workbook.SheetNames[0], 
            worksheet = workbook.Sheets[firstSheetName];
            this.state.headers=get_header_row(worksheet);
            results=XLSX.utils.sheet_to_json(worksheet);
            this.state.tickets=results;
            return;
        },
        /** PARSING and DRAGDROP **/
        handleDrop(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log("DROPPED");
            var files = e.dataTransfer.files, i, f;
            console.log(files);
            for (i = 0; i < files.length; ++i) {
                console.log(files.length);
                f = files[i]; 
                console.log(f);
                var reader = new FileReader(),
                name = f.name;
                console.log(e);
                reader.onload = this.readerfunction(e)
                reader.readAsArrayBuffer(f);
            }
        },
        handleDragover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
        /*Testing only*
        var drop=document.getElementById("drop");
        if(drop.addEventListener) {
            drop.addEventListener('dragenter', handleDragover, false);
            drop.addEventListener('dragover', handleDragover, false);
            drop.addEventListener('drop', handleDrop, false);
        }*/
    }
}
</script>
<style>
#drop{
border: 2px dashed #bbb;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    padding: 25px;
    text-align: center;
    font: 20pt bold,"Vollkorn";
    color: #bbb;
}
</style>
