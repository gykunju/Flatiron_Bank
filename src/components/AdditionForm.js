import { useState } from "react"
import '../css/addition.css'

function AdditionForm({addTransaction}){
    const [data, setData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0,
    });
       
    function handleSubmit(e){
        setData((data) => {
           return{...data, [e.target.name]: e.target.value} 
        });
     }

 return(
        <div  id="footer">
            <form className="form" onSubmit={(e) => addTransaction(e, data)} >
             <h3>Transactions add</h3>   
            
            <label >Date:
                    <input type="date" placeholder="date" onBlur = {handleSubmit}/>
                </label>
                <br/><br/><br/><label>
                     Description:
                     <input type="text" placeholder="type" onBlur = {handleSubmit}/>
                </label>
                <br/><br/><br/><label>
                    Category:
                    <input type="text" placeholder="category" onBlur = {handleSubmit}/>
                </label>
                <br/><br/><br/><label>
                    Amount:
                    <input type="number" placeholder="amount" onBlur = {handleSubmit}/>
                </label>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
export default AdditionForm;