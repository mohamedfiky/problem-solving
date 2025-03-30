/*
    Link: https://www.codewars.com/kata/514a024011ea4fb54200004b

    Description:

        Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

        * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
        * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
        * url = "https://www.cnet.com"                -> domain name = cnet"



*/


function domainName(url){

    let arr = url.split("//");
    
    let lastIndex = arr[0].length -1 ;

    if(arr[0][lastIndex] == ":"){
        arr.shift();
    }

    let  newArr = arr.join("").split(".");

    if(newArr[0] == "www"){
        newArr.shift();
    }

    return newArr[0] ;
  }



console.log(domainName("http://www.google.co.jp..ytr.www.http://www.hghghg.com"));
console.log(domainName("google"));
console.log(domainName("www.google_google.com"));
console.log(domainName("http://google.com"));