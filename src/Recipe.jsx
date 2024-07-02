function Recipe(){
    const alpha = ["A","B","C","D","E","F","G","H"]
    var num = 0
    return(
        <div>
            {
                alpha.map(item=>{
                    return(
                        <div className="box" key={num++}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Recipe