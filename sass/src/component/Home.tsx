const LandImg = require("../images/home-2-img- float-landing.png")

const LandingP = () => {
    return (
        <div>
            <div>
                <h1>Make Your Marketing Reak</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi eaque delectus ducimus dolore. Saepe temporibus, alias, voluptatum suscipit, molestias impedit optio modi voluptatibus ex deleniti possimus commodi nemo repudiandae!</p>
            </div>
            <button>Learn More</button>
            <button>Sign Up</button>
            <div>
                <img src={LandImg} alt="" />
            </div>

        </div>
    )
}

export { LandingP }