import ella from "./ella.jpg";

function Add(){
    return(
        <div >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative top-[5rem]">
                <h2 className="font-extrabold text-7xl relative left-[8rem] top-[10rem]">Adventure of <br/>
                <span className="text-yellow-300">Healthy Eating</span></h2>
                <img className="" src={ella} alt="Ella" />
            </div>
        </div>
    )
}

export default Add