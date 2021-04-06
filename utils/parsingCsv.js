const { message } = require("antd");

// this function converts the document to an array
// titles variable breaks down the first row of the document
// rows variable breaks down the other rows of the document
// it returns the array of values in the document
export const convert =(categories,delimiter=',')=>{
  
  const titles= categories.slice(0, categories.indexOf('\n')).split(delimiter)
   const rows= categories.slice(categories.indexOf('\n') + 1).split('\n');
   console.log(rows[0])
   // checking if there is data in the file
   if(rows[0].length < 2){
    return console.log('there is no data in this file')
     } 
     return rows.map(row=>{
     const values = row.split(delimiter);
     const group=(arr)=> arr.reduce((object,curr,i)=>(   
     object[curr]= values[i],object) ,{});
     console.log('There is data in this file')
         return group(titles)
   
 })
} 

// isMatched function compares the titles with the required titles 
// if true calls the convert function 
export const checker= (values,compare)=> {
    const titles= values.slice(0, values.indexOf('\n'));

    console.log({titles, compare});

    const isMatched=(imp,req)=>{
        return imp.split(',').every(title=>{
         return req.split(',')
         .map(item=> item.trim())
         .includes(title.trim())
         });
        }
    if(isMatched(titles,compare)){ 
        message.success('the categories match')
        const x = convert(values);
        console.log('converted document')
        return x;
           
    }
 return message.error(` The categories do not match ${compare}`)
}