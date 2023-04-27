import React, {useState, useEffect} from 'react'
import TableList from './TableList';
import Search from './Search';
import AdditionForm from './AdditionForm';

//the DisplayContainer function acts as a component where all the major functions of the app will go
function TransactionManager() {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")


//We encorporate useEffect and fetch to get data from our server the
    useEffect(()=>{
        fetch("http://localhost:3000/transactions")
        .then((resp)=> resp.json())
        .then((data)=> setTransactions(data))
        .catch((error) => console.error('Error fetching transactions:', error));
    }, []);

    //The event handler for the search function
    function handleSearch(e){
        setSearch(e.target.value)
        setQuery(e.target.value.toLowerCase())
    }

   //Add new transaction after the form has been submitted
   function addTransaction(e, newTransaction){
        let id = transactions.length + 1;
        newTransaction = {...newTransaction, id}
        e.preventDefault();
        e.target.reset();

//Put in a POST method to update our data
        fetch("http://localhost:3000/transactions",{
        method: "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(newTransaction)
   })
   .then((response) => response.json())
   .then((data) => {
    //here we set the data into the transactions variable 
    setTransactions((transactions)=> [...transactions, data]);
   });
   }

     //The filter function to give us the desired components
     const filteredtransactions= transactions.map((transaction)=>transaction.category.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
        <Search search={search} handleSearch={handleSearch} />
        <TableList transactions={filteredtransactions} />
        <AdditionForm addTransaction={addTransaction} />
    </div>
  )
}

export default TransactionManager;