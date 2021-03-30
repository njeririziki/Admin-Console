const { message } = require("antd");

export const convert =(categories,delimiter=',')=>{
   
  const titles= categories.slice(0, categories.indexOf('\n')).split(delimiter)
   const rows= categories.slice(categories.indexOf('\n') + 1).split('\n');

 return rows.map(row=>{
     const values = row.split(delimiter);
     if(values[0].length== 0){
     const group=(arr)=> arr.reduce((object,curr,i)=>(   
     object[curr]= values[i],object) ,{})
         return group(titles)
     }
     return message.error(` There is no data in this file`)
 })
} 

export const checker= (categories,compare)=> {
    const titles= categories.slice(0, categories.indexOf('\n'));

    console.log({titles, compare});

    const isMatched=(imp,req)=>{
        return imp.split(',').every(title=>{
         return req.split(',')
         .map(item=> item.trim())
         .includes(title.trim())
         });
        }
    if(isMatched(titles,compare)){ 
        message.success('successfully submitted')
        const x = convert(categories);
        console.log(x)
        return x;
           
    }
 return message.error(` The categories do not match ${compare}`)
}