function TableSection(){
    return(
        <div id="trans">
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr key={info.id}>
                    <td>{info.date}</td>
                    <td>{info.description}</td>
                    <td>{info.category}</td>
                    <td>{info.amount}</td>
                </tr>      
            </tbody>
        </table>
    </div>
    )
    }