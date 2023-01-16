import React from 'react';

const Home = (props) => {
    return (
        <section id="home">
            <div className="content">
                {props.searchData.map((item, index) => {
                    return <div className="item-container" key={index}>
                        <img src={item.picture} />
                        <h1>{item.name}</h1>
                        <h3>Price: ${item.price}</h3>
                        <h4>Tags: {item.tags.toString().replaceAll(',', ' ')}</h4>
                        <p>Description: {item.about}</p>
                    </div>
                })}
            </div>
        </section>
    );
}

export default Home;