import { Link } from "react-router-dom"

export let Navbar = () => {

    return (



        <header class="navbar navbar-expand-lg">
            <div class="container">
                <a href="#" class="navbar-brand">
                    <h1 style={{color: "black"}}>BuildScape</h1>
                </a>
                <button class="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse"
                    data-bs-target="#menu"></button>
                <nav class="collapse navbar-collapse justify-content-end" id="menu">
                    <ul class="navbar-nav col-12 col-lg-8 text-capitalize">
                        <Link to={"/"} class="nav-item"><a href="javascript:void(0);" class="nav-link pe-5">Home</a></Link>
                        <Link to={"/about"} class="nav-item"><a href="javascript:void(0);" class="nav-link pe-5">About</a></Link>
                        <Link to={"/contact"} class="nav-item"><a href="javascript:void(0);" class="nav-link pe-5">Contact</a></Link>
                    </ul>
                    <button class="btn-1 text-capitalize">contact us</button>
                </nav>
            </div>
        </header>




    )

}
