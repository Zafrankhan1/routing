function Routing() {
  return (
    <div>This is routing page</div>
  )
}

// export default Routing;


// Using Arrow function;

const routing=()=>{
    return(
        <div>
        <h2>This is routing page</h2>
        </div>
    )
}

// export default routing;


// NextJS IS A FILE BASED ROUTING 

function name(){
    let fName="Zafran";
    let lName="Khan";

    return(
        <div>
            <h2>{fName} {lName}</h2>
        </div>
    )
};

export default name;