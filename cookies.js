
//获取cookie //一个参数通过名字来获取值name
				
function getCookie(c_name){
	//假如存在cookie
	console.log(document.cookie);
	if (document.cookie.length>0){
		//返回名字的出现的位置
		c_start=document.cookie.indexOf(c_name + "=");
		console.log(c_start);
		//如果存在name
		if (c_start!=-1){ 
			//出现位置 等于他出现位置加上name的长度加1  开始位置  name=dddd;
			c_start=c_start + c_name.length+1; //5
			//从c_start位置找到; 
			c_end=document.cookie.indexOf(";",c_start);
			console.log(c_end);
			//一个值时候咱们;返回-1
			if (c_end==-1){
				//c_end变成整个cookie的长度变成9
				c_end=document.cookie.length;
			} 											//从5-9
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return ""
}

//第二种获取cookie
 function getCook(_name){
 	var str="";
 	var cook=document.cookie;
 	console.log(cook);
 	var col=cook.split("; ");
 	  for(x in col){
 	  	 var arr=col[x].split("=");
 	  	 console.log(arr);
 	  	 if(arr[0]==_name){
 	  	 	str=arr[1];
 	  	 	 break;
 	  	 	 console.log(arr[1]);
 	  	 }
 	  }
 	  console.log(str);
 		return str;
 }


//设置cookie  想参数  调用函数输入 名字 值 过期时间
function setCookie(c_name,value,expiredays){
	//获取系统时间
	var exdate=new Date();
	//系统时间设置分钟       系统时间获取分钟  加上用户输入的分钟数
	exdate.setMinutes(exdate.getMinutes()+expiredays);
	document.cookie = c_name + "=" + (value) +
												//转换成格林威治形式的字符串
	((expiredays==null) ? "" : ";expires=" + exdate.toGMTString());
}



//检查cookie
function chkcookies(NameOfCookie)
{
    var c = document.cookie.indexOf(NameOfCookie+"="); 
    if (c != -1){
    	return true;
    }else{
    	return false;
    }
}

//删除cookie   delCookie("age")
function delCookie(name) 
{ 
    var exp = new Date(); 
  //  exp.getTime()获取1970至今的毫秒数
  //至今的毫秒数-1  1988-1 1987
     console.log(exp.getTime()) ;
    exp.setTime(exp.getTime() - 1); //1987
  //调用getcook("age");----28
    var cval=getcook(name); 
    console.log(cval);//28
    if(cval!=null) {		//1987
    	//document.cookie="age=28;expires=(1970年至今的毫秒数-1).toGMTString "
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
       }
} 
