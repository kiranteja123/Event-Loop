import { useEffect, useState } from "react";

function About() {

    const [userData, setUserData] = useState()

    useEffect(() => {
      fetchUserData();
    }, [])

    const fetchUserData = async () => {
      let data = await fetch('/Json/data.json');
      let res = await data.json();
      setUserData(res);
    }

    return (
        <>
        <div className="container">
         <h4>About</h4>
         {
            userData?.map(ele => {
                return (
                    <div key={ele.id}>
                    <span> { ele.id } </span> - 
                    <label> { ele.name } </label>
                    </div>
                )
            })
         }
         </div>
        </>
    )
}

export default About;