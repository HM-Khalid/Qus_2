function repetativeChar(word)
{
	count = 0;
  arr=[];
  //console.log(word.length);
  
  for(var i=0; i<word.length-1; i++)
  {
  	current_count = 1;
    for (var j=i+1; j<word.length; j++)
    {
    	if(word[i] !== word[j])
      {
      	break;
      }
      current_count++;
     
      if(current_count > count)
      {
       	//console.log(current_count);
      	count = current_count;
      	arr =[];
        arr.push(word[j].repeat(current_count));
      }
    }
  }
  
  console.log(arr.toString());
}

repetativeChar('aanyyeeeddk');
repetativeChar('btyyrjp');