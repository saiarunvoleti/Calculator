


var operationbutton = document.querySelectorAll('[operation]');
var numberbutton = document.querySelectorAll('[number]');
var acbutton = document.getElementById('all-clear');
var delbutton = document.getElementById('delete');
var equalbutton = document.getElementById('equalto');
var pastvalue = document.getElementById('past-output');
var presentvalue=document.getElementById('present-output');

var preval='';
var pastval='';


//there are 9 nnumber buttons . forEach applied for each and every function when it is clicked
numberbutton.forEach(button => {
button.addEventListener('click', function()
{
	preval = preval+button.innerText ;
	if((preval=='.'))     //check if there is no decimal at starting
	{
		preval = preval.slice(0,-1);    
	}
	if(button.innerText=='.')
	{
		var decpointtest = preval.split('.');      //check if there is no 2 decimals
		//console.log(decpointtest);
		if(decpointtest.length > 2)
		{
			preval = preval.slice(0,-1);
		}
	}
	presentvalue.innerText = preval;
	
})
});

function compute()
{
	var res=0;
	var op1 = parseFloat(pastval.slice(0,-1));     //leaving operator sign at last index
	//console.log(op1);
	if(preval[preval.length -1] >='0' &&  preval[preval.length -1] <='9')
	{
		var op2 = parseFloat(preval);      //if there is no operator sign at last index of preval
	}
	else{
		var op2 = parseFloat(preval.slice(0,-1));   //if there is operator sign at last index of preval
	}
	
	//console.log(op2);

	var operand = pastval[(pastval.length) - 1];    //operator symbol
	//console.log(operand);
	if(op1===null || op2===null)
	{
		res=0;
	}
	else
	{
		switch(operand)
		{
			case '+' : res = op1+op2 ;
						break;
			case '-' : res = op1-op2;
						break;
			case '*' : res = op1*op2 ;
						break;
			case '/' : res = op1/op2;
						break;
			default : res=0;
		}
	}
	var resstr = res.toString();    //converting to string
	return resstr;
}

operationbutton.forEach(button => {
	button.addEventListener('click',function()
	{
		if(pastval===null || pastval==='')      //if there is no pastval  then operator adds at end of it and preval becomes empty
		{
			if(preval!==null && preval!==undefined && preval!=='')
			{
				pastval = preval + button.innerText;
				preval='';
				presentvalue.innerText = preval;
				pastvalue.innerText = pastval;
			}
		}
		else{
			if(preval!==null && preval!==undefined && preval!=='')
			{
				preval = preval+button.innerText;       //if pastval is not empty  then preval adds the operator at the end
				preval=compute();
				pastval = preval + button.innerText;    //the result is kept as the pastval with an usd operator at end
				preval='';
				pastvalue.innerText = pastval;
				presentvalue.innerText = preval;
			}
		}
	})
});


acbutton.addEventListener('click',function()     //acbtn -> empties display
{
	pastval='';
	preval='';  
	pastvalue.innerText = pastval;
	presentvalue.innerText = preval;
});


delbutton.addEventListener('click',function()      //del btn deletes the last value used at preval
{
	if(preval!=='' || preval!==null || preval!==undefined)
	{
		preval = preval.slice(0,-1);
		presentvalue.innerText = preval;
	}
});


equalbutton.addEventListener('click',function()     //if equal to sign after result we get preval and pastval will be empty
{
	if(pastval!=null && pastval!='')
	{
		if(preval!==null)
		{
			preval = compute();
			presentvalue.innerText = preval;
			pastval='';
			pastvalue.innerText = pastval;
		}
	}
});






/**accesing sidebar****/

var buttone = document.getElementById('theme');
var sidebar = document.getElementById('sidebar');

buttone.addEventListener('click',function()
{
	if(sidebar.classList.contains('hide'))
	{
		sidebar.classList.add('show');
		sidebar.classList.remove('hide');
	}
	else
	{
		sidebar.classList.add('hide');
		sidebar.classList.remove('show');
	}
});

var bg = document.body;
var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');
col1.addEventListener('click',function()
{
	bg.style.background = 'linear-gradient(to top left,#b3ffff,#ffe6ff)' ;
});

col2.addEventListener('click',function()
{
	bg.style.background ='linear-gradient(to right ,#00FF6C , aqua)' ;
});

col3.addEventListener('click',function()
{
	bg.style.background = 'linear-gradient(to top left,#b301f0,#ff812f)' ;
});