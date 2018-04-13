function instances(char,str){
// count how many times a character appears in a string
    if (char.length > 1) {
        return new Error('Can only enter 1 character')
    }
    count = 0;
    for (i in str){
        if (str[i] == char){
            count++
        }
    }
    if (count > 5){
        count = 5
    }
    return count
}

function format(char,count){
// format a character by count
    var styles = [,'info','link','success','warning','danger'];
    var style = styles[count];
    if (style !== null){
        return `<span class=\"tag is-${style}\">${char}</span>`
    } else {
        return char
    }
}

function display(kanji,str){
// display characters in kanji string formatted by their count in another string
    k = "";
    for (n in kanji){
        i = instances(kanji[n],str);
        if (i > 0){
            k += format(kanji[n],i);
        } else {
            k += kanji[n];
        }
    }
    return k
}

function includesCount(kanji,str){
// returns how many kanji are present in a string
    n = 0;
    for (i in kanji){
        if (str.includes(kanji[i])){
            n +=1;
        }
    }
    return n
}

function progress(){
// sets up kanji progress display
    done = includesCount(kanji,text);
    total = kanji.length;
    percent = (done/total*100).toFixed(2);
    document.getElementById("percent").innerHTML = `${done} of ${total}<br>${percent}%`
}

function getInput(){
// sets text variable from form input and redisplays content
    text = document.getElementById("input").value;
    run()
}

function setKanji(version){
// sets kanji variable from form input and redisplays content
    kanji = version;
    run()
}

function setText(version){
    // sets kanji variable from form input and redisplays content
        text = version;
        run()
    }

function run(){
    document.getElementById("text").innerHTML = text;
    progress();
    document.getElementById("kanji").innerHTML = display(kanji,text);
}

run()


