import React from 'react'

const Carousel = ({ isDarkMode, loading, filterposts }) => {
    return (
        <>
            <div className='d-flex justify-content-center pb-2'>
                <div id="carouselExampleCaptions" className={`carousel slide ${isDarkMode ? 'bg-secondary text-white' : 'bg-body-secondary text-black'}`} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" className='bg-dark active' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className='bg-dark' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" className='bg-dark' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {/* Iterate over topItems and render each item */}
                        {filterposts.map((item, index) => (
                            <div key={index} className={`carousel-item text-center p-4 ${(index === 0) ? 'active' : ''}`} data-bs-interval="2000">
                                <h1>&quot;{item.title}&quot;</h1>
                                <small>{item.content.slice(0, 50)}...</small>
                                <p>{new Date(item.published).toLocaleDateString()}</p>
                                <p>-- <i>{item.author}</i></p>
                                <a className='btn btn-primary my-4' href={item.url} target='_blank' rel="noreferrer">Read More</a>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel
