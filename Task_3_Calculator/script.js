const boxes = document.querySelectorAll('.btn');
const disp = document.getElementById("monitor");

const calculate = () => {
    let mainStr = disp.value;
    let sum = 0;
    let str = "";
    let i = 0;
    while( i < mainStr.length && ((mainStr.charCodeAt(i) > 47 && mainStr.charCodeAt(i) < 58) || mainStr.charAt(i) === '.'))
    {
        str+= mainStr.charAt(i);
        i++;
    }
    if(mainStr.charAt(i) === "+")
    {
        i++;
        sum = Number.parseFloat(str);
        str = "";
        while( i < mainStr.length && ((mainStr.charCodeAt(i) > 47 && mainStr.charCodeAt(i) < 58) || mainStr.charAt(i) === '.'))
        {
            str+= mainStr.charAt(i);
            i++;
        }

        return sum + Number.parseFloat(str);
    }
    else if(mainStr.charAt(i) === "X")
    {
        i++;
        sum = Number.parseFloat(str);
        str = "";
        while( i < mainStr.length && ((mainStr.charCodeAt(i) > 47 && mainStr.charCodeAt(i) < 58) || mainStr.charAt(i) === '.'))
        {
            str+= mainStr.charAt(i);
            i++;
        }
        return sum * Number.parseFloat(str);
    }
    else if(mainStr.charAt(i) === "-")
    {
        i++;
        sum = Number.parseFloat(str);
        str = "";
        while( i < mainStr.length && ((mainStr.charCodeAt(i) > 47 && mainStr.charCodeAt(i) < 58) || mainStr.charAt(i) === '.'))
        {
            str+= mainStr.charAt(i);
            i++;
        }
        return sum-Number.parseFloat(str);
    }
    else if(mainStr.charAt(i) === "÷")
    {
        i++;
        sum = Number.parseFloat(str);
        str = "";
        while( i < mainStr.length && ((mainStr.charCodeAt(i) > 47 && mainStr.charCodeAt(i) < 58) || mainStr.charAt(i) === '.'))
        {
            str+= mainStr.charAt(i);
            i++;
        }
        
        return sum / Number.parseFloat(str);
    }

};


boxes.forEach(box => {
    box.addEventListener('click', async function handleClick() {
  
      setTimeout(()=>{
        box.setAttribute('style', 'transform: scale(1);');
      } , 200)
      box.setAttribute('style', 'transform: scale(0.9);');
      if(box.innerHTML == "AC")
      {
        disp.value = null;
      }

      else if(box.innerHTML == "=")
      {
        let x = calculate();
        disp.value = x;
      }
      else
      {
        disp.value+=box.innerHTML;
      }
    });
  });
