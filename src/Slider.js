function Sliders(){
    return(

        
<div class="main">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div id="MiCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#MiCarousel" data-slide-to="0" className="carousel-pagination active"></li>
                        <li data-target="#MiCarousel" data-slide-to="1" className="carousel-pagination"></li>
                        <li data-target="#MiCarousel" data-slide-to="2" className="carousel-pagination"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-6 div-l">
                                    <div className="carousel-img" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg)' }} >
                                        <h1 className="carousel-title">Tecnologia</h1>
                                    </div>
                                </div>
                                <div class="col-md-6 div-r">
                                    <h3>Subtitulo 1</h3>
                                    <hr/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur officiis voluptatem vel blanditiis. Nam enim quidem debitis aliquid maxime perferendis repudiandae similique, explicabo, quam minus tenetur cupiditate maiores ea.</p>
                                    <button class="btn btn-primary">Presiona el boton</button>
                                </div>
                            </div>                                
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-md-6 div-l">
                                    <div className="carousel-img" style={{backgroundImage:' url(https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_960_720.jpg)'}}>
                                        <h1 className="carousel-title">Gastronomia</h1>
                                    </div>
                                </div>
                                <div class="col-md-6 div-r">
                                    <h3>Subtitulo 2</h3>
                                    <hr/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur officiis voluptatem vel blanditiis. Nam enim quidem debitis aliquid maxime perferendis repudiandae similique, explicabo, quam minus tenetur cupiditate maiores ea.</p>
                                    <button class="btn btn-primary">Presiona otro boton</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-md-6 div-l">
                                    <div className="carousel-img" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/01/22/16/42/eiffel-tower-1156146_960_720.jpg)'}}>
                                        <h1 className="carousel-title">Cultura</h1>
                                    </div>
                                </div>
                                <div class="col-md-6 div-r">
                                    <h3>Subtitulo 2</h3>
                                    <hr/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur officiis voluptatem vel blanditiis. Nam enim quidem debitis aliquid maxime perferendis repudiandae similique, explicabo, quam minus tenetur cupiditate maiores ea.</p>
                                    <button class="btn btn-primary">Presiona otro boton</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev carousel-controls" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next carousel-controls" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default Sliders;