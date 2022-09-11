var count = 0 ;
var hr = 0 ;
var min = 0 ;
var sec = 0 ;
var state = true;
function start(){
    state = true;
    watch();
}

function stop(){
    state = false;
}

function reset(){
    count = 0;
    min = 0;
    sec = 0;
    hr = 0;
    state = false;
    // watch();
    document.getElementById('count').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('hr').innerHTML = '00';   
}



function watch(){
    if(state == true){
        count = count + 1;
        
        if(count == 100){
            sec++;
            count = 0 ;
        }
        if(sec == 60){
            min++;
            count = 0;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
            count = 0;
        }
       
        

        var str_count = count;
        var str_hr = hr;
        var str_min = min;
        var str_sec = sec;
        
        if(count < 10) {
            str_count = "0" + str_count;
        }
        if(sec < 10) {
            str_sec = "0" + str_sec;
        }
        if(min < 10) {
            str_min = "0" + str_min;
        }
        if(hr < 10) {
            str_hr = "0" + str_hr;
        }
        
        document.getElementById('count').innerHTML = str_count;
        document.getElementById('sec').innerHTML = str_sec;
        document.getElementById('min').innerHTML = str_min;
        document.getElementById('hr').innerHTML = str_hr;
        
        setTimeout( 'watch()' , 10);


}

}