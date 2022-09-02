

export const Nav = ()=>{
    return(
        <div>
            <div style={{display:"flex",justifyContent:"center"}} >
                <label>Search</label>
                <input type = "text" ></input>
            </div>
            <div>
                <h1>Top 10 songs</h1>
                <table style={{width:"1200px"}} >
                    <thead>
                    <tr>
                        <th>Artwork</th>
                        <th>Song</th>
                        <th>Date of release</th>
                        <th>Artist</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src="" ></img></td>
                        <td>Someone you loved</td>
                        <td>July 20212</td>
                        <td>leon </td>
                        <td>5 Satrs</td>
                    </tr>
                    <tr>
                        <td><img src="" ></img></td>
                        <td>Circles</td>
                        <td>May 2022</td>
                        <td>Malone </td>
                        <td>4 Satrs</td>
                    </tr>
                    <tr>
                        <td><img src="" ></img></td>
                        <td>Intention</td>
                        <td>July 2020</td>
                        <td>Justin beiber </td>
                        <td>3 Satrs</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h1>Top 10 Artists</h1>
                <table style={{width:"1200px"}} >
                    <thead>
                    <tr>
                        <th>Artists</th>
                        <th>Date of birth</th>
                        <th>Songs</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>leon</td>
                        <td>Jan 1998</td>
                        <td>Someone you loved</td>
                        
                        
                    </tr>
                    <tr>
                    <td>Malone</td>
                        <td>Jan 2020</td>
                        <td>circles</td>

                    </tr>
                    <tr>
                    <td>Justin Beiber</td>
                        <td>Jan 1996</td>
                        <td>Intention</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}