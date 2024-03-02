import heroImg from "../../public/heroImg.png"

function Hero(){
    return (
        <div className="section">
        <div className="container">
            <h1 className="primary-heading">Save on Mac or iPad for university.</h1>
            <h2  className="secondary-heading">Plus get Airpods with Mac and Apple Pencil with iPad.</h2>
            <button>Shop now </button>
            <div className="img-wrapper">
                <img src={heroImg} alt="" />
            </div>
        </div>
     </div>
    )
}

export default Hero