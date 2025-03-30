/*
    Link: https://www.codewars.com/kata/57f8ff867a28db569e000c4a

    Description:

       Modify the kebabize function so that it converts a camel case string into a kebab case.

        "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
        "camelsHave3Humps"  -->  "camels-have-humps"
        "CAMEL"  -->  "c-a-m-e-l"

        Notes:

            the returned string should only contain lowercase letters


*/


function kebabize(str) {
    // return

    let newStr28;
    
    let newStr1    = str.replace(/[0-9]/g,"");


    let newStr2    = newStr1.replace(/[A]/g,"-a");
    let newStr3    = newStr2.replace(/[B]/g,"-b");
    let newStr4    = newStr3.replace(/[C]/g,"-c");
    let newStr5    = newStr4.replace(/[D]/g,"-d");
    let newStr6    = newStr5.replace(/[E]/g,"-e");
    let newStr7    = newStr6.replace(/[F]/g,"-f");
    let newStr8    = newStr7.replace(/[G]/g,"-g");
    let newStr9    = newStr8.replace(/[H]/g,"-h");
    let newStr10   = newStr9.replace(/[I]/g,"-i");
    let newStr11   = newStr10.replace(/[J]/g,"-j");
    let newStr12   = newStr11.replace(/[K]/g,"-k");
    let newStr13   = newStr12.replace(/[L]/g,"-l");
    let newStr14   = newStr13.replace(/[M]/g,"-m");
    let newStr15   = newStr14.replace(/[N]/g,"-n");
    let newStr16   = newStr15.replace(/[O]/g,"-o");
    let newStr17   = newStr16.replace(/[P]/g,"-p");
    let newStr18   = newStr17.replace(/[Q]/g,"-q");
    let newStr19   = newStr18.replace(/[R]/g,"-r");
    let newStr20   = newStr19.replace(/[S]/g,"-s");
    let newStr21   = newStr20.replace(/[T]/g,"-t");
    let newStr22   = newStr21.replace(/[U]/g,"-u");
    let newStr23   = newStr22.replace(/[V]/g,"-v");
    let newStr24   = newStr23.replace(/[W]/g,"-w");
    let newStr25   = newStr24.replace(/[X]/g,"-x");
    let newStr26   = newStr25.replace(/[Y]/g,"-y");
    let newStr27   = newStr26.replace(/[Z]/g,"-z");

    if(newStr27[0] == "-"){
       
       newStr28 = newStr27.replace("-","") ;
       return newStr28 ;
    }
       
    
    return newStr27 ;

  }

  console.log(kebabize('camelsHaveThreeHumps'));
  console.log(kebabize('888camels7Have3Humps'));
  