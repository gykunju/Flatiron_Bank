import { useState } from "react"
import '../css/addition.css'

function AddTransaction(transactions, setTransactions){
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    
    function handleSubmit(e){
        e.preventDefault()
        const getNextId = ((id) => () => ++id)(3)
        const newTransaction = {
            "id":getNextId(),
            "date":{date},
            "description":{description},
           "category":{category},
            "amount":{amount}
    }

    const updatedTransactions= [...transactions, newTransaction]
    setTransactions(updatedTransactions)
    }

    return(
        <div id="footer">
            <form onSubmit={handleSubmit} id="form">
             <h3>Transactions add</h3>   
            
            <label >Date:
                    <input type="date" id="date" value={date} placeholder="date" onChange={(e) => setDate(e.target.value)}/>
                </label>
                <br/><br/><br/><label>
                     Description:
                    <input type="text" id="description" value={description}  placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <br/><br/><br/><label>
                    Category:
                    <input type="text" id="category" value={category}  placeholder="category" onChange={(e) => setCategory(e.target.value)}/>
                </label>
                <br/><br/><br/><label>
                    Amount:
                    <input type="number" di="amount" value={amount}  placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
                </label>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
export default AddTransaction